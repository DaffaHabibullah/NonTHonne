export default {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'],
    testEnvironment: 'node',
};