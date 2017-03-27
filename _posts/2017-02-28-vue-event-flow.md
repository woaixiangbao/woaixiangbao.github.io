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

[button](http://codepen.io/woaixiangbao/pen/KWxgbW) button小组件，根据父级传递的不同"bd-color"属性，可以改变button的边框颜色.

通过改变传递给组件的不同"bd-color"属性，可以改变button的边框颜色。

父组件的html结构如下：
```html

<!-- btn就是组件的名字 -->
<!-- bd-color  就是组件可以接受数据的属性名字，前面带有一个冒号是说，这是一个vue的属性 -->
<!-- yello就是具体的值，这里yellow并不是简单的字符串，而是定义在父组件里面的一个data，也可以说是一个变量 -->
<btn :bd-color="yellow"></btn>
```

父组件的javascript

```javascript

//定义了组件的最基本html模板结构，这里有一个:class，是vue的一个指令，用于传递js语句来控制动态class
var temp = "<div><button :class=\"[bdColor ? bdColor : '']\">ok</button></div>";

//定义了一个组件，名字是btn，使用的时候就把btn当做一个html的标签一样使用
Vue.component('btn', {
  template: temp,
  props:{
    bdColor:String//这里是组件接收来自父组件的属性，父组件写的是bd-color，组件里可以写成驼峰命名法
  }
});

// 启动app
new Vue({
  el: '#app',
  data: {
    blue:'blue', //这里就是定义传递给子组件的数据的变量
    yellow:'yellow',
    red:'red'
  }
})


```


当然，想让样式真正起变化，css是少不了的


```css
.red{
  border-color:red;
}
.blue{
  border-color:blue;
}
.yellow{
  border-color:yellow
}
button{
  width:100px;
  height:30px;
  line-height: 30px;
  font-size: 18px;
  border:1px solid #000;
}

```


## 子级组件传递事件给父级

### demo

=== $emit事件