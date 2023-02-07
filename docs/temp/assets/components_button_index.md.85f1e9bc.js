import{V as A,_ as m,c as _,a as i,w as D,b as o,d as s,r as C,o as h}from"./app.4e615695.js";const{defineComponent:g}=A,v=g({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:c,withCtx:e,createVNode:l,createElementVNode:a,Fragment:y,openBlock:p,createElementBlock:r}=A,u={style:{"margin-bottom":"20px"}},E={style:{"margin-bottom":"20px"}},d={style:{"margin-bottom":"20px"}},F={style:{"margin-bottom":"20px"}},b={style:{"margin-bottom":"20px"}};function z(S,j){const n=c("zs-button");return p(),r(y,null,[a("div",u,[l(n,{color:"blue"},{default:e(()=>[t("主要按钮")]),_:1}),l(n,{color:"green"},{default:e(()=>[t("绿色按钮")]),_:1}),l(n,{color:"gray"},{default:e(()=>[t("灰色按钮")]),_:1}),l(n,{color:"yellow"},{default:e(()=>[t("黄色按钮")]),_:1}),l(n,{color:"red"},{default:e(()=>[t("红色按钮")]),_:1})]),a("div",E,[l(n,{color:"blue",plain:""},{default:e(()=>[t("朴素按钮")]),_:1}),l(n,{color:"green",plain:""},{default:e(()=>[t("绿色按钮")]),_:1}),l(n,{color:"gray",plain:""},{default:e(()=>[t("灰色按钮")]),_:1}),l(n,{color:"yellow",plain:""},{default:e(()=>[t("黄色按钮")]),_:1}),l(n,{color:"red",plain:""},{default:e(()=>[t("红色按钮")]),_:1})]),a("div",d,[l(n,{size:"small",plain:""},{default:e(()=>[t("小按钮")]),_:1}),l(n,{size:"medium",plain:""},{default:e(()=>[t("中按钮")]),_:1}),l(n,{size:"large",plain:""},{default:e(()=>[t("大按钮")]),_:1})]),a("div",F,[l(n,{color:"blue",round:"",plain:"",icon:"search"},{default:e(()=>[t("搜索按钮")]),_:1}),l(n,{color:"green",round:"",plain:"",icon:"edit"},{default:e(()=>[t("编辑按钮")]),_:1}),l(n,{color:"gray",round:"",plain:"",icon:"check"},{default:e(()=>[t("成功按钮")]),_:1}),l(n,{color:"yellow",round:"",plain:"",icon:"message"},{default:e(()=>[t("提示按钮")]),_:1}),l(n,{color:"red",round:"",plain:"",icon:"delete"},{default:e(()=>[t("删除按钮")]),_:1})]),a("div",b,[l(n,{color:"blue",round:"",plain:"",icon:"search"}),l(n,{color:"green",round:"",plain:"",icon:"edit"}),l(n,{color:"gray",round:"",plain:"",icon:"check"}),l(n,{color:"yellow",round:"",plain:"",icon:"message"}),l(n,{color:"red",round:"",plain:"",icon:"delete"})])],64)}return{render:z,...{}}}(),"render-demo-1":function(){const{resolveComponent:t,createVNode:c,createTextVNode:e,withCtx:l,openBlock:a,createElementBlock:y}=A,p={class:"flex flex-row"};function r(E,d){const F=t("zs-button");return a(),y("div",p,[c(F,{icon:"edit",plain:""}),c(F,{icon:"delete",plain:""}),c(F,{icon:"share",plain:""}),c(F,{round:"",plain:"",icon:"search"},{default:l(()=>[e("搜索")]),_:1})])}return{render:r,...{}}}()}}),G=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"图标按钮","slug":"图标按钮","link":"#图标按钮","children":[]}],"relativePath":"components/button/index.md"}'),x=o("h1",{id:"button-按钮",tabindex:"-1"},[s("Button 按钮 "),o("a",{class:"header-anchor",href:"#button-按钮","aria-hidden":"true"},"#")],-1),f=o("p",null,"常用操作按钮",-1),B=o("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),w=o("p",null,"基础的函数用法",-1),k=o("div",null,[s("使用"),o("code",null,"size"),s("、"),o("code",null,"color"),s("、"),o("code",null,"pain"),s("、"),o("code",null,"round"),s("属性来定义 Button 的样式。")],-1),V=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-bottom:20px;"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"blue"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"主要按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"green"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"绿色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"gray"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"灰色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"yellow"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"黄色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"red"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"红色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-bottom:20px;"),o("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"  >")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"blue"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"朴素按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"green"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"绿色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"gray"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"灰色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"yellow"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"黄色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"red"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"红色按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-bottom:20px;"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"small"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"小按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"medium"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"中按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"large"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"大按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-bottom:20px;"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"blue"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"search"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"搜索按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"green"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"edit"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"编辑按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"gray"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"check"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"成功按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"yellow"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"message"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"提示按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"red"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"delete"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"删除按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-bottom:20px;"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"blue"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"search"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"green"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"edit"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"gray"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"check"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"yellow"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"message"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"color"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"red"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"delete"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),N=o("h2",{id:"图标按钮",tabindex:"-1"},[s("图标按钮 "),o("a",{class:"header-anchor",href:"#图标按钮","aria-hidden":"true"},"#")],-1),T=o("p",null,"带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。",-1),$=o("div",null,"设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。",-1),J=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"class"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"flex flex-row"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"edit"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"delete"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"share"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"round"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"plain"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"icon"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"search"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"搜索"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"zs-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1);function O(t,c,e,l,a,y){const p=C("render-demo-0"),r=C("demo"),u=C("render-demo-1");return h(),_("div",null,[x,f,B,w,i(r,{customClass:"undefined",sourceCode:`<template>
  <div style="margin-bottom:20px;">
    <zs-button color="blue">主要按钮</zs-button>
    <zs-button color="green">绿色按钮</zs-button>
    <zs-button color="gray">灰色按钮</zs-button>
    <zs-button color="yellow">黄色按钮</zs-button>
    <zs-button color="red">红色按钮</zs-button>
  </div>
  <div style="margin-bottom:20px;"
  >
    <zs-button color="blue" plain>朴素按钮</zs-button>
    <zs-button color="green" plain>绿色按钮</zs-button>
    <zs-button color="gray" plain>灰色按钮</zs-button>
    <zs-button color="yellow" plain>黄色按钮</zs-button>
    <zs-button color="red" plain>红色按钮</zs-button>
  </div>
  <div style="margin-bottom:20px;">
    <zs-button size="small" plain>小按钮</zs-button>
    <zs-button size="medium" plain>中按钮</zs-button>
    <zs-button size="large" plain>大按钮</zs-button>
  </div>
  <div style="margin-bottom:20px;">
    <zs-button color="blue" round plain icon="search">搜索按钮</zs-button>
    <zs-button color="green" round plain icon="edit">编辑按钮</zs-button>
    <zs-button color="gray" round plain icon="check">成功按钮</zs-button>
    <zs-button color="yellow" round plain icon="message">提示按钮</zs-button>
    <zs-button color="red" round plain icon="delete">删除按钮</zs-button>
  </div>
  <div style="margin-bottom:20px;">
    <zs-button color="blue" round plain icon="search"></zs-button>
    <zs-button color="green" round plain icon="edit"></zs-button>
    <zs-button color="gray" round plain icon="check"></zs-button>
    <zs-button color="yellow" round plain icon="message"></zs-button>
    <zs-button color="red" round plain icon="delete"></zs-button>
  </div>
</template>
`},{description:D(()=>[k]),highlight:D(()=>[V]),default:D(()=>[i(p)]),_:1}),N,T,i(r,{customClass:"undefined",sourceCode:`<template>
  <div class="flex flex-row">
    <zs-button icon="edit" plain></zs-button>
    <zs-button icon="delete" plain></zs-button>
    <zs-button icon="share" plain></zs-button>
    <zs-button round plain icon="search">搜索</zs-button>
  </div>
</template>
`},{description:D(()=>[$]),highlight:D(()=>[J]),default:D(()=>[i(u)]),_:1})])}const H=m(v,[["render",O]]);export{G as __pageData,H as default};