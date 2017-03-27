---
layout: post
comments: true
title: Vue 组件中父子之间的事件传递
description: Vue在第一版中，使用$dispatch 和 $broadcast 两个方法实现父子之间的事件传递。在Vue第二版中，改变了这种策略
categories: [javascript, Vue, vuejs,event]
---

## 父级组件传递事件给子级

Vue使用Prop选项来把父级组件的数据传递给子组件。



    


### 写了一个button的简单的小demo

[button](http://codepen.io/woaixiangbao/pen/KWxgbW) 小组件，根据父级传递的不同"bd-color"属性，可以改变button的边框颜色

## 子级组件传递事件给父级

### demo

=== $emit事件