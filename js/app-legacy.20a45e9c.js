(function(){var t={3598:function(t,n,e){"use strict";e(6992),e(8674),e(9601),e(7727);var o=e(144),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",[e("app-navbar"),e("router-view")],1)],1)},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{staticClass:"app-bar",attrs:{color:"primary",elevation:"4"}},[e("v-toolbar-title",[t._v("Bald Head Boys")]),e("v-spacer"),e("div",{staticClass:"headshots d-flex align-center"},t._l(t.headshots,(function(n){return e("headshot-img",{key:"headshot-"+n.name,attrs:{item:n},on:{click:function(e){return t.navigate(n)}}})})),1)],1)},s=[],c=(e(2222),e(8309),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"HEADSHOT"},[e("img",{attrs:{src:t.item.src,alt:t.item.name}})])}),u=[],l={name:"headshot-img",props:{item:{type:Object,required:!0}}},p=l,f=e(3736),d=(0,f.Z)(p,c,u,!1,null,"dffbdaf2",null),m=d.exports,h=[{src:e(1749),name:"ashley",tiktok:"https://www.tiktok.com/@ashrenn44"},{src:e(8486),name:"dan",tiktok:"https://www.tiktok.com/@cameramandaniel"},{src:e(3771),name:"bloomington",tiktok:"https://www.tiktok.com/@mr.bloomington"}],v={name:"app-navbar",components:{HeadshotImg:m},data:function(){return{headshots:h}},methods:{getImgUrl:function(t){return e(4262)("@".concat(t.src).concat(t.name,".png"))},navigate:function(t){console.log(t.tiktok),window.open(t.tiktok,"_blank")}}},g=v,y=e(3453),b=e.n(y),w=e(5727),k=e(3631),x=e(7921),_=(0,f.Z)(g,a,s,!1,null,null,null),O=_.exports;b()(_,{VAppBar:w.Z,VSpacer:k.Z,VToolbarTitle:x.qW});var C={name:"App",components:{AppNavbar:O}},Z=C,S=e(7524),j=(0,f.Z)(Z,r,i,!1,null,null,null),E=j.exports;b()(j,{VApp:S.Z});var F=e(5591);o.Z.use(F.Z);var T=new F.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#1d4031",secondary:"#c8102e",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),N=e(8345),I=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"HOME d-flex flex-column align-center justify-center"},[o("img",{attrs:{src:e(493),width:"100%"}}),o("h2",{staticClass:"my-10 px-2 d-flex align-center"},[o("v-icon",{staticClass:"pr-2",attrs:{size:"30"}},[t._v("mdi-volume-high")]),t._v(" Best BaldHeadisms' ")],1),o("div",{staticClass:"SOUNDS"},[o("iconic-sounds")],1)])},A=[],D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ICONIC-SOUNDS d-flex flex-column align-center justify-center"},[e("audio",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],ref:"audio",staticClass:"mb-8",attrs:{src:t.playing,autoplay:"",controls:""}},[t._v(" Your browser does not support the "),e("code",[t._v("audio")]),t._v(" element. ")]),e("div",{staticClass:"SOUNDS d-flex align-center justify-center"},t._l(t.headshots,(function(n){return e("div",{key:"headshot-"+n.name,staticClass:"SOUND",on:{click:function(e){return t.play(n)}}},[e("headshot-img",{attrs:{item:n}}),e("v-icon",{staticClass:"PLAY",attrs:{size:"100"}},[t._v("mdi-play-circle")])],1)})),0)])},H=[],U={name:"iconic-sounds",components:{HeadshotImg:m},data:function(){return{headshots:h,playing:null,sounds:{ashley:e(3150),dan:e(8727),bloomington:e(7998)}}},methods:{play:function(t){var n=this.sounds[t.name];n!==this.playing?this.playing=n:this.$refs.audio.currentTime=0}}},$=U,B=e(24),P=(0,f.Z)($,D,H,!1,null,null,null),V=P.exports;b()(P,{VIcon:B.Z});var M={name:"home-component",components:{IconicSounds:V}},q=M,z=(0,f.Z)(q,I,A,!1,null,"40e99b66",null),L=z.exports;b()(z,{VIcon:B.Z}),o.Z.use(N.Z);var Y=new N.Z({routes:[{path:"/",component:L}],mode:"history"});o.Z.config.productionTip=!1,new o.Z({router:Y,vuetify:T,render:function(t){return t(E)}}).$mount("#app")},4262:function(t){function n(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=4262,t.exports=n},493:function(t,n,e){"use strict";t.exports=e.p+"img/cover.a01b8cc9.png"},1749:function(t,n,e){"use strict";t.exports=e.p+"img/ashley.38ec325d.png"},3771:function(t,n,e){"use strict";t.exports=e.p+"img/bloomington.9f5a1ac1.png"},8486:function(t,n,e){"use strict";t.exports=e.p+"img/dan.be810ab8.png"},3150:function(t,n,e){"use strict";t.exports=e.p+"media/ashley.1c4cc0a2.mp4"},7998:function(t,n,e){"use strict";t.exports=e.p+"media/bloomington.5717ad93.mp4"},8727:function(t,n,e){"use strict";t.exports=e.p+"media/dan.6ec6c588.mp4"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var l=c(e)}for(n&&n(o);u<a.length;u++)i=a[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},o=self["webpackChunkbaldheadboys"]=self["webpackChunkbaldheadboys"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(3598)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.20a45e9c.js.map