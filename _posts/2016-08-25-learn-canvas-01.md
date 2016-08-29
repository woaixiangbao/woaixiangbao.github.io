---
layout: post
title: javascript canvas html5
description: canvas入门
categories: [canvas,html5]
---
昨天晚上整理移动硬盘，发现2010年的时候学习过html5的canvas动画，做了好多的练习题，一点点回忆起来。可是，现在真让我写一个小球跳动还真不一定的写出来，太长时间不用都给忘光了。今天开始，我把他捡起来重新学习一遍。

# 认识canvas

canvas是html5新增的一个标签（其实已经很多年了），用来定义图形容器。虽然canvas是html的标签主要用来展示图形，不过呢，基本上必须使用javascript来绘制图形或者引用图片才行，所以canvas几乎不能离开javascript。并且javascript也有专用的给canvas绘图的API。

使用canvas非常简单：

{% highlight javascript linenos %}
<canvas width='300' height='300px' style='border: 1px solid red;'></canvas>
{% endhighlight %}

这样就会在页面中绘制出一个长宽300像素的有红色边框的canvas了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo1.html)

# 基本绘图

但是在页面中画出这么一个方块其实用处不大，canvas最核心的部分是需要配合javascript来绘制图片或者动画的。先从最简单的来，绘制基本图形。

## 绘制一条线的方法

### html部分，下面几个图形的html都是这样的
{% highlight html linenos %}
<canvas id='canvas' width='300' height='300px' style='border: 1px solid red;'></canvas>
{% endhighlight %}
### javascript部分
{% highlight javascript linenos %}
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
{% endhighlight %}

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

{% highlight javascript linenos %}
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }

            ctx.fillStyle = 'yellow';
            ctx.fillRect(50,50,200,100);
    </script>
{% endhighlight %}

这样就能在canvas的画布上画出一个实心的矩形了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo3.html)

* fillStyle 是填充颜色。如果不写这个，那默认填充的就是黑色。
* fillRect(x,y,width,height)是绘制矩形的方法，x是左上角的水平坐标，y是左上角的垂直坐标，width和hegiht分别是矩形的宽和高

如果想画一个空心的矩形是这样的：[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo4.html)

{% highlight javascript linenos %}
    <script>
        var canvas = document.querySelector('#canvas');
            if(canvas.getContext){
               var ctx = canvas.getContext('2d');
            }
            ctx.strokeStyle = 'red';
            ctx.strokeRect(30,40,50,90);
    </script>
{% endhighlight %}

* strokeRect(x,y,width,height)和fillRect()是一样的，前者自动带一个边框，后者是填充颜色了而已。
* 这里也可以不写strokeStyle，这样矩形的边框就是黑色的。

所以，假如你需要画一个带边框颜色并且填充了另外一个颜色的矩形的画，就要组合使用上面的几个方法了。

## 绘制一个圆形

{% highlight javascript linenos %}
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
{% endhighlight %}

这样就画出了一个填充了红色的圆形。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo5.html)

* arc(x,y,radius,startAngle,endAngle,anticlockwise)。这个方法本来是绘制扇形的。x,y是圆心的坐标，radius是圆的半径，startAngle和endAngle是扇形的起始角度和终止角度(以弧度表示)，所以圆形的startAngle和endAngle是固定的0，Math.PI*2。最后一个anticlockwise表示做图时应该逆时针（true）还是顺时针（false）。

下面绘制一个空心的圆形。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo6.html)

{% highlight javascript linenos %}
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
{% endhighlight %}

* 配合strokeStyle 和 stroke两个方法，上面就绘制了一个红色边框的空心圆。
* 如果想绘制一个实心带边框颜色的圆形，就可以组合上面的方法。

绘制了这些基本图形，想在canvas上写字怎么办？

## 绘制文本

{% highlight javascript linenos %}
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
{% endhighlight %}

[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo7.html)

* font 是设置文字的字体、大小、样式，而且缺一不可，否则就跟没设置一样，顺序也不能错。如果没设置，就是页面的默认字体和大小和文字颜色。
* textAlign 设置文字的对齐方式，默认就是左对齐，所以这个可以不写。
* fillStyle 是配合fillText()方法来用的，如果不写就是页面默认的黑色了。
* fillText(text,x,y)参数text就是需要展示的文字，x和y就是文字内容的起点坐标。
* strokeText(text,x,y)参数和上面一样。只不过是空心字而已，如果文字大小不够大，也看不太出来空心。strokeStyle也是配合strokeText来用，如果没有，空心字的边框就是黑色的。