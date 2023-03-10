export default {
    clearMocks: true,
    moduleDirectories: [
        'node_modules',
        'src',
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleNameMapper: {
        '\\.(s?css|png|jpg)$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>config/test/EmptyComponent.tsx',
        '@/(.*)': '<rootDir>src/$1',
    },
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/test/jestSetup.ts'],
    testEnvironment: 'jsdom',
    testMatch: [
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    globals: {
        __IS_DEV__: true,
        __API__: '',
    },
};
