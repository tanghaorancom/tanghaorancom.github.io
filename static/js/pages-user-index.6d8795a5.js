(self["webpackChunkuni_app_mall_template"]=self["webpackChunkuni_app_mall_template"]||[]).push([[905],{8312:function(t,i,n){var o=n(3897);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var e=n(56).Z;e("3b4e061f",o,!0,{sourceMap:!1,shadowMode:!1})},6106:function(t,i,n){var o=n(8349);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var e=n(56).Z;e("60c0f0dc",o,!0,{sourceMap:!1,shadowMode:!1})},5560:function(t,i,n){"use strict";n.d(i,{Z:function(){return d}});var o,e={uniIcons:n(4925).Z},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?n("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop},style:t.nvueBottom},[n("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?n("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(i,o){return n("v-uni-view",{key:o,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onItemClick(o,i)}}},[n("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:i.active?i.selectedIconPath:i.iconPath,mode:"aspectFit"}}),n("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:i.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(i.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?n("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),n("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor,bottom:t.nvueBottom},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[n("uni-icons",{staticClass:"fab-circle-icon",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0},attrs:{type:t.styles.icon,color:t.styles.iconColor,size:"32"}})],1)],1)},r=[],s="other",c={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===s,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",icon:"plusempty"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")},nvueBottom:function(){uni.getSystemInfoSync().windowBottom;return 30}},watch:{pattern:{handler:function(t,i){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,i){this.isShow&&this.$emit("trigger",{index:t,item:i})},getPosition:function(t,i,n){return 0===t?this.horizontal===i&&this.vertical===n:1===t?this.direction===i&&this.vertical===n:2===t?this.direction===i&&this.horizontal===n:this.isShow&&this.direction===i?this.contentWidth:this.contentWidthMin}}},l=c,f=(n(6106),n(9453)),u=(0,f.Z)(l,a,r,!1,null,"3f2a463a",null,!1,e,o),d=u.exports},9962:function(t,i,n){"use strict";n.r(i),n.d(i,{default:function(){return d}});var o,e={uniFab:n(5560).Z},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"top_bg"},[n("v-uni-view",{staticClass:"pic"},[n("img",{staticClass:"img",attrs:{src:"static\\userHead\\user.jpg"}})]),n("v-uni-view",{staticClass:"user_info"},[n("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goto_userInformation_page.apply(void 0,arguments)}}},[t._v("未登录")])],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$api.goto("/pages/user/orders/index")}}},[n("v-uni-image",{attrs:{src:t.icons.i1,mode:"scaleToFill"}}),n("v-uni-text",[t._v("我的接单")])],1),n("v-uni-view",{staticClass:"list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$api.goto("/pages/working/publish")}}},[n("v-uni-image",{attrs:{src:t.icons.i2,mode:"scaleToFill"}}),n("v-uni-text",[t._v("我的发布")])],1),n("v-uni-view",{staticClass:"list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$api.goto("/pages/working/orders/index")}}},[n("v-uni-image",{attrs:{src:t.icons.i3,mode:"scaleToFill"}}),n("v-uni-text",[t._v("设置")])],1)],1),n("v-uni-view",[n("projects-index")],1),n("uni-fab",{ref:"fab",attrs:{horizontal:"right",vertical:"bottom",direction:"horizontal"},on:{fabClick:function(i){arguments[0]=i=t.$handleEvent(i),t.$api.goto("/pages/working/project_publishing")}}})],1)},r=[],s=n(7807),c={components:{projectsIndex:s["default"]},data:function(){return{icons:{i1:"/static/icons/order.png",i2:"/static/icons/publish.png",i3:"/static/icons/settings.png"}}},methods:{goto_userInformation_page:function(){this.$api.goto("/pages/user/login")}}},l=c,f=(n(8312),n(9453)),u=(0,f.Z)(l,a,r,!1,null,"db007152",null,!1,e,o),d=u.exports},3897:function(t,i,n){"use strict";n.r(i);var o=n(8081),e=n.n(o),a=n(3645),r=n.n(a),s=r()(e());s.push([t.id,".top_bg[data-v-db007152]{height:%?350?%;background-color:#ff0909;display:flex;align-items:center}.pic[data-v-db007152]{height:%?150?%;width:%?150?%;background:#fff;margin:0 %?50?%;border-radius:50%;line-height:%?150?%;text-align:center;overflow:hidden}.img[data-v-db007152]{width:100%;height:100%}.user_info[data-v-db007152]{flex:1;color:#fff}.list-item[data-v-db007152]{padding:%?30?% %?50?%;display:flex;align-items:center;border-bottom-style:solid;border-bottom-color:#f8f0f0;border-bottom-width:%?10?%}.list-item uni-image[data-v-db007152]{height:%?50?%;width:%?50?%}.list-item uni-text[data-v-db007152]{font-size:%?30?%;margin-left:%?30?%}",""]),i["default"]=s},8349:function(t,i,n){"use strict";n.r(i);var o=n(8081),e=n.n(o),a=n(3645),r=n.n(a),s=r()(e());s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-fab[data-v-3f2a463a]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10;border-radius:45px;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-cursor-point[data-v-3f2a463a]{cursor:pointer}.uni-fab--active[data-v-3f2a463a]{opacity:1}.uni-fab--leftBottom[data-v-3f2a463a]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab--leftTop[data-v-3f2a463a]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab--rightBottom[data-v-3f2a463a]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab--rightTop[data-v-3f2a463a]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle[data-v-3f2a463a]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:45px;z-index:11}.uni-fab__circle--leftBottom[data-v-3f2a463a]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-3f2a463a]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-3f2a463a]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-3f2a463a]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle--left[data-v-3f2a463a]{left:0}.uni-fab__circle--right[data-v-3f2a463a]{right:0}.uni-fab__circle--top[data-v-3f2a463a]{top:0}.uni-fab__circle--bottom[data-v-3f2a463a]{bottom:0}.uni-fab__plus[data-v-3f2a463a]{font-weight:700}.fab-circle-icon[data-v-3f2a463a]{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.uni-fab__plus--active[data-v-3f2a463a]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-3f2a463a]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-3f2a463a]{border-width:0;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-fab__content--left[data-v-3f2a463a]{justify-content:flex-start}.uni-fab__content--right[data-v-3f2a463a]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-3f2a463a]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-3f2a463a]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-3f2a463a]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-3f2a463a]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-3f2a463a]{opacity:1}.uni-fab__item-image[data-v-3f2a463a]{width:20px;height:20px;margin-bottom:4px}.uni-fab__item-text[data-v-3f2a463a]{color:#fff;font-size:12px;line-height:12px;margin-top:2px}.uni-fab__item--first[data-v-3f2a463a]{width:55px}',""]),i["default"]=s}}]);