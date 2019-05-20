module.exports = {
    verbose: true,
    setupFiles: ['<rootDir>/jest.setup.js'],
    globals: {
        'ts-jest': {
            babelConfig: true,
            tsConfig: '<rootDir>/tsconfig.jest.json',
        },
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
