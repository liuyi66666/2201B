/**number**/
var num1 = 1;
var num2 = 1;
var sum = num1 + num2;
/**string**/
var str1 = "ts初始";
var str2 = "学习";
var str = str1 + str2;
/**boolen**/
var bool = true;
/**数组 array**/
var array = [1, 2, 3, 4, 5];
var array1 = [1];
var array2 = ['1', '2', '3', '4', '5'];
var array3 = [true, false];
var array4 = [1, 2, 3, 4, 5];
var array5 = ['1', '2', '3', '4', '5'];
/**元组**/
var tuple = [1, '2', true];
/**null  undefind
 * 概念：即为类型也为值
 *
 * **/
var a = null;
var b = undefined;
/**object**/
// declare function create(o:object |null) :void 
// create({props: 0})
// create(null)
// create(3222)
// create('dddd')
// create(3222)
var obj;
obj = { name: '小花', age: 13 };
var namel = "string";
namel = 123;
/**
 * enum 枚举
 *
 *
 * **/
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["ERROR"] = 500] = "ERROR";
})(CODE || (CODE = {}));
console.log(CODE.SUCCESS);
console.log(CODE['SUCCESS']);
var CODE1;
(function (CODE1) {
    CODE1[CODE1["SUCCESS"] = 0] = "SUCCESS";
    CODE1[CODE1["ERROR"] = 1] = "ERROR";
})(CODE1 || (CODE1 = {}));
console.log(CODE.SUCCESS);
console.log(CODE.ERROR);
var CODE2;
(function (CODE2) {
    CODE2[CODE2["SUCCESS"] = 400] = "SUCCESS";
    CODE2[CODE2["ERROR"] = 401] = "ERROR";
})(CODE2 || (CODE2 = {}));
console.log(CODE.SUCCESS);
console.log(CODE['ERROR']);
/**void**/
function getName(name, age) {
    return name + age;
}
function getName1(name, age) {
    console.log();
}
function getName2(name, age) {
    return name + age;
}
var persion = { name: "你好", age: 1, sex: 4 };
/**联合类型**/
var allType;
allType = 1;
allType = "add";
