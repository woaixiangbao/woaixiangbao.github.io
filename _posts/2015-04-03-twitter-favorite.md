---
layout: post
title: twitter favorite
description: twitter latest favorite
---
前段时间逛twitter（我的twitter地址请点<a href="http://www.twitter.com/jianqing" target="_blank">这里</a>）发现他们的那个“喜欢”的功能换了新的交互形式，点击的时候是个非常炫的动画效果。找了好久，哈哈，功夫不负有心人，被我找到了。

先来看看demo吧：[Demo](http://woaixiangbao.github.com/demo/20150211/twitter-favorite.html)

##效果如下（鼠标悬浮）：


<style>
.demo-fave {
    border: 1px solid gray;
    border-radius: 5px;
    display:inline-block;
    width: 70px;
    height: 50px;
    background: url(http://woaixiangbao.github.com/demo/20150211/twitter_fave.png) no-repeat;
    background-position: 0 0;
}
.demo-fave:hover {
    background-position: -3519px 0;
    transition: background 1s steps(55);
}
</style>

<span class="demo-fave"></span>

##html部分是这样的：

{% highlight html linenos %}
<section class="fave"></section>
{% endhighlight %}

##css部分是这样的：


{% highlight css linenos %}
.fave {
    width: 70px;
    height: 50px;
    background: url(twitter_fave.png) no-repeat;
    background-position: 0 0;
}
.fave:hover {
    background-position: -3519px 0;
    transition: background 1s steps(55);
}
{% endhighlight %}

##其中用到的图片是下面这个：

<a href="http://woaixiangbao.github.com/demo/20150211/twitter_fave.png">图片</a>

##原文地址：

[twitter favo](https://cssanimation.rocks/twitter-fave/ "twitter favo")