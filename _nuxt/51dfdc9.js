(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{429:function(e,t,n){var c=n(434),r={space:"",accessToken:"",host:"cdn.contentful.com"};e.exports={createClient:function(){return c.createClient(r)}}},433:function(e,t){},515:function(e,t,n){"use strict";n.r(t);var c=n(8),r=(n(48),n(429)),o=Object(r.createClient)(),l={name:"NewsPage",asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app.i18n,c={ja:"ja-JP",en:"en-US"},t.next=4,o.getEntries({content_type:"page","fields.title":"en"===n.locale?"News":"ニュース",locale:c[n.locale],limit:1}).then((function(data){return{md:data.items[0].fields.body}})).catch((function(e){console.error(e)}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$t("news")}}},d=n(43),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mainFrame news",attrs:{id:"sectionMain"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col span_24"},[t("div",{staticClass:"boxPublications"},[e._m(0),e._v(" "),t("div",{staticClass:"labelMenuTitle"},[e._v("News & Events")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.$md.render(e.md))}})])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"labelMenuIcon-publication"},[e("span",{staticClass:"iconAwesome-Menu"},[this._v("")])])}],!1,null,null,null);t.default=component.exports}}]);