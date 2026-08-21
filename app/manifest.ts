import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aman Sinha — Product Leadership Portfolio",
    short_name: "Aman Sinha",
    description: "Senior product manager for enterprise platforms, AI-powered automation, and customer experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e9",
    theme_color: "#10172a",
  };
}

