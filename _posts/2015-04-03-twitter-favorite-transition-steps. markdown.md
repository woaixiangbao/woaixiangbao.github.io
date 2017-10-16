---
layout: post
title: 从twitter favorite 到CSS3 动画中steps的使用
description: twitter 最新的“喜爱”交互动画
categories: [css, transition, 动画]
---

## 从twitter favorite开始
前段时间逛twitter（我的twitter地址请点<a href="http://www.twitter.com/jianqing" target="_blank">这里</a>）发现他们的那个“喜欢”的功能换了新的交互形式，点击的时候是个非常炫的动画效果。找了好久，哈哈，功夫不负有心人，被我找到了。

先来看看demo吧：[Demo](http://woaixiangbao.github.com/demo/20150211/twitter-favorite.html)

#### 效果如下（鼠标悬浮）：

```

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

```

#### html部分是这样的：


```

<section class="fave"></section>

```


#### css部分是这样的：



```

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

```


#### 其中用到的图片是下面这个：

<img src="http://woaixiangbao.github.com/demo/20150211/twitter_fave.png" alt="twitter favorite" style="width: 100%;" />

#### 作者原文请看这里：

[twitter favo](https://cssanimation.rocks/twitter-fave/ "twitter favo")

这个动画看上去很神奇的样子，其实呢，大部分工作是美术人员完成的，前端只不过用了一个css3中的transition就完成了，其中最核心的就是这个transition-timing-function中的steps的使用了。

## 如果使用CSS3动画中的steps()方法

    下面是翻译自Joni Trythall的一篇文章
    原文地址是：http://designmodo.com/steps-css-animations/

我猜很多人在使用CSS 的动画属性steps()的时候都会感到迷惑。我最开始的时候也不太清楚如果使用，于是去搜索引擎里找到了两个例子：<a href="http://lea.verou.me/2011/09/pure-css3-typing-animation-with-steps/" title="typing demo by Lea Verou">typing demo by Lea Verou</a>和<a href="http://jsfiddle.net/simurai/CGmCe/" title="animated sprite sheet by Simurai">animated sprite sheet by Simurai</a>.

这些例子非常棒，并且真正的帮助了我去理解这个动画时间函数，但是脱离了这两个demo的上下文，还依然很难想象该如何去使用steps().

所以，我真的深深的陷入到steps()中，并制作了几个动画demo，用来帮助那些和我一样对这个动画怪兽感到迷惑的你们。

<a href="https://woaixiangbao.github.io/demo/20150211/index.html">请点击查看demo</a>（友情提示：demo中使用了google font，如果你看不到，可能需要翻墙）

#### Steps 简介

steps()是一个允许我们一步一步的执行一个动画或者将动画截成数个段落的时间函数，而不是一个连续的从一个状态到另一个状态的过度。这个函数有两个参数，第一个参数是一个我们自己定义的想让动画分成多少步的正整数。

```css
steps(<number_of_steps>,<direction>)

```


第二个参数定义了我们在@keyframes中声明的发生动画的时间点，可以是“start”或者“end”。这个参数是可选的，如果不填第二个参数，默认是"end"值。如果这个值是“start”，意思就是说动画开始的位置是“第一步”开始的位置。（我翻译的有点怪怪的，原文如下：）

<blockquote> The second parameter defines the point at which the action declared in our @keyframes will occur. This value is optional and will default to “end” if left unspecified.  A direction of “start” denotes a left-continuous function and our animation’s first step will be completed as soon as the animation begins. It will jump immediately to the end of the first step and stay there until the end of this step duration.</blockquote>

如果这个值是“end",意思就是说动画开始的位置是“第一步”结束的位置。这两个值的不同点只是动画从什么位置开始，但是动画还是相同的。

>我的理解是这样的，steps函数一是把一个数值分成若干步骤，这样每个步骤就会有一个开始的值和一个结束的值。比如，把一个100像素宽的图片分成5个步骤，那么第一步的意思就是从1像素到第20像素的这一段，所以end关键字的意思就是说动画从第20像素的位置开始，start是从1像素的位置开始。

如果不好理解，下面是图示：

<img src="http://woaixiangbao.github.io/demo/20150211/stepsvisual.png" />

#### 填充模式和重复数

>重复数（Iteration Count)是steps的一个参数，是让动画执行多少步的正整数。transition这个css属性中，其实并没有填充模式（Fill Mode），Fill Mode首先是出现在animation属性中的，虽然官方没有，但是用在这里的确是起了作用，也许是我查看的文献比较古老吧

在我们开始理解不同的填充模式或者重复数量会影响到steps()之前，比如说使用"forwards"或者"infinite"，我们先来例子说明一下：如果我们有两辆汽车，以同样的动画函数和同样的steps()，但是其中一个使用了"infinitely“，一个使用了"forward",那么这两辆车的表现会非常不同，即使他们是从相同的y值开始的。

使用"forwards“关键字，那么动画元素会按照@keyframes的定义运动直到动画结束，最后会停在动画结束时的状态。在动画中结合使用stops()函数，假如steps第二个参数使用了"end"，会使得动画从开始运动的状态到最终静止的状态走过的”步数“和steps中定义的”步数“不同。你会发现，汽车比你定义的steps()中的数值多走了一步，这可能也取决于你从哪个角度去看这个动画。

这听起来好像有点乱，没关系，我们可以仔细看看这些demo。主要是注意这些变量的设置是如何影响你的动画和"步数"的。下面是使用了infinite关键字和forwards关键字的两辆汽车:


```css

.contain-car {
   animation: drive 4s steps(4, end) infinite;
}

.contain-car-2 {
  animation: drive 4s steps(4, end) forwards;
}

```


<img src="http://woaixiangbao.github.io/demo/20150211/timingcars.png" />

现在，让我们一起看看这些代码并去仔细揣摩其中的原理。

#### Steps Demos

你可以从这些[Demos](https://woaixiangbao.github.io/demo/20150211/index.html)中看到下面这些内容：

1.[一个纯粹的CSS闹钟](https://woaixiangbao.github.io/demo/20150211/index.html)

2.[一些纯CSS的节能汽车](https://woaixiangbao.github.io/demo/20150211/car.html)

3.[前进中的熊脚印](https://woaixiangbao.github.io/demo/20150211/pawprints.html)

4.[一个纯CSS制作的进度圈](https://woaixiangbao.github.io/demo/20150211/progress.html)

#### CSS 闹钟

<img src="http://woaixiangbao.github.io/demo/20150211/clockpreview.png" />

steps()的完美演示就是闹钟了。我们需要让闹钟的指针旋转，但却不是平滑连续的运动。使用steps()我们可以模拟出一个真正闹钟的指针运动。

这里使用的steps()需要用到一点数学知识，但是不会太难。我们想让闹钟的秒针在60秒内用60个“步”旋转360度。


```css

.second {
  animation: tick-tock 60s steps(60, end) infinite;
}

@keyframes tick-tock {
  to {/*这里直接使用了to，而没有用from，意思是动画终点，不懂的可以查一下animation的语法*/
    transform: rotate(360deg);
  }
}

```


通过上面的css可以看到，闹钟动画每一秒钟走“一步”

分针呢，我们使用了同一个@keyframes，但是需要不同的时间函数。我们知道60*60就是一分钟的秒数，也就是动画的持续时间。那么分针就是60秒走完一圈，也就是旋转360度需要60“步”。


```css

.minute {
  animation: tick-tock 3600s steps(60, end) infinite;
}

```


很简单吧！

>严重声明：不要把这个当做真的闹钟用到你的生活中去，因为，这是一个CSS闹钟！

#### CSS 汽车

<img src="http://woaixiangbao.github.io/demo/20150211/carspreview.png" />

CSS汽车的例子中，steps()分别使用了“end”和“start”关键字。使用了“start”的汽车，会向右运动，并且会在“第一步”结束的时候停顿一下。看起来，使用了“start”关键字的汽车的位置会比使用了“end”关键字的汽车位置上更靠右边一点，但是，如果你给动画函数增加一个"delay"属性给第二辆汽车的话，你就能看到两辆汽车都是从同一个起点开始运动了。

"end"关键字使得动画在原动画设计的前一步就开始运动了。在例子中，第一辆车运动的时候其实已经是它的第二步了，这样就导致两辆车无法同步。白色的线是动画的开始和结束点。

>我对end和start翻译的怪怪的，总觉得有点问题，我的理解和作者描述的好像正好相反，如果有谁有更通俗易懂的解释麻烦告诉我一声，谢谢。


```css

.contain-car {
  animation: drive 4s steps(4, end) infinite;
}
 
.contain-car-2 {
  animation: drive 4s steps(4, start) infinite;
}
 
@keyframes drive {
  to {
    transform: translateX(640px);
  }
}

```


#### 熊脚印

<img src="http://woaixiangbao.github.io/demo/20150211/printspreview.png">

另一种理解steps()的办法就是真的去做一个真的“步”。这个例子我们将使用熊脚印。这个例子中使用了一个含有六只熊脚印的图片，这个图片被一个div标签包裹，我们想使用steps()来移动div标签来模仿真的熊走路时留下的爪印。

如果不使用steps()，那么只能使用一种连续的运动来移动div标签（也就是一点点出现，那么你可能会看到一只脚印一点点出现），而这明显不是我们所需要的。我们需要一个一个的整只脚印立刻全部出现。

如前所述，这里有6个脚印，我们需要移动这个div所在的图片（675像素宽）立刻出现一个个的整个脚印。


```css

.cover {
  animation: walk 7s steps(7, end) infinite;
}

@keyframes walk {
  to {
    transform: translateX(675px);
  }
}

```


我们的div将会在7秒钟的时间内分成7步向右移动675像素。大概就是每一步移动的宽度是96像素宽。"end"意思就是说我们的动画的循环状态将会停留在第一秒的那一步完成的位置。

#### CSS 进度圈

<img src="/demo/20150211/loaderpreview.png">

在这个例子中，我们会使用"start"这个关键字来变化透明(opacity)属性。我们可以使用steps()通过明确的声明过渡的步数来改变opacity的透明度。使用“start”关键字可以使得颜色以百分比的形式一步步改变并最终使颜色可见度变为完全可见，也就是透明度为1.如果在这里使用“end”关键字的话，最后圆圈的状态将会变成完全不可见，也就是动画刚开始的状态。

整个动画过程将会持续5秒钟总共5步，也就是一秒钟一步。


```css

.circle {
  animation: fill 5s steps(5, start) forwards;
}

@keyframes fill {
  to {
    opacity: 1;
  }
}

```


完成度的百分数值也使用steps()来完成。


```css

.percentage {
  animation: load 4s steps(4, end) forwards;
}

@keyframes load {
  to {
    transform: translateY(-380px);
  }
}

```


所有的百分数都是写死在div里面的，我们只是把这个含有百分数的div向上移动了380像素。最开始显示的是20%这个数值，所以我们分4步依次移动这个div，这样就会显示40%，60%，80%和100%。

这次，我们使用了“填充模式”中的forwards“关键字，这和我们之前的例子中的关键字”infinite“不同。如果我们使用”infinite“关键字的话，我们将看不到100%这个数值了，因为"forwards"关键字让动画比我们生命的steps()多走了一步。

#### 写在最后

steps()不太容易理解，但是只要你会了就不容易忘记。CSS 函数让我们写动画时，既可以定义为步骤动画，又可以定义连续的动画。希望这些demos能让你有所收获！

## 总结一下

我觉得我翻译完这个文章以后还是有一些迷惑的地方，但是收获也很大，我学到了：

1.steps()有两个参数，第一个参数是一个正整数。

2.steps()的第二个参数可选的值为"start"和"end"，如果你不写这个参数，默认就是end。

3.end的意思是说动画从第一“步”的结束的位置开始，start的意思是说动画从第一“步”的开始的位置开始。

4.steps()可以配合填充模式使用，可以使用的填充模式的值有forwards和infinite，forwards关键字会让动画完成后不再循环，并且总步数要比声明的步数多一步。如果使用的是infinite关键字，那么就是无限循环了。

基本就这样吧。
