(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14],{306:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return s}));e(312),e(67),e(10),e(95),e(313);var o=e(25),a=e(45),r=function(){function t(){Object(o.a)(this,t)}return Object(a.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=[],e=1;e<=60;e++)n.push(e.toString().padStart(2,"0")+".jpg");for(var o,a,r=[],i=1;i<=t;i++)o=Math.floor(Math.random()*n.length),a=n.splice(o,1)[0],r.push(a);return r.length>1?r:r[0]}}]),t}(),i=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(o.a)(this,t)}return Object(a.a)(t,null,[{key:"generate",value:function(t){for(var n,e=[],o=1;o<=t;o++)n=Math.floor(Math.random()*i.length),e.push(i[n]);return e}}]),t}()},307:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(t,n,e){var o=e(24),a="["+e(307)+"]",r=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(n){var e=String(o(n));return 1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(i,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},309:function(t,n,e){var o=e(5),a=e(97);t.exports=function(t,n,e){var r,i;return a&&"function"==typeof(r=n.constructor)&&r!==e&&o(i=r.prototype)&&i!==e.prototype&&a(t,i),t}},310:function(t,n,e){"use strict";var o=e(6),a=e(4),r=e(96),i=e(11),s=e(7),l=e(18),u=e(309),c=e(46),p=e(2),f=e(30),h=e(68).f,m=e(26).f,g=e(9).f,d=e(308).trim,v=a.Number,x=v.prototype,y="Number"==l(f(x)),b=function(t){var n,e,o,a,r,i,s,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(43===(n=(u=d(u)).charCodeAt(0))||45===n){if(88===(e=u.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+u}for(i=(r=u.slice(2)).length,s=0;s<i;s++)if((l=r.charCodeAt(s))<48||l>a)return NaN;return parseInt(r,o)}return+u};if(r("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,I=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof I&&(y?p((function(){x.valueOf.call(e)})):"Number"!=l(e))?u(new v(b(n)),e,I):b(n)},_=o?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)s(v,w=_[C])&&!s(I,w)&&g(I,w,m(v,w));I.prototype=x,x.constructor=I,i(a,"Number",I)}},311:function(t,n,e){"use strict";e.r(n);e(98),e(310);var o=e(306),a=e(315),r={name:"Demo",components:{VueFlux:a.VueFlux,FluxPreloader:a.FluxPreloader,FluxCaption:a.FluxCaption,FluxControls:a.FluxControls,FluxPagination:a.FluxPagination,FluxIndex:a.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?o.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return o.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},i=e(44),s=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[e("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[e("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[e("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[e("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[e("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);n.default=s.exports},312:function(t,n,e){"use strict";var o=e(1),a=e(100),r=e(47),i=e(14),s=e(12),l=e(101),u=e(49),c=e(48),p=e(19),f=c("splice"),h=p("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min;o({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,n){var e,o,c,p,f,h,d=s(this),v=i(d.length),x=a(t,v),y=arguments.length;if(0===y?e=o=0:1===y?(e=0,o=v-x):(e=y-2,o=g(m(r(n),0),v-x)),v+e-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=l(d,o),p=0;p<o;p++)(f=x+p)in d&&u(c,p,d[f]);if(c.length=o,e<o){for(p=x;p<v-o;p++)h=p+e,(f=p+o)in d?d[h]=d[f]:delete d[h];for(p=v;p>v-o+e;p--)delete d[p-1]}else if(e>o)for(p=v-o;p>x;p--)h=p+e-1,(f=p+o-1)in d?d[h]=d[f]:delete d[h];for(p=0;p<e;p++)d[p+x]=arguments[p+2];return d.length=v-o+e,c}})},313:function(t,n,e){"use strict";var o=e(1),a=e(318).start;o({target:"String",proto:!0,forced:e(320)},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,n,e){var o=e(14),a=e(319),r=e(24),i=Math.ceil,s=function(t){return function(n,e,s){var l,u,c=String(r(n)),p=c.length,f=void 0===s?" ":String(s),h=o(e);return h<=p||""==f?c:(l=h-p,(u=a.call(f,i(l/f.length))).length>l&&(u=u.slice(0,l)),t?c+u:u+c)}};t.exports={start:s(!1),end:s(!0)}},319:function(t,n,e){"use strict";var o=e(47),a=e(24);t.exports="".repeat||function(t){var n=String(a(this)),e="",r=o(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(n+=n))1&r&&(e+=n);return e}},320:function(t,n,e){var o=e(99);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},403:function(t,n,e){"use strict";e.r(n);e(102),e(169),e(69),e(104);var o=e(306),a=e(315),r=e(311),i=e(316),s={name:"demos-vue-flux-flux-caption",components:{Demo:r.default,VueFlux:a.VueFlux,FluxPreloader:a.FluxPreloader,FluxCaption:a.FluxCaption,FluxControls:a.FluxControls},data:function(){return{numImages:3,options:{path:"../../img/slides/"},transitions:["blinds3d","blocks2","book","cube","warp","wave"],complements:{caption:!0,controls:!0,preloader:!0}}},computed:{images:function(){return o.b.generate(this.numImages)},captions1:function(){return o.a.generate(this.numImages)},sourceHtml1:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:caption>\n","      <flux-caption />\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",i.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:caption>\n      <flux-caption />\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',i.languages.html,"html")},sourceJs1:function(){var t="";return t+="...\n",t+="data: () => ({\n",t+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",t+="   transitions: [\n",t+="      '"+this.transitions.join("',\n      '")+"',\n",t+="   ],\n",t+="   captions: [\n",t+="      '"+this.captions1.join("',\n      '")+"',\n",t+="   ],\n",t+="}),\n",t+="...\n",i.highlight(t,i.languages.javascript,"javascript")},captions2:function(){return this.captions1.map((function(t){return{url:"https://www.google.com/search?q="+t,text:t}}))},sourceHtml2:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:caption>\n",'      <flux-caption v-slot="captionProps">\n','         <a :href="captionProps.caption.url" target="_blank" class="flux-caption">\n',"            <h3>{{ captionProps.text }}</h3>\n","         </a>\n","      </flux-caption>\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",i.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:caption>\n      <flux-caption v-slot="captionProps">\n         <a :href="captionProps.caption.url" target="_blank" class="flux-caption">\n            <h3>{{ captionProps.text }}</h3>\n         </a>\n      </flux-caption>\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',i.languages.html,"html")},sourceJs2:function(){var t="";return t+="...\n",t+="data: () => ({\n",t+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",t+="   transitions: [\n",t+="      '"+this.transitions.join("',\n      '")+"',\n",t+="   ],\n",t+="   captions: [\n",this.captions2.forEach((function(n){t+="      {\n",t+="         url: '"+n.url+"',\n",t+="         text: '"+n.text+"',\n",t+="      },\n"})),t+="   ],\n",t+="}),\n",t+="...\n",i.highlight(t,i.languages.javascript,"javascript")}}},l=e(44),u=Object(l.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Default captions")]),t._v(" "),e("demo",{ref:"demo",attrs:{options:t.options,transitions:t.transitions,captions:t.captions1,complements:t.complements,images:t.images}}),t._v(" "),e("h3",[t._v("Source")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{staticClass:"language-html",domProps:{innerHTML:t._s(t.sourceHtml1)}})]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"language-js",domProps:{innerHTML:t._s(t.sourceJs1)}})]),t._v(" "),e("h2",[t._v("Custom captions")]),t._v(" "),e("vue-flux",{attrs:{options:t.options,images:t.images,transitions:t.transitions,captions:t.captions2},scopedSlots:t._u([{key:"preloader",fn:function(){return[e("flux-preloader")]},proxy:!0},{key:"caption",fn:function(){return[e("flux-caption",{scopedSlots:t._u([{key:"default",fn:function(n){return[e("a",{staticClass:"flux-caption",attrs:{href:n.caption.url,target:"_blank"}},[e("h3",[t._v(t._s(n.text))])])]}}])})]},proxy:!0},{key:"controls",fn:function(){return[e("flux-controls")]},proxy:!0}])}),t._v(" "),e("h3",[t._v("Source")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{staticClass:"language-html",domProps:{innerHTML:t._s(t.sourceHtml2)}})]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"language-js",domProps:{innerHTML:t._s(t.sourceJs2)}})])],1)}),[],!1,null,null,null);n.default=u.exports}}]);