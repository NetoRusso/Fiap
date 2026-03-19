import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use "@/assets/variaveis/variaveis" as *;`,
  },
};

export default nextConfig;
