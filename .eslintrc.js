module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["!.prettierrc.js", ".next", "bin", "build", "coverage", "dist", "lib", "node_modules", "tmp"],
  parser: "@typescript-eslint/parser",
  root: true, // Don't keep looking up the file system hierarchy
}
