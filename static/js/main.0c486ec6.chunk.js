(this["webpackJsonpdictionary-manager"]=this["webpackJsonpdictionary-manager"]||[]).push([[0],{242:function(e,n,t){e.exports=t(343)},247:function(e,n,t){},343:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),i=t.n(c),o=(t(247),t(396)),l=t(64),u=t(76),m=t(397),d=t(387),s=t(202),f=t(380),b=t(168),E=t(57),p=Object(s.a)((function(e){return{root:{zIndex:e.zIndex.drawer+1}}}));var g=function(){var e=p();return r.a.createElement(f.a,{position:"fixed",className:e.root},r.a.createElement(b.a,null,r.a.createElement(E.a,{variant:"h6",noWrap:!0},"Dictionary Manager")))},O=t(122),j=Object(s.a)((function(e){return{paper:{padding:e.spacing(2)}}}));var y=function(e){var n=e.header,t=e.children,a=j();return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(O.a,{className:a.paper},t))},v=(t(169),t(26)),h=t(393),w=t(392),D=t(356),C=t(172),R=t(389),I=t(388),N=t(400),x=t(208),T=t.n(x),k=t(381),A=t(19),S=t(85),F=t(170),P=t(124),M=t.n(P),z=t(171),L=t(198),_=t(399),Y=t(386),W=t(384),B=t(385),U=t(383);var J=function(e){var n=e.open,t=e.title,a=e.description,c=e.content,i=e.actions,o=e.onClose,l=Object(A.a)(),u=Object(k.a)(l.breakpoints.down("sm"));return r.a.createElement(_.a,{open:n,onClose:o,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",fullScreen:u},r.a.createElement(U.a,{id:"dialog-title"},t),(c||a)&&r.a.createElement(W.a,{id:"dialog-description"},a&&r.a.createElement(B.a,null,a),c),r.a.createElement(Y.a,null,i))},q="ADD_DICTIONARY",V="DELETE_DICTIONARY",G="ADD_DICTIONARY_ITEM",$="UPDATE_DICTIONARY_ITEM",H="DELETE_DICTIONARY_ITEM",K="VALIDATE_DICTIONARY_ITEMS";var Q=Object(v.b)(null,(function(e,n){var t=n.name;return{deleteDictionary:function(){return e(function(e){return{type:V,payload:e}}(t))}}}))((function(e){var n=e.name,t=e.deleteDictionary,c=e.className,i=Object(a.useState)(!1),o=Object(S.a)(i,2),l=o[0],u=o[1],m=function(){u(!1)};return r.a.createElement("div",{className:c},r.a.createElement(L.a,{title:"Delete","aria-label":"delete"},r.a.createElement(F.a,{onClick:function(){u(!0)}},r.a.createElement(M.a,null))),r.a.createElement(J,{title:"Are you sure you want to delete ".concat(n," dictionary?"),description:"You will lose all items in this dictionary.",actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:m,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){t(),m()},color:"primary"},"Delete")),open:l,onClose:m}))})),X=function(e){return"/".concat(encodeURIComponent(e))},Z=t(200),ee=t(205),ne=t.n(ee),te=t(206),ae=t.n(te),re=t(20),ce={error:"error",warning:"warning"},ie=Object(re.Record)({name:"Cycle",level:ce.error}),oe=Object(re.Record)({name:"Chain",level:ce.warning}),le=Object(re.Record)({name:"Fork",level:ce.warning}),ue=Object(re.Record)({name:"Duplicate",level:ce.warning}),me=Object(s.a)((function(e){var n=e.palette.error.dark,t=e.palette.warning.dark,a=function(e){return e===ce.error};return{chip:function(e){return{color:a(e.level)?n:t,borderColor:a(e.level)?n:t}},icon:function(e){return{color:a(e.level)?n:t}}}}));var de=function(e){var n=e.level,t=e.label,a=e.className,c=me({level:n});return r.a.createElement(Z.a,{icon:n===ce.error?r.a.createElement(ne.a,{className:c.icon}):r.a.createElement(ae.a,{className:c.icon}),label:t,variant:"outlined",className:"".concat(a," ").concat(c.chip)})},se=t(86),fe=function(e){return e.get("dictionaries")},be=Object(se.a)(fe,(function(e){return e.map((function(e){return e.name}))})),Ee=(Object(se.a)(fe,(function(e){return e.last()||null})),Object(se.a)(fe,(function(e,n){return n}),(function(e,n){return e.find((function(e){return e.name===decodeURIComponent(n)}))}))),pe=Object(se.a)(Ee,(function(e){return e.items})),ge=Object(se.a)(pe,(function(e){return e.filter((function(e){return e.error&&e.error.level===ce.error})).size})),Oe=Object(se.a)(pe,(function(e){return e.filter((function(e){return e.error&&e.error.level===ce.warning})).size})),je=function(e,n){return"".concat(e).concat(n>1?"s":"")},ye=Object(s.a)((function(e){return{warning:{marginLeft:e.spacing(1)}}}));var ve=Object(u.g)(Object(v.b)((function(e,n){var t=n.name;return{errorCount:ge(e,t),warningCount:Oe(e,t)}}))((function(e){e.name;var n=e.errorCount,t=e.warningCount,a=ye();return 0===n&&0===t?null:r.a.createElement(d.a,{container:!0},n>0&&r.a.createElement(de,{level:ce.error,label:"".concat(n," ").concat(je("Error",n))}),t>0&&r.a.createElement(de,{className:n>0?a.warning:"",level:ce.warning,label:"".concat(t," ").concat(je("Warning",t))}))}))),he=Object(s.a)((function(e){return{secondaryAction:{display:"flex",alignItems:"center"},delete:{marginLeft:e.spacing(1)}}}));var we=function(e){var n=e.name,t=(e.deleteDictionary,he()),a=Object(A.a)(),c=Object(k.a)(a.breakpoints.up("sm"));return r.a.createElement(D.a,{button:!0,component:l.b,to:X(n)},r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement(T.a,null))),r.a.createElement(C.a,{primary:n}),r.a.createElement(R.a,{className:t.secondaryAction},c&&r.a.createElement(ve,{name:n}),r.a.createElement(Q,{name:n,className:t.delete})))},De=t(199),Ce=t(126),Re=t.n(Ce);var Ie=Object(v.b)((function(e){return{dictionaryNames:be(e)}}),(function(e){return{addDictionary:function(n){return e(function(e){return{type:q,payload:e}}(n))}}}))((function(e){var n=e.addDictionary,t=e.dictionaryNames,c=Object(a.useState)(""),i=Object(S.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(null),m=Object(S.a)(u,2),d=m[0],s=m[1],f=Object(a.useState)(!1),b=Object(S.a)(f,2),E=b[0],p=b[1],g=Object(a.useState)(!1),O=Object(S.a)(g,2),j=O[0],y=O[1],v=function(){y(!1),p(!1),s(null),l("")},h=Object(a.useCallback)((function(){n(o.trim()),v()}),[o,n]),w=function(e){var n="";return e?function(e){return!t.contains(e)}(e)||(n="That name is already taken. Please use a unique name."):n="Name must not be blank.",n};return Object(a.useEffect)((function(){!d&&E&&h()}),[d,h,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{title:"Add","aria-label":"add"},r.a.createElement(F.a,{onClick:function(){y(!0)}},r.a.createElement(Re.a,null))),r.a.createElement(J,{title:"Add Dictionary",description:"Once you create your new dictionary, you will be able to add items to it.",content:r.a.createElement(De.a,{required:!0,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,value:o,onChange:function(e){l(e.target.value)},error:!!d,helperText:d}),actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:v,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){s(w(o.trim())),p(!0)},color:"primary"},"Create")),open:j,onClose:v}))})),Ne=Object(re.Record)({name:"",items:Object(re.List)()}),xe=Object(s.a)((function(e){return{emptyTextDivider:{marginTop:e.spacing(1)},emptyText:{paddingTop:e.spacing(2)}}}));var Te=Object(v.b)((function(e){return{dictionaries:fe(e)}}))((function(e){var n=e.dictionaries,t=xe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,justify:"flex-end"},r.a.createElement(Ie,null)),n.size>0&&r.a.createElement(w.a,null,n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(we,{name:e.name}),r.a.createElement(h.a,null))}))),!n.size&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:t.emptyTextDivider}),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(E.a,{variant:"body2",className:t.emptyText},"You have no dictionaries. Add a dictionary to start editing."))))})),ke=t(153),Ae=t.n(ke),Se=t(220),Fe=t.n(Se),Pe=t(212),Me=t.n(Pe),ze=t(218),Le=t.n(ze),_e=t(156),Ye=t.n(_e),We=t(155),Be=t.n(We),Ue=t(213),Je=t.n(Ue),qe=t(215),Ve=t.n(qe),Ge=t(216),$e=t.n(Ge),He=t(217),Ke=t.n(He),Qe=t(221),Xe=t.n(Qe),Ze=t(214),en=t.n(Ze),nn=t(219),tn=t.n(nn),an=t(222),rn=t.n(an),cn={Add:Object(a.forwardRef)((function(e,n){return r.a.createElement(Re.a,Object.assign({},e,{ref:n}))})),Check:Object(a.forwardRef)((function(e,n){return r.a.createElement(Me.a,Object.assign({},e,{ref:n}))})),Clear:Object(a.forwardRef)((function(e,n){return r.a.createElement(Be.a,Object.assign({},e,{ref:n}))})),Delete:Object(a.forwardRef)((function(e,n){return r.a.createElement(M.a,Object.assign({},e,{ref:n}))})),DetailPanel:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ye.a,Object.assign({},e,{ref:n}))})),Edit:Object(a.forwardRef)((function(e,n){return r.a.createElement(Je.a,Object.assign({},e,{ref:n}))})),Export:Object(a.forwardRef)((function(e,n){return r.a.createElement(en.a,Object.assign({},e,{ref:n}))})),Filter:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ve.a,Object.assign({},e,{ref:n}))})),FirstPage:Object(a.forwardRef)((function(e,n){return r.a.createElement($e.a,Object.assign({},e,{ref:n}))})),LastPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ke.a,Object.assign({},e,{ref:n}))})),NextPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ye.a,Object.assign({},e,{ref:n}))})),PreviousPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Le.a,Object.assign({},e,{ref:n}))})),ResetSearch:Object(a.forwardRef)((function(e,n){return r.a.createElement(Be.a,Object.assign({},e,{ref:n}))})),Search:Object(a.forwardRef)((function(e,n){return r.a.createElement(tn.a,Object.assign({},e,{ref:n}))})),SortArrow:Object(a.forwardRef)((function(e,n){return r.a.createElement(Fe.a,Object.assign({},e,{ref:n}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,n){return r.a.createElement(Xe.a,Object.assign({},e,{ref:n}))})),ViewColumn:Object(a.forwardRef)((function(e,n){return r.a.createElement(rn.a,Object.assign({},e,{ref:n}))}))},on="Field cannot be blank";var ln=Object(u.g)(Object(v.b)((function(e,n){var t=n.match;return{dictionary:Ee(e,t.params.name)}}),(function(e){return{addDictionaryItem:function(n,t,a){return e(function(e,n,t){return function(a){a({type:G,payload:{name:e,domain:n,range:t}}),a({type:K,payload:{name:e}})}}(n,t,a))},updateDictionaryItem:function(n,t,a,r){return e(function(e,n,t,a){return function(r){r({type:$,payload:{name:e,index:n,domain:t,range:a}}),r({type:K,payload:{name:e}})}}(n,t,a,r))},deleteDictionaryItem:function(n,t){return e(function(e,n){return function(t){t({type:H,payload:{name:e,index:n}}),t({type:K,payload:{name:e}})}}(n,t))}}}))((function(e){var n=e.dictionary,t=e.addDictionaryItem,c=e.updateDictionaryItem,i=e.deleteDictionaryItem,o=Object(a.useMemo)((function(){return n.items.toJS()}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{name:n.name}),r.a.createElement(Ae.a,{options:{showTitle:!1,paging:!1,search:n.items.size>0,actionsColumnIndex:2},components:{Container:function(e){return r.a.createElement("div",e)},EditField:function(e){var n=!e.value;return r.a.createElement(ke.MTableEditField,Object.assign({},e,{error:n,helperText:n&&on,fullWidth:!0}))}},icons:cn,columns:[{title:"Domain",field:"domain"},{title:"Range",field:"range"},{field:"error",editable:"never",sorting:!1,render:function(e){return e&&e.error?r.a.createElement(de,{level:e.error.level,label:e.error.name}):null}}],localization:{body:{emptyDataSourceMessage:"You have no dictionary items. Create an item to start populating this dictionary."},header:{actions:""}},data:o,editable:{onRowAdd:function(e){var a=e.domain,r=e.range;return new Promise((function(e,c){a&&r?(t(n.name,a,r),e()):c()}))},onRowUpdate:function(e,t){var a=e.domain,r=e.range;return new Promise((function(e,i){if(a&&r){var l=o.indexOf(t);c(n.name,l,a,r),e()}else i()}))},onRowDelete:function(e){return new Promise((function(t,a){var r=o.indexOf(e);i(n.name,r),t()}))}}}))})));var un=Object(u.g)(Object(v.b)((function(e,n){var t=n.match;return{dictionary:Ee(e,t.params.name)}}))((function(e){return e.dictionary?r.a.createElement(ln,null):r.a.createElement(u.a,{to:"/"})}))),mn=t(398),dn=t(395);var sn=function(e){var n=e.heading;return r.a.createElement(E.a,{variant:"h4",component:"h1"},n)},fn=Object(s.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(1)},header:{marginBottom:e.spacing(1)}}}));var bn=function(e){var n=e.name,t=fn();return r.a.createElement(r.a.Fragment,null,r.a.createElement(mn.a,{"aria-label":"breadcrumb",className:t.breadcrumbs},r.a.createElement(dn.a,{component:l.b,color:"inherit",to:"/"},"Dictionaries"),r.a.createElement(E.a,{color:"textPrimary"},n)),r.a.createElement(d.a,{container:!0,justify:"space-between",alignItems:"center",className:t.header},r.a.createElement(sn,{heading:"".concat(n," Dictionary")}),r.a.createElement(Q,{name:n})))},En=Object(s.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,main:{width:"100%",flexGrow:1,padding:e.spacing(3)},header:{marginBottom:e.spacing(1)}}}));var pn=function(){var e=En();return r.a.createElement(l.a,{basename:"/dictionary-manager"},r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null),r.a.createElement(g,null),r.a.createElement("main",{className:e.main},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(m.a,{maxWidth:"lg"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/:name",render:function(e){var n=e.match;return r.a.createElement(y,{header:r.a.createElement(bn,{name:n.params.name})},r.a.createElement(un,null))}}),r.a.createElement(u.b,null,r.a.createElement(y,{header:r.a.createElement(d.a,{container:!0,className:e.header},r.a.createElement(sn,{heading:"Dictionaries"}))},r.a.createElement(Te,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var gn=t(46),On=t(223),jn=t(224),yn=t(225),vn=Object(re.Record)({domain:"",range:"",error:null}),hn=function(e){var n=e.map((function(e){return e.domain})).toSet(),t=e.reduce((function(e,n){return e.get(n.domain)?e.update(n.domain,(function(e){return e.push(n.range)})):e.set(n.domain,Object(re.List)([n.range]))}),Object(re.Map)());return e.map((function(e){return e.update("error",(function(){return function(e,n,t){var a=null;return n.get(e.range)?a=t.get(e.range).contains(e.domain)?ie():oe():t.get(e.domain).size>1&&(a=t.get(e.domain).toSet().size>1?le():ue()),a}(e,n,t)}))}))};function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(re.List)(),n=arguments.length>1?arguments[1]:void 0;arguments.length>2&&arguments[2];switch(n.type){case G:return e.push(vn({domain:n.payload.domain,range:n.payload.range}));case $:return e.update(n.payload.index,(function(){return vn({domain:n.payload.domain,range:n.payload.range})}));case H:return e.delete(n.payload.index);case K:return hn(e);default:return e}}function Dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(re.List)(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q:return e.push(Ne({name:n.payload}));case V:return e.filter((function(e){return e.name!==n.payload}));case G:case $:case H:case K:return e.map((function(e){return e.name===n.payload.name?Ne({name:e.name,items:wn(e.items,n)}):e}));default:return e}}var Cn=function(){return Object(yn.combineReducers)({dictionaries:Dn})};var Rn,In=(Rn=Object(re.Map)(),Object(gn.createStore)(Cn(),Rn,Object(On.composeWithDevTools)(Object(gn.applyMiddleware)(jn.a))));i.a.render(r.a.createElement(v.a,{store:In},r.a.createElement(pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[242,1,2]]]);
//# sourceMappingURL=main.0c486ec6.chunk.js.map