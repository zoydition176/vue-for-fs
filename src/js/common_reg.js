/**
 * Created by FS on 2018/7/26.
 */
/*
 *
 * 检验邮箱格式 返回boolean
 *
 * */
function checkisEmail (email) {
  if (email) {
    var rg = /(^\s*)\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(\s*$)/
    var rgnew = /^[0-9a-zA-Z_\-.]{1}\**@\w+([-.]\w+)*\.\w+([-.]\w+)*(\s*$)/
    if (!rg.test(email) && !rgnew.test(email)) {
      return false
    }
    return true
  }
  return false
}
/*
 *
 * 检验大陆手机号格式 返回boolean
 *
 * */
function checkisMobilemainland (mainlandmobile) {
  if (mainlandmobile) {
    var rg = /^1[3456789]\d{9}$/
    if (!rg.test(mainlandmobile)) {
      return false
    }
    return true
  }
  return false
}
/*
 *
 * 检验港澳台繁体手机号格式,可以填写区号 间隔以英文字符 - 返回boolean
 *
 * */
function checkisMobilehk (hkmobile) {
  if (hkmobile) {
    // var rg = /^((0?9\d{8,9})|(([6|9])\d{7})|([6]([8|6])\d{5})|(5[1234569]\d{4,7}))$/;
    var areanumrg = /^((\d{2,5})-((0?9\d{8,9})|(([6|9])\d{7})|([6]([8|6])\d{5})|(5[1234569]\d{4,7})))|((0?9\d{8,9})|(([6|9])\d{7})|([6]([8|6])\d{5})|(5[1234569]\d{4,7}))$/
    if (!areanumrg.test(hkmobile)) {
      return false
    }
    return true
  }
  return false
}
/*
 *
 * 检验是否为正整数 返回boolean
 *
 * */
function checkisInt (number) {
  if (number.length > 0) {
    var rg = /^[123456789]\d{0,}$/
    return rg.test(number)
  } else {
    return false
  }
}
/*
 *
 * 检验只包含中英文和数字的字符串 不包含标签符号 返回boolean
 *
 * */
function checkisName (value) {
  if (value) {
    var patt = /[\u4e00-\u9fa5_a-zA-Z0-9\s+/-]+/
    return patt.test(value)
  } else {
    return false
  }
}

export {
  checkisEmail,
  checkisMobilemainland,
  checkisMobilehk,
  checkisInt,
  checkisName
}
