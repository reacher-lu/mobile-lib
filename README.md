## overview


罗列一下备选的移动web开发类库，简单对比他们的加载，执行时间

在实际应用中，去纠结某一个方法执行一万遍，不同类库性能的差异，意义不是特别大，目前的优化的方向还是减小类库体积，执行时间

## detail


### jquery

最新版jquery


### jquery-build

- 在gruntfile中增加要删除的模块，进入到目录输入grunt，文件会自动打包到lib文件夹，可使用 jquery-build.html 调试&查看效果

- 例如：不删除任何模块，打包后为84K。删除  "ajax", "deprecated", "sizzle"后，打包后的文件体积减少到了58k

- 打开jquery API：[http://api.jquery.com/](http://api.jquery.com/) 在左侧的模块中，以下几个是支持移除的

  + `Ajax`

  + `CSS`

  + `Deprecated`

  + `Event Alias`

  + `Dimensions`

  + `Effects`

  + `Offset`

- 可以看一下对应的方法，移除任何一个模块，这个模块里面对应的所有方法将不再可用


### zepto

- github [https://github.com/madrobby/zepto](https://github.com/madrobby/zepto)

- 官网 [http://zeptojs.com/](http://zeptojs.com/)

- zepto builder [http://github.e-sites.nl/zeptobuilder/](http://github.e-sites.nl/zeptobuilder/)

- zepto默认构建的库大小为24k（以前好像是18还是多少）

<img src="images/zepto.png"/>








