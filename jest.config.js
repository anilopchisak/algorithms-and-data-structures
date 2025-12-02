/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'js', 'json'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    }
};
