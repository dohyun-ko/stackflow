const { build } = require("esbuild");
const config = require("@stackflow/esbuild-config");

const watch = process.argv.includes("--watch");

Promise.all([
  build({
    ...config({}),
    format: "cjs",
    external: ["react-fast-compare"],
    watch,
  }),
  build({
    ...config({}),
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
    external: ["react-fast-compare"],
    watch,
  }),
]).catch(() => process.exit(1));
