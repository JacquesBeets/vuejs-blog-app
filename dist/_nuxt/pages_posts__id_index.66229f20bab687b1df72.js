webpackJsonp([5],{"1kTP":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"single-post-page"},[a("div",{staticClass:"post-image"},[a("img",{attrs:{src:t.loadedPost.thumbnail,alt:"image"}})]),a("section",{staticClass:"post"},[a("div",{staticClass:"post-date"},[t._v(t._s(t._f("date")(t.loadedPost.updatedDate))+" | Author: "+t._s(t.loadedPost.author))]),a("h1",{staticClass:"post-title"},[t._v(t._s(t.loadedPost.title))]),a("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.loadedPost.content)}})]),t._m(0)])};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"post-feedback"},[e("p",[this._v("Let me know what you think about the post. You can send a mail to "),e("a",{attrs:{href:"mailto:test@test.com"}},[this._v("test@test.com")])])])}]};e.a=s},K3Pz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("eCZ7"),s=a("1kTP"),d=!1;var i=function(t){d||a("tz15")},n=a("VU/8")(o.a,s.a,!1,i,"data-v-16dd4331",null);n.options.__file="pages\\posts\\_id\\index.vue",e.default=n.exports},eCZ7:function(t,e,a){"use strict";e.a={asyncData:function(t){return t.payload?{loadedPost:t.payload.postData}:t.app.$axios.$get("https://blogapp-4939f.firebaseio.com/posts/"+t.params.id+".json").then(function(t){return{loadedPost:t}}).catch(function(e){return t.error(e)})}}},tz15:function(t,e,a){var o=a("zX1A");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("67f968e6",o,!1,{sourceMap:!1})},zX1A:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".single-post-page[data-v-16dd4331]{text-align:left;margin:30px auto;max-width:800px;width:80%;border:20px solid #dfd2c9;font-size:14px;padding:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.post-date[data-v-16dd4331]{color:#3498db;letter-spacing:3.2px;letter-spacing:.2rem;text-transform:uppercase;font-weight:400;font-size:19.2px;font-size:1.2rem;margin-top:20px}.post-title[data-v-16dd4331]{color:#2c3e50;font-size:32px;font-size:2rem}.post-content[data-v-16dd4331]{text-align:justify;border-top:3px solid #ccc;border-bottom:3px solid #ccc}.post-feedback[data-v-16dd4331]{text-align:center}.post-feedback a[data-v-16dd4331]{color:#3498db;text-decoration:none}.post-feedback a[data-v-16dd4331]:active,.post-feedback a[data-v-16dd4331]:hover{color:salmon}img[data-v-16dd4331]{max-width:100%}",""])}});