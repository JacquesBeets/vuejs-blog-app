webpackJsonp([2],{"1SXC":function(t,e,n){"use strict";var o=n("Dd8w"),i=n.n(o),s=n("ZPH9"),a=n("240y");e.a={components:{AppControlInput:s.a,AppButton:a.a},props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?i()({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}}},DETO:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".update-form[data-v-0355fc6d]{width:90%;margin:20px auto}@media (min-width:768px){.update-form[data-v-0355fc6d]{width:500px}}",""])},XFUb:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-post-page"},[e("section",{staticClass:"update-form"},[e("AdminPostForm",{attrs:{post:this.loadedPost},on:{submit:this.onSubmitted}})],1)])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},"a/oJ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("tVIC"),i=n("XFUb"),s=!1;var a=function(t){s||n("dJc6")},r=n("VU/8")(o.a,i.a,!1,a,"data-v-0355fc6d",null);r.options.__file="pages\\admin\\_postId\\index.vue",e.default=r.exports},a5pZ:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("Content")]),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("Preview Text")]),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},dJc6:function(t,e,n){var o=n("DETO");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("e8517506",o,!1,{sourceMap:!1})},tVIC:function(t,e,n){"use strict";var o=n("Dd8w"),i=n.n(o),s=n("wpN/");e.a={layout:"admin",middleware:["check-auth","auth"],components:{AdminPostForm:s.a},asyncData:function(t){return t.app.$axios.$get("https://blogapp-4939f.firebaseio.com/posts/"+t.params.postId+".json").then(function(e){return{loadedPost:i()({},e,{id:t.params.postId})}}).catch(function(e){return t.error()})},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("editPost",t).then(function(){e.$router.push("/admin")})}}}},"wpN/":function(t,e,n){"use strict";var o=n("1SXC"),i=n("a5pZ"),s=n("VU/8")(o.a,i.a,!1,null,null,null);s.options.__file="components\\Admin\\AdminPostForm.vue",e.a=s.exports}});