# 自定义选择模板组件

## 引用方法
1. 将 `template` 文件夹复制到 `ueditor` 目录下
2. 在引用 `ueditor.all.js` 的语句下面引用 `template.js`
3. 在页面的头部引入 `template.css`


## 修改模板

模板数据以JSON的形式存放在 `data.js`

格式如下：

```js
  var templates = [
    {
      img:'',                          // 模版略缩图
      tit:'模板标题',                  // 模板标题
      html: '<h1>模板一<h1>'          // 模板内容
    },
    {
      img:'',
      tit:'模板标题',
      html: '<h1>模板一<h1>'
    }
  ]
```
