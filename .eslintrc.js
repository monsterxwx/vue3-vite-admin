module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    'vue/require-default-prop': 'off',
    'no-async-promise-executor': 'off',
    'vue/v-on-event-hyphenation': 'off'
  }
}
