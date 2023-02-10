module.exports = {
  extends: [
    "eslint:recommended",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "jest.config.js",
    ".parcel-cache",
    "dist"
  ],
  rules: {
    'no-empty':'off', // SICP JS requires empty else-clauses
    'no-unused-vars':'warn' // unsused variables is quite common in teaching-code
  },
  parserOptions: {
    // By default, eslint assumes ES5 syntax, not allowing things like "const"
    "ecmaVersion": "latest" 
  },

  // Below are the configuration to apply to typescript files exclusively
  overrides: [{
    files: ['*.ts'],
    extends: ["plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    //root: true,

    // This rule set correspond quite well to the style guide used in the PKD course
    rules: {
      // makes "I am " + age + " years old" possible for combining number with string
      "@typescript-eslint/restrict-plus-operands": "off",

      // eslint have other indentation rules than PKD course, so you must check that manually
      "@typescript-eslint/indent": "off",

      // end line with semicolons
      "@typescript-eslint/semi": "error",

      // if the type is "obvious" tothe compiler, you may as well skip the type declaration
      "@typescript-eslint/no-inferrable-types": "warn",

      // all functions must have explicit return types
      "@typescript-eslint/explicit-function-return-type": "error",

      // do put a blankspace before curly braces (e.g. in function definitions and if-else-clauses
      "@typescript-eslint/space-before-blocks": "warn",

      // use correct naming conventions
      "@typescript-eslint/naming-convention": ["error",
        { selector: "default", format: ["snake_case"] },
        { selector: "typeLike", format: ["PascalCase"] },
      ],

      // use Array<T> rather than T[]
      "@typescript-eslint/array-type": ["error", { default: 'generic' }],

      /* There is a bug which makes it impossible to lint some of the recursive data structures in some libraries
       These rules below are rules we would like to get checked, but typescript-eslint cannot do that for us
       given out coding style with recursive data structures.

       See details on 
        https://github.com/typescript-eslint/typescript-eslint/issues/5014
       */
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    }
  }]
};
