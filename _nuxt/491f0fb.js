(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{431:function(e,t,n){var r=n(445),c={space:"0zag513o0dj7",accessToken:"v9StIEYBMld9tQ6twvJjzdnL2X7nP8K2hztZPevx97Y",host:"cdn.contentful.com"};e.exports={createClient:function(){return r.createClient(c)}}},442:function(e,t){},545:function(e,t,n){"use strict";n.r(t);var r=n(8),c=(n(50),n(431)),o=Object(c.createClient)(),l={name:"MemberPage",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app.i18n,r={ja:"ja-JP",en:"en-US"},t.next=4,o.getEntries({content_type:"page","fields.title":"en"===n.locale?"Member":"メンバー",locale:r[n.locale],limit:1}).then((function(data){return{md:data.items[0].fields.body}})).catch((function(e){console.error(e)}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$t("member")}}},d=n(45),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mainFrame member",attrs:{id:"sectionMain"}},[e._m(0),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.$md.render(e.md))}})])}),[function(){var e=this._self._c;return e("div",{staticClass:"labelMenuIcon-publication"},[e("span",{staticClass:"iconAwesome-Menu"},[this._v("")])])}],!1,null,null,null);t.default=component.exports}}]);