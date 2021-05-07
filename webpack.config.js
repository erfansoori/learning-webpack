const path = require('path')
const HtmlWebPack = require('html-webpack-plugin')
const CSSExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
    optimization:{
        minimize:true,
        splitChunks:{
            cacheGroups:{
                commons:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks:'initial'
                }
            }
        }
    },
    entry:{
        app:path.resolve(__dirname,'src/index.js')
        // app:{
        //     import:path.resolve(__dirname,'src/index.js'),
        //     dependOn:'vendor'
        // },
        // vendor:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'public/dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test:/\.css$/i,
                use:[devMode ? 'style-loader' : CSSExtractPlugin.loader,{
                    loader:'css-loader',
                    options:{modules:true}
                }]
            },
            {
                test:/\.(png|jpe?g|svg|gif|eot|ttf|woff|woff2)$/i,
                type:'asset'
            }
        ]
    },
    plugins:[
        new CSSExtractPlugin({
            filename:'[name].[hash].css'
        }),
        new HtmlWebPack({
            title:'Web Application By WebPack',
            filename:path.join(__dirname,'public/index.html'),
            template:path.join(__dirname,'src/index.html'),
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'public'),
        publicPath:'/dist/',
        port:9090
    }
}