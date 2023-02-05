const pluginTailwindcss = require("prettier-plugin-tailwindcss");
const pluginSortImports = require("@trivago/prettier-plugin-sort-imports");

/**
 * @refs  https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1195411734
 */
/** @type {import("prettier").Parser}  */
const mixedParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
};

/** @type {import("prettier").Plugin}  */
const mixedPlugin = {
  parsers: {
    typescript: mixedParser,
  },
};

module.exports = {
  bracketSpacing: true,
  importOrder: [
    "(^react$|^react/(.*)$)",
    "(^next$|^next/(.*)$)",
    "(^storyblok$|^storyblok/(.*)$)",
    "<THIRD_PARTY_MODULES>",
    "@/components/*",
    "@/contexts/*",
    "@/hooks/*",
    "@/pages/*",
    "@/public/*",
    "@/styles/*",
    "@/utils/*",
    "@/types",
    "^[../]",
    "^[./]",
  ],
  jsxSingleQuote: false,
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [mixedPlugin],
};
