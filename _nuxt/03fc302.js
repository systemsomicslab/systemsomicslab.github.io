(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{431:function(t,e,n){var c=n(445),r={space:"0zag513o0dj7",accessToken:"v9StIEYBMld9tQ6twvJjzdnL2X7nP8K2hztZPevx97Y",host:"cdn.contentful.com"};t.exports={createClient:function(){return c.createClient(r)}}},442:function(t,e){},475:function(t,e,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("b6e1d7c6",content,!0,{sourceMap:!1})},533:function(t,e,n){"use strict";n(475)},534:function(t,e,n){var c=n(30)((function(i){return i[1]}));c.push([t.i,".lecture ul li{list-style:disc none outside;list-style:initial;margin-bottom:1em}",""]),c.locals={},t.exports=c},544:function(t,e,n){"use strict";n.r(e);var c=n(8),r=(n(50),n(431)),o=Object(r.createClient)(),l={name:"LecturePage",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app.i18n,c={ja:"ja-JP",en:"en-US"},e.next=4,o.getEntries({content_type:"page","fields.title":"en"===n.locale?"Lecture":"レクチャー",locale:c[n.locale],limit:1}).then((function(data){return{md:data.items[0].fields.body}})).catch((function(t){console.error(t)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$t("lecture")}}},d=(n(533),n(45)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mainFrame lecture",attrs:{id:"sectionMain"}},[t._m(0),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.$md.render(t.md))}})])}),[function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col span_24"},[t("div",{staticClass:"boxPublications"},[t("div",{staticClass:"labelMenuIcon-publication"},[t("span",{staticClass:"iconAwesome-Menu"},[this._v("")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);