---
layout: post
title: javascript 冒泡排序算法
description: javascript 实现冒泡排序算法，前端面试必考题目
categories: [js, 算法, 排序,冒泡]
---

## 学会javascript 冒泡排序算法的重要性

javascript 冒泡排序算法是学习javascript诸多算法中最基本最简单的算法，是最容易掌握的。也是前端面试中被考察次数最多的（至少我的面试经历中被考过好多次），所以学会冒泡算法特别重要，特别是会用笔在纸上能完整写出来特别重要。虽然，在实际开发javascript中用的不多，甚至几乎没用过，但是，学会它的性价比太高了，一定要学会啊！

## javascript 冒泡排序算法的理论知识

1. 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
2. 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。

### 写法一

先定义一个交互函数，作用是叫唤两个位置的值。

```

function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

```


然后定义主函数。

```

function bubbleSort(myArray){
    var len = myArray.length, i, j, stop;
    for(i = 0; i < len; i++){
        for(j = 0, stop = len - 1 - i; j < stop; j++){
            if(myArray[j] > myArray[j+1]){
                swap(myArray, j, j+1);
            }
        }
    }
    return myArray;
}
var num = [3,2,1,5,4];
bubbleSort(num);
//[1,2,3,4,5]

```

上面的代码来自阮一峰的文章：[http://javascript.ruanyifeng.com/library/sorting.html](http://javascript.ruanyifeng.com/library/sorting.html)

### 写法二
将bubble_sort写到Array的prototype上


```

Array.prototype.bubble_sort = function (){
    var i, j, temp;
    for(i = 0;i < this.length -1; i++){
        for(j = 0; j < this.length - 1 - i; j++){
            if(this[j] > this[j+1]){
                temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
}
var num = [3,2,1,5,4];
num.bubble_sort();
//[1,2,3,4,5]

```


上面代码来自维基百科：[https://zh.wikipedia.org/wiki/冒泡排序](https://zh.wikipedia.org/wiki/冒泡排序)

第二中写法，只是比第一种写法少了一个变量而已，而且第一种写法的第一遍循环比第二种写法多了一遍循环，看上去阮老师是写错了，我已经给他留言，估计他不久就会改过来吧。

<img src="http://woaixiangbao.github.io/images/20160801/20160801.png" />