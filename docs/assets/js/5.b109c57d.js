(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8],{147:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));n(155),n(154),n(14),n(153),n(156);var r=n(18),i=n(31),o=function(){function t(){Object(r.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var r,i,o=[],a=1;a<=t;a++)r=Math.floor(Math.random()*e.length),i=e.splice(r,1)[0],o.push(i);return o.length>1?o:o[0]}}]),t}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(r.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],r=1;r<=t;r++)e=Math.floor(Math.random()*a.length),n.push(a[e]);return n}}]),t}()},148:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},149:function(t,e,n){var r=n(17),i="["+n(148)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},150:function(t,e,n){n(1)({target:"Array",stat:!0},{isArray:n(44)})},151:function(t,e,n){"use strict";var r=n(7),i=n(4),o=n(65),a=n(13),s=n(5),u=n(21),l=n(101),c=n(32),f=n(3),h=n(22),d=n(45).f,p=n(20).f,g=n(8).f,m=n(149).trim,y=i.Number,b=y.prototype,v="Number"==u(h(b)),w=function(t){var e,n,r,i,o,a,s,u,l=c(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=m(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(a=(o=l.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+l};if(o("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(v?f((function(){b.valueOf.call(n)})):"Number"!=u(n))?l(new y(w(e)),n,I):w(e)},N=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;N.length>S;S++)s(y,x=N[S])&&!s(I,x)&&g(I,x,p(y,x));I.prototype=b,b.constructor=I,a(i,"Number",I)}},152:function(t,e,n){"use strict";n.r(e);n(150),n(151);var r=n(147),i=n(158),o={name:"Demo",components:{VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxCaption:i.FluxCaption,FluxControls:i.FluxControls,FluxPagination:i.FluxPagination,FluxIndex:i.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?r.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return r.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},a=n(30),s=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=s.exports},153:function(t,e,n){"use strict";var r=n(13),i=n(9),o=n(3),a=n(103),s=RegExp.prototype,u=s.toString,l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),c="toString"!=u.name;(l||c)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},154:function(t,e,n){var r=n(13),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},155:function(t,e,n){"use strict";var r=n(1),i=n(67),o=n(33),a=n(15),s=n(16),u=n(102),l=n(66),c=n(46),f=n(11),h=c("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var n,r,c,f,h,d,m=s(this),y=a(m.length),b=i(t,y),v=arguments.length;if(0===v?n=r=0:1===v?(n=0,r=y-b):(n=v-2,r=g(p(o(e),0),y-b)),y+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=u(m,r),f=0;f<r;f++)(h=b+f)in m&&l(c,f,m[h]);if(c.length=r,n<r){for(f=b;f<y-r;f++)d=f+n,(h=f+r)in m?m[d]=m[h]:delete m[d];for(f=y;f>y-r+n;f--)delete m[f-1]}else if(n>r)for(f=y-r;f>b;f--)d=f+n-1,(h=f+r-1)in m?m[d]=m[h]:delete m[d];for(f=0;f<n;f++)m[f+b]=arguments[f+2];return m.length=y-r+n,c}})},156:function(t,e,n){"use strict";var r=n(1),i=n(161).start;r({target:"String",proto:!0,forced:n(163)},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},161:function(t,e,n){var r=n(15),i=n(162),o=n(17),a=Math.ceil,s=function(t){return function(e,n,s){var u,l,c=String(o(e)),f=c.length,h=void 0===s?" ":String(s),d=r(n);return d<=f||""==h?c:(u=d-f,(l=i.call(h,a(u/h.length))).length>u&&(l=l.slice(0,u)),t?c+l:l+c)}};t.exports={start:s(!1),end:s(!0)}},162:function(t,e,n){"use strict";var r=n(33),i=n(17);t.exports="".repeat||function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},163:function(t,e,n){var r=n(104);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},181:function(t,e,n){},211:function(t,e,n){"use strict";var r=n(181);n.n(r).a},236:function(t,e,n){"use strict";n.r(e);n(51);var r={name:"demos-index-1",components:{Demo:n(152).default},data:function(){return{slider:void 0,currentTransition:void 0,options:{autoplay:!0,path:"../img/slides/",delay:3e3},transitions:["fade","kenburn","swipe","slide","waterfall","zip","blinds2d","blocks1","blocks2","concentric","warp","camera","cube","book","fall","wave","blinds3d","round1","round2","explode"],complements:{preloader:!0,controls:!0}}},mounted:function(){this.slider=this.$refs.demo.$children[0]},methods:{getTransitionClass:function(t){return t===this.currentTransition?"active":""},runTransition:function(t){this.slider.show("next",t)},updateCurrentTransition:function(t){this.currentTransition=t?t.transition.name:t}}},i=(n(211),n(30)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo",{ref:"demo",attrs:{options:t.options,transitions:t.transitions,captions:"fortune",complements:t.complements,numImages:12},on:{"transition-start":t.updateCurrentTransition,"transition-cancel":t.updateCurrentTransition,"transition-end":t.updateCurrentTransition}}),t._v(" "),n("p",[t._v("Transitions: \n\t\t"),t._l(t.transitions,(function(e){return n("button",{class:t.getTransitionClass(e),attrs:{type:"button"},on:{click:function(n){return t.runTransition(e)}}},[t._v("\n\n\t\t\t"+t._s(e)+"\n\t\t")])}))],2)],1)}),[],!1,null,"85b27cda",null);e.default=o.exports}}]);