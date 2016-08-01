---
layout: post
title: javascript 冒泡算法
description: javascript 冒泡 排序 算法 bubble sort
categories: [js, 算法, 排序,冒泡]
---

##学会javascript 冒泡排序算法的重要性

javascript 冒泡排序算法是学习javascript诸多算法中最基本最简单的算法，是最容易掌握的。也是前端面试中被考察次数最多的（至少我的面试经历中被考过好多次），所以学会冒泡算法特别重要，特别是会用笔在纸上能完整写出来特别重要。虽然，在实际开发javascript中用的不多，甚至几乎没用过，但是，学会它的性价比太高了，一定要学会啊！

##javascript 冒泡排序算法的理论知识

1，依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
2，再对最后一位以外的数组，重复前面的过程，直至全部排序完成。

###写法一

先定义一个交互函数，作用是叫唤两个位置的值。
```js
function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}
```
