import { config } from "@cosmic/eslint-config/react";
import storybook from "eslint-plugin-storybook";

export default [...config, ...storybook.configs["flat/recommended"]];
