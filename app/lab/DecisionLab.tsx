"use client";

import { useMemo, useState } from "react";

type Dimension = "customer" | "economics" | "controls" | "readiness";
type Weights = Record<Dimension, number>;

type Bet = {
  id: string;
  name: string;
  description: string;
  scores: Record<Dimension, number>;
  question: string;
};

const dimensions: { key: Dimension; title: string; help: string }[] = [
  { key: "customer", title: "Customer value", help: "Pain solved and usefulness for the people served" },
  { key: "economics", title: "Economic leverage", help: "Cost-to-serve, efficiency, or durable financial value" },
  { key: "controls", title: "Trust & resilience", help: "Operational safeguards, reliability, and risk reduction" },
  { key: "readiness", title: "Delivery readiness", help: "Confidence in near-term execution and dependencies" },
];

const bets: Bet[] = [
  { id: "usage", name: "Usage intelligence", description: "Help teams see adoption, cost, and exceptions in one place.", scores: { customer: 4, economics: 5, controls: 5, readiness: 3 }, question: "Can teams identify one decision the data would improve this quarter?" },
  { id: "self", name: "Self-service journeys", description: "Remove friction from recurring platform requests.", scores: { customer: 5, economics: 4, controls: 2, readiness: 5 }, question: "Which requests are common enough to standardize safely?" },
  { id: "ai", name: "AI incident assistant", description: "Help support teams triage issues with human oversight.", scores: { customer: 5, economics: 3, controls: 4, readiness: 2 }, question: "Is the answer quality reliable enough for the proposed human-review path?" },
  { id: "refresh", name: "Interface refresh", description: "Improve clarity and usability of existing screens.", scores: { customer: 3, economics: 2, controls: 2, readiness: 5 }, question: "What observed user friction would the refresh remove?" },
];

const presets: { name: string; label: string; weights: Weights }[] = [
  { name: "balanced", label: "Balanced", weights: { customer: 5, economics: 4, controls: 5, readiness: 3 } },
  { name: "speed", label: "Speed to value", weights: { customer: 5, economics: 2, controls: 1, readiness: 5 } },
  { name: "trust", label: "Risk first", weights: { customer: 3, economics: 3, controls: 5, readiness: 1 } },
];

const initialWeights = presets[0].weights;

export function DecisionLab() {
  const [weights, setWeights] = useState<Weights>({ ...initialWeights });
  const [activePreset, setActivePreset] = useState<string>("balanced");
  const [expandedBet, setExpandedBet] = useState<string | null>("usage");

  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  const ranked = useMemo(() => bets.map((bet) => ({
    ...bet,
    score: totalWeight ? dimensions.reduce((sum, dim) => sum + bet.scores[dim.key] * weights[dim.key], 0) / totalWeight : 0,
  })).sort((a, b) => b.score - a.score), [weights, totalWeight]);

  const leader = totalWeight ? ranked[0] : undefined;

  function selectPreset(name: string, nextWeights: Weights) {
    setWeights({ ...nextWeights });
    setActivePreset(name);
  }

  function changeWeight(key: Dimension, value: number) {
    setWeights((current) => ({ ...current, [key]: value }));
    setActivePreset("");
  }

  return (
    <section className="shell pv-workbench" id="lab-controls" aria-labelledby="pv-workbench-title">
      <div className="pv-workbench-header">
        <div><span className="pv-index">THE WORKBENCH</span><h2 id="pv-workbench-title">Choose your priorities.</h2></div>
        <p>Each initiative has illustrative 1–5 ratings. Your weights decide how strongly each dimension counts. Nothing is sent to a server.</p>
      </div>
      <div className="pv-presets" role="group" aria-label="Prioritization presets">
        <span>Start with a lens</span>
        {presets.map((preset) => <button type="button" key={preset.name} className={activePreset === preset.name ? "pv-preset active" : "pv-preset"} onClick={() => selectPreset(preset.name, preset.weights)} aria-pressed={activePreset === preset.name}>{preset.label}</button>)}
      </div>
      <div className="pv-workbench-grid">
        <div className="pv-controls">
          <div className="pv-panel-heading"><span>01 / DECISION CRITERIA</span><span>Weight 0–5</span></div>
          {dimensions.map((dim) => (
            <div className="pv-weight" key={dim.key}>
              <div className="pv-weight-title"><label htmlFor={"weight-" + dim.key}>{dim.title}</label><output htmlFor={"weight-" + dim.key}>{weights[dim.key]}</output></div>
              <p>{dim.help}</p>
              <input id={"weight-" + dim.key} type="range" min="0" max="5" step="1" value={weights[dim.key]} onChange={(event) => changeWeight(dim.key, Number(event.target.value))} aria-valuetext={String(weights[dim.key]) + " out of 5"} />
            </div>
          ))}
          <div className="pv-method-note"><strong>How the score works</strong><p>Weighted average: sum of (rating × weight), divided by the sum of weights. The result stays between 1 and 5. Zero means a criterion is ignored.</p></div>
        </div>
        <div className="pv-ranking">
          <div className="pv-panel-heading"><span>02 / PRIORITIZED OPTIONS</span><span>Illustrative scores</span></div>
          {leader ? <p className="pv-rank-summary" aria-live="polite">Your current first bet: <strong>{leader.name}</strong></p> : <p className="pv-rank-summary" aria-live="polite">Choose at least one non-zero weight to rank the options.</p>}
          <div className="pv-rank-list">
            {ranked.map((bet, index) => (
              <article className={expandedBet === bet.id ? "pv-rank-item expanded" : "pv-rank-item"} key={bet.id}>
                <button className="pv-rank-button" type="button" onClick={() => setExpandedBet(expandedBet === bet.id ? null : bet.id)} aria-expanded={expandedBet === bet.id}>
                  <span className="pv-rank-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="pv-rank-main"><strong>{bet.name}</strong><small>{bet.description}</small><span className="pv-rank-track"><span style={{ width: (bet.score / 5 * 100) + "%" }} /></span></span>
                  <span className="pv-rank-score">{totalWeight ? bet.score.toFixed(2) : "—"}<small>/ 5</small></span>
                </button>
                {expandedBet === bet.id && <div className="pv-rank-detail"><p><strong>Question to validate:</strong> {bet.question}</p><div aria-label={"Illustrative ratings for " + bet.name}>{dimensions.map((dim) => <span key={dim.key}>{dim.title} <b>{bet.scores[dim.key]}/5</b></span>)}</div></div>}
              </article>
            ))}
          </div>
          <p className="pv-rank-caution">A ranking is a starting hypothesis. Mandatory regulatory, security, privacy, or reliability requirements cannot be traded away using a weighted average.</p>
        </div>
      </div>
      <div className="pv-workbench-close"><span>03 / NEXT MOVE</span><p>Before committing: verify the underlying customer problem, challenge the ratings with evidence, check hard constraints, and test the smallest useful slice.</p></div>
    </section>
  );
}
