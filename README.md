# cs2-skin-owl

使用owl框架构建的一个cs2饰品数据网站前端

# repo standard

实现功能类的提交，提交信息中要以：`"feat: "`开头，并且要在README.md中编写对应的development topic。
问题修复类的提交，提交信息中要以：`"fix: "`开头，注意修订README.md中对应的development topic。

# development topic

这里记录一些开发主题，主题的顺序基本上与commit的顺序一致

## init-project

按照官方文档说明，初始化owl项目：https://github.com/odoo/owl/blob/master/doc/learning/quick_start.md#standard-javascript-project

并做了如下改动：
* 去掉tests脚本
* 精简package.json，并更新所有依赖包的版本
* 按照新的webpack版本，重新编写webpack.config.js
* 支持导入scss样式

## app-structure

整个网站的组件层级结构示意图：

```
   +---->     +-----------------------------+
   |          |            NavBar           |
   |          +-----------------------------+   <----+
   |          |                             |        |
   |          +                             +        |
   |          |                             |        |
WebClient     +           Content           +  MainContentContainer
   |          |                             |        |
   |          +                             +        |
   |          |                             |        |
   |          +-----------------------------+   <----+
   |          |            Footer           |
   +---->     +-----------------------------+
```

## event-bus

1. 引入EventBus，实现了非父子关系的组件之间的消息传递。

2. 基于第一条，实现了导航栏的效果，即点击导航栏中的按钮，“跳转”到不同的页面，具体实现方式为：
    * NavBarButton按钮具有两个属性，一个是“按钮名”，另一个是“需要显示的Content组件”。
    * MainContentContainer中定义了一个“切换显示内容”的事件。
    * 在NavBarButton中，定义一个t-on-click事件，此事件被触发后，随即触发MainContent中定义的“切换显示内容”的事件，并将“需要显示的Content组件”传递过去。
    * 在MainContentContainer中定义“切换显示内容”事件的Handler方法，将event中携带的组件类赋值给useState对象的content属性，这个属性在模板中以`<t t-component="" />`的方式被使用。
