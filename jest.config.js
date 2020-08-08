module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: {
        jsx: 'react',
      },
    },
  },
  testMatch: ['**/**.tests.ts', '**/__tests__/**.test.ts', '**/__tests__/**.test.tsx', '**/__tests__/**.test.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
