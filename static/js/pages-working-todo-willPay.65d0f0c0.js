(self["webpackChunkuni_app_mall_template"]=self["webpackChunkuni_app_mall_template"]||[]).push([[494],{78022:function(t,e,n){var r=n(91161);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=n(56).Z;a("50cde0c2",r,!0,{sourceMap:!1,shadowMode:!1})},66041:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r,a={thrErrorPage:n(13174).Z,uniListItem:n(70371).Z},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orderList"},[t.loadError.status?n("v-uni-view",[n("thr-error-page",{attrs:{icon:"/static/error/notfind.png",title:"空空如也"}})],1):t._e(),t._l(t.orders,(function(e,r){return n("v-uni-view",{key:r,staticClass:"content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto_orderPage(e.id)}}},[n("uni-list-item",{attrs:{title:e.user.username,rightText:"查看详情","show-arrow":"true"}}),n("v-uni-view",{staticClass:"column info"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-text",[t._v("单号")]),n("v-uni-text",[t._v(t._s(e.id))])],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-text",[t._v("项目名称")]),n("v-uni-text",[t._v(t._s(e.project.projectName))])],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-text",[t._v("创建时间")]),n("v-uni-text",[t._v(t._s(e.createdAt))])],1)],1)],1)}))],2)},i=[],o=n(66407),u=n(4587),l={name:"orderList",components:{},props:{type:{type:String,default:""}},mounted:function(){this.update()},data:function(){return{loadError:{status:!1},response:{},orders:null}},methods:{update:function(){var t=this;return(0,u.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getOrderList({status:t.type});case 2:n=e.sent,null==n.data?t.loadError.status=!0:(t.loadError.status=!1,t.orders=n.data);case 4:case"end":return e.stop()}}),e)})))()},goto_orderPage:function(t){this.$api.goto("/pages/index/order_status?id="+t)}},watch:{}},c=l,d=(n(78022),n(69453)),p=(0,d.Z)(c,s,i,!1,null,"f50679aa",null,!1,a,r),f=p.exports},48179:function(t,e,n){"use strict";var r;n.r(e),n.d(e,{default:function(){return f}});var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"willPay"},[n("v-uni-view",[n("order-list",{attrs:{type:"willPay"}})],1),n("v-uni-view",[n("project-list",{attrs:{type:"like"}})],1)],1)},i=[],o=n(65119),u=n(66041),l={name:"allOrders",components:{projectList:o["default"],orderList:u["default"]},data:function(){return{}},methods:{update:function(){console.log("Hello orders of all!")}},onLoad:function(){this.update()}},c=l,d=n(69453),p=(0,d.Z)(c,s,i,!1,null,"774f5aff",null,!1,r,a),f=p.exports},91161:function(t,e,n){"use strict";n.r(e);var r=n(8081),a=n.n(r),s=n(23645),i=n.n(s),o=i()(a());o.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-f50679aa]{padding:%?30?% %?20?%;border-bottom:%?20?% solid #eaeaea}.info[data-v-f50679aa]{margin:0 %?20?%;color:#4f4f4f}',""]),e["default"]=o}}]);