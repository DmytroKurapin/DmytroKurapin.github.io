(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{331:function(t,e,r){"use strict";var o=r(1),n=Object(o.defineComponent)({setup:function(){return{}}}),c=r(5),component=Object(c.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate-loading flex h-40"},[e("img",{staticClass:"align-middle h-10 inline-block m-auto",attrs:{src:"/favicon.png",alt:"loading"}})])}],!1,null,"3b69e410",null);e.a=component.exports},334:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("126da743",content,!0,{sourceMap:!1})},339:function(t,e,r){"use strict";r(334)},340:function(t,e,r){(e=r(45)(!1)).push([t.i,".wassap-btn[data-v-7f295574]{width:100%;padding:.5rem 1.5rem;--bg-opacity:1;background-color:#e1cbca;background-color:rgba(225,203,202,var(--bg-opacity))}",""]),t.exports=e},351:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(129),c=r(89),l=Object(o.defineComponent)({components:{HeartIcon:n.a},props:{product:{type:Object,required:!0}},setup:function(t,e){var r=e.root,o=t.product;return{prod:o,removeFromFavorites:function(){Object(c.pushPopFavorites)([o],!0)},orderViaWassap:function(){alert(r.$t("general.order_via_wassap"))},navigateToProductPage:function(){r.$router.push({path:r.localePath("/products/".concat(o.category,"/").concat(o.vendorCode))})}}}}),d=(r(339),r(5)),v=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("figure",{staticClass:"w-1/3 pb-4 cursor-pointer",on:{click:t.navigateToProductPage}},[r("img",{attrs:{src:t.prod.thumbnail,alt:t.prod.title[t.$i18n.locale]}})]),t._v(" "),r("div",{staticClass:"w-2/3 ps-4 lg:ps-8 flex flex-col justify-between"},[r("div",[r("p",{staticClass:"flex justify-between"},[r("span",{staticClass:"flex-1 cursor-pointer",on:{click:t.navigateToProductPage}},[t._v("\n          "+t._s(t.prod.title[t.$i18n.locale])+"\n        ")]),t._v(" "),r("HeartIcon",{staticClass:"w-6 h-6",attrs:{"is-liked":!0},on:{click:function(e){return t.removeFromFavorites()}}})],1),t._v(" "),r("p",{staticClass:"text-08"},[t._v("\n        "+t._s(t.prod.shortDescription[t.$i18n.locale])+"\n      ")]),t._v(" "),r("p",[r("span",{attrs:{dir:"ltr"}},[t._v(t._s(t.prod.price)+" ₪")])])]),t._v(" "),r("button",{staticClass:"wassap-btn hidden lg:block",on:{click:t.orderViaWassap}},[t._v("\n      "+t._s(t.$t("general.order_via_wassap"))+"\n    ")])]),t._v(" "),r("button",{staticClass:"wassap-btn lg:hidden",on:{click:t.orderViaWassap}},[t._v("\n    "+t._s(t.$t("general.order_via_wassap"))+"\n  ")])])}),[],!1,null,"7f295574",null).exports,f=r(331),_=r(128),h=r(126),m=Object(o.defineComponent)({components:{FavoriteProductCard:v,LoadingIcon:f.a,HeartIcon:n.a},head:{},setup:function(t,e){var r=e.root,n=Object(o.ref)(r.$t("navbar.favorites")),l=Object(o.ref)("".concat(n.value," | ").concat(r.$t("general.site_description"))),d=Object(o.computed)((function(){return c.favoriteProducts$.value.length>0?c.favoriteProducts$.value[0].thumbnail:"/logo.png"}));return Object(o.useMeta)({title:n.value,meta:Object(h.a)({title:n.value,description:l.value,image:d.value,url:r.$route.path})}),{favoriteProducts:c.favoriteProducts$,isLoading:_.c}}}),w=Object(d.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap -mx-6 sm:-mx-4"},[this.favoriteProducts.length>0?this._l(this.favoriteProducts,(function(t,r){return e("div",{key:"favorite_"+r,staticClass:"w-full px-6 md:px-4 md:w-1/2 border-gray-400"},[e("FavoriteProductCard",{staticClass:"flex flex-wrap border-gray-400 py-4",class:[0===r?"border-none":"border-t",0!==r&&r%2==0?"md:border-t":"md:border-none"],attrs:{product:t}})],1)})):this.isLoading?[e("LoadingIcon")]:[e("div",{staticClass:"text-center"},[this._v("\n      "+this._s(this.$t("general.no_favorites_selected"))+"\n    ")])]],2)}),[],!1,null,"0bb3ca34",null);e.default=w.exports}}]);