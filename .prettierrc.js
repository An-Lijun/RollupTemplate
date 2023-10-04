// 因为prettier.json 不能写注释所以我这里用 .js文件
module.exports = {
  printWidth: 100, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  quoteProps: 'as-needed',//只在必须给对象属性加引号
  eslintIntegration:true
  // 缺一个对标 对象 换行的
};
// 对象格式化

