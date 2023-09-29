module.exports = {
  root: true,
  env: {
    //ESLint 默认不开启任何环境
    browser: true,
    node: true,
    es6: true,
    es2021: true, // 支持 es 语法全局变量识别，这是必须的
  },
  globals: {
    //设置设置代码中的全局变量{"变量名": "off"|"readonly"|"writable"}
    // "hah" : "readonly",
    // globalState: "writable"
  },
  parserOptions: {
    //SLint 解析的时候提供一些语言特性的支持，如 ES 语法、JSX。ESLint 默认支持 ES5 语法。
    /* ecmaVersion: 指定 ECMA 语法版本
     *  取值：
     *      - "latest": 使用最新版本，现在 (2021) 等同于 12
     *      - 版本号：3, 5（默认）, 6, 7, 8, 9, 10, 11, 12
     *      - 年份命名法：2015(=6), 2016(=7), 2017(8) ...
     */
    ecmaVersion: 'latest',

    /* sourceType: 脚本类型，普通脚本 或 ES 模块脚本
     *  取值："script"（默认） | "module"(ES 模块脚本）
     */
    sourceType: 'module',

    /* ecmaFeatures: 支持的特性语法*/
    ecmaFeatures: {
      // 支持在全局使用 return
      globalReturn: true,

      // 默认使用严格模式（ES 5 或 以上）
      impliedStrict: true,

      // 支持 JSX 语法
      jsx: false,
    },
  },
  // "off"  或者 0: 关闭规则，常用于关闭某个来自extends中的规则。
  // "warn" 或者 1: 规则校验不通过时发出 warning 提示。
  // "error"  或者 2: 规则校验不通过时发出 error 提示，返回 1，表示 lint 检查不通过。
  rules: {
    'no-console': 'warn', // 使用 "off", "warn", "error",
    'array-callback-return': 'error', // 数组方法必须return
    'constructor-super': 'error', //派生类必须调用super()
    'for-direction': 'error', // 不允许无限循环
    'getter-return': 'warn', //getter写return
    'no-async-promise-executor': 'error', //new Promise中回调函数不能是异步(原因是怕抛错误)
    'no-await-in-loop': 'warn', // 迭代器不能 有await 应该用Promise.all
    'no-class-assign': 'error', //类不能直接被赋值 如 class A{} A="123"--错误 可以 let b= class A{} b="123"
    'no-compare-neg-zero': 'error', // x===-0错误 x===+0错误  可以 Object.is(x, -0)。
    'no-cond-assign': ['error', 'always'], //在判断中不允许赋值
    'no-const-assign': 'error', // 不能给const 改值
    'no-constructor-return': 'error', // 构造函数不能return 任何东西
    'no-constant-binary-expression': 'error', // 防止=== 误判 可以小括号避免
    'no-constant-condition': 'error', // 防止常量判断 如 if(true)
    // "no-debugger":"error",// 不能包含debugger,这里开发时候需要注掉
    'no-dupe-args': 'error', //不允许函数或表达式命名重复
    'no-dupe-class-members': 'error', //不允许类中出现同名方法
    'no-dupe-else-if': 'error', //不允许在一个分支语句中出现相同的elseif 条件
    'no-dupe-keys': 'error', //禁止 对象中出现重复的key
    'no-duplicate-case': 'error', //禁止 switch语句中出现 相同的case
    // 禁止 出现相同模块的import 如 import {a} from './x' import {b} from './x' 应该是 import{a,b} from './x'
    "no-duplicate-imports":'error', 
    "no-empty-character-class":'error', //不允许正则中是空的 因为不匹配任何东西 如[] 
    "no-ex-assign":"error",//不允许给错误对象赋值
    "no-fallthrough":"error",
    //switch case如果不break 会到下一个 如果想要这样 必须在 cas加入 注解// falls through
    // 或 是 case 1: case 2: xxx break
    "no-func-assign" :"error",// 不允许将 一个已经定义好的函数赋值
    "no-import-assign":"error",//不允许对导入的对象进行增删改
    "no-invalid-regexp":"error",//不允许无效的 正则
    "no-new-native-nonconstructor":"error",//不允许new symbol new bigint
    "no-obj-calls":"eror",//这条规则不允许将 Math、JSON、Reflect、Atomics 和 Intl 对象作为函数调用。
    "no-promise-executor-return":"error", //new Promise 不能return 具体东西 可以return
    "no-self-assign":"error", //不允许自己给自己赋值
    "no-self-compare":"error",// 不允许自己跟自己比较
    "no-sparse-arrays":"error",// 不允许数据中存在以,分割的空内容 如 [,,]
    "no-template-curly-in-string":"error",// 不允许 出现 "${}" 
    // "no-undef":""
  },

  extends: [''],
};
// 这里eslint 先不配置了, 要跟prettier一致
