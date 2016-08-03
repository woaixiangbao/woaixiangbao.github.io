---
layout: post
title: chrome 表单自动填充自定义样式
description: chrome 表单 自动填充 webkit autofill 颜色 字体 背景颜色
categories: [css, chrome, 表单]
---

## Chrome 浏览器自动填充
大家在使用chrome登陆一个网站的时候，或者使用一个曾经填充过的表单的时候，比如登陆之类的表单，对chrome浏览器的自动填充应该不陌生吧，就是下面这样的：

<img src="http://woaixiangbao.github.io/demo/20151216/autofill.jpg" />

通常来说，这个被自动填充的表单会是一个淡黄色的背景颜色，文字是黑色的。但是这样的样式往往并不是我们所需要的，甚至和设计稿相差甚远，那该怎么办呢？

使用chrome的“开发者工具”，不难看出，这个淡黄色背景和黑色字体是浏览器给定义的：

<img src="http://woaixiangbao.github.io/demo/20151216/autofill2.jpg" />


不难看出，控制这个自动填充表单的是个chrome浏览器的自定义属性-webkit-autofill，因此更改黄色背景颜色为白色背景就要这么写了：

>不能写background-color，这个不管用，要用-webkit-box-shadow

{% highlight css linenos %}
input:-webkit-autofill{
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
{% endhighlight %}

那么更改黑色文字颜色怎么办呢，修改color的值就行了吗？非也非也，我试过修改color的值是不行的，修改文字颜色需要另外一个chrome的私有属性-webkit-text-flll-color:

{% highlight css linenos %}
input:-webkit-autofill{
    -webkit-text-fill-color: #ff0000;
}
{% endhighlight %}

最终的样子就是这样啦：

<img src="http://woaixiangbao.github.io/demo/20151216/autofill3.jpg" />

这篇文章虽然实在是太简单了，但是大半年没更新了，就这样吧^_^