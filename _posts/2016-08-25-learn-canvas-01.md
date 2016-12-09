---
layout: post
title: canvas入门(一)
description: html5之canvas学习入门
categories: [javascript, canvas, html5]
---
昨天晚上整理移动硬盘，发现2010年的时候学习过html5的canvas动画，做了好多的练习题，一点点回忆起来。可是，现在真让我写一个小球跳动还真不一定的写出来，太长时间不用都给忘光了。今天开始，我把他捡起来重新学习一遍。

# 认识canvas

canvas是html5新增的一个标签（其实已经很多年了），用来定义图形容器。虽然canvas是html的标签主要用来展示图形，不过呢，基本上必须使用javascript来绘制图形或者引用图片才行，所以canvas几乎不能离开javascript。并且javascript也有专用的给canvas绘图的API。

使用canvas非常简单：

```
<canvas width='300' height='300px' style='border: 1px solid red;'></canvas>

```

这样就会在页面中绘制出一个长宽300像素的有红色边框的canvas了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo1.html)

注意：canvas的结束标签不能省略，否则canvas标签后面的内容就都会被认为是替代内容从而不能显示了。

# 基本绘图

但是在页面中画出这么一个方块其实用处不大，canvas最核心的部分是需要配合javascript来绘制图片或者动画的。先从最简单的来，绘制基本图形。

## 绘制一条直线的方法

### html部分，下面几个图形的html都是这样的
```
<canvas id='canvas' width='300' height='300px' style='border: 1px solid red;'></canvas>

```

### javascript部分

```
    <script>
        var canvas = document.querySelector('#canvas');
        if(canvas.getContext){
           var ctx = canvas.getContext('2d');
        }
        ctx.beginPath();
        ctx.moveTo(20,20);
        ctx.lineTo(50,50);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    </script>

```

这样就能在canvas的画布上画出一条线了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo2.html)

* getContext()方法就是canvas的一个上下文对象，想要操作canvas绘图什么的必须操作这个上下文对象才行。
* getContext()方法的参数可以是’2d‘，也可以是’3d‘表示绘制的是3d图形，目前不会绘制3d，就先说说2d。
* beginPath()是开始绘制图形的意思，这个必须有。
* moveTo(x,y);是说绘制的起点在哪里，参数就是起点的水平和垂直方向的坐标。
* lineTo(x,y);是说绘制的重点在哪里，参数就是终点的水平和垂直方向的坐标。
* lineWidth 是线条的粗细，如果不写这一句，默认就是1像素的。我测试发现，可以写小数，比如写0.1，看上去也是1像素的粗细，不过有一定的透明度而已。
* strokeStyle 是线条的颜色。可以不写，默认就会是黑色。
* stroke()方法就是给线条填充颜色。这个必须写，否则线条就是没有颜色的，在画布上是看不到的。
* closePath()表示绘制结束。这个可以不写。

## 绘制一个矩形

### javascript部分

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.fillStyle = 'yellow';
            ctx.fillRect(50,50,200,100);
    </script>

```

这样就能在canvas的画布上画出一个实心的矩形了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo3.html)

* fillStyle 是填充颜色。如果不写这个，那默认填充的就是黑色。
* fillRect(x,y,width,height)是绘制矩形的方法，x是左上角的水平坐标，y是左上角的垂直坐标，width和hegiht分别是矩形的宽和高

如果想画一个空心的矩形是这样的：[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo4.html)

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.strokeStyle = 'red';
            ctx.strokeRect(30,40,50,90);
    </script>

```

* strokeRect(x,y,width,height)和fillRect()是一样的，前者自动带一个边框，后者是填充颜色了而已。
* strokeStyle就是定义边框颜色的。这里也可以不写strokeStyle，这样矩形的边框就是黑色的。
* 复杂练习：绘制多个渐变色的矩形[渐变矩形](http://woaixiangbao.github.io/demo/20160825/canvas-demo11.html)

所以，假如你需要画一个带边框颜色并且填充了另外一个颜色的矩形的画，就要组合使用上面的几个方法了。

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(30,40,100,100);
            ctx.clearRect(50,60,60,60);
            ctx.strokeStyle = 'blue';
            ctx.strokeRect(60,70,40,40);
    </script>

```

[嵌套矩形](http://woaixiangbao.github.io/demo/20160825/canvas-demo4-2.html)

* 上面又新增了一个clearRect(x,y,width,height);是清除一个矩形的方法，可以在指定区域内变透明，上面的例子中就是综合运用三种方法绘制了一个嵌套的矩形。

## 绘制一个圆形

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.beginPath();
            ctx.arc(60,60,50,0,Math.PI * 2,true);
            ctx.fillStyle = 'red';
            ctx.fill();
    </script>

```

这样就画出了一个填充了红色的圆形。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo5.html)

