(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(path){return"".concat("http://165.22.251.36:3030").concat(path)}},316:function(t,e,r){"use strict";var n=r(10),o=r(35),c=r(46),l=r(141),d=r(101),f=r(17),v=r(80).f,m=r(53).f,x=r(21).f,h=r(318).trim,y="Number",_=n.Number,j=_,w=_.prototype,O=c(r(102)(w))==y,C="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=C?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(O?f((function(){w.valueOf.call(r)})):c(r)!=y)?l(new j(k(e)),r,_):k(e)};for(var $,P=r(19)?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;P.length>S;S++)o(j,$=P[S])&&!o(_,$)&&x(_,$,m(j,$));_.prototype=w,w.constructor=_,r(26)(n,y,_)}},318:function(t,e,r){var n=r(7),o=r(47),c=r(17),l=r(319),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(x):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},x=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},319:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},320:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("291de43c",content,!0,{sourceMap:!1})},321:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("3055ed8c",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r.d(e,"h",(function(){return y})),r.d(e,"d",(function(){return _})),r.d(e,"g",(function(){return j})),r.d(e,"a",(function(){return w})),r.d(e,"f",(function(){return O})),r.d(e,"i",(function(){return C})),r.d(e,"e",(function(){return k})),r.d(e,"c",(function(){return $})),r.d(e,"b",(function(){return P}));r(48);var n=r(4),o=r(8),c=(r(27),r(212),r(18),r(24),r(1)),l=r(323),d=r(142),f=r(144),v={categories:{wedding:[],batMitzvah:[],barMitzvah:[],forBusinesses:[]},activeProduct:{obj:null,relatedProducts:[],similarProducts:[]},sortedList:[]},m=Object(c.f)(l.a.cloneDeep(v)),x=function(t,e){m.categories[f.a.value.currCategory]=l.a.cloneDeep(t),P(e)},h=function(t){return t.reduce((function(t,e,r){return Object.assign(t,Object(o.a)({},e,r))}),{})},y=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,l,i,f,v,x,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m.activeProduct.relatedProducts=[],m.activeProduct.similarProducts=[],!((e=m.activeProduct.obj)&&e.related&&(e.related.length>0||e.similar.length>0))){t.next=32;break}r=h(e.related),n=h(e.similar),o=Object.values(m.categories),c=!1,l=!1,i=0;case 10:if(!(i<o.length)){t.next=28;break}if(!c||!l){t.next=13;break}return t.abrupt("return");case 13:f=o[i],v=f.length,x=0;case 16:if(!(x<v)){t.next=25;break}if(!c||!l){t.next=19;break}return t.abrupt("return");case 19:y=f[x].vendorCode,void 0!==r[y]&&(m.activeProduct.relatedProducts.push(f[x]),delete r[y],c=0===Object.keys(r).length),void 0!==n[y]&&(m.activeProduct.similarProducts.push(f[x]),delete n[y],l=0===Object.keys(n).length);case 22:x++,t.next=16;break;case 25:i++,t.next=10;break;case 28:return t.next=30,Object(d.b)(Object.assign({},r,n));case 30:t.sent.map((function(t){var e=t.vendorCode;return void 0!==r[e]&&m.activeProduct.relatedProducts.splice(r[e],0,t),void 0!==n[e]&&m.activeProduct.similarProducts.splice(n[e],0,t),null}));case 32:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,sub,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(e),r=f.a.value,n=r.currCategory,sub=r.subCat,t.next=4,Object(d.a)({category:n,sub:sub,amount:12,skip:0});case 4:data=t.sent,x(data,e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r||(null===(n=m.activeProduct.obj)||void 0===n?void 0:n.vendorCode)===e){t.next=7;break}return t.next=3,Object(d.b)([e]);case 3:o=t.sent,m.activeProduct.obj=o[0],t.next=8;break;case 7:r&&(m.activeProduct.obj=r);case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),w=Object(c.a)((function(){return m.activeProduct.obj})),O=Object(c.a)((function(){return m.activeProduct.relatedProducts})),C=Object(c.a)((function(){return m.activeProduct.similarProducts})),k=Object(c.a)((function(){return m.sortedList.reduce((function(t,e,i){var r=Math.floor(i/12);return(t[r]||(t[r]=[])).push(e),t}),[])})),$=function(t){var e=l.a.cloneDeep(f.c.value);switch(t){case"price_low":e.sort((function(t,e){return t.price-e.price}));break;case"price_high":e.sort((function(t,e){return e.price-t.price}));break;case"new_first":e.sort((function(t,e){return t.newlyAdded&&e.newlyAdded?0:t.newlyAdded?-1:1}))}m.sortedList=e},P=function(t){var e=f.a.value.currCategory,r=m.categories[e];Object(f.g)(0===r.length?[]:r),$(t)}},323:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(25),r(22),r(29);var n=r(14),o=r(145),c=r(146);r(30),r(11),r(28),r(16),r(18);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,null,[{key:"cloneDeep",value:function(e){if(null===e)return e;if(e instanceof Date)return new Date(e.getTime());if("object"===Object(n.a)(e)){if("function"==typeof e[Symbol.iterator]){var r=[];if(e.length>0){var o,c=l(e);try{for(c.s();!(o=c.n()).done;){var d=o.value;r.push(t.cloneDeep(d))}}catch(t){c.e(t)}finally{c.f()}}return r}var f=Object.keys(e),v={};if(f.length>0){var m,x=l(f);try{for(x.s();!(m=x.n()).done;){var h=m.value;v[h]=t.cloneDeep(e[h])}}catch(t){x.e(t)}finally{x.f()}}return v}return e}},{key:"getUpdatedQueryObj",value:function(t,e,r,n){var o=JSON.parse(JSON.stringify(t));return r!==n||o[e]?(r===n?delete o[e]:o[e]=r,o):o}}]),t}()},324:function(t,e,r){"use strict";var n=r(1),o=Object(n.b)({name:"ChevronLeft",props:{viewBox:{type:String,default:"0 0 20 20"}}}),c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:t.viewBox,stroke:"currentColor"},on:{click:function(e){return t.$emit("click")}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])}),[],!1,null,"09fc733b",null);e.a=component.exports},325:function(t,e,r){"use strict";var n=r(1),o=Object(n.b)({name:"ChevronRight",props:{viewBox:{type:String,default:"0 0 20 20"}}}),c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:t.viewBox,stroke:"currentColor"},on:{click:function(e){return t.$emit("click")}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])}),[],!1,null,"db37f1d6",null);e.a=component.exports},326:function(t,e,r){"use strict";r(316);var n=r(1),o=r(324),c=r(325),l=r(33),d=Object(n.b)({components:{ChevronRight:c.a,ChevronLeft:o.a},props:{items:{type:Array,required:!0},visibleAmount:{type:Number,default:2},picsWrapperClass:{type:String,default:""},slideClass:{type:String,default:""}},setup:function(t,e){var r=e.root,d=Object(n.g)(0),f=Object(n.a)((function(){return"rtl"===r.$dir()})),v=Object(n.a)((function(){return t.visibleAmount>t.items.length?t.items.length:t.visibleAmount})),m=Object(n.a)((function(){return v.value<=1?{slidesWidth:"w-full",arrowMargin:"mx-4"}:{slidesWidth:"w-1/".concat(v.value),arrowMargin:""}})),x=Object(n.a)((function(){return function(t){var e=d.value;if(e>t)return f?"start-0 translate-x-full z-10 opacity-0":"start-0 -translate-x-full z-10 opacity-0";if(e+v.value<=t)return"".concat(f?"-":"","translate-x-full start-").concat(v.value-1,"/").concat(v.value," z-10 opacity-0");var r=e===t?"start-0":"start-".concat(t-e,"/").concat(v.value);return"".concat(r," z-20")}})),h=Object(n.a)((function(){return l.d.value?"0 0 24 24":void 0}));return{picsAmount:v,stylesObj$:m,mobileChevronViewbox$:h,translateClass:x,ChevronRight:c.a,ChevronLeft:o.a,previousSlide:function(){0===d.value?d.value=t.items.length-v.value:d.value--},nextSlide:function(){t.items.length-v.value===d.value?d.value=0:d.value++}}}}),f=r(5),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex overflow-hidden"},[r("div",{class:["z-30 flex items-center justify-center w-8 text-4xl cursor-pointer text-primary-light",t.stylesObj$.arrowMargin],on:{click:function(e){"rtl"===t.$dir()?t.previousSlide():t.nextSlide()}}},[r("rtl"===t.$dir()?t.ChevronRight:t.ChevronLeft,{tag:"component",attrs:{"view-box":t.mobileChevronViewbox$}})],1),t._v(" "),r("div",{class:["relative flex-grow",t.picsWrapperClass]},t._l(t.items,(function(e,n){return r("div",{key:"slide"+n,class:["absolute inset-0 flex justify-center transition-all duration-1000 ease-in-out transform",t.stylesObj$.slidesWidth,""+t.translateClass(n)]},[t._t("default",null,{item:e,idx:n})],2)})),0),t._v(" "),r("div",{class:["z-30 flex items-center justify-center w-8 text-4xl cursor-pointer text-primary-light",t.stylesObj$.arrowMargin],on:{click:function(e){"rtl"===t.$dir()?t.nextSlide():t.previousSlide()}}},[r("rtl"===t.$dir()?t.ChevronLeft:t.ChevronRight,{tag:"component",attrs:{"view-box":t.mobileChevronViewbox$}})],1)])}),[],!1,null,null,null);e.a=component.exports},327:function(t,e,r){"use strict";r(320)},328:function(t,e,r){var n=r(51)((function(i){return i[1]}));n.push([t.i,'.img-wrapper[data-v-76e9e62d]:before{\n  padding-bottom:calc(100%*1);\n  padding-bottom:calc(100%*var(--ratio, 1));\n  content:"";\n  display:block\n}',""]),n.locals={},t.exports=n},329:function(t,e,r){"use strict";r(321)},330:function(t,e,r){var n=r(51)((function(i){return i[1]}));n.push([t.i,'.img-wrapper[data-v-e9e05970]:before{\n  padding-bottom:100%;\n  content:"";\n  display:block\n}',""]),n.locals={},t.exports=n},332:function(t,e,r){"use strict";var n=r(48),o=(r(212),r(213),r(1)),c=Object(o.b)({components:{},setup:function(t,e){var r=e.root,o=r.$route.params,c=r.$toKebabCase,l=o,d=l.hasOwnProperty("product")?"/products":"";return{breadcrumbsList:[{link:"/",label:r.$t("navbar.home_page"),subCategories:[],isLastItem:!1}].concat(Object(n.a)(Object.values(l).reduce((function(t,e,n,o){var l=void 0===o[n+1],f=r.$t("navbar.".concat(c(e)));return f==="navbar.".concat(c(e))&&(f=e),t.push({link:"".concat(0===n?d:t[n-1].link,"/").concat(e),label:f,subCategories:[],isLastItem:l}),t}),[])))}}}),l=r(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("nav",{staticClass:"h-0 invisible sm:h-auto sm:visible sm:mb-4",attrs:{"aria-label":"Breadcrumbs"}},[r("ol",{staticClass:"list-none p-0 text-xs inline-flex"},t._l(t.breadcrumbsList,(function(e,n){return r("li",{key:"breadcrumbs_label_"+n,class:["flex items-center",e.isLastItem?"text-primary font-bold text-sm":null]},[r("nuxt-link",{attrs:{to:t.localePath(e.link)}},[t._v("\n          "+t._s(e.label)+"\n        ")]),t._v(" "),e.isLastItem?t._e():r("svg",{staticClass:"fill-current w-3 h-3 mx-3 transform",class:"rtl"===t.$dir()?"rotate-180":null,attrs:{viewBox:"0 0 320 512"}},[r("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941\n             0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256\n             34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941\n             0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])],1)})),0)])])}),[],!1,null,"754cbec8",null);e.a=component.exports},333:function(t,e,r){"use strict";r(316);var n=r(1),o=r(315),c=Object(n.b)({components:{},props:{picRation:{type:Number,default:1},slidesData:{type:Array,default:function(){return[]}},selectedIdx:{type:Number,default:0},localPic:{type:Boolean,default:!1}},setup:function(t){return{imgSrc:function(img){return t.localPic?img.pic:Object(o.a)(img.pic)},imgAltByIdx:function(e){return t.slidesData[e].title||"slide ".concat(e)}}}}),l=(r(327),r(5)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative img-wrapper",style:"--ratio: "+t.picRation},t._l(t.slidesData,(function(img,e){return r("figure",{key:"main-pic"+e,staticClass:"absolute inset-0 transition ease duration-2000 lg:cursor-pointer",class:t.selectedIdx===e?"opacity-100":"opacity-0",on:{click:function(e){return t.$emit("clicked",t.selectedIdx)}}},[r("img",{attrs:{src:t.imgSrc(img),alt:t.imgAltByIdx(e),onContextMenu:"return false;"}})])})),0)}),[],!1,null,"76e9e62d",null);e.a=component.exports},334:function(t,e,r){"use strict";var n=r(1),o=Object(n.b)({props:{message:{type:String,default:""}},setup:function(t,e){var r=e.root;return{orderViaWassap:function(){var e=t.message?"".concat(r.$t("general.wassap_msg_start")," ").concat(t.message):"";window.open("https://wa.me/".concat("972587691795","?text=").concat(encodeURIComponent(e)),"_blank")}}}}),c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"px-6 py-2 bg-primary-light",on:{click:t.orderViaWassap}},[t._v("\n    "+t._s(t.$t("general.order_via_wassap"))+"\n  ")])])}),[],!1,null,"4e38c410",null);e.a=component.exports},335:function(t,e,r){"use strict";var n=r(1),o=Object(n.b)({components:{},props:{sizes:{type:Array,required:!0}},setup:function(t){return{prodSizes:Object(n.a)((function(){return t.sizes}))}}}),c=(r(329),r(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(t._s(t.$t("product.sizes"))+": "+t._s(t.prodSizes.join(", "))+" "+t._s(t.$t("product.cm")))])}),[],!1,null,"e9e05970",null);e.a=component.exports},341:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("7d1bf657",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r(341)},354:function(t,e,r){var n=r(51)((function(i){return i[1]}));n.push([t.i,'.img-wrapper[data-v-5c288d12]:before{\n  padding-bottom:100%;\n  content:"";\n  display:block\n}',""]),n.locals={},t.exports=n},358:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(322),c=r(332),l=(r(24),r(334)),d=r(335),f=r(103),v=r(143),m=Object(n.b)({components:{HeartIcon:v.a},props:{productData:{type:Object,required:!0}},setup:function(t){var e=Object(n.a)((function(){return t.productData}));return{prodObj:e,isLiked:f.isCurrentLiked,toggleFavorites:function(t){Object(f.pushPopFavorites)([e.value],t)}}}}),x=r(5),h=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-2"},[r("button",{staticClass:"flex bg-transparent focus:outline-none space-s-2",on:{click:function(e){t.toggleFavorites(t.isLiked(t.prodObj.vendorCode))}}},[r("HeartIcon",{staticClass:"w-8 h-6 -ms-1",attrs:{"is-liked":t.isLiked(t.prodObj.vendorCode)}}),t._v(" "),r("span",{staticClass:"self-center text-sm"},[t._v("\n      "+t._s(t.isLiked(t.prodObj.vendorCode)?t.$t("product.remove_from_favorites"):t.$t("product.add_to_favorites"))+"\n    ")])],1)])}),[],!1,null,null,null).exports,y=Object(n.b)({components:{ButtonWassap:l.a,ButtonToggleFavorites:h,ProductSizesSection:d.a},props:{productData:{type:Object,required:!0}},setup:function(t,e){var r=e.root,o=Object(n.a)((function(){return r.$i18n.locale})),c=t.productData.title[o.value];return{wassapMsgTxt:"".concat(c," (").concat(t.productData.vendorCode,") "),prodObj:Object(n.a)((function(){return t.productData})),priceHint:Object(n.a)((function(){return t.productData.priceHint&&"* - ".concat(t.productData.priceHint[o.value])}))}}}),_=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{},[t._t("section-top"),t._v(" "),r("ButtonToggleFavorites",{staticClass:"block sm:hidden",attrs:{"product-data":t.prodObj}}),t._v(" "),t.prodObj.sizes&&t.prodObj.sizes.length>0?r("ProductSizesSection",{staticClass:"mb-2 text-sm",attrs:{sizes:t.prodObj.sizes}}):t._e(),t._v(" "),r("p",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.$sanitize(t.prodObj.description[t.$i18n.locale]))}}),t._v(" "),r("p",{staticClass:"pt-4 text-xl"},[r("b",[t._v(t._s(t.prodObj.price)+" ₪")]),t.priceHint?r("sup",[t._v("*")]):t._e()]),t._v(" "),t.priceHint?r("p",{staticClass:"text-xs"},[t._v("\n    "+t._s(t.priceHint)+"\n  ")]):t._e(),t._v(" "),r("ButtonToggleFavorites",{staticClass:"hidden sm:block",attrs:{"product-data":t.prodObj}}),t._v(" "),r("ButtonWassap",{staticClass:"py-4",attrs:{message:t.wassapMsgTxt}}),t._v(" "),t._t("related-prod")],2)}),[],!1,null,null,null).exports,j=(r(316),r(326)),w=r(315),O=Object(n.b)({components:{ImagesSlideshow:j.a},props:{products:{type:Array,required:!0},title:{type:String,default:""},visibleAmount:{type:Number,default:2}},setup:function(){return{publicFileUrl:w.a}}}),C=Object(x.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"border-t-3 border-primary-light"},[r("p",{staticClass:"py-2 text-2xl text-primary-dark"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("ImagesSlideshow",{staticClass:"py-2",attrs:{items:t.products,"visible-amount":t.visibleAmount,"pics-wrapper-class":"text-center h-40 xs:h-48 lg:h-56 text-08"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("figure",{staticClass:"self-start px-4 cursor-pointer lg:px-5"},[r("img",{staticClass:"max-h-36 sm:max-h-40",attrs:{src:t.publicFileUrl(n.thumbnail),alt:n.title[t.$i18n.locale],onContextMenu:"return false;"}}),t._v(" "),r("p",{staticClass:"pt-2"},[t._v("\n          "+t._s(n.title[t.$i18n.locale])+"\n        ")]),t._v(" "),r("p",[t._v(t._s(n.price)+" ₪")])])]}}])})],1)}),[],!1,null,null,null).exports,k=r(97),$=Object(n.b)({components:{XIcon:k.a,ImagesSlideshow:j.a},props:{images:{type:Array,required:!0},title:{type:String,default:""},visibleAmount:{type:Number,default:1},videoSrc:{type:String,default:null}},setup:function(t,e){var r=e.emit;return{toggleModal:function(){return r("toggle")},publicFileUrl:w.a}}}),P=Object(x.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed inset-0 z-max"},[r("div",{staticClass:"flex h-full justify-center w-full"},[r("div",{staticClass:"modal-overlay absolute bg-gray-900 h-full opacity-50 w-full",on:{click:t.toggleModal}}),t._v(" "),r("div",{staticClass:"py-5 w-3/5 z-50"},[r("div",{staticClass:"flex flex-col bg-white h-full modal-content"},[r("div",{staticClass:"text-right"},[r("button",{staticClass:"pt-4 pr-4 focus:outline-none",attrs:{type:"button"},on:{click:t.toggleModal}},[r("XIcon",{staticClass:"h-6 w-6 text-primary-light",attrs:{"view-box":"0 0 24 24"}})],1)]),t._v(" "),r("div",{staticClass:"relative flex-grow pb-4"},[t.videoSrc?r("div",{staticClass:"h-full relative"},[r("figure",{staticClass:"flex absolute inset-0 justify-center"},[r("video",{staticClass:"shadow-lg",attrs:{controls:"",controlsList:"nodownload",disablePictureInPicture:""},on:{contextmenu:function(t){t.preventDefault()}}},[r("source",{attrs:{src:t.publicFileUrl(t.videoSrc),type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:t.publicFileUrl(t.videoSrc),type:"video/ogg"}})])])]):r("ImagesSlideshow",{staticClass:"h-full",attrs:{items:t.images,"visible-amount":1},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,o=e.idx;return[r("figure",{staticClass:"flex px-4"},[r("img",{staticClass:"self-center",attrs:{src:t.publicFileUrl(n),alt:t.title+" "+(o+1),onContextMenu:"return false;"}})])]}}])})],1)])])])])}),[],!1,null,null,null).exports,S=r(33),I=r(333),M=Object(n.b)({components:{SlidesGallery:I.a,ProductItemDetailsSection:_,RelatedProductsGallery:C,PreviewModal:P},props:{productData:{type:Object,required:!0}},setup:function(t,e){var r=t.productData,c=e.root,l=Object(n.g)(0),d=Object(n.g)(!1),f=r.title[c.$i18n.locale],v={xs:2,sm:2,md:3,lg:4,xl:5,xxl:5,default:5},m=Object(n.a)((function(){return v[S.a.value]||v.default}));Object(o.h)();var x=r.images.map((function(img){return{pic:img,title:r.title}}));return{productTitle:f,isPreviewShown:d,isModalShown$:S.e,relatedProducts$:o.f,similarProdsAmount$:m,similarProducts$:o.i,selectedImgIdx:l,isVideo:!!r.video,prodSlidesData:x,publicFileUrl:w.a,togglePreviewModal:function(){return S.d.value&&!S.e.value?null:Object(S.j)()}}}}),A=(r(353),Object(x.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"mb-3 sm:flex"},[r("transition",{attrs:{name:"fade"}},[t.isModalShown$?r("PreviewModal",{attrs:{images:t.productData.images,title:t.productTitle,"video-src":t.productData.video},on:{toggle:t.togglePreviewModal}}):t._e()],1),t._v(" "),r("h1",{staticClass:"mb-3 text-3xl sm:hidden"},[t._v("\n      "+t._s(t.productTitle)+"\n    ")]),t._v(" "),r("section",{class:["flex flex-col-reverse md:flex-row justify-end sm:w-2/5",t.isVideo?"md:w-1/2":"md:w-3/5"]},[t.isVideo?t._e():r("div",{staticClass:"flex md:flex-col flex-row justify-start pt-3 md:pt-0 md:max-w-1/5"},t._l(t.productData.images,(function(img,e){return r("figure",{key:e,class:{"me-2 md:me-0 mt-0 md:mb-4 max-w-1/5 md:max-w-none transition-opacity duration-1000":!0,"cursor-pointer opacity-50":t.selectedImgIdx!==e},on:{click:function(r){t.selectedImgIdx=e}}},[r("img",{staticClass:"min-w-10",attrs:{src:t.publicFileUrl(img),alt:"",onContextMenu:"return false;"}})])})),0),t._v(" "),r("SlidesGallery",{class:{"md:flex-grow":!0,"md:ms-8":!t.isVideo},attrs:{images:t.productData.images,"slides-data":t.prodSlidesData,"selected-idx":t.selectedImgIdx},on:{clicked:t.togglePreviewModal}})],1),t._v(" "),r("ProductItemDetailsSection",{class:["sm:ms-8 sm:w-3/5",t.isVideo?"md:w-1/2":"md:w-2/5"],attrs:{"product-data":t.productData}},[r("template",{slot:"section-top"},[r("h1",{staticClass:"hidden text-3xl sm:block lg:text-4xl"},[t._v("\n          "+t._s(t.productTitle)+"\n        ")])]),t._v(" "),r("template",{slot:"related-prod"},[t.relatedProducts$.length>0?r("RelatedProductsGallery",{staticClass:"mt-8",attrs:{products:t.relatedProducts$,title:t.$t("products.related")}}):t._e()],1)],2)],1),t._v(" "),t.similarProducts$.length>0?r("RelatedProductsGallery",{staticClass:"xl:mt-8 mb-4",attrs:{products:t.similarProducts$,title:t.$t("products.similar"),"visible-amount":t.similarProdsAmount$||t.similarProducts$.length}}):t._e()],1)}),[],!1,null,"5c288d12",null).exports),D=r(140),E=Object(n.b)({name:"ChosenProductPage",components:{Breadcrumbs:c.a,SelectedProductPage:A},setup:function(t,e){var r=e.root,c=r.$route.params.id;Object(o.g)(c);var l=Object(n.k)(),title=l.title,meta=l.meta;return Object(n.m)(o.a,(function(t){if(t){var e=t.title[r.$i18n.locale];title.value=e,meta.value=Object(D.a)({title:e,description:t.shortDescription[r.$i18n.locale],image:t.thumbnail,url:r.$route.path})}})),{productData:o.a}},head:{}}),L=Object(x.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl:px-5"},[r("Breadcrumbs"),t._v(" "),t.productData?r("SelectedProductPage",{attrs:{"product-data":t.productData}}):t._e()],1)}),[],!1,null,null,null);e.default=L.exports}}]);