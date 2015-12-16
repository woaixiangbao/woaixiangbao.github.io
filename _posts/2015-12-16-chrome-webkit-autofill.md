---
layout: post
title: chrome 表单自动填充自定义样式
description: chrome 表单 自动填充 webkit autofill 颜色 字体 背景颜色
categories: [css, chrome, 表单]
---

##Chrome 浏览器自动填充
大家在使用chrome登陆一个网站的时候，或者使用一个曾经填充过的表单的时候，比如登陆之类的表单，对chrome浏览器的自动填充应该不陌生吧，就是下面这样的：

<img src="http://woaixiangbao.github.io/demo/20151216/autofill.jpg" />

通常来说，这个被自动填充的表单会是一个淡黄色的背景颜色，文字是黑色的。但是这样的样式往往并不是我们所需要的，甚至和设计稿相差甚远，那该怎么办呢？

使用chrome的“开发者工具”，不难看出，这个淡黄色背景和黑色字体是浏览器给定义的：

<img src="http://woaixiangbao.github.io/demo/20150211/autofill2.jpg" />


####Steps Demos

你可以从这些[Demos](https://woaixiangbao.github.io/demo/20150211/index.html)中看到下面这些内容：



>严重声明：不要把这个当做真的闹钟用到你的生活中去，因为，这是一个CSS闹钟！


####CSS 进度圈

<img src="/demo/20150211/loaderpreview.png">


{% highlight css linenos %}
.percentage {
  animation: load 4s steps(4, end) forwards;
}

@keyframes load {
  to {
    transform: translateY(-380px);
  }
}
{% endhighlight %}

