module.exports = {
  bail: true,
  verbose: true,
  setupFiles: ['<rootDir>/enzyme.setup.js'],
  roots: ['./src'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  transform: {
    '.(js|jsx)': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testURL: 'http://localhost',
  moduleNameMapper: {
    '\\.(css|scss|less|bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/jest.styleMock.js'
  }
}