(this.webpackJsonpheatmap=this.webpackJsonpheatmap||[]).push([[0],{53:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(38),r=t.n(c),i=(t(53),t(54),t(23)),u=t.n(i),s=t(39),d=t(28),o=t(9),j=t(40),b=t.n(j),x=t(87),m=t.p+"static/media/manifest2022.46787d1f.jpg",v=t(89),h=t(91),O=t(85),f=function(e,a,t){var n,l=p(e,a);switch(t){case 1:return{data:(n=g(l,1)).data,maxSlider:n.data.length,maxValue:n.maxValue};case 30:return{data:(n=g(l,30)).data,maxSlider:n.data.length,maxValue:n.maxValue};case 60:return{data:(n=g(l,60)).data,maxSlider:n.data.length,maxValue:n.maxValue};case 180:return{data:(n=g(l,180)).data,maxSlider:n.data.length,maxValue:n.maxValue};case"day":return{data:(n=g(l,661)).data,maxSlider:n.data.length,maxValue:n.maxValue};default:case"all":return{data:(n=g(l,8320)).data,maxSlider:n.data.length,maxValue:n.maxValue}}},p=function(e,a){var t=e;return"all"!==a&&(t=e.filter((function(e){return a===new Date(e[0].timestamp).getDate()}))),t},g=function(e,a){for(var t=[],n=[],l=0,c=function(c){for(var r=function(a){var t=n.find((function(t){return t.name===e[c][a].name}));t?t.value+=e[c][a].value:n.push(e[c][a]),e[c][a].value>l&&(l=t?t.value:e[c][a].value)},i=0;i<e[c].length;i++)r(i);!c||c%a!==0&&c!==e.length-1||(t.push(n),n=[])},r=0;r<e.length;r++)c(r);return{data:t,maxValue:l}},S=function(){var e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\ude80 ~ file: dataTransformer.js ~ line 96 ~ getItcData ~ process.env",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_URL:"http://localhost:3000/"})),e.next=3,fetch("".concat("http://localhost:3000/","manifest2022.json"));case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){var a=[{value:1,label:"1 Minute"},{value:30,label:"30 Minutes"},{value:60,label:"1 Hour"},{value:180,label:"3 Hours"},{value:"day",label:"Day"}];return"all"===e&&a.push({value:"all",label:"All Event"}),a},V=[{value:25,label:"25th December"},{value:26,label:"26th December"},{value:27,label:"27th December"},{value:"all",label:"All Event"}],D=(t(56),t(92)),w=t(90),E=t(2);function C(e){var a=e.value,t=e.setValue,n=e.options;return Object(E.jsx)(w.a,{value:a,exclusive:!0,unselectable:!0,onChange:function(e,a){a&&t(a)},"aria-label":"text alignment",style:{background:"white"},color:"primary",children:n.map((function(e,a){return Object(E.jsx)(D.a,{value:e.value,"aria-label":"left aligned",children:e.label},"".concat(a,"-toggleButton"))}))})}function T(){var e=Object(n.useState)({25:{1:[],30:[],60:[],180:[],day:[]},26:{1:[],30:[],60:[],180:[],day:[]},27:{1:[],30:[],60:[],180:[],day:[]},all:{1:[],30:[],60:[],180:[],day:[],all:[]}}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),r=Object(o.a)(c,2),i=r[0],j=r[1],p=Object(n.useState)({data:[],maxSlider:0,maxValue:0}),g=Object(o.a)(p,2),D=g[0],w=g[1],T=Object(n.useState)([]),_=Object(o.a)(T,2),k=_[0],A=_[1],P=Object(n.useState)(0),F=Object(o.a)(P,2),L=F[0],B=F[1],H=Object(n.useState)(100),R=Object(o.a)(H,1)[0],N=Object(h.a)(!1),I=Object(o.a)(N,2),K=I[0],M=I[1],U=Object(n.useState)(1),W=Object(o.a)(U,2),J=W[0],q=W[1],z=Object(n.useState)(25),G=Object(o.a)(z,2),Q=G[0],X=G[1];Object(O.a)((function(){D.maxSlider>L?(B(L+1),A(D.data[L])):M(!1)}),K?R:null);var Y=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[Q][J].maxSlider){e.next=4;break}w(t[Q][J]),e.next=10;break;case 4:return e.next=6,S();case 6:n=e.sent,a=f(n,Q,J),l((function(e){var t=Object(s.a)({},e);return t[Q][J]=a,t})),w(a);case 10:case"end":return e.stop()}}),e)}))),[Q,J]);Object(n.useEffect)((function(){Y()}),[Q,J,Y]),Object(n.useEffect)((function(){var e;if(0===(null===D||void 0===D||null===(e=D.data)||void 0===e?void 0:e.length)&&Y(),0===D.maxSlider&&!i){var a=b.a.create({container:document.querySelector(".heatmap"),minOpacity:".4",gradient:{".01":"blue",".25":"cyan",".5":"yellow",".75":"orange",1:"red"}});j(a)}if(D.maxSlider>0&&i){var t={max:D.maxValue,min:0,data:D.data[L]};i&&i.setData(t)}}),[i,Y]);return Object(n.useEffect)((function(){var e={max:D.maxValue,min:0,data:k};i&&k.length>0&&i.setData(e)}),[i,D,k]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{style:{width:"600px",paddingBottom:"1rem",textAlign:"left",fontSize:"1.5rem"},children:Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{style:{paddingBottom:"1rem"},children:[Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:"Granularity"})}),Object(E.jsx)(C,{value:J,setValue:function(e){B(0),q(e)},options:y(Q)})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:"Date"})}),Object(E.jsx)("div",{children:Object(E.jsx)(C,{value:Q,setValue:function(e){B(0),X(e),"all"!==e&&q(1)},options:V})})]})]})}),Object(E.jsxs)("div",{style:{display:"flex"},children:[Object(E.jsx)("div",{id:"mydiv",className:"heatmap",style:{display:"block"},children:Object(E.jsx)("img",{height:"651px",width:"990px",src:m,alt:"road"})}),Object(E.jsxs)("div",{style:{textAlign:"left",paddingLeft:"2rem"},children:[Object(E.jsxs)("div",{children:["blue: 0 - ",.01*D.maxValue]}),Object(E.jsxs)("div",{children:["cyan: ",.01*D.maxValue," - ",.25*D.maxValue]}),Object(E.jsxs)("div",{children:["yellow: ",.25*D.maxValue," - ",.5*D.maxValue]}),Object(E.jsxs)("div",{children:["orange: ",.5*D.maxValue," - ",.75*D.maxValue]}),Object(E.jsxs)("div",{children:["red: ",.75*D.maxValue," - ",D.maxValue]}),D.maxSlider>1&&Object(E.jsx)(v.a,{variant:"outlined",style:{background:"white"},onClick:M,children:K?"Cancel":"Auto Play"})]})]}),Object(E.jsx)("div",{style:{width:"600px"},children:D.maxSlider>1&&Object(E.jsx)(x.a,{max:D.maxSlider-1||0,defaultValue:0,"aria-label":"Default",valueLabelDisplay:"auto",onChange:function(e,a){K&&M(!1),A(D.data[a]),B(a)},value:L})})]})}var _=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("header",{className:"App-header",children:Object(E.jsx)(T,{})})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,94)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)}))};r.a.render(Object(E.jsx)(l.a.StrictMode,{children:Object(E.jsx)(_,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.e462e8e9.chunk.js.map