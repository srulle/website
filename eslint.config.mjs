import nextConfig from "eslint-config-next";
import nextCoreWebVitalsConfig from "eslint-config-next/core-web-vitals";
import nextTypeScriptConfig from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextConfig,
  ...nextCoreWebVitalsConfig,
  ...nextTypeScriptConfig,
];

export default eslintConfig;
