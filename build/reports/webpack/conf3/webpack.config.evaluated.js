{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin-dce\\conf3.js'
    ]
  },
  output: {
    path: 'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\distributions',
    filename: [Function: filename],
    library: 'conf3',
    libraryTarget: 'umd'
  },
  devtool: 'source-map'
}