(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{306:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));n(312),n(67),n(10),n(95),n(313);var r=n(25),o=n(45),i=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var r,o,i=[],a=1;a<=t;a++)r=Math.floor(Math.random()*e.length),o=e.splice(r,1)[0],i.push(o);return i.length>1?i:i[0]}}]),t}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],r=1;r<=t;r++)e=Math.floor(Math.random()*a.length),n.push(a[e]);return n}}]),t}()},307:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(t,e,n){var r=n(24),o="["+n(307)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},309:function(t,e,n){var r=n(5),o=n(97);t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},310:function(t,e,n){"use strict";var r=n(6),o=n(4),i=n(96),a=n(11),s=n(7),u=n(18),l=n(309),f=n(46),c=n(2),h=n(30),p=n(68).f,d=n(26).f,g=n(9).f,m=n(308).trim,y=o.Number,b=y.prototype,w="Number"==u(h(b)),v=function(t){var e,n,r,o,i,a,s,u,l=f(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=m(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=(i=l.slice(2)).length,s=0;s<a;s++)if((u=i.charCodeAt(s))<48||u>o)return NaN;return parseInt(i,r)}return+l};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(w?c((function(){b.valueOf.call(n)})):"Number"!=u(n))?l(new y(v(e)),n,I):v(e)},N=r?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;N.length>A;A++)s(y,x=N[A])&&!s(I,x)&&g(I,x,d(y,x));I.prototype=b,b.constructor=I,a(o,"Number",I)}},311:function(t,e,n){"use strict";n.r(e);n(98),n(310);var r=n(306),o=n(315),i={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?r.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return r.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},a=n(44),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=s.exports},312:function(t,e,n){"use strict";var r=n(1),o=n(100),i=n(47),a=n(14),s=n(12),u=n(101),l=n(49),f=n(48),c=n(19),h=f("splice"),p=c("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var n,r,f,c,h,p,m=s(this),y=a(m.length),b=o(t,y),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=y-b):(n=w-2,r=g(d(i(e),0),y-b)),y+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(f=u(m,r),c=0;c<r;c++)(h=b+c)in m&&l(f,c,m[h]);if(f.length=r,n<r){for(c=b;c<y-r;c++)p=c+n,(h=c+r)in m?m[p]=m[h]:delete m[p];for(c=y;c>y-r+n;c--)delete m[c-1]}else if(n>r)for(c=y-r;c>b;c--)p=c+n-1,(h=c+r-1)in m?m[p]=m[h]:delete m[p];for(c=0;c<n;c++)m[c+b]=arguments[c+2];return m.length=y-r+n,f}})},313:function(t,e,n){"use strict";var r=n(1),o=n(318).start;r({target:"String",proto:!0,forced:n(320)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){var r=n(14),o=n(319),i=n(24),a=Math.ceil,s=function(t){return function(e,n,s){var u,l,f=String(i(e)),c=f.length,h=void 0===s?" ":String(s),p=r(n);return p<=c||""==h?f:(u=p-c,(l=o.call(h,a(u/h.length))).length>u&&(l=l.slice(0,u)),t?f+l:l+f)}};t.exports={start:s(!1),end:s(!0)}},319:function(t,e,n){"use strict";var r=n(47),o=n(24);t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},320:function(t,e,n){var r=n(99);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)}}]);