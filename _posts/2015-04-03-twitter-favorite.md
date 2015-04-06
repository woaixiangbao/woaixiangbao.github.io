---
layout: post
title: twitter favorite
description: twitter latest favorite
---
前段时间逛twitter（我的twitter地址请点<a href="http://www.twitter.com/jianqing" target="_blank">这里</a>）发现他们的那个“喜欢”的功能换了新的交互形式，点击的时候是个非常炫的动画效果。找了好久，哈哈，功夫不负有心人，被我找到了。

先来看看demo吧：[Demo](http://woaixiangbao.github.com/demo/20150211/twitter-favorite.html)

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