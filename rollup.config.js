const {defineConfig} = require('rollup')
const ts =require('rollup-plugin-typescript2')
const path =require('path')
const alias =require('@rollup/plugin-alias')
const {dts} = require('rollup-plugin-dts')
const babel =require('@rollup/plugin-babel')


// 由于暂时不写cjs 的nodejs 包所以这里就忽略cjs的模块了
module.exports=defineConfig([{
  input:['./src/index.ts'],//入口文件
  output:[
    {
      dir:'dist/esm',//出口文件
      format:'esm',//打包格式
      preserveModules:true,// 开启单独打包有利于树摇晃
    },
    {
      dir:'dist/cjs',
      format:'cjs',
      preserveModules:true
    }
  ],
  plugins:[
    alias({
      entries:[{
        find:'@',
        replacement:path.resolve(__dirname,'./src')
      }]
    }),
    ts({
      tsconfig:path.resolve(__dirname,'tsconfig.json')
    }),
  ]
},
// 类型文件
{
  input: 'src/index.ts',
  output: {
      dir: 'dist/esm/types',
      format: 'esm',
      preserveModules: true,
  },
  plugins: [
      dts(),
  ],
},
{
  input: 'src/index.ts',
  output: {
      dir: 'dist/cjs/types',
      format: 'cjs',
      preserveModules: true,
  },
  plugins: [
      dts(),
  ],
},
]);

