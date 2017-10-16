---
layout: post
title: Angular 国际化--$translate之placeholder
description: Angular的国际化模块$translate很好用，但是再处理input等表单输入框的placeholder上却总是不能实时翻译的情况，本文给出解决方案
categories: [angular, translate, placeholder]
---

## input的placeholder默认写法

```javascript
<input type='text' placeholder='{{"COMMON.PASSWORD" | translate}}' >

```

上面的代码展示了Angular 的国际化模块$translate模块的常规用法，这里没什么问题，能正常取出国际化文案。

## input的placeholder 国际化的问题描述

但是，如果你有实时修改国际化的需求，这种方式就不行了。比如，在个人设置页面中，一般会包含修改用户的用户名密码之类的表单，同时也有一个修改语言的选项。刚刚进入‘个人设置’页面的时候可能是这样的：

<img src="http://woaixiangbao.github.io/images/20160819/translate-placeholder.jpg" >

上图中，刚刚进入的时候显示的都是中文的，但是当你修改绿色框中的语言的时候，需求一般都是需要时时修改的，页面不能刷新的。页面其他地方的国际化都能立刻改过来，但是红色框中的placeholder却不能时时改变。

## 解决方案

使用translate-attr-placeholder指令，这是$translate模块提供的。

```javascript
<input type='text' translate translate-attr-placeholder='COMMON.NEW_PASSWORD' >

```


