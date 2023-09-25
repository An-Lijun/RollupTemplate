# Rollup webSDK工程模板

# RollupTemplate

## TypeScript 
  TypeScript 可以帮助我们更好的判断数据类型,并且在编译过程中排除很多低级的类型错误.
## Alias
  路径别名alias 可以帮助我们更好的找到文件@=>src
## eslint
  文件类型和风格规范
## 类型文件打包
  在一些类库中可以使用,可以帮助使用者更好的提示
## prettier
  多人协同开发时候格式化风格的统一

## gitignore
  git的忽略文件
## TsDoc
  这里使用TSDoc规范 生成文档然后生成md 官网https://tsdoc.org/

## AI注释 Mintlify Doc
  安装

------
TSDoc
vitepress
Netlify
 babel
 husky commitLint
 测试 
 注释 文档 手动文档
 

 

不要使用export default，默认导出会失去摇树优化。
不要使用export function的写法，而应该将每一个函数归集到一个统一的导出中，便于查看和维护。
