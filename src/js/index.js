import { createElement, render, renderDOM } from './virtualDom';

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

console.log(vDom);
const rDom = render(vDom);
console.log(rDom);
renderDOM(rDom, '#root');