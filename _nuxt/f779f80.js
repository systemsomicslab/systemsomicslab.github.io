(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{438:function(e,t,o){"use strict";o.r(t);o(28);var r={props:{category:{type:Object,required:!0}}},c=(o(443),o(47)),component=Object(c.a)(r,(function(){var e=this;return(0,e._self._c)("NuxtLink",{staticClass:"category",class:e.category.fields.id,attrs:{to:e.localePath("/category?categoryId=".concat(e.category.sys.id,"&page=1"))}},[e._v(e._s(e.category.fields.name))])}),[],!1,null,"df0bfcb2",null);t.default=component.exports},439:function(e,t,o){var content=o(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("75247979",content,!0,{sourceMap:!1})},443:function(e,t,o){"use strict";o(439)},444:function(e,t,o){var r=o(31)((function(i){return i[1]}));r.push([e.i,".category[data-v-df0bfcb2]{align-items:center;background-color:#fff;border-radius:15px;display:flex;font-size:13px;height:22px;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none}.category.event[data-v-df0bfcb2]{border:1px solid #eb5976;color:#eb5976}.category.news[data-v-df0bfcb2]{border:1px solid #57aade;color:#57aade}.category.achievement[data-v-df0bfcb2]{border:1px solid #5db53e;color:#5db53e}.category[data-v-df0bfcb2]:hover{color:#fff}.category:hover.event[data-v-df0bfcb2]{background-color:#eb5976}.category:hover.news[data-v-df0bfcb2]{background-color:#57aade}.category:hover.achievement[data-v-df0bfcb2]{background-color:#5db53e}.title[data-v-df0bfcb2]{margin-left:10px}",""]),r.locals={},e.exports=r},446:function(e,t,o){var content=o(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("1a7907a0",content,!0,{sourceMap:!1})},455:function(e,t,o){"use strict";o.r(t);o(19),o(67);var r={components:{CategoryTag:o(438).default},props:{news:{type:Object,required:!0},isLast:{type:Boolean,default:!1}},data:function(){return{}},methods:{formatDate:function(e){var t=new Date(e),o="Y.M.D";return o=(o=(o=o.replace(/Y/g,t.getFullYear())).replace(/M/g,t.getMonth()+1)).replace(/D/g,t.getDate())}}},c=(o(458),o(47)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("article",[e.news?t("NuxtLink",{staticClass:"single-news",class:{"single-news-last":e.isLast},attrs:{to:e.localePath({path:"/news",query:{id:e.news.sys.id}})}},[t("span",{staticClass:"date"},[e._v(e._s(e.formatDate(e.news.fields.publishDate)))]),e._v(" "),t("CategoryTag",{staticClass:"category",attrs:{category:e.news.fields.category}}),e._v(" "),t("span",{staticClass:"title"},[e._v(e._s(e.news.fields.title))])],1):e._e()],1)}),[],!1,null,"219a98c7",null);t.default=component.exports;installComponents(component,{CategoryTag:o(438).default})},458:function(e,t,o){"use strict";o(446)},459:function(e,t,o){var r=o(31)((function(i){return i[1]}));r.push([e.i,".single-news[data-v-219a98c7]{border-top:1px solid rgba(0,0,0,.1);color:#333;display:grid;grid-template-columns:100px 110px 1fr;padding:10px 0;-webkit-text-decoration:none;text-decoration:none}.single-news-last[data-v-219a98c7]{border-bottom:1px solid rgba(0,0,0,.1)}.single-news[data-v-219a98c7]:hover{background-color:rgba(11,95,165,.05)}.date[data-v-219a98c7]{align-items:center;display:flex;font-size:14px;height:24px;margin-left:10px}.category[data-v-219a98c7]{margin-top:2px;width:90%}.category.event[data-v-219a98c7]{border:1px solid #eb5976;color:#eb5976}.category.news[data-v-219a98c7]{border:1px solid #57aade;color:#57aade}.category.achievement[data-v-219a98c7]{border:1px solid #5db53e;color:#5db53e}.category[data-v-219a98c7]:hover{color:#fff}.category:hover.event[data-v-219a98c7]{background-color:#eb5976}.category:hover.news[data-v-219a98c7]{background-color:#57aade}.category:hover.achievement[data-v-219a98c7]{background-color:#5db53e}.title[data-v-219a98c7]{margin-left:10px}",""]),r.locals={},e.exports=r}}]);