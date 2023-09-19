module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/*.test.*"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    ".(js|jsx|ts|tsx)": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$":
      "<rootDir>/src/testingTools/stubs/emptyString.js",
    "\\.(css|scss)$": "<rootDir>/src/testingTools/stubs/emptyObject.js",
    "@components/(.*)": ["<rootDir>/src/components/$1"],
    "@env/(.*)": ["<rootDir>/src/env/$1"],
    "@contexts/(.*)": ["<rootDir>/src/contexts/$1"],
    "@images/(.*)": ["<rootDir>/src/images/$1"],
    "@testingTools/(.*)": ["<rootDir>/src/testingTools/$1"],
    "@types": ["<rootDir>/src/types/index.d.ts"],
    "@utils/(.*)": ["<rootDir>/src/utils/$1"],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!test-component).+\\.js$", "node_modules"],
  coverageDirectory: "<rootDir>/src/testingTools/reports/coverage",
  collectCoverageFrom: [
    // Match Pattern
    "**/*.{js,jsx,ts,tsx}",
    // Ignore Pattern
    "!**/__tests__/**/*",
    "!**/lib/**/*.{js,jsx,ts,tsx}",
    "!**/styles/**/*.{js,jsx,ts,tsx}",
    "!**/testingTools/**/*",
  ],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "jest.setup.js", "./src/index.tsx"],
}
