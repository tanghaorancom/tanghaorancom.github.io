(self["webpackChunkuni_app_mall_template"]=self["webpackChunkuni_app_mall_template"]||[]).push([[853],{91599:function(e,t,i){var n=i(91912);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=i(85892).Z;s("4e0d2c73",n,!0,{sourceMap:!1,shadowMode:!1})},64121:function(e,t,i){var n=i(45942);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=i(85892).Z;s("4609b65c",n,!0,{sourceMap:!1,shadowMode:!1})},1267:function(e,t,i){var n=i(55318);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=i(85892).Z;s("150d9814",n,!0,{sourceMap:!1,shadowMode:!1})},22462:function(e,t,i){var n=i(10971);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=i(85892).Z;s("9c37da92",n,!0,{sourceMap:!1,shadowMode:!1})},64377:function(e,t,i){"use strict";var n;i.d(t,{Z:function(){return H}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker"},[e.title?i("v-uni-view",{staticClass:"uni-file-picker__header"},[i("v-uni-text",{staticClass:"file-title"},[e._v(e._s(e.title))]),i("v-uni-text",{staticClass:"file-count"},[e._v(e._s(e.filesList.length)+"/"+e._s(e.limitLength))])],1):e._e(),"image"===e.fileMediatype&&"grid"===e.showType?i("upload-image",{attrs:{readonly:e.readonly,"image-styles":e.imageStyles,"files-list":e.filesList,limit:e.limitLength,disablePreview:e.disablePreview,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"is-add"},[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})],1)])],2):e._e(),"image"!==e.fileMediatype||"grid"!==e.showType?i("upload-file",{attrs:{readonly:e.readonly,"list-styles":e.listStyles,"files-list":e.filesList,showType:e.showType,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[e._v("选择文件")])])],2):e._e()],1)},a=[],r=i(71301),o=i(20136),l=i(2207),u=i(8397),c=(i(95163),i(63238),i(55849),i(95988),i(38217),i(52077),i(94890),i(92571),i(23938),i(17460),i(14078),i(95699),i(32081),i(58112),i(911),i(61013),i(95735),i(52327),i(73906)["Z"]),d="chooseAndUploadFile:ok",p="chooseAndUploadFile:fail";function f(e){var t=e.count,i=e.sizeType,n=void 0===i?["original","compressed"]:i,s=e.sourceType,a=e.extension;return new Promise((function(e,i){uni.chooseImage({count:t,sizeType:n,sourceType:s,extension:a,success:function(t){e(v(t,"image"))},fail:function(e){i({errMsg:e.errMsg.replace("chooseImage:fail",p)})}})}))}function h(e){var t=e.camera,i=e.compressed,n=e.maxDuration,s=e.sourceType,a=e.extension;return new Promise((function(e,r){uni.chooseVideo({camera:t,compressed:i,maxDuration:n,sourceType:s,extension:a,success:function(t){var i=t.tempFilePath,n=t.duration,s=t.size,a=t.height,r=t.width;e(v({errMsg:"chooseVideo:ok",tempFilePaths:[i],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:i,size:s,type:t.tempFile&&t.tempFile.type||"",width:r,height:a,duration:n,fileType:"video",cloudPath:""}]},"video"))},fail:function(e){r({errMsg:e.errMsg.replace("chooseVideo:fail",p)})}})}))}function m(e){var t=e.count,i=e.extension;return new Promise((function(e,n){var s=uni.chooseFile;if("undefined"!==typeof wx&&"function"===typeof wx.chooseMessageFile&&(s=wx.chooseMessageFile),"function"!==typeof s)return n({errMsg:p+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});s({type:"all",count:t,extension:i,success:function(t){e(v(t))},fail:function(e){n({errMsg:e.errMsg.replace("chooseFile:fail",p)})}})}))}function v(e,t){return e.tempFiles.forEach((function(e,i){e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((function(e){return e.path}))),e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=arguments.length>2?arguments[2]:void 0;e=JSON.parse(JSON.stringify(e));var n=e.length,s=0,a=this;return new Promise((function(r){while(s<t)o();function o(){var t=s++;if(t>=n)!e.find((function(e){return!e.url&&!e.errMsg}))&&r(e);else{var l=e[t],u=a.files.findIndex((function(e){return e.uuid===l.uuid}));l.url="",delete l.errMsg,c.uploadFile({filePath:l.path,cloudPath:l.cloudPath,fileType:l.fileType,onUploadProgress:function(e){e.index=u,i&&i(e)}}).then((function(e){l.url=e.fileID,l.index=u,t<n&&o()})).catch((function(e){l.errMsg=e.errMsg||e.message,l.index=u,t<n&&o()}))}}}))}function b(e,t){var i=t.onChooseFile;t.onUploadProgress;return e.then((function(e){if(i){var t=i(e);if("undefined"!==typeof t)return Promise.resolve(t).then((function(t){return"undefined"===typeof t?e:t}))}return e})).then((function(e){return!1===e?{errMsg:d,tempFilePaths:[],tempFiles:[]}:e}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"all"};return"image"===e.type?b(f(e),e):"video"===e.type?b(h(e),e):b(m(e),e)}i(27471);var y,w,_,k,F,C=function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},S=function(e){if(Array.isArray(e))return e;var t=e.replace(/(\[|\])/g,"");return t.split(",")},P=function(e,t){var i=[],n=[];return t&&0!==t.length?(e.tempFiles.forEach((function(e){var s=C(e.name),a=s.ext.toLowerCase();-1!==t.indexOf(a)&&(n.push(e),i.push(e.path))})),n.length!==e.tempFiles.length&&uni.showToast({title:"当前选择了".concat(e.tempFiles.length,"个文件 ，").concat(e.tempFiles.length-n.length," 个文件格式不正确"),icon:"none",duration:5e3}),{filePaths:i,files:n}):{filePaths:i,files:n}},T=function(e){return new Promise((function(t,i){uni.getImageInfo({src:e,success:function(e){t(e)},fail:function(e){i(e)}})}))},E=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){var i,n,s,a,r,o=arguments;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=o.length>1&&void 0!==o[1]?o[1]:"image",n=C(t.name),s=n.ext.toLowerCase(),a={name:t.name,uuid:t.uuid,extname:s||"",cloudPath:t.cloudPath,fileType:t.fileType,url:t.path||t.path,size:t.size,image:{},path:t.path,video:{}},"image"!==i){e.next=14;break}return e.next=7,T(t.path);case 7:r=e.sent,delete a.video,a.image.width=r.width,a.image.height=r.height,a.image.location=r.path,e.next=15;break;case 14:delete a.image;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__container"},[e._l(e.filesList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content",style:e.borderStyle},[i("v-uni-image",{staticClass:"file-image",attrs:{src:t.url,mode:"aspectFill"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.prviewImage(t,n)}}}),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e(),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),t.errMsg?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)],1)})),e.filesList.length<e.limit&&!e.readonly?i("v-uni-view",{staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content is-add",style:e.borderStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})])],2)],1):e._e()],2)},M=[],Z={name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto",border:{}}}},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles:function(){var e={width:"auto",height:"auto",border:{}};return Object.assign(e,this.imageStyles)},boxStyle:function(){var e=this.styles,t=e.width,i=void 0===t?"auto":t,n=e.height,s=void 0===n?"auto":n,a={};"auto"===s?"auto"!==i?(a.height=this.value2px(i),a["padding-top"]=0):a.height=0:(a.height=this.value2px(s),a["padding-top"]=0),a.width="auto"===i?"auto"!==s?this.value2px(s):"33.3%":this.value2px(i);var r="";for(var o in a)r+="".concat(o,":").concat(a[o],";");return r},borderStyle:function(){var e=this.styles.border,t={},i=1,n=3;if("boolean"===typeof e)t.border=e?"1px #eee solid":"none";else{var s=e&&e.width||i;s=this.value2px(s);var a=e&&e.radius||n;a=this.value2px(a),t={"border-width":s,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":a}}var r="";for(var o in t)r+="".concat(o,":").concat(t[o],";");return r}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",e)},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},prviewImage:function(e,t){var i=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((function(e){i.push(e.url)})),uni.previewImage({urls:i,current:t}))},value2px:function(e){return"number"===typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e}}},$=Z,j=(i(1267),i(96904)),L=(0,j.Z)($,I,M,!1,null,"0cb8aba9",null,!1,y,w),z=L.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__files"},[e.readonly?e._e():i("v-uni-view",{staticClass:"files-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default")],2),e.list.length>0?i("v-uni-view",{staticClass:"uni-file-picker__lists is-text-box",style:e.borderStyle},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-file-picker__lists-box",class:{"files-border":0!==n&&e.styles.dividline},style:0!==n&&e.styles.dividline&&e.borderLineStyle},[i("v-uni-view",{staticClass:"uni-file-picker__item"},[i("v-uni-view",{staticClass:"files__name"},[e._v(e._s(t.name))]),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box icon-files",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del icon-files"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e()],1),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),"error"===t.status?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)})),1):e._e()],1)},A=[],B={name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},readonly:{type:Boolean,default:!1}},computed:{list:function(){var e=[];return this.filesList.forEach((function(t){e.push(t)})),e},styles:function(){var e={border:!0,dividline:!0,"border-style":{}};return Object.assign(e,this.listStyles)},borderStyle:function(){var e=this.styles,t=e.borderStyle,i=e.border,n={};if(i){var s=t&&t.width||1;s=this.value2px(s);var a=t&&t.radius||5;a=this.value2px(a),n={"border-width":s,"border-style":t&&t.style||"solid","border-color":t&&t.color||"#eee","border-radius":a}}else n.border="none";var r="";for(var o in n)r+="".concat(o,":").concat(n[o],";");return r},borderLineStyle:function(){var e={},t=this.styles.borderStyle;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){var i=t&&t.width||1,n=t&&t.style||0;"number"===typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-width"]=i,"number"===typeof n?n+="px":n=n.indexOf("px")?n:n+"px",e["border-top-style"]=n}var s="";for(var a in e)s+="".concat(a,":").concat(e[a],";");return s}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},value2px:function(e){return"number"===typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e}}},U=B,V=(i(64121),(0,j.Z)(U,O,A,!1,null,"1e2ea0b2",null,!1,_,k)),D=V.exports,N=i(73906)["Z"],R={name:"uniFilePicker",components:{uploadImage:z,uploadFile:D},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){N.config&&N.config.provider||(this.noSpace=!0,N.chooseAndUploadFile=x),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,i){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var i=this;return(0,u.Z)((0,l.Z)().mark((function t(){var n,s,a,r;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){var n,s;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/cloud:\/\/([\w.]+\/?)\S*/,s="",s=t.fileID?t.fileID:t.url,!n.test(s)){e.next=8;break}return t.fileID=s,e.next=7,i.getTempFileURL(s);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==i.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,n(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),s=0;case 12:if(!(s<e.length)){t.next=19;break}return a=e[s],t.next=16,n(a);case 16:s++,t.next=12;break;case 19:i.localValue=e,i.form&&i.formItem&&!i.is_reset&&(i.is_reset=!1,i.formItem.setValue(i.localValue)),r=Object.keys(e).length>0?e:[],i.files=[].concat(r);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?uni.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var e=this,t=S(this.fileExtname);N.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:t.length>0?t:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(t){e.setProgress(t,t.index)}}).then((function(t){e.setSuccessAndError(t.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return(0,u.Z)((0,l.Z)().mark((function i(){var n,s,a,r,u,c,d,p;return(0,l.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=S(t.fileExtname),s=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,s&&(t.files=[]),a=P(e,n),r=a.filePaths,u=a.files,n&&n.length>0||(r=e.tempFilePaths,u=e.tempFiles),c=[],d=0;case 7:if(!(d<u.length)){i.next=21;break}if(!(t.limitLength-t.files.length<=0)){i.next=10;break}return i.abrupt("break",21);case 10:return u[d].uuid=Date.now(),i.next=13,E(u[d],t.fileMediatype);case 13:p=i.sent,p.progress=0,p.status="ready",t.files.push(p),c.push((0,o.Z)((0,o.Z)({},p),{},{file:u[d]}));case 18:d++,i.next=7;break;case 21:t.$emit("select",{tempFiles:c,tempFilePaths:r}),e.tempFiles=u,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return i.stop()}}),i)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),g.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var i=this;return(0,u.Z)((0,l.Z)().mark((function t(){var n,s,a,r,o,u;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],s=[],a=[],r=[],o=(0,l.Z)().mark((function t(){var o,c,d;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e[u],c=o.uuid?i.files.findIndex((function(e){return e.uuid===o.uuid})):o.index,-1!==c&&i.files){t.next=4;break}return t.abrupt("return",1);case 4:if("request:fail"!==o.errMsg){t.next=12;break}i.files[c].url=o.path,i.files[c].status="error",i.files[c].errMsg=o.errMsg,s.push(i.files[c]),r.push(i.files[c].url),t.next=26;break;case 12:if(i.files[c].errMsg="",i.files[c].fileID=o.url,d=/cloud:\/\/([\w.]+\/?)\S*/,!d.test(o.url)){t.next=21;break}return t.next=18,i.getTempFileURL(o.url);case 18:i.files[c].url=t.sent,t.next=22;break;case 21:i.files[c].url=o.url;case 22:i.files[c].status="success",i.files[c].progress+=1,n.push(i.files[c]),a.push(i.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),u=0;case 6:if(!(u<e.length)){t.next=13;break}return t.delegateYield(o(),"t0",8);case 8:if(!t.t0){t.next=10;break}return t.abrupt("break",13);case 10:u++,t.next=6;break;case 13:n.length>0&&(i.setEmit(),i.$emit("success",{tempFiles:i.backObject(n),tempFilePaths:a})),s.length>0&&i.$emit("fail",{tempFiles:i.backObject(s),tempFilePaths:r});case 15:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,i){this.files.length;var n=Math.round(100*e.loaded/e.total),s=t;i||(s=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==s&&this.files[s]&&(this.files[s].progress=n-1,this.$emit("progress",{index:s,progress:parseInt(n),tempFile:this.files[s]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=(0,r.Z)(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url,uuid:e.uuid,status:e.status,cloudPath:e.cloudPath})})),t},getTempFileURL:function(e){return(0,u.Z)((0,l.Z)().mark((function t(){var i;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={fileList:[].concat(e)},t.next=3,N.getTempFileURL(e);case 3:return i=t.sent,t.abrupt("return",i.fileList[0].tempFileURL||"");case 5:case"end":return t.stop()}}),t)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,i=t.$options.name;while(i!==e){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}},q=R,J=(i(91599),(0,j.Z)(q,s,a,!1,null,"c369d230",null,!1,n,F)),H=J.exports},71689:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n,s={uniCard:i(65090).Z,uniSection:i(83858).Z,uniFilePicker:i(64377).Z},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[i("v-uni-text",{staticClass:"uni-h6"},[e._v("文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。")])],1),i("uni-section",{attrs:{title:"只选择图片",type:"line"}},[i("v-uni-view",{staticClass:"example-body"},[i("uni-file-picker",{attrs:{limit:"9",title:"最多选择9张图片"}})],1)],1),i("uni-section",{attrs:{title:"只选择视频",type:"line"}},[i("v-uni-view",{staticClass:"example-body"},[i("uni-file-picker",{attrs:{limit:"9","file-mediatype":"video",title:"最多选择9个视频"}})],1)],1),i("uni-section",{attrs:{title:"选择任意文件",type:"line"}},[i("v-uni-view",{staticClass:"example-body"},[i("uni-file-picker",{attrs:{limit:"5","file-mediatype":"all",title:"最多选择5个文件"}})],1)],1),i("uni-section",{attrs:{title:"自定义图片大小",type:"line"}},[i("v-uni-view",{staticClass:"example-body custom-image-box"},[i("v-uni-text",{staticClass:"text"},[e._v("选择头像")]),i("uni-file-picker",{attrs:{limit:"1","del-icon":!1,"disable-preview":!0,imageStyles:e.imageStyles,"file-mediatype":"image"}},[e._v("选择")])],1)],1),i("uni-section",{attrs:{title:"自定义图片大小",type:"line"}},[i("v-uni-view",{staticClass:"example-body "},[i("uni-file-picker",{attrs:{readonly:!0,value:e.fileLists,imageStyles:e.imageStyles,"file-mediatype":"image"}}),i("uni-file-picker",{attrs:{readonly:!0,value:e.fileLists,listStyles:e.listStyles,"file-mediatype":"all"}})],1)],1)],1)},r=[],o={data:function(){return{imageStyles:{width:64,height:64,border:{radius:"50%"}},listStyles:{border:!0,dividline:!0,borderStyle:{width:1,color:"blue",style:"dashed",radius:2}},fileLists:[{url:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",extname:"png",name:"shuijiao.png"},{url:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",extname:"png",name:"uniapp-logo.png"},{url:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",extname:"png",name:"shuijiao.png"}]}},methods:{}},l=o,u=(i(22462),i(96904)),c=(0,u.Z)(l,a,r,!1,null,"7a10a8d6",null,!1,s,n),d=c.exports},91912:function(e,t,i){"use strict";i.r(t);var n=i(54933),s=i.n(n),a=i(93476),r=i.n(a),o=r()(s());o.push([e.id,".uni-file-picker[data-v-c369d230]{\nbox-sizing:border-box;overflow:hidden;width:100%;\nflex:1}.uni-file-picker__header[data-v-c369d230]{padding-top:5px;padding-bottom:10px;\ndisplay:flex;\njustify-content:space-between}.file-title[data-v-c369d230]{font-size:14px;color:#333}.file-count[data-v-c369d230]{font-size:14px;color:#999}.is-add[data-v-c369d230]{\ndisplay:flex;\nalign-items:center;justify-content:center}.icon-add[data-v-c369d230]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-c369d230]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}",""]),t["default"]=o},45942:function(e,t,i){"use strict";i.r(t);var n=i(54933),s=i.n(n),a=i(93476),r=i.n(a),o=r()(s());o.push([e.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-file-picker__files[data-v-1e2ea0b2]{display:flex;flex-direction:column;justify-content:flex-start}.uni-file-picker__lists[data-v-1e2ea0b2]{position:relative;margin-top:5px;overflow:hidden}.file-picker__mask[data-v-1e2ea0b2]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:14px;background-color:rgba(0,0,0,.4)}.uni-file-picker__lists-box[data-v-1e2ea0b2]{position:relative}.uni-file-picker__item[data-v-1e2ea0b2]{display:flex;align-items:center;padding:8px 10px;padding-right:5px;padding-left:10px}.files-border[data-v-1e2ea0b2]{border-top:1px #eee solid}.files__name[data-v-1e2ea0b2]{flex:1;font-size:14px;color:#666;margin-right:25px;word-break:break-all;word-wrap:break-word}.icon-files[data-v-1e2ea0b2]{position:static;background-color:initial}.is-list-card[data-v-1e2ea0b2]{border:1px #eee solid;margin-bottom:5px;border-radius:5px;box-shadow:0 0 2px 0 rgba(0,0,0,.1);padding:5px}.files__image[data-v-1e2ea0b2]{width:40px;height:40px;margin-right:10px}.header-image[data-v-1e2ea0b2]{width:100%;height:100%}.is-text-box[data-v-1e2ea0b2]{border:1px #eee solid;border-radius:5px}.is-text-image[data-v-1e2ea0b2]{width:25px;height:25px;margin-left:5px}.rotate[data-v-1e2ea0b2]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.icon-del-box[data-v-1e2ea0b2]{display:flex;margin:auto 0;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;right:5px;height:26px;width:26px;z-index:2;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon-del[data-v-1e2ea0b2]{width:15px;height:1px;background-color:#333}@media (min-width:768px){.uni-file-picker__files[data-v-1e2ea0b2]{max-width:375px}}',""]),t["default"]=o},55318:function(e,t,i){"use strict";i.r(t);var n=i(54933),s=i.n(n),a=i(93476),r=i.n(a),o=r()(s());o.push([e.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-file-picker__container[data-v-0cb8aba9]{display:flex;box-sizing:border-box;flex-wrap:wrap;margin:-5px}.file-picker__box[data-v-0cb8aba9]{position:relative;width:33.3%;height:0;padding-top:33.33%;box-sizing:border-box}.file-picker__box-content[data-v-0cb8aba9]{position:absolute;top:0;right:0;bottom:0;left:0;margin:5px;border:1px #eee solid;border-radius:5px;overflow:hidden}.file-picker__progress[data-v-0cb8aba9]{position:absolute;bottom:0;left:0;right:0;\n  /* border: 1px red solid; */z-index:2}.file-picker__progress-item[data-v-0cb8aba9]{width:100%}.file-picker__mask[data-v-0cb8aba9]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:12px;background-color:rgba(0,0,0,.4)}.file-image[data-v-0cb8aba9]{width:100%;height:100%}.is-add[data-v-0cb8aba9]{display:flex;align-items:center;justify-content:center}.icon-add[data-v-0cb8aba9]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-0cb8aba9]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.icon-del-box[data-v-0cb8aba9]{display:flex;align-items:center;justify-content:center;position:absolute;top:3px;right:3px;height:26px;width:26px;border-radius:50%;background-color:rgba(0,0,0,.5);z-index:2;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon-del[data-v-0cb8aba9]{width:15px;height:2px;background-color:#fff;border-radius:2px}',""]),t["default"]=o},10971:function(e,t,i){"use strict";i.r(t);var n=i(54933),s=i.n(n),a=i(93476),r=i.n(a),o=r()(s());o.push([e.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-7a10a8d6]{padding:10px;padding-top:0}.custom-image-box[data-v-7a10a8d6]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.text[data-v-7a10a8d6]{font-size:14px;color:#333}',""]),t["default"]=o}}]);