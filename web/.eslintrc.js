module.exports = {
  root: true,
  extends: [
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    parser: "babel-eslint",
    ecmaFeatures: {
      "jsx": true,
      "modules": true
    }
  },
  env: {
    browser: true
  },
  rules: {
    "indent": ["error", 2],
    'generator-star-spacing': 'off',
    "quotes": ["error", "single"],
    "eqeqeq": 2,
    "default-case": 2
  }
}