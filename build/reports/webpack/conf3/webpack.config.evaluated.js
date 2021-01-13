{
  mode: 'development',
  resolve: {
    modules: [
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
      'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin\\conf3.js'
    ]
  },
  output: {
    path: 'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\distributions',
    filename: [Function: filename],
    library: 'conf3',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      'C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\processedResources\\Js\\main'
    ]
  }
}