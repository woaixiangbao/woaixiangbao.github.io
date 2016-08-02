---
layout: post
title: Flex布局教程
description: css flexbox flex
categories: [css, flexbox, 布局]
---

Flex 是 Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。有了Flex布局，以前写起来很麻烦的“中间列宽度不定，两边列固定宽度的三列布局”或者其他用浮动或者定位来实现的布局方式就都可以一边玩去了。
虽然W3C在2009年就已经提出了Flex布局，但是，由于历史原因，诸多浏览器的支持情况不是太好，就连W3C的语法定义都有几个版本，以前使用起来真是顾虑多多。现在好了，语法已经定型，浏览器支持情况也大有好转，所以，今天我就来和还在为如何布局烦心的前端们一起学习Flex布局。

如果要考虑浏览器兼容情况，可以去[can i use](www.caniuse.com)查询一下。截至今天（2016-08-02）的情况是：
<img src="http://woaixiangbao.github.io/images/20160802/flex.jpg" >


要想使你的容器变成一个弹性的盒子，也就是flex布局，实在太简单了！

{% highlight css linenos %}
.box{
    display: flex;
}
{% endhighlight %}