## overview

罗列一下备选的移动web开发类库，简单对比他们的加载，执行时间


## detail

### jquery-build

- 在gruntfile中增加要删除的模块，进入到目录输入grunt，文件会自动打包到lib文件夹，可使用 jquery-build.html 调试&查看效果

- 例如：不删除任何模块，打包后为84K。删除  "ajax", "deprecated", "sizzle"后，打包后的文件体积减少到了58k

- 打开jquery API：(http://api.jquery.com/)[http://api.jquery.com/]  在左侧的模块中，以下几个是支持移除的

  + `Ajax`

  + `CSS`

  + `Deprecated`

  + `Event Alias`

  + `Dimensions`

  + `Effects`

  + `Offset`

- 可以看一下对应的方法，移除任何一个模块，这个模块里面对应的所有方法将不再可用