* arc(x,y,radius,startAngle,endAngle,anticlockwise)。这个方法本来是绘制扇形的。x,y是圆心的坐标，radius是圆的半径，startAngle和endAngle是扇形的起始角度和终止角度(以弧度表示)，所以圆形的startAngle和endAngle是固定的0，Math.PI*2。最后一个anticlockwise表示做图时应该逆时针（true）还是顺时针（false）。

下面绘制一个空心的圆形。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo6.html)

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.beginPath();
            ctx.arc(60,60,50,0,Math.PI * 2,true);
            ctx.strokeStyle = 'red';
            ctx.stroke();
    </script>

```

* 配合strokeStyle 和 stroke两个方法，上面就绘制了一个红色边框的空心圆。
* 如果想绘制一个实心带边框颜色的圆形，就可以组合上面的方法。
* 复杂练习：绘制多个渐变色的圆[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo12.html)

绘制了这些基本图形，想在canvas上写字怎么办？

## 绘制文本

```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.font = 'Bold 52px Arial';
            ctx.textAlign = 'left';
            ctx.fillStyle = 'blue';
            ctx.fillText('简庆',10,50);
            ctx.strokeStyle = 'red';
            ctx.strokeText('简庆',10,100);
    </script>

```

[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo7.html)

* font 是设置文字的字体、大小、样式，而且缺一不可，否则就跟没设置一样，顺序也不能错。如果没设置，就是页面的默认字体和大小和文字颜色。
* textAlign 设置文字的对齐方式，默认就是左对齐，所以这个可以不写。
* fillStyle 是配合fillText()方法来用的，如果不写就是页面默认的黑色了。
* fillText(text,x,y)参数text就是需要展示的文字，x和y就是文字内容的起点坐标。
* strokeText(text,x,y)参数和上面一样。只不过是空心字而已，如果文字大小不够大，也看不太出来空心。strokeStyle也是配合strokeText来用，如果没有，空心字的边框就是黑色的。

## 绘制一条有弧度的贝塞尔曲线

这里的贝塞尔曲线，[维基百科](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A)，贝塞尔曲线一句参考点的多少分为二次贝塞尔曲线和高阶曲线，canvas提供了绘制二次和三次贝塞尔曲线的方法。

<img src="http://woaixiangbao.github.io/images/20160825/bezierCurveTo2.jpg" >

上图中的start和end分别代表起点和终点，control point1是参考点。

* quadraticCurveTo(pointX,pointY,x,y) pointX和pointY就是参考点的坐标，x和y就是终点的坐标，起点的坐标一般用moveTo来绘制。

<img src="http://woaixiangbao.github.io/images/20160825/bezierCurveTo3.png" >

上图中的Control point1 是参考点1，control point2是参考点2，再加上起点（start）和终点（end）就能画出一条三次贝塞尔曲线了。


```
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.beginPath();
            ctx.moveTo(113, 41);
            ctx.bezierCurveTo(99, 199, 296, 294, 271, 138);
            ctx.stroke();
    </script>

```

上面画出了一个简单的三次贝塞尔曲线。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo8.html)

* moveTo(x,y)是定义贝塞尔曲线的起始点坐标。
* bezierCurveTo(point1X,point1Y,point2X,point2Y,endX,endY)看这个方法的参数就明白了，剩下的三个点喽。

多次运用贝塞尔曲线，就能画出比较复杂的图形了。[利用二次贝塞尔曲线绘图](http://woaixiangbao.github.io/demo/20160825/canvas-demo9.html)

[利用三次贝塞尔曲线绘图](http://woaixiangbao.github.io/demo/20160825/canvas-demo10.html)

上面的三次贝塞尔曲线demo中，画出了一个心形。当然了，如果慢慢的一点点去找参考点绘图，那也太慢了，我找到了一个可以直接绘制贝塞尔曲线的网站，可以直接拷贝自己做好的线条以及方法：[贝塞尔曲线](http://www.victoriakirst.com/beziertool/)