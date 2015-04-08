---
layout: post
title: 从twitter favorite 到CSS3 动画中steps的使用
description: twitter 最新的“喜爱”交互动画
categories: [css, transition, 动画]
---

##从twitter favorite开始
前段时间逛twitter（我的twitter地址请点<a href="http://www.twitter.com/jianqing" target="_blank">这里</a>）发现他们的那个“喜欢”的功能换了新的交互形式，点击的时候是个非常炫的动画效果。找了好久，哈哈，功夫不负有心人，被我找到了。

先来看看demo吧：[Demo](http://woaixiangbao.github.com/demo/20150211/twitter-favorite.html)

####效果如下（鼠标悬浮）：

<style>
.demo-fave {
    border: 1px solid gray;
    border-radius: 5px;
    display:inline-block;
    width: 70px;
    height: 50px;
    background: url(http://woaixiangbao.github.com/demo/20150211/twitter_fave.png) 0 0 no-repeat;
}
.demo-fave:hover {
    background-position: -3519px 0;
    transition: background 1s steps(55);
}
</style>

<span class="demo-fave"></span>

####html部分是这样的：

{% highlight html linenos %}
<section class="fave"></section>
{% endhighlight %}

####css部分是这样的：


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

####其中用到的图片是下面这个：

<img src="http://woaixiangbao.github.com/demo/20150211/twitter_fave.png" alt="twitter favorite" style="width: 100%;" />

####作者原文请看这里：

[twitter favo](https://cssanimation.rocks/twitter-fave/ "twitter favo")

这个动画看上去很神奇的样子，其实呢，大部分工作是美术人员完成的，前端只不过用了一个css3中的transition就完成了，其中最核心的就是这个transition-timing-function中的steps的使用了。

##如果使用CSS3动画中的steps()方法

    下面是翻译自Joni Trythall的一篇文章
    原文地址是：http://designmodo.com/steps-css-animations/

我猜很多人在使用CSS 的动画属性steps()的时候都会感到迷惑。我最开始的时候也不太清楚如果使用，于是去搜索引擎里找到了两个例子：<a href="http://lea.verou.me/2011/09/pure-css3-typing-animation-with-steps/" title="typing demo by Lea Verou">typing demo by Lea Verou</a>和<a href="http://jsfiddle.net/simurai/CGmCe/" title="animated sprite sheet by Simurai">animated sprite sheet by Simurai</a>.

这些例子非常棒，并且真正的帮助了我去理解这个动画时间函数，但是脱离了这两个demo的上下文，还依然很难想象该如何去使用steps().

所以，我真的深深的陷入到steps()中，并制作了几个动画demo，用来帮助那些和我一样对这个动画怪兽感到迷惑的你们。

<a href="https://woaixiangbao.github.io/demo/20150211/index.html">请点击查看demo</a>（友情提示：demo中使用了google font，如果你看不到，可能需要翻墙）

####Steps 简介

steps()是一个允许我们中断一个动画或者将动画截成数个段落的时间函数，而不是一个连续的从一个状态到另一个状态的过度。这个函数有两个参数，第一个参数是一个我们自己定义的想让动画分成多少步的正整数。

    steps(<number_of_steps>,<direction>)

第二个参数定义了我们在@keyframes中声明的动画开始的那个点。这个参数是可选的，如果不填第二个参数，默认是"end"值。如果这个值是“start”，意思就是说动画从左到右的方向开始，我们这个动画的第一个步将随着动画的开始而立即完成。动画将立即跳到“第一步”的结束位置，并且等在哪，直到这个”步“的结束。（我翻译的有点怪怪的，原文如下：）

<blockquote> The second parameter defines the point at which the action declared in our @keyframes will occur. This value is optional and will default to “end” if left unspecified.  A direction of “start” denotes a left-continuous function and our animation’s first step will be completed as soon as the animation begins. It will jump immediately to the end of the first step and stay there until the end of this step duration.</blockquote>

如果这个值是“end",意思就是说动画从右向左的方向开始，