(this["webpackJsonpdictionary-manager"]=this["webpackJsonpdictionary-manager"]||[]).push([[0],{242:function(e,n,t){e.exports=t(343)},247:function(e,n,t){},343:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),i=t.n(c),o=(t(247),t(395)),l=t(64),u=t(76),m=t(386),s=t(202),d=t(379),f=t(168),b=t(57),E=Object(s.a)((function(e){return{root:{zIndex:e.zIndex.drawer+1}}}));var p=function(){var e=E();return r.a.createElement(d.a,{position:"fixed",className:e.root},r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"h6",noWrap:!0},"Dictionary Manager")))},g=t(122),O=Object(s.a)((function(e){return{paper:{padding:e.spacing(2)}}}));var j=function(e){var n=e.header,t=e.children,a=O();return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(g.a,{className:a.paper},t))},y=(t(169),t(26)),v=t(392),h=t(391),w=t(356),D=t(172),C=t(388),R=t(387),I=t(398),N=t(208),T=t.n(N),x=t(380),k=t(19),A=t(85),S=t(170),F=t(124),P=t.n(F),M=t(171),z=t(198),L=t(397),_=t(385),Y=t(383),W=t(384),B=t(382);var U=function(e){var n=e.open,t=e.title,a=e.description,c=e.content,i=e.actions,o=e.onClose,l=Object(k.a)(),u=Object(x.a)(l.breakpoints.down("sm"));return r.a.createElement(L.a,{open:n,onClose:o,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",fullScreen:u},r.a.createElement(B.a,{id:"dialog-title"},t),(c||a)&&r.a.createElement(Y.a,{id:"dialog-description"},a&&r.a.createElement(W.a,null,a),c),r.a.createElement(_.a,null,i))},J="ADD_DICTIONARY",q="DELETE_DICTIONARY",V="ADD_DICTIONARY_ITEM",G="UPDATE_DICTIONARY_ITEM",$="DELETE_DICTIONARY_ITEM",H="VALIDATE_DICTIONARY_ITEMS";var K=Object(y.b)(null,(function(e,n){var t=n.name;return{deleteDictionary:function(){return e(function(e){return{type:q,payload:e}}(t))}}}))((function(e){var n=e.name,t=e.deleteDictionary,c=e.className,i=Object(a.useState)(!1),o=Object(A.a)(i,2),l=o[0],u=o[1],m=function(){u(!1)};return r.a.createElement("div",{className:c},r.a.createElement(z.a,{title:"Delete","aria-label":"delete"},r.a.createElement(S.a,{onClick:function(){u(!0)}},r.a.createElement(P.a,null))),r.a.createElement(U,{title:"Are you sure you want to delete ".concat(n," dictionary?"),description:"You will lose all items in this dictionary.",actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{onClick:m,color:"primary"},"Cancel"),r.a.createElement(M.a,{onClick:function(){t(),m()},color:"primary"},"Delete")),open:l,onClose:m}))})),Q=function(e){return"/".concat(encodeURIComponent(e))},X=t(200),Z=t(205),ee=t.n(Z),ne=t(206),te=t.n(ne),ae=t(20),re={error:"error",warning:"warning"},ce=Object(ae.Record)({name:"Cycle",level:re.error}),ie=Object(ae.Record)({name:"Chain",level:re.warning}),oe=Object(ae.Record)({name:"Fork",level:re.warning}),le=Object(ae.Record)({name:"Duplicate",level:re.warning}),ue=Object(s.a)((function(e){var n=e.palette.error.dark,t=e.palette.warning.dark,a=function(e){return e===re.error};return{chip:function(e){return{color:a(e.level)?n:t,borderColor:a(e.level)?n:t}},icon:function(e){return{color:a(e.level)?n:t}}}}));var me=function(e){var n=e.level,t=e.label,a=e.className,c=ue({level:n});return r.a.createElement(X.a,{icon:n===re.error?r.a.createElement(ee.a,{className:c.icon}):r.a.createElement(te.a,{className:c.icon}),label:t,variant:"outlined",className:"".concat(a," ").concat(c.chip)})},se=t(86),de=function(e){return e.get("dictionaries")},fe=Object(se.a)(de,(function(e){return e.map((function(e){return e.name}))})),be=(Object(se.a)(de,(function(e){return e.last()||null})),Object(se.a)(de,(function(e,n){return n}),(function(e,n){return e.find((function(e){return e.name===decodeURIComponent(n)}))}))),Ee=Object(se.a)(be,(function(e){return e.items})),pe=Object(se.a)(Ee,(function(e){return e.filter((function(e){return e.error&&e.error.level===re.error})).size})),ge=Object(se.a)(Ee,(function(e){return e.filter((function(e){return e.error&&e.error.level===re.warning})).size})),Oe=function(e,n){return"".concat(e).concat(n>1?"s":"")},je=Object(s.a)((function(e){return{warning:{marginLeft:e.spacing(1)}}}));var ye=Object(u.g)(Object(y.b)((function(e,n){var t=n.name;return{errorCount:pe(e,t),warningCount:ge(e,t)}}))((function(e){e.name;var n=e.errorCount,t=e.warningCount,a=je();return 0===n&&0===t?null:r.a.createElement(m.a,{container:!0},n>0&&r.a.createElement(me,{level:re.error,label:"".concat(n," ").concat(Oe("Error",n))}),t>0&&r.a.createElement(me,{className:n>0?a.warning:"",level:re.warning,label:"".concat(t," ").concat(Oe("Warning",t))}))}))),ve=Object(s.a)((function(e){return{secondaryAction:{display:"flex",alignItems:"center"},delete:{marginLeft:e.spacing(1)}}}));var he=function(e){var n=e.name,t=(e.deleteDictionary,ve()),a=Object(k.a)(),c=Object(x.a)(a.breakpoints.up("sm"));return r.a.createElement(w.a,{button:!0,component:l.b,to:Q(n)},r.a.createElement(R.a,null,r.a.createElement(I.a,null,r.a.createElement(T.a,null))),r.a.createElement(D.a,{primary:n}),r.a.createElement(C.a,{className:t.secondaryAction},c&&r.a.createElement(ye,{name:n}),r.a.createElement(K,{name:n,className:t.delete})))},we=t(199),De=t(126),Ce=t.n(De);var Re=Object(y.b)((function(e){return{dictionaryNames:fe(e)}}),(function(e){return{addDictionary:function(n){return e(function(e){return{type:J,payload:e}}(n))}}}))((function(e){var n=e.addDictionary,t=e.dictionaryNames,c=Object(a.useState)(""),i=Object(A.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(null),m=Object(A.a)(u,2),s=m[0],d=m[1],f=Object(a.useState)(!1),b=Object(A.a)(f,2),E=b[0],p=b[1],g=Object(a.useState)(!1),O=Object(A.a)(g,2),j=O[0],y=O[1],v=function(){y(!1),p(!1),d(null),l("")},h=Object(a.useCallback)((function(){n(o.trim()),v()}),[o,n]),w=function(e){var n="";return e?function(e){return!t.contains(e)}(e)||(n="That name is already taken. Please use a unique name."):n="Name must not be blank.",n};return Object(a.useEffect)((function(){!s&&E&&h()}),[s,h,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{title:"Add","aria-label":"add"},r.a.createElement(S.a,{onClick:function(){y(!0)}},r.a.createElement(Ce.a,null))),r.a.createElement(U,{title:"Add Dictionary",description:"Once you create your new dictionary, you will be able to add items to it.",content:r.a.createElement(we.a,{required:!0,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,value:o,onChange:function(e){l(e.target.value)},error:!!s,helperText:s}),actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{onClick:v,color:"primary"},"Cancel"),r.a.createElement(M.a,{onClick:function(){d(w(o.trim())),p(!0)},color:"primary"},"Create")),open:j,onClose:v}))})),Ie=Object(ae.Record)({name:"",items:Object(ae.List)()}),Ne=Object(s.a)((function(e){return{emptyTextDivider:{marginTop:e.spacing(1)},emptyText:{paddingTop:e.spacing(2)}}}));var Te=Object(y.b)((function(e){return{dictionaries:de(e)}}))((function(e){var n=e.dictionaries,t=Ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,justify:"flex-end"},r.a.createElement(Re,null)),n.size>0&&r.a.createElement(h.a,null,n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(he,{name:e.name}),r.a.createElement(v.a,null))}))),!n.size&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:t.emptyTextDivider}),r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(b.a,{variant:"body2",className:t.emptyText},"You have no dictionaries. Add a dictionary to start editing."))))})),xe=t(153),ke=t.n(xe),Ae=t(220),Se=t.n(Ae),Fe=t(212),Pe=t.n(Fe),Me=t(218),ze=t.n(Me),Le=t(156),_e=t.n(Le),Ye=t(155),We=t.n(Ye),Be=t(213),Ue=t.n(Be),Je=t(215),qe=t.n(Je),Ve=t(216),Ge=t.n(Ve),$e=t(217),He=t.n($e),Ke=t(221),Qe=t.n(Ke),Xe=t(214),Ze=t.n(Xe),en=t(219),nn=t.n(en),tn=t(222),an=t.n(tn),rn={Add:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ce.a,Object.assign({},e,{ref:n}))})),Check:Object(a.forwardRef)((function(e,n){return r.a.createElement(Pe.a,Object.assign({},e,{ref:n}))})),Clear:Object(a.forwardRef)((function(e,n){return r.a.createElement(We.a,Object.assign({},e,{ref:n}))})),Delete:Object(a.forwardRef)((function(e,n){return r.a.createElement(P.a,Object.assign({},e,{ref:n}))})),DetailPanel:Object(a.forwardRef)((function(e,n){return r.a.createElement(_e.a,Object.assign({},e,{ref:n}))})),Edit:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ue.a,Object.assign({},e,{ref:n}))})),Export:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ze.a,Object.assign({},e,{ref:n}))})),Filter:Object(a.forwardRef)((function(e,n){return r.a.createElement(qe.a,Object.assign({},e,{ref:n}))})),FirstPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(Ge.a,Object.assign({},e,{ref:n}))})),LastPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(He.a,Object.assign({},e,{ref:n}))})),NextPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(_e.a,Object.assign({},e,{ref:n}))})),PreviousPage:Object(a.forwardRef)((function(e,n){return r.a.createElement(ze.a,Object.assign({},e,{ref:n}))})),ResetSearch:Object(a.forwardRef)((function(e,n){return r.a.createElement(We.a,Object.assign({},e,{ref:n}))})),Search:Object(a.forwardRef)((function(e,n){return r.a.createElement(nn.a,Object.assign({},e,{ref:n}))})),SortArrow:Object(a.forwardRef)((function(e,n){return r.a.createElement(Se.a,Object.assign({},e,{ref:n}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,n){return r.a.createElement(Qe.a,Object.assign({},e,{ref:n}))})),ViewColumn:Object(a.forwardRef)((function(e,n){return r.a.createElement(an.a,Object.assign({},e,{ref:n}))}))},cn="Field cannot be blank";var on=Object(u.g)(Object(y.b)((function(e,n){var t=n.match;return{dictionary:be(e,t.params.name)}}),(function(e){return{addDictionaryItem:function(n,t,a){return e(function(e,n,t){return function(a){a({type:V,payload:{name:e,domain:n,range:t}}),a({type:H,payload:{name:e}})}}(n,t,a))},updateDictionaryItem:function(n,t,a,r){return e(function(e,n,t,a){return function(r){r({type:G,payload:{name:e,index:n,domain:t,range:a}}),r({type:H,payload:{name:e}})}}(n,t,a,r))},deleteDictionaryItem:function(n,t){return e(function(e,n){return function(t){t({type:$,payload:{name:e,index:n}}),t({type:H,payload:{name:e}})}}(n,t))}}}))((function(e){var n=e.dictionary,t=e.addDictionaryItem,c=e.updateDictionaryItem,i=e.deleteDictionaryItem,o=Object(a.useMemo)((function(){return n.items.toJS()}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,{name:n.name}),r.a.createElement(ke.a,{options:{showTitle:!1,paging:!1,search:n.items.size>0,actionsColumnIndex:2},components:{Container:function(e){return r.a.createElement("div",e)},EditField:function(e){var n=!e.value;return r.a.createElement(xe.MTableEditField,Object.assign({},e,{error:n,helperText:n&&cn}))}},icons:rn,columns:[{title:"Domain",field:"domain"},{title:"Range",field:"range"},{field:"error",editable:"never",sorting:!1,render:function(e){return e&&e.error?r.a.createElement(me,{level:e.error.level,label:e.error.name}):null}}],localization:{body:{emptyDataSourceMessage:"You have no dictionary items. Create an item to start populating this dictionary."},header:{actions:""}},data:o,editable:{onRowAdd:function(e){var a=e.domain,r=e.range;return new Promise((function(e,c){a&&r?(t(n.name,a,r),e()):c()}))},onRowUpdate:function(e,t){var a=e.domain,r=e.range;return new Promise((function(e,i){if(a&&r){var l=o.indexOf(t);c(n.name,l,a,r),e()}else i()}))},onRowDelete:function(e){return new Promise((function(t,a){var r=o.indexOf(e);i(n.name,r),t()}))}}}))})));var ln=Object(u.g)(Object(y.b)((function(e,n){var t=n.match;return{dictionary:be(e,t.params.name)}}))((function(e){return e.dictionary?r.a.createElement(on,null):r.a.createElement(u.a,{to:"/"})}))),un=t(396),mn=t(394);var sn=function(e){var n=e.heading;return r.a.createElement(b.a,{variant:"h4",component:"h1"},n)},dn=Object(s.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(1)},header:{marginBottom:e.spacing(1)}}}));var fn=function(e){var n=e.name,t=dn();return r.a.createElement(r.a.Fragment,null,r.a.createElement(un.a,{"aria-label":"breadcrumb",className:t.breadcrumbs},r.a.createElement(mn.a,{component:l.b,color:"inherit",to:"/"},"Dictionaries"),r.a.createElement(b.a,{color:"textPrimary"},n)),r.a.createElement(m.a,{container:!0,justify:"space-between",alignItems:"center",className:t.header},r.a.createElement(sn,{heading:"".concat(n," Dictionary")}),r.a.createElement(K,{name:n})))},bn=Object(s.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,main:{width:"100%",flexGrow:1,padding:e.spacing(3)},header:{marginBottom:e.spacing(1)}}}));var En=function(){var e=bn();return r.a.createElement(l.a,{basename:"/dictionary-manager"},r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null),r.a.createElement(p,null),r.a.createElement("main",{className:e.main},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/:name",render:function(e){var n=e.match;return r.a.createElement(j,{header:r.a.createElement(fn,{name:n.params.name})},r.a.createElement(ln,null))}}),r.a.createElement(u.b,null,r.a.createElement(j,{header:r.a.createElement(m.a,{container:!0,className:e.header},r.a.createElement(sn,{heading:"Dictionaries"}))},r.a.createElement(Te,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pn=t(46),gn=t(223),On=t(224),jn=t(225),yn=Object(ae.Record)({domain:"",range:"",error:null}),vn=function(e){var n=e.map((function(e){return e.domain})).toSet(),t=e.reduce((function(e,n){return e.get(n.domain)?e.update(n.domain,(function(e){return e.push(n.range)})):e.set(n.domain,Object(ae.List)([n.range]))}),Object(ae.Map)());return e.map((function(e){return e.update("error",(function(){return function(e,n,t){var a=null;return n.get(e.range)?a=t.get(e.range).contains(e.domain)?ce():ie():t.get(e.domain).size>1&&(a=t.get(e.domain).toSet().size>1?oe():le()),a}(e,n,t)}))}))};function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ae.List)(),n=arguments.length>1?arguments[1]:void 0;arguments.length>2&&arguments[2];switch(n.type){case V:return e.push(yn({domain:n.payload.domain,range:n.payload.range}));case G:return e.update(n.payload.index,(function(){return yn({domain:n.payload.domain,range:n.payload.range})}));case $:return e.delete(n.payload.index);case H:return vn(e);default:return e}}function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ae.List)(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J:return e.push(Ie({name:n.payload}));case q:return e.filter((function(e){return e.name!==n.payload}));case V:case G:case $:case H:return e.map((function(e){return e.name===n.payload.name?Ie({name:e.name,items:hn(e.items,n)}):e}));default:return e}}var Dn=function(){return Object(jn.combineReducers)({dictionaries:wn})};var Cn,Rn=(Cn=Object(ae.Map)(),Object(pn.createStore)(Dn(),Cn,Object(gn.composeWithDevTools)(Object(pn.applyMiddleware)(On.a))));i.a.render(r.a.createElement(y.a,{store:Rn},r.a.createElement(En,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[242,1,2]]]);
//# sourceMappingURL=main.bea30f27.chunk.js.map