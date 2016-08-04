---
layout: post
title: Flex布局教程
description: 这篇文章介绍flex布局的实践，不知道是不是最佳，不过我觉得看完后应该会知道怎么使用flex布局了
categories: [css, flexbox, 布局]
---

## 什么是Flex布局

Flex 是 Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。有了Flex布局，以前写起来很麻烦的“中间列宽度不定，两边列固定宽度的三列布局”或者其他用浮动或者定位来实现的布局方式就都可以一边玩去了。

虽然W3C在2009年就已经提出了Flex布局，但是，由于历史原因，诸多浏览器的支持情况不是太好，就连W3C的语法定义都有几个版本，以前使用起来真是顾虑多多。现在好了，语法已经基本定型，浏览器支持情况也大有好转，所以，今天我就来和还在为如何布局烦心的前端们一起学习Flex布局。

如果要考虑浏览器兼容情况，可以去[can i use](http://www.caniuse.com)查询一下。截至今天（2016-08-02）的情况是：
<img src="http://woaixiangbao.github.io/images/20160802/flex.jpg" >


要想使你的容器变成一个弹性的盒子，也就是flex布局，实在太简单了！而且，无论是块状元素还是行内元素都可以使用。



{% highlight css linenos %}
.box{
    display: flex;
}
{% endhighlight %}

最佳实践是，为了兼容老版本的浏览器，需要加上浏览器前缀：就像下面这样。

{% highlight css linenos %}
.box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
{% endhighlight %}

在这里安利一个自动添加前缀的网站吧：[pleeease.io/play/](http://www.pleeease.io/play/)。本文只说官方标准语法。

## Flex语法简介

采用Flex布局的元素，称为Flex容器，简称“容器”(flex container)。它的子元素称为容器成员，简称“项目”(flex item)

<img src="http://woaixiangbao.github.io/images/20160802/flexbox-visual.png">

容器默认存在两根轴，水平的主轴（**main axis**）和垂直的交叉轴（**cross axis**）。上面图片中的主轴是水平的，但是容器如果设置了**flex-direction**属性，并且值为**column**的话，主轴就会变成垂直的从上到下，相应的交叉轴就会变成图片中的水平轴了。默认**flex-direction**的值是**row**，也就是水平轴为主轴。

主轴的开始位置叫做**main start**，结束位置叫做**main end**。

交叉轴的开始位置叫做**cross start**，结束位置叫做**cross end**。

项目默认沿着主轴排列，单个项目占据的主轴空间叫做**main size**，占据的交叉轴空间叫做**cross size**。

## 容器的属性

最重要的属性当然是**display: flex**啦，只有设置了这个，才能成为flex布局嘛，重要提示：只要容器设置了这个，那么其他的比如float、clear、vertical-align等等布局属性就都不管用喽。下面介绍其它的属性：

* flex-direction
* flex-wrap
* justify-content
* align-items
* align-content

### flex-direction
这个属性定义的是项目在容器中的放置位置，要么是水平排列，要么是垂直排列，不能斜着排列哦^_^

{% highlight css linenos %}
.box{
    flex-direction: row |  column | row-reverse | column-reverse;
}
{% endhighlight %}

<img src="http://woaixiangbao.github.io/images/20160802/flex.jpg" >

* **row**（默认值）,意思是项目（item）从左往右水平排列，起点在左边，主轴就是水平的。[demo](http://woaixiangbao.github.io/demo/20160802/flex-direction-demo1.html)
* **column**，意思是项目从上到下垂直排列，起点在上边，主轴是垂直的。[demo](http://woaixiangbao.github.io/demo/20160802/flex-direction-demo2.html)
* **row-reverse**，其实就是把row反过来，水平从右往左排列，起点在右边，这个值基本都不用的，因为这种情况太少见了，可以不用记住，主轴是水平的。[demo](http://woaixiangbao.github.io/demo/20160802/flex-direction-demo3.html)
* **column**，同上，就是把column反过来，垂直从下往上排列，起点在下边，这种奇葩的需求估计也不会用到吧，可以不用记了，主轴是垂直的。[demo](http://woaixiangbao.github.io/demo/20160802/flex-direction-demo4.html)

所以，99%的情况下，**flex-direction**的值也就是**row**或者**column**，很简单吧。

### flex-wrap
这个属性的定义是，如果一条轴线排列不下了，如何换行。

{% highlight css linenos %}
.box{
    flex-wrap: nowrap | wrap | wrap-reverse;
}
{% endhighlight %}

<img src="http://woaixiangbao.github.io/images/20160802/flex-wrap.png" >

* **no-wrap**(默认值)，一行内显示，无论这一行内有多少个项目，也都不会折行的，如果项目太多，那么不能保证项目按照原来的宽度展示，可能会挤在一起，如果实在挤不下就会在水平方向上出现滚动条。[demo](http://woaixiangbao.github.io/demo/20160802/flex-wrap-demo1.html)
* **wrap**，多行显示，一行内展示不下了，就另起一行（垂直方向的下面一行）展示，就像我们书写文字似的，自动折行，一般情况下，我们都用这个属性。[demo](http://woaixiangbao.github.io/demo/20160802/flex-wrap-demo2.html)
* **wrap-reverse**，和wrap正好相反，如果一行展示不下，不是另起一行，而是跑去上面一行了。[demo](http://woaixiangbao.github.io/demo/20160802/flex-wrap-demo3.html)

上面三个属性，其实都受**flex-direction**的控制，如果值是row，那么就是上面说的那么展示，如果是其他值就相应的反过来就对了。

### flex-flow
这个属性是**flex-direction**和**flex-wrap**属性的简写形式，默认值为这两个属性的默认值，也就是**row nowrap**。
{% highlight css linenos %}
.box{
    flex-flow: <flex-direction> || <flex-wrap>;
}
{% endhighlight %}

这个属性基本不用，主要是还要多记一个属性麻烦，直接记住前面两个就好了，这个属性比较多余。

### justify-content
这个属性定义项目在主轴上的对齐方式。