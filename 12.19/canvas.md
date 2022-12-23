 # webpack
 webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。
 # 五大核心
 1、entry 入口
 2、output 输出
 3、loader 转换
 4、plugin 插件
 5、mode 模式
 
 # Canvas绘图
 Canvas 是HTML5新增的一个元素对象，名副其实就是一个画布，浏览器 js 配有相应的操作api，
可以不再依赖其他的API或组件而直接绘图，相当于2D的API。Canvas 适用于位图，高数据量高绘制
频率（帧率）的场景，如动画、游戏；


# Canvas元素的定义：
<canvas id=“myCanvas” width=200 height=100 ></canvas>

id 是canvas元素的标识；
height是canvas画布的高度，单位为像素；
width是canvas画布的宽度，单位为像素。

# 使用JavaScript获取网页中的Canvas对象

获取对象的方法：document.getElementById(对象id)
获取canvas对象的2D绘图上下文：getContext（“2d”)

# Canvas绘直线
调用beginPath()方法，指示开始绘图路径： ctx.beginPath();
调用moveTo()方法将坐标移至直线起点： ctx.moveTo(x,y);
调用lineTo()方法绘制直线： ctx.lineTo(x,y);
调用stroke()方法，绘制图形的边界轮廓： ctx.stroke();
调用closePath()方法，指示闭合绘图路径: ctx.closePath();

![image-20221215224038465](C:\Users\刘艺\AppData\Roaming\Typora\typora-user-images\image-20221215224038465.png)

# Canvas绘制矩形
绘制矩形：rect(x,y,width,height)； 
绘制矩形边框：strokeRect(x, y, width, height);
绘制填充矩形：fillRect(x, y, width, height);
擦除指定矩形区域：clearRect(x, y, width, height);

x:矩形左上角的X坐标；
y:矩形左上角的y坐标；
width:矩形的宽度；
height:矩形的高度

# Canvas绘制圆弧
arc(centerx,centery,radius,startAngle,endAngle,antiClockwise);
centerx,centery    圆弧中心点坐标
Radius 半径
startAngle  起始弧度
endAngle  终止弧度
antiClockwise  是否按逆时针方向绘图，    是一个可选参数，默认为false（即顺时针方向绘图）
弧度 = 角度* ( Math.PI / 180 )


# 填充和描边
1.描边
        strokeStyle指定描边颜色（三种颜色方式均可）
        lineWidth指定描边宽度（像素为单位）

2.填充
        fillStyle指定填充颜色（三种颜色方式均可）