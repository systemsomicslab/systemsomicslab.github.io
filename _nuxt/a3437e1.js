(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{411:function(e,n,t){var r=t(416),c={space:"0zag513o0dj7",accessToken:"85Q0rhBP9nC80sP3go1CEQIRLUZYyVovYahwluoVMQk",host:"cdn.contentful.com"};e.exports={createClient:function(){return r.createClient(c)}}},415:function(e,n){},496:function(e,n,t){"use strict";t.r(n);var r=t(9),c=(t(47),t(411)),o=Object(c.createClient)(),l={name:"MemberPage",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.app.i18n,r={ja:"ja-JP",en:"en-US"},n.next=4,o.getEntries({content_type:"page","fields.title":"en"===t.locale?"Member":"メンバー",locale:r[t.locale],limit:1}).then((function(data){return{md:data.items[0].fields.body}})).catch((function(e){console.error(e)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.$t("member")}}},m=t(40),component=Object(m.a)(l,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"mainFrame member",attrs:{id:"sectionMain"}},[e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.$md.render(e.md))}})])}),[function(){var e=this._self._c;return e("div",{staticClass:"labelMenuIcon-publication"},[e("span",{staticClass:"iconAwesome-Menu"},[this._v("")])])}],!1,null,null,null);n.default=component.exports}}]);