(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{14:function(t,e,n){var r=n(31),o=n(20);t.exports=function(t){return r(o(t))}},15:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},19:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},206:function(t,e,n){"use strict";n.r(e);var r={name:"demos-index-2",components:{Demo:n(66).default},data:function(){return{options:{autohideTime:0,path:"../img/slides/"},transitions:["fade","cube","book","wave","round2"],complements:{preloader:!0,caption:!0,controls:!0,pagination:!0,index:!0}}}},o=n(0),i=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("demo",{attrs:{options:this.options,transitions:this.transitions,captions:"fortune",complements:this.complements,numImages:12}})},[],!1,null,null,null);e.default=i.exports},22:function(t,e,n){var r=n(42)("keys"),o=n(43);t.exports=function(t){return r[t]||(r[t]=o(t))}},23:function(t,e,n){var r=n(18),o=n(14),i=n(32)(!1),a=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},24:function(t,e,n){var r=n(38),o=n(39),i=n(14),a=n(26),s=n(18),u=n(53),c=Object.getOwnPropertyDescriptor;e.f=n(11)?c:function(t,e){if(t=i(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},30:function(t,e,n){var r=n(23),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},31:function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},32:function(t,e,n){var r=n(14),o=n(28),i=n(41);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=o(u.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},34:function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},35:function(t,e,n){var r=n(17),o=n(36).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},36:function(t,e,n){var r=n(17),o=n(10),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(37)(Function.call,n(24).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},38:function(t,e){e.f={}.propertyIsEnumerable},40:function(t,e,n){var r=n(23),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},41:function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},48:function(t,e,n){var r=n(10),o=n(49),i=n(19),a=n(22)("IE_PROTO"),s=function(){},u=function(){var t,e=n(54)("iframe"),r=i.length;for(e.style.display="none",n(50).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},49:function(t,e,n){var r=n(21),o=n(10),i=n(30);t.exports=n(11)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},50:function(t,e,n){var r=n(12).document;t.exports=r&&r.documentElement},51:function(t,e,n){var r=n(13);r(r.S,"Array",{isArray:n(34)})},52:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});n(73),n(74),n(75);var r=n(76),o=n(77),i=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var r,o,i=[],a=1;a<=t;a++)r=Math.floor(Math.random()*e.length),o=e.splice(r,1)[0],i.push(o);return i.length>1?i:i[0]}}]),t}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],r=1;r<=t;r++)e=Math.floor(Math.random()*a.length),n.push(a[e]);return n}}]),t}()},60:function(t,e,n){"use strict";var r=n(12),o=n(18),i=n(15),a=n(35),s=n(26),u=n(16),c=n(40).f,l=n(24).f,f=n(21).f,p=n(61).trim,h=r.Number,m=h,d=h.prototype,y="Number"==i(n(48)(d)),g="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>o)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(y?u(function(){d.valueOf.call(n)}):"Number"!=i(n))?a(new m(b(e)),n,h):b(e)};for(var v,x=n(11)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)o(m,v=x[w])&&!o(h,v)&&f(h,v,l(m,v));h.prototype=d,d.constructor=h,n(25)(r,"Number",h)}},61:function(t,e,n){var r=n(13),o=n(20),i=n(16),a=n(62),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var o={},s=i(function(){return!!a[t]()||"​"!="​"[t]()}),u=o[t]=s?e(f):a[t];n&&(o[n]=u),r(r.P+r.F*s,"String",o)},f=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},62:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},66:function(t,e,n){"use strict";n.r(e);n(51),n(60);var r=n(52),o=n(78),i={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?r.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return r.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},a=n(0),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})},[],!1,null,null,null);e.default=s.exports}}]);