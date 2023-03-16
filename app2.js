{
  /**
   * 1 + "1" + 5 + 7 ->
   * null + undefined
   * null + '' + false + 1
   * false + true
   * 'true' + false
   * !!'0' + Boolean('1')
   * !'false' + 9
   * 'js' + +'59'
   * 'evondev' + -'frontend' (dấu - hoạt động tương tự dấu +)
   * !!'false' == !!'0'
   * !!'true' === true
   * true == 'true'
   * 'false' == 'false'
   */
}

console.log(1 + "1" + 5 + 7);
console.log(null + undefined);
console.log(null + "" + false + 1);
console.log(false + true);
console.log("true" + false);
console.log(!!"0" + Boolean("1"));
console.log(!"false" + 9);
console.log("js" + +"59");
console.log("evondev" + -"frontend");
console.log(!!"false" == !!"0");
console.log(!!"true" === true);
console.log(true == "true");
console.log("false" == "false");
