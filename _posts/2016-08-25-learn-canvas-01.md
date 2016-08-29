---
layout: post
title: javascript canvas html5
description: canvas入门
categories: [canvas,html5]
---
昨天晚上整理移动硬盘，发现2010年的时候学习过html5的canvas动画，做了好多的练习题，一点点回忆起来。可是，现在真让我写一个小球跳动还真不一定的写出来，太长时间不用都给忘光了。今天开始，我把他捡起来重新学习一遍。

#### 认识canvas

canvas是html5新增的一个标签（其实已经很多年了），用来定义图形容器。虽然canvas是html的标签主要用来展示图形，不过呢，基本上必须使用javascript来绘制图形或者引用图片才行，所以canvas几乎不能离开javascript。并且javascript也有专用的给canvas绘图的API。

使用canvas非常简单：

{% highlight javascript linenos %}
<canvas width='300' height='300px' style='border: 1px solid red;'></canvas>
{% endhighlight %}

这样就会在页面中绘制出一个长宽300像素的有红色边框的canvas了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo1.html)

#### 基本绘图

但是在页面中画出这么一个方块其实用处不大，canvas最核心的部分是需要配合javascript来绘制图片或者动画的。先从最简单的来，绘制基本图形。

** 绘制一条线的方法
## html部分
{% highlight html linenos %}
<canvas id='canvas' width='300' height='300px' style='border: 1px solid red;'></canvas>
{% endhighlight %}
## javascript部分
{% highlight javascript linenos %}
<script>
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
</script>
{% endhighlight %}

这样就能在canvas的画布上画出一条线了。[demo](http://woaixiangbao.github.io/demo/20160825/canvas-demo2.html)

** getContext()方法就是canvas的一个上下文对象，想要操作canvas绘图什么的必须操作这个上下文对象才行。
** getContext()方法的参数可以是’2d‘，也可以是’3d‘表示绘制的是3d图形，目前不会绘制3d，就先说说2d。
** beginPath()是开始绘制图形的意思，这个必须有。
** moveTo(x,y);是说绘制的起点在哪里，参数就是起点的水平和垂直方向的坐标。
** lineTo(x,y);是说绘制的重点在哪里，参数就是终点的水平和垂直方向的坐标。
** lineWidth 是线条的粗细，如果不写这一句，默认就是1像素的。我测试发现，可以写小数，比如写0.1，看上去也是1像素的粗细，不过有一定的透明度而已。
** strokeStyle 是线条的颜色。可以不写，默认就会是黑色。
** stroke()方法就是给线条填充颜色。这个必须写，否则线条就是没有颜色的，在画布上是看不到的。
** closePath()表示绘制结束。这个可以不写。

