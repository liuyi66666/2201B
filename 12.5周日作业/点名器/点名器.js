// 定义学生的数据
var student = [
    {
        "id": 1,
        "name": "张世权",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "宋增杰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "吴倩",
        "sex": 1,
        "checked": false
    },
    {
        "id": 4,
        "name": "李宏恩",
        "sex": 0,
        "checked": false
    },
    {
        "id": 5,
        "name": "杨志豪",
        "sex": 0,
        "checked": false
    },
    {
        "id": 6,
        "name": "郝嫚嫚",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "侯建荞",
        "sex": 1,
        "checked": false
    },
    {
        "id": 8,
        "name": "程怀博",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "周璇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 10,
        "name": "张建雨",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "孙銘",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "孙旭瑶",
        "sex": 1,
        "checked": false
    },
    {
        "id": 13,
        "name": "章奥博",
        "sex": 0,
        "checked": false
    },
    {
        "id": 14,
        "name": "王伟宸",
        "sex": 0,
        "checked": false
    },
    {
        "id": 15,
        "name": "巴钦",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "代伊涵",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "邓林柯",
        "sex": 0,
        "checked": false
    },
    {
        "id": 18,
        "name": "张立",
        "sex": 0,
        "checked": false
    },
    {
        "id": 19,
        "name": "李妍",
        "sex": 1,
        "checked": false
    },
    {
        "id": 20,
        "name": "薛翔元",
        "sex": 0,
        "checked": false
    },
    {
        "id": 21,
        "name": "郑锋",
        "sex": 0,
        "checked": false
    },
    {
        "id": 22,
        "name": "江萌洋",
        "sex": 1,
        "checked": false
    },
    {
        "id": 23,
        "name": "张宗耀",
        "sex": 0,
        "checked": false
    },
    {
        "id": 24,
        "name": "章涵语",
        "sex": 0,
        "checked": false
    },
    {
        "id": 25,
        "name": "高鹏亚",
        "sex": 0,
        "checked": false
    },
    {
        "id": 26,
        "name": "刘艺",
        "sex": 1,
        "checked": false
    },
    {
        "id": 27,
        "name": "付高聪",
        "sex": 0,
        "checked": false
    },
    {
        "id": 28,
        "name": "宋海宇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 29,
        "name": "王龙翔",
        "sex": 0,
        "checked": false
    },
    {
        "id": 30,
        "name": "徐婉颖",
        "sex": 1,
        "checked": false
    },
    {
        "id": 31,
        "name": "韩雨泽",
        "sex": 0,
        "checked": false
    },
]

// 定义所有同学名单
var allStudent = student;
// 定义所有待选的名单
var paddingStudents = [];
// 获取ul
var ul = document.getElementsByTagName('ul')[0];
// 获取单人按钮
var one = document.getElementById('one')
// 获取双人按钮
var two = document.getElementById("two")
// 获取男生按钮
var boy = document.getElementById("boy")
// 获取女生按钮
var girl = document.getElementById("girl")
// 设置一个定时器
var times;
// 获取存放名字的dom
var names = document.getElementsByClassName('top')[0];
// 获取随机数后添加的名字
var title = document.getElementById('title')

renderStudent() // 调用封装的渲染
// 把名字渲染进页面
function renderStudent() {
    ul.innerHTML = "";
    allStudent.forEach((function (item) {
        // console.log(item);
        // 创建li标签
        var li = document.createElement('li');
        li.className = "liColor";
        li.style.backgroundImage = randomColor()
        // 添加li标签展示的内容
        li.innerHTML = "<span>".concat(item.name, "</span>");
        // 将li标签动态添加到ul中
        ul.appendChild(li);
    }));
}

getTime() // 调用封装的时间
setInterval(function() {
    getTime();
}, 1000)  // 一秒刷新一次显示时间
// 获取当前时间
function getTime() {
    // 格式化年月日
    var times = dateFormat();
    // 渲染至页面
    var timesHtml = document.getElementsByClassName('newTime')[0];
    timesHtml.innerText = "\u65F6\u95F4: ".concat(times);
}
// 封装日期的函数 
function dateFormat() {
    var date = new Date();
    var y = date.getFullYear();
    var m = (date.getMonth() + 1 + '').padStart(2, '0');
    var d = (date.getDate() + '').padStart(2, '0');
    var hh = (date.getHours() + '').padStart(2, '0');
    var mm = (date.getMinutes() + '').padStart(2, '0');
    var ss = (date.getSeconds() + '').padStart(2, '0');
    // 拼接成相对应的时间格式
    return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(hh, ":").concat(mm, ":").concat(ss);
}
// 渐变颜色随机数
function randomColor() {
    var color = "-webkit-linear-gradient(right, rgb(".concat(randomParams(), "), rgb(").concat(randomParams(), "))");
    return color;
}
// rgb颜色随机数
function randomParams() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = + r + ',' + g + ',' + b;
    return rgb;
}
//封装随机数
function Nonce(list) {
    var max = list
    var min = 0
    return Math.floor(Math.random() * (max - min) + min)
}
// 单人点名
one.onclick = function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText == '停止') {
        one.innerText = '单人点名'
        let index = Nonce(allStudent.length)
        title.innerText = allStudent[index].name
        title.style.backgroundImage = randomColor();

    } else {
        one.innerText = '停止'
    }
}
// 双人点名
two.onclick = function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText == '停止') {
        two.innerText = '双人点名'
        let left = Nonce(allStudent.length)
        let right = Nonce(allStudent.length)
        title.innerText = allStudent[left].name + ' ' + allStudent[right].name
        title.style.backgroundImage = randomColor();

    } else {
        two.innerText = '停止'
    }
}
var boys = [] //男生数据
var girls = [] //女生数据
getBoys()
// 男生的数据过滤出来
function getBoys() {
    boys = allStudent.filter(item => {
        return item.sex == 0
    })
}
getGirls()
// 女生的数据过滤出来
function getGirls() {
    girls = allStudent.filter(item => {
        return item.sex == 1
    })
}
// 男生点名
boy.onclick = function (e) {
    if (e.target.innerText == '停止') {
        boy.innerText = '男生点名'
        let index = Nonce(boys.length)
        title.innerText = boys[index].name
        title.style.backgroundImage = randomColor();

    } else {
        boy.innerText = '停止'
    }
}
// 女生点名
girl.onclick = function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText == '停止') {
        girl.innerText = '女生点名'
        let index = Nonce(girls.length)
        title.innerText = girls[index].name
        title.style.backgroundImage = randomColor();

    } else {
        girl.innerText = '停止'
    }
}