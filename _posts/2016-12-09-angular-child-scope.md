---
layout: post
title: angular 指令之scope绑定
description: angular1.5.8版本的指令scope绑定方式
categories: [javascript, angular, directive,scope]
---

### 1.5.8之前，指令绑定

大概可以参考这篇文章，已经很详细了：http://www.cnblogs.com/liulangmao/p/3990720.html

### 1.5.8 指令绑定

```
<!DOCTYPE html>
<html ng-app="dirAppModule">
<head>
  <title>20.7.4 指令-scope</title>
  <meta charset="utf-8">
  <script src="../angular.js"></script>
  <script type="text/ng-template" id="text.html">
    <div>
      <h3 style="background-color:{{color}}" ng-transclude></h3>
    </div>
  </script>
  <script src="script.js"></script>
</head>
<body>
  <div ng-controller="bgColor">
    <p>父作用域的color值:{{color}}</p>
    <input ng-model="color" placeholder="请输入颜色值"/>
    <br/>
    <cd-hello><span>code_bunny</span></cd-hello>
  </div>
</body>
</html>

```

