(this["webpackJsonpclose-to-2"]=this["webpackJsonpclose-to-2"]||[]).push([[0],{51:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),i=n(12),l=n(79),u=n(82),m=n(80),s=n(84),f=n(43),d=n.n(f),b=n(44),E=n.n(b),p=n(40),h=n.n(p),g=n(41),y=n.n(g),O=n(30),S=n.n(O),j=n(42),A=n.n(j),v=n(83),k=n(85),w=function(e){var t=e.difficulty,n=e.onClickAction;return r.a.createElement(r.a.Fragment,null,"EASY"===t&&r.a.createElement(s.a,{variant:"contained",style:{color:"white",backgroundColor:S.a[600]},onClick:function(){return n(t)}},"\u521d\u7d1a\uff08\u6570\u50242\u3064\uff09"),("NORMAL"===t||"HARD"===t)&&r.a.createElement(s.a,{variant:"contained",color:"NORMAL"===t?"primary":"secondary",onClick:function(){return n(t)}},"NORMAL"===t?"\u4e2d\u7d1a\uff08\u6570\u50243\u3064\uff09":"\u4e0a\u7d1a\uff08\u6570\u50245\u3064\uff09"))},x=function(e){var t=e.open,n=e.handleSelectDifficultyAction;return r.a.createElement(v.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,closeAfterTransition:!0,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(k.a,{in:t},r.a.createElement(u.a,{p:4,width:400,bgcolor:"background.paper",boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement("h2",{id:"transition-modal-title"},"\u96e3\u6613\u5ea6\u9078\u629e"),r.a.createElement("p",{id:"transition-modal-description"},"\u96e3\u6613\u5ea6\u306b\u5fdc\u3058\u3066\u3001\u5f0f\u304c\u9577\u304f\u306a\u308a\u307e\u3059"),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{p:2},r.a.createElement(w,{difficulty:"EASY",onClickAction:n})),r.a.createElement(u.a,{p:2},r.a.createElement(w,{difficulty:"NORMAL",onClickAction:n})),r.a.createElement(u.a,{p:2},r.a.createElement(w,{difficulty:"HARD",onClickAction:n}))))))},C=function(e){var t=e.text,n=e.onClickAction;return r.a.createElement(s.a,{onClick:n,variant:"contained",color:"secondary"},t)},I=function(e){var t=e.open,n=e.correctAnswerCount,a=e.handleRestartAction;return r.a.createElement(v.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,closeAfterTransition:!0,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(k.a,{in:t},r.a.createElement(u.a,{p:4,width:400,bgcolor:"background.paper",boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement("h2",{id:"transition-modal-title"},"".concat(n,"\u56de\u6b63\u89e3\uff01")),r.a.createElement("p",{id:"transition-modal-description"},"\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f\u30fc"),r.a.createElement(u.a,{p:2},r.a.createElement(C,{text:"\u518d\u30c1\u30e3\u30ec\u30f3\u30b8",onClickAction:a})))))},M=function(){var e=[h.a[800],y.a[500],S.a[600],A.a[500]],t=Object(a.useState)(30),n=Object(i.a)(t,2),c=n[0],o=n[1],f=Object(a.useState)(0),b=Object(i.a)(f,2),p=b[0],g=b[1],O=Object(a.useState)(1),j=Object(i.a)(O,2),v=j[0],k=j[1],w=Object(a.useState)([]),C=Object(i.a)(w,2),M=C[0],R=C[1],D=Object(a.useState)(null),L=Object(i.a)(D,2),N=L[0],F=L[1],U=Object(a.useState)(0),H=Object(i.a)(U,2),T=H[0],W=H[1],Y=Object(a.useState)(0),z=Object(i.a)(Y,2),B=z[0],J=z[1],P=Object(a.useState)(!0),$=Object(i.a)(P,2),q=$[0],G=$[1],K=Object(a.useState)(!1),Q=Object(i.a)(K,2),V=Q[0],X=Q[1],Z=Object(a.useState)(!1),_=Object(i.a)(Z,2),ee=_[0],te=_[1],ne=Object(a.useState)(!1),ae=Object(i.a)(ne,2),re=ae[0],ce=ae[1],oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*Math.floor(e)+t)},ie=function(e){for(var t=oe(100),n=String(t),a=1;a<=e;a+=1){var r={operator:oe(100,1)%2===0?"PLUS":"MINUS",num:oe(199,-99)};"PLUS"===r.operator?(t+=r.num,n+=r.num<0?" + (".concat(r.num,")"):" + ".concat(r.num)):"MINUS"===r.operator?(t-=r.num,n+=r.num<0?" - (".concat(r.num,")"):" - ".concat(r.num)):console.log("error")}return{num:t,formula:n,abs:Math.abs(t-2)}},le=function(e){var t=e.map((function(e){return e.abs}));return Array.from(new Set(t)).length<"4"},ue=function(){var e,t=v-1;do{e=[];for(var n=1;n<="4";n+=1)e.push(ie(t))}while(le(e));!function(e){var t=e.map((function(e,t){return{originalIndex:t,abs:e.abs}}));t.sort((function(e,t){return e.abs<t.abs?-1:1})),F(t[0].originalIndex)}(e),R(e)};Object(a.useEffect)((function(){ue()}),[v,T]),Object(a.useEffect)((function(){0===c&&(clearInterval(p),ce(!0))}),[c]);var me=function(e){!function(e){e===N?(J((function(e){return e+1})),te(!0)):te(!1)}(e),X(!0),setTimeout((function(){X(!1),W((function(e){return e+1}))}),1200)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{maxWidth:"sm"},r.a.createElement(u.a,{p:4,my:1,boxShadow:3,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(u.a,{display:"flex"},r.a.createElement(u.a,{m:2,fontSize:"1.8rem"},r.a.createElement(d.a,{style:{paddingRight:"5px"}}),r.a.createElement(r.a.Fragment,null,c)),r.a.createElement(u.a,{m:2,fontSize:"1.8rem"},r.a.createElement(E.a,null),r.a.createElement(r.a.Fragment,null,"\uff1a".concat(B)))),r.a.createElement(m.a,null,V&&ee&&"\u6b63\u89e3\uff01",V&&!ee&&"\u4e0d\u6b63\u89e3...",!V&&"\u4e00\u756a\u300c2\u300d\u306b\u8fd1\u3044\u306e\u306f\u3069\u308c\u304b\u306a\uff1f"),M.map((function(t,n){return r.a.createElement(u.a,{p:2,key:t.formula},r.a.createElement(s.a,{variant:"contained",style:{width:"250px",color:"white",backgroundColor:e[n]},onClick:function(){return me(n)}},t.formula),r.a.createElement(u.a,{height:20},V&&r.a.createElement(m.a,{align:"center"},"".concat(t.num," \u2192 2\u307e\u3067").concat(t.abs," ").concat(n===N?"\u3007":"\xd7"))))})))),r.a.createElement(x,{open:q,handleSelectDifficultyAction:function(e){!function(e){switch(e){case"EASY":k("2");break;case"NORMAL":k("3");break;case"HARD":k("5");break;default:console.log("error")}}(e),G(!1),g(setInterval((function(){o((function(e){return e-1}))}),1e3))}}),r.a.createElement(I,{open:re,correctAnswerCount:B,handleRestartAction:function(){ce(!1),o(60),J(0),G(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.22662f5d.chunk.js.map