/* 自定义js库 包含验证和弹框 */
// var zbase = (function (global, factory) {
//   if (typeof module === 'object' && typeof module.exports === 'object') {
//     module.exports = global.document ? factory(global, true) : function (w) {
//       return factory(w)
//     }
//   } else {
//     factory(global)
//   }
// })(window, function (window, iswork) {
//   var zbase = {}
//   zbase.checkisInt = (number) => {
//     if (number.length > 0) {
//       var rg = /^[123456789]\d{0,}$/
//       return rg.test(number)
//     } else {
//       return false
//     }
//   }
//   window.zbase = zbase
// })

// var zbase = {
//   checkisInt: function (number) {
//     if (number.length > 0) {
//       var rg = /^[123456789]\d{0,}$/
//       return rg.test(number)
//     } else {
//       return false
//     }
//   }
// }
var zbase = 3
export {zbase}
