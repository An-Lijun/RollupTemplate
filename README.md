# Rollup 前端SDK 工程

# RollupTemplate
1. TypeScript 
2. 路径别名alias
3. eslint
4. 类型文件打包

---
 babel
 husky commitLint
 测试 
 注释 文档 手动文档
 prettier

 

不要使用export default，默认导出会失去摇树优化。
不要使用export function的写法，而应该将每一个函数归集到一个统一的导出中，便于查看和维护。
