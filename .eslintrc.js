module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-console": ["error"]
  }
};
