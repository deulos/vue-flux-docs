(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{147:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return r}));e(155),e(154),e(14),e(153),e(156);var i=e(18),o=e(31),a=function(){function n(){Object(i.a)(this,n)}return Object(o.a)(n,null,[{key:"generate",value:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],e=1;e<=60;e++)t.push(e.toString().padStart(2,"0")+".jpg");for(var i,o,a=[],s=1;s<=n;s++)i=Math.floor(Math.random()*t.length),o=t.splice(i,1)[0],a.push(o);return a.length>1?a:a[0]}}]),n}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],r=function(){function n(){Object(i.a)(this,n)}return Object(o.a)(n,null,[{key:"generate",value:function(n){for(var t,e=[],i=1;i<=n;i++)t=Math.floor(Math.random()*s.length),e.push(s[t]);return e}}]),n}()},152:function(n,t,e){"use strict";e.r(t);e(150),e(151);var i=e(147),o=e(158),a={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?i.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var n=this.images?this.images.length:this.numImages;return i.a.generate(n)}return[]}},methods:{transitionStart:function(n){this.$emit("transition-start",n)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},s=e(30),r=Object(s.a)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vue-flux",{attrs:{options:n.options,images:n.finalImages,transitions:n.transitions,captions:n.finalCaptions},on:{"transition-start":n.transitionStart,"transition-cancel":n.transitionCancel,"transition-end":n.transitionEnd},scopedSlots:n._u([n.complements.preloader?{key:"preloader",fn:function(){return[e("flux-preloader")]},proxy:!0}:null,n.complements.caption?{key:"caption",fn:function(){return[e("flux-caption")]},proxy:!0}:null,n.complements.controls?{key:"controls",fn:function(){return[e("flux-controls")]},proxy:!0}:null,n.complements.pagination?{key:"pagination",fn:function(){return[e("flux-pagination")]},proxy:!0}:null,n.complements.index?{key:"index",fn:function(){return[e("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.default=r.exports},182:function(n,t,e){},212:function(n,t,e){"use strict";var i=e(182);e.n(i).a},219:function(n,t,e){"use strict";e.r(t);e(165);var i=e(147),o=e(158),a=e(152),s=e(159),r={name:"demos-vue-flux-flux-pagination",components:{Demo:a.default,VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxPagination:o.FluxPagination,FluxControls:o.FluxControls},data:function(){return{numImages:3,options:{autohideTime:0,path:"../../img/slides/"},transitions:["blinds3d","blocks2","book","cube","warp","wave"],complements:{pagination:!0,controls:!0,preloader:!0}}},computed:{images:function(){return i.b.generate(this.numImages)},captions:function(){return i.a.generate(this.numImages)},sourceHtml1:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:pagination>\n","      <flux-pagination />\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",s.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:pagination>\n      <flux-pagination />\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',s.languages.html)},sourceJs1:function(){var n="";return n+="...\n",n+="data: () => ({\n",n+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",n+="   transitions: [\n",n+="      '"+this.transitions.join("',\n      '")+"',\n",n+="   ],\n",n+="   captions: [\n",n+="      '"+this.captions.join("',\n      '")+"',\n",n+="   ],\n",n+="}),\n",n+="...\n",s.highlight(n,s.languages.javascript)},sourceHtml2:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:pagination>\n",'      <flux-pagination v-slot="itemProps">\n','         <div"\n',"            :class=\"itemProps.active? 'current' : ''\"\n",'            @click="itemProps.onClick(itemProps.item.index)"\n','            :title="itemProps.item.title"\n',"         />{{ itemProps.item.index + 1 }}</div>\n","      </flux-pagination>\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",s.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:pagination>\n      <flux-pagination v-slot="itemProps">\n         <div"\n            :class="itemProps.active? \'current\' : \'\'"\n            @click="itemProps.onClick(itemProps.item.index)"\n            :title="itemProps.item.title"\n         />{{ itemProps.item.index + 1 }}</div>\n      </flux-pagination>\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',s.languages.html)},sourceJs2:function(){var n="";return n+="...\n",n+="data: () => ({\n",n+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",n+="   transitions: [\n",n+="      '"+this.transitions.join("',\n      '")+"',\n",n+="   ],\n",n+="   captions: [\n",n+="      '"+this.captions.join("',\n      '")+"',\n",n+="   ],\n",n+="}),\n",n+="...\n",s.highlight(n,s.languages.javascript)},sourceScss2:function(){return".flux-pagination li {\n","   color: white;\n","   background-color: rgba(0, 0, 0, 0.8);\n","   padding: 0 8px 2px 8px;\n","   width: auto;\n","   height: auto;\n","   border-radius: 6px;\n","\n","   .current {\n","      color: yellow;\n","   }\n","}\n",s.highlight(".flux-pagination li {\n   color: white;\n   background-color: rgba(0, 0, 0, 0.8);\n   padding: 0 8px 2px 8px;\n   width: auto;\n   height: auto;\n   border-radius: 6px;\n\n   .current {\n      color: yellow;\n   }\n}\n",s.languages.css)}}},l=(e(212),e(30)),u=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h2",[n._v("Default pagination")]),n._v(" "),e("demo",{ref:"demo",attrs:{options:n.options,transitions:n.transitions,captions:n.captions,complements:n.complements,images:n.images}}),n._v(" "),e("h3",[n._v("Source")]),n._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{staticClass:"language-html",domProps:{innerHTML:n._s(n.sourceHtml1)}})]),n._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"language-js",domProps:{innerHTML:n._s(n.sourceJs1)}})]),n._v(" "),e("h2",[n._v("Custom pagination")]),n._v(" "),e("vue-flux",{staticClass:"flux-pagination-custom",attrs:{options:n.options,images:n.images,transitions:n.transitions,captions:n.captions},scopedSlots:n._u([{key:"preloader",fn:function(){return[e("flux-preloader")]},proxy:!0},{key:"pagination",fn:function(){return[e("flux-pagination",{scopedSlots:n._u([{key:"default",fn:function(t){return[e("div",{class:t.item.active?"current":"",attrs:{title:t.item.title},on:{click:function(n){return t.item.onClick(t.item.index)}}},[n._v(n._s(t.item.index+1))])]}}])})]},proxy:!0},{key:"controls",fn:function(){return[e("flux-controls")]},proxy:!0}])}),n._v(" "),e("h3",[n._v("Source")]),n._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{staticClass:"language-html",domProps:{innerHTML:n._s(n.sourceHtml2)}})]),n._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"language-js",domProps:{innerHTML:n._s(n.sourceJs2)}})]),n._v(" "),e("div",{staticClass:"language-scss extra-class"},[e("pre",{staticClass:"language-scss",domProps:{innerHTML:n._s(n.sourceScss2)}})])],1)}),[],!1,null,null,null);t.default=u.exports}}]);