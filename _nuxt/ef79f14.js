(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{437:function(t,n,e){var c=e(451),o={space:"0zag513o0dj7",accessToken:"v9StIEYBMld9tQ6twvJjzdnL2X7nP8K2hztZPevx97Y",host:"cdn.contentful.com"};t.exports={createClient:function(){return c.createClient(o)}}},448:function(t,n){},479:function(t,n,e){var content=e(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(32).default)("54cb6428",content,!0,{sourceMap:!1})},521:function(t,n,e){"use strict";var c=e(2),o=e(522);c({target:"String",proto:!0,forced:e(523)("link")},{link:function(t){return o(this,"a","href",t)}})},522:function(t,n,e){"use strict";var c=e(3),o=e(29),l=e(16),r=/"/g,v=c("".replace);t.exports=function(t,n,e,c){var _=l(o(t)),d="<"+n;return""!==e&&(d+=" "+e+'="'+v(l(c),r,"&quot;")+'"'),d+">"+_+"</"+n+">"}},523:function(t,n,e){"use strict";var c=e(4);t.exports=function(t){return c((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},524:function(t,n,e){t.exports=e.p+"img/imagePhotoHome2.0fb080f.jpg"},525:function(t,n,e){t.exports=e.p+"img/iconResearch.71e9542.png"},526:function(t,n,e){t.exports=e.p+"img/imagePhotoMsFinder.b5cdca1.jpg"},527:function(t,n,e){t.exports=e.p+"img/imagePhotoMsdial.d6e3935.jpg"},528:function(t,n,e){t.exports=e.p+"img/iconMsdial.eb2facc.png"},529:function(t,n,e){t.exports=e.p+"img/iconNews.78fb844.png"},530:function(t,n,e){t.exports=e.p+"img/imagePhotoMrmprobs.c958be7.jpg"},531:function(t,n,e){t.exports=e.p+"img/htsugawa.b3d3736.png"},532:function(t,n,e){"use strict";e(479)},533:function(t,n,e){var c=e(31)((function(i){return i[1]}));c.push([t.i,"img.profileImage[data-v-35c82dbe]{height:auto;width:200px}",""]),c.locals={},t.exports=c},546:function(t,n,e){"use strict";e.r(n);e(22),e(39),e(28),e(521);var c=[function(){var t=this._self._c;return t("div",{staticClass:"labelMenuIcon"},[t("img",{staticClass:"imgIcon-Research",attrs:{src:e(525)}})])},function(){var t=this._self._c;return t("div",{staticClass:"col span_16"},[t("div",{staticClass:"boxMenu"},[t("div",{staticClass:"boxImage-right"},[t("img",{staticClass:"imgScreen-right",attrs:{src:e(526)}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"col span_16"},[t("div",{staticClass:"boxMenu"},[t("div",{staticClass:"boxImage-left"},[t("img",{staticClass:"imgScreen-left",attrs:{src:e(527)}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"labelMenuIcon"},[t("img",{staticClass:"imgIcon-Msdial",attrs:{src:e(528)}})])},function(){var t=this._self._c;return t("div",{staticClass:"labelMenuIcon"},[t("img",{staticClass:"imgIcon-News",attrs:{src:e(529)}})])},function(){var t=this._self._c;return t("div",{staticClass:"col span_16"},[t("div",{staticClass:"boxMenu"},[t("div",{staticClass:"boxImage-right"},[t("img",{staticClass:"imgScreen-right",attrs:{src:e(530)}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"labelMenuIcon"},[t("span",{staticClass:"iconAwesome-Menu"},[this._v("")])])},function(){var t=this._self._c;return t("div",{staticClass:"labelContact"},[t("img",{staticClass:"profileImage",attrs:{src:e(531)}})])}],o=e(8),l=(e(51),e(437)),r=Object(l.createClient)(),v={name:"TopPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app.i18n,c={ja:"ja-JP",en:"en-US"},n.next=4,r.getEntries({content_type:"top",locale:c[e.locale],limit:1}).then((function(data){return{contents:data.items[0].fields.contents.contents,contact:data.items[0].fields.contact}})).catch((function(t){console.error(t)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.$t("top")}}},_=(e(532),e(47)),component=Object(_.a)(v,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mainFrame",attrs:{id:"sectionMain"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col span_24"},[n("div",{staticClass:"boxMainLogo"},[n("img",{staticClass:"imgLogoScreen",attrs:{src:e(524)}}),t._v(" "),n("div",{staticClass:"labelLogo"},[n("span",{staticClass:"iconAwesome"},[t._v("")]),t._v(t._s(t.$t("systems_biology"))+"\n          ")]),t._v(" "),n("div",{staticClass:"labelPhrase-jpn"},[t._v("\n            "+t._s(t.$t("top_description"))+"\n          ")])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col span_24"},[n("div",[n("div",{staticClass:"labelLine-jpn"},[t._v("\n            "+t._s(t.$t("top_sub_text"))+"\n          ")])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row",attrs:{id:"contensMsDial"}},[n("div",{staticClass:"col span_8"},[n("div",{staticClass:"boxMenu"},[n("div",{staticClass:"boxOrverwidth-left colorMsFinder"}),t._v(" "),n("div",{staticClass:"boxContents-left"},[n("NuxtLink",{attrs:{to:t.contents[0].link}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"labelMenuTitle-Overview"},[t._v(t._s(t.contents[0].title))]),t._v(" "),n("div",{staticClass:"labelMenuItem-Overview-jpn"},[t._v("\n              "+t._s(t.contents[0].description)+"\n            ")]),t._v(" "),n("div",{staticClass:"labelButton"},[t._v("More")])],1)])]),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row",attrs:{id:"contensMsFinder"}},[t._m(2),t._v(" "),n("div",{staticClass:"col span_8"},[n("div",{staticClass:"boxMenu"},[n("div",{staticClass:"boxOrverwidth-right colorMsDial"}),t._v(" "),n("div",{staticClass:"boxContents-right"},[n("a",{attrs:{href:t.contents[1].link,target:"_blank",rel:"noopener"}}),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"labelMenuTitle-Overview"},[t._v(t._s(t.contents[1].title))]),t._v(" "),n("div",{staticClass:"labelMenuItem-Overview-jpn"},[t._v("\n              "+t._s(t.contents[1].description)+"\n            ")]),t._v(" "),n("div",{staticClass:"labelButton"},[t._v("More")])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row",attrs:{id:"contensMrmprobs"}},[n("div",{staticClass:"col span_8"},[n("div",{staticClass:"boxMenu"},[n("div",{staticClass:"boxOrverwidth-left colorMrmprobs"}),t._v(" "),n("div",{staticClass:"boxContents-left"},[n("NuxtLink",{attrs:{to:t.contents[2].link}}),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"labelMenuTitle-Overview"},[t._v(t._s(t.contents[2].title))]),t._v(" "),n("div",{staticClass:"labelMenuItem-Overview-jpn"},[t._v("\n              "+t._s(t.contents[2].description)+"\n            ")]),t._v(" "),n("div",{staticClass:"labelButton"},[t._v("More")])],1)])]),t._v(" "),t._m(5)])]),t._v(" "),n("div",{staticClass:"container",attrs:{id:"contact"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col span_24"},[n("div",{staticClass:"boxContact"},[t._m(6),t._v(" "),n("div",{staticClass:"labelMenuTitle"},[t._v("Contact")]),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"labelContact"},[t._v(t._s(t.contact.name))]),t._v(" "),n("div",{staticClass:"labelContact"},[t._v("\n            "+t._s(t.contact.affiliation)+"\n            "),n("span",{staticClass:"iconAwesome"},[t._v("")]),t._v("\n            "+t._s(t.contact.address)+"\n          ")]),t._v(" "),n("div",{staticClass:"labelContact"},[n("span",{staticClass:"iconAwesome"},[t._v("")]),t._v(t._s(t.contact.mail)+"\n          ")]),t._v(" "),n("div",{staticClass:"labelContact"},[n("span",{staticClass:"iconAwesome"},[t._v("")]),t._v(t._s(t.contact.tel)+"\n          ")])])])])])])}),c,!1,null,"35c82dbe",null);n.default=component.exports}}]);