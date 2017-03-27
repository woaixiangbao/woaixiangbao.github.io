---
layout: post
comments: true
title: Vue 组件中父子之间的事件传递
description: Vue在第一版中，使用$dispatch 和 $broadcast 两个方法实现父子之间的事件传递。在Vue第二版中，改变了这种策略
categories: [javascript, Vue, vuejs,event]
---

## 父级组件传递事件给子级

Vue使用Prop选项来把父级组件的数据传递给子组件。



    


### demo

<p data-height="265" data-theme-id="0" data-slug-hash="KWxgbW" data-default-tab="js,result" data-user="woaixiangbao" data-embed-version="2" data-pen-title="vue-事件传递" class="codepen">See the Pen <a href="http://codepen.io/woaixiangbao/pen/KWxgbW/"> vue-事件传递 </a> by jianqing ( <a href="http://codepen.io/woaixiangbao"> @woaixiangbao </a>) on <a href="http://codepen.io">CodePen</a> . </p>
 <script src="https://production-assets.codepen.io/assets/embed/ei.js">
 </script>

## 子级组件传递事件给父级

### demo

=== $emit事件