(function(){var t={2408:function(t,e,n){"use strict";var a=n(144),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-navbar"),n("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"app-bar",attrs:{color:"primary",elevation:"4"}},[n("v-toolbar-title",[t._v("Bald Head Boys")]),n("v-spacer"),n("div",{staticClass:"headshots d-flex align-center"},t._l(t.headshots,(function(e){return n("headshot-img",{key:"headshot-"+e.name,attrs:{item:e},nativeOn:{click:function(n){return t.navigate(e)}}})})),1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HEADSHOT"},[n("img",{attrs:{src:t.item.src,alt:t.item.name}})])},l=[],u={name:"headshot-img",props:{item:{type:Object,required:!0}}},d=u,p=n(3736),m=(0,p.Z)(d,c,l,!1,null,"dffbdaf2",null),h=m.exports,f=[{src:n(6833),name:"ashley",tiktok:"https://www.tiktok.com/@ashrenn44"},{src:n(8486),name:"dan",tiktok:"https://www.tiktok.com/@cameramandaniel"},{src:n(3771),name:"bloomington",tiktok:"https://www.tiktok.com/@mr.bloomington"}],v={name:"app-navbar",components:{HeadshotImg:h},data(){return{headshots:f}},methods:{getImgUrl(t){return n(8727)(`@${t.src}${t.name}.png`)},navigate(t){window.open(t.tiktok,"_blank")}}},g=v,b=n(3453),y=n.n(b),k=n(5426),C=n(3631),x=n(7921),w=(0,p.Z)(g,r,o,!1,null,null,null),_=w.exports;y()(w,{VAppBar:k.Z,VSpacer:C.Z,VToolbarTitle:x.qW});var Z={name:"App",components:{AppNavbar:_}},O=Z,S=n(7524),T=(0,p.Z)(O,s,i,!1,null,null,null),$=T.exports;y()(T,{VApp:S.Z});var E=n(1910);a.Z.use(E.Z);var V=new E.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#1d4031",secondary:"#c8102e",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),A=n(8345),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"HOME d-flex flex-column align-center justify-center"},[a("img",{attrs:{src:n(493),width:"100%"}}),a("h2",{staticClass:"my-10 px-2 d-flex align-center"},[a("v-icon",{staticClass:"pr-2",attrs:{size:"30"}},[t._v("mdi-tshirt-crew")]),t._v(" Merchandise ")],1),a("div",{staticClass:"SHIRTS"},[a("shirts")],1),a("h2",{staticClass:"my-10 px-2 d-flex align-center"},[a("v-icon",{staticClass:"pr-2",attrs:{size:"30"}},[t._v("mdi-volume-high")]),t._v(" Best BaldHeadisms' ")],1),a("div",{staticClass:"SOUNDS"},[a("iconic-sounds")],1)])},I=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ICONIC-SOUNDS d-flex flex-column align-center justify-center"},[n("audio",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],ref:"audio",staticClass:"mb-8",attrs:{src:t.playing,autoplay:"",controls:""}},[t._v(" Your browser does not support the "),n("code",[t._v("audio")]),t._v(" element. ")]),n("div",{staticClass:"SOUNDS d-flex align-center justify-center"},t._l(t.headshots,(function(e){return n("div",{key:"headshot-"+e.name,staticClass:"SOUND",on:{click:function(n){return t.play(e)}}},[n("headshot-img",{attrs:{item:e}}),n("v-icon",{staticClass:"PLAY",attrs:{size:"100"}},[t._v("mdi-play-circle")])],1)})),0)])},B=[],D={name:"iconic-sounds",components:{HeadshotImg:h},data(){return{headshots:f,playing:null,sounds:{ashley:n(3150),dan:n(8996),bloomington:n(7998)}}},methods:{play(t){let e=this.sounds[t.name];e!==this.playing?this.playing=e:this.$refs.audio.currentTime=0,this.$analytics.track(this.$analytics.events.soundClick,{name:t.name})}}},H=D,F=n(6428),N=(0,p.Z)(H,P,B,!1,null,null,null),R=N.exports;y()(N,{VIcon:F.Z});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SHIRTS d-flex align-center justify-center"},[t._l(t.shirts,(function(e,a){return n("div",{key:"shirt-"+a,staticClass:"SHIRT primary d-flex flex-column align-center mx-8 py-4 mb-15"},[n("h3",{staticClass:"font-weight-bold text-uppercase pb-4"},[t._v(t._s(e.name))]),n("img",{attrs:{width:"350",src:e.src,alt:e.name}}),n("h4",{staticClass:"font-weight-bold"},[t._v("CAD $30")]),n("v-btn",{staticClass:"mt-4",attrs:{color:"secondary",elevation:"4",large:""},on:{click:function(n){return t.purchaseClick(e)}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-cart ")]),t._v("Purchase ")],1)],1)})),t.active?n("purchase-confirmation",{attrs:{shirt:t.active,close:t.purchaseClick.bind(this,null)}}):t._e()],2)},M=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PURCHASE-CONF"},[n("v-dialog",{staticClass:"DIALOG",attrs:{"max-width":"600",transition:"dialog-bottom-transition","overlay-opacity":"0.9"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"secondary",dark:"",dense:""}},[n("v-toolbar-title",{staticClass:"text-body-2 font-weight-bold grey--text"},[t._v(" Purchase Disclaimer ")])],1),n("v-card-text",{staticClass:"py-4"},[n("div",{staticClass:"TEXT"},[t._v(" The Bald Head Boys would like you to know, that given we are just starting out, shipments may take up to ~ 4 weeks to be fulfilled. Also, as of now, we can only offer a refund on a case-by-case basis VIA a dispute email to "),n("a",{attrs:{href:"mailto:baldheadboys.com@gmail.com?subject=Dispute a Purchase"}},[t._v("baldheadboys.com@gmail.com")]),t._v(". ")]),n("div",{staticClass:"AGREE pt-4"},[n("v-checkbox",{attrs:{label:"I Agree"},model:{value:t.agreement,callback:function(e){t.agreement=e},expression:"agreement"}})],1)]),n("v-card-actions",{staticClass:"pb-3"},[n("v-spacer"),n("v-btn",{staticClass:"body-2 font-weight-bold",attrs:{color:"primary",elevation:"6",disabled:!t.agreement},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("Proceed")])],1)],1)],1)],1)},L=[],W={name:"purchase-confirmation",props:{close:{type:Function,required:!0},shirt:{type:Object,required:!0}},data(){return{agreement:!1,dialog:{}}},watch:{dialog(){this.dialog||this.$props.close()}}},G=W,z=n(1565),Y=n(3685),Q=n(7118),X=n(8424),J=n(1659),K=n(5218),tt=(0,p.Z)(G,q,L,!1,null,null,null),et=tt.exports;y()(tt,{VBtn:z.Z,VCard:Y.Z,VCardActions:Q.h7,VCardText:Q.ZB,VCheckbox:X.Z,VDialog:J.Z,VSpacer:C.Z,VToolbar:K.Z,VToolbarTitle:x.qW});var nt=[{src:n(1157),name:"Ashley's got a bald head"},{src:n(6053),name:"Dans calling the eagles"},{src:n(409),name:"Mr. Bloomington here"},{src:n(1797),name:"Baldest man in NS"},{src:n(5336),name:"Wealthiest man in AZ"}],at={name:"shirts-section",components:{PurchaseConfirmation:et},data(){return{active:null,shirts:nt}},methods:{purchaseClick(t){this.active=t,this.$analytics.track(this.$analytics.events.purchaseClick,{shirt:t.name})}}},st=at,it=(0,p.Z)(st,U,M,!1,null,null,null),rt=it.exports;y()(it,{VBtn:z.Z,VIcon:F.Z});var ot={name:"home-component",components:{IconicSounds:R,Shirts:rt}},ct=ot,lt=(0,p.Z)(ct,j,I,!1,null,"9b39a856",null),ut=lt.exports;y()(lt,{VIcon:F.Z}),a.Z.use(A.Z);const dt=new A.Z({routes:[{path:"/",component:ut}],mode:"history"});var pt=dt,mt=n(5535),ht=n(5047),ft={dev:"localhost"===window.location.hostname},vt={container:ft.dev?"G-2WQWLRLERN":"G-1TYR7RH75B"};const gt=(0,mt.ZP)({app:"bald-head-boys"+(ft.dev?"-dev":""),plugins:[(0,ht.ZP)({trackingId:vt.container})]});var bt={install(t){t.prototype.$analytics={events:{soundClick:"SoundClick",shirtClick:"ShirtClick",purchaseClick:"PurchaseClick"},track(t,e){gt.track(t,e)},page(){gt.page()}}}};a.Z.config.productionTip=!1,a.Z.use(bt),pt.beforeEach(((t,e,n)=>(a.Z.prototype.$analytics.page(),n()))),new a.Z({router:pt,vuetify:V,render:t=>t($)}).$mount("#app")},8727:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8727,t.exports=e},493:function(t,e,n){"use strict";t.exports=n.p+"img/cover.a01b8cc9.png"},6833:function(t,e,n){"use strict";t.exports=n.p+"img/ashley.38ec325d.png"},3771:function(t,e,n){"use strict";t.exports=n.p+"img/bloomington.9f5a1ac1.png"},8486:function(t,e,n){"use strict";t.exports=n.p+"img/dan.be810ab8.png"},1157:function(t,e,n){"use strict";t.exports=n.p+"img/ashley.80c1d0b7.png"},1797:function(t,e,n){"use strict";t.exports=n.p+"img/baldest.1694f8d2.png"},409:function(t,e,n){"use strict";t.exports=n.p+"img/bloomington.d7d4b0f7.png"},6053:function(t,e,n){"use strict";t.exports=n.p+"img/dan.fd113156.png"},5336:function(t,e,n){"use strict";t.exports=n.p+"img/wealthiest.e8af97dc.png"},3150:function(t,e,n){"use strict";t.exports=n.p+"media/ashley.1c4cc0a2.mp4"},7998:function(t,e,n){"use strict";t.exports=n.p+"media/bloomington.5717ad93.mp4"},8996:function(t,e,n){"use strict";t.exports=n.p+"media/dan.6ec6c588.mp4"}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],i=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,i,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var u=c(n)}for(e&&e(a);l<r.length;l++)i=r[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkbaldheadboys"]=self["webpackChunkbaldheadboys"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2408)}));a=n.O(a)})();
//# sourceMappingURL=app.ffa99643.js.map