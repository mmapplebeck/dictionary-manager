(this["webpackJsonpdictionary-manager"]=this["webpackJsonpdictionary-manager"]||[]).push([[0],{243:function(e,n,t){e.exports=t(344)},248:function(e,n,t){},344:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),i=t.n(c),o=(t(248),t(396)),l=t(49),u=t(76),m=t(397),s=t(388),d=t(202),f=t(380),b=t(168),g=t(58),p=t(381),E=Object(d.a)((function(e){return{root:{zIndex:e.zIndex.drawer+1}}}));var O=function(){var e=E();return r.a.createElement(f.a,{position:"fixed",className:e.root},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h6",noWrap:!0},r.a.createElement(p.a,{component:l.b,color:"inherit",to:"/"},"Dictionary Manager"))))},j=t(122),v=Object(d.a)((function(e){return{paper:{padding:e.spacing(2)}}}));var y=function(e){var n=e.header,t=e.children,a=v();return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(j.a,{className:a.paper},t))},h=(t(169),t(26)),w=t(394),D=t(393),C=t(357),R=t(172),I=t(390),N=t(389),x=t(400),T=t(208),k=t.n(T),S=t(382),A=t(20),L=t(85),F=t(170),M=t(124),P=t.n(M),z=t(171),_=t(198),Y=t(399),W=t(387),B=t(385),J=t(386),U=t(384);var q=function(e){var n=e.open,t=e.title,a=e.description,c=e.content,i=e.actions,o=e.onClose,l=Object(A.a)(),u=Object(S.a)(l.breakpoints.down("sm"));return r.a.createElement(Y.a,{open:n,onClose:o,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",fullScreen:u},r.a.createElement(U.a,{id:"dialog-title"},t),(c||a)&&r.a.createElement(B.a,{id:"dialog-description"},a&&r.a.createElement(J.a,null,a),c),r.a.createElement(W.a,null,i))},V="ADD_DICTIONARY",G="DELETE_DICTIONARY",$="ADD_DICTIONARY_ITEM",H="UPDATE_DICTIONARY_ITEM",K="DELETE_DICTIONARY_ITEM",Q="VALIDATE_DICTIONARY_ITEMS";var X=Object(h.b)(null,(function(e,n){var t=n.name;return{deleteDictionary:function(){return e(function(e){return{type:G,payload:e}}(t))}}}))((function(e){var n=e.name,t=e.deleteDictionary,c=e.className,i=Object(a.useState)(!1),o=Object(L.a)(i,2),l=o[0],u=o[1],m=function(){u(!1)};return r.a.createElement("div",{className:c},r.a.createElement(_.a,{title:"Delete","aria-label":"delete"},r.a.createElement(F.a,{onClick:function(){u(!0)}},r.a.createElement(P.a,null))),r.a.createElement(q,{title:"Are you sure you want to delete ".concat(n," dictionary?"),description:"You will lose all items in this dictionary.",actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:m,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){t(),m()},color:"primary"},"Delete")),open:l,onClose:m}))})),Z=function(e){return"/".concat(encodeURIComponent(e))},ee=t(200),ne=t(206),te=t.n(ne),ae=t(207),re=t.n(ae),ce=t(17),ie="Cycle",oe="Chain",le="Fork",ue="Duplicate",me={error:"error",warning:"warning"},se=Object(ce.Record)({name:"",level:""}),de=Object(d.a)((function(e){var n=e.palette.error.dark,t=e.palette.warning.dark,a=function(e){return e===me.error};return{chip:function(e){return{color:a(e.level)?n:t,borderColor:a(e.level)?n:t}},icon:function(e){return{color:a(e.level)?n:t}}}}));var fe=function(e){var n=e.level,t=e.label,a=e.className,c=de({level:n});return r.a.createElement(ee.a,{icon:n===me.error?r.a.createElement(te.a,{className:c.icon}):r.a.createElement(re.a,{className:c.icon}),label:t,variant:"outlined",className:"".concat(a," ").concat(c.chip)})},be=t(95),ge=function(e){return e.get("dictionaries")},pe=Object(be.a)(ge,(function(e){return e.map((function(e){return e.name}))})),Ee=Object(be.a)(ge,(function(e,n){return n}),(function(e,n){return e.find((function(e){return e.name===decodeURIComponent(n)}))})),Oe=Object(be.a)(Ee,(function(e){return e?e.items:Object(ce.List)()})),je=Object(be.a)(Oe,(function(e){return e.reduce((function(e,n){return e+(n.errors?n.errors.filter((function(e){return e.level===me.error})).size:0)}),0)})),ve=Object(be.a)(Oe,(function(e){return e.reduce((function(e,n){return e+(n.errors?n.errors.filter((function(e){return e.level===me.warning})).size:0)}),0)})),ye=function(e,n){return"".concat(e).concat(n>1?"s":"")},he=Object(d.a)((function(e){return{warning:{marginLeft:e.spacing(1)}}}));var we=Object(u.g)(Object(h.b)((function(e,n){var t=n.name;return{errorCount:je(e,t),warningCount:ve(e,t)}}))((function(e){e.name;var n=e.errorCount,t=e.warningCount,a=he();return 0===n&&0===t?null:r.a.createElement(s.a,{container:!0},n>0&&r.a.createElement(fe,{level:me.error,label:"".concat(n," ").concat(ye("Error",n))}),t>0&&r.a.createElement(fe,{className:n>0?a.warning:"",level:me.warning,label:"".concat(t," ").concat(ye("Warning",t))}))}))),De=Object(d.a)((function(e){return{secondaryAction:{display:"flex",alignItems:"center"},delete:{marginLeft:e.spacing(1)}}}));var Ce=function(e){var n=e.name,t=(e.deleteDictionary,De()),a=Object(A.a)(),c=Object(S.a)(a.breakpoints.up("sm"));return r.a.createElement(C.a,{button:!0,component:l.b,to:Z(n)},r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,null))),r.a.createElement(R.a,{primary:n}),r.a.createElement(I.a,{className:t.secondaryAction},c&&r.a.createElement(we,{name:n}),r.a.createElement(X,{name:n,className:t.delete})))},Re=t(199),Ie=t(126),Ne=t.n(Ie);var xe=Object(h.b)((function(e){return{dictionaryNames:pe(e)}}),(function(e){return{addDictionary:function(n){return e(function(e){return{type:V,payload:e}}(n))}}}))((function(e){var n=e.addDictionary,t=e.dictionaryNames,c=Object(a.useState)(""),i=Object(L.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(null),m=Object(L.a)(u,2),s=m[0],d=m[1],f=Object(a.useState)(!1),b=Object(L.a)(f,2),g=b[0],p=b[1],E=Object(a.useState)(!1),O=Object(L.a)(E,2),j=O[0],v=O[1],y=function(){v(!1),p(!1),d(null),l("")},h=Object(a.useCallback)((function(){n(o.trim()),y()}),[o,n]),w=function(e){var n="";return e?function(e){return!t.contains(e)}(e)||(n="That name is already taken. Please use a unique name."):n="Name must not be blank.",n};return Object(a.useEffect)((function(){!s&&g&&h()}),[s,h,g]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{title:"Add","aria-label":"add"},r.a.createElement(F.a,{onClick:function(){v(!0)}},r.a.createElement(Ne.a,null))),r.a.createElement(q,{title:"Add Dictionary",description:"Once you create your new dictionary, you will be able to add items to it.",content:r.a.createElement(Re.a,{required:!0,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,value:o,onChange:function(e){l(e.target.value)},error:!!s,helperText:s}),actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:y,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){d(w(o.trim())),p(!0)},color:"primary"},"Create")),open:j,onClose:y}))})),Te=Object(ce.Record)({name:"",items:Object(ce.List)()}),ke=Object(d.a)((function(e){return{emptyTextDivider:{marginTop:e.spacing(1)},emptyText:{paddingTop:e.spacing(2)}}}));var Se=Object(h.b)((function(e){return{dictionaries:ge(e)}}))((function(e){var n=e.dictionaries,t=ke();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{container:!0,justify:"flex-end"},r.a.createElement(xe,null)),n.size>0&&r.a.createElement(D.a,null,n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(Ce,{name:e.name}),r.a.createElement(w.a,null))}))),!n.size&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:t.emptyTextDivider}),r.a.createElement(s.a,{container:!0,justify:"center"},r.a.createElement(g.a,{variant:"body2",className:t.emptyText},"You have no dictionaries. Add a dictionary to start editing."))))})),Ae=t(153),Le=t.n(Ae),Fe=t(220),Me=t.n(Fe),Pe=t(212),ze=t.n(Pe),_e=t(218),Ye=t.n(_e),We=t(156),Be=t.n(We),Je=t(155),Ue=t.n(Je),qe=t(213),Ve=t.n(qe),Ge=t(215),$e=t.n(Ge),He=t(216),Ke=t.n(He),Qe=t(217),Xe=t.n(Qe),Ze=t(221),en=t.n(Ze),nn=t(214),tn=t.n(nn),an=t(219),rn=t.n(an),cn=t(222),on=t.n(cn),ln={Add:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ne.a,Object.assign({},e,{ref:n}))})),Check:Object(a.forwardRef)((function(e,n){return r.a.createElement(ze.a,Object.assign({},e,{ref:n}))})),Clear:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ue.a,Object.assign({},e,{ref:n}))})),Delete:Object(a.forwardRef)((function(e,n){return r.a.createElement(P.a,Object.assign({},e,{ref:n}))})),DetailPanel:Object(a.forwardRef)((function(e,n){return r.a.createElement(Be.a,Object.assign({},e,{ref:n}))})),Edit:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ve.a,Object.assign({},e,{ref:n}))})),Export:Object(a.forwardRef)((function(e,n){return r.a.createElement(tn.a,Object.assign({},e,{ref:n}))})),Filter:Object(a.forwardRef)((function(e,n){return r.a.createElement($e.a,Object.assign({},e,{ref:n}))})),FirstPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ke.a,Object.assign({},e,{ref:n}))})),LastPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Xe.a,Object.assign({},e,{ref:n}))})),NextPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Be.a,Object.assign({},e,{ref:n}))})),PreviousPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ye.a,Object.assign({},e,{ref:n}))})),ResetSearch:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ue.a,Object.assign({},e,{ref:n}))})),Search:Object(a.forwardRef)((function(e,n){return r.a.createElement(rn.a,Object.assign({},e,{ref:n}))})),SortArrow:Object(a.forwardRef)((function(e,n){return r.a.createElement(Me.a,Object.assign({},e,{ref:n}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,n){return r.a.createElement(en.a,Object.assign({},e,{ref:n}))})),ViewColumn:Object(a.forwardRef)((function(e,n){return r.a.createElement(on.a,Object.assign({},e,{ref:n}))}))},un="Field cannot be blank",mn=Object(d.a)((function(e){return{warning:{marginLeft:e.spacing(1)}}}));function sn(e){var n=e.item,t=mn();if(!n||!n.errors||0===n.errors.length)return null;var a=n.errors.filter((function(e){return e.level===me.error})).map((function(e){return e.name})).join(", "),c=n.errors.filter((function(e){return e.level===me.warning})).map((function(e){return e.name})).join(", ");return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(fe,{level:me.error,label:a}),c&&r.a.createElement(fe,{level:me.warning,label:c,className:a?t.warning:""}))}var dn=Object(u.g)(Object(h.b)((function(e,n){var t=n.match;return{dictionary:Ee(e,t.params.name)}}),(function(e){return{addDictionaryItem:function(n,t,a){return e(function(e,n,t){return function(a){a({type:$,payload:{name:e,domain:n,range:t}}),a({type:Q,payload:{name:e}})}}(n,t,a))},updateDictionaryItem:function(n,t,a,r){return e(function(e,n,t,a){return function(r){r({type:H,payload:{name:e,index:n,domain:t,range:a}}),r({type:Q,payload:{name:e}})}}(n,t,a,r))},deleteDictionaryItem:function(n,t){return e(function(e,n){return function(t){t({type:K,payload:{name:e,index:n}}),t({type:Q,payload:{name:e}})}}(n,t))}}}))((function(e){var n=e.dictionary,t=e.addDictionaryItem,c=e.updateDictionaryItem,i=e.deleteDictionaryItem,o=Object(a.useMemo)((function(){return n.items.toJS()}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{name:n.name}),r.a.createElement(Le.a,{options:{showTitle:!1,paging:!1,search:n.items.size>0,actionsColumnIndex:2},components:{Container:function(e){return r.a.createElement("div",e)},EditField:function(e){var n=!e.value;return r.a.createElement(Ae.MTableEditField,Object.assign({},e,{error:n,helperText:n&&un,fullWidth:!0}))}},icons:ln,columns:[{title:"Domain",field:"domain"},{title:"Range",field:"range"},{field:"error",editable:"never",sorting:!1,render:function(e){return r.a.createElement(sn,{item:e})}}],localization:{body:{emptyDataSourceMessage:"You have no dictionary items. Create an item to start populating this dictionary."},header:{actions:""}},data:o,editable:{onRowAdd:function(e){var a=e.domain,r=e.range;return new Promise((function(e,c){a&&r?(t(n.name,a,r),e()):c()}))},onRowUpdate:function(e,t){var a=e.domain,r=e.range;return new Promise((function(e,i){if(a&&r){var l=o.indexOf(t);c(n.name,l,a,r),e()}else i()}))},onRowDelete:function(e){return new Promise((function(t,a){var r=o.indexOf(e);i(n.name,r),t()}))}}}))})));var fn=Object(u.g)(Object(h.b)((function(e,n){var t=n.match;return{dictionary:Ee(e,t.params.name)}}))((function(e){return e.dictionary?r.a.createElement(dn,null):r.a.createElement(u.a,{to:"/"})}))),bn=t(398);var gn=function(e){var n=e.heading;return r.a.createElement(g.a,{variant:"h4",component:"h1"},n)},pn=Object(d.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(1)},header:{marginBottom:e.spacing(1)}}}));var En=function(e){var n=e.name,t=pn();return r.a.createElement(r.a.Fragment,null,r.a.createElement(bn.a,{"aria-label":"breadcrumb",className:t.breadcrumbs},r.a.createElement(p.a,{component:l.b,color:"inherit",to:"/"},"Dictionaries"),r.a.createElement(g.a,{color:"textPrimary"},n)),r.a.createElement(s.a,{container:!0,justify:"space-between",alignItems:"center",className:t.header},r.a.createElement(gn,{heading:"".concat(n," Dictionary")}),r.a.createElement(X,{name:n})))},On=Object(d.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,main:{width:"100%",flexGrow:1,padding:e.spacing(3)},header:{marginBottom:e.spacing(1)}}}));var jn=function(){var e=On();return r.a.createElement(l.a,{basename:"/dictionary-manager"},r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null),r.a.createElement(O,null),r.a.createElement("main",{className:e.main},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(m.a,{maxWidth:"lg"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/:name",render:function(e){var n=e.match;return r.a.createElement(y,{header:r.a.createElement(En,{name:n.params.name})},r.a.createElement(fn,null))}}),r.a.createElement(u.b,null,r.a.createElement(y,{header:r.a.createElement(s.a,{container:!0,className:e.header},r.a.createElement(gn,{heading:"Dictionaries"}))},r.a.createElement(Se,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var vn=t(223),yn=Object(ce.Record)({domain:"",range:"",errors:Object(ce.List)()}),hn=function(e){var n=e.reduce((function(e,n){return e.get(n.domain)?e.update(n.domain,(function(e){return e.push(n.range)})):e.set(n.domain,Object(ce.List)([n.range]))}),Object(ce.Map)()),t=e.reduce((function(e,n){return e.get(n.range)?e.update(n.range,(function(e){return e.push(n.domain)})):e.set(n.range,Object(ce.List)([n.domain]))}),Object(ce.Map)());return e.map((function(e){return e.update("errors",(function(){return function(e,n,t){var a=[],r=n.get(e.range)?n.get(e.range).toSet():null,c=t.get(e.domain)?t.get(e.domain).toSet():null;r&&r.has(e.domain)&&a.push(se({name:ie,level:me.error})),(r&&(!r.has(e.domain)||r.size>1)||c&&(!c.has(e.range)||c.size>1))&&a.push(se({name:oe,level:me.warning}));var i=n.get(e.domain).countBy((function(e){return e}));return i.size>1&&a.push(se({name:le,level:me.warning})),i.get(e.range)>1&&a.push(se({name:ue,level:me.warning})),Object(ce.List)(a)}(e,n,t)}))}))},wn=Object(ce.Map)({dictionaries:Object(ce.List)()});function Dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ce.List)(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $:return e.push(yn({domain:n.payload.domain,range:n.payload.range}));case H:return e.update(n.payload.index,(function(){return yn({domain:n.payload.domain,range:n.payload.range})}));case K:return e.delete(n.payload.index);case Q:return hn(e);default:return e}}function Cn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ce.List)(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case V:return e.push(Te({name:n.payload}));case G:return e.filter((function(e){return e.name!==n.payload}));case $:case H:case K:case Q:return e.map((function(e){return e.name===n.payload.name?Te({name:e.name,items:Dn(e.items,n)}):e}));default:return e}}var Rn=function(){return Object(vn.combineReducers)({dictionaries:Cn})},In="dictionaryManager",Nn=t(46),xn=t(224),Tn=t(225);var kn,Sn=function(){try{var e=localStorage.getItem(In);return null===e?wn:(n=JSON.parse(e),Object(ce.Map)({dictionaries:Object(ce.List)(n.dictionaries.map((function(e){return Te({name:e.name,items:Object(ce.List)(e.items.map((function(e){return yn({domain:e.domain,range:e.range,errors:Object(ce.List)(e.errors.map((function(e){return e?se({name:e.name,level:e.level}):null})))})})))})})))}))}catch(t){return wn}var n}(),An=(kn=Sn,Object(Nn.createStore)(Rn(),kn,Object(xn.composeWithDevTools)(Object(Nn.applyMiddleware)(Tn.a))));An.subscribe((function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem(In,n)}catch(t){}}(An.getState())})),i.a.render(r.a.createElement(h.a,{store:An},r.a.createElement(jn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[243,1,2]]]);
//# sourceMappingURL=main.f6ff4b28.chunk.js.map