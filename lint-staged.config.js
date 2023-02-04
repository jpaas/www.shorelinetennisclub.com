module.exports = {
  "*.{css,graphql,html,md,scss,yaml,yml}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings 0", "sortier"],
  "*.{json}": ["prettier --write", "sortier"],
  "*.{ts,tsx}": () => ["tsc"],
}
