import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  hash: false,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
});
