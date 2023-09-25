import {abc} from '@/test'

/**
 * 该函数将一个数字作为输入，加上 123，然后记录结果以及未定义变量“abc”的值。
 * 
 * :param a: 参数“a”是一个数字。
 * :type a: number
 */
/**
 * 该函数接受一个数字作为输入，加上 123，然后返回结果。
 * 
 * :param a: 参数“a”是一个数字。
 * :type a: number
 * :return: 该代码将抛出错误，因为未定义“abc”。因此，不会返回任何内容。
 */
const a=(a:number)=>{
  console.log(a+123+abc);
  return a+123+abc
}
export {
  a
}
