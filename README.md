# Virtual-DOM
## 简介
本仓库模仿 React 的虚拟节点，写了自己的 createDOM 函数， 并通过 renderDom 函数挂载到页面上

## 代码片段
```Javascript
// 创建虚拟节点 vDom
const vDom = createElement('ul', {
    class: 'list',
    style: 'width: 600px; height: 600px; background-color: blue'
}, [
    createElement('li', {
        class: 'item',
        'data-index': 0
    }, [
        createElement('p', {
            class: 'text'
        }, [
            '第一个列表项'
        ])
    ]),
    createElement('li', {
        class: 'item',
        'data-index': 1
    }, [
       createElement('p', {
           class: 'text'

       }, [
           createElement('span', {
               class: 'title'
           }, [
               '第二个列表项'
           ])
       ]) 
    ]),
    createElement('h1', {
        style: 'color: red',
    }, ['我是宋庆坤'])
])
```

```Javascript
// render 函数将虚拟节点转换为真实的 dom 节点
const rDom = render(vDom);

// 将 Dom 节点挂载到页面上
renderDOM(rDom, '#root');
```

## 成果展示
![](https://note.youdao.com/yws/api/personal/file/WEB1603e06f130baf2f1ea75090bd601c33?method=download&shareKey=a8d1ebcc818b3142b78ad965eca846ca)

