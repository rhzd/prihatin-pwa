(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8d1a":function(e,t,a){},bca1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-white text-black",class:e.scroll?"shadow":"shadow-0"},[a("Header")],1),a("q-page-container",{},[a("q-scroll-observer",{on:{scroll:e.scrollPoint}}),a("router-view")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:1==e.dark?"bg-dark text-grey":"bg-white text-black"},[a("q-toolbar",{staticClass:"row"},[a("div",{staticClass:"col-1 text-left"},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"eva-arrow-back-outline"}})],1)])],1)},s=[],c={data:function(){return{title:"FreeJe",dark:null}},beforeMount:function(){this.dark=this.$q.dark.isActive},methods:{},computed:{currentRoute:function(){return this.$store.state.navigation.currentRoute}},watch:{"$q.dark.isActive":function(e){this.dark=e}}},l=c,i=a("2877"),u=a("65c6"),d=a("9c40"),b=a("2eeb"),f=a("eebe"),h=a.n(f),v=Object(i["a"])(l,o,s,!1,null,null,null),w=v.exports;h()(v,"components",{QToolbar:u["a"],QBtn:d["a"]}),h()(v,"directives",{GoBack:b["a"]});var k=a("0831"),g=(k["a"].getScrollHeight,{name:"ModalPage",components:{Header:w},data:function(){return{scroll:!1}},methods:{scrollPoint:function(e){0==e.position?this.scroll=!1:this.scroll=!0}}}),p=g,m=(a("d870"),a("4d5a")),q=a("e359"),Q=a("09e3"),x=a("ed5e"),H=a("429b"),$=Object(i["a"])(p,n,r,!1,null,null,null);t["default"]=$.exports;h()($,"components",{QLayout:m["a"],QHeader:q["a"],QPageContainer:Q["a"],QScrollObserver:x["a"],QTabs:H["a"]})},d870:function(e,t,a){"use strict";var n=a("8d1a"),r=a.n(n);r.a}}]);