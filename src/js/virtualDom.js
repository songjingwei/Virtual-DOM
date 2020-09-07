function setAttrs(node, prop, value){
    switch (prop){
        case 'value':
            if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
                node.value = value;
            } else {
                node.setAttribute(prop, value);
            }
            break;
        case 'style': 
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(prop, value);
            break;
    }
}

function render(vDom){
    const { type, props, children } = vDom;
    const el = document.createElement(type);
    
    for(let key in props){
        setAttrs(el, key, props[key]);
    }
    
    children.map(c => {
        if(c instanceof Element){
            c = render(c);
        } else {
            c = document.createTextNode(c);
        }
        el.appendChild(c);
        return c;
    })
    
    return el;
}

function renderDOM(rDom, rootElName){
    var rootEl = document.querySelector(rootElName);
    if(rootEl){
        rootEl.appendChild(rDom);
    } else {
        console.log(`您查询的${rootElName}节点不存在，请自行检查！`);
    }
}

export {
    createElement,
    render,
    setAttrs,
    renderDOM,
}