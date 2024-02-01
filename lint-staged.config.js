module.exports = {
  "*.{css,graphql,html,md,scss,yaml,yml}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings 0", "sortier --ignore-unknown"],
  "*.{json}": ["prettier --ignore-unknown --write", "sortier"],
  "*.{ts,tsx}": () => ["tsc"],
}
