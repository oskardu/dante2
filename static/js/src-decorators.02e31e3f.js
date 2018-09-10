(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/decorators.mdx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),c=o("./src/site/data/poc.js"),d=o("./src/editor/components/Dante/Dante.js"),i=o("./src/editor/components/blocks/code.js"),p=o("./src/editor/components/decorators/prism.js"),m=o("./src/editor/components/decorators/link.js"),l=o("./src/editor/utils/find_entities.js"),f=o("./node_modules/draft-js/lib/Draft.js"),u=o("./node_modules/draft-js-multidecorators/index.js"),D=o.n(u);function j(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}t.default=function(e){var t=e.components,o=j(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"decorators"}},r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#decorators"}},r.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Decorators"),r.a.createElement(a.MDXTag,{name:"p",components:t},'To support flexibility for custom rich text, Draft provides a "decorator" system.\n',r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://draftjs.org/docs/advanced-topics-decorators.html"}},"https://draftjs.org/docs/advanced-topics-decorators.html")),r.a.createElement(a.MDXTag,{name:"p",components:t},"Here is an example of the default decorators "),r.a.createElement(s.d,{__position:0,__code:"<Dante\n  content={h1}\n  widgets={[CodeBlockConfig()]}\n  decorators={context => {\n    return new MultiDecorator([\n      PrismDraftDecorator(),\n      new CompositeDecorator([\n        {\n          strategy: findEntities.bind(null, 'LINK', context),\n          component: Link,\n        },\n      ]),\n    ])\n  }}\n/>",__scope:{props:o,h1:c.d,Dante:d.a,CodeBlockConfig:i.a,PrismDraftDecorator:p.a,Link:m.a,findEntities:l.a,CompositeDecorator:f.CompositeDecorator,MultiDecorator:D.a}},r.a.createElement(d.a,{content:c.d,widgets:[Object(i.a)()],decorators:function(e){return new D.a([Object(p.a)(),new f.CompositeDecorator([{strategy:l.a.bind(null,"LINK",e),component:m.a}])])}})))}}}]);