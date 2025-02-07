/*! For license information please see chunk.05588ae8664098137497.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{218:function(e,t,i){var s=i(222);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(154).default)("48117795",s,!0,{})},220:function(e,t,i){"use strict";var s={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:i,opacity:s}=this;return{top:e,transition:`opacity ${i}ms linear`,opacity:s,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},n=(i(221),i(46)),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);t.a=a.exports},221:function(e,t,i){"use strict";i(218)},222:function(e,t,i){(t=i(153)(!0)).push([e.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),e.exports=t},226:function(e,t,i){"use strict";t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)t+=e.offsetTop,e=e.offsetParent;return window.scroll({top:t,behavior:"smooth"})}},232:function(e,t,i){var s=i(242);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(154).default)("5055a041",s,!0,{})},236:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(27);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var a={selector:"vue-portal-target-".concat(((e=21)=>{let t="",i=e;for(;i--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t})())},r="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":n(document)),o=s.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var t=this.updatedNodes&&this.updatedNodes();return t?1!==t.length||t[0].text?e(this.tag||"DIV",t):t:e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),c=s.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(a.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var t=this.$scopedSlots&&this.$scopedSlots.default();return t?t.length<2&&!t[0].text?t:e(this.tag,t):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick((function(){e.disabled||e.slotFn===e.$scopedSlots.default||(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(r)return document.querySelector(this.selector)},insertTargetEl:function(){if(r){var e=document.querySelector("body"),t=document.createElement(this.tag);t.id=this.selector.substring(1),e.appendChild(t)}},mount:function(){if(r){var e=this.getTargetEl(),t=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),this.container=new o({el:t,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(i.name||"portal",c),i.defaultSelector&&(t=i.defaultSelector,a.selector=t)}"undefined"!=typeof window&&window.Vue&&window.Vue===s.a&&s.a.use(l)},241:function(e,t,i){"use strict";i(232)},242:function(e,t,i){(t=i(153)(!0)).push([e.i,'.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .i-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .i-chevron-up,.search-engine__filter button[aria-expanded=true] .i-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .i-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}',"",{version:3,sources:["SearchEngine.scss"],names:[],mappings:"AAAA,eAAe,iBAAiB,CAAC,oBAAoB,uBAAuB,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,uBAAuB,CAAC,wBAAwB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,wBAAwB,YAAY,CAAC,+BAA+B,sBAAsB,CAAC,2BAA2B,CAAC,sBAAsB,iBAAiB,CAAC,wBAAwB,sBAAsB,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,WAAW,CAAC,OAAO,CAAC,aAAa,CAAC,sBAAsB,eAAe,CAAC,WAAW,CAAC,cAAc,CAAC,cAAc,CAAC,OAAO,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,iCAAiC,eAAe,CAAC,2BAA2B,4BAA4B,CAAC,yBAAyB,CAAC,WAAW,CAAC,cAAc,CAAC,OAAO,CAAC,gBAAgB,CAAC,WAAW,CAAC,2CAA2C,iBAAiB,CAAC,qCAAqC,UAAU,CAAC,yCAAyC,0BAA0B,CAAC,kCAAkC,6BAA6B,CAAC,8BAA8B,sBAAsB,CAAC,6BAA6B,CAAC,6BAA6B,CAAC,cAAc,CAAC,cAAc,CAAC,kEAAkE,iBAAiB,CAAC,0BAA0B,CAAC,4BAA4B,CAAC,UAAU,CAAC,uBAAuB,CAAC,8GAA8G,YAAY,CAAC,gEAAgE,eAAe,CAAC,8EAA8E,SAAS,CAAC,oCAAoC,eAAe,CAAC,uBAAuB,0BAA0B,CAAC,6BAA6B,iBAAiB,CAAC,yBAAyB,2BAA2B,CAAC,+BAA+B,iBAAiB,CAAC,sCAAsC,aAAa,CAAC,qBAAqB,8BAA8B,CAAC,4BAA4B,6BAA6B,CAAC,2BAA2B,6BAA6B,CAAC,8CAA8C,uBAAuB,CAAC,uBAAuB,yBAAyB,CAAC,qBAAqB,6BAA6B",file:"SearchEngine.scss",sourcesContent:['.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .i-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .i-chevron-up,.search-engine__filter button[aria-expanded=true] .i-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .i-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}']}]),e.exports=t},246:function(e,t,i){"use strict";var s=i(224),n=(i(241),i(46)),a=Object(n.a)(s.a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"search-engine"},[i("a-backdrop",{attrs:{"is-visible":e.isAsideVisible},on:{"update:isVisible":function(t){e.isAsideVisible=t},"update:is-visible":function(t){e.isAsideVisible=t}}}),i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[i("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"search-engine__aside card shadow"},[e._t("filters",(function(){return[i("header",{staticClass:"card-header"},[e._v(" "+e._s(e.i19refineSearch)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19closeFilters},on:{click:e.toggleFilters}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),i("div",{key:e.searchFilterId,staticClass:"card-body"},[e.hasSetPriceRange||e.priceOptions.length?i("div",{staticClass:"search-engine__filter search-engine__filter--price"},[i("h5",[e._v(e._s(e.i19price))]),e.hasSetPriceRange?i("a",{staticClass:"btn btn-link btn-sm mb-2",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setPriceRange()}}},[i("i",{staticClass:"i-arrow-left mr-1"}),e._v(" "+e._s(e.i19all)+" ")]):e._e(),e._l(e.priceOptions,(function(t,s){var n=t.label,a=t.min,r=t.max;return i("div",{key:"Price-"+s,staticClass:"search-engine__option custom-control custom-radio"},[i("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"price-option",id:"Price-"+s},on:{click:function(t){return e.setPriceRange(a,r)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"Price-"+s}},[e._v(" "+e._s(n)+" ")])])})),e.priceRange.max-e.priceRange.min>2?i("div",{staticClass:"search-engine__option-range input-group input-group-sm mt-2"},[i("input",{ref:"inputMinPrice",staticClass:"form-control",attrs:{type:"text","aria-describedby":"search-engine-price-range","aria-label":"Min "+e.i19price,placeholder:"Min: "+Math.floor(e.priceRange.min)}}),i("input",{ref:"inputMaxPrice",staticClass:"form-control",attrs:{type:"text","aria-label":"Max","aria-describedby":"search-engine-price-range","aria-label":"Max "+e.i19price,placeholder:"Max: "+Math.ceil(e.priceRange.max)}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"search-engine-price-range"},on:{click:function(t){return e.handlePriceInputs()}}},[i("i",{staticClass:"i-chevron-right"})])])]):e._e()],2):e._e(),e._l(e.filters,(function(t,s){var n=t.filter,a=t.options,r=t.isSpec;return a.length?i("div",{key:"filters-"+n,staticClass:"search-engine__filter",class:"search-engine__filter--"+n},[e._o([i("button",{staticClass:"btn text-truncate",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-"+n,"aria-expanded":s<5?"true":"false","aria-controls":"collapse-"+n}},[i("i",{staticClass:"i-chevron-down"}),i("i",{staticClass:"i-chevron-up"}),e._v(" "+e._s(e.getFilterLabel(n))+" ")]),i("div",{staticClass:"collapse",class:s<5?"show":null,attrs:{id:"collapse-"+n}},e._l(a,(function(t,s){return i("div",{key:n+"-"+s,staticClass:"search-engine__option custom-control custom-checkbox"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:n+"-"+s},domProps:{checked:e.selectedOptions[n].indexOf(t.key)>-1},on:{change:function(i){return e.setFilterOption(n,t.key,i.target.checked)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:n+"-"+s}},[e._v(" "+e._s(t.key)+" "),r?e._e():i("small",[e._v("("+e._s(t.doc_count)+")")])])])})),0)],0,"filters-"+n)],2):e._e()}))],2),i("footer",{staticClass:"card-footer"},[i("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[i("span",{staticClass:"mr-1"},[i("i",{staticClass:"i-trash"})]),e._v(" "+e._s(e.i19clearFilters)+" ")])])]}))],2)]),i("transition",{attrs:{"enter-active-class":"animated fadeInRight slower","leave-active-class":"animated fadeOutRight"}},[e.isNavVisible&&e.hasFilters?i("button",{staticClass:"search-engine__aside-open btn btn-secondary",attrs:{type:"button","aria-label":e.i19filterResults,disabled:e.isSearching},on:{click:function(t){return e.toggleFilters(!0)}}},[e.isSearching?i("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("span",[i("span",{staticClass:"d-none d-md-inline"},[i("i",{staticClass:"i-search"})]),i("i",{staticClass:"i-filter"})])]):e._e()]),i("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast position-absolute"}},[e.isNavVisible?i("div",{staticClass:"search-engine__nav"},[i("div",{staticClass:"container"},[e._t("nav",(function(){return[i("div",{staticClass:"search-engine__count"},[i("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.i19itemsFound)+" "),e.isSearching?i("div",{staticClass:"search-engine__spinner spinner-grow",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()]),e.isFilterable?i("div",{staticClass:"search-engine__toggles"},[e.hasFilters?i("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.toggleFilters(!0)}}},[i("i",{staticClass:"i-filter mr-1"}),i("span",{staticClass:"d-none d-md-inline-block"},[e._v(" "+e._s(e.i19filterResults)+" ")]),i("span",{staticClass:"d-md-none"},[e._v(" "+e._s(e.i19filter)+" ")])]):e._e(),i("div",{staticClass:"dropdown"},[i("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"search-engine-sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"i-sort mr-1"}),e._v(" "+e._s(e.i19sort)+" ")]),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"search-engine-sort"}},e._l(e.sortOptions,(function(t,s){var n=t.value,a=t.label;return i("a",{key:"sort-"+s,staticClass:"dropdown-item",class:"search-engine__sort--"+n,attrs:{href:"#",active:e.selectedSortOption===n},on:{click:function(t){return t.preventDefault(),e.setSortOrder(n)}}},[e._v(" "+e._s(a)+" ")])})),0)])]):e._e()]}),null,{totalSearchResults:e.totalSearchResults,toggleFilters:e.toggleFilters})],2)]):e._e()]),i("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[e.isResultsVisible?i("div",{staticClass:"search-engine__results fade",style:{opacity:e.isSearching&&!e.isLoadingMore?.4:1}},[i("div",{staticClass:"container"},[i("div",{staticClass:"search-engine__info px-lg-4"},[e.term?[e.hasEmptyResult?i("div",{staticClass:"search-engine__no-results"},[i("div",{staticClass:"lead mb-2"},[e.suggestedTerm?i("span",[e._v(" "+e._s(e.i19didYouMean)+" "),i("a",{attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.$emit("update:term",e.suggestedTerm)}}}),e._v(" ? ")]):e._e(),e._v(" "+e._s(e.i19noResultsFor)+" "),i("em",[e._v(e._s(e.term))])]),e.popularItems.length?i("h4",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e()]):i("div",{staticClass:"search-engine__terms"},[e.noResultsTerm?i("span",{staticClass:"d-none d-lg-inline"},[e._v(" "+e._s(e.i19noResultsFor)+" "),i("s",[e._v(e._s(e.noResultsTerm))]),e._v(". ")]):e._e(),i("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19searchingFor)+": ")]),i("h1",[e._v(e._s(e.term))])])]:e.hasEmptyResult&&e.popularItems.length?i("h3",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e(),i("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[e.hasSelectedOptions&&e.isFilterable?i("div",[i("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[i("i",{staticClass:"i-trash mr-1"}),e._v(" "+e._s(e.i19clearFilters)+" ")]),e._l(e.selectedOptions,(function(t,s){return e._l(t,(function(t){return i("button",{staticClass:"search-engine__selected btn btn-sm btn-light",attrs:{type:"button"},on:{click:function(i){return e.setFilterOption(s,t,!1)}}},[i("i",{staticClass:"i-times mr-1"}),e._v(" "+e._s(t)+" "),i("small",[e._v(e._s(e.getFilterLabel(s)))])])}))}))],2):e._e()])],2),e.canShowItems?i("article",{staticClass:"search-engine__retail"},[i("div",{staticClass:"row"},e._l(e.suggestedItems,(function(t,s){return i("div",{key:t._id,ref:s===e.pageAnchorIndex?"pageAnchor":null,refInFor:!0,staticClass:"col-6 col-md-4 col-lg-3"},[e._t("product-card",(function(){return[i("product-card",e._b({staticClass:"search-engine__item",attrs:{product:t}},"product-card",e.productCardProps,!1))]}),null,{product:t})],2)})),0)]):e._e(),i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.hasNetworkError?i("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[i("i",{staticClass:"i-wifi mr-2"}),e._v(" "+e._s(e.i19searchOfflineErrorMsg)+" "),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.fetchItems.apply(null,arguments)}}},[e._v(" "+e._s(e.i19searchAgain)+" ")])]):e._e()])],1)]):e._e()]),i("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[!e.hasSearched||e.isLoadingMore?e._t("default"):e._e()],2),i(e.loadMoreSelector?"portal":"div",{tag:"component",attrs:{selector:e.loadMoreSelector}},[e.resultItems.length<e.totalSearchResults?i("div",{key:e.lastRequestId,staticStyle:{width:"100%","margin-top":"20px",height:"5px"},attrs:{id:"search-engine-load-more"}}):e._e()])],1)}),[],!1,null,null,null);t.a=a.exports},417:function(e,t,i){"use strict";i.r(t);i(6),i(97);var s=i(2),n=i(27),a=i(246);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"search-engine",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search-pagination";const o=document.getElementById(t);if(o){const c=document.getElementById(`${t}-dock`);let l;const d=window.storefront&&window.storefront.getScopedSlots,{dataset:u}=o,p=new URLSearchParams(window.location.search),h={...e.props,term:p.get("term"),brands:p.getAll("brands[]"),categories:p.getAll("categories[]"),defaultFilters:p.getAll("filters[]").reduce(((e,t)=>{const[i,s]=t.split(":");return e[i]||(e[i]=[]),e[i].push(s),e}),{}),defaultSort:u.sort||p.get("sort")};["brands","categories"].forEach((e=>{if(u[e]){try{h[e]=JSON.parse(u[e])}catch(e){return void console.error(e)}h[e]&&h[e].length<2&&(h[`isFixed${e.charAt(0).toUpperCase()}${e.slice(1)}`]=!0),h.hasPopularItems=!1}}));const{resource:A}=window.document.body.dataset;switch(A){case"brands":case"categories":if(!h[A]||!h[A].length)return void console.error(new Error(`Skipping SearchEngine with empty '${A}' filter`))}const g=document.title,_=()=>{const e=p.get("term");let t=e?`${e} ~ ${g}`:g;const i=p.get("page");if(i>1&&(t+=` (${i}) `),window.history){const e=p.toString(),{pathname:i}=window.location;window.history.pushState({pathname:i,query:e},t,i+(e?`?${e}`:""))}document.title=t};_();const f=new n.a({data:{countRequests:0,canShowItems:!c,term:h.term,page:parseInt(p.get("page"),10)||1,totalItems:0},render(s){const A=this;return e.pagination&&i.e(39).then(i.bind(null,261)).then((e=>{new n.a({render:t=>t(e.default,{props:{totalItems:A.totalItems,page:A.page},on:{"update:page"(e){A.page=e,p.set("page",e),_(),window.scroll({top:0,behavior:"smooth"})}}})}).$mount(document.getElementById(r))})),s(a.a,{attrs:{id:c?null:t},props:{...h,term:A.term,page:A.page,canLoadMore:!e.pagination&&!u.disableLoadMore,canShowItems:A.canShowItems,loadMoreSelector:c?"#search-engine-load":null,isFilterable:!u.disableFilters},on:{"update:term"(e){A.term=e,p.set("term",e),_()},fetch(e){let{ecomSearch:t,fetching:i,isPopularItems:s}=e;i.then((e=>{if(s||(A.totalItems=t.getTotalCount()),c){A.countRequests++;const t=()=>{A.canShowItems=!0;const e=o.querySelector("#search-engine-snap"),t=o.querySelector(".search-engine__results");t.style.minHeight=e.offsetHeight+"px",e.remove(),setTimeout((()=>{t.style.minHeight=null}),600)};if(!A.canShowItems)if(A.countRequests>1)t();else if(e&&e.hits)if(l&&l.length===e.hits.hits.length){let i=!0;const{hits:s}=e.hits;for(let e=0;e<s.length;e++)if(!l.find(`[data-product-id="${s[e]._id}"]`).length){i=!1;break}i||t()}else t()}}))}},scopedSlots:"function"==typeof d?d(o,s,!c):void 0})}});if(c){Object(s.$)(o).append(Object(s.$)("<div>",{id:"search-engine-load"}));const e=()=>f.$mount(c);if(l=Object(s.$)("#search-engine-snap .product-item"),l.length){const t=new window.MutationObserver((()=>{clearTimeout(i),t.disconnect(),setTimeout(e,150)}));t.observe(l[0],{childList:!0});const i=setTimeout((()=>{t.disconnect(),e()}),3e3)}else e()}else f.$mount(o)}}}}]);
//# sourceMappingURL=chunk.05588ae8664098137497.js.map