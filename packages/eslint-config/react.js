import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for React projects.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    plugins: { "react-hooks": pluginReactHooks },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-curly-spacing": [2, { when: "never", allowMultiline: true }],
    },
  },
];
