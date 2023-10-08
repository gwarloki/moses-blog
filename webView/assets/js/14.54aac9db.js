(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{428:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"react-基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-基础配置"}},[s._v("#")]),s._v(" React 基础配置")]),s._v(" "),a("h2",{attrs:{id:"react-与-vue-的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-与-vue-的对比"}},[s._v("#")]),s._v(" React 与 vue 的对比")]),s._v(" "),a("h3",{attrs:{id:"组件化方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化方面"}},[s._v("#")]),s._v(" 组件化方面")]),s._v(" "),a("ol",[a("li",[s._v("什么是模块化：是从"),a("code",[s._v("代码")]),s._v("的角度来进行分析的，把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发；")]),s._v(" "),a("li",[s._v("什么是组件化：是从"),a("code",[s._v("UI界面")]),s._v("的角度来进行分析的；把一些可复用的 UI 元素，抽离为单独的组件；便于项目的维护和开发；")]),s._v(" "),a("li",[s._v("组件化的好处：随着项目规模的增大，手里的组件越来越多；很方便就能把现有的组件，拼接为一个完整的页面；")]),s._v(" "),a("li",[s._v("Vue 是如何实现组件化的：通过"),a("code",[s._v(".vue")]),s._v("，文件，来创建对应的组件；\n"),a("ul",[a("li",[s._v("template：结构")]),s._v(" "),a("li",[s._v("script：行为")]),s._v(" "),a("li",[s._v("style：样式")])])]),s._v(" "),a("li",[s._v("React 如何实现组件化：React 中有组件化的概念，但是，并没有像 vue 这样的组件模板文件；React 中，一切都是以 js 来表现的；因此要学习 React，js 要合格；ES6 和 ES7（async 和 await）要会用；")])]),s._v(" "),a("h3",{attrs:{id:"移动-app-开发体验方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动-app-开发体验方面"}},[s._v("#")]),s._v(" 移动 APP 开发体验方面")]),s._v(" "),a("ol",[a("li",[s._v("Vue，结合 Weex 这门技术，提供了迁移移动端开发的体验（Weex，目前只是一个小的玩具，并没有很成功的大案例）")]),s._v(" "),a("li",[s._v("React，结合 ReactNative，也提供了无缝迁移到移动端 APP 的开发体验（RN 用的最多，也是最火最流行的）")])]),s._v(" "),a("h2",{attrs:{id:"react-中几个核心的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中几个核心的概念"}},[s._v("#")]),s._v(" React 中几个核心的概念")]),s._v(" "),a("h3",{attrs:{id:"虚拟-dom-virtual-document-object-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-virtual-document-object-model"}},[s._v("#")]),s._v(" 虚拟 DOM（Virtual Document Object Model）")]),s._v(" "),a("ol",[a("li",[s._v("DOM 的本质是什么：浏览器中的概念，用 JS 对象来表示页面上元素，并提供了操作 DOM 对象的 API；")]),s._v(" "),a("li",[s._v("什么是 React 中的虚拟 DOM：是框架中的概念，程序员用 JS 对象来模拟页面上的 DOM 和 DOM 嵌套；")]),s._v(" "),a("li",[s._v("为什么要实现虚拟 DOM（虚拟 DOM 的目的）：为了实现页面中，DOM 元素的高效更新；")])]),s._v(" "),a("p",[s._v("【注意】：浏览器中，并没有直接提供获取 DOM 树的 API；因此，我们无法拿到浏览器内存中的 DOM 树，所以提出了虚拟 DOM 树，用 js 对象模拟"),a("br"),s._v("\n【"),a("strong",[s._v("总结")]),s._v("】：用 JS 对象，来模拟页面上 DOM 嵌套关系（虚拟 DOM 是以 JS 对象的形式存在的）；")]),s._v(" "),a("h4",{attrs:{id:"一个网页呈现的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个网页呈现的过程"}},[s._v("#")]),s._v(" 一个网页呈现的过程")]),s._v(" "),a("ol",[a("li",[s._v("浏览器请求服务器获取页面 HTML 代码；")]),s._v(" "),a("li",[s._v("浏览器要在内存中，解析 DOM 结构，并在浏览器内存中，渲染出一颗 DOM 树；")]),s._v(" "),a("li",[s._v("浏览器把 DOM 树，呈现到页面上；")])]),s._v(" "),a("h3",{attrs:{id:"diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[s._v("#")]),s._v(" Diff 算法")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("tree diff")]),s._v("：新旧两颗 DOM 树，逐层对比的过程，就是 tree diff；当整颗 DOM 逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；")]),s._v(" "),a("li",[a("strong",[s._v("component diff")]),s._v("：在进行 tree diff 的时候，每一层，组件级别的对比，叫做 component diff；\n"),a("ol",[a("li",[s._v("如果对比前后，组件的类型相同，则"),a("strong",[s._v("暂时")]),s._v("认为此组件不需要被更新；")]),s._v(" "),a("li",[s._v("如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上；")])])]),s._v(" "),a("li",[a("strong",[s._v("element diff")]),s._v("：在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做 element diff；")])]),s._v(" "),a("h2",{attrs:{id:"在项目中使用-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在项目中使用-react"}},[s._v("#")]),s._v(" 在项目中使用 react")]),s._v(" "),a("ol",[a("li",[s._v("运行"),a("code",[s._v("npm i react react-dom -S")]),s._v("安装包\n"),a("ol",[a("li",[s._v("react：专门用于创建组件和虚拟 DOM 的，同时组件的生命周期都在这个包中；")]),s._v(" "),a("li",[s._v("react-dom：专门进行 DOM 操作的，最主要的应用场景，就是"),a("code",[s._v("reactDOm。render()")])])])]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("index.html")]),s._v("页面中，创建容器")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 容器，将来使用 React 创建的虚拟DOM元素，都会被渲染到这个指定的容器中--\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("导入包")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reac'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-dom'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("创建虚拟 DOM 元素")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建虚拟DOM")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数1：创建的元素的类型，字符串，表示元素的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数2：是一个对象或null，表示当前这个DOM元素的属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数3： 子节点（包括其他虚拟DOM获取 文本子节点）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数n： 其他子节点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <h1 id="myh1" title="this is a h1">这是一个h1</h1>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myh1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myh1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a h1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'这是一个h1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("渲染")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用ReactDOM把虚拟DOM渲染到页面上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数1：要渲染的那个虚拟DOM元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数2： 指定页面上一个容器，（dom元素）")]),s._v("\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("myh1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"jsx-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-语法"}},[s._v("#")]),s._v(" JSX 语法")]),s._v(" "),a("blockquote",[a("p",[s._v("什么是 JSX 语法：就是符合 xml 规范的 JS 语法；（语法格式相对来说，要比 HTML 严谨很多）")])]),s._v(" "),a("h3",{attrs:{id:"如何启用-jsx-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何启用-jsx-语法"}},[s._v("#")]),s._v(" 如何启用 JSX 语法")]),s._v(" "),a("ol",[a("li",[s._v("安装 babel 插件\n"),a("ul",[a("li",[s._v("运行"),a("code",[s._v("npm i babel-core babel-loader babel-plugin-transform-runtime -D")])]),s._v(" "),a("li",[s._v("运行"),a("code",[s._v("npm i babel-preset-env babel-preset-stage-0 -D")])])])]),s._v(" "),a("li",[s._v("安装能够识别转换 JSX 语法的包"),a("code",[s._v("babel-preset-react")]),s._v(" "),a("ul",[a("li",[s._v("运行"),a("code",[s._v("npm i babel-preset-react -D")])])])]),s._v(" "),a("li",[s._v("添加"),a("code",[s._v(".babelrc")]),s._v("配置文件")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stage-0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("添加"),a("code",[s._v("babel-loader")]),s._v("配置")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有第三方 模块的配置规则")]),s._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js|jsx$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);