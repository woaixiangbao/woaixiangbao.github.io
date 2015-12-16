---
layout: post
title: chrome 表单自动填充自定义样式
description: chrome 表单 自动填充 webkit autofill 颜色 字体 背景颜色
categories: [css, chrome, 表单]
---

##Chrome 浏览器自动填充




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

