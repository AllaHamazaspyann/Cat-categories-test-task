module.exports = {
    "env": {
        "browser": true,
        "env": { "es2021": true },
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "strict": 0,
        "quotes": [2, "single"],
        "indent": [2, 4, {SwitchCase: 1}],
        "semi": [2, "always"],
        "no-underscore-dangle": 0,
        "no-unused-vars": 1,
        "no-unused-expressions": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-boolean-value": 1,
        "react/jsx-sort-props": 0,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": 0,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 0,
        "react/no-unknown-property": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 1,
        "react/wrap-multilines": 1,
        "new-cap": 0,
        "no-extra-boolean-cast": 0,
        "yoda": 0,
        "no-empty": 0,
        "no-use-before-define": 0,
        "camelcase": 0,
        "@typescript-eslint/no-use-before-define": "off"

    }
};
