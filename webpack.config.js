var path = require('path');

module.exports = {
    entry: './src/main/js/index.js',
    devtool: 'sourcemaps',
    cache: true,
	mode: 'development',
    resolve: {
        modules: ["./src/main/js", "node_modules"],
        //root: path.resolve(),
        extensions: ['.js','.jsx'],
        alias: {
            'stompjs': __dirname + '/node_modules' + '/stompjs/lib/stomp.js',
        }
    },
    output: {
        //path: __dirname,
        //filename: './src/main/resources/static/built/bundle.js'
		path: path.resolve(__dirname, 'src/main/resources/static'),
        filename: 'built/bundle.js'
    },
	module: {
		rules: [
			{
				test: path.join(__dirname, './src/main/js'),
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins : [
						                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                                  ]
					}
				}]
			},
			        {
                      test: /\.css$/,
                      use: [
                        'style-loader',
                        'css-loader'
                      ],
                    },
                    {
                      test: /\.(png|svg|jpg|gif)$/,
                      use: [
                        'file-loader',
                      ],
                    },
                    {
                      test: /\.(woff|woff2|eot|ttf|otf)$/,
                      use: [
                        'file-loader',
                      ],
                    },
                    {
                            test: /\.s[ac]ss$/i,
                            use: [
                              // Creates `style` nodes from JS strings
                              'style-loader',
                              // Translates CSS into CommonJS
                              'css-loader',
                              // Compiles Sass to CSS
                              'sass-loader',
                            ],
                          }
		]
	}
};