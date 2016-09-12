// @codekit-append "/libs/system-register-only.js";
// @codekit-append "/libs/redux.min.js";
// @codekit-append "/libs/Rx.umd.min.js";
// @codekit-append "/libs/redux-observable.min.js";
// @codekit-append "/libs/lodash.min.js";
// @codekit-append "/libs/xml2json.min.js";

// Snabbdom
// @codekit-append "/libs/snabbdom/snabbdom.min.js";
// @codekit-append "/libs/snabbdom/h.min.js";
// @codekit-append "/libs/snabbdom/snabbdom_class.min.js";
// @codekit-append "/libs/snabbdom/snabbdom_props.min.js";
// @codekit-append "/libs/snabbdom/snabbdom_style.min.js";
// @codekit-append "/libs/snabbdom/snabbdom_attributes.min.js";

// Materialize
// @codekit-append "/libs/materialize-js/velocity.min.js";
// @codekit-append "/libs/materialize-js/hammer.min.js";
// @codekit-append "/libs/materialize-js/jquery.easing.1.3.js";
// @codekit-append "/libs/materialize-js/jquery.hammer.js";
// @codekit-append "/libs/materialize-js/initial.js";
// @codekit-append "/libs/materialize-js/global.js";
// @codekit-append "/libs/materialize-js/animation.js";
// @codekit-append "/libs/materialize-js/cards.js";
// @codekit-append "/libs/materialize-js/carousel.js";
// @codekit-append "/libs/materialize-js/leanModal.js";
// @codekit-append "/libs/materialize-js/tooltip.js";
// @codekit-append "/libs/materialize-js/forms.js";


/*
 * SystemJS v0.19.36
 */
!function(e){function t(e,n){if("string"!=typeof e)throw new TypeError("URL must be a string");var r=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!r)throw new RangeError("Invalid URL format");var a=r[1]||"",o=r[2]||"",i=r[3]||"",s=r[4]||"",d=r[5]||"",l=r[6]||"",u=r[7]||"",c=r[8]||"",f=r[9]||"";if(void 0!==n){var m=n instanceof t?n:new t(n),p=!a&&!s&&!o;!p||u||c||(c=m.search),p&&"/"!==u[0]&&(u=u?(!m.host&&!m.username||m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+u:m.pathname);var h=[];u.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?h.pop():h.push(e)}),u=h.join("").replace(/^\//,"/"===u[0]?"/":""),p&&(l=m.port,d=m.hostname,s=m.host,i=m.password,o=m.username),a||(a=m.protocol)}"file:"==a&&(u=u.replace(/\\/g,"/")),this.origin=s?a+(""!==a||""!==s?"//":"")+s:"",this.href=a+(a&&s||"file:"==a?"//":"")+(""!==o?o+(""!==i?":"+i:"")+"@":"")+s+u+c+f,this.protocol=a,this.username=o,this.password=i,this.host=s,this.hostname=d,this.port=l,this.pathname=u,this.search=c,this.hash=f}e.URLPolyfill=t}("undefined"!=typeof self?self:global),function(e){function t(e,t){if(!e.originalErr)for(var n=((e.message||e)+(e.stack?"\n"+e.stack:"")).toString().split("\n"),r=[],a=0;a<n.length;a++)("undefined"==typeof $__curScript||-1==n[a].indexOf($__curScript.src))&&r.push(n[a]);var o="(SystemJS) "+(r?r.join("\n	"):e.message.substr(11))+"\n	"+t;y||(o=o.replace(b?/file:\/\/\//g:/file:\/\//g,""));var i=E?new Error(o,e.fileName,e.lineNumber):new Error(o);return y?i.stack=null:i.stack=o,i.originalErr=e.originalErr||e,i}function n(){}function r(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},w(this,"global",{get:function(){return e}})}function a(){r.call(this),this.paths={},this._loader.paths={},M.call(this)}function o(){}function i(e,t){a.prototype[e]=t(a.prototype[e]||function(){})}function s(e){M=e(M||function(){})}function d(e){return"."==e[0]&&(!e[1]||"/"==e[1]||"."==e[1])||"/"==e[0]}function l(e,t){if("."==e[0]){if("/"==e[1]&&"."!=e[2])return(t&&t.substr(0,t.lastIndexOf("/")+1)||S)+e.substr(2)}else if("/"!=e[0]&&-1==e.indexOf(":"))return(t&&t.substr(0,t.lastIndexOf("/")+1)||S)+e;return new j(e,t&&t.replace(/#/g,"%05")||R).href.replace(/%05/g,"#")}function u(e,t){var n,r="",a=0,o=e.paths,i=e._loader.paths;for(var s in o)if(!o.hasOwnProperty||o.hasOwnProperty(s)){var u=o[s];if(u!==i[s]&&(u=o[s]=i[s]=l(o[s],d(o[s])?S:e.baseURL)),-1===s.indexOf("*")){if(t==s)return o[s];if(t.substr(0,s.length-1)==s.substr(0,s.length-1)&&(t.length<s.length||t[s.length-1]==s[s.length-1])&&("/"==o[s][o[s].length-1]||""==o[s]))return o[s].substr(0,o[s].length-1)+(t.length>s.length?(o[s]&&"/"||"")+t.substr(s.length):"")}else{var c=s.split("*");if(c.length>2)throw new TypeError("Only one wildcard in a path is permitted");var f=c[0].length;f>=a&&t.substr(0,c[0].length)==c[0]&&t.substr(t.length-c[1].length)==c[1]&&(a=f,r=s,n=t.substr(c[0].length,t.length-c[1].length-c[0].length))}}var m=o[r];return"string"==typeof n&&(m=m.replace("*",n)),m}function c(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=x.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function f(t){var n={};if(("object"==typeof t||"function"==typeof t)&&t!==e)if(z)for(var r in t)"default"!==r&&m(n,t,r);else p(n,t);return n["default"]=t,w(n,"__useDefault",{value:!0}),n}function m(e,t,n){try{var r;(r=Object.getOwnPropertyDescriptor(t,n))&&w(e,n,r)}catch(a){return e[n]=t[n],!1}}function p(e,t,n){var r=t&&t.hasOwnProperty;for(var a in t)(!r||t.hasOwnProperty(a))&&(n&&a in e||(e[a]=t[a]));return e}function h(e){var t=e.match(D);return t&&"System.register"==e.substr(t[0].length,15)}function g(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}var v="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,y="undefined"!=typeof window&&"undefined"!=typeof document,b="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var w,x=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(w=Object.defineProperty)}catch(e){w=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var S,E="_"==new Error(0,"_").fileName;if("undefined"!=typeof document&&document.getElementsByTagName){if(S=document.baseURI,!S){var O=document.getElementsByTagName("base");S=O[0]&&O[0].href||window.location.href}}else"undefined"!=typeof location&&(S=e.location.href);if(S)S=S.split("#")[0].split("?")[0],S=S.substr(0,S.lastIndexOf("/")+1);else{if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURI");S="file://"+(b?"/":"")+process.cwd()+"/",b&&(S=S.replace(/\\/g,"/"))}try{var _="test:"==new e.URL("test:///").protocol}catch(P){}var j=_?e.URL:e.URLPolyfill;w(n.prototype,"toString",{value:function(){return"Module"}}),function(){function e(e){return{status:"loading",name:e||"<Anonymous"+ ++b+">",linkSets:[],dependencies:[],metadata:{}}}function a(e,t,n){return new Promise(l({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function o(t,n,r,a){return new Promise(function(e,o){e(t.loaderObj.normalize(n,r,a))}).then(function(n){var r;if(t.modules[n])return r=e(n),r.status="linked",r.module=t.modules[n],r;for(var a=0,o=t.loads.length;o>a;a++)if(r=t.loads[a],r.name==n)return r;return r=e(n),t.loads.push(r),i(t,r),r})}function i(e,t){s(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function s(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(e,t,n){n.then(function(n){return"loading"==t.status?(t.address=t.address||t.name,Promise.resolve(e.loaderObj.translate({name:t.name,metadata:t.metadata,address:t.address,source:n})).then(function(n){return t.source=n,e.loaderObj.instantiate({name:t.name,metadata:t.metadata,address:t.address,source:n})}).then(function(e){if(void 0===e)throw new TypeError("Declarative modules unsupported in the polyfill.");if("object"!=typeof e)throw new TypeError("Invalid instantiate return value");t.depsList=e.deps||[],t.execute=e.execute}).then(function(){t.dependencies=[];for(var n=t.depsList,r=[],a=0,i=n.length;i>a;a++)(function(n,a){r.push(o(e,n,t.name,t.address).then(function(e){if(t.dependencies[a]={key:n,value:e.name},"linked"!=e.status)for(var r=t.linkSets.concat([]),o=0,i=r.length;i>o;o++)c(r[o],e)}))})(n[a],a);return Promise.all(r)}).then(function(){t.status="loaded";for(var e=t.linkSets.concat([]),n=0,r=e.length;r>n;n++)m(e[n],t)})):void 0})["catch"](function(e){t.status="failed",t.exception=e;for(var n=t.linkSets.concat([]),r=0,a=n.length;a>r;r++)p(n[r],t,e)})}function l(t){return function(n,r){var a=t.loader,o=t.moduleName,l=t.step;if(a.modules[o])throw new TypeError('"'+o+'" already exists in the module table');for(var c,f=0,m=a.loads.length;m>f;f++)if(a.loads[f].name==o&&(c=a.loads[f],"translate"!=l||c.source||(c.address=t.moduleAddress,d(a,c,Promise.resolve(t.moduleSource))),c.linkSets.length&&c.linkSets[0].loads[0].name==c.name))return c.linkSets[0].done.then(function(){n(c)});var p=c||e(o);p.metadata=t.moduleMetadata;var h=u(a,p);a.loads.push(p),n(h.done),"locate"==l?i(a,p):"fetch"==l?s(a,p,Promise.resolve(t.moduleAddress)):(p.address=t.moduleAddress,d(a,p,Promise.resolve(t.moduleSource)))}}function u(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),c(n,t),n}function c(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var i=0,s=a.loads.length;s>i;i++)if(a.loads[i].name==o){c(e,a.loads[i]);break}}}}function f(e){var t=!1;try{y(e,function(n,r){p(e,n,r),t=!0})}catch(n){p(e,null,n),t=!0}return t}function m(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module={name:t.name,module:S({}),evaluated:!0},t.status="linked",h(e.loader,t)}return e.resolve(n)}var i=f(e);i||e.resolve(n)}}function p(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var i=e.loads[o],s=0;s<i.dependencies.length;s++){var d=i.dependencies[s];if(d.value==n.name){r=t(r,"Error loading "+n.name+' as "'+d.key+'" from '+i.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==x.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=x.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=x.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function h(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source}}t.name&&(e.modules[t.name]=t.module);var r=x.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=x.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function g(e,t,r){try{var a=t.execute()}catch(o){return void r(t,o)}return a&&a instanceof n?a:void r(t,new TypeError("Execution must define a Module instance"))}function v(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function y(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],i=g(e,o,t);if(!i)return;o.module={name:o.name,module:i},o.status="linked",h(n,o)}}var b=0;r.prototype={constructor:r,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return v(this,e,new Promise(l({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?this._loader.modules[e].module:void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?t.modules[e].module:t.importPromises[e]||v(r,e,a(t,e,{}).then(function(n){return delete t.importPromises[e],n.module.module}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||v(this,e,new Promise(l({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(t,n){var r=e();r.address=n&&n.address;var a=u(this._loader,r),o=Promise.resolve(t),i=this._loader,s=a.done.then(function(){return r.module.module});return d(i,r,o),s},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new n,r=[];if(Object.getOwnPropertyNames&&null!=e)r=Object.getOwnPropertyNames(e);else for(var a in e)r.push(a);for(var o=0;o<r.length;o++)(function(n){w(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(r[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof n))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var S=r.prototype.newModule}();var k;o.prototype=r.prototype,a.prototype=new o,a.prototype.constructor=a;var M,I=/^[^\/]+:\/\//,R=new j(S),z=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(P){z=!1}var I=/^([^\/]+:\/\/|\/)/;a.prototype.normalize=function(e,t,n){return e=e.match(I)||"."==e[0]?new j(e,t||S).href:new j(u(this,e)||e,S).href},function(){function t(){if(s&&"interactive"===s.script.readyState)return s.load;for(var e=0;e<u.length;e++)if("interactive"==u[e].script.readyState)return s=u[e],s.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),d=t;try{importScripts(t.address)}catch(r){d=null,n(r)}d=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s,d=null,l=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),u=[],c=0,f=[];i("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(d?this.reduceRegister_(d,n):l?this.reduceRegister_(t(),n):c?f.push(n):this.reduceRegister_(null,n),!0)}}),i("fetch",function(t){return function(i){var d=this;return"json"!=i.metadata.format&&i.metadata.scriptLoad&&(y||v)?v?n(d,i):new Promise(function(t,n){function m(e){if(!g.readyState||"loaded"==g.readyState||"complete"==g.readyState){if(c--,i.metadata.entry||f.length){if(!l){for(var r=0;r<f.length;r++)d.reduceRegister_(i,f[r]);f=[]}}else d.reduceRegister_(i);h(),i.metadata.entry||i.metadata.bundle||n(new Error(i.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function p(e){h(),n(new Error("Unable to load script "+i.address))}function h(){if(e.System=a,e.require=o,g.detachEvent){g.detachEvent("onreadystatechange",m);for(var t=0;t<u.length;t++)u[t].script==g&&(s&&s.script==g&&(s=null),u.splice(t,1))}else g.removeEventListener("load",m,!1),g.removeEventListener("error",p,!1);r.removeChild(g)}var g=document.createElement("script");g.async=!0,i.metadata.crossOrigin&&(g.crossOrigin=i.metadata.crossOrigin),i.metadata.integrity&&g.setAttribute("integrity",i.metadata.integrity),l?(g.attachEvent("onreadystatechange",m),u.push({script:g,load:i})):(g.addEventListener("load",m,!1),g.addEventListener("error",p,!1)),c++,a=e.System,o=e.require,g.src=i.address,r.appendChild(g)}):t.call(this,i)}})}();var D=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==x.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var i=e.normalizedDeps[a],s=n.defined[i];if(s&&!s.evaluated){var d=e.groupIndex+(s.declarative!=e.declarative);if(null===s.groupIndex||s.groupIndex<d){if(null!==s.groupIndex&&(r[s.groupIndex].splice(x.call(r[s.groupIndex],s),1),0==r[s.groupIndex].length))throw new Error("Mixed dependency cycle detected");s.groupIndex=d}t(s,n,r)}}}}function r(e,n,r){if(!n.module){n.groupIndex=0;var a=[];t(n,r,a);for(var o=!!n.declarative==a.length%2,i=a.length-1;i>=0;i--){for(var s=a[i],d=0;d<s.length;d++){var u=s[d];o?l(u,r):m(u,r)}o=!o}}}function o(){}function d(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new o,importers:[]})}function l(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=d(t.name,r),o=t.module.exports,i=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)o[n]=e[n];else o[e]=t;for(var r=0,i=a.importers.length;i>r;r++){var s=a.importers[r];if(!s.locked){var d=x.call(s.dependencies,a),l=s.setters[d];l&&l(o)}}return a.locked=!1,t},{id:t.name});if(i=i||{setters:[],execute:function(){}},a.setters=i.setters,a.execute=i.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var s=0,u=t.normalizedDeps.length;u>s;s++){var c,f=t.normalizedDeps[s],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(l(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[s],g=0,v=h.length;v>g;++g){var y=h[g];a.setters[y]&&a.setters[y](c)}}}}function u(e,t){var n,r=t.defined[e];if(r)r.declarative?p(e,r,[],t):r.evaluated||m(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function m(t,r){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var i=0,s=t.normalizedDeps.length;s>i;i++){var d=t.normalizedDeps[i],l=r.defined[d];l&&m(l,r)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var n=0,a=t.deps.length;a>n;n++)if(t.deps[n]==e)return u(t.normalizedDeps[n],r);var o=r.normalizeSync(e,t.name);if(-1!=x.call(t.normalizedDeps,o))return u(o,r);throw new Error("Module "+e+" not declared as a dependency of "+t.name)},a,o);c&&(o.exports=c),a=o.exports,a&&(a.__esModule||a instanceof n)?t.esModule=r.newModule(a):t.esmExports&&a!==e?t.esModule=r.newModule(f(a)):t.esModule=r.newModule({"default":a})}}function p(t,n,r,a){if(n&&!n.evaluated&&n.declarative){r.push(t);for(var o=0,i=n.normalizedDeps.length;i>o;o++){var s=n.normalizedDeps[o];-1==x.call(r,s)&&(a.defined[s]?p(s,a.defined[s],r,a):a.get(s))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}a.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=g();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},a.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=g();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},i("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&!r.entry&&n.name==e.name){if(!r)throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),s(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),w(o,"toString",{value:function(){return"Module"}}),i("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),i("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),i("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.apply(this,arguments)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&h(t.source))&&(t.metadata.format="register"),e})}}),i("load",function(e){return function(t){var n=this,a=n.defined[t];return!a||a.deps.length?e.apply(this,arguments):(a.originalIndices=a.normalizedDeps=[],r(t,a,n),p(t,a,[],n),a.esModule||(a.esModule=n.newModule(a.module.exports)),n.trace||(n.defined[t]=void 0),n.set(t,a.esModule),Promise.resolve())}}),i("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var n,a=this;if(a.defined[t.name])n=a.defined[t.name],n.declarative||(n.deps=n.deps.concat(t.metadata.deps)),n.deps=n.deps.concat(t.metadata.deps);else if(t.metadata.entry)n=t.metadata.entry,n.deps=n.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");n=t.metadata.entry,n&&t.metadata.deps&&(n.deps=n.deps.concat(t.metadata.deps))}n||(n=g(),n.deps=t.metadata.deps,n.execute=function(){}),a.defined[t.name]=n;var o=c(n.deps);n.deps=o.names,n.originalIndices=o.indices,n.name=t.name,n.esmExports=t.metadata.esmExports!==!1;for(var i=[],s=0,d=n.deps.length;d>s;s++)i.push(Promise.resolve(a.normalize(n.deps[s],t.name)));return Promise.all(i).then(function(e){return n.normalizedDeps=e,{deps:n.deps,execute:function(){return r(t.name,n,a),p(t.name,n,[],a),n.esModule||(n.esModule=a.newModule(n.module.exports)),a.trace||(a.defined[t.name]=void 0),n.esModule}}})}})}(),function(){s(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),i("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var i=n.bundles[a][o];if(i==t.name){r=!0;break}if(-1!=i.indexOf("*")){var s=i.split("*");if(2!=s.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,s[0].length)==s[0]&&t.name.substr(t.name.length-s[1].length,s[1].length)==s[1]&&-1==t.name.substr(s[0].length,t.name.length-s[1].length-s[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),s(function(t){return function(){t.apply(this,arguments),e.define=this.amdDefine}}),i("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),k=new a,e.SystemJS=k,k.version="0.19.36 Register Only","object"==typeof module&&module.exports&&"object"==typeof exports&&(module.exports=k),e.System=k}("undefined"!=typeof self?self:global);
//# sourceMappingURL=system-register-only.js.map


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),i=r(o),u=n(7),c=r(u),f=n(6),a=r(f),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=i["default"],e.combineReducers=c["default"],e.bindActionCreators=a["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===h&&(b=h.slice())}function i(){return v}function c(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function s(t){if(!(0,u["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(x)throw Error("Reducers may not dispatch actions.");try{x=!0,v=y(v,t)}finally{x=!1}for(var e=h=b,n=0;e.length>n;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");y=t,s({type:a.INIT})}function l(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[f["default"]]=function(){return this},t}var p;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var y=t,v=e,h=[],b=h,x=!1;return s({type:a.INIT}),p={dispatch:s,subscribe:c,getState:i,replaceReducer:d},p[f["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(4),u=r(i),c=n(11),f=r(c),a=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!u(t)||l.call(t)!=c||i(t))return!1;var e=o(t);if(null===e)return!0;var n=s.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==d}var o=n(8),i=n(9),u=n(10),c="[object Object]",f=Object.prototype,a=Function.prototype.toString,s=f.hasOwnProperty,d=a.call(Object),l=f.toString;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),f=u.dispatch,a=[],s={getState:u.getState,dispatch:function(t){return f(t)}};return a=e.map(function(t){return t(s)}),f=c["default"].apply(void 0,a)(u.dispatch),i({},u,{dispatch:f})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var u=n(1),c=r(u)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;r.length>i;i++){var u=r[i],c=t[u];"function"==typeof c&&(o[u]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var u=e[r];"function"==typeof t[u]&&(n[u]=t[u])}var c,f=Object.keys(n);try{i(n)}catch(a){c=a}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,i={},u=0;f.length>u;u++){var a=f[u],s=n[a],d=t[a],l=s(d,e);if(void 0===l){var p=o(a,e);throw Error(p)}i[a]=l,r=r||l!==d}return r?i:t}}e.__esModule=!0,e["default"]=u;var c=n(2),f=n(4),a=(r(f),n(3));r(a)},function(t,e){function n(t){return r(Object(t))}var r=Object.getPrototypeOf;t.exports=n},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){(function(e){"use strict";t.exports=n(12)(e||window||this)}).call(e,function(){return this}())},function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e="function"==typeof n["for"]?n["for"]("observable"):n("observable"),n.observable=e):e="@@observable",e}}])});

// Version 5.0.0 Beta 10

/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
(function(B){"object"===typeof exports&&"undefined"!==typeof module?module.exports=B():"function"===typeof define&&define.amd?define([],B):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).Rx=B()})(function(){return function a(b,f,h){function l(d,c){if(!f[d]){if(!b[d]){var e="function"==typeof require&&require;if(!c&&e)return e(d,!0);if(k)return k(d,!0);e=Error("Cannot find module '"+d+"'");throw e.code="MODULE_NOT_FOUND",e;}e=f[d]={exports:{}};
b[d][0].call(e.exports,function(a){var c=b[d][1][a];return l(c?c:a)},e,e.exports,a,b,f,h)}return f[d].exports}for(var k="function"==typeof require&&require,g=0;g<h.length;g++)l(h[g]);return l}({1:[function(a,b,f){var h=this&&this.__extends||function(a,g){function d(){this.constructor=a}for(var c in g)g.hasOwnProperty(c)&&(a[c]=g[c]);a.prototype=null===g?Object.create(g):(d.prototype=g.prototype,new d)};b=a("./Subject");var l=a("./Subscription");a=function(a){function g(){a.apply(this,arguments);this.value=
null;this.hasCompleted=this.hasNext=!1}h(g,a);g.prototype._subscribe=function(d){return this.hasCompleted&&this.hasNext?(d.next(this.value),d.complete(),l.Subscription.EMPTY):this.hasError?(d.error(this.thrownError),l.Subscription.EMPTY):a.prototype._subscribe.call(this,d)};g.prototype.next=function(a){this.value=a;this.hasNext=!0};g.prototype.complete=function(){this.hasCompleted=!0;this.hasNext&&a.prototype.next.call(this,this.value);a.prototype.complete.call(this)};return g}(b.Subject);f.AsyncSubject=
a},{"./Subject":11,"./Subscription":14}],2:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("./Subject");var l=a("./util/throwError"),k=a("./util/ObjectUnsubscribedError");a=function(a){function d(c){a.call(this);this._value=c}h(d,a);d.prototype.getValue=function(){if(this.hasError)l.throwError(this.thrownError);else if(this.isUnsubscribed)l.throwError(new k.ObjectUnsubscribedError);
else return this._value};Object.defineProperty(d.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0});d.prototype._subscribe=function(c){var e=a.prototype._subscribe.call(this,c);e&&!e.isUnsubscribed&&c.next(this._value);return e};d.prototype.next=function(c){a.prototype.next.call(this,this._value=c)};return d}(b.Subject);f.BehaviorSubject=a},{"./Subject":11,"./util/ObjectUnsubscribedError":317,"./util/throwError":333}],3:[function(a,b,f){var h=this&&this.__extends||
function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g,d,c){a.call(this);this.parent=g;this.outerValue=d;this.outerIndex=c;this.index=0}h(b,a);b.prototype._next=function(a){this.parent.notifyNext(this.outerValue,a,this.outerIndex,this.index++,this)};b.prototype._error=function(a){this.parent.notifyError(a,this);this.unsubscribe()};b.prototype._complete=function(){this.parent.notifyComplete(this);
this.unsubscribe()};return b}(a("./Subscriber").Subscriber);f.InnerSubscriber=a},{"./Subscriber":13}],4:[function(a,b,f){var h=a("./Observable");a=function(){function a(b,g,d){this.kind=b;this.value=g;this.exception=d;this.hasValue="N"===b}a.prototype.observe=function(a){switch(this.kind){case "N":return a.next&&a.next(this.value);case "E":return a.error&&a.error(this.exception);case "C":return a.complete&&a.complete()}};a.prototype["do"]=function(a,g,d){switch(this.kind){case "N":return a&&a(this.value);
case "E":return g&&g(this.exception);case "C":return d&&d()}};a.prototype.accept=function(a,g,d){return a&&"function"===typeof a.next?this.observe(a):this["do"](a,g,d)};a.prototype.toObservable=function(){switch(this.kind){case "N":return h.Observable.of(this.value);case "E":return h.Observable["throw"](this.exception);case "C":return h.Observable.empty()}};a.createNext=function(b){return"undefined"!==typeof b?new a("N",b):this.undefinedValueNotification};a.createError=function(b){return new a("E",
void 0,b)};a.createComplete=function(){return this.completeNotification};a.completeNotification=new a("C");a.undefinedValueNotification=new a("N",void 0);return a}();f.Notification=a},{"./Observable":5}],5:[function(a,b,f){var h=a("./util/root"),l=a("./util/toSubscriber"),k=a("symbol-observable");a=function(){function a(d){this._isScalar=!1;d&&(this._subscribe=d)}a.prototype.lift=function(d){var c=new a;c.source=this;c.operator=d;return c};a.prototype.subscribe=function(a,c,e){var m=this.operator;
a=l.toSubscriber(a,c,e);m?m.call(a,this):a.add(this._subscribe(a));if(a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a};a.prototype.forEach=function(a,c){var e=this;c||(h.root.Rx&&h.root.Rx.config&&h.root.Rx.config.Promise?c=h.root.Rx.config.Promise:h.root.Promise&&(c=h.root.Promise));if(!c)throw Error("no Promise impl found");return new c(function(c,n){var g=e.subscribe(function(c){if(g)try{a(c)}catch(e){n(e),g.unsubscribe()}else a(c)},n,c)})};a.prototype._subscribe=
function(a){return this.source.subscribe(a)};a.prototype[k["default"]]=function(){return this};a.create=function(d){return new a(d)};return a}();f.Observable=a},{"./util/root":331,"./util/toSubscriber":334,"symbol-observable":336}],6:[function(a,b,f){f.empty={isUnsubscribed:!0,next:function(a){},error:function(a){throw a;},complete:function(){}}},{}],7:[function(a,b,f){var h=a("./Subscriber");a=function(){function a(){}a.prototype.call=function(a,g){return g._subscribe(new h.Subscriber(a))};return a}();
f.Operator=a},{"./Subscriber":13}],8:[function(a,b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype.notifyNext=function(a,d,c,e,m){this.destination.next(d)};b.prototype.notifyError=function(a,d){this.destination.error(a)};b.prototype.notifyComplete=function(a){this.destination.complete()};
return b}(a("./Subscriber").Subscriber);f.OuterSubscriber=a},{"./Subscriber":13}],9:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var m in c)c.hasOwnProperty(m)&&(a[m]=c[m]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("./Subject");var l=a("./scheduler/queue"),k=a("./operator/observeOn");a=function(a){function c(c,m,n){void 0===c&&(c=Number.POSITIVE_INFINITY);void 0===m&&(m=Number.POSITIVE_INFINITY);a.call(this);this.scheduler=
n;this._events=[];this._bufferSize=1>c?1:c;this._windowTime=1>m?1:m}h(c,a);c.prototype.next=function(c){var m=this._getNow();this._events.push(new g(m,c));this._trimBufferThenGetEvents();a.prototype.next.call(this,c)};c.prototype._subscribe=function(c){var m=this._trimBufferThenGetEvents(),n=this.scheduler;n&&c.add(c=new k.ObserveOnSubscriber(c,n));for(var n=m.length,g=0;g<n&&!c.isUnsubscribed;g++)c.next(m[g].value);return a.prototype._subscribe.call(this,c)};c.prototype._getNow=function(){return(this.scheduler||
l.queue).now()};c.prototype._trimBufferThenGetEvents=function(){for(var a=this._getNow(),c=this._bufferSize,d=this._windowTime,g=this._events,b=g.length,f=0;f<b&&!(a-g[f].time<d);)f++;b>c&&(f=Math.max(f,b-c));0<f&&g.splice(0,f);return g};return c}(b.Subject);f.ReplaySubject=a;var g=function(){return function(a,c){this.time=a;this.value=c}}()},{"./Subject":11,"./operator/observeOn":243,"./scheduler/queue":302}],10:[function(a,b,f){b=a("./Subject");f.Subject=b.Subject;b=a("./Observable");f.Observable=
b.Observable;a("./add/observable/bindCallback");a("./add/observable/bindNodeCallback");a("./add/observable/combineLatest");a("./add/observable/concat");a("./add/observable/defer");a("./add/observable/empty");a("./add/observable/forkJoin");a("./add/observable/from");a("./add/observable/fromEvent");a("./add/observable/fromEventPattern");a("./add/observable/fromPromise");a("./add/observable/generate");a("./add/observable/if");a("./add/observable/interval");a("./add/observable/merge");a("./add/observable/race");
a("./add/observable/never");a("./add/observable/of");a("./add/observable/onErrorResumeNext");a("./add/observable/range");a("./add/observable/using");a("./add/observable/throw");a("./add/observable/timer");a("./add/observable/zip");a("./add/observable/dom/ajax");a("./add/observable/dom/webSocket");a("./add/operator/buffer");a("./add/operator/bufferCount");a("./add/operator/bufferTime");a("./add/operator/bufferToggle");a("./add/operator/bufferWhen");a("./add/operator/cache");a("./add/operator/catch");
a("./add/operator/combineAll");a("./add/operator/combineLatest");a("./add/operator/concat");a("./add/operator/concatAll");a("./add/operator/concatMap");a("./add/operator/concatMapTo");a("./add/operator/count");a("./add/operator/dematerialize");a("./add/operator/debounce");a("./add/operator/debounceTime");a("./add/operator/defaultIfEmpty");a("./add/operator/delay");a("./add/operator/delayWhen");a("./add/operator/distinct");a("./add/operator/distinctKey");a("./add/operator/distinctUntilChanged");a("./add/operator/distinctUntilKeyChanged");
a("./add/operator/do");a("./add/operator/exhaust");a("./add/operator/exhaustMap");a("./add/operator/expand");a("./add/operator/elementAt");a("./add/operator/filter");a("./add/operator/finally");a("./add/operator/find");a("./add/operator/findIndex");a("./add/operator/first");a("./add/operator/groupBy");a("./add/operator/ignoreElements");a("./add/operator/isEmpty");a("./add/operator/audit");a("./add/operator/auditTime");a("./add/operator/last");a("./add/operator/let");a("./add/operator/every");a("./add/operator/map");
a("./add/operator/mapTo");a("./add/operator/materialize");a("./add/operator/max");a("./add/operator/merge");a("./add/operator/mergeAll");a("./add/operator/mergeMap");a("./add/operator/mergeMapTo");a("./add/operator/mergeScan");a("./add/operator/min");a("./add/operator/multicast");a("./add/operator/observeOn");a("./add/operator/onErrorResumeNext");a("./add/operator/pairwise");a("./add/operator/partition");a("./add/operator/pluck");a("./add/operator/publish");a("./add/operator/publishBehavior");a("./add/operator/publishReplay");
a("./add/operator/publishLast");a("./add/operator/race");a("./add/operator/reduce");a("./add/operator/repeat");a("./add/operator/retry");a("./add/operator/retryWhen");a("./add/operator/sample");a("./add/operator/sampleTime");a("./add/operator/scan");a("./add/operator/share");a("./add/operator/single");a("./add/operator/skip");a("./add/operator/skipUntil");a("./add/operator/skipWhile");a("./add/operator/startWith");a("./add/operator/subscribeOn");a("./add/operator/switch");a("./add/operator/switchMap");
a("./add/operator/switchMapTo");a("./add/operator/take");a("./add/operator/takeLast");a("./add/operator/takeUntil");a("./add/operator/takeWhile");a("./add/operator/throttle");a("./add/operator/throttleTime");a("./add/operator/timeInterval");a("./add/operator/timeout");a("./add/operator/timeoutWith");a("./add/operator/timestamp");a("./add/operator/toArray");a("./add/operator/toPromise");a("./add/operator/window");a("./add/operator/windowCount");a("./add/operator/windowTime");a("./add/operator/windowToggle");
a("./add/operator/windowWhen");a("./add/operator/withLatestFrom");a("./add/operator/zip");a("./add/operator/zipAll");b=a("./Operator");f.Operator=b.Operator;b=a("./Subscription");f.Subscription=b.Subscription;b=a("./Subscriber");f.Subscriber=b.Subscriber;b=a("./AsyncSubject");f.AsyncSubject=b.AsyncSubject;b=a("./ReplaySubject");f.ReplaySubject=b.ReplaySubject;b=a("./BehaviorSubject");f.BehaviorSubject=b.BehaviorSubject;b=a("./observable/MulticastObservable");f.MulticastObservable=b.MulticastObservable;
b=a("./observable/ConnectableObservable");f.ConnectableObservable=b.ConnectableObservable;b=a("./Notification");f.Notification=b.Notification;b=a("./util/EmptyError");f.EmptyError=b.EmptyError;b=a("./util/ArgumentOutOfRangeError");f.ArgumentOutOfRangeError=b.ArgumentOutOfRangeError;b=a("./util/ObjectUnsubscribedError");f.ObjectUnsubscribedError=b.ObjectUnsubscribedError;b=a("./util/UnsubscriptionError");f.UnsubscriptionError=b.UnsubscriptionError;b=a("./operator/timeInterval");f.TimeInterval=b.TimeInterval;
b=a("./operator/timestamp");f.Timestamp=b.Timestamp;b=a("./testing/TestScheduler");f.TestScheduler=b.TestScheduler;b=a("./scheduler/VirtualTimeScheduler");f.VirtualTimeScheduler=b.VirtualTimeScheduler;b=a("./observable/dom/AjaxObservable");f.AjaxResponse=b.AjaxResponse;f.AjaxError=b.AjaxError;f.AjaxTimeoutError=b.AjaxTimeoutError;b=a("./scheduler/asap");var h=a("./scheduler/async"),l=a("./scheduler/queue"),k=a("./scheduler/animationFrame"),g=a("./symbol/rxSubscriber"),d=a("./symbol/iterator");a=a("symbol-observable");
f.Scheduler={asap:b.asap,queue:l.queue,animationFrame:k.animationFrame,async:h.async};f.Symbol={rxSubscriber:g.$$rxSubscriber,observable:a["default"],iterator:d.$$iterator}},{"./AsyncSubject":1,"./BehaviorSubject":2,"./Notification":4,"./Observable":5,"./Operator":7,"./ReplaySubject":9,"./Subject":11,"./Subscriber":13,"./Subscription":14,"./add/observable/bindCallback":15,"./add/observable/bindNodeCallback":16,"./add/observable/combineLatest":17,"./add/observable/concat":18,"./add/observable/defer":19,
"./add/observable/dom/ajax":20,"./add/observable/dom/webSocket":21,"./add/observable/empty":22,"./add/observable/forkJoin":23,"./add/observable/from":24,"./add/observable/fromEvent":25,"./add/observable/fromEventPattern":26,"./add/observable/fromPromise":27,"./add/observable/generate":28,"./add/observable/if":29,"./add/observable/interval":30,"./add/observable/merge":31,"./add/observable/never":32,"./add/observable/of":33,"./add/observable/onErrorResumeNext":34,"./add/observable/race":35,"./add/observable/range":36,
"./add/observable/throw":37,"./add/observable/timer":38,"./add/observable/using":39,"./add/observable/zip":40,"./add/operator/audit":41,"./add/operator/auditTime":42,"./add/operator/buffer":43,"./add/operator/bufferCount":44,"./add/operator/bufferTime":45,"./add/operator/bufferToggle":46,"./add/operator/bufferWhen":47,"./add/operator/cache":48,"./add/operator/catch":49,"./add/operator/combineAll":50,"./add/operator/combineLatest":51,"./add/operator/concat":52,"./add/operator/concatAll":53,"./add/operator/concatMap":54,
"./add/operator/concatMapTo":55,"./add/operator/count":56,"./add/operator/debounce":57,"./add/operator/debounceTime":58,"./add/operator/defaultIfEmpty":59,"./add/operator/delay":60,"./add/operator/delayWhen":61,"./add/operator/dematerialize":62,"./add/operator/distinct":63,"./add/operator/distinctKey":64,"./add/operator/distinctUntilChanged":65,"./add/operator/distinctUntilKeyChanged":66,"./add/operator/do":67,"./add/operator/elementAt":68,"./add/operator/every":69,"./add/operator/exhaust":70,"./add/operator/exhaustMap":71,
"./add/operator/expand":72,"./add/operator/filter":73,"./add/operator/finally":74,"./add/operator/find":75,"./add/operator/findIndex":76,"./add/operator/first":77,"./add/operator/groupBy":78,"./add/operator/ignoreElements":79,"./add/operator/isEmpty":80,"./add/operator/last":81,"./add/operator/let":82,"./add/operator/map":83,"./add/operator/mapTo":84,"./add/operator/materialize":85,"./add/operator/max":86,"./add/operator/merge":87,"./add/operator/mergeAll":88,"./add/operator/mergeMap":89,"./add/operator/mergeMapTo":90,
"./add/operator/mergeScan":91,"./add/operator/min":92,"./add/operator/multicast":93,"./add/operator/observeOn":94,"./add/operator/onErrorResumeNext":95,"./add/operator/pairwise":96,"./add/operator/partition":97,"./add/operator/pluck":98,"./add/operator/publish":99,"./add/operator/publishBehavior":100,"./add/operator/publishLast":101,"./add/operator/publishReplay":102,"./add/operator/race":103,"./add/operator/reduce":104,"./add/operator/repeat":105,"./add/operator/retry":106,"./add/operator/retryWhen":107,
"./add/operator/sample":108,"./add/operator/sampleTime":109,"./add/operator/scan":110,"./add/operator/share":111,"./add/operator/single":112,"./add/operator/skip":113,"./add/operator/skipUntil":114,"./add/operator/skipWhile":115,"./add/operator/startWith":116,"./add/operator/subscribeOn":117,"./add/operator/switch":118,"./add/operator/switchMap":119,"./add/operator/switchMapTo":120,"./add/operator/take":121,"./add/operator/takeLast":122,"./add/operator/takeUntil":123,"./add/operator/takeWhile":124,
"./add/operator/throttle":125,"./add/operator/throttleTime":126,"./add/operator/timeInterval":127,"./add/operator/timeout":128,"./add/operator/timeoutWith":129,"./add/operator/timestamp":130,"./add/operator/toArray":131,"./add/operator/toPromise":132,"./add/operator/window":133,"./add/operator/windowCount":134,"./add/operator/windowTime":135,"./add/operator/windowToggle":136,"./add/operator/windowWhen":137,"./add/operator/withLatestFrom":138,"./add/operator/zip":139,"./add/operator/zipAll":140,"./observable/ConnectableObservable":145,
"./observable/MulticastObservable":157,"./observable/dom/AjaxObservable":170,"./operator/timeInterval":276,"./operator/timestamp":279,"./scheduler/VirtualTimeScheduler":298,"./scheduler/animationFrame":299,"./scheduler/asap":300,"./scheduler/async":301,"./scheduler/queue":302,"./symbol/iterator":303,"./symbol/rxSubscriber":304,"./testing/TestScheduler":309,"./util/ArgumentOutOfRangeError":311,"./util/EmptyError":312,"./util/ObjectUnsubscribedError":317,"./util/UnsubscriptionError":318,"symbol-observable":336}],
11:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("./Observable");b=a("./Subscriber");var k=a("./Subscription"),g=a("./util/ObjectUnsubscribedError"),d=a("./SubjectSubscription"),c=a("./symbol/rxSubscriber"),e=function(a){function c(e){a.call(this,e);this.destination=e}h(c,a);return c}(b.Subscriber);f.SubjectSubscriber=e;a=function(a){function b(){a.call(this);
this.observers=[];this.hasError=this.isStopped=this.isUnsubscribed=!1;this.thrownError=null}h(b,a);b.prototype[c.$$rxSubscriber]=function(){return new e(this)};b.prototype.lift=function(a){var c=new m(this,this);c.operator=a;return c};b.prototype.next=function(a){if(this.isUnsubscribed)throw new g.ObjectUnsubscribedError;if(!this.isStopped)for(var c=this.observers,e=c.length,c=c.slice(),d=0;d<e;d++)c[d].next(a)};b.prototype.error=function(a){if(this.isUnsubscribed)throw new g.ObjectUnsubscribedError;
this.hasError=!0;this.thrownError=a;this.isStopped=!0;for(var c=this.observers,e=c.length,c=c.slice(),d=0;d<e;d++)c[d].error(a);this.observers.length=0};b.prototype.complete=function(){if(this.isUnsubscribed)throw new g.ObjectUnsubscribedError;this.isStopped=!0;for(var a=this.observers,c=a.length,a=a.slice(),e=0;e<c;e++)a[e].complete();this.observers.length=0};b.prototype.unsubscribe=function(){this.isUnsubscribed=this.isStopped=!0;this.observers=null};b.prototype._subscribe=function(a){if(this.isUnsubscribed)throw new g.ObjectUnsubscribedError;
if(this.hasError)return a.error(this.thrownError),k.Subscription.EMPTY;if(this.isStopped)return a.complete(),k.Subscription.EMPTY;this.observers.push(a);return new d.SubjectSubscription(this,a)};b.prototype.asObservable=function(){var a=new l.Observable;a.source=this;return a};b.create=function(a,c){return new m(a,c)};return b}(l.Observable);f.Subject=a;var m=function(a){function c(e,d){a.call(this);this.destination=e;this.source=d}h(c,a);c.prototype.next=function(a){var c=this.destination;c&&c.next&&
c.next(a)};c.prototype.error=function(a){var c=this.destination;c&&c.error&&this.destination.error(a)};c.prototype.complete=function(){var a=this.destination;a&&a.complete&&this.destination.complete()};c.prototype._subscribe=function(a){return this.source?this.source.subscribe(a):k.Subscription.EMPTY};return c}(a);f.AnonymousSubject=m},{"./Observable":5,"./SubjectSubscription":12,"./Subscriber":13,"./Subscription":14,"./symbol/rxSubscriber":304,"./util/ObjectUnsubscribedError":317}],12:[function(a,
b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g,d){a.call(this);this.subject=g;this.subscriber=d;this.isUnsubscribed=!1}h(b,a);b.prototype.unsubscribe=function(){if(!this.isUnsubscribed){this.isUnsubscribed=!0;var a=this.subject,d=a.observers;this.subject=null;!d||0===d.length||a.isStopped||a.isUnsubscribed||(a=d.indexOf(this.subscriber),
-1!==a&&d.splice(a,1))}};return b}(a("./Subscription").Subscription);f.SubjectSubscription=a},{"./Subscription":14}],13:[function(a,b,f){var h=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var n in e)e.hasOwnProperty(n)&&(a[n]=e[n]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)},l=a("./util/isFunction");b=a("./Subscription");var k=a("./Observer"),g=a("./symbol/rxSubscriber");a=function(a){function e(m,n,b){a.call(this);this.syncErrorValue=null;this.isStopped=
this.syncErrorThrowable=this.syncErrorThrown=!1;switch(arguments.length){case 0:this.destination=k.empty;break;case 1:if(!m){this.destination=k.empty;break}if("object"===typeof m){m instanceof e?(this.destination=m,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new d(this,m));break}default:this.syncErrorThrowable=!0,this.destination=new d(this,m,n,b)}}h(e,a);e.prototype[g.$$rxSubscriber]=function(){return this};e.create=function(a,c,d){a=new e(a,c,d);a.syncErrorThrowable=
!1;return a};e.prototype.next=function(a){this.isStopped||this._next(a)};e.prototype.error=function(a){this.isStopped||(this.isStopped=!0,this._error(a))};e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())};e.prototype.unsubscribe=function(){this.isUnsubscribed||(this.isStopped=!0,a.prototype.unsubscribe.call(this))};e.prototype._next=function(a){this.destination.next(a)};e.prototype._error=function(a){this.destination.error(a);this.unsubscribe()};e.prototype._complete=
function(){this.destination.complete();this.unsubscribe()};return e}(b.Subscription);f.Subscriber=a;var d=function(a){function e(e,d,b,g){a.call(this);this._parent=e;var f;e=this;l.isFunction(d)?f=d:d&&(e=d,f=d.next,b=d.error,g=d.complete,l.isFunction(e.unsubscribe)&&this.add(e.unsubscribe.bind(e)),e.unsubscribe=this.unsubscribe.bind(this));this._context=e;this._next=f;this._error=b;this._complete=g}h(e,a);e.prototype.next=function(a){if(!this.isStopped&&this._next){var c=this._parent;c.syncErrorThrowable?
this.__tryOrSetError(c,this._next,a)&&this.unsubscribe():this.__tryOrUnsub(this._next,a)}};e.prototype.error=function(a){if(!this.isStopped){var c=this._parent;if(this._error)c.syncErrorThrowable?this.__tryOrSetError(c,this._error,a):this.__tryOrUnsub(this._error,a),this.unsubscribe();else if(c.syncErrorThrowable)c.syncErrorValue=a,c.syncErrorThrown=!0,this.unsubscribe();else throw this.unsubscribe(),a;}};e.prototype.complete=function(){if(!this.isStopped){var a=this._parent;this._complete&&(a.syncErrorThrowable?
this.__tryOrSetError(a,this._complete):this.__tryOrUnsub(this._complete));this.unsubscribe()}};e.prototype.__tryOrUnsub=function(a,c){try{a.call(this._context,c)}catch(e){throw this.unsubscribe(),e;}};e.prototype.__tryOrSetError=function(a,c,e){try{c.call(this._context,e)}catch(d){return a.syncErrorValue=d,a.syncErrorThrown=!0}return!1};e.prototype._unsubscribe=function(){var a=this._parent;this._parent=this._context=null;a.unsubscribe()};return e}(a)},{"./Observer":6,"./Subscription":14,"./symbol/rxSubscriber":304,
"./util/isFunction":324}],14:[function(a,b,f){var h=a("./util/isArray"),l=a("./util/isObject"),k=a("./util/isFunction"),g=a("./util/tryCatch"),d=a("./util/errorObject"),c=a("./util/UnsubscriptionError");a=function(){function a(c){this.isUnsubscribed=!1;c&&(this._unsubscribe=c)}a.prototype.unsubscribe=function(){var a=!1,e;if(!this.isUnsubscribed){this.isUnsubscribed=!0;var b=this._unsubscribe,f=this._subscriptions;this._subscriptions=null;if(k.isFunction(b)){var p=g.tryCatch(b).call(this);p===d.errorObject&&
(a=!0,(e=e||[]).push(d.errorObject.e))}if(h.isArray(f))for(var b=-1,u=f.length;++b<u;)p=f[b],l.isObject(p)&&(p=g.tryCatch(p.unsubscribe).call(p),p===d.errorObject&&(a=!0,e=e||[],p=d.errorObject.e,p instanceof c.UnsubscriptionError?e=e.concat(p.errors):e.push(p)));if(a)throw new c.UnsubscriptionError(e);}};a.prototype.add=function(c){if(c&&c!==this&&c!==a.EMPTY){var d=c;switch(typeof c){case "function":d=new a(c);case "object":d.isUnsubscribed||"function"!==typeof d.unsubscribe||(this.isUnsubscribed?
d.unsubscribe():(this._subscriptions||(this._subscriptions=[])).push(d));break;default:throw Error("Unrecognized teardown "+c+" added to Subscription.");}return d}};a.prototype.remove=function(c){if(null!=c&&c!==this&&c!==a.EMPTY){var d=this._subscriptions;d&&(c=d.indexOf(c),-1!==c&&d.splice(c,1))}};a.EMPTY=function(a){a.isUnsubscribed=!0;return a}(new a);return a}();f.Subscription=a},{"./util/UnsubscriptionError":318,"./util/errorObject":321,"./util/isArray":322,"./util/isFunction":324,"./util/isObject":326,
"./util/tryCatch":335}],15:[function(a,b,f){b=a("../../Observable");a=a("../../observable/bindCallback");b.Observable.bindCallback=a.bindCallback},{"../../Observable":5,"../../observable/bindCallback":165}],16:[function(a,b,f){b=a("../../Observable");a=a("../../observable/bindNodeCallback");b.Observable.bindNodeCallback=a.bindNodeCallback},{"../../Observable":5,"../../observable/bindNodeCallback":166}],17:[function(a,b,f){b=a("../../Observable");a=a("../../observable/combineLatest");b.Observable.combineLatest=
a.combineLatest},{"../../Observable":5,"../../observable/combineLatest":167}],18:[function(a,b,f){b=a("../../Observable");a=a("../../observable/concat");b.Observable.concat=a.concat},{"../../Observable":5,"../../observable/concat":168}],19:[function(a,b,f){b=a("../../Observable");a=a("../../observable/defer");b.Observable.defer=a.defer},{"../../Observable":5,"../../observable/defer":169}],20:[function(a,b,f){b=a("../../../Observable");a=a("../../../observable/dom/ajax");b.Observable.ajax=a.ajax},
{"../../../Observable":5,"../../../observable/dom/ajax":172}],21:[function(a,b,f){b=a("../../../Observable");a=a("../../../observable/dom/webSocket");b.Observable.webSocket=a.webSocket},{"../../../Observable":5,"../../../observable/dom/webSocket":173}],22:[function(a,b,f){b=a("../../Observable");a=a("../../observable/empty");b.Observable.empty=a.empty},{"../../Observable":5,"../../observable/empty":174}],23:[function(a,b,f){b=a("../../Observable");a=a("../../observable/forkJoin");b.Observable.forkJoin=
a.forkJoin},{"../../Observable":5,"../../observable/forkJoin":175}],24:[function(a,b,f){b=a("../../Observable");a=a("../../observable/from");b.Observable.from=a.from},{"../../Observable":5,"../../observable/from":176}],25:[function(a,b,f){b=a("../../Observable");a=a("../../observable/fromEvent");b.Observable.fromEvent=a.fromEvent},{"../../Observable":5,"../../observable/fromEvent":177}],26:[function(a,b,f){b=a("../../Observable");a=a("../../observable/fromEventPattern");b.Observable.fromEventPattern=
a.fromEventPattern},{"../../Observable":5,"../../observable/fromEventPattern":178}],27:[function(a,b,f){b=a("../../Observable");a=a("../../observable/fromPromise");b.Observable.fromPromise=a.fromPromise},{"../../Observable":5,"../../observable/fromPromise":179}],28:[function(a,b,f){b=a("../../Observable");a=a("../../observable/GenerateObservable");b.Observable.generate=a.GenerateObservable.create},{"../../Observable":5,"../../observable/GenerateObservable":153}],29:[function(a,b,f){b=a("../../Observable");
a=a("../../observable/if");b.Observable["if"]=a._if},{"../../Observable":5,"../../observable/if":180}],30:[function(a,b,f){b=a("../../Observable");a=a("../../observable/interval");b.Observable.interval=a.interval},{"../../Observable":5,"../../observable/interval":181}],31:[function(a,b,f){b=a("../../Observable");a=a("../../observable/merge");b.Observable.merge=a.merge},{"../../Observable":5,"../../observable/merge":182}],32:[function(a,b,f){b=a("../../Observable");a=a("../../observable/never");b.Observable.never=
a.never},{"../../Observable":5,"../../observable/never":183}],33:[function(a,b,f){b=a("../../Observable");a=a("../../observable/of");b.Observable.of=a.of},{"../../Observable":5,"../../observable/of":184}],34:[function(a,b,f){b=a("../../Observable");a=a("../../operator/onErrorResumeNext");b.Observable.onErrorResumeNext=a.onErrorResumeNextStatic},{"../../Observable":5,"../../operator/onErrorResumeNext":244}],35:[function(a,b,f){b=a("../../Observable");a=a("../../operator/race");b.Observable.race=a.raceStatic},
{"../../Observable":5,"../../operator/race":252}],36:[function(a,b,f){b=a("../../Observable");a=a("../../observable/range");b.Observable.range=a.range},{"../../Observable":5,"../../observable/range":185}],37:[function(a,b,f){b=a("../../Observable");a=a("../../observable/throw");b.Observable["throw"]=a._throw},{"../../Observable":5,"../../observable/throw":186}],38:[function(a,b,f){b=a("../../Observable");a=a("../../observable/timer");b.Observable.timer=a.timer},{"../../Observable":5,"../../observable/timer":187}],
39:[function(a,b,f){b=a("../../Observable");a=a("../../observable/using");b.Observable.using=a.using},{"../../Observable":5,"../../observable/using":188}],40:[function(a,b,f){b=a("../../Observable");a=a("../../observable/zip");b.Observable.zip=a.zip},{"../../Observable":5,"../../observable/zip":189}],41:[function(a,b,f){b=a("../../Observable");a=a("../../operator/audit");b.Observable.prototype.audit=a.audit},{"../../Observable":5,"../../operator/audit":190}],42:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/auditTime");b.Observable.prototype.auditTime=a.auditTime},{"../../Observable":5,"../../operator/auditTime":191}],43:[function(a,b,f){b=a("../../Observable");a=a("../../operator/buffer");b.Observable.prototype.buffer=a.buffer},{"../../Observable":5,"../../operator/buffer":192}],44:[function(a,b,f){b=a("../../Observable");a=a("../../operator/bufferCount");b.Observable.prototype.bufferCount=a.bufferCount},{"../../Observable":5,"../../operator/bufferCount":193}],45:[function(a,b,f){b=
a("../../Observable");a=a("../../operator/bufferTime");b.Observable.prototype.bufferTime=a.bufferTime},{"../../Observable":5,"../../operator/bufferTime":194}],46:[function(a,b,f){b=a("../../Observable");a=a("../../operator/bufferToggle");b.Observable.prototype.bufferToggle=a.bufferToggle},{"../../Observable":5,"../../operator/bufferToggle":195}],47:[function(a,b,f){b=a("../../Observable");a=a("../../operator/bufferWhen");b.Observable.prototype.bufferWhen=a.bufferWhen},{"../../Observable":5,"../../operator/bufferWhen":196}],
48:[function(a,b,f){b=a("../../Observable");a=a("../../operator/cache");b.Observable.prototype.cache=a.cache},{"../../Observable":5,"../../operator/cache":197}],49:[function(a,b,f){b=a("../../Observable");a=a("../../operator/catch");b.Observable.prototype["catch"]=a._catch},{"../../Observable":5,"../../operator/catch":198}],50:[function(a,b,f){b=a("../../Observable");a=a("../../operator/combineAll");b.Observable.prototype.combineAll=a.combineAll},{"../../Observable":5,"../../operator/combineAll":199}],
51:[function(a,b,f){b=a("../../Observable");a=a("../../operator/combineLatest");b.Observable.prototype.combineLatest=a.combineLatest},{"../../Observable":5,"../../operator/combineLatest":200}],52:[function(a,b,f){b=a("../../Observable");a=a("../../operator/concat");b.Observable.prototype.concat=a.concat},{"../../Observable":5,"../../operator/concat":201}],53:[function(a,b,f){b=a("../../Observable");a=a("../../operator/concatAll");b.Observable.prototype.concatAll=a.concatAll},{"../../Observable":5,
"../../operator/concatAll":202}],54:[function(a,b,f){b=a("../../Observable");a=a("../../operator/concatMap");b.Observable.prototype.concatMap=a.concatMap},{"../../Observable":5,"../../operator/concatMap":203}],55:[function(a,b,f){b=a("../../Observable");a=a("../../operator/concatMapTo");b.Observable.prototype.concatMapTo=a.concatMapTo},{"../../Observable":5,"../../operator/concatMapTo":204}],56:[function(a,b,f){b=a("../../Observable");a=a("../../operator/count");b.Observable.prototype.count=a.count},
{"../../Observable":5,"../../operator/count":205}],57:[function(a,b,f){b=a("../../Observable");a=a("../../operator/debounce");b.Observable.prototype.debounce=a.debounce},{"../../Observable":5,"../../operator/debounce":206}],58:[function(a,b,f){b=a("../../Observable");a=a("../../operator/debounceTime");b.Observable.prototype.debounceTime=a.debounceTime},{"../../Observable":5,"../../operator/debounceTime":207}],59:[function(a,b,f){b=a("../../Observable");a=a("../../operator/defaultIfEmpty");b.Observable.prototype.defaultIfEmpty=
a.defaultIfEmpty},{"../../Observable":5,"../../operator/defaultIfEmpty":208}],60:[function(a,b,f){b=a("../../Observable");a=a("../../operator/delay");b.Observable.prototype.delay=a.delay},{"../../Observable":5,"../../operator/delay":209}],61:[function(a,b,f){b=a("../../Observable");a=a("../../operator/delayWhen");b.Observable.prototype.delayWhen=a.delayWhen},{"../../Observable":5,"../../operator/delayWhen":210}],62:[function(a,b,f){b=a("../../Observable");a=a("../../operator/dematerialize");b.Observable.prototype.dematerialize=
a.dematerialize},{"../../Observable":5,"../../operator/dematerialize":211}],63:[function(a,b,f){b=a("../../Observable");a=a("../../operator/distinct");b.Observable.prototype.distinct=a.distinct},{"../../Observable":5,"../../operator/distinct":212}],64:[function(a,b,f){b=a("../../Observable");a=a("../../operator/distinctKey");b.Observable.prototype.distinctKey=a.distinctKey},{"../../Observable":5,"../../operator/distinctKey":213}],65:[function(a,b,f){b=a("../../Observable");a=a("../../operator/distinctUntilChanged");
b.Observable.prototype.distinctUntilChanged=a.distinctUntilChanged},{"../../Observable":5,"../../operator/distinctUntilChanged":214}],66:[function(a,b,f){b=a("../../Observable");a=a("../../operator/distinctUntilKeyChanged");b.Observable.prototype.distinctUntilKeyChanged=a.distinctUntilKeyChanged},{"../../Observable":5,"../../operator/distinctUntilKeyChanged":215}],67:[function(a,b,f){b=a("../../Observable");a=a("../../operator/do");b.Observable.prototype["do"]=a._do},{"../../Observable":5,"../../operator/do":216}],
68:[function(a,b,f){b=a("../../Observable");a=a("../../operator/elementAt");b.Observable.prototype.elementAt=a.elementAt},{"../../Observable":5,"../../operator/elementAt":217}],69:[function(a,b,f){b=a("../../Observable");a=a("../../operator/every");b.Observable.prototype.every=a.every},{"../../Observable":5,"../../operator/every":218}],70:[function(a,b,f){b=a("../../Observable");a=a("../../operator/exhaust");b.Observable.prototype.exhaust=a.exhaust},{"../../Observable":5,"../../operator/exhaust":219}],
71:[function(a,b,f){b=a("../../Observable");a=a("../../operator/exhaustMap");b.Observable.prototype.exhaustMap=a.exhaustMap},{"../../Observable":5,"../../operator/exhaustMap":220}],72:[function(a,b,f){b=a("../../Observable");a=a("../../operator/expand");b.Observable.prototype.expand=a.expand},{"../../Observable":5,"../../operator/expand":221}],73:[function(a,b,f){b=a("../../Observable");a=a("../../operator/filter");b.Observable.prototype.filter=a.filter},{"../../Observable":5,"../../operator/filter":222}],
74:[function(a,b,f){b=a("../../Observable");a=a("../../operator/finally");b.Observable.prototype["finally"]=a._finally},{"../../Observable":5,"../../operator/finally":223}],75:[function(a,b,f){b=a("../../Observable");a=a("../../operator/find");b.Observable.prototype.find=a.find},{"../../Observable":5,"../../operator/find":224}],76:[function(a,b,f){b=a("../../Observable");a=a("../../operator/findIndex");b.Observable.prototype.findIndex=a.findIndex},{"../../Observable":5,"../../operator/findIndex":225}],
77:[function(a,b,f){b=a("../../Observable");a=a("../../operator/first");b.Observable.prototype.first=a.first},{"../../Observable":5,"../../operator/first":226}],78:[function(a,b,f){b=a("../../Observable");a=a("../../operator/groupBy");b.Observable.prototype.groupBy=a.groupBy},{"../../Observable":5,"../../operator/groupBy":227}],79:[function(a,b,f){b=a("../../Observable");a=a("../../operator/ignoreElements");b.Observable.prototype.ignoreElements=a.ignoreElements},{"../../Observable":5,"../../operator/ignoreElements":228}],
80:[function(a,b,f){b=a("../../Observable");a=a("../../operator/isEmpty");b.Observable.prototype.isEmpty=a.isEmpty},{"../../Observable":5,"../../operator/isEmpty":229}],81:[function(a,b,f){b=a("../../Observable");a=a("../../operator/last");b.Observable.prototype.last=a.last},{"../../Observable":5,"../../operator/last":230}],82:[function(a,b,f){b=a("../../Observable");a=a("../../operator/let");b.Observable.prototype.let=a.letProto;b.Observable.prototype.letBind=a.letProto},{"../../Observable":5,"../../operator/let":231}],
83:[function(a,b,f){b=a("../../Observable");a=a("../../operator/map");b.Observable.prototype.map=a.map},{"../../Observable":5,"../../operator/map":232}],84:[function(a,b,f){b=a("../../Observable");a=a("../../operator/mapTo");b.Observable.prototype.mapTo=a.mapTo},{"../../Observable":5,"../../operator/mapTo":233}],85:[function(a,b,f){b=a("../../Observable");a=a("../../operator/materialize");b.Observable.prototype.materialize=a.materialize},{"../../Observable":5,"../../operator/materialize":234}],86:[function(a,
b,f){b=a("../../Observable");a=a("../../operator/max");b.Observable.prototype.max=a.max},{"../../Observable":5,"../../operator/max":235}],87:[function(a,b,f){b=a("../../Observable");a=a("../../operator/merge");b.Observable.prototype.merge=a.merge},{"../../Observable":5,"../../operator/merge":236}],88:[function(a,b,f){b=a("../../Observable");a=a("../../operator/mergeAll");b.Observable.prototype.mergeAll=a.mergeAll},{"../../Observable":5,"../../operator/mergeAll":237}],89:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/mergeMap");b.Observable.prototype.mergeMap=a.mergeMap;b.Observable.prototype.flatMap=a.mergeMap},{"../../Observable":5,"../../operator/mergeMap":238}],90:[function(a,b,f){b=a("../../Observable");a=a("../../operator/mergeMapTo");b.Observable.prototype.flatMapTo=a.mergeMapTo;b.Observable.prototype.mergeMapTo=a.mergeMapTo},{"../../Observable":5,"../../operator/mergeMapTo":239}],91:[function(a,b,f){b=a("../../Observable");a=a("../../operator/mergeScan");b.Observable.prototype.mergeScan=
a.mergeScan},{"../../Observable":5,"../../operator/mergeScan":240}],92:[function(a,b,f){b=a("../../Observable");a=a("../../operator/min");b.Observable.prototype.min=a.min},{"../../Observable":5,"../../operator/min":241}],93:[function(a,b,f){b=a("../../Observable");a=a("../../operator/multicast");b.Observable.prototype.multicast=a.multicast},{"../../Observable":5,"../../operator/multicast":242}],94:[function(a,b,f){b=a("../../Observable");a=a("../../operator/observeOn");b.Observable.prototype.observeOn=
a.observeOn},{"../../Observable":5,"../../operator/observeOn":243}],95:[function(a,b,f){b=a("../../Observable");a=a("../../operator/onErrorResumeNext");b.Observable.prototype.onErrorResumeNext=a.onErrorResumeNext},{"../../Observable":5,"../../operator/onErrorResumeNext":244}],96:[function(a,b,f){b=a("../../Observable");a=a("../../operator/pairwise");b.Observable.prototype.pairwise=a.pairwise},{"../../Observable":5,"../../operator/pairwise":245}],97:[function(a,b,f){b=a("../../Observable");a=a("../../operator/partition");
b.Observable.prototype.partition=a.partition},{"../../Observable":5,"../../operator/partition":246}],98:[function(a,b,f){b=a("../../Observable");a=a("../../operator/pluck");b.Observable.prototype.pluck=a.pluck},{"../../Observable":5,"../../operator/pluck":247}],99:[function(a,b,f){b=a("../../Observable");a=a("../../operator/publish");b.Observable.prototype.publish=a.publish},{"../../Observable":5,"../../operator/publish":248}],100:[function(a,b,f){b=a("../../Observable");a=a("../../operator/publishBehavior");
b.Observable.prototype.publishBehavior=a.publishBehavior},{"../../Observable":5,"../../operator/publishBehavior":249}],101:[function(a,b,f){b=a("../../Observable");a=a("../../operator/publishLast");b.Observable.prototype.publishLast=a.publishLast},{"../../Observable":5,"../../operator/publishLast":250}],102:[function(a,b,f){b=a("../../Observable");a=a("../../operator/publishReplay");b.Observable.prototype.publishReplay=a.publishReplay},{"../../Observable":5,"../../operator/publishReplay":251}],103:[function(a,
b,f){b=a("../../Observable");a=a("../../operator/race");b.Observable.prototype.race=a.race},{"../../Observable":5,"../../operator/race":252}],104:[function(a,b,f){b=a("../../Observable");a=a("../../operator/reduce");b.Observable.prototype.reduce=a.reduce},{"../../Observable":5,"../../operator/reduce":253}],105:[function(a,b,f){b=a("../../Observable");a=a("../../operator/repeat");b.Observable.prototype.repeat=a.repeat},{"../../Observable":5,"../../operator/repeat":254}],106:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/retry");b.Observable.prototype.retry=a.retry},{"../../Observable":5,"../../operator/retry":255}],107:[function(a,b,f){b=a("../../Observable");a=a("../../operator/retryWhen");b.Observable.prototype.retryWhen=a.retryWhen},{"../../Observable":5,"../../operator/retryWhen":256}],108:[function(a,b,f){b=a("../../Observable");a=a("../../operator/sample");b.Observable.prototype.sample=a.sample},{"../../Observable":5,"../../operator/sample":257}],109:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/sampleTime");b.Observable.prototype.sampleTime=a.sampleTime},{"../../Observable":5,"../../operator/sampleTime":258}],110:[function(a,b,f){b=a("../../Observable");a=a("../../operator/scan");b.Observable.prototype.scan=a.scan},{"../../Observable":5,"../../operator/scan":259}],111:[function(a,b,f){b=a("../../Observable");a=a("../../operator/share");b.Observable.prototype.share=a.share},{"../../Observable":5,"../../operator/share":260}],112:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/single");b.Observable.prototype.single=a.single},{"../../Observable":5,"../../operator/single":261}],113:[function(a,b,f){b=a("../../Observable");a=a("../../operator/skip");b.Observable.prototype.skip=a.skip},{"../../Observable":5,"../../operator/skip":262}],114:[function(a,b,f){b=a("../../Observable");a=a("../../operator/skipUntil");b.Observable.prototype.skipUntil=a.skipUntil},{"../../Observable":5,"../../operator/skipUntil":263}],115:[function(a,b,f){b=a("../../Observable");
a=a("../../operator/skipWhile");b.Observable.prototype.skipWhile=a.skipWhile},{"../../Observable":5,"../../operator/skipWhile":264}],116:[function(a,b,f){b=a("../../Observable");a=a("../../operator/startWith");b.Observable.prototype.startWith=a.startWith},{"../../Observable":5,"../../operator/startWith":265}],117:[function(a,b,f){b=a("../../Observable");a=a("../../operator/subscribeOn");b.Observable.prototype.subscribeOn=a.subscribeOn},{"../../Observable":5,"../../operator/subscribeOn":266}],118:[function(a,
b,f){b=a("../../Observable");a=a("../../operator/switch");b.Observable.prototype["switch"]=a._switch},{"../../Observable":5,"../../operator/switch":267}],119:[function(a,b,f){b=a("../../Observable");a=a("../../operator/switchMap");b.Observable.prototype.switchMap=a.switchMap},{"../../Observable":5,"../../operator/switchMap":268}],120:[function(a,b,f){b=a("../../Observable");a=a("../../operator/switchMapTo");b.Observable.prototype.switchMapTo=a.switchMapTo},{"../../Observable":5,"../../operator/switchMapTo":269}],
121:[function(a,b,f){b=a("../../Observable");a=a("../../operator/take");b.Observable.prototype.take=a.take},{"../../Observable":5,"../../operator/take":270}],122:[function(a,b,f){b=a("../../Observable");a=a("../../operator/takeLast");b.Observable.prototype.takeLast=a.takeLast},{"../../Observable":5,"../../operator/takeLast":271}],123:[function(a,b,f){b=a("../../Observable");a=a("../../operator/takeUntil");b.Observable.prototype.takeUntil=a.takeUntil},{"../../Observable":5,"../../operator/takeUntil":272}],
124:[function(a,b,f){b=a("../../Observable");a=a("../../operator/takeWhile");b.Observable.prototype.takeWhile=a.takeWhile},{"../../Observable":5,"../../operator/takeWhile":273}],125:[function(a,b,f){b=a("../../Observable");a=a("../../operator/throttle");b.Observable.prototype.throttle=a.throttle},{"../../Observable":5,"../../operator/throttle":274}],126:[function(a,b,f){b=a("../../Observable");a=a("../../operator/throttleTime");b.Observable.prototype.throttleTime=a.throttleTime},{"../../Observable":5,
"../../operator/throttleTime":275}],127:[function(a,b,f){b=a("../../Observable");a=a("../../operator/timeInterval");b.Observable.prototype.timeInterval=a.timeInterval},{"../../Observable":5,"../../operator/timeInterval":276}],128:[function(a,b,f){b=a("../../Observable");a=a("../../operator/timeout");b.Observable.prototype.timeout=a.timeout},{"../../Observable":5,"../../operator/timeout":277}],129:[function(a,b,f){b=a("../../Observable");a=a("../../operator/timeoutWith");b.Observable.prototype.timeoutWith=
a.timeoutWith},{"../../Observable":5,"../../operator/timeoutWith":278}],130:[function(a,b,f){b=a("../../Observable");a=a("../../operator/timestamp");b.Observable.prototype.timestamp=a.timestamp},{"../../Observable":5,"../../operator/timestamp":279}],131:[function(a,b,f){b=a("../../Observable");a=a("../../operator/toArray");b.Observable.prototype.toArray=a.toArray},{"../../Observable":5,"../../operator/toArray":280}],132:[function(a,b,f){b=a("../../Observable");a=a("../../operator/toPromise");b.Observable.prototype.toPromise=
a.toPromise},{"../../Observable":5,"../../operator/toPromise":281}],133:[function(a,b,f){b=a("../../Observable");a=a("../../operator/window");b.Observable.prototype.window=a.window},{"../../Observable":5,"../../operator/window":282}],134:[function(a,b,f){b=a("../../Observable");a=a("../../operator/windowCount");b.Observable.prototype.windowCount=a.windowCount},{"../../Observable":5,"../../operator/windowCount":283}],135:[function(a,b,f){b=a("../../Observable");a=a("../../operator/windowTime");b.Observable.prototype.windowTime=
a.windowTime},{"../../Observable":5,"../../operator/windowTime":284}],136:[function(a,b,f){b=a("../../Observable");a=a("../../operator/windowToggle");b.Observable.prototype.windowToggle=a.windowToggle},{"../../Observable":5,"../../operator/windowToggle":285}],137:[function(a,b,f){b=a("../../Observable");a=a("../../operator/windowWhen");b.Observable.prototype.windowWhen=a.windowWhen},{"../../Observable":5,"../../operator/windowWhen":286}],138:[function(a,b,f){b=a("../../Observable");a=a("../../operator/withLatestFrom");
b.Observable.prototype.withLatestFrom=a.withLatestFrom},{"../../Observable":5,"../../operator/withLatestFrom":287}],139:[function(a,b,f){b=a("../../Observable");a=a("../../operator/zip");b.Observable.prototype.zip=a.zipProto},{"../../Observable":5,"../../operator/zip":288}],140:[function(a,b,f){b=a("../../Observable");a=a("../../operator/zipAll");b.Observable.prototype.zipAll=a.zipAll},{"../../Observable":5,"../../operator/zipAll":289}],141:[function(a,b,f){var h=this&&this.__extends||function(a,
d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("./ScalarObservable"),k=a("./EmptyObservable");a=function(a){function d(c,e,d,b){a.call(this);this.arrayLike=c;this.scheduler=b;e||b||1!==c.length||(this._isScalar=!0,this.value=c[0]);e&&(this.mapFn=e.bind(d))}h(d,a);d.create=function(a,e,m,b){var g=a.length;return 0===g?new k.EmptyObservable:1!==g||e?new d(a,e,m,b):
new l.ScalarObservable(a[0],b)};d.dispatch=function(a){var e=a.arrayLike,d=a.index,b=a.length,g=a.mapFn,f=a.subscriber;f.isUnsubscribed||(d>=b?f.complete():(e=g?g(e[d],d):e[d],f.next(e),a.index=d+1,this.schedule(a)))};d.prototype._subscribe=function(a){var e=this.arrayLike,m=this.mapFn,b=this.scheduler,g=e.length;if(b)return b.schedule(d.dispatch,0,{arrayLike:e,index:0,length:g,mapFn:m,subscriber:a});for(b=0;b<g&&!a.isUnsubscribed;b++){var f=m?m(e[b],b):e[b];a.next(f)}a.complete()};return d}(b.Observable);
f.ArrayLikeObservable=a},{"../Observable":5,"./EmptyObservable":147,"./ScalarObservable":161}],142:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var m in c)c.hasOwnProperty(m)&&(a[m]=c[m]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Observable");var l=a("./ScalarObservable"),k=a("./EmptyObservable"),g=a("../util/isScheduler");a=function(a){function c(c,m){a.call(this);this.array=c;this.scheduler=m;m||1!==c.length||
(this._isScalar=!0,this.value=c[0])}h(c,a);c.create=function(a,d){return new c(a,d)};c.of=function(){for(var a=[],d=0;d<arguments.length;d++)a[d-0]=arguments[d];d=a[a.length-1];g.isScheduler(d)?a.pop():d=null;var b=a.length;return 1<b?new c(a,d):1===b?new l.ScalarObservable(a[0],d):new k.EmptyObservable(d)};c.dispatch=function(a){var c=a.array,d=a.index,b=a.subscriber;d>=a.count?b.complete():(b.next(c[d]),b.isUnsubscribed||(a.index=d+1,this.schedule(a)))};c.prototype._subscribe=function(a){var d=
this.array,b=d.length,g=this.scheduler;if(g)return g.schedule(c.dispatch,0,{array:d,index:0,count:b,subscriber:a});for(g=0;g<b&&!a.isUnsubscribed;g++)a.next(d[g]);a.complete()};return c}(b.Observable);f.ArrayObservable=a},{"../Observable":5,"../util/isScheduler":328,"./EmptyObservable":147,"./ScalarObservable":161}],143:[function(a,b,f){function h(a){var c=a.subject;c.next(a.value);c.complete()}function l(a){a.subject.error(a.err)}var k=this&&this.__extends||function(a,c){function d(){this.constructor=
a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)};b=a("../Observable");var g=a("../util/tryCatch"),d=a("../util/errorObject"),c=a("../AsyncSubject");a=function(a){function m(c,d,m,b){a.call(this);this.callbackFunc=c;this.selector=d;this.args=m;this.scheduler=b}k(m,a);m.create=function(a,c,e){void 0===c&&(c=void 0);return function(){for(var d=[],b=0;b<arguments.length;b++)d[b-0]=arguments[b];return new m(a,c,d,e)}};m.prototype._subscribe=
function(a){var e=this.callbackFunc,b=this.args,f=this.scheduler,k=this.subject;if(f)return f.schedule(m.dispatch,0,{source:this,subscriber:a});k||(k=this.subject=new c.AsyncSubject,f=function v(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];var e=v.source,c=e.selector,e=e.subject;c?(a=g.tryCatch(c).apply(this,a),a===d.errorObject?e.error(d.errorObject.e):(e.next(a),e.complete())):(e.next(1===a.length?a[0]:a),e.complete())},f.source=this,g.tryCatch(e).apply(this,b.concat(f))===d.errorObject&&
k.error(d.errorObject.e));return k.subscribe(a)};m.dispatch=function(a){var e=this,m=a.source;a=a.subscriber;var b=m.callbackFunc,f=m.args,k=m.scheduler,v=m.subject;if(!v){var v=m.subject=new c.AsyncSubject,A=function x(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];var m=x.source,c=m.selector,m=m.subject;c?(a=g.tryCatch(c).apply(this,a),a===d.errorObject?e.add(k.schedule(l,0,{err:d.errorObject.e,subject:m})):e.add(k.schedule(h,0,{value:a,subject:m}))):e.add(k.schedule(h,0,{value:1===
a.length?a[0]:a,subject:m}))};A.source=m;g.tryCatch(b).apply(this,f.concat(A))===d.errorObject&&v.error(d.errorObject.e)}e.add(v.subscribe(a))};return m}(b.Observable);f.BoundCallbackObservable=a},{"../AsyncSubject":1,"../Observable":5,"../util/errorObject":321,"../util/tryCatch":335}],144:[function(a,b,f){function h(a){var b=this,g=a.source;a=a.subscriber;var f=g.callbackFunc,h=g.args,u=g.scheduler,r=g.subject;if(!r){var r=g.subject=new e.AsyncSubject,v=function E(){for(var a=[],e=0;e<arguments.length;e++)a[e-
0]=arguments[e];var m=E.source,e=m.selector,m=m.subject,g=a.shift();g?m.error(g):e?(a=d.tryCatch(e).apply(this,a),a===c.errorObject?b.add(u.schedule(k,0,{err:c.errorObject.e,subject:m})):b.add(u.schedule(l,0,{value:a,subject:m}))):b.add(u.schedule(l,0,{value:1===a.length?a[0]:a,subject:m}))};v.source=g;d.tryCatch(f).apply(this,h.concat(v))===c.errorObject&&r.error(c.errorObject.e)}b.add(r.subscribe(a))}function l(a){var c=a.subject;c.next(a.value);c.complete()}function k(a){a.subject.error(a.err)}
var g=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Observable");var d=a("../util/tryCatch"),c=a("../util/errorObject"),e=a("../AsyncSubject");a=function(a){function b(c,e,d,g){a.call(this);this.callbackFunc=c;this.selector=e;this.args=d;this.scheduler=g}g(b,a);b.create=function(a,c,e){void 0===c&&(c=void 0);return function(){for(var d=[],m=0;m<arguments.length;m++)d[m-
0]=arguments[m];return new b(a,c,d,e)}};b.prototype._subscribe=function(a){var m=this.callbackFunc,b=this.args,g=this.scheduler,n=this.subject;if(g)return g.schedule(h,0,{source:this,subscriber:a});n||(n=this.subject=new e.AsyncSubject,g=function A(){for(var a=[],e=0;e<arguments.length;e++)a[e-0]=arguments[e];var m=A.source,e=m.selector,m=m.subject,b=a.shift();b?m.error(b):e?(a=d.tryCatch(e).apply(this,a),a===c.errorObject?m.error(c.errorObject.e):(m.next(a),m.complete())):(m.next(1===a.length?a[0]:
a),m.complete())},g.source=this,d.tryCatch(m).apply(this,b.concat(g))===c.errorObject&&n.error(c.errorObject.e));return n.subscribe(a)};return b}(b.Observable);f.BoundNodeCallbackObservable=a},{"../AsyncSubject":1,"../Observable":5,"../util/errorObject":321,"../util/tryCatch":335}],145:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subject");
var l=a("../Observable"),k=a("../Subscriber"),g=a("../Subscription");a=function(a){function e(c,d){a.call(this);this.source=c;this.subjectFactory=d;this._refCount=0}h(e,a);e.prototype._subscribe=function(a){return this.getSubject().subscribe(a)};e.prototype.getSubject=function(){var a=this._subject;if(!a||a.isStopped)this._subject=this.subjectFactory();return this._subject};e.prototype.connect=function(){var a=this._connection;a||(a=this._connection=new g.Subscription,a.add(this.source.subscribe(new d(this.getSubject(),
this))),a.isUnsubscribed?(this._connection=null,a=g.Subscription.EMPTY):this._connection=a);return a};e.prototype.refCount=function(){return this.lift(new c(this))};return e}(l.Observable);f.ConnectableObservable=a;var d=function(a){function c(e,d){a.call(this,e);this.connectable=d}h(c,a);c.prototype._error=function(c){this._unsubscribe();a.prototype._error.call(this,c)};c.prototype._complete=function(){this._unsubscribe();a.prototype._complete.call(this)};c.prototype._unsubscribe=function(){var a=
this.connectable;if(a){this.connectable=null;var c=a._connection;a._refCount=0;a._subject=null;a._connection=null;c&&c.unsubscribe()}};return c}(b.SubjectSubscriber),c=function(){function a(c){this.connectable=c}a.prototype.call=function(a,c){var d=this.connectable;d._refCount++;var m=new e(a,d),b=c._subscribe(m);m.isUnsubscribed||(m.connection=d.connect());return b};return a}(),e=function(a){function c(e,d){a.call(this,e);this.connectable=d}h(c,a);c.prototype._unsubscribe=function(){var a=this.connectable;
if(a){this.connectable=null;var c=a._refCount;0>=c?this.connection=null:(a._refCount=c-1,1<c?this.connection=null:(c=this.connection,a=a._connection,this.connection=null,!a||c&&a!==c||a.unsubscribe()))}else this.connection=null};return c}(k.Subscriber)},{"../Observable":5,"../Subject":11,"../Subscriber":13,"../Subscription":14}],146:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):
(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("../util/subscribeToResult");a=a("../OuterSubscriber");b=function(a){function d(c){a.call(this);this.observableFactory=c}h(d,a);d.create=function(a){return new d(a)};d.prototype._subscribe=function(a){return new k(a,this.observableFactory)};return d}(b.Observable);f.DeferObservable=b;var k=function(a){function d(c,e){a.call(this,c);this.factory=e;this.tryDefer()}h(d,a);d.prototype.tryDefer=function(){try{this._callFactory()}catch(a){this._error(a)}};
d.prototype._callFactory=function(){var a=this.factory();a&&this.add(l.subscribeToResult(this,a))};return d}(a.OuterSubscriber)},{"../Observable":5,"../OuterSubscriber":8,"../util/subscribeToResult":332}],147:[function(a,b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g){a.call(this);this.scheduler=g}h(b,a);b.create=function(a){return new b(a)};
b.dispatch=function(a){a.subscriber.complete()};b.prototype._subscribe=function(a){var d=this.scheduler;if(d)return d.schedule(b.dispatch,0,{subscriber:a});a.complete()};return b}(a("../Observable").Observable);f.EmptyObservable=a},{"../Observable":5}],148:[function(a,b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g,d){a.call(this);
this.error=g;this.scheduler=d}h(b,a);b.create=function(a,d){return new b(a,d)};b.dispatch=function(a){a.subscriber.error(a.error)};b.prototype._subscribe=function(a){var d=this.error,c=this.scheduler;if(c)return c.schedule(b.dispatch,0,{error:d,subscriber:a});a.error(d)};return b}(a("../Observable").Observable);f.ErrorObservable=a},{"../Observable":5}],149:[function(a,b,f){var h=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.prototype=
null===e?Object.create(e):(d.prototype=e.prototype,new d)};b=a("../Observable");var l=a("./EmptyObservable"),k=a("../util/isArray"),g=a("../util/subscribeToResult");a=a("../OuterSubscriber");b=function(a){function e(e,d){a.call(this);this.sources=e;this.resultSelector=d}h(e,a);e.create=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];if(null===a||0===arguments.length)return new l.EmptyObservable;c=null;"function"===typeof a[a.length-1]&&(c=a.pop());1===a.length&&k.isArray(a[0])&&
(a=a[0]);return 0===a.length?new l.EmptyObservable:new e(a,c)};e.prototype._subscribe=function(a){return new d(a,this.sources,this.resultSelector)};return e}(b.Observable);f.ForkJoinObservable=b;var d=function(a){function e(e,d,b){a.call(this,e);this.sources=d;this.resultSelector=b;this.haveValues=this.completed=0;this.total=e=d.length;this.values=Array(e);for(b=0;b<e;b++){var f=g.subscribeToResult(this,d[b],null,b);f&&(f.outerIndex=b,this.add(f))}}h(e,a);e.prototype.notifyNext=function(a,c,e,d,b){this.values[e]=
c;b._hasValue||(b._hasValue=!0,this.haveValues++)};e.prototype.notifyComplete=function(a){var c=this.destination,e=this.haveValues,d=this.resultSelector,b=this.values,g=b.length;a._hasValue?(this.completed++,this.completed===g&&(e===g&&(a=d?d.apply(this,b):b,c.next(a)),c.complete())):c.complete()};return e}(a.OuterSubscriber)},{"../Observable":5,"../OuterSubscriber":8,"../util/isArray":322,"../util/subscribeToResult":332,"./EmptyObservable":147}],150:[function(a,b,f){var h=this&&this.__extends||function(a,
c){function e(){this.constructor=a}for(var m in c)c.hasOwnProperty(m)&&(a[m]=c[m]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Observable");var l=a("../util/tryCatch"),k=a("../util/errorObject"),g=a("../Subscription");a=function(a){function c(c,m,b){a.call(this);this.sourceObj=c;this.eventName=m;this.selector=b}h(c,a);c.create=function(a,d,b){return new c(a,d,b)};c.setupSubscription=function(a,d,b,f){var k;if(a&&"[object NodeList]"===a.toString()||a&&"[object HTMLCollection]"===
a.toString())for(var l=0,h=a.length;l<h;l++)c.setupSubscription(a[l],d,b,f);else a&&"function"===typeof a.addEventListener&&"function"===typeof a.removeEventListener?(a.addEventListener(d,b),k=function(){return a.removeEventListener(d,b)}):a&&"function"===typeof a.on&&"function"===typeof a.off?(a.on(d,b),k=function(){return a.off(d,b)}):a&&"function"===typeof a.addListener&&"function"===typeof a.removeListener&&(a.addListener(d,b),k=function(){return a.removeListener(d,b)});f.add(new g.Subscription(k))};
c.prototype._subscribe=function(a){var d=this.selector;c.setupSubscription(this.sourceObj,this.eventName,d?function(){for(var c=[],b=0;b<arguments.length;b++)c[b-0]=arguments[b];c=l.tryCatch(d).apply(void 0,c);c===k.errorObject?a.error(k.errorObject.e):a.next(c)}:function(c){return a.next(c)},a)};return c}(b.Observable);f.FromEventObservable=a},{"../Observable":5,"../Subscription":14,"../util/errorObject":321,"../util/tryCatch":335}],151:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=
a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Observable");var l=a("../Subscription");a=function(a){function b(d,c,e){a.call(this);this.addHandler=d;this.removeHandler=c;this.selector=e}h(b,a);b.create=function(a,c,e){return new b(a,c,e)};b.prototype._subscribe=function(a){var c=this,e=this.removeHandler,m=this.selector?function(){for(var e=[],m=0;m<arguments.length;m++)e[m-0]=arguments[m];c._callSelector(a,e)}:function(c){a.next(c)};
this._callAddHandler(m,a);a.add(new l.Subscription(function(){e(m)}))};b.prototype._callSelector=function(a,c){try{var e=this.selector.apply(this,c);a.next(e)}catch(m){a.error(m)}};b.prototype._callAddHandler=function(a,c){try{this.addHandler(a)}catch(e){c.error(e)}};return b}(b.Observable);f.FromEventPatternObservable=a},{"../Observable":5,"../Subscription":14}],152:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=
c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../util/isArray"),k=a("../util/isFunction"),g=a("../util/isPromise"),d=a("../util/isScheduler"),c=a("./PromiseObservable"),e=a("./IteratorObservable"),m=a("./ArrayObservable"),n=a("./ArrayLikeObservable"),q=a("../symbol/iterator"),t=a("../Observable"),p=a("../operator/observeOn"),u=a("symbol-observable");a=function(a){function b(c,e){a.call(this,null);this.ish=c;this.scheduler=e}h(b,a);b.create=function(a,f,h,p){var r=
null,z=null;k.isFunction(f)?(r=p||null,z=f):d.isScheduler(r)&&(r=f);if(null!=a){if("function"===typeof a[u["default"]])return a instanceof t.Observable&&!r?a:new b(a,r);if(l.isArray(a))return new m.ArrayObservable(a,r);if(g.isPromise(a))return new c.PromiseObservable(a,r);if("function"===typeof a[q.$$iterator]||"string"===typeof a)return new e.IteratorObservable(a,null,null,r);if(a&&"number"===typeof a.length)return new n.ArrayLikeObservable(a,z,h,r)}throw new TypeError((null!==a&&typeof a||a)+" is not observable");
};b.prototype._subscribe=function(a){var c=this.ish,e=this.scheduler;return null==e?c[u["default"]]().subscribe(a):c[u["default"]]().subscribe(new p.ObserveOnSubscriber(a,e,0))};return b}(t.Observable);f.FromObservable=a},{"../Observable":5,"../operator/observeOn":243,"../symbol/iterator":303,"../util/isArray":322,"../util/isFunction":324,"../util/isPromise":327,"../util/isScheduler":328,"./ArrayLikeObservable":141,"./ArrayObservable":142,"./IteratorObservable":156,"./PromiseObservable":159,"symbol-observable":336}],
153:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("../util/isScheduler"),k=function(a){return a};a=function(a){function d(c,e,d,b,f){a.call(this);this.initialState=c;this.condition=e;this.iterate=d;this.resultSelector=b;this.scheduler=f}h(d,a);d.create=function(a,e,m,b,g){return 1==arguments.length?new d(a.initialState,
a.condition,a.iterate,a.resultSelector||k,a.scheduler):void 0===b||l.isScheduler(b)?new d(a,e,m,k,b):new d(a,e,m,b,g)};d.prototype._subscribe=function(a){var e=this.initialState;if(this.scheduler)return this.scheduler.schedule(d.dispatch,0,{subscriber:a,iterate:this.iterate,condition:this.condition,resultSelector:this.resultSelector,state:e});var m=this.condition,b=this.resultSelector,g=this.iterate;do{if(m){var f=void 0;try{f=m(e)}catch(k){a.error(k);break}if(!f){a.complete();break}}f=void 0;try{f=
b(e)}catch(k){a.error(k);break}a.next(f);if(a.isUnsubscribed)break;try{e=g(e)}catch(k){a.error(k);break}}while(1)};d.dispatch=function(a){var e=a.subscriber,d=a.condition;if(!e.isUnsubscribed){if(a.needIterate)try{a.state=a.iterate(a.state)}catch(b){e.error(b);return}else a.needIterate=!0;if(d){var g=void 0;try{g=d(a.state)}catch(b){e.error(b);return}if(!g){e.complete();return}if(e.isUnsubscribed)return}var f;try{f=a.resultSelector(a.state)}catch(b){e.error(b);return}if(!e.isUnsubscribed&&(e.next(f),
!e.isUnsubscribed))return this.schedule(a)}};return d}(b.Observable);f.GenerateObservable=a},{"../Observable":5,"../util/isScheduler":328}],154:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("../util/subscribeToResult");a=a("../OuterSubscriber");b=function(a){function d(c,e,d){a.call(this);this.condition=c;this.thenSource=
e;this.elseSource=d}h(d,a);d.create=function(a,e,m){return new d(a,e,m)};d.prototype._subscribe=function(a){return new k(a,this.condition,this.thenSource,this.elseSource)};return d}(b.Observable);f.IfObservable=b;var k=function(a){function d(c,e,d,b){a.call(this,c);this.condition=e;this.thenSource=d;this.elseSource=b;this.tryIf()}h(d,a);d.prototype.tryIf=function(){var a=this.condition,e=this.thenSource,d=this.elseSource,b;try{(a=(b=a())?e:d)?this.add(l.subscribeToResult(this,a)):this._complete()}catch(g){this._error(g)}};
return d}(a.OuterSubscriber)},{"../Observable":5,"../OuterSubscriber":8,"../util/subscribeToResult":332}],155:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)},l=a("../util/isNumeric");b=a("../Observable");var k=a("../scheduler/async");a=function(a){function d(c,e){void 0===c&&(c=0);void 0===e&&(e=k.async);a.call(this);this.period=c;this.scheduler=
e;if(!l.isNumeric(c)||0>c)this.period=0;e&&"function"===typeof e.schedule||(this.scheduler=k.async)}h(d,a);d.create=function(a,e){void 0===a&&(a=0);void 0===e&&(e=k.async);return new d(a,e)};d.dispatch=function(a){var e=a.subscriber,d=a.period;e.next(a.index);e.isUnsubscribed||(a.index+=1,this.schedule(a,d))};d.prototype._subscribe=function(a){var e=this.period;a.add(this.scheduler.schedule(d.dispatch,e,{index:0,subscriber:a,period:e}))};return d}(b.Observable);f.IntervalObservable=a},{"../Observable":5,
"../scheduler/async":301,"../util/isNumeric":325}],156:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../util/root"),k=a("../util/isObject"),g=a("../util/tryCatch");b=a("../Observable");var d=a("../util/isFunction"),c=a("../symbol/iterator"),e=a("../util/errorObject");a=function(a){function b(e,g,f,q){a.call(this);if(null==e)throw Error("iterator cannot be null.");
if(k.isObject(g))this.thisArg=g,this.scheduler=f;else if(d.isFunction(g))this.project=g,this.thisArg=f,this.scheduler=q;else if(null!=g)throw Error("When provided, `project` must be a function.");if((g=e[c.$$iterator])||"string"!==typeof e)if(g||void 0===e.length){if(!g)throw new TypeError("Object is not iterable");e=e[c.$$iterator]()}else e=new n(e);else e=new m(e);this.iterator=e}h(b,a);b.create=function(a,c,e,d){return new b(a,c,e,d)};b.dispatch=function(a){var c=a.index,d=a.thisArg,m=a.project,
b=a.iterator,n=a.subscriber;a.hasError?n.error(a.error):(b=b.next(),b.done?n.complete():(m?(b=g.tryCatch(m).call(d,b.value,c),b===e.errorObject?(a.error=e.errorObject.e,a.hasError=!0):(n.next(b),a.index=c+1)):(n.next(b.value),a.index=c+1),n.isUnsubscribed||this.schedule(a)))};b.prototype._subscribe=function(a){var c=0,d=this.iterator,m=this.project,n=this.thisArg,f=this.scheduler;if(f)return f.schedule(b.dispatch,0,{index:c,thisArg:n,project:m,iterator:d,subscriber:a});do{f=d.next();if(f.done){a.complete();
break}else if(m){f=g.tryCatch(m).call(n,f.value,c++);if(f===e.errorObject){a.error(e.errorObject.e);break}a.next(f)}else a.next(f.value);if(a.isUnsubscribed)break}while(1)};return b}(b.Observable);f.IteratorObservable=a;var m=function(){function a(c,e,d){void 0===e&&(e=0);void 0===d&&(d=c.length);this.str=c;this.idx=e;this.len=d}a.prototype[c.$$iterator]=function(){return this};a.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.str.charAt(this.idx++)}:{done:!0,value:void 0}};
return a}(),n=function(){function a(c,e,d){void 0===e&&(e=0);if(void 0===d)if(d=+c.length,isNaN(d))d=0;else if(0!==d&&"number"===typeof d&&l.root.isFinite(d)){var m;m=+d;m=0===m?m:isNaN(m)?m:0>m?-1:1;d=m*Math.floor(Math.abs(d));d=0>=d?0:d>q?q:d}this.arr=c;this.idx=e;this.len=d}a.prototype[c.$$iterator]=function(){return this};a.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.arr[this.idx++]}:{done:!0,value:void 0}};return a}(),q=Math.pow(2,53)-1},{"../Observable":5,"../symbol/iterator":303,
"../util/errorObject":321,"../util/isFunction":324,"../util/isObject":326,"../util/root":331,"../util/tryCatch":335}],157:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Observable");var l=a("../observable/ConnectableObservable");a=function(a){function b(d,c,e){a.call(this);this.source=d;this.subjectFactory=c;this.selector=e}h(b,
a);b.prototype._subscribe=function(a){var c=this.selector,e=new l.ConnectableObservable(this.source,this.subjectFactory);a=c(e).subscribe(a);a.add(e.connect());return a};return b}(b.Observable);f.MulticastObservable=a},{"../Observable":5,"../observable/ConnectableObservable":145}],158:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Observable");
var l=a("../util/noop");a=function(a){function b(){a.call(this)}h(b,a);b.create=function(){return new b};b.prototype._subscribe=function(a){l.noop()};return b}(b.Observable);f.NeverObservable=a},{"../Observable":5,"../util/noop":329}],159:[function(a,b,f){function h(a){var c=a.value;a=a.subscriber;a.isUnsubscribed||(a.next(c),a.complete())}function l(a){var c=a.err;a=a.subscriber;a.isUnsubscribed||a.error(c)}var k=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&
(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},g=a("../util/root");a=function(a){function c(c,b){void 0===b&&(b=null);a.call(this);this.promise=c;this.scheduler=b}k(c,a);c.create=function(a,d){void 0===d&&(d=null);return new c(a,d)};c.prototype._subscribe=function(a){var c=this,d=this.promise,b=this.scheduler;if(null==b)this._isScalar?a.isUnsubscribed||(a.next(this.value),a.complete()):d.then(function(d){c.value=d;c._isScalar=!0;a.isUnsubscribed||(a.next(d),a.complete())},
function(c){a.isUnsubscribed||a.error(c)}).then(null,function(a){g.root.setTimeout(function(){throw a;})});else if(this._isScalar){if(!a.isUnsubscribed)return b.schedule(h,0,{value:this.value,subscriber:a})}else d.then(function(d){c.value=d;c._isScalar=!0;a.isUnsubscribed||a.add(b.schedule(h,0,{value:d,subscriber:a}))},function(c){a.isUnsubscribed||a.add(b.schedule(l,0,{err:c,subscriber:a}))}).then(null,function(a){g.root.setTimeout(function(){throw a;})})};return c}(a("../Observable").Observable);
f.PromiseObservable=a},{"../Observable":5,"../util/root":331}],160:[function(a,b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g,d,c){a.call(this);this.start=g;this._count=d;this.scheduler=c}h(b,a);b.create=function(a,d,c){void 0===a&&(a=0);void 0===d&&(d=0);return new b(a,d,c)};b.dispatch=function(a){var d=a.start,c=a.index,
e=a.subscriber;c>=a.count?e.complete():(e.next(d),e.isUnsubscribed||(a.index=c+1,a.start=d+1,this.schedule(a)))};b.prototype._subscribe=function(a){var d=0,c=this.start,e=this._count,m=this.scheduler;if(m)return m.schedule(b.dispatch,0,{index:d,count:e,start:c,subscriber:a});do{if(d++>=e){a.complete();break}a.next(c++);if(a.isUnsubscribed)break}while(1)};return b}(a("../Observable").Observable);f.RangeObservable=a},{"../Observable":5}],161:[function(a,b,f){var h=this&&this.__extends||function(a,b){function g(){this.constructor=
a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)};a=function(a){function b(g,d){a.call(this);this.value=g;this.scheduler=d;this._isScalar=!0;d&&(this._isScalar=!1)}h(b,a);b.create=function(a,d){return new b(a,d)};b.dispatch=function(a){var d=a.value,c=a.subscriber;a.done?c.complete():(c.next(d),c.isUnsubscribed||(a.done=!0,this.schedule(a)))};b.prototype._subscribe=function(a){var d=this.value,c=this.scheduler;if(c)return c.schedule(b.dispatch,
0,{done:!1,value:d,subscriber:a});a.next(d);a.isUnsubscribed||a.complete()};return b}(a("../Observable").Observable);f.ScalarObservable=a},{"../Observable":5}],162:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("../scheduler/asap"),k=a("../util/isNumeric");a=function(a){function d(c,e,d){void 0===e&&(e=0);void 0===
d&&(d=l.asap);a.call(this);this.source=c;this.delayTime=e;this.scheduler=d;if(!k.isNumeric(e)||0>e)this.delayTime=0;d&&"function"===typeof d.schedule||(this.scheduler=l.asap)}h(d,a);d.create=function(a,e,b){void 0===e&&(e=0);void 0===b&&(b=l.asap);return new d(a,e,b)};d.dispatch=function(a){return a.source.subscribe(a.subscriber)};d.prototype._subscribe=function(a){return this.scheduler.schedule(d.dispatch,this.delayTime,{source:this.source,subscriber:a})};return d}(b.Observable);f.SubscribeOnObservable=
a},{"../Observable":5,"../scheduler/asap":300,"../util/isNumeric":325}],163:[function(a,b,f){var h=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)},l=a("../util/isNumeric");b=a("../Observable");var k=a("../scheduler/async"),g=a("../util/isScheduler"),d=a("../util/isDate");a=function(a){function e(e,b,f){void 0===e&&(e=0);a.call(this);this.period=-1;this.dueTime=
0;l.isNumeric(b)?this.period=1>Number(b)&&1||Number(b):g.isScheduler(b)&&(f=b);g.isScheduler(f)||(f=k.async);this.scheduler=f;this.dueTime=d.isDate(e)?+e-this.scheduler.now():e}h(e,a);e.create=function(a,c,d){void 0===a&&(a=0);return new e(a,c,d)};e.dispatch=function(a){var c=a.index,e=a.period,d=a.subscriber;d.next(c);if(!d.isUnsubscribed){if(-1===e)return d.complete();a.index=c+1;this.schedule(a,e)}};e.prototype._subscribe=function(a){return this.scheduler.schedule(e.dispatch,this.dueTime,{index:0,
period:this.period,subscriber:a})};return e}(b.Observable);f.TimerObservable=a},{"../Observable":5,"../scheduler/async":301,"../util/isDate":323,"../util/isNumeric":325,"../util/isScheduler":328}],164:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};b=a("../Observable");var l=a("../util/subscribeToResult");a=a("../OuterSubscriber");b=function(a){function d(c,
e){a.call(this);this.resourceFactory=c;this.observableFactory=e}h(d,a);d.create=function(a,e){return new d(a,e)};d.prototype._subscribe=function(a){var e=this.resourceFactory,d=this.observableFactory,b;try{return b=e(),new k(a,b,d)}catch(g){a.error(g)}};return d}(b.Observable);f.UsingObservable=b;var k=function(a){function d(c,e,d){a.call(this,c);this.resource=e;this.observableFactory=d;c.add(e);this.tryUse()}h(d,a);d.prototype.tryUse=function(){try{var a=this.observableFactory.call(this,this.resource);
a&&this.add(l.subscribeToResult(this,a))}catch(e){this._error(e)}};return d}(a.OuterSubscriber)},{"../Observable":5,"../OuterSubscriber":8,"../util/subscribeToResult":332}],165:[function(a,b,f){a=a("./BoundCallbackObservable");f.bindCallback=a.BoundCallbackObservable.create},{"./BoundCallbackObservable":143}],166:[function(a,b,f){a=a("./BoundNodeCallbackObservable");f.bindNodeCallback=a.BoundNodeCallbackObservable.create},{"./BoundNodeCallbackObservable":144}],167:[function(a,b,f){var h=a("../util/isScheduler"),
l=a("../util/isArray"),k=a("./ArrayObservable"),g=a("../operator/combineLatest");f.combineLatest=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];var e=c=null;h.isScheduler(a[a.length-1])&&(e=a.pop());"function"===typeof a[a.length-1]&&(c=a.pop());1===a.length&&l.isArray(a[0])&&(a=a[0]);return(new k.ArrayObservable(a,e)).lift(new g.CombineLatestOperator(c))}},{"../operator/combineLatest":200,"../util/isArray":322,"../util/isScheduler":328,"./ArrayObservable":142}],168:[function(a,
b,f){a=a("../operator/concat");f.concat=a.concatStatic},{"../operator/concat":201}],169:[function(a,b,f){a=a("./DeferObservable");f.defer=a.DeferObservable.create},{"./DeferObservable":146}],170:[function(a,b,f){function h(a){return a.response}function l(a,c,e){void 0===c&&(c=h);void 0===e&&(e=null);return new t({method:"GET",url:a,resultSelector:c,headers:e})}function k(a,c,e){return new t({method:"POST",url:a,body:c,headers:e})}function g(a,c){return new t({method:"DELETE",url:a,headers:c})}function d(a,
c,e){return new t({method:"PUT",url:a,body:c,headers:e})}function c(a,c,e){return new t({method:"GET",url:a,responseType:"json",resultSelector:c?function(a){return c(a.response)}:function(a){return a.response},headers:e})}var e=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},m=a("../../util/root"),n=a("../../util/tryCatch"),q=a("../../util/errorObject");b=a("../../Observable");
a=a("../../Subscriber");f.ajaxGet=l;f.ajaxPost=k;f.ajaxDelete=g;f.ajaxPut=d;f.ajaxGetJSON=c;var t=function(a){function b(c){a.call(this);var e={async:!0,createXHR:function(){var a;if(this.crossDomain)if(m.root.XMLHttpRequest)a=new m.root.XMLHttpRequest,"withCredentials"in a&&(a.withCredentials=!!this.withCredentials);else if(m.root.XDomainRequest)a=new m.root.XDomainRequest;else throw Error("CORS is not supported by your browser");else if(m.root.XMLHttpRequest)a=new m.root.XMLHttpRequest;else{var c=
void 0;try{for(var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],d=0;3>d;d++)try{c=e[d];new m.root.ActiveXObject(c);break}catch(b){}a=new m.root.ActiveXObject(c)}catch(b){throw Error("XMLHttpRequest is not supported by your browser");}}return a},crossDomain:!1,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"===typeof c)e.url=c;else for(var d in c)c.hasOwnProperty(d)&&(e[d]=c[d]);this.request=e}e(b,a);b.prototype._subscribe=function(a){return new p(a,
this.request)};b.create=function(){var a=function(a){return new b(a)};a.get=l;a.post=k;a["delete"]=g;a.put=d;a.getJSON=c;return a}();return b}(b.Observable);f.AjaxObservable=t;var p=function(a){function c(e,d){a.call(this,e);this.request=d;this.done=!1;var b=d.headers=d.headers||{};d.crossDomain||b["X-Requested-With"]||(b["X-Requested-With"]="XMLHttpRequest");"Content-Type"in b||m.root.FormData&&d.body instanceof m.root.FormData||(b["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8");
d.body=this.serializeBody(d.body,d.headers["Content-Type"]);this.resultSelector=d.resultSelector;this.send()}e(c,a);c.prototype.next=function(a){this.done=!0;var c=this.resultSelector,e=this.destination;a=new u(a,this.xhr,this.request);c?(c=n.tryCatch(c)(a),c===q.errorObject?this.error(q.errorObject.e):e.next(c)):e.next(a)};c.prototype.send=function(){var a=this.request,c=this.request,e=c.user,d=c.method,b=c.url,m=c.async,g=c.password,f=c.headers,c=c.body,k=n.tryCatch(a.createXHR).call(a);k===q.errorObject?
this.error(q.errorObject.e):(this.xhr=k,(e?n.tryCatch(k.open).call(k,d,b,m,e,g):n.tryCatch(k.open).call(k,d,b,m))===q.errorObject?this.error(q.errorObject.e):(k.timeout=a.timeout,k.responseType=a.responseType,this.setHeaders(k,f),this.setupEvents(k,a),c?k.send(c):k.send()))};c.prototype.serializeBody=function(a,c){if(!a||"string"===typeof a||m.root.FormData&&a instanceof m.root.FormData)return a;if(c){var e=c.indexOf(";");-1!==e&&(c=c.substring(0,e))}switch(c){case "application/x-www-form-urlencoded":return Object.keys(a).map(function(c){return encodeURI(c)+
"="+encodeURI(a[c])}).join("&");case "application/json":return JSON.stringify(a);default:return a}};c.prototype.setHeaders=function(a,c){for(var e in c)c.hasOwnProperty(e)&&a.setRequestHeader(e,c[e])};c.prototype.setupEvents=function(a,c){var e=c.progressSubscriber;a.ontimeout=function C(a){var c=C.subscriber,e=C.progressSubscriber,d=C.request;e&&e.error(a);c.error(new v(this,d))};a.ontimeout.request=c;a.ontimeout.subscriber=this;a.ontimeout.progressSubscriber=e;a.upload&&"withCredentials"in a&&m.root.XDomainRequest&&
(e&&(a.onprogress=function w(a){w.progressSubscriber.next(a)},a.onprogress.progressSubscriber=e),a.onerror=function w(a){var c=w.progressSubscriber,e=w.subscriber,d=w.request;c&&c.error(a);e.error(new r("ajax error",this,d))},a.onerror.request=c,a.onerror.subscriber=this,a.onerror.progressSubscriber=e);a.onreadystatechange=function w(a){var c=w.subscriber,e=w.progressSubscriber,d=w.request;if(4===this.readyState){var b=1223===this.status?204:this.status,m="text"===this.responseType?this.response||
this.responseText:this.response;0===b&&(b=m?200:0);200<=b&&300>b?(e&&e.complete(),c.next(a),c.complete()):(e&&e.error(a),c.error(new r("ajax error "+b,this,d)))}};a.onreadystatechange.subscriber=this;a.onreadystatechange.progressSubscriber=e;a.onreadystatechange.request=c};c.prototype.unsubscribe=function(){var c=this.xhr;!this.done&&c&&4!==c.readyState&&c.abort();a.prototype.unsubscribe.call(this)};return c}(a.Subscriber);f.AjaxSubscriber=p;var u=function(){return function(a,c,e){this.originalEvent=
a;this.xhr=c;this.request=e;this.status=c.status;this.responseType=c.responseType||e.responseType;switch(this.responseType){case "json":this.response="response"in c?c.responseType?c.response:JSON.parse(c.response||c.responseText||""):JSON.parse(c.responseText||"");break;case "xml":this.response=c.responseXML;break;default:this.response="response"in c?c.response:c.responseText}}}();f.AjaxResponse=u;var r=function(a){function c(e,d,b){a.call(this,e);this.message=e;this.xhr=d;this.request=b;this.status=
d.status}e(c,a);return c}(Error);f.AjaxError=r;var v=function(a){function c(e,d){a.call(this,"ajax timeout",e,d)}e(c,a);return c}(r);f.AjaxTimeoutError=v},{"../../Observable":5,"../../Subscriber":13,"../../util/errorObject":321,"../../util/root":331,"../../util/tryCatch":335}],171:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../../Subject"),
k=a("../../Subscriber"),g=a("../../Observable"),d=a("../../Subscription"),c=a("../../util/root"),e=a("../../ReplaySubject"),m=a("../../util/tryCatch"),n=a("../../util/errorObject"),q=a("../../util/assign");a=function(a){function b(d,m){if(d instanceof g.Observable)a.call(this,m,d);else{a.call(this);this.WebSocketCtor=c.root.WebSocket;this._output=new l.Subject;"string"===typeof d?this.url=d:q.assign(this,d);if(!this.WebSocketCtor)throw Error("no WebSocket constructor can be found");this.destination=
new e.ReplaySubject}}h(b,a);b.prototype.resultSelector=function(a){return JSON.parse(a.data)};b.create=function(a){return new b(a)};b.prototype.lift=function(a){var c=new b(this,this.destination);c.operator=a;return c};b.prototype.multiplex=function(a,c,e){var d=this;return new g.Observable(function(b){var g=m.tryCatch(a)();g===n.errorObject?b.error(n.errorObject.e):d.next(g);var f=d.subscribe(function(a){var c=m.tryCatch(e)(a);c===n.errorObject?b.error(n.errorObject.e):c&&b.next(a)},function(a){return b.error(a)},
function(){return b.complete()});return function(){var a=m.tryCatch(c)();a===n.errorObject?b.error(n.errorObject.e):d.next(a);f.unsubscribe()}})};b.prototype._connectSocket=function(){var a=this,c=this.WebSocketCtor,b=this.protocol?new c(this.url,this.protocol):new c(this.url);this.socket=b;var g=new d.Subscription(function(){a.socket=null;b&&1===b.readyState&&b.close()}),f=this._output;b.onopen=function(c){var d=a.openObserver;d&&d.next(c);c=a.destination;a.destination=k.Subscriber.create(function(a){return 1===
b.readyState&&b.send(a)},function(c){var d=a.closingObserver;d&&d.next(void 0);c&&c.code?b.close(c.code,c.reason):f.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"));a.destination=new e.ReplaySubject;a.socket=null},function(){var c=a.closingObserver;c&&c.next(void 0);b.close();a.destination=new e.ReplaySubject;a.socket=null});c&&c instanceof e.ReplaySubject&&g.add(c.subscribe(a.destination))};b.onerror=
function(a){return f.error(a)};b.onclose=function(c){var e=a.closeObserver;e&&e.next(c);c.wasClean?f.complete():f.error(c)};b.onmessage=function(c){c=m.tryCatch(a.resultSelector)(c);c===n.errorObject?f.error(n.errorObject.e):f.next(c)}};b.prototype._subscribe=function(a){var c=this,e=this.source;if(e)return e.subscribe(a);this.socket||this._connectSocket();e=new d.Subscription;e.add(this._output.subscribe(a));e.add(function(){var a=c.socket;a&&1===a.readyState&&(a.close(),c.socket=null)});return e};
b.prototype.unsubscribe=function(){var c=this.source,d=this.socket;d&&1===d.readyState&&(d.close(),this.socket=null);a.prototype.unsubscribe.call(this);c||(this.destination=new e.ReplaySubject)};return b}(l.AnonymousSubject);f.WebSocketSubject=a},{"../../Observable":5,"../../ReplaySubject":9,"../../Subject":11,"../../Subscriber":13,"../../Subscription":14,"../../util/assign":320,"../../util/errorObject":321,"../../util/root":331,"../../util/tryCatch":335}],172:[function(a,b,f){a=a("./AjaxObservable");
f.ajax=a.AjaxObservable.create},{"./AjaxObservable":170}],173:[function(a,b,f){a=a("./WebSocketSubject");f.webSocket=a.WebSocketSubject.create},{"./WebSocketSubject":171}],174:[function(a,b,f){a=a("./EmptyObservable");f.empty=a.EmptyObservable.create},{"./EmptyObservable":147}],175:[function(a,b,f){a=a("./ForkJoinObservable");f.forkJoin=a.ForkJoinObservable.create},{"./ForkJoinObservable":149}],176:[function(a,b,f){a=a("./FromObservable");f.from=a.FromObservable.create},{"./FromObservable":152}],
177:[function(a,b,f){a=a("./FromEventObservable");f.fromEvent=a.FromEventObservable.create},{"./FromEventObservable":150}],178:[function(a,b,f){a=a("./FromEventPatternObservable");f.fromEventPattern=a.FromEventPatternObservable.create},{"./FromEventPatternObservable":151}],179:[function(a,b,f){a=a("./PromiseObservable");f.fromPromise=a.PromiseObservable.create},{"./PromiseObservable":159}],180:[function(a,b,f){a=a("./IfObservable");f._if=a.IfObservable.create},{"./IfObservable":154}],181:[function(a,
b,f){a=a("./IntervalObservable");f.interval=a.IntervalObservable.create},{"./IntervalObservable":155}],182:[function(a,b,f){a=a("../operator/merge");f.merge=a.mergeStatic},{"../operator/merge":236}],183:[function(a,b,f){a=a("./NeverObservable");f.never=a.NeverObservable.create},{"./NeverObservable":158}],184:[function(a,b,f){a=a("./ArrayObservable");f.of=a.ArrayObservable.of},{"./ArrayObservable":142}],185:[function(a,b,f){a=a("./RangeObservable");f.range=a.RangeObservable.create},{"./RangeObservable":160}],
186:[function(a,b,f){a=a("./ErrorObservable");f._throw=a.ErrorObservable.create},{"./ErrorObservable":148}],187:[function(a,b,f){a=a("./TimerObservable");f.timer=a.TimerObservable.create},{"./TimerObservable":163}],188:[function(a,b,f){a=a("./UsingObservable");f.using=a.UsingObservable.create},{"./UsingObservable":164}],189:[function(a,b,f){a=a("../operator/zip");f.zip=a.zipStatic},{"../operator/zip":288}],190:[function(a,b,f){var h=this&&this.__extends||function(a,c){function d(){this.constructor=
a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)},l=a("../util/tryCatch"),k=a("../util/errorObject");b=a("../OuterSubscriber");var g=a("../util/subscribeToResult");f.audit=function(a){return this.lift(new d(a))};var d=function(){function a(c){this.durationSelector=c}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.durationSelector))};return a}(),c=function(a){function c(d,b){a.call(this,d);this.durationSelector=
b;this.hasValue=!1}h(c,a);c.prototype._next=function(a){this.value=a;this.hasValue=!0;this.throttled||(a=l.tryCatch(this.durationSelector)(a),a===k.errorObject?this.destination.error(k.errorObject.e):this.add(this.throttled=g.subscribeToResult(this,a)))};c.prototype.clearThrottle=function(){var a=this.value,c=this.hasValue,e=this.throttled;e&&(this.remove(e),this.throttled=null,e.unsubscribe());c&&(this.value=null,this.hasValue=!1,this.destination.next(a))};c.prototype.notifyNext=function(a,c,e,d){this.clearThrottle()};
c.prototype.notifyComplete=function(){this.clearThrottle()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],191:[function(a,b,f){function h(a){a.clearThrottle()}var l=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)},k=a("../scheduler/async");a=a("../Subscriber");f.auditTime=
function(a,e){void 0===e&&(e=k.async);return this.lift(new g(a,e))};var g=function(){function a(c,d){this.duration=c;this.scheduler=d}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.duration,this.scheduler))};return a}(),d=function(a){function e(e,d,b){a.call(this,e);this.duration=d;this.scheduler=b;this.hasValue=!1}l(e,a);e.prototype._next=function(a){this.value=a;this.hasValue=!0;this.throttled||this.add(this.throttled=this.scheduler.schedule(h,this.duration,this))};e.prototype.clearThrottle=
function(){var a=this.value,c=this.hasValue,e=this.throttled;e&&(this.remove(e),this.throttled=null,e.unsubscribe());c&&(this.value=null,this.hasValue=!1,this.destination.next(a))};return e}(a.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],192:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");
f.buffer=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.closingNotifier=c}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.closingNotifier))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.buffer=[];this.add(l.subscribeToResult(this,b))}h(c,a);c.prototype._next=function(a){this.buffer.push(a)};c.prototype.notifyNext=function(a,c,d,b,g){a=this.buffer;this.buffer=[];this.destination.next(a)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,
"../util/subscribeToResult":332}],193:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.bufferCount=function(a,d){void 0===d&&(d=null);return this.lift(new l(a,d))};var l=function(){function a(d,c){this.bufferSize=d;this.startBufferEvery=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.bufferSize,this.startBufferEvery))};
return a}(),k=function(a){function d(c,e,d){a.call(this,c);this.bufferSize=e;this.startBufferEvery=d;this.buffers=[[]];this.count=0}h(d,a);d.prototype._next=function(a){var e=this.count+=1,d=this.destination,b=this.bufferSize,g=this.buffers,f=g.length,k=-1;0===e%(null==this.startBufferEvery?b:this.startBufferEvery)&&g.push([]);for(e=0;e<f;e++){var l=g[e];l.push(a);l.length===b&&(k=e,d.next(l))}-1!==k&&g.splice(k,1)};d.prototype._complete=function(){for(var c=this.destination,e=this.buffers;0<e.length;){var d=
e.shift();0<d.length&&c.next(d)}a.prototype._complete.call(this)};return d}(a.Subscriber)},{"../Subscriber":13}],194:[function(a,b,f){function h(a){var c=a.subscriber,e=a.context;e&&c.closeContext(e);c.isUnsubscribed||(a.context=c.openContext(),a.context.closeAction=this.schedule(a,a.bufferTimeSpan))}function l(a){var c=a.bufferCreationInterval,e=a.bufferTimeSpan,d=a.subscriber,b=a.scheduler,m=d.openContext();d.isUnsubscribed||(d.add(m.closeAction=b.schedule(k,e,{subscriber:d,context:m})),this.schedule(a,
c))}function k(a){a.subscriber.closeContext(a.context)}var g=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var d=a("../scheduler/async"),c=a("../util/isScheduler");f.bufferTime=function(a){var b=arguments.length,m=d.async;c.isScheduler(arguments[arguments.length-1])&&(m=arguments[arguments.length-1],b--);var g=null;2<=b&&(g=arguments[1]);
var n=Number.POSITIVE_INFINITY;3<=b&&(n=arguments[2]);return this.lift(new e(a,g,n,m))};var e=function(){function a(c,e,d,b){this.bufferTimeSpan=c;this.bufferCreationInterval=e;this.maxBufferSize=d;this.scheduler=b}a.prototype.call=function(a,c){return c._subscribe(new n(a,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))};return a}(),m=function(){return function(){this.buffer=[]}}(),n=function(a){function c(e,d,b,m,g){a.call(this,e);this.bufferTimeSpan=d;this.bufferCreationInterval=
b;this.maxBufferSize=m;this.scheduler=g;this.contexts=[];e=this.openContext();(this.timespanOnly=null==b||0>b)?this.add(e.closeAction=g.schedule(h,d,{subscriber:this,context:e,bufferTimeSpan:d})):(m={bufferTimeSpan:d,bufferCreationInterval:b,subscriber:this,scheduler:g},this.add(e.closeAction=g.schedule(k,d,{subscriber:this,context:e})),this.add(g.schedule(l,b,m)))}g(c,a);c.prototype._next=function(a){for(var c=this.contexts,e=c.length,d,b=0;b<e;b++){var m=c[b],g=m.buffer;g.push(a);g.length==this.maxBufferSize&&
(d=m)}if(d)this.onBufferFull(d)};c.prototype._error=function(c){this.contexts.length=0;a.prototype._error.call(this,c)};c.prototype._complete=function(){for(var c=this.contexts,e=this.destination;0<c.length;){var d=c.shift();e.next(d.buffer)}a.prototype._complete.call(this)};c.prototype._unsubscribe=function(){this.contexts=null};c.prototype.onBufferFull=function(a){this.closeContext(a);a=a.closeAction;a.unsubscribe();this.remove(a);if(this.timespanOnly){a=this.openContext();var c=this.bufferTimeSpan;
this.add(a.closeAction=this.scheduler.schedule(h,c,{subscriber:this,context:a,bufferTimeSpan:c}))}};c.prototype.openContext=function(){var a=new m;this.contexts.push(a);return a};c.prototype.closeContext=function(a){this.destination.next(a.buffer);var c=this.contexts;0<=(c?c.indexOf(a):-1)&&c.splice(c.indexOf(a),1)};return c}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301,"../util/isScheduler":328}],195:[function(a,b,f){var h=this&&this.__extends||function(a,e){function d(){this.constructor=
a}for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)},l=a("../Subscription"),k=a("../util/subscribeToResult");a=a("../OuterSubscriber");f.bufferToggle=function(a,e){return this.lift(new g(a,e))};var g=function(){function a(c,d){this.openings=c;this.closingSelector=d}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.openings,this.closingSelector))};return a}(),d=function(a){function e(e,d,b){a.call(this,e);this.openings=
d;this.closingSelector=b;this.contexts=[];this.add(k.subscribeToResult(this,d))}h(e,a);e.prototype._next=function(a){for(var c=this.contexts,e=c.length,d=0;d<e;d++)c[d].buffer.push(a)};e.prototype._error=function(e){for(var d=this.contexts;0<d.length;){var b=d.shift();b.subscription.unsubscribe();b.buffer=null;b.subscription=null}this.contexts=null;a.prototype._error.call(this,e)};e.prototype._complete=function(){for(var e=this.contexts;0<e.length;){var d=e.shift();this.destination.next(d.buffer);
d.subscription.unsubscribe();d.buffer=null;d.subscription=null}this.contexts=null;a.prototype._complete.call(this)};e.prototype.notifyNext=function(a,c,e,d,b){a?this.closeBuffer(a):this.openBuffer(c)};e.prototype.notifyComplete=function(a){this.closeBuffer(a.context)};e.prototype.openBuffer=function(a){try{var c=this.closingSelector.call(this,a);c&&this.trySubscribe(c)}catch(e){this._error(e)}};e.prototype.closeBuffer=function(a){var c=this.contexts;if(c&&a){var e=a.subscription;this.destination.next(a.buffer);
c.splice(c.indexOf(a),1);this.remove(e);e.unsubscribe()}};e.prototype.trySubscribe=function(a){var c=this.contexts,e=new l.Subscription,d={buffer:[],subscription:e};c.push(d);a=k.subscribeToResult(this,a,d);!a||a.isUnsubscribed?this.closeBuffer(d):(a.context=d,this.add(a),e.add(a))};return e}(a.OuterSubscriber)},{"../OuterSubscriber":8,"../Subscription":14,"../util/subscribeToResult":332}],196:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&
(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../Subscription"),k=a("../util/tryCatch"),g=a("../util/errorObject");b=a("../OuterSubscriber");var d=a("../util/subscribeToResult");f.bufferWhen=function(a){return this.lift(new c(a))};var c=function(){function a(c){this.closingSelector=c}a.prototype.call=function(a,c){return c._subscribe(new e(a,this.closingSelector))};return a}(),e=function(a){function c(e,d){a.call(this,e);this.closingSelector=d;this.subscribing=
!1;this.openBuffer()}h(c,a);c.prototype._next=function(a){this.buffer.push(a)};c.prototype._complete=function(){var c=this.buffer;c&&this.destination.next(c);a.prototype._complete.call(this)};c.prototype._unsubscribe=function(){this.buffer=null;this.subscribing=!1};c.prototype.notifyNext=function(a,c,e,d,b){this.openBuffer()};c.prototype.notifyComplete=function(){this.subscribing?this.complete():this.openBuffer()};c.prototype.openBuffer=function(){var a=this.closingSubscription;a&&(this.remove(a),
a.unsubscribe());(a=this.buffer)&&this.destination.next(a);this.buffer=[];var c=k.tryCatch(this.closingSelector)();c===g.errorObject?this.error(g.errorObject.e):(this.closingSubscription=a=new l.Subscription,this.add(a),this.subscribing=!0,a.add(d.subscribeToResult(this,c)),this.subscribing=!1)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../Subscription":14,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],197:[function(a,b,f){var h=a("../Observable"),
l=a("../ReplaySubject");f.cache=function(a,b,d){void 0===a&&(a=Number.POSITIVE_INFINITY);void 0===b&&(b=Number.POSITIVE_INFINITY);var c,e=this,m=0,f,q=function(){return c=new l.ReplaySubject(a,b,d)};return new h.Observable(function(a){c||(c=q(),f=e.subscribe(function(a){return c.next(a)},function(a){var e=c;c=null;e.error(a)},function(){return c.complete()}));m++;c||(c=q());var d=c.subscribe(a);return function(){m--;d&&d.unsubscribe();0===m&&f.unsubscribe()}})}},{"../Observable":5,"../ReplaySubject":9}],
198:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f._catch=function(a){a=new l(a);var d=this.lift(a);return a.caught=d};var l=function(){function a(d){this.selector=d}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.selector,this.caught))};return a}(),k=function(a){function d(c,e,d){a.call(this,c);this.selector=
e;this.caught=d}h(d,a);d.prototype.error=function(a){if(!this.isStopped){var e=void 0;try{e=this.selector(a,this.caught)}catch(d){this.destination.error(d);return}this._innerSub(e)}};d.prototype._innerSub=function(a){this.unsubscribe();this.destination.remove(this);a.subscribe(this.destination)};return d}(a.Subscriber)},{"../Subscriber":13}],199:[function(a,b,f){var h=a("./combineLatest");f.combineAll=function(a){return this.lift(new h.CombineLatestOperator(a))}},{"./combineLatest":200}],200:[function(a,
b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../observable/ArrayObservable"),k=a("../util/isArray");b=a("../OuterSubscriber");var g=a("../util/subscribeToResult"),d={};f.combineLatest=function(){for(var a=[],e=0;e<arguments.length;e++)a[e-0]=arguments[e];e=null;"function"===typeof a[a.length-1]&&(e=a.pop());1===a.length&&k.isArray(a[0])&&(a=
a[0]);a.unshift(this);return(new l.ArrayObservable(a)).lift(new c(e))};var c=function(){function a(c){this.project=c}a.prototype.call=function(a,c){return c._subscribe(new e(a,this.project))};return a}();f.CombineLatestOperator=c;var e=function(a){function c(e,d){a.call(this,e);this.project=d;this.active=0;this.values=[];this.observables=[]}h(c,a);c.prototype._next=function(a){this.values.push(d);this.observables.push(a)};c.prototype._complete=function(){var a=this.observables,c=a.length;if(0===c)this.destination.complete();
else{this.toRespond=this.active=c;for(var e=0;e<c;e++){var d=a[e];this.add(g.subscribeToResult(this,d,d,e))}}};c.prototype.notifyComplete=function(a){0===--this.active&&this.destination.complete()};c.prototype.notifyNext=function(a,c,e,b,m){a=this.values;b=a[e];b=this.toRespond?b===d?--this.toRespond:this.toRespond:0;a[e]=c;0===b&&(this.project?this._tryProject(a):this.destination.next(a))};c.prototype._tryProject=function(a){var c;try{c=this.project.apply(this,a)}catch(e){this.destination.error(e);
return}this.destination.next(c)};return c}(b.OuterSubscriber);f.CombineLatestSubscriber=e},{"../OuterSubscriber":8,"../observable/ArrayObservable":142,"../util/isArray":322,"../util/subscribeToResult":332}],201:[function(a,b,f){function h(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];c=null;l.isScheduler(a[a.length-1])&&(c=a.pop());return(new k.ArrayObservable(a,c)).lift(new g.MergeAllOperator(1))}var l=a("../util/isScheduler"),k=a("../observable/ArrayObservable"),g=a("./mergeAll");
f.concat=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];return h.apply(void 0,[this].concat(a))};f.concatStatic=h},{"../observable/ArrayObservable":142,"../util/isScheduler":328,"./mergeAll":237}],202:[function(a,b,f){var h=a("./mergeAll");f.concatAll=function(){return this.lift(new h.MergeAllOperator(1))}},{"./mergeAll":237}],203:[function(a,b,f){var h=a("./mergeMap");f.concatMap=function(a,b){return this.lift(new h.MergeMapOperator(a,b,1))}},{"./mergeMap":238}],204:[function(a,
b,f){var h=a("./mergeMapTo");f.concatMapTo=function(a,b){return this.lift(new h.MergeMapToOperator(a,b,1))}},{"./mergeMapTo":239}],205:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.count=function(a){return this.lift(new l(a,this))};var l=function(){function a(d,c){this.predicate=d;this.source=c}a.prototype.call=function(a,
c){return c._subscribe(new k(a,this.predicate,this.source))};return a}(),k=function(a){function d(c,e,d){a.call(this,c);this.predicate=e;this.source=d;this.index=this.count=0}h(d,a);d.prototype._next=function(a){this.predicate?this._tryPredicate(a):this.count++};d.prototype._tryPredicate=function(a){var e;try{e=this.predicate(a,this.index++,this.source)}catch(d){this.destination.error(d);return}e&&this.count++};d.prototype._complete=function(){this.destination.next(this.count);this.destination.complete()};
return d}(a.Subscriber)},{"../Subscriber":13}],206:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.debounce=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.durationSelector=c}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.durationSelector))};
return a}(),g=function(a){function c(c,b){a.call(this,c);this.durationSelector=b;this.hasValue=!1;this.durationSubscription=null}h(c,a);c.prototype._next=function(a){try{var c=this.durationSelector.call(this,a);c&&this._tryNext(a,c)}catch(d){this.destination.error(d)}};c.prototype._complete=function(){this.emitValue();this.destination.complete()};c.prototype._tryNext=function(a,c){var d=this.durationSubscription;this.value=a;this.hasValue=!0;d&&(d.unsubscribe(),this.remove(d));d=l.subscribeToResult(this,
c);d.isUnsubscribed||this.add(this.durationSubscription=d)};c.prototype.notifyNext=function(a,c,d,b,g){this.emitValue()};c.prototype.notifyComplete=function(){this.emitValue()};c.prototype.emitValue=function(){if(this.hasValue){var c=this.value,b=this.durationSubscription;b&&(this.durationSubscription=null,b.unsubscribe(),this.remove(b));this.value=null;this.hasValue=!1;a.prototype._next.call(this,c)}};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],207:[function(a,
b,f){function h(a){a.debouncedNext()}var l=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)};b=a("../Subscriber");var k=a("../scheduler/async");f.debounceTime=function(a,e){void 0===e&&(e=k.async);return this.lift(new g(a,e))};var g=function(){function a(c,d){this.dueTime=c;this.scheduler=d}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.dueTime,
this.scheduler))};return a}(),d=function(a){function e(e,d,b){a.call(this,e);this.dueTime=d;this.scheduler=b;this.lastValue=this.debouncedSubscription=null;this.hasValue=!1}l(e,a);e.prototype._next=function(a){this.clearDebounce();this.lastValue=a;this.hasValue=!0;this.add(this.debouncedSubscription=this.scheduler.schedule(h,this.dueTime,this))};e.prototype._complete=function(){this.debouncedNext();this.destination.complete()};e.prototype.debouncedNext=function(){this.clearDebounce();this.hasValue&&
(this.destination.next(this.lastValue),this.lastValue=null,this.hasValue=!1)};e.prototype.clearDebounce=function(){var a=this.debouncedSubscription;null!==a&&(this.remove(a),a.unsubscribe(),this.debouncedSubscription=null)};return e}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],208:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,
new c)};a=a("../Subscriber");f.defaultIfEmpty=function(a){void 0===a&&(a=null);return this.lift(new l(a))};var l=function(){function a(d){this.defaultValue=d}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.defaultValue))};return a}(),k=function(a){function d(c,e){a.call(this,c);this.defaultValue=e;this.isEmpty=!0}h(d,a);d.prototype._next=function(a){this.isEmpty=!1;this.destination.next(a)};d.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue);this.destination.complete()};
return d}(a.Subscriber)},{"../Subscriber":13}],209:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../scheduler/async"),k=a("../util/isDate");b=a("../Subscriber");var g=a("../Notification");f.delay=function(a,c){void 0===c&&(c=l.async);var e=k.isDate(a)?+a-c.now():Math.abs(a);return this.lift(new d(e,c))};var d=function(){function a(c,
e){this.delay=c;this.scheduler=e}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.delay,this.scheduler))};return a}(),c=function(a){function c(e,d,b){a.call(this,e);this.delay=d;this.scheduler=b;this.queue=[];this.errored=this.active=!1}h(c,a);c.dispatch=function(a){for(var c=a.source,e=c.queue,d=a.scheduler,b=a.destination;0<e.length&&0>=e[0].time-d.now();)e.shift().notification.observe(b);0<e.length?(c=Math.max(0,e[0].time-d.now()),this.schedule(a,c)):c.active=!1};c.prototype._schedule=
function(a){this.active=!0;this.add(a.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:a}))};c.prototype.scheduleNotification=function(a){if(!0!==this.errored){var c=this.scheduler;a=new e(c.now()+this.delay,a);this.queue.push(a);!1===this.active&&this._schedule(c)}};c.prototype._next=function(a){this.scheduleNotification(g.Notification.createNext(a))};c.prototype._error=function(a){this.errored=!0;this.queue=[];this.destination.error(a)};c.prototype._complete=function(){this.scheduleNotification(g.Notification.createComplete())};
return c}(b.Subscriber),e=function(){return function(a,c){this.time=a;this.notification=c}}()},{"../Notification":4,"../Subscriber":13,"../scheduler/async":301,"../util/isDate":323}],210:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../Observable"),k=a("../OuterSubscriber"),g=a("../util/subscribeToResult");
f.delayWhen=function(a,c){return c?(new e(this,c)).lift(new d(a)):this.lift(new d(a))};var d=function(){function a(c){this.delayDurationSelector=c}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.delayDurationSelector))};return a}(),c=function(a){function c(e,d){a.call(this,e);this.delayDurationSelector=d;this.completed=!1;this.delayNotifierSubscriptions=[];this.values=[]}h(c,a);c.prototype.notifyNext=function(a,c,e,d,b){this.destination.next(a);this.removeSubscription(b);this.tryComplete()};
c.prototype.notifyError=function(a,c){this._error(a)};c.prototype.notifyComplete=function(a){(a=this.removeSubscription(a))&&this.destination.next(a);this.tryComplete()};c.prototype._next=function(a){try{var c=this.delayDurationSelector(a);c&&this.tryDelay(c,a)}catch(e){this.destination.error(e)}};c.prototype._complete=function(){this.completed=!0;this.tryComplete()};c.prototype.removeSubscription=function(a){a.unsubscribe();a=this.delayNotifierSubscriptions.indexOf(a);var c=null;-1!==a&&(c=this.values[a],
this.delayNotifierSubscriptions.splice(a,1),this.values.splice(a,1));return c};c.prototype.tryDelay=function(a,c){var e=g.subscribeToResult(this,a,c);this.add(e);this.delayNotifierSubscriptions.push(e);this.values.push(c)};c.prototype.tryComplete=function(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()};return c}(k.OuterSubscriber),e=function(a){function c(e,d){a.call(this);this.source=e;this.subscriptionDelay=d}h(c,a);c.prototype._subscribe=function(a){this.subscriptionDelay.subscribe(new m(a,
this.source))};return c}(l.Observable),m=function(a){function c(e,d){a.call(this);this.parent=e;this.source=d;this.sourceSubscribed=!1}h(c,a);c.prototype._next=function(a){this.subscribeToSource()};c.prototype._error=function(a){this.unsubscribe();this.parent.error(a)};c.prototype._complete=function(){this.subscribeToSource()};c.prototype.subscribeToSource=function(){this.sourceSubscribed||(this.sourceSubscribed=!0,this.unsubscribe(),this.source.subscribe(this.parent))};return c}(b.Subscriber)},{"../Observable":5,
"../OuterSubscriber":8,"../Subscriber":13,"../util/subscribeToResult":332}],211:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.dematerialize=function(){return this.lift(new l)};var l=function(){function a(){}a.prototype.call=function(a,c){return c._subscribe(new k(a))};return a}(),k=function(a){function d(c){a.call(this,
c)}h(d,a);d.prototype._next=function(a){a.observe(this.destination)};return d}(a.Subscriber)},{"../Subscriber":13}],212:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.distinct=function(a,c){return this.lift(new k(a,c))};var k=function(){function a(c,e){this.compare=c;this.flushes=
e}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.compare,this.flushes))};return a}(),g=function(a){function c(c,b,g){a.call(this,c);this.values=[];"function"===typeof b&&(this.compare=b);g&&this.add(l.subscribeToResult(this,g))}h(c,a);c.prototype.notifyNext=function(a,c,d,b,g){this.values.length=0};c.prototype.notifyError=function(a,c){this._error(a)};c.prototype._next=function(a){var c=this.values,d=c.length;try{for(var b=0;b<d;b++)if(this.compare(c[b],a))return}catch(g){this.destination.error(g);
return}this.values.push(a);this.destination.next(a)};c.prototype.compare=function(a,c){return a===c};return c}(b.OuterSubscriber);f.DistinctSubscriber=g},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],213:[function(a,b,f){var h=a("./distinct");f.distinctKey=function(a,b,g){return h.distinct.call(this,function(d,c){return b?b(d[a],c[a]):d[a]===c[a]},g)}},{"./distinct":212}],214:[function(a,b,f){var h=this&&this.__extends||function(a,e){function d(){this.constructor=a}for(var b in e)e.hasOwnProperty(b)&&
(a[b]=e[b]);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)};b=a("../Subscriber");var l=a("../util/tryCatch"),k=a("../util/errorObject");f.distinctUntilChanged=function(a,e){return this.lift(new g(a,e))};var g=function(){function a(c,d){this.compare=c;this.keySelector=d}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.compare,this.keySelector))};return a}(),d=function(a){function e(e,d,b){a.call(this,e);this.keySelector=b;this.hasKey=!1;"function"===typeof d&&
(this.compare=d)}h(e,a);e.prototype.compare=function(a,c){return a===c};e.prototype._next=function(a){var c=a;if(this.keySelector&&(c=l.tryCatch(this.keySelector)(a),c===k.errorObject))return this.destination.error(k.errorObject.e);var e=!1;if(this.hasKey){if(e=l.tryCatch(this.compare)(this.key,c),e===k.errorObject)return this.destination.error(k.errorObject.e)}else this.hasKey=!0;!1===!!e&&(this.key=c,this.destination.next(a))};return e}(b.Subscriber)},{"../Subscriber":13,"../util/errorObject":321,
"../util/tryCatch":335}],215:[function(a,b,f){var h=a("./distinctUntilChanged");f.distinctUntilKeyChanged=function(a,b){return h.distinctUntilChanged.call(this,function(g,d){return b?b(g[a],d[a]):g[a]===d[a]})}},{"./distinctUntilChanged":214}],216:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../Subscriber");f._do=function(a,c,e){return this.lift(new k(a,
c,e))};var k=function(){function a(c,e,d){this.nextOrObserver=c;this.error=e;this.complete=d}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.nextOrObserver,this.error,this.complete))};return a}(),g=function(a){function c(c,b,g,f){a.call(this,c);c=new l.Subscriber(b,g,f);c.syncErrorThrowable=!0;this.add(c);this.safeSubscriber=c}h(c,a);c.prototype._next=function(a){var c=this.safeSubscriber;c.next(a);c.syncErrorThrown?this.destination.error(c.syncErrorValue):this.destination.next(a)};
c.prototype._error=function(a){var c=this.safeSubscriber;c.error(a);c.syncErrorThrown?this.destination.error(c.syncErrorValue):this.destination.error(a)};c.prototype._complete=function(){var a=this.safeSubscriber;a.complete();a.syncErrorThrown?this.destination.error(a.syncErrorValue):this.destination.complete()};return c}(l.Subscriber)},{"../Subscriber":13}],217:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);
a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../util/ArgumentOutOfRangeError");f.elementAt=function(a,c){return this.lift(new k(a,c))};var k=function(){function a(c,e){this.index=c;this.defaultValue=e;if(0>c)throw new l.ArgumentOutOfRangeError;}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.index,this.defaultValue))};return a}(),g=function(a){function c(c,b,g){a.call(this,c);this.index=b;this.defaultValue=g}h(c,a);c.prototype._next=
function(a){0===this.index--&&(this.destination.next(a),this.destination.complete())};c.prototype._complete=function(){var a=this.destination;0<=this.index&&("undefined"!==typeof this.defaultValue?a.next(this.defaultValue):a.error(new l.ArgumentOutOfRangeError));a.complete()};return c}(b.Subscriber)},{"../Subscriber":13,"../util/ArgumentOutOfRangeError":311}],218:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);
a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.every=function(a,d){return this.lift(new l(a,d,this))};var l=function(){function a(d,c,e){this.predicate=d;this.thisArg=c;this.source=e}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.predicate,this.thisArg,this.source))};return a}(),k=function(a){function d(c,e,d,b){a.call(this,c);this.predicate=e;this.thisArg=d;this.source=b;this.index=0;this.thisArg=d||this}h(d,a);d.prototype.notifyComplete=
function(a){this.destination.next(a);this.destination.complete()};d.prototype._next=function(a){var e=!1;try{e=this.predicate.call(this.thisArg,a,this.index++,this.source)}catch(d){this.destination.error(d);return}e||this.notifyComplete(!1)};d.prototype._complete=function(){this.notifyComplete(!0)};return d}(a.Subscriber)},{"../Subscriber":13}],219:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=
null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.exhaust=function(){return this.lift(new k)};var k=function(){function a(){}a.prototype.call=function(a,e){return e._subscribe(new g(a))};return a}(),g=function(a){function c(c){a.call(this,c);this.hasSubscription=this.hasCompleted=!1}h(c,a);c.prototype._next=function(a){this.hasSubscription||(this.hasSubscription=!0,this.add(l.subscribeToResult(this,a)))};c.prototype._complete=
function(){this.hasCompleted=!0;this.hasSubscription||this.destination.complete()};c.prototype.notifyComplete=function(a){this.remove(a);this.hasSubscription=!1;this.hasCompleted&&this.destination.complete()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],220:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,
new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.exhaustMap=function(a,c){return this.lift(new k(a,c))};var k=function(){function a(c,e){this.project=c;this.resultSelector=e}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.project,this.resultSelector))};return a}(),g=function(a){function c(c,b,g){a.call(this,c);this.project=b;this.resultSelector=g;this.hasCompleted=this.hasSubscription=!1;this.index=0}h(c,a);c.prototype._next=function(a){this.hasSubscription||
this.tryNext(a)};c.prototype.tryNext=function(a){var c=this.index++,d=this.destination;try{var b=this.project(a,c);this.hasSubscription=!0;this.add(l.subscribeToResult(this,b,a,c))}catch(g){d.error(g)}};c.prototype._complete=function(){this.hasCompleted=!0;this.hasSubscription||this.destination.complete()};c.prototype.notifyNext=function(a,c,d,b,g){g=this.destination;this.resultSelector?this.trySelectResult(a,c,d,b):g.next(c)};c.prototype.trySelectResult=function(a,c,d,b){var g=this.resultSelector,
f=this.destination;try{var k=g(a,c,d,b);f.next(k)}catch(h){f.error(h)}};c.prototype.notifyError=function(a){this.destination.error(a)};c.prototype.notifyComplete=function(a){this.remove(a);this.hasSubscription=!1;this.hasCompleted&&this.destination.complete()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],221:[function(a,b,f){var h=this&&this.__extends||function(a,c){function d(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=
null===c?Object.create(c):(d.prototype=c.prototype,new d)},l=a("../util/tryCatch"),k=a("../util/errorObject");b=a("../OuterSubscriber");var g=a("../util/subscribeToResult");f.expand=function(a,c,b){void 0===c&&(c=Number.POSITIVE_INFINITY);void 0===b&&(b=void 0);c=1>(c||0)?Number.POSITIVE_INFINITY:c;return this.lift(new d(a,c,b))};var d=function(){function a(c,e,d){this.project=c;this.concurrent=e;this.scheduler=d}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.project,this.concurrent,
this.scheduler))};return a}();f.ExpandOperator=d;var c=function(a){function c(d,b,m,g){a.call(this,d);this.project=b;this.concurrent=m;this.scheduler=g;this.active=this.index=0;this.hasCompleted=!1;m<Number.POSITIVE_INFINITY&&(this.buffer=[])}h(c,a);c.dispatch=function(a){a.subscriber.subscribeToProjection(a.result,a.value,a.index)};c.prototype._next=function(a){var e=this.destination;if(e.isUnsubscribed)this._complete();else{var d=this.index++;if(this.active<this.concurrent){e.next(a);var b=l.tryCatch(this.project)(a,
d);b===k.errorObject?e.error(k.errorObject.e):this.scheduler?this.add(this.scheduler.schedule(c.dispatch,0,{subscriber:this,result:b,value:a,index:d})):this.subscribeToProjection(b,a,d)}else this.buffer.push(a)}};c.prototype.subscribeToProjection=function(a,c,e){this.active++;this.add(g.subscribeToResult(this,a,c,e))};c.prototype._complete=function(){(this.hasCompleted=!0,0===this.active)&&this.destination.complete()};c.prototype.notifyNext=function(a,c,e,d,b){this._next(c)};c.prototype.notifyComplete=
function(a){var c=this.buffer;this.remove(a);this.active--;c&&0<c.length&&this._next(c.shift());this.hasCompleted&&0===this.active&&this.destination.complete()};return c}(b.OuterSubscriber);f.ExpandSubscriber=c},{"../OuterSubscriber":8,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],222:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=
d.prototype,new c)};a=a("../Subscriber");f.filter=function(a,d){return this.lift(new l(a,d))};var l=function(){function a(d,c){this.predicate=d;this.thisArg=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.predicate,this.thisArg))};return a}(),k=function(a){function d(c,e,d){a.call(this,c);this.predicate=e;this.thisArg=d;this.count=0;this.predicate=e}h(d,a);d.prototype._next=function(a){var e;try{e=this.predicate.call(this.thisArg,a,this.count++)}catch(d){this.destination.error(d);
return}e&&this.destination.next(a)};return d}(a.Subscriber)},{"../Subscriber":13}],223:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../Subscription");f._finally=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.callback=c}a.prototype.call=function(a,e){return e._subscribe(new g(a,
this.callback))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.add(new l.Subscription(b))}h(c,a);return c}(b.Subscriber)},{"../Subscriber":13,"../Subscription":14}],224:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.find=function(a,d){if("function"!==typeof a)throw new TypeError("predicate is not a function");
return this.lift(new l(a,this,!1,d))};var l=function(){function a(d,c,e,b){this.predicate=d;this.source=c;this.yieldIndex=e;this.thisArg=b}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.predicate,this.source,this.yieldIndex,this.thisArg))};return a}();f.FindValueOperator=l;var k=function(a){function d(c,e,d,b,f){a.call(this,c);this.predicate=e;this.source=d;this.yieldIndex=b;this.thisArg=f;this.index=0}h(d,a);d.prototype.notifyComplete=function(a){var e=this.destination;e.next(a);
e.complete()};d.prototype._next=function(a){var e=this.predicate,d=this.thisArg,b=this.index++;try{e.call(d||this,a,b,this.source)&&this.notifyComplete(this.yieldIndex?b:a)}catch(g){this.destination.error(g)}};d.prototype._complete=function(){this.notifyComplete(this.yieldIndex?-1:void 0)};return d}(a.Subscriber);f.FindValueSubscriber=k},{"../Subscriber":13}],225:[function(a,b,f){var h=a("./find");f.findIndex=function(a,b){return this.lift(new h.FindValueOperator(a,this,!0,b))}},{"./find":224}],226:[function(a,
b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../util/EmptyError");f.first=function(a,c,e){return this.lift(new k(a,c,e,this))};var k=function(){function a(c,e,d,b){this.predicate=c;this.resultSelector=e;this.defaultValue=d;this.source=b}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.predicate,this.resultSelector,
this.defaultValue,this.source))};return a}(),g=function(a){function c(c,b,g,f,k){a.call(this,c);this.predicate=b;this.resultSelector=g;this.defaultValue=f;this.source=k;this.index=0;this.hasCompleted=!1}h(c,a);c.prototype._next=function(a){var c=this.index++;this.predicate?this._tryPredicate(a,c):this._emit(a,c)};c.prototype._tryPredicate=function(a,c){var d;try{d=this.predicate(a,c,this.source)}catch(b){this.destination.error(b);return}d&&this._emit(a,c)};c.prototype._emit=function(a,c){this.resultSelector?
this._tryResultSelector(a,c):this._emitFinal(a)};c.prototype._tryResultSelector=function(a,c){var d;try{d=this.resultSelector(a,c)}catch(b){this.destination.error(b);return}this._emitFinal(d)};c.prototype._emitFinal=function(a){var c=this.destination;c.next(a);c.complete();this.hasCompleted=!0};c.prototype._complete=function(){var a=this.destination;this.hasCompleted||"undefined"===typeof this.defaultValue?this.hasCompleted||a.error(new l.EmptyError):(a.next(this.defaultValue),a.complete())};return c}(b.Subscriber)},
{"../Subscriber":13,"../util/EmptyError":312}],227:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../Subscription"),k=a("../Observable"),g=a("../Subject"),d=a("../util/Map"),c=a("../util/FastMap");f.groupBy=function(a,c,d){return this.lift(new e(this,a,c,d))};var e=function(){function a(c,e,d,b){this.source=
c;this.keySelector=e;this.elementSelector=d;this.durationSelector=b}a.prototype.call=function(a,c){return c._subscribe(new m(a,this.keySelector,this.elementSelector,this.durationSelector))};return a}(),m=function(a){function e(c,d,b,m){a.call(this,c);this.keySelector=d;this.elementSelector=b;this.durationSelector=m;this.groups=null;this.attemptedToUnsubscribe=!1;this.count=0}h(e,a);e.prototype._next=function(a){var c;try{c=this.keySelector(a)}catch(e){this.error(e);return}this._group(a,c)};e.prototype._group=
function(a,e){var b=this.groups;b||(b=this.groups="string"===typeof e?new c.FastMap:new d.Map);var m=b.get(e),f;if(this.elementSelector)try{f=this.elementSelector(a)}catch(k){this.error(k)}else f=a;if(!m&&(b.set(e,m=new g.Subject),b=new q(e,m,this),this.destination.next(b),this.durationSelector)){b=void 0;try{b=this.durationSelector(new q(e,m))}catch(k){this.error(k);return}this.add(b.subscribe(new n(e,m,this)))}m.isUnsubscribed||m.next(f)};e.prototype._error=function(a){var c=this.groups;c&&(c.forEach(function(c,
e){c.error(a)}),c.clear());this.destination.error(a)};e.prototype._complete=function(){var a=this.groups;a&&(a.forEach(function(a,c){a.complete()}),a.clear());this.destination.complete()};e.prototype.removeGroup=function(a){this.groups["delete"](a)};e.prototype.unsubscribe=function(){this.isUnsubscribed||this.attemptedToUnsubscribe||(this.attemptedToUnsubscribe=!0,0===this.count&&a.prototype.unsubscribe.call(this))};return e}(b.Subscriber),n=function(a){function c(e,d,b){a.call(this);this.key=e;this.group=
d;this.parent=b}h(c,a);c.prototype._next=function(a){this._complete()};c.prototype._error=function(a){var c=this.group;c.isUnsubscribed||c.error(a);this.parent.removeGroup(this.key)};c.prototype._complete=function(){var a=this.group;a.isUnsubscribed||a.complete();this.parent.removeGroup(this.key)};return c}(b.Subscriber),q=function(a){function c(e,d,b){a.call(this);this.key=e;this.groupSubject=d;this.refCountSubscription=b}h(c,a);c.prototype._subscribe=function(a){var c=new l.Subscription,e=this.refCountSubscription,
d=this.groupSubject;e&&!e.isUnsubscribed&&c.add(new t(e));c.add(d.subscribe(a));return c};return c}(k.Observable);f.GroupedObservable=q;var t=function(a){function c(e){a.call(this);this.parent=e;e.count++}h(c,a);c.prototype.unsubscribe=function(){var c=this.parent;c.isUnsubscribed||this.isUnsubscribed||(a.prototype.unsubscribe.call(this),--c.count,0===c.count&&c.attemptedToUnsubscribe&&c.unsubscribe())};return c}(l.Subscription)},{"../Observable":5,"../Subject":11,"../Subscriber":13,"../Subscription":14,
"../util/FastMap":313,"../util/Map":315}],228:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../Subscriber");var l=a("../util/noop");f.ignoreElements=function(){return this.lift(new k)};var k=function(){function a(){}a.prototype.call=function(a,e){return e._subscribe(new g(a))};return a}(),g=function(a){function c(){a.apply(this,arguments)}
h(c,a);c.prototype._next=function(a){l.noop()};return c}(b.Subscriber)},{"../Subscriber":13,"../util/noop":329}],229:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.isEmpty=function(){return this.lift(new l)};var l=function(){function a(){}a.prototype.call=function(a,c){return c._subscribe(new k(a))};return a}(),k=
function(a){function d(c){a.call(this,c)}h(d,a);d.prototype.notifyComplete=function(a){var e=this.destination;e.next(a);e.complete()};d.prototype._next=function(a){this.notifyComplete(!1)};d.prototype._complete=function(){this.notifyComplete(!0)};return d}(a.Subscriber)},{"../Subscriber":13}],230:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};
b=a("../Subscriber");var l=a("../util/EmptyError");f.last=function(a,c,e){return this.lift(new k(a,c,e,this))};var k=function(){function a(c,e,d,b){this.predicate=c;this.resultSelector=e;this.defaultValue=d;this.source=b}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.predicate,this.resultSelector,this.defaultValue,this.source))};return a}(),g=function(a){function c(c,b,g,f,k){a.call(this,c);this.predicate=b;this.resultSelector=g;this.defaultValue=f;this.source=k;this.hasValue=!1;
this.index=0;"undefined"!==typeof f&&(this.lastValue=f,this.hasValue=!0)}h(c,a);c.prototype._next=function(a){var c=this.index++;this.predicate?this._tryPredicate(a,c):this.resultSelector?this._tryResultSelector(a,c):(this.lastValue=a,this.hasValue=!0)};c.prototype._tryPredicate=function(a,c){var d;try{d=this.predicate(a,c,this.source)}catch(b){this.destination.error(b);return}d&&(this.resultSelector?this._tryResultSelector(a,c):(this.lastValue=a,this.hasValue=!0))};c.prototype._tryResultSelector=
function(a,c){var d;try{d=this.resultSelector(a,c)}catch(b){this.destination.error(b);return}this.lastValue=d;this.hasValue=!0};c.prototype._complete=function(){var a=this.destination;this.hasValue?(a.next(this.lastValue),a.complete()):a.error(new l.EmptyError)};return c}(b.Subscriber)},{"../Subscriber":13,"../util/EmptyError":312}],231:[function(a,b,f){f.letProto=function(a){return a(this)}},{}],232:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&
(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.map=function(a,d){if("function"!==typeof a)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.lift(new l(a,d))};var l=function(){function a(d,c){this.project=d;this.thisArg=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.project,this.thisArg))};return a}(),k=function(a){function d(c,e,d){a.call(this,c);this.project=e;this.count=0;this.thisArg=
d||this}h(d,a);d.prototype._next=function(a){var e;try{e=this.project.call(this.thisArg,a,this.count++)}catch(d){this.destination.error(d);return}this.destination.next(e)};return d}(a.Subscriber)},{"../Subscriber":13}],233:[function(a,b,f){var h=this&&this.__extends||function(a,d){function c(){this.constructor=a}for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e]);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)};a=a("../Subscriber");f.mapTo=function(a){return this.lift(new l(a))};
var l=function(){function a(d){this.value=d}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.value))};return a}(),k=function(a){function d(c,e){a.call(this,c);this.value=e}h(d,a);d.prototype._next=function(a){this.destination.next(this.value)};return d}(a.Subscriber)},{"../Subscriber":13}],234:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,
new e)};b=a("../Subscriber");var l=a("../Notification");f.materialize=function(){return this.lift(new k)};var k=function(){function a(){}a.prototype.call=function(a,e){return e._subscribe(new g(a))};return a}(),g=function(a){function c(c){a.call(this,c)}h(c,a);c.prototype._next=function(a){this.destination.next(l.Notification.createNext(a))};c.prototype._error=function(a){var c=this.destination;c.next(l.Notification.createError(a));c.complete()};c.prototype._complete=function(){var a=this.destination;
a.next(l.Notification.createComplete());a.complete()};return c}(b.Subscriber)},{"../Notification":4,"../Subscriber":13}],235:[function(a,b,f){var h=a("./reduce");f.max=function(a){return this.lift(new h.ReduceOperator("function"===typeof a?a:function(a,b){return a>b?a:b}))}},{"./reduce":253}],236:[function(a,b,f){function h(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];var c=Number.POSITIVE_INFINITY,e=null,b=a[a.length-1];g.isScheduler(b)?(e=a.pop(),1<a.length&&"number"===typeof a[a.length-
1]&&(c=a.pop())):"number"===typeof b&&(c=a.pop());return 1===a.length?a[0]:(new l.ArrayObservable(a,e)).lift(new k.MergeAllOperator(c))}var l=a("../observable/ArrayObservable"),k=a("./mergeAll"),g=a("../util/isScheduler");f.merge=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];a.unshift(this);return h.apply(this,a)};f.mergeStatic=h},{"../observable/ArrayObservable":142,"../util/isScheduler":328,"./mergeAll":237}],237:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=
a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.mergeAll=function(a){void 0===a&&(a=Number.POSITIVE_INFINITY);return this.lift(new k(a))};var k=function(){function a(c){this.concurrent=c}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.concurrent))};return a}();f.MergeAllOperator=k;var g=function(a){function c(c,b){a.call(this,c);this.concurrent=
b;this.hasCompleted=!1;this.buffer=[];this.active=0}h(c,a);c.prototype._next=function(a){this.active<this.concurrent?(this.active++,this.add(l.subscribeToResult(this,a))):this.buffer.push(a)};c.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};c.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return c}(b.OuterSubscriber);
f.MergeAllSubscriber=g},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],238:[function(a,b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)},l=a("../util/subscribeToResult");a=a("../OuterSubscriber");f.mergeMap=function(a,c,e){void 0===e&&(e=Number.POSITIVE_INFINITY);"number"===typeof c&&(e=c,c=null);return this.lift(new k(a,c,e))};var k=function(){function a(c,
e,d){void 0===d&&(d=Number.POSITIVE_INFINITY);this.project=c;this.resultSelector=e;this.concurrent=d}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.project,this.resultSelector,this.concurrent))};return a}();f.MergeMapOperator=k;var g=function(a){function c(c,b,f,g){void 0===g&&(g=Number.POSITIVE_INFINITY);a.call(this,c);this.project=b;this.resultSelector=f;this.concurrent=g;this.hasCompleted=!1;this.buffer=[];this.index=this.active=0}h(c,a);c.prototype._next=function(a){this.active<
this.concurrent?this._tryNext(a):this.buffer.push(a)};c.prototype._tryNext=function(a){var c,d=this.index++;try{c=this.project(a,d)}catch(b){this.destination.error(b);return}this.active++;this._innerSub(c,a,d)};c.prototype._innerSub=function(a,c,d){this.add(l.subscribeToResult(this,a,c,d))};c.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};c.prototype.notifyNext=function(a,c,d,b,f){this.resultSelector?this._notifyResultSelector(a,
c,d,b):this.destination.next(c)};c.prototype._notifyResultSelector=function(a,c,d,b){var f;try{f=this.resultSelector(a,c,d,b)}catch(g){this.destination.error(g);return}this.destination.next(f)};c.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return c}(a.OuterSubscriber);f.MergeMapSubscriber=g},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],239:[function(a,
b,f){var h=this&&this.__extends||function(a,c){function e(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.mergeMapTo=function(a,c,e){void 0===e&&(e=Number.POSITIVE_INFINITY);"number"===typeof c&&(e=c,c=null);return this.lift(new k(a,c,e))};var k=function(){function a(c,e,d){void 0===d&&(d=Number.POSITIVE_INFINITY);this.ish=c;this.resultSelector=
e;this.concurrent=d}a.prototype.call=function(a,e){return e._subscribe(new g(a,this.ish,this.resultSelector,this.concurrent))};return a}();f.MergeMapToOperator=k;var g=function(a){function c(c,b,f,g){void 0===g&&(g=Number.POSITIVE_INFINITY);a.call(this,c);this.ish=b;this.resultSelector=f;this.concurrent=g;this.hasCompleted=!1;this.buffer=[];this.index=this.active=0}h(c,a);c.prototype._next=function(a){if(this.active<this.concurrent){var c=this.resultSelector,b=this.index++,d=this.ish,f=this.destination;
this.active++;this._innerSub(d,f,c,a,b)}else this.buffer.push(a)};c.prototype._innerSub=function(a,c,b,d,f){this.add(l.subscribeToResult(this,a,d,f))};c.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};c.prototype.notifyNext=function(a,c,d,b,f){f=this.destination;this.resultSelector?this.trySelectResult(a,c,d,b):f.next(c)};c.prototype.trySelectResult=function(a,c,d,b){var f=this.resultSelector,g=this.destination,k;try{k=f(a,
c,d,b)}catch(h){g.error(h);return}g.next(k)};c.prototype.notifyError=function(a){this.destination.error(a)};c.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return c}(b.OuterSubscriber);f.MergeMapToSubscriber=g},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],240:[function(a,b,f){var h=this&&this.__extends||function(a,c){function d(){this.constructor=a}for(var b in c)c.hasOwnProperty(b)&&
(a[b]=c[b]);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)},l=a("../util/tryCatch"),k=a("../util/errorObject"),g=a("../util/subscribeToResult");a=a("../OuterSubscriber");f.mergeScan=function(a,c,b){void 0===b&&(b=Number.POSITIVE_INFINITY);return this.lift(new d(a,c,b))};var d=function(){function a(c,e,b){this.project=c;this.seed=e;this.concurrent=b}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.project,this.seed,this.concurrent))};return a}();f.MergeScanOperator=
d;var c=function(a){function c(b,d,f,g){a.call(this,b);this.project=d;this.acc=f;this.concurrent=g;this.hasCompleted=this.hasValue=!1;this.buffer=[];this.index=this.active=0}h(c,a);c.prototype._next=function(a){if(this.active<this.concurrent){var c=this.index++,e=l.tryCatch(this.project)(this.acc,a),b=this.destination;e===k.errorObject?b.error(k.errorObject.e):(this.active++,this._innerSub(e,a,c))}else this.buffer.push(a)};c.prototype._innerSub=function(a,c,e){this.add(g.subscribeToResult(this,a,
c,e))};c.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())};c.prototype.notifyNext=function(a,c,e,b,d){a=this.destination;this.acc=c;this.hasValue=!0;a.next(c)};c.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())};
return c}(a.OuterSubscriber);f.MergeScanSubscriber=c},{"../OuterSubscriber":8,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],241:[function(a,b,f){var h=a("./reduce");f.min=function(a){return this.lift(new h.ReduceOperator("function"===typeof a?a:function(a,b){return a<b?a:b}))}},{"./reduce":253}],242:[function(a,b,f){var h=a("../observable/MulticastObservable"),l=a("../observable/ConnectableObservable");f.multicast=function(a,b){var d;d="function"===typeof a?a:
function(){return a};return b?new h.MulticastObservable(this,d,b):new l.ConnectableObservable(this,d)}},{"../observable/ConnectableObservable":145,"../observable/MulticastObservable":157}],243:[function(a,b,f){var h=this&&this.__extends||function(a,e){function b(){this.constructor=a}for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d]);a.prototype=null===e?Object.create(e):(b.prototype=e.prototype,new b)};b=a("../Subscriber");var l=a("../Notification");f.observeOn=function(a,e){void 0===e&&(e=0);return this.lift(new k(a,
e))};var k=function(){function a(c,b){void 0===b&&(b=0);this.scheduler=c;this.delay=b}a.prototype.call=function(a,c){return c._subscribe(new g(a,this.scheduler,this.delay))};return a}();f.ObserveOnOperator=k;var g=function(a){function e(e,b,d){void 0===d&&(d=0);a.call(this,e);this.scheduler=b;this.delay=d}h(e,a);e.dispatch=function(a){a.notification.observe(a.destination)};e.prototype.scheduleMessage=function(a){this.add(this.scheduler.schedule(e.dispatch,this.delay,new d(a,this.destination)))};e.prototype._next=
function(a){this.scheduleMessage(l.Notification.createNext(a))};e.prototype._error=function(a){this.scheduleMessage(l.Notification.createError(a))};e.prototype._complete=function(){this.scheduleMessage(l.Notification.createComplete())};return e}(b.Subscriber);f.ObserveOnSubscriber=g;var d=function(){return function(a,e){this.notification=a;this.destination=e}}();f.ObserveOnMessage=d},{"../Notification":4,"../Subscriber":13}],244:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=
a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../observable/FromObservable"),k=a("../util/isArray");b=a("../OuterSubscriber");var g=a("../util/subscribeToResult");f.onErrorResumeNext=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];1===a.length&&k.isArray(a[0])&&(a=a[0]);return this.lift(new d(a))};f.onErrorResumeNextStatic=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];1===
a.length&&k.isArray(a[0])&&(a=a[0]);c=a.shift();return(new l.FromObservable(c,null)).lift(new d(a))};var d=function(){function a(c){this.nextSources=c}a.prototype.call=function(a,e){return e._subscribe(new c(a,this.nextSources))};return a}(),c=function(a){function c(b,d){a.call(this,b);this.destination=b;this.nextSources=d}h(c,a);c.prototype.notifyError=function(a,c){this.subscribeToNextSource()};c.prototype.notifyComplete=function(a){this.subscribeToNextSource()};c.prototype._error=function(a){this.subscribeToNextSource()};
c.prototype._complete=function(){this.subscribeToNextSource()};c.prototype.subscribeToNextSource=function(){var a=this.nextSources.shift();a?this.add(g.subscribeToResult(this,a)):this.destination.complete()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../observable/FromObservable":152,"../util/isArray":322,"../util/subscribeToResult":332}],245:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=
null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.pairwise=function(){return this.lift(new l)};var l=function(){function a(){}a.prototype.call=function(a,c){return c._subscribe(new k(a))};return a}(),k=function(a){function b(c){a.call(this,c);this.hasPrev=!1}h(b,a);b.prototype._next=function(a){this.hasPrev?this.destination.next([this.prev,a]):this.hasPrev=!0;this.prev=a};return b}(a.Subscriber)},{"../Subscriber":13}],246:[function(a,b,f){var h=a("../util/not"),l=a("./filter");
f.partition=function(a,b){return[l.filter.call(this,a),l.filter.call(this,h.not(a,b))]}},{"../util/not":330,"./filter":222}],247:[function(a,b,f){function h(a,b){return function(d){var c=d;for(d=0;d<b;d++)if(c=c[a[d]],"undefined"===typeof c)return;return c}}var l=a("./map");f.pluck=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];b=a.length;if(0===b)throw Error("List of properties cannot be empty.");return l.map.call(this,h(a,b))}},{"./map":232}],248:[function(a,b,f){var h=a("../Subject"),
l=a("./multicast");f.publish=function(a){return a?l.multicast.call(this,function(){return new h.Subject},a):l.multicast.call(this,new h.Subject)}},{"../Subject":11,"./multicast":242}],249:[function(a,b,f){var h=a("../BehaviorSubject"),l=a("./multicast");f.publishBehavior=function(a){return l.multicast.call(this,new h.BehaviorSubject(a))}},{"../BehaviorSubject":2,"./multicast":242}],250:[function(a,b,f){var h=a("../AsyncSubject"),l=a("./multicast");f.publishLast=function(){return l.multicast.call(this,
new h.AsyncSubject)}},{"../AsyncSubject":1,"./multicast":242}],251:[function(a,b,f){var h=a("../ReplaySubject"),l=a("./multicast");f.publishReplay=function(a,b,d){void 0===a&&(a=Number.POSITIVE_INFINITY);void 0===b&&(b=Number.POSITIVE_INFINITY);return l.multicast.call(this,new h.ReplaySubject(a,b,d))}},{"../ReplaySubject":9,"./multicast":242}],252:[function(a,b,f){function h(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];if(1===a.length)if(k.isArray(a[0]))a=a[0];else return a[0];return(new g.ArrayObservable(a)).lift(new c)}
var l=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},k=a("../util/isArray"),g=a("../observable/ArrayObservable");b=a("../OuterSubscriber");var d=a("../util/subscribeToResult");f.race=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];1===a.length&&k.isArray(a[0])&&(a=a[0]);a.unshift(this);return h.apply(this,a)};f.raceStatic=h;var c=function(){function a(){}
a.prototype.call=function(a,c){return c._subscribe(new e(a))};return a}();f.RaceOperator=c;var e=function(a){function c(b){a.call(this,b);this.hasFirst=!1;this.observables=[];this.subscriptions=[]}l(c,a);c.prototype._next=function(a){this.observables.push(a)};c.prototype._complete=function(){var a=this.observables,c=a.length;if(0===c)this.destination.complete();else{for(var b=0;b<c;b++){var e=a[b],e=d.subscribeToResult(this,e,e,b);this.subscriptions&&(this.subscriptions.push(e),this.add(e))}this.observables=
null}};c.prototype.notifyNext=function(a,c,b,e,d){if(!this.hasFirst){this.hasFirst=!0;for(a=0;a<this.subscriptions.length;a++)a!==b&&(e=this.subscriptions[a],e.unsubscribe(),this.remove(e));this.subscriptions=null}this.destination.next(c)};return c}(b.OuterSubscriber);f.RaceSubscriber=e},{"../OuterSubscriber":8,"../observable/ArrayObservable":142,"../util/isArray":322,"../util/subscribeToResult":332}],253:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&
(a[e]=b[e]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.reduce=function(a,b){return this.lift(new l(a,b))};var l=function(){function a(b,c){this.accumulator=b;this.seed=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.accumulator,this.seed))};return a}();f.ReduceOperator=l;var k=function(a){function b(c,e,d){a.call(this,c);this.accumulator=e;this.hasValue=!1;this.acc=d;this.accumulator=e;this.hasSeed="undefined"!==typeof d}h(b,a);
b.prototype._next=function(a){this.hasValue||(this.hasValue=this.hasSeed)?this._tryReduce(a):(this.acc=a,this.hasValue=!0)};b.prototype._tryReduce=function(a){var b;try{b=this.accumulator(this.acc,a)}catch(d){this.destination.error(d);return}this.acc=b};b.prototype._complete=function(){(this.hasValue||this.hasSeed)&&this.destination.next(this.acc);this.destination.complete()};return b}(a.Subscriber);f.ReduceSubscriber=k},{"../Subscriber":13}],254:[function(a,b,f){var h=this&&this.__extends||function(a,
c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../Subscriber");var l=a("../observable/EmptyObservable");f.repeat=function(a){void 0===a&&(a=-1);return 0===a?new l.EmptyObservable:0>a?this.lift(new k(-1,this)):this.lift(new k(a-1,this))};var k=function(){function a(c,b){this.count=c;this.source=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.count,this.source))};return a}(),
g=function(a){function c(c,b,f){a.call(this,c);this.count=b;this.source=f}h(c,a);c.prototype.complete=function(){if(!this.isStopped){var c=this.source,b=this.count;if(0===b)return a.prototype.complete.call(this);-1<b&&(this.count=b-1);this.unsubscribe();this.isUnsubscribed=this.isStopped=!1;c.subscribe(this)}};return c}(b.Subscriber)},{"../Subscriber":13,"../observable/EmptyObservable":147}],255:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&
(a[e]=b[e]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.retry=function(a){void 0===a&&(a=-1);return this.lift(new l(a,this))};var l=function(){function a(b,c){this.count=b;this.source=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.count,this.source))};return a}(),k=function(a){function b(c,e,d){a.call(this,c);this.count=e;this.source=d}h(b,a);b.prototype.error=function(c){if(!this.isStopped){var b=this.source,d=this.count;if(0===
d)return a.prototype.error.call(this,c);-1<d&&(this.count=d-1);this.unsubscribe();this.isUnsubscribed=this.isStopped=!1;b.subscribe(this)}};return b}(a.Subscriber)},{"../Subscriber":13}],256:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../Subject"),k=a("../util/tryCatch"),g=a("../util/errorObject");b=a("../OuterSubscriber");var d=
a("../util/subscribeToResult");f.retryWhen=function(a){return this.lift(new c(a,this))};var c=function(){function a(c,b){this.notifier=c;this.source=b}a.prototype.call=function(a,c){return c._subscribe(new e(a,this.notifier,this.source))};return a}(),e=function(a){function c(b,e,d){a.call(this,b);this.notifier=e;this.source=d}h(c,a);c.prototype.error=function(c){if(!this.isStopped){var b=this.errors,e=this.retries,f=this.retriesSubscription;if(e)this.retriesSubscription=this.errors=null;else{b=new l.Subject;
e=k.tryCatch(this.notifier)(b);if(e===g.errorObject)return a.prototype.error.call(this,g.errorObject.e);f=d.subscribeToResult(this,e)}this.unsubscribe();this.isUnsubscribed=!1;this.errors=b;this.retries=e;this.retriesSubscription=f;b.next(c)}};c.prototype._unsubscribe=function(){var a=this.errors,c=this.retriesSubscription;a&&(a.unsubscribe(),this.errors=null);c&&(c.unsubscribe(),this.retriesSubscription=null);this.retries=null};c.prototype.notifyNext=function(a,c,b,e,d){a=this.errors;c=this.retries;
b=this.retriesSubscription;this.retriesSubscription=this.retries=this.errors=null;this.unsubscribe();this.isUnsubscribed=this.isStopped=!1;this.errors=a;this.retries=c;this.retriesSubscription=b;this.source.subscribe(this)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../Subject":11,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],257:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&
(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.sample=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.notifier=c}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.notifier))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.hasValue=!1;this.add(l.subscribeToResult(this,b))}h(c,a);c.prototype._next=function(a){this.value=a;this.hasValue=!0};c.prototype.notifyNext=
function(a,c,b,d,f){this.emitValue()};c.prototype.notifyComplete=function(){this.emitValue()};c.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],258:[function(a,b,f){function h(a){var b=a.period;a.subscriber.notifyNext();this.schedule(a,b)}var l=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);
a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Subscriber");var k=a("../scheduler/async");f.sampleTime=function(a,b){void 0===b&&(b=k.async);return this.lift(new g(a,b))};var g=function(){function a(c,b){this.period=c;this.scheduler=b}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.period,this.scheduler))};return a}(),d=function(a){function b(e,d,f){a.call(this,e);this.period=d;this.scheduler=f;this.hasValue=!1;this.add(f.schedule(h,d,{subscriber:this,
period:d}))}l(b,a);b.prototype._next=function(a){this.lastValue=a;this.hasValue=!0};b.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))};return b}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],259:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.scan=
function(a,b){return this.lift(new l(a,b))};var l=function(){function a(b,c){this.accumulator=b;this.seed=c}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.accumulator,this.seed))};return a}(),k=function(a){function b(c,e,d){a.call(this,c);this.accumulator=e;this.index=0;this.accumulatorSet=!1;this.seed=d;this.accumulatorSet="undefined"!==typeof d}h(b,a);Object.defineProperty(b.prototype,"seed",{get:function(){return this._seed},set:function(a){this.accumulatorSet=!0;this._seed=a},
enumerable:!0,configurable:!0});b.prototype._next=function(a){if(this.accumulatorSet)return this._tryNext(a);this.seed=a;this.destination.next(a)};b.prototype._tryNext=function(a){var b=this.index++,d;try{d=this.accumulator(this.seed,a,b)}catch(f){this.destination.error(f)}this.seed=d;this.destination.next(d)};return b}(a.Subscriber)},{"../Subscriber":13}],260:[function(a,b,f){function h(){return new k.Subject}var l=a("./multicast"),k=a("../Subject");f.share=function(){return l.multicast.call(this,
h).refCount()}},{"../Subject":11,"./multicast":242}],261:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../Subscriber");var l=a("../util/EmptyError");f.single=function(a){return this.lift(new k(a,this))};var k=function(){function a(c,b){this.predicate=c;this.source=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.predicate,
this.source))};return a}(),g=function(a){function c(c,b,f){a.call(this,c);this.predicate=b;this.source=f;this.seenValue=!1;this.index=0}h(c,a);c.prototype.applySingleValue=function(a){this.seenValue?this.destination.error("Sequence contains more than one element"):(this.seenValue=!0,this.singleValue=a)};c.prototype._next=function(a){var c=this.predicate;this.index++;c?this.tryNext(a):this.applySingleValue(a)};c.prototype.tryNext=function(a){try{this.predicate(a,this.index,this.source)&&this.applySingleValue(a)}catch(c){this.destination.error(c)}};
c.prototype._complete=function(){var a=this.destination;0<this.index?(a.next(this.seenValue?this.singleValue:void 0),a.complete()):a.error(new l.EmptyError)};return c}(b.Subscriber)},{"../Subscriber":13,"../util/EmptyError":312}],262:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.skip=function(a){return this.lift(new l(a))};
var l=function(){function a(b){this.total=b}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.total))};return a}(),k=function(a){function b(c,e){a.call(this,c);this.total=e;this.count=0}h(b,a);b.prototype._next=function(a){++this.count>this.total&&this.destination.next(a)};return b}(a.Subscriber)},{"../Subscriber":13}],263:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):
(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.skipUntil=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.notifier=c}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.notifier))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.isInnerStopped=this.hasValue=!1;this.add(l.subscribeToResult(this,b))}h(c,a);c.prototype._next=function(c){this.hasValue&&a.prototype._next.call(this,c)};c.prototype._complete=
function(){this.isInnerStopped?a.prototype._complete.call(this):this.unsubscribe()};c.prototype.notifyNext=function(a,c,b,d,f){this.hasValue=!0};c.prototype.notifyComplete=function(){this.isInnerStopped=!0;this.isStopped&&a.prototype._complete.call(this)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],264:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=null===
b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.skipWhile=function(a){return this.lift(new l(a))};var l=function(){function a(b){this.predicate=b}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.predicate))};return a}(),k=function(a){function b(c,e){a.call(this,c);this.predicate=e;this.skipping=!0;this.index=0}h(b,a);b.prototype._next=function(a){var b=this.destination;this.skipping&&this.tryCallPredicate(a);this.skipping||b.next(a)};b.prototype.tryCallPredicate=
function(a){try{this.skipping=!!this.predicate(a,this.index++)}catch(b){this.destination.error(b)}};return b}(a.Subscriber)},{"../Subscriber":13}],265:[function(a,b,f){var h=a("../observable/ArrayObservable"),l=a("../observable/ScalarObservable"),k=a("../observable/EmptyObservable"),g=a("./concat"),d=a("../util/isScheduler");f.startWith=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];b=a[a.length-1];d.isScheduler(b)?a.pop():b=null;var f=a.length;return 1===f?g.concatStatic(new l.ScalarObservable(a[0],
b),this):1<f?g.concatStatic(new h.ArrayObservable(a,b),this):g.concatStatic(new k.EmptyObservable(b),this)}},{"../observable/ArrayObservable":142,"../observable/EmptyObservable":147,"../observable/ScalarObservable":161,"../util/isScheduler":328,"./concat":201}],266:[function(a,b,f){var h=a("../observable/SubscribeOnObservable");f.subscribeOn=function(a,b){void 0===b&&(b=0);return new h.SubscribeOnObservable(this,b,a)}},{"../observable/SubscribeOnObservable":162}],267:[function(a,b,f){var h=this&&
this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f._switch=function(){return this.lift(new k)};var k=function(){function a(){}a.prototype.call=function(a,b){return b._subscribe(new g(a))};return a}(),g=function(a){function c(c){a.call(this,c);this.active=0;this.hasCompleted=!1}h(c,a);c.prototype._next=function(a){this.unsubscribeInner();
this.active++;this.add(this.innerSubscription=l.subscribeToResult(this,a))};c.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&this.destination.complete()};c.prototype.unsubscribeInner=function(){this.active=0<this.active?this.active-1:0;var a=this.innerSubscription;a&&(a.unsubscribe(),this.remove(a))};c.prototype.notifyNext=function(a,c,b,d,f){this.destination.next(c)};c.prototype.notifyError=function(a){this.destination.error(a)};c.prototype.notifyComplete=function(){this.unsubscribeInner();
this.hasCompleted&&0===this.active&&this.destination.complete()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],268:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.switchMap=function(a,c){return this.lift(new k(a,c))};var k=function(){function a(c,
b){this.project=c;this.resultSelector=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.project,this.resultSelector))};return a}(),g=function(a){function c(c,b,f){a.call(this,c);this.project=b;this.resultSelector=f;this.index=0}h(c,a);c.prototype._next=function(a){var c,b=this.index++;try{c=this.project(a,b)}catch(d){this.destination.error(d);return}this._innerSub(c,a,b)};c.prototype._innerSub=function(a,c,b){var d=this.innerSubscription;d&&d.unsubscribe();this.add(this.innerSubscription=
l.subscribeToResult(this,a,c,b))};c.prototype._complete=function(){var c=this.innerSubscription;c&&!c.isUnsubscribed||a.prototype._complete.call(this)};c.prototype._unsubscribe=function(){this.innerSubscription=null};c.prototype.notifyComplete=function(c){this.remove(c);this.innerSubscription=null;this.isStopped&&a.prototype._complete.call(this)};c.prototype.notifyNext=function(a,c,b,d,f){this.resultSelector?this._tryNotifyNext(a,c,b,d):this.destination.next(c)};c.prototype._tryNotifyNext=function(a,
c,b,d){var f;try{f=this.resultSelector(a,c,b,d)}catch(g){this.destination.error(g);return}this.destination.next(f)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],269:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.switchMapTo=function(a,
c){return this.lift(new k(a,c))};var k=function(){function a(c,b){this.observable=c;this.resultSelector=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.observable,this.resultSelector))};return a}(),g=function(a){function c(c,b,f){a.call(this,c);this.inner=b;this.resultSelector=f;this.index=0}h(c,a);c.prototype._next=function(a){var c=this.innerSubscription;c&&c.unsubscribe();this.add(this.innerSubscription=l.subscribeToResult(this,this.inner,a,this.index++))};c.prototype._complete=
function(){var c=this.innerSubscription;c&&!c.isUnsubscribed||a.prototype._complete.call(this)};c.prototype._unsubscribe=function(){this.innerSubscription=null};c.prototype.notifyComplete=function(c){this.remove(c);this.innerSubscription=null;this.isStopped&&a.prototype._complete.call(this)};c.prototype.notifyNext=function(a,c,b,d,f){f=this.destination;this.resultSelector?this.tryResultSelector(a,c,b,d):f.next(c)};c.prototype.tryResultSelector=function(a,c,b,d){var f=this.resultSelector,g=this.destination,
k;try{k=f(a,c,b,d)}catch(h){g.error(h);return}g.next(k)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],270:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Subscriber");var l=a("../util/ArgumentOutOfRangeError"),k=a("../observable/EmptyObservable");f.take=function(a){return 0===a?new k.EmptyObservable:
this.lift(new g(a))};var g=function(){function a(c){this.total=c;if(0>this.total)throw new l.ArgumentOutOfRangeError;}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.total))};return a}(),d=function(a){function b(e,d){a.call(this,e);this.total=d;this.count=0}h(b,a);b.prototype._next=function(a){var c=this.total;++this.count<=c&&(this.destination.next(a),this.count===c&&(this.destination.complete(),this.unsubscribe()))};return b}(b.Subscriber)},{"../Subscriber":13,"../observable/EmptyObservable":147,
"../util/ArgumentOutOfRangeError":311}],271:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Subscriber");var l=a("../util/ArgumentOutOfRangeError"),k=a("../observable/EmptyObservable");f.takeLast=function(a){return 0===a?new k.EmptyObservable:this.lift(new g(a))};var g=function(){function a(c){this.total=c;if(0>this.total)throw new l.ArgumentOutOfRangeError;
}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.total))};return a}(),d=function(a){function b(e,d){a.call(this,e);this.total=d;this.ring=[];this.count=0}h(b,a);b.prototype._next=function(a){var c=this.ring,b=this.total,e=this.count++;c.length<b?c.push(a):c[e%b]=a};b.prototype._complete=function(){var a=this.destination,c=this.count;if(0<c)for(var b=this.count>=this.total?this.total:this.count,e=this.ring,d=0;d<b;d++){var f=c++%b;a.next(e[f])}a.complete()};return b}(b.Subscriber)},
{"../Subscriber":13,"../observable/EmptyObservable":147,"../util/ArgumentOutOfRangeError":311}],272:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.takeUntil=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.notifier=c}a.prototype.call=function(a,b){return b._subscribe(new g(a,
this.notifier))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.notifier=b;this.add(l.subscribeToResult(this,b))}h(c,a);c.prototype.notifyNext=function(a,c,b,d,f){this.complete()};c.prototype.notifyComplete=function(){};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],273:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=null===b?Object.create(b):
(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.takeWhile=function(a){return this.lift(new l(a))};var l=function(){function a(b){this.predicate=b}a.prototype.call=function(a,c){return c._subscribe(new k(a,this.predicate))};return a}(),k=function(a){function b(c,e){a.call(this,c);this.predicate=e;this.index=0}h(b,a);b.prototype._next=function(a){var b=this.destination,d;try{d=this.predicate(a,this.index++)}catch(f){b.error(f);return}this.nextOrComplete(a,d)};b.prototype.nextOrComplete=function(a,
b){var d=this.destination;b?d.next(a):d.complete()};return b}(a.Subscriber)},{"../Subscriber":13}],274:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.throttle=function(a){return this.lift(new k(a))};var k=function(){function a(c){this.durationSelector=c}a.prototype.call=function(a,
b){return b._subscribe(new g(a,this.durationSelector))};return a}(),g=function(a){function c(c,b){a.call(this,c);this.destination=c;this.durationSelector=b}h(c,a);c.prototype._next=function(a){this.throttled||this.tryDurationSelector(a)};c.prototype.tryDurationSelector=function(a){var c=null;try{c=this.durationSelector(a)}catch(b){this.destination.error(b);return}this.emitAndThrottle(a,c)};c.prototype.emitAndThrottle=function(a,c){this.add(this.throttled=l.subscribeToResult(this,c));this.destination.next(a)};
c.prototype._unsubscribe=function(){var a=this.throttled;a&&(this.remove(a),this.throttled=null,a.unsubscribe())};c.prototype.notifyNext=function(a,c,b,d,f){this._unsubscribe()};c.prototype.notifyComplete=function(){this._unsubscribe()};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],275:[function(a,b,f){function h(a){a.subscriber.clearThrottle()}var l=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=
b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Subscriber");var k=a("../scheduler/async");f.throttleTime=function(a,b){void 0===b&&(b=k.async);return this.lift(new g(a,b))};var g=function(){function a(c,b){this.duration=c;this.scheduler=b}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.duration,this.scheduler))};return a}(),d=function(a){function b(d,e,f){a.call(this,d);this.duration=e;this.scheduler=f}l(b,a);b.prototype._next=function(a){this.throttled||
(this.add(this.throttled=this.scheduler.schedule(h,this.duration,{subscriber:this})),this.destination.next(a))};b.prototype.clearThrottle=function(){var a=this.throttled;a&&(a.unsubscribe(),this.remove(a),this.throttled=null)};return b}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],276:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,
new d)};b=a("../Subscriber");var l=a("../scheduler/async");f.timeInterval=function(a){void 0===a&&(a=l.async);return this.lift(new g(a))};var k=function(){return function(a,b){this.value=a;this.interval=b}}();f.TimeInterval=k;var g=function(){function a(c){this.scheduler=c}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.scheduler))};return a}(),d=function(a){function b(d,e){a.call(this,d);this.scheduler=e;this.lastTime=0;this.lastTime=e.now()}h(b,a);b.prototype._next=function(a){var c=
this.scheduler.now(),b=c-this.lastTime;this.lastTime=c;this.destination.next(new k(a,b))};return b}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],277:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("../scheduler/async"),k=a("../util/isDate");a=a("../Subscriber");f.timeout=function(a,b,d){void 0===b&&(b=null);void 0===
d&&(d=l.async);var f=k.isDate(a);a=f?+a-d.now():Math.abs(a);return this.lift(new g(a,f,b,d))};var g=function(){function a(c,b,d,f){this.waitFor=c;this.absoluteTimeout=b;this.errorToSend=d;this.scheduler=f}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.absoluteTimeout,this.waitFor,this.errorToSend,this.scheduler))};return a}(),d=function(a){function b(d,e,f,g,k){a.call(this,d);this.absoluteTimeout=e;this.waitFor=f;this.errorToSend=g;this.scheduler=k;this._previousIndex=this.index=
0;this._hasCompleted=!1;this.scheduleTimeout()}h(b,a);Object.defineProperty(b.prototype,"previousIndex",{get:function(){return this._previousIndex},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasCompleted",{get:function(){return this._hasCompleted},enumerable:!0,configurable:!0});b.dispatchTimeout=function(a){var c=a.subscriber;a=a.index;c.hasCompleted||c.previousIndex!==a||c.notifyTimeout()};b.prototype.scheduleTimeout=function(){var a=this.index;this.scheduler.schedule(b.dispatchTimeout,
this.waitFor,{subscriber:this,index:a});this.index++;this._previousIndex=a};b.prototype._next=function(a){this.destination.next(a);this.absoluteTimeout||this.scheduleTimeout()};b.prototype._error=function(a){this.destination.error(a);this._hasCompleted=!0};b.prototype._complete=function(){this.destination.complete();this._hasCompleted=!0};b.prototype.notifyTimeout=function(){this.error(this.errorToSend||Error("timeout"))};return b}(a.Subscriber)},{"../Subscriber":13,"../scheduler/async":301,"../util/isDate":323}],
278:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../scheduler/async"),k=a("../util/isDate");b=a("../OuterSubscriber");var g=a("../util/subscribeToResult");f.timeoutWith=function(a,c,b){void 0===b&&(b=l.async);var f=k.isDate(a);a=f?+a-b.now():Math.abs(a);return this.lift(new d(a,f,c,b))};var d=function(){function a(c,b,d,e){this.waitFor=
c;this.absoluteTimeout=b;this.withObservable=d;this.scheduler=e}a.prototype.call=function(a,b){return b._subscribe(new c(a,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))};return a}(),c=function(a){function c(b,d,f,g,k){a.call(this);this.destination=b;this.absoluteTimeout=d;this.waitFor=f;this.withObservable=g;this.scheduler=k;this.timeoutSubscription=void 0;this._previousIndex=this.index=0;this._hasCompleted=!1;b.add(this);this.scheduleTimeout()}h(c,a);Object.defineProperty(c.prototype,
"previousIndex",{get:function(){return this._previousIndex},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"hasCompleted",{get:function(){return this._hasCompleted},enumerable:!0,configurable:!0});c.dispatchTimeout=function(a){var c=a.subscriber;a=a.index;c.hasCompleted||c.previousIndex!==a||c.handleTimeout()};c.prototype.scheduleTimeout=function(){var a=this.index;this.scheduler.schedule(c.dispatchTimeout,this.waitFor,{subscriber:this,index:a});this.index++;this._previousIndex=
a};c.prototype._next=function(a){this.destination.next(a);this.absoluteTimeout||this.scheduleTimeout()};c.prototype._error=function(a){this.destination.error(a);this._hasCompleted=!0};c.prototype._complete=function(){this.destination.complete();this._hasCompleted=!0};c.prototype.handleTimeout=function(){if(!this.isUnsubscribed){var a=this.withObservable;this.unsubscribe();this.destination.add(this.timeoutSubscription=g.subscribeToResult(this,a))}};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,
"../scheduler/async":301,"../util/isDate":323,"../util/subscribeToResult":332}],279:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("../Subscriber");var l=a("../scheduler/async");f.timestamp=function(a){void 0===a&&(a=l.async);return this.lift(new g(a))};var k=function(){return function(a,b){this.value=a;this.timestamp=b}}();f.Timestamp=
k;var g=function(){function a(c){this.scheduler=c}a.prototype.call=function(a,c){return c._subscribe(new d(a,this.scheduler))};return a}(),d=function(a){function b(d,e){a.call(this,d);this.scheduler=e}h(b,a);b.prototype._next=function(a){var c=this.scheduler.now();this.destination.next(new k(a,c))};return b}(b.Subscriber)},{"../Subscriber":13,"../scheduler/async":301}],280:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&
(a[e]=b[e]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};a=a("../Subscriber");f.toArray=function(){return this.lift(new l)};var l=function(){function a(){}a.prototype.call=function(a,c){return c._subscribe(new k(a))};return a}(),k=function(a){function b(c){a.call(this,c);this.array=[]}h(b,a);b.prototype._next=function(a){this.array.push(a)};b.prototype._complete=function(){this.destination.next(this.array);this.destination.complete()};return b}(a.Subscriber)},{"../Subscriber":13}],
281:[function(a,b,f){var h=a("../util/root");f.toPromise=function(a){var b=this;a||(h.root.Rx&&h.root.Rx.config&&h.root.Rx.config.Promise?a=h.root.Rx.config.Promise:h.root.Promise&&(a=h.root.Promise));if(!a)throw Error("no Promise impl found");return new a(function(a,d){var c;b.subscribe(function(a){return c=a},function(a){return d(a)},function(){return a(c)})})}},{"../util/root":331}],282:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var f in b)b.hasOwnProperty(f)&&
(a[f]=b[f]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("../Subject");b=a("../OuterSubscriber");var k=a("../util/subscribeToResult");f.window=function(a){return this.lift(new g(a))};var g=function(){function a(c){this.windowBoundaries=c}a.prototype.call=function(a,c){var b=new d(a),f=c._subscribe(b);f.isUnsubscribed||b.add(k.subscribeToResult(b,this.windowBoundaries));return f};return a}(),d=function(a){function b(d){a.call(this,d);this.window=new l.Subject;d.next(this.window)}
h(b,a);b.prototype.notifyNext=function(a,c,b,d,e){this.openWindow()};b.prototype.notifyError=function(a,c){this._error(a)};b.prototype.notifyComplete=function(a){this._complete()};b.prototype._next=function(a){this.window.next(a)};b.prototype._error=function(a){this.window.error(a);this.destination.error(a)};b.prototype._complete=function(){this.window.complete();this.destination.complete()};b.prototype._unsubscribe=function(){this.window=null};b.prototype.openWindow=function(){var a=this.window;
a&&a.complete();var a=this.destination,c=this.window=new l.Subject;a.next(c)};return b}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../Subject":11,"../util/subscribeToResult":332}],283:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../Subscriber");var l=a("../Subject");f.windowCount=function(a,c){void 0===c&&(c=0);return this.lift(new k(a,
c))};var k=function(){function a(c,b){this.windowSize=c;this.startWindowEvery=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,this.windowSize,this.startWindowEvery))};return a}(),g=function(a){function c(c,b,f){a.call(this,c);this.destination=c;this.windowSize=b;this.startWindowEvery=f;this.windows=[new l.Subject];this.count=0;c.next(this.windows[0])}h(c,a);c.prototype._next=function(a){for(var c=0<this.startWindowEvery?this.startWindowEvery:this.windowSize,b=this.destination,d=this.windowSize,
f=this.windows,g=f.length,k=0;k<g&&!this.isUnsubscribed;k++)f[k].next(a);a=this.count-d+1;0<=a&&0===a%c&&!this.isUnsubscribed&&f.shift().complete();0!==++this.count%c||this.isUnsubscribed||(c=new l.Subject,f.push(c),b.next(c))};c.prototype._error=function(a){var c=this.windows;if(c)for(;0<c.length&&!this.isUnsubscribed;)c.shift().error(a);this.destination.error(a)};c.prototype._complete=function(){var a=this.windows;if(a)for(;0<a.length&&!this.isUnsubscribed;)a.shift().complete();this.destination.complete()};
c.prototype._unsubscribe=function(){this.count=0;this.windows=null};return c}(b.Subscriber)},{"../Subject":11,"../Subscriber":13}],284:[function(a,b,f){function h(a){var c=a.subscriber,b=a.windowTimeSpan,d=a.window;d&&d.complete();a.window=c.openWindow();this.schedule(a,b)}function l(a){var c=a.windowTimeSpan,b=a.subscriber,d=a.scheduler,e=a.windowCreationInterval,f=b.openWindow(),g={action:this,subscription:null};g.subscription=d.schedule(k,c,{subscriber:b,window:f,context:g});this.add(g.subscription);
this.schedule(a,e)}function k(a){var c=a.subscriber,b=a.window;(a=a.context)&&a.action&&a.subscription&&a.action.remove(a.subscription);c.closeWindow(b)}var g=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../Subscriber");var d=a("../Subject"),c=a("../scheduler/async");f.windowTime=function(a,b,d){void 0===b&&(b=null);void 0===d&&(d=c.async);return this.lift(new e(a,
b,d))};var e=function(){function a(c,b,d){this.windowTimeSpan=c;this.windowCreationInterval=b;this.scheduler=d}a.prototype.call=function(a,c){return c._subscribe(new m(a,this.windowTimeSpan,this.windowCreationInterval,this.scheduler))};return a}(),m=function(a){function c(b,d,e,f){a.call(this,b);this.destination=b;this.windowTimeSpan=d;this.windowCreationInterval=e;this.scheduler=f;this.windows=[];if(null!==e&&0<=e){b={subscriber:this,window:this.openWindow(),context:null};var g={windowTimeSpan:d,
windowCreationInterval:e,subscriber:this,scheduler:f};this.add(f.schedule(k,d,b));this.add(f.schedule(l,e,g))}else e={subscriber:this,window:this.openWindow(),windowTimeSpan:d},this.add(f.schedule(h,d,e))}g(c,a);c.prototype._next=function(a){for(var c=this.windows,b=c.length,d=0;d<b;d++){var e=c[d];e.isUnsubscribed||e.next(a)}};c.prototype._error=function(a){for(var c=this.windows;0<c.length;)c.shift().error(a);this.destination.error(a)};c.prototype._complete=function(){for(var a=this.windows;0<a.length;){var c=
a.shift();c.isUnsubscribed||c.complete()}this.destination.complete()};c.prototype.openWindow=function(){var a=new d.Subject;this.windows.push(a);this.destination.next(a);return a};c.prototype.closeWindow=function(a){a.complete();var c=this.windows;c.splice(c.indexOf(a),1)};return c}(b.Subscriber)},{"../Subject":11,"../Subscriber":13,"../scheduler/async":301}],285:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);
a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../Subject"),k=a("../Subscription"),g=a("../util/tryCatch"),d=a("../util/errorObject");b=a("../OuterSubscriber");var c=a("../util/subscribeToResult");f.windowToggle=function(a,c){return this.lift(new e(a,c))};var e=function(){function a(c,b){this.openings=c;this.closingSelector=b}a.prototype.call=function(a,c){return c._subscribe(new m(a,this.openings,this.closingSelector))};return a}(),m=function(a){function b(d,e,f){a.call(this,
d);this.openings=e;this.closingSelector=f;this.contexts=[];this.add(this.openSubscription=c.subscribeToResult(this,e,e))}h(b,a);b.prototype._next=function(a){var c=this.contexts;if(c)for(var b=c.length,d=0;d<b;d++)c[d].window.next(a)};b.prototype._error=function(c){var b=this.contexts;this.contexts=null;if(b)for(var d=b.length,e=-1;++e<d;){var f=b[e];f.window.error(c);f.subscription.unsubscribe()}a.prototype._error.call(this,c)};b.prototype._complete=function(){var c=this.contexts;this.contexts=null;
if(c)for(var b=c.length,d=-1;++d<b;){var e=c[d];e.window.complete();e.subscription.unsubscribe()}a.prototype._complete.call(this)};b.prototype._unsubscribe=function(){var a=this.contexts;this.contexts=null;if(a)for(var c=a.length,b=-1;++b<c;){var d=a[b];d.window.unsubscribe();d.subscription.unsubscribe()}};b.prototype.notifyNext=function(a,b,e,f,h){if(a===this.openings){f=g.tryCatch(this.closingSelector)(b);if(f===d.errorObject)return this.error(d.errorObject.e);a=new l.Subject;b=new k.Subscription;
e={window:a,subscription:b};this.contexts.push(e);f=c.subscribeToResult(this,f,e);f.isUnsubscribed?this.closeWindow(this.contexts.length-1):(f.context=e,b.add(f));this.destination.next(a)}else this.closeWindow(this.contexts.indexOf(a))};b.prototype.notifyError=function(a){this.error(a)};b.prototype.notifyComplete=function(a){a!==this.openSubscription&&this.closeWindow(this.contexts.indexOf(a.context))};b.prototype.closeWindow=function(a){if(-1!==a){var c=this.contexts,b=c[a],d=b.window,b=b.subscription;
c.splice(a,1);d.complete();b.unsubscribe()}};return b}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../Subject":11,"../Subscription":14,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],286:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../Subject"),k=a("../util/tryCatch"),g=a("../util/errorObject");
b=a("../OuterSubscriber");var d=a("../util/subscribeToResult");f.windowWhen=function(a){return this.lift(new c(a))};var c=function(){function a(c){this.closingSelector=c}a.prototype.call=function(a,c){return c._subscribe(new e(a,this.closingSelector))};return a}(),e=function(a){function c(b,d){a.call(this,b);this.destination=b;this.closingSelector=d;this.openWindow()}h(c,a);c.prototype.notifyNext=function(a,c,b,d,e){this.openWindow(e)};c.prototype.notifyError=function(a,c){this._error(a)};c.prototype.notifyComplete=
function(a){this.openWindow(a)};c.prototype._next=function(a){this.window.next(a)};c.prototype._error=function(a){this.window.error(a);this.destination.error(a);this.unsubscribeClosingNotification()};c.prototype._complete=function(){this.window.complete();this.destination.complete();this.unsubscribeClosingNotification()};c.prototype.unsubscribeClosingNotification=function(){this.closingNotification&&this.closingNotification.unsubscribe()};c.prototype.openWindow=function(a){void 0===a&&(a=null);a&&
(this.remove(a),a.unsubscribe());(a=this.window)&&a.complete();a=this.window=new l.Subject;this.destination.next(a);a=k.tryCatch(this.closingSelector)();a===g.errorObject?(a=g.errorObject.e,this.destination.error(a),this.window.error(a)):this.add(this.closingNotification=d.subscribeToResult(this,a))};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../Subject":11,"../util/errorObject":321,"../util/subscribeToResult":332,"../util/tryCatch":335}],287:[function(a,b,f){var h=this&&this.__extends||
function(a,c){function b(){this.constructor=a}for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};b=a("../OuterSubscriber");var l=a("../util/subscribeToResult");f.withLatestFrom=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];var b;"function"===typeof a[a.length-1]&&(b=a.pop());return this.lift(new k(a,b))};var k=function(){function a(c,b){this.observables=c;this.project=b}a.prototype.call=function(a,b){return b._subscribe(new g(a,
this.observables,this.project))};return a}(),g=function(a){function c(c,b,f){a.call(this,c);this.observables=b;this.project=f;this.toRespond=[];c=b.length;this.values=Array(c);for(f=0;f<c;f++)this.toRespond.push(f);for(f=0;f<c;f++){var g=b[f];this.add(l.subscribeToResult(this,g,g,f))}}h(c,a);c.prototype.notifyNext=function(a,c,b,d,f){this.values[b]=c;a=this.toRespond;0<a.length&&(b=a.indexOf(b),-1!==b&&a.splice(b,1))};c.prototype.notifyComplete=function(){};c.prototype._next=function(a){0===this.toRespond.length&&
(a=[a].concat(this.values),this.project?this._tryProject(a):this.destination.next(a))};c.prototype._tryProject=function(a){var c;try{c=this.project.apply(this,a)}catch(b){this.destination.error(b);return}this.destination.next(c)};return c}(b.OuterSubscriber)},{"../OuterSubscriber":8,"../util/subscribeToResult":332}],288:[function(a,b,f){function h(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];c=a[a.length-1];"function"===typeof c&&a.pop();return(new k.ArrayObservable(a)).lift(new m(c))}
var l=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)},k=a("../observable/ArrayObservable"),g=a("../util/isArray");b=a("../Subscriber");var d=a("../OuterSubscriber"),c=a("../util/subscribeToResult"),e=a("../symbol/iterator");f.zipProto=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];a.unshift(this);return h.apply(this,a)};f.zipStatic=h;var m=
function(){function a(c){this.project=c}a.prototype.call=function(a,c){return c._subscribe(new n(a,this.project))};return a}();f.ZipOperator=m;var n=function(a){function c(b,d,e){void 0===e&&(e=Object.create(null));a.call(this,b);this.index=0;this.iterators=[];this.active=0;this.project="function"===typeof d?d:null;this.values=e}l(c,a);c.prototype._next=function(a){var c=this.iterators,b=this.index++;g.isArray(a)?c.push(new t(a)):"function"===typeof a[e.$$iterator]?c.push(new q(a[e.$$iterator]())):
c.push(new p(this.destination,this,a,b))};c.prototype._complete=function(){var a=this.iterators,c=a.length;this.active=c;for(var b=0;b<c;b++){var d=a[b];d.stillUnsubscribed?this.add(d.subscribe(d,b)):this.active--}};c.prototype.notifyInactive=function(){this.active--;0===this.active&&this.destination.complete()};c.prototype.checkIterators=function(){for(var a=this.iterators,c=a.length,b=this.destination,d=0;d<c;d++){var e=a[d];if("function"===typeof e.hasValue&&!e.hasValue())return}for(var f=!1,g=
[],d=0;d<c;d++){var e=a[d],k=e.next();e.hasCompleted()&&(f=!0);if(k.done){b.complete();return}g.push(k.value)}this.project?this._tryProject(g):b.next(g);f&&b.complete()};c.prototype._tryProject=function(a){var c;try{c=this.project.apply(this,a)}catch(b){this.destination.error(b);return}this.destination.next(c)};return c}(b.Subscriber);f.ZipSubscriber=n;var q=function(){function a(c){this.iterator=c;this.nextResult=c.next()}a.prototype.hasValue=function(){return!0};a.prototype.next=function(){var a=
this.nextResult;this.nextResult=this.iterator.next();return a};a.prototype.hasCompleted=function(){var a=this.nextResult;return a&&a.done};return a}(),t=function(){function a(c){this.array=c;this.length=this.index=0;this.length=c.length}a.prototype[e.$$iterator]=function(){return this};a.prototype.next=function(a){a=this.index++;var c=this.array;return a<this.length?{value:c[a],done:!1}:{value:null,done:!0}};a.prototype.hasValue=function(){return this.array.length>this.index};a.prototype.hasCompleted=
function(){return this.array.length===this.index};return a}(),p=function(a){function b(c,d,e,f){a.call(this,c);this.parent=d;this.observable=e;this.index=f;this.stillUnsubscribed=!0;this.buffer=[];this.isComplete=!1}l(b,a);b.prototype[e.$$iterator]=function(){return this};b.prototype.next=function(){var a=this.buffer;return 0===a.length&&this.isComplete?{value:null,done:!0}:{value:a.shift(),done:!1}};b.prototype.hasValue=function(){return 0<this.buffer.length};b.prototype.hasCompleted=function(){return 0===
this.buffer.length&&this.isComplete};b.prototype.notifyComplete=function(){0<this.buffer.length?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()};b.prototype.notifyNext=function(a,c,b,d,e){this.buffer.push(c);this.parent.checkIterators()};b.prototype.subscribe=function(a,b){return c.subscribeToResult(this,this.observable,this,b)};return b}(d.OuterSubscriber)},{"../OuterSubscriber":8,"../Subscriber":13,"../observable/ArrayObservable":142,"../symbol/iterator":303,"../util/isArray":322,
"../util/subscribeToResult":332}],289:[function(a,b,f){var h=a("./zip");f.zipAll=function(a){return this.lift(new h.ZipOperator(a))}},{"./zip":288}],290:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("./FutureAction");var l=a("../util/AnimationFrame");a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype._schedule=function(b,
c){void 0===c&&(c=0);if(0<c)return a.prototype._schedule.call(this,b,c);this.delay=c;this.state=b;var e=this.scheduler;e.actions.push(this);e.scheduledId||(e.scheduledId=l.AnimationFrame.requestAnimationFrame(function(){e.scheduledId=null;e.flush()}));return this};b.prototype._unsubscribe=function(){var b=this.scheduler,c=b.scheduledId,e=b.actions;a.prototype._unsubscribe.call(this);0===e.length&&(b.active=!1,null!=c&&(b.scheduledId=null,l.AnimationFrame.cancelAnimationFrame(c)))};return b}(b.FutureAction);
f.AnimationFrameAction=a},{"../util/AnimationFrame":310,"./FutureAction":295}],291:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};b=a("./QueueScheduler");var l=a("./AnimationFrameAction");a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype.scheduleNow=function(a,c){return(new l.AnimationFrameAction(this,a)).schedule(c)};
return b}(b.QueueScheduler);f.AnimationFrameScheduler=a},{"./AnimationFrameAction":290,"./QueueScheduler":297}],292:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("../util/Immediate");a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype._schedule=function(b,c){void 0===c&&(c=0);if(0<c)return a.prototype._schedule.call(this,
b,c);this.delay=c;this.state=b;var e=this.scheduler;e.actions.push(this);e.scheduledId||(e.scheduledId=l.Immediate.setImmediate(function(){e.scheduledId=null;e.flush()}));return this};b.prototype._unsubscribe=function(){var b=this.scheduler,c=b.scheduledId,e=b.actions;a.prototype._unsubscribe.call(this);0===e.length&&(b.active=!1,null!=c&&(b.scheduledId=null,l.Immediate.clearImmediate(c)))};return b}(a("./FutureAction").FutureAction);f.AsapAction=a},{"../util/Immediate":314,"./FutureAction":295}],
293:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("./AsapAction");a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype.scheduleNow=function(a,c){return(new l.AsapAction(this,a)).schedule(c)};return b}(a("./QueueScheduler").QueueScheduler);f.AsapScheduler=a},{"./AsapAction":292,"./QueueScheduler":297}],294:[function(a,
b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("./FutureAction");a=function(a){function b(){a.apply(this,arguments)}h(b,a);b.prototype.scheduleNow=function(a,c){return(new l.FutureAction(this,a)).schedule(c,0)};return b}(a("./QueueScheduler").QueueScheduler);f.AsyncScheduler=a},{"./FutureAction":295,"./QueueScheduler":297}],295:[function(a,b,f){var h=
this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)},l=a("../util/root");a=function(a){function b(d,c){a.call(this);this.scheduler=d;this.work=c;this.pending=!1}h(b,a);b.prototype.execute=function(){if(this.isUnsubscribed)this.error=Error("executing a cancelled action");else try{this.work(this.state)}catch(a){this.unsubscribe(),this.error=a}};b.prototype.schedule=function(a,
c){void 0===c&&(c=0);return this.isUnsubscribed?this:this._schedule(a,c)};b.prototype._schedule=function(a,c){var b=this;void 0===c&&(c=0);this.state=a;this.pending=!0;var f=this.id;if(null!=f&&this.delay===c)return this;this.delay=c;null!=f&&(this.id=null,l.root.clearInterval(f));this.id=l.root.setInterval(function(){b.pending=!1;var a=b.id,c=b.scheduler;c.actions.push(b);c.flush();!1===b.pending&&null!=a&&(b.id=null,l.root.clearInterval(a))},c);return this};b.prototype._unsubscribe=function(){this.pending=
!1;var a=this.id,c=this.scheduler.actions,b=c.indexOf(this);null!=a&&(this.id=null,l.root.clearInterval(a));-1!==b&&c.splice(b,1);this.scheduler=this.state=this.work=null};return b}(a("../Subscription").Subscription);f.FutureAction=a},{"../Subscription":14,"../util/root":331}],296:[function(a,b,f){var h=this&&this.__extends||function(a,b){function f(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)};a=function(a){function b(){a.apply(this,
arguments)}h(b,a);b.prototype._schedule=function(b,d){void 0===d&&(d=0);if(0<d)return a.prototype._schedule.call(this,b,d);this.delay=d;this.state=b;var c=this.scheduler;c.actions.push(this);c.flush();return this};return b}(a("./FutureAction").FutureAction);f.QueueAction=a},{"./FutureAction":295}],297:[function(a,b,f){var h=a("./QueueAction"),l=a("./FutureAction");a=function(){function a(){this.active=!1;this.actions=[];this.scheduledId=null}a.prototype.now=function(){return Date.now()};a.prototype.flush=
function(){if(!this.active&&!this.scheduledId){this.active=!0;for(var a=this.actions,b;b=a.shift();)if(b.execute(),b.error)throw this.active=!1,b.error;this.active=!1}};a.prototype.schedule=function(a,b,c){void 0===b&&(b=0);return 0>=b?this.scheduleNow(a,c):this.scheduleLater(a,b,c)};a.prototype.scheduleNow=function(a,b){return(new h.QueueAction(this,a)).schedule(b)};a.prototype.scheduleLater=function(a,b,c){return(new l.FutureAction(this,a)).schedule(c,b)};return a}();f.QueueScheduler=a},{"./FutureAction":295,
"./QueueAction":296}],298:[function(a,b,f){var h=this&&this.__extends||function(a,b){function d(){this.constructor=a}for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)};a=a("../Subscription");b=function(){function a(){this.actions=[];this.active=!1;this.scheduledId=null;this.index=0;this.sorted=!1;this.frame=0;this.maxFrames=750}a.prototype.now=function(){return this.frame};a.prototype.flush=function(){for(var a=this.actions,b=this.maxFrames;0<
a.length;){var c=a.shift();this.frame=c.delay;if(this.frame<=b){if(c.execute(),c.error)throw this.frame=a.length=0,c.error;}else break}this.frame=a.length=0};a.prototype.addAction=function(a){var b=this.actions;b.push(a);b.sort(function(a,b){return a.delay===b.delay?a.index===b.index?0:a.index>b.index?1:-1:a.delay>b.delay?1:-1})};a.prototype.schedule=function(a,b,c){void 0===b&&(b=0);this.sorted=!1;return(new l(this,a,this.index++)).schedule(c,b)};a.frameTimeFactor=10;return a}();f.VirtualTimeScheduler=
b;var l=function(a){function b(d,c,e){a.call(this);this.scheduler=d;this.work=c;this.index=e;this.calls=0}h(b,a);b.prototype.schedule=function(a,c){void 0===c&&(c=0);if(this.isUnsubscribed)return this;var e=this.scheduler,f;0===this.calls++?f=this:(f=new b(e,this.work,e.index+=1),this.add(f));f.state=a;f.delay=e.frame+c;e.addAction(f);return this};b.prototype.execute=function(){if(this.isUnsubscribed)throw Error("How did did we execute a canceled Action?");this.work(this.state)};b.prototype.unsubscribe=
function(){var b=this.scheduler.actions,c=b.indexOf(this);this.scheduler=this.state=this.work=void 0;-1!==c&&b.splice(c,1);a.prototype.unsubscribe.call(this)};return b}(a.Subscription)},{"../Subscription":14}],299:[function(a,b,f){a=a("./AnimationFrameScheduler");f.animationFrame=new a.AnimationFrameScheduler},{"./AnimationFrameScheduler":291}],300:[function(a,b,f){a=a("./AsapScheduler");f.asap=new a.AsapScheduler},{"./AsapScheduler":293}],301:[function(a,b,f){a=a("./AsyncScheduler");f.async=new a.AsyncScheduler},
{"./AsyncScheduler":294}],302:[function(a,b,f){a=a("./QueueScheduler");f.queue=new a.QueueScheduler},{"./QueueScheduler":297}],303:[function(a,b,f){a=a("../util/root");b=a.root.Symbol;if("function"===typeof b)b.iterator?f.$$iterator=b.iterator:"function"===typeof b["for"]&&(f.$$iterator=b["for"]("iterator"));else if(a.root.Set&&"function"===typeof(new a.root.Set)["@@iterator"])f.$$iterator="@@iterator";else if(a.root.Map){b=Object.getOwnPropertyNames(a.root.Map.prototype);for(var h=0;h<b.length;++h){var l=
b[h];if("entries"!==l&&"size"!==l&&a.root.Map.prototype[l]===a.root.Map.prototype.entries){f.$$iterator=l;break}}}else f.$$iterator="@@iterator"},{"../util/root":331}],304:[function(a,b,f){a=a("../util/root").root.Symbol;f.$$rxSubscriber="function"===typeof a&&"function"===typeof a["for"]?a["for"]("rxSubscriber"):"@@rxSubscriber"},{"../util/root":331}],305:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=
null===b?Object.create(b):(c.prototype=b.prototype,new c)},l=a("../Observable"),k=a("../Subscription");b=a("./SubscriptionLoggable");a=a("../util/applyMixins");l=function(a){function b(c,d){a.call(this,function(a){var c=this,b=c.logSubscribedFrame();a.add(new k.Subscription(function(){c.logUnsubscribedFrame(b)}));c.scheduleMessages(a);return a});this.messages=c;this.subscriptions=[];this.scheduler=d}h(b,a);b.prototype.scheduleMessages=function(a){for(var b=this.messages.length,d=0;d<b;d++){var f=
this.messages[d];a.add(this.scheduler.schedule(function(a){a.message.notification.observe(a.subscriber)},f.frame,{message:f,subscriber:a}))}};return b}(l.Observable);f.ColdObservable=l;a.applyMixins(l,[b.SubscriptionLoggable])},{"../Observable":5,"../Subscription":14,"../util/applyMixins":319,"./SubscriptionLoggable":308}],306:[function(a,b,f){var h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);a.prototype=null===b?Object.create(b):
(c.prototype=b.prototype,new c)},l=a("../Subject"),k=a("../Subscription");b=a("./SubscriptionLoggable");a=a("../util/applyMixins");l=function(a){function b(c,d){a.call(this);this.messages=c;this.subscriptions=[];this.scheduler=d}h(b,a);b.prototype._subscribe=function(c){var b=this,d=b.logSubscribedFrame();c.add(new k.Subscription(function(){b.logUnsubscribedFrame(d)}));return a.prototype._subscribe.call(this,c)};b.prototype.setup=function(){for(var a=this,b=a.messages.length,d=0;d<b;d++)(function(){var b=
a.messages[d];a.scheduler.schedule(function(){b.notification.observe(a)},b.frame)})()};return b}(l.Subject);f.HotObservable=l;a.applyMixins(l,[b.SubscriptionLoggable])},{"../Subject":11,"../Subscription":14,"../util/applyMixins":319,"./SubscriptionLoggable":308}],307:[function(a,b,f){a=function(){return function(a,b){void 0===b&&(b=Number.POSITIVE_INFINITY);this.subscribedFrame=a;this.unsubscribedFrame=b}}();f.SubscriptionLog=a},{}],308:[function(a,b,f){var h=a("./SubscriptionLog");a=function(){function a(){this.subscriptions=
[]}a.prototype.logSubscribedFrame=function(){this.subscriptions.push(new h.SubscriptionLog(this.scheduler.now()));return this.subscriptions.length-1};a.prototype.logUnsubscribedFrame=function(a){var b=this.subscriptions;b[a]=new h.SubscriptionLog(b[a].subscribedFrame,this.scheduler.now())};return a}();f.SubscriptionLoggable=a},{"./SubscriptionLog":307}],309:[function(a,b,f){var h=this&&this.__extends||function(a,c){function b(){this.constructor=a}for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);a.prototype=
null===c?Object.create(c):(b.prototype=c.prototype,new b)},l=a("../Observable");b=a("../scheduler/VirtualTimeScheduler");var k=a("../Notification"),g=a("./ColdObservable"),d=a("./HotObservable"),c=a("./SubscriptionLog");a=function(a){function b(c){a.call(this);this.assertDeepEqual=c;this.hotObservables=[];this.coldObservables=[];this.flushTests=[]}h(b,a);b.prototype.createTime=function(a){a=a.indexOf("|");if(-1===a)throw Error('Marble diagram for time should have a completion marker "|"');return a*
b.frameTimeFactor};b.prototype.createColdObservable=function(a,c,d){if(-1!==a.indexOf("^"))throw Error('Cold observable cannot have subscription offset "^"');if(-1!==a.indexOf("!"))throw Error('Cold observable cannot have unsubscription marker "!"');a=b.parseMarbles(a,c,d);a=new g.ColdObservable(a,this);this.coldObservables.push(a);return a};b.prototype.createHotObservable=function(a,c,e){if(-1!==a.indexOf("!"))throw Error('Hot observable cannot have unsubscription marker "!"');a=b.parseMarbles(a,
c,e);a=new d.HotObservable(a,this);this.hotObservables.push(a);return a};b.prototype.materializeInnerObservable=function(a,c){var b=this,d=[];a.subscribe(function(a){d.push({frame:b.frame-c,notification:k.Notification.createNext(a)})},function(a){d.push({frame:b.frame-c,notification:k.Notification.createError(a)})},function(){d.push({frame:b.frame-c,notification:k.Notification.createComplete()})});return d};b.prototype.expectObservable=function(a,c){var d=this;void 0===c&&(c=null);var e=[],f={actual:e,
ready:!1},g=b.parseMarblesAsSubscriptions(c).unsubscribedFrame,h;this.schedule(function(){h=a.subscribe(function(a){var c=a;a instanceof l.Observable&&(c=d.materializeInnerObservable(c,d.frame));e.push({frame:d.frame,notification:k.Notification.createNext(c)})},function(a){e.push({frame:d.frame,notification:k.Notification.createError(a)})},function(){e.push({frame:d.frame,notification:k.Notification.createComplete()})})},0);g!==Number.POSITIVE_INFINITY&&this.schedule(function(){return h.unsubscribe()},
g);this.flushTests.push(f);return{toBe:function(a,c,d){f.ready=!0;f.expected=b.parseMarbles(a,c,d,!0)}}};b.prototype.expectSubscriptions=function(a){var c={actual:a,ready:!1};this.flushTests.push(c);return{toBe:function(a){a="string"===typeof a?[a]:a;c.ready=!0;c.expected=a.map(function(a){return b.parseMarblesAsSubscriptions(a)})}}};b.prototype.flush=function(){for(var c=this.hotObservables;0<c.length;)c.shift().setup();a.prototype.flush.call(this);for(c=this.flushTests.filter(function(a){return a.ready});0<
c.length;){var b=c.shift();this.assertDeepEqual(b.actual,b.expected)}};b.parseMarblesAsSubscriptions=function(a){if("string"!==typeof a)return new c.SubscriptionLog(Number.POSITIVE_INFINITY);for(var b=a.length,d=-1,e=Number.POSITIVE_INFINITY,f=Number.POSITIVE_INFINITY,g=0;g<b;g++){var h=g*this.frameTimeFactor,l=a[g];switch(l){case "-":case " ":break;case "(":d=h;break;case ")":d=-1;break;case "^":if(e!==Number.POSITIVE_INFINITY)throw Error("Found a second subscription point '^' in a subscription marble diagram. There can only be one.");
e=-1<d?d:h;break;case "!":if(f!==Number.POSITIVE_INFINITY)throw Error("Found a second subscription point '^' in a subscription marble diagram. There can only be one.");f=-1<d?d:h;break;default:throw Error("There can only be '^' and '!' markers in a subscription marble diagram. Found instead '"+l+"'.");}}return 0>f?new c.SubscriptionLog(e):new c.SubscriptionLog(e,f)};b.parseMarbles=function(a,c,b,d){void 0===d&&(d=!1);if(-1!==a.indexOf("!"))throw Error('Conventional marble diagrams cannot have the unsubscription marker "!"');
for(var e=a.length,f=[],h=a.indexOf("^"),h=-1===h?0:h*-this.frameTimeFactor,l="object"!==typeof c?function(a){return a}:function(a){return d&&c[a]instanceof g.ColdObservable?c[a].messages:c[a]},m=-1,x=0;x<e;x++){var D=x*this.frameTimeFactor+h,y=void 0,z=a[x];switch(z){case "-":case " ":break;case "(":m=D;break;case ")":m=-1;break;case "|":y=k.Notification.createComplete();break;case "^":break;case "#":y=k.Notification.createError(b||"error");break;default:y=k.Notification.createNext(l(z))}y&&f.push({frame:-1<
m?m:D,notification:y})}return f};return b}(b.VirtualTimeScheduler);f.TestScheduler=a},{"../Notification":4,"../Observable":5,"../scheduler/VirtualTimeScheduler":298,"./ColdObservable":305,"./HotObservable":306,"./SubscriptionLog":307}],310:[function(a,b,f){a=a("./root");b=function(){return function(a){a.requestAnimationFrame?(this.cancelAnimationFrame=a.cancelAnimationFrame.bind(a),this.requestAnimationFrame=a.requestAnimationFrame.bind(a)):a.mozRequestAnimationFrame?(this.cancelAnimationFrame=a.mozCancelAnimationFrame.bind(a),
this.requestAnimationFrame=a.mozRequestAnimationFrame.bind(a)):a.webkitRequestAnimationFrame?(this.cancelAnimationFrame=a.webkitCancelAnimationFrame.bind(a),this.requestAnimationFrame=a.webkitRequestAnimationFrame.bind(a)):a.msRequestAnimationFrame?(this.cancelAnimationFrame=a.msCancelAnimationFrame.bind(a),this.requestAnimationFrame=a.msRequestAnimationFrame.bind(a)):a.oRequestAnimationFrame?(this.cancelAnimationFrame=a.oCancelAnimationFrame.bind(a),this.requestAnimationFrame=a.oRequestAnimationFrame.bind(a)):
(this.cancelAnimationFrame=a.clearTimeout.bind(a),this.requestAnimationFrame=function(b){return a.setTimeout(b,1E3/60)})}}();f.RequestAnimationFrameDefinition=b;f.AnimationFrame=new b(a.root)},{"./root":331}],311:[function(a,b,f){var h=this&&this.__extends||function(a,b){function f(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)};a=function(a){function b(){var f=a.call(this,"argument out of range");this.name=
f.name="ArgumentOutOfRangeError";this.stack=f.stack;this.message=f.message}h(b,a);return b}(Error);f.ArgumentOutOfRangeError=a},{}],312:[function(a,b,f){var h=this&&this.__extends||function(a,b){function f(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)};a=function(a){function b(){var f=a.call(this,"no elements in sequence");this.name=f.name="EmptyError";this.stack=f.stack;this.message=f.message}h(b,a);return b}(Error);
f.EmptyError=a},{}],313:[function(a,b,f){a=function(){function a(){this.values={}}a.prototype["delete"]=function(a){this.values[a]=null;return!0};a.prototype.set=function(a,b){this.values[a]=b;return this};a.prototype.get=function(a){return this.values[a]};a.prototype.forEach=function(a,b){var f=this.values,d;for(d in f)f.hasOwnProperty(d)&&null!==f[d]&&a.call(b,f[d],d)};a.prototype.clear=function(){this.values={}};return a}();f.FastMap=a},{}],314:[function(a,b,f){a=a("./root");b=function(){function a(b){this.root=
b;b.setImmediate&&"function"===typeof b.setImmediate?(this.setImmediate=b.setImmediate.bind(b),this.clearImmediate=b.clearImmediate.bind(b)):(this.nextHandle=1,this.tasksByHandle={},this.currentlyRunningATask=!1,this.canUseProcessNextTick()?this.setImmediate=this.createProcessNextTickSetImmediate():this.canUsePostMessage()?this.setImmediate=this.createPostMessageSetImmediate():this.canUseMessageChannel()?this.setImmediate=this.createMessageChannelSetImmediate():this.canUseReadyStateChange()?this.setImmediate=
this.createReadyStateChangeSetImmediate():this.setImmediate=this.createSetTimeoutSetImmediate(),b=function g(a){delete g.instance.tasksByHandle[a]},b.instance=this,this.clearImmediate=b)}a.prototype.identify=function(a){return this.root.Object.prototype.toString.call(a)};a.prototype.canUseProcessNextTick=function(){return"[object process]"===this.identify(this.root.process)};a.prototype.canUseMessageChannel=function(){return!!this.root.MessageChannel};a.prototype.canUseReadyStateChange=function(){var a=
this.root.document;return!!(a&&"onreadystatechange"in a.createElement("script"))};a.prototype.canUsePostMessage=function(){var a=this.root;if(a.postMessage&&!a.importScripts){var b=!0,f=a.onmessage;a.onmessage=function(){b=!1};a.postMessage("","*");a.onmessage=f;return b}return!1};a.prototype.partiallyApplied=function(a){for(var b=[],f=1;f<arguments.length;f++)b[f-1]=arguments[f];f=function c(){var a=c.handler,b=c.args;"function"===typeof a?a.apply(void 0,b):(new Function(""+a))()};f.handler=a;f.args=
b;return f};a.prototype.addFromSetImmediateArguments=function(a){this.tasksByHandle[this.nextHandle]=this.partiallyApplied.apply(void 0,a);return this.nextHandle++};a.prototype.createProcessNextTickSetImmediate=function(){var a=function g(){var a=g.instance,c=a.addFromSetImmediateArguments(arguments);a.root.process.nextTick(a.partiallyApplied(a.runIfPresent,c));return c};a.instance=this;return a};a.prototype.createPostMessageSetImmediate=function(){var a=this.root,b="setImmediate$"+a.Math.random()+
"$",f=function c(e){var f=c.instance;e.source===a&&"string"===typeof e.data&&0===e.data.indexOf(b)&&f.runIfPresent(+e.data.slice(b.length))};f.instance=this;a.addEventListener("message",f,!1);f=function e(){var a=e,b=a.messagePrefix,a=a.instance,f=a.addFromSetImmediateArguments(arguments);a.root.postMessage(b+f,"*");return f};f.instance=this;f.messagePrefix=b;return f};a.prototype.runIfPresent=function(a){if(this.currentlyRunningATask)this.root.setTimeout(this.partiallyApplied(this.runIfPresent,a),
0);else{var b=this.tasksByHandle[a];if(b){this.currentlyRunningATask=!0;try{b()}finally{this.clearImmediate(a),this.currentlyRunningATask=!1}}}};a.prototype.createMessageChannelSetImmediate=function(){var a=this,b=new this.root.MessageChannel;b.port1.onmessage=function(b){a.runIfPresent(b.data)};var f=function c(){var a=c,b=a.channel,a=a.instance.addFromSetImmediateArguments(arguments);b.port2.postMessage(a);return a};f.channel=b;f.instance=this;return f};a.prototype.createReadyStateChangeSetImmediate=
function(){var a=function g(){var a=g.instance,b=a.root.document,e=b.documentElement,f=a.addFromSetImmediateArguments(arguments),h=b.createElement("script");h.onreadystatechange=function(){a.runIfPresent(f);h.onreadystatechange=null;e.removeChild(h);h=null};e.appendChild(h);return f};a.instance=this;return a};a.prototype.createSetTimeoutSetImmediate=function(){var a=function g(){var a=g.instance,b=a.addFromSetImmediateArguments(arguments);a.root.setTimeout(a.partiallyApplied(a.runIfPresent,b),0);
return b};a.instance=this;return a};return a}();f.ImmediateDefinition=b;f.Immediate=new b(a.root)},{"./root":331}],315:[function(a,b,f){b=a("./root");a=a("./MapPolyfill");f.Map=b.root.Map||a.MapPolyfill},{"./MapPolyfill":316,"./root":331}],316:[function(a,b,f){a=function(){function a(){this.size=0;this._values=[];this._keys=[]}a.prototype.get=function(a){a=this._keys.indexOf(a);return-1===a?void 0:this._values[a]};a.prototype.set=function(a,b){var f=this._keys.indexOf(a);-1===f?(this._keys.push(a),
this._values.push(b),this.size++):this._values[f]=b;return this};a.prototype["delete"]=function(a){a=this._keys.indexOf(a);if(-1===a)return!1;this._values.splice(a,1);this._keys.splice(a,1);this.size--;return!0};a.prototype.clear=function(){this._keys.length=0;this.size=this._values.length=0};a.prototype.forEach=function(a,b){for(var f=0;f<this.size;f++)a.call(b,this._values[f],this._keys[f])};return a}();f.MapPolyfill=a},{}],317:[function(a,b,f){var h=this&&this.__extends||function(a,b){function f(){this.constructor=
a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)};a=function(a){function b(){var f=a.call(this,"object unsubscribed");this.name=f.name="ObjectUnsubscribedError";this.stack=f.stack;this.message=f.message}h(b,a);return b}(Error);f.ObjectUnsubscribedError=a},{}],318:[function(a,b,f){var h=this&&this.__extends||function(a,b){function f(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):
(f.prototype=b.prototype,new f)};a=function(a){function b(f){a.call(this);this.errors=f;f=Error.call(this,f?f.length+" errors occurred during unsubscription:\n  "+f.map(function(a,b){return b+1+") "+a.toString()}).join("\n  "):"");this.name=f.name="UnsubscriptionError";this.stack=f.stack;this.message=f.message}h(b,a);return b}(Error);f.UnsubscriptionError=a},{}],319:[function(a,b,f){f.applyMixins=function(a,b){for(var f=0,g=b.length;f<g;f++)for(var d=b[f],c=Object.getOwnPropertyNames(d.prototype),
e=0,m=c.length;e<m;e++){var n=c[e];a.prototype[n]=d.prototype[n]}}},{}],320:[function(a,b,f){var h=a("./root").root.Object;"function"!=typeof h.assign&&function(){h.assign=function(a){for(var b=[],f=1;f<arguments.length;f++)b[f-1]=arguments[f];if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var f=h(a),d=b.length,c=0;c<d;c++){var e=b[c];if(void 0!==e&&null!==e)for(var m in e)e.hasOwnProperty(m)&&(f[m]=e[m])}return f}}();f.assign=h.assign},{"./root":331}],
321:[function(a,b,f){f.errorObject={e:{}}},{}],322:[function(a,b,f){f.isArray=Array.isArray||function(a){return a&&"number"===typeof a.length}},{}],323:[function(a,b,f){f.isDate=function(a){return a instanceof Date&&!isNaN(+a)}},{}],324:[function(a,b,f){f.isFunction=function(a){return"function"===typeof a}},{}],325:[function(a,b,f){var h=a("../util/isArray");f.isNumeric=function(a){return!h.isArray(a)&&0<=a-parseFloat(a)+1}},{"../util/isArray":322}],326:[function(a,b,f){f.isObject=function(a){return null!=
a&&"object"===typeof a}},{}],327:[function(a,b,f){f.isPromise=function(a){return a&&"function"!==typeof a.subscribe&&"function"===typeof a.then}},{}],328:[function(a,b,f){f.isScheduler=function(a){return a&&"function"===typeof a.schedule}},{}],329:[function(a,b,f){f.noop=function(){}},{}],330:[function(a,b,f){f.not=function(a,b){function f(){return!f.pred.apply(f.thisArg,arguments)}f.pred=a;f.thisArg=b;return f}},{}],331:[function(a,b,f){a="undefined"!==typeof global?global:"undefined"!==typeof self?
self:"undefined"!==typeof window?window:{};b={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};f.root=b[typeof self]&&self||b[typeof window]&&window;!(a=b[typeof a]&&a)||a.global!==a&&a.window!==a||(f.root=a)},{}],332:[function(a,b,f){var h=a("./root"),l=a("./isArray"),k=a("./isPromise"),g=a("../Observable"),d=a("../symbol/iterator"),c=a("../InnerSubscriber"),e=a("symbol-observable");f.subscribeToResult=function(a,b,f,t){var p=new c.InnerSubscriber(a,f,t);if(!p.isUnsubscribed){if(b instanceof
g.Observable){if(b._isScalar){p.next(b.value);p.complete();return}return b.subscribe(p)}if(l.isArray(b)){a=0;for(f=b.length;a<f&&!p.isUnsubscribed;a++)p.next(b[a]);p.isUnsubscribed||p.complete()}else{if(k.isPromise(b))return b.then(function(a){p.isUnsubscribed||(p.next(a),p.complete())},function(a){return p.error(a)}).then(null,function(a){h.root.setTimeout(function(){throw a;})}),p;if("function"===typeof b[d.$$iterator]){for(a=0;a<b.length&&(p.next(b[a]),!p.isUnsubscribed);a++);p.isUnsubscribed||
p.complete()}else if("function"===typeof b[e["default"]])if(b=b[e["default"]](),"function"!==typeof b.subscribe)p.error("invalid observable");else return b.subscribe(new c.InnerSubscriber(a,f,t));else p.error(new TypeError("unknown type returned"))}}}},{"../InnerSubscriber":3,"../Observable":5,"../symbol/iterator":303,"./isArray":322,"./isPromise":327,"./root":331,"symbol-observable":336}],333:[function(a,b,f){f.throwError=function(a){throw a;}},{}],334:[function(a,b,f){var h=a("../Subscriber"),l=
a("../symbol/rxSubscriber");f.toSubscriber=function(a,b,d){if(a){if(a instanceof h.Subscriber)return a;if(a[l.$$rxSubscriber])return a[l.$$rxSubscriber]()}return a||b||d?new h.Subscriber(a,b,d):new h.Subscriber}},{"../Subscriber":13,"../symbol/rxSubscriber":304}],335:[function(a,b,f){function h(){try{return k.apply(this,arguments)}catch(a){return l.errorObject.e=a,l.errorObject}}var l=a("./errorObject"),k;f.tryCatch=function(a){k=a;return h}},{"./errorObject":321}],336:[function(a,b,f){b.exports=
a("./lib/index")},{"./lib/index":337}],337:[function(a,b,f){b="undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{};Object.defineProperty(f,"__esModule",{value:!0});a=(a=a("./ponyfill"))&&a.__esModule?a:{"default":a};var h=void 0;"undefined"!==typeof b?h=b:"undefined"!==typeof window&&(h=window);b=(0,a["default"])(h);f["default"]=b},{"./ponyfill":338}],338:[function(a,b,f){Object.defineProperty(f,"__esModule",{value:!0});f["default"]=function(a){var b=
a.Symbol;"function"===typeof b?b.observable?a=b.observable:(a=b("observable"),b.observable=a):a="@@observable";return a}},{}]},{},[10])(10)});



!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require(void 0),require(void 0),require(void 0)):"function"==typeof define&&define.amd?define([,,],r):"object"==typeof exports?exports.ReduxObservable=r(require(void 0),require(void 0),require(void 0)):e.ReduxObservable=r(e.Rx,e.Rx.Observable.prototype,e.Rx.Observable)}(this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(7);Object.defineProperty(r,"createEpicMiddleware",{enumerable:!0,get:function(){return n.createEpicMiddleware}});var o=t(2);Object.defineProperty(r,"ActionsObservable",{enumerable:!0,get:function(){return o.ActionsObservable}});var i=t(6);Object.defineProperty(r,"combineEpics",{enumerable:!0,get:function(){return i.combineEpics}});var u=t(3);Object.defineProperty(r,"EPIC_END",{enumerable:!0,get:function(){return u.EPIC_END}})},function(r,t){r.exports=e},function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0}),r.ActionsObservable=void 0;var u=function(){function e(e,r){for(var t=0;r.length>t;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),c=t(1),a=t(4);r.ActionsObservable=function(e){function r(e){n(this,r);var t=o(this,Object.getPrototypeOf(r).call(this));return t.source=e,t}return i(r,e),u(r,[{key:"lift",value:function(e){var t=new r(this);return t.operator=e,t}},{key:"ofType",value:function(){for(var e=arguments.length,r=Array(e),t=0;e>t;t++)r[t]=arguments[t];return a.filter.call(this,function(e){var t=e.type,n=r.length;if(1===n)return t===r[0];for(var o=0;n>o;o++)if(r[o]===t)return!0;return!1})}}]),r}(c.Observable)},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.EPIC_END="@@redux-observable/EPIC_END"},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);e.length>r;r++)t[r]=e[r];return t}return Array.from(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.combineEpics=void 0;var o=t(5);r.combineEpics=function(){for(var e=arguments.length,r=Array(e),t=0;e>t;t++)r[t]=arguments[t];return function(e,t){return o.merge.apply(void 0,n(r.map(function(r){return r(e,t)})))}}},function(e,r,t){"use strict";function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,t=r.adapter,n=void 0===t?s:t,l=new o.Subject,b=n.input(new a.ActionsObservable(l)),d=new i.BehaviorSubject(e),v=void 0,y=function(r){return v=r,function(r){return"function"==typeof e&&c.switchMap.call(d,function(e){return n.output(e(b,v))}).subscribe(v.dispatch),function(e){if("function"==typeof e){"undefined"!=typeof console&&void 0!==console.warn&&console.warn('DEPRECATION: Using thunkservables with redux-observable is now deprecated in favor of the new "Epics" feature. See http://redux-observable.js.org/docs/FAQ.html#why-were-thunkservables-deprecated');var t=(0,u.from)(e(b,v));return t.subscribe(v.dispatch)}var n=r(e);return l.next(e),n}}};return y.replaceEpic=function(e){v.dispatch({type:f.EPIC_END}),d.next(e)},y}Object.defineProperty(r,"__esModule",{value:!0}),r.createEpicMiddleware=n;var o=t(1),i=t(1),u=t(5),c=t(4),a=t(2),f=t(3),s={input:function(e){return e},output:function(e){return e}},p={adapter:s}}])});

/**
 * @license
 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function t(t,n){return t.set(n[0],n[1]),t}function n(t,n){return t.add(n),t}function r(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function e(t,n,r,e){for(var u=-1,o=t?t.length:0;++u<o;){var i=t[u];n(e,i,r(i),t)}return e}function u(t,n){for(var r=-1,e=t?t.length:0;++r<e&&false!==n(t[r],r,t););return t}function o(t,n){for(var r=t?t.length:0;r--&&false!==n(t[r],r,t););
return t}function i(t,n){for(var r=-1,e=t?t.length:0;++r<e;)if(!n(t[r],r,t))return false;return true}function f(t,n){for(var r=-1,e=t?t.length:0,u=0,o=[];++r<e;){var i=t[r];n(i,r,t)&&(o[u++]=i)}return o}function c(t,n){return!(!t||!t.length)&&-1<d(t,n,0)}function a(t,n,r){for(var e=-1,u=t?t.length:0;++e<u;)if(r(n,t[e]))return true;return false}function l(t,n){for(var r=-1,e=t?t.length:0,u=Array(e);++r<e;)u[r]=n(t[r],r,t);return u}function s(t,n){for(var r=-1,e=n.length,u=t.length;++r<e;)t[u+r]=n[r];return t}function h(t,n,r,e){
var u=-1,o=t?t.length:0;for(e&&o&&(r=t[++u]);++u<o;)r=n(r,t[u],u,t);return r}function p(t,n,r,e){var u=t?t.length:0;for(e&&u&&(r=t[--u]);u--;)r=n(r,t[u],u,t);return r}function _(t,n){for(var r=-1,e=t?t.length:0;++r<e;)if(n(t[r],r,t))return true;return false}function v(t,n,r){var e;return r(t,function(t,r,u){if(n(t,r,u))return e=r,false}),e}function g(t,n,r,e){var u=t.length;for(r+=e?1:-1;e?r--:++r<u;)if(n(t[r],r,t))return r;return-1}function d(t,n,r){if(n!==n)return g(t,b,r);--r;for(var e=t.length;++r<e;)if(t[r]===n)return r;
return-1}function y(t,n,r,e){--r;for(var u=t.length;++r<u;)if(e(t[r],n))return r;return-1}function b(t){return t!==t}function x(t,n){var r=t?t.length:0;return r?k(t,n)/r:q}function j(t){return function(n){return null==n?P:n[t]}}function w(t){return function(n){return null==t?P:t[n]}}function m(t,n,r,e,u){return u(t,function(t,u,o){r=e?(e=false,t):n(r,t,u,o)}),r}function A(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].c;return t}function k(t,n){for(var r,e=-1,u=t.length;++e<u;){var o=n(t[e]);o!==P&&(r=r===P?o:r+o);
}return r}function E(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function O(t,n){return l(n,function(n){return[n,t[n]]})}function S(t){return function(n){return t(n)}}function I(t,n){return l(n,function(n){return t[n]})}function R(t,n){return t.has(n)}function W(t,n){for(var r=-1,e=t.length;++r<e&&-1<d(n,t[r],0););return r}function B(t,n){for(var r=t.length;r--&&-1<d(n,t[r],0););return r}function L(t){return"\\"+Ft[t]}function C(t){var n=false;if(null!=t&&typeof t.toString!="function")try{
n=!!(t+"")}catch(t){}return n}function U(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function M(t,n){return function(r){return t(n(r))}}function z(t,n){for(var r=-1,e=t.length,u=0,o=[];++r<e;){var i=t[r];i!==n&&"__lodash_placeholder__"!==i||(t[r]="__lodash_placeholder__",o[u++]=r)}return o}function D(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}function T(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=[t,t]}),r}function $(t){
if(Ut.test(t)){for(var n=Lt.lastIndex=0;Lt.test(t);)n++;t=n}else t=en(t);return t}function F(t){return Ut.test(t)?t.match(Lt)||[]:t.split("")}function N(w){function St(t){return Hu.call(t)}function It(t){if(ou(t)&&!Fi(t)&&!(t instanceof $t)){if(t instanceof Lt)return t;if(Gu.call(t,"__wrapped__"))return Oe(t)}return new Lt(t)}function Rt(){}function Lt(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=P}function $t(t){this.__wrapped__=t,this.__actions__=[],
this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Ft(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Zt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function qt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Kt(t){var n=-1,r=t?t.length:0;for(this.__data__=new qt;++n<r;)this.add(t[n])}function Gt(t){this.__data__=new Zt(t);
}function Yt(t,n){var r,e=Fi(t)||He(t)?E(t.length,Fu):[],u=e.length,o=!!u;for(r in t)!n&&!Gu.call(t,r)||o&&("length"==r||ge(r,u))||e.push(r);return e}function en(t,n,r,e){return t===P||Ye(t,Zu[r])&&!Gu.call(e,r)?n:t}function an(t,n,r){(r===P||Ye(t[n],r))&&(typeof n!="number"||r!==P||n in t)||(t[n]=r)}function ln(t,n,r){var e=t[n];Gu.call(t,n)&&Ye(e,r)&&(r!==P||n in t)||(t[n]=r)}function sn(t,n){for(var r=t.length;r--;)if(Ye(t[r][0],n))return r;return-1}function hn(t,n,r,e){return Po(t,function(t,u,o){
n(e,t,r(t),o)}),e}function pn(t,n){return t&&Br(n,bu(n),t)}function _n(t,n){for(var r=-1,e=null==t,u=n.length,o=Cu(u);++r<u;)o[r]=e?P:du(t,n[r]);return o}function vn(t,n,r){return t===t&&(r!==P&&(t=t<=r?t:r),n!==P&&(t=t>=n?t:n)),t}function gn(t,n,r,e,o,i,f){var c;if(e&&(c=i?e(t,o,i,f):e(t)),c!==P)return c;if(!uu(t))return t;if(o=Fi(t)){if(c=he(t),!n)return Wr(t,c)}else{var a=St(t),l="[object Function]"==a||"[object GeneratorFunction]"==a;if(Pi(t))return Er(t,n);if("[object Object]"==a||"[object Arguments]"==a||l&&!i){
if(C(t))return i?t:{};if(c=pe(l?{}:t),!n)return Lr(t,pn(c,t))}else{if(!Tt[a])return i?t:{};c=_e(t,a,gn,n)}}if(f||(f=new Gt),i=f.get(t))return i;if(f.set(t,c),!o)var s=r?Rn(t,bu,Ho):bu(t);return u(s||t,function(u,o){s&&(o=u,u=t[o]),ln(c,o,gn(u,n,r,e,o,t,f))}),c}function dn(t){var n=bu(t);return function(r){return yn(r,t,n)}}function yn(t,n,r){var e=r.length;if(null==t)return!e;for(t=Tu(t);e--;){var u=r[e],o=n[u],i=t[u];if(i===P&&!(u in t)||!o(i))return false}return true}function bn(t){return uu(t)?oo(t):{};
}function xn(t,n,r){if(typeof t!="function")throw new Nu("Expected a function");return ni(function(){t.apply(P,r)},n)}function jn(t,n,r,e){var u=-1,o=c,i=true,f=t.length,s=[],h=n.length;if(!f)return s;r&&(n=l(n,S(r))),e?(o=a,i=false):200<=n.length&&(o=R,i=false,n=new Kt(n));t:for(;++u<f;){var p=t[u],_=r?r(p):p,p=e||0!==p?p:0;if(i&&_===_){for(var v=h;v--;)if(n[v]===_)continue t;s.push(p)}else o(n,_,e)||s.push(p)}return s}function wn(t,n){var r=true;return Po(t,function(t,e,u){return r=!!n(t,e,u)}),r}function mn(t,n,r){
for(var e=-1,u=t.length;++e<u;){var o=t[e],i=n(o);if(null!=i&&(f===P?i===i&&!au(i):r(i,f)))var f=i,c=o}return c}function An(t,n){var r=[];return Po(t,function(t,e,u){n(t,e,u)&&r.push(t)}),r}function kn(t,n,r,e,u){var o=-1,i=t.length;for(r||(r=ve),u||(u=[]);++o<i;){var f=t[o];0<n&&r(f)?1<n?kn(f,n-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function En(t,n){return t&&qo(t,n,bu)}function On(t,n){return t&&Vo(t,n,bu)}function Sn(t,n){return f(n,function(n){return nu(t[n])})}function In(t,n){n=ye(n,t)?[n]:Ar(n);
for(var r=0,e=n.length;null!=t&&r<e;)t=t[Ae(n[r++])];return r&&r==e?t:P}function Rn(t,n,r){return n=n(t),Fi(t)?n:s(n,r(t))}function Wn(t,n){return t>n}function Bn(t,n){return null!=t&&Gu.call(t,n)}function Ln(t,n){return null!=t&&n in Tu(t)}function Cn(t,n,r){for(var e=r?a:c,u=t[0].length,o=t.length,i=o,f=Cu(o),s=1/0,h=[];i--;){var p=t[i];i&&n&&(p=l(p,S(n))),s=jo(p.length,s),f[i]=!r&&(n||120<=u&&120<=p.length)?new Kt(i&&p):P}var p=t[0],_=-1,v=f[0];t:for(;++_<u&&h.length<s;){var g=p[_],d=n?n(g):g,g=r||0!==g?g:0;
if(v?!R(v,d):!e(h,d,r)){for(i=o;--i;){var y=f[i];if(y?!R(y,d):!e(t[i],d,r))continue t}v&&v.push(d),h.push(g)}}return h}function Un(t,n,r){var e={};return En(t,function(t,u,o){n(e,r(t),u,o)}),e}function Mn(t,n,e){return ye(n,t)||(n=Ar(n),t=me(t,n),n=We(n)),n=null==t?t:t[Ae(n)],null==n?P:r(n,t,e)}function zn(t){return ou(t)&&"[object ArrayBuffer]"==Hu.call(t)}function Dn(t){return ou(t)&&"[object Date]"==Hu.call(t)}function Tn(t,n,r,e,u){if(t===n)n=true;else if(null==t||null==n||!uu(t)&&!ou(n))n=t!==t&&n!==n;else t:{
var o=Fi(t),i=Fi(n),f="[object Array]",c="[object Array]";o||(f=St(t),f="[object Arguments]"==f?"[object Object]":f),i||(c=St(n),c="[object Arguments]"==c?"[object Object]":c);var a="[object Object]"==f&&!C(t),i="[object Object]"==c&&!C(n);if((c=f==c)&&!a)u||(u=new Gt),n=o||Gi(t)?ee(t,n,Tn,r,e,u):ue(t,n,f,Tn,r,e,u);else{if(!(2&e)&&(o=a&&Gu.call(t,"__wrapped__"),f=i&&Gu.call(n,"__wrapped__"),o||f)){t=o?t.value():t,n=f?n.value():n,u||(u=new Gt),n=Tn(t,n,r,e,u);break t}if(c)n:if(u||(u=new Gt),o=2&e,
f=bu(t),i=f.length,c=bu(n).length,i==c||o){for(a=i;a--;){var l=f[a];if(!(o?l in n:Gu.call(n,l))){n=false;break n}}if((c=u.get(t))&&u.get(n))n=c==n;else{c=true,u.set(t,n),u.set(n,t);for(var s=o;++a<i;){var l=f[a],h=t[l],p=n[l];if(r)var _=o?r(p,h,l,n,t,u):r(h,p,l,t,n,u);if(_===P?h!==p&&!Tn(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=t.constructor,e=n.constructor,r!=e&&"constructor"in t&&"constructor"in n&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(t),u.delete(n),n=c}}else n=false;else n=false}}return n}function $n(t){return ou(t)&&"[object Map]"==St(t)}function Fn(t,n,r,e){var u=r.length,o=u,i=!e;if(null==t)return!o;for(t=Tu(t);u--;){var f=r[u];if(i&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return false}for(;++u<o;){var f=r[u],c=f[0],a=t[c],l=f[1];if(i&&f[2]){if(a===P&&!(c in t))return false}else{if(f=new Gt,e)var s=e(a,l,c,t,n,f);if(s===P?!Tn(l,a,e,3,f):!s)return false}}return true}function Nn(t){return!(!uu(t)||Vu&&Vu in t)&&(nu(t)||C(t)?Xu:wt).test(ke(t))}function Pn(t){
return uu(t)&&"[object RegExp]"==Hu.call(t)}function Zn(t){return ou(t)&&"[object Set]"==St(t)}function qn(t){return ou(t)&&eu(t.length)&&!!Dt[Hu.call(t)]}function Vn(t){return typeof t=="function"?t:null==t?Ou:typeof t=="object"?Fi(t)?Qn(t[0],t[1]):Hn(t):Wu(t)}function Kn(t){if(!xe(t))return bo(t);var n,r=[];for(n in Tu(t))Gu.call(t,n)&&"constructor"!=n&&r.push(n);return r}function Gn(t){if(!uu(t)){var n=[];if(null!=t)for(var r in Tu(t))n.push(r);return n}r=xe(t);var e=[];for(n in t)("constructor"!=n||!r&&Gu.call(t,n))&&e.push(n);
return e}function Jn(t,n){return t<n}function Yn(t,n){var r=-1,e=Qe(t)?Cu(t.length):[];return Po(t,function(t,u,o){e[++r]=n(t,u,o)}),e}function Hn(t){var n=ae(t);return 1==n.length&&n[0][2]?je(n[0][0],n[0][1]):function(r){return r===t||Fn(r,t,n)}}function Qn(t,n){return ye(t)&&n===n&&!uu(n)?je(Ae(t),n):function(r){var e=du(r,t);return e===P&&e===n?yu(r,t):Tn(n,e,P,3)}}function Xn(t,n,r,e,o){if(t!==n){if(!Fi(n)&&!Gi(n))var i=Gn(n);u(i||n,function(u,f){if(i&&(f=u,u=n[f]),uu(u)){o||(o=new Gt);var c=f,a=o,l=t[c],s=n[c],h=a.get(s);
if(h)an(t,c,h);else{var h=e?e(l,s,c+"",t,n,a):P,p=h===P;p&&(h=s,Fi(s)||Gi(s)?Fi(l)?h=l:Xe(l)?h=Wr(l):(p=false,h=gn(s,true)):fu(s)||He(s)?He(l)?h=vu(l):!uu(l)||r&&nu(l)?(p=false,h=gn(s,true)):h=l:p=false),p&&(a.set(s,h),Xn(h,s,r,e,a),a.delete(s)),an(t,c,h)}}else c=e?e(t[f],u,f+"",t,n,o):P,c===P&&(c=u),an(t,f,c)})}}function tr(t,n){var r=t.length;if(r)return n+=0>n?r:0,ge(n,r)?t[n]:P}function nr(t,n,r){var e=-1;return n=l(n.length?n:[Ou],S(fe())),t=Yn(t,function(t){return{a:l(n,function(n){return n(t)}),b:++e,c:t
}}),A(t,function(t,n){var e;t:{e=-1;for(var u=t.a,o=n.a,i=u.length,f=r.length;++e<i;){var c=Sr(u[e],o[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break t}}e=t.b-n.b}return e})}function rr(t,n){return t=Tu(t),er(t,n,function(n,r){return r in t})}function er(t,n,r){for(var e=-1,u=n.length,o={};++e<u;){var i=n[e],f=t[i];r(f,i)&&(o[i]=f)}return o}function ur(t){return function(n){return In(n,t)}}function or(t,n,r,e){var u=e?y:d,o=-1,i=n.length,f=t;for(t===n&&(n=Wr(n)),r&&(f=l(t,S(r)));++o<i;)for(var c=0,a=n[o],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==t&&fo.call(f,c,1),
fo.call(t,c,1);return t}function ir(t,n){for(var r=t?n.length:0,e=r-1;r--;){var u=n[r];if(r==e||u!==o){var o=u;if(ge(u))fo.call(t,u,1);else if(ye(u,t))delete t[Ae(u)];else{var u=Ar(u),i=me(t,u);null!=i&&delete i[Ae(We(u))]}}}}function fr(t,n){return t+po(mo()*(n-t+1))}function cr(t,n){var r="";if(!t||1>n||9007199254740991<n)return r;do n%2&&(r+=t),(n=po(n/2))&&(t+=t);while(n);return r}function ar(t,n){return n=xo(n===P?t.length-1:n,0),function(){for(var e=arguments,u=-1,o=xo(e.length-n,0),i=Cu(o);++u<o;)i[u]=e[n+u];
for(u=-1,o=Cu(n+1);++u<n;)o[u]=e[u];return o[n]=i,r(t,this,o)}}function lr(t,n,r,e){if(!uu(t))return t;n=ye(n,t)?[n]:Ar(n);for(var u=-1,o=n.length,i=o-1,f=t;null!=f&&++u<o;){var c=Ae(n[u]),a=r;if(u!=i){var l=f[c],a=e?e(l,c,f):P;a===P&&(a=uu(l)?l:ge(n[u+1])?[]:{})}ln(f,c,a),f=f[c]}return t}function sr(t,n,r){var e=-1,u=t.length;for(0>n&&(n=-n>u?0:u+n),r=r>u?u:r,0>r&&(r+=u),u=n>r?0:r-n>>>0,n>>>=0,r=Cu(u);++e<u;)r[e]=t[e+n];return r}function hr(t,n){var r;return Po(t,function(t,e,u){return r=n(t,e,u),
!r}),!!r}function pr(t,n,r){var e=0,u=t?t.length:e;if(typeof n=="number"&&n===n&&2147483647>=u){for(;e<u;){var o=e+u>>>1,i=t[o];null!==i&&!au(i)&&(r?i<=n:i<n)?e=o+1:u=o}return u}return _r(t,n,Ou,r)}function _r(t,n,r,e){n=r(n);for(var u=0,o=t?t.length:0,i=n!==n,f=null===n,c=au(n),a=n===P;u<o;){var l=po((u+o)/2),s=r(t[l]),h=s!==P,p=null===s,_=s===s,v=au(s);(i?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=n:s<n)?u=l+1:o=l}return jo(o,4294967294)}function vr(t,n){for(var r=-1,e=t.length,u=0,o=[];++r<e;){
var i=t[r],f=n?n(i):i;if(!r||!Ye(f,c)){var c=f;o[u++]=0===i?0:i}}return o}function gr(t){return typeof t=="number"?t:au(t)?q:+t}function dr(t){if(typeof t=="string")return t;if(au(t))return No?No.call(t):"";var n=t+"";return"0"==n&&1/t==-Z?"-0":n}function yr(t,n,r){var e=-1,u=c,o=t.length,i=true,f=[],l=f;if(r)i=false,u=a;else if(200<=o){if(u=n?null:Jo(t))return D(u);i=false,u=R,l=new Kt}else l=n?[]:f;t:for(;++e<o;){var s=t[e],h=n?n(s):s,s=r||0!==s?s:0;if(i&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue t;
n&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function br(t,n,r,e){for(var u=t.length,o=e?u:-1;(e?o--:++o<u)&&n(t[o],o,t););return r?sr(t,e?0:o,e?o+1:u):sr(t,e?o+1:0,e?u:o)}function xr(t,n){var r=t;return r instanceof $t&&(r=r.value()),h(n,function(t,n){return n.func.apply(n.thisArg,s([t],n.args))},r)}function jr(t,n,r){for(var e=-1,u=t.length;++e<u;)var o=o?s(jn(o,t[e],n,r),jn(t[e],o,n,r)):t[e];return o&&o.length?yr(o,n,r):[]}function wr(t,n,r){for(var e=-1,u=t.length,o=n.length,i={};++e<u;)r(i,t[e],e<o?n[e]:P);
return i}function mr(t){return Xe(t)?t:[]}function Ar(t){return Fi(t)?t:ei(t)}function kr(t,n,r){var e=t.length;return r=r===P?e:r,!n&&r>=e?t:sr(t,n,r)}function Er(t,n){if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}function Or(t){var n=new t.constructor(t.byteLength);return new ro(n).set(new ro(t)),n}function Sr(t,n){if(t!==n){var r=t!==P,e=null===t,u=t===t,o=au(t),i=n!==P,f=null===n,c=n===n,a=au(n);if(!f&&!a&&!o&&t>n||o&&i&&c&&!f&&!a||e&&i&&c||!r&&c||!u)return 1;if(!e&&!o&&!a&&t<n||a&&r&&u&&!e&&!o||f&&r&&u||!i&&u||!c)return-1;
}return 0}function Ir(t,n,r,e){var u=-1,o=t.length,i=r.length,f=-1,c=n.length,a=xo(o-i,0),l=Cu(c+a);for(e=!e;++f<c;)l[f]=n[f];for(;++u<i;)(e||u<o)&&(l[r[u]]=t[u]);for(;a--;)l[f++]=t[u++];return l}function Rr(t,n,r,e){var u=-1,o=t.length,i=-1,f=r.length,c=-1,a=n.length,l=xo(o-f,0),s=Cu(l+a);for(e=!e;++u<l;)s[u]=t[u];for(l=u;++c<a;)s[l+c]=n[c];for(;++i<f;)(e||u<o)&&(s[l+r[i]]=t[u++]);return s}function Wr(t,n){var r=-1,e=t.length;for(n||(n=Cu(e));++r<e;)n[r]=t[r];return n}function Br(t,n,r,e){r||(r={});
for(var u=-1,o=n.length;++u<o;){var i=n[u],f=e?e(r[i],t[i],i,r,t):P;ln(r,i,f===P?t[i]:f)}return r}function Lr(t,n){return Br(t,Ho(t),n)}function Cr(t,n){return function(r,u){var o=Fi(r)?e:hn,i=n?n():{};return o(r,t,fe(u,2),i)}}function Ur(t){return ar(function(n,r){var e=-1,u=r.length,o=1<u?r[u-1]:P,i=2<u?r[2]:P,o=3<t.length&&typeof o=="function"?(u--,o):P;for(i&&de(r[0],r[1],i)&&(o=3>u?P:o,u=1),n=Tu(n);++e<u;)(i=r[e])&&t(n,i,e,o);return n})}function Mr(t,n){return function(r,e){if(null==r)return r;
if(!Qe(r))return t(r,e);for(var u=r.length,o=n?u:-1,i=Tu(r);(n?o--:++o<u)&&false!==e(i[o],o,i););return r}}function zr(t){return function(n,r,e){var u=-1,o=Tu(n);e=e(n);for(var i=e.length;i--;){var f=e[t?i:++u];if(false===r(o[f],f,o))break}return n}}function Dr(t,n,r){function e(){return(this&&this!==Vt&&this instanceof e?o:t).apply(u?r:this,arguments)}var u=1&n,o=Fr(t);return e}function Tr(t){return function(n){n=gu(n);var r=Ut.test(n)?F(n):P,e=r?r[0]:n.charAt(0);return n=r?kr(r,1).join(""):n.slice(1),
e[t]()+n}}function $r(t){return function(n){return h(ku(Au(n).replace(Wt,"")),t,"")}}function Fr(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=bn(t.prototype),n=t.apply(r,n);return uu(n)?n:r;
}}function Nr(t,n,e){function u(){for(var i=arguments.length,f=Cu(i),c=i,a=ie(u);c--;)f[c]=arguments[c];return c=3>i&&f[0]!==a&&f[i-1]!==a?[]:z(f,a),i-=c.length,i<e?Xr(t,n,qr,u.placeholder,P,f,c,P,P,e-i):r(this&&this!==Vt&&this instanceof u?o:t,this,f)}var o=Fr(t);return u}function Pr(t){return function(n,r,e){var u=Tu(n);if(!Qe(n)){var o=fe(r,3);n=bu(n),r=function(t){return o(u[t],t,u)}}return r=t(n,r,e),-1<r?u[o?n[r]:r]:P}}function Zr(t){return ar(function(n){n=kn(n,1);var r=n.length,e=r,u=Lt.prototype.thru;
for(t&&n.reverse();e--;){var o=n[e];if(typeof o!="function")throw new Nu("Expected a function");if(u&&!i&&"wrapper"==oe(o))var i=new Lt([],(true))}for(e=i?e:r;++e<r;)var o=n[e],u=oe(o),f="wrapper"==u?Yo(o):P,i=f&&be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?i[oe(f[0])].apply(i,f[3]):1==o.length&&be(o)?i[u]():i.thru(o);return function(){var t=arguments,e=t[0];if(i&&1==t.length&&Fi(e)&&200<=e.length)return i.plant(e).value();for(var u=0,t=r?n[u].apply(this,t):e;++u<r;)t=n[u].call(this,t);return t}})}function qr(t,n,r,e,u,o,i,f,c,a){
function l(){for(var d=arguments.length,y=Cu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=ie(l),b=y.length;for(x=0;b--;)y[b]===j&&x++}if(e&&(y=Ir(y,e,u,_)),o&&(y=Rr(y,o,i,_)),d-=x,_&&d<a)return j=z(y,j),Xr(t,n,qr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[t]:t,d=y.length,f){x=y.length;for(var w=jo(f.length,x),m=Wr(y);w--;){var A=f[w];y[w]=ge(A,x)?m[A]:P}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Vt&&this instanceof l&&(b=g||Fr(b)),b.apply(j,y)}var s=128&n,h=1&n,p=2&n,_=24&n,v=512&n,g=p?P:Fr(t);
return l}function Vr(t,n){return function(r,e){return Un(r,t,n(e))}}function Kr(t,n){return function(r,e){var u;if(r===P&&e===P)return n;if(r!==P&&(u=r),e!==P){if(u===P)return e;typeof r=="string"||typeof e=="string"?(r=dr(r),e=dr(e)):(r=gr(r),e=gr(e)),u=t(r,e)}return u}}function Gr(t){return ar(function(n){return n=1==n.length&&Fi(n[0])?l(n[0],S(fe())):l(kn(n,1),S(fe())),ar(function(e){var u=this;return t(n,function(t){return r(t,u,e)})})})}function Jr(t,n){n=n===P?" ":dr(n);var r=n.length;return 2>r?r?cr(n,t):n:(r=cr(n,ho(t/$(n))),
Ut.test(n)?kr(F(r),0,t).join(""):r.slice(0,t))}function Yr(t,n,e,u){function o(){for(var n=-1,c=arguments.length,a=-1,l=u.length,s=Cu(l+c),h=this&&this!==Vt&&this instanceof o?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++n];return r(h,i?e:this,s)}var i=1&n,f=Fr(t);return o}function Hr(t){return function(n,r,e){e&&typeof e!="number"&&de(n,r,e)&&(r=e=P),n=su(n),r===P?(r=n,n=0):r=su(r),e=e===P?n<r?1:-1:su(e);var u=-1;r=xo(ho((r-n)/(e||1)),0);for(var o=Cu(r);r--;)o[t?r:++u]=n,n+=e;return o}}function Qr(t){
return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=_u(n),r=_u(r)),t(n,r)}}function Xr(t,n,r,e,u,o,i,f,c,a){var l=8&n,s=l?i:P;i=l?P:i;var h=l?o:P;return o=l?P:o,n=(n|(l?32:64))&~(l?64:32),4&n||(n&=-4),u=[t,n,u,h,s,o,i,f,c,a],r=r.apply(P,u),be(t)&&ti(r,u),r.placeholder=e,ri(r,t,n)}function te(t){var n=Du[t];return function(t,r){if(t=_u(t),r=jo(hu(r),292)){var e=(gu(t)+"e").split("e"),e=n(e[0]+"e"+(+e[1]+r)),e=(gu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return n(t)}}function ne(t){
return function(n){var r=St(n);return"[object Map]"==r?U(n):"[object Set]"==r?T(n):O(n,t(n))}}function re(t,n,r,e,u,o,i,f){var c=2&n;if(!c&&typeof t!="function")throw new Nu("Expected a function");var a=e?e.length:0;if(a||(n&=-97,e=u=P),i=i===P?i:xo(hu(i),0),f=f===P?f:hu(f),a-=u?u.length:0,64&n){var l=e,s=u;e=u=P}var h=c?P:Yo(t);return o=[t,n,r,e,u,l,s,o,i,f],h&&(r=o[1],t=h[1],n=r|t,e=128==t&&8==r||128==t&&256==r&&o[7].length<=h[8]||384==t&&h[7].length<=h[8]&&8==r,131>n||e)&&(1&t&&(o[2]=h[2],n|=1&r?0:4),
(r=h[3])&&(e=o[3],o[3]=e?Ir(e,r,h[4]):r,o[4]=e?z(o[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=o[5],o[5]=e?Rr(e,r,h[6]):r,o[6]=e?z(o[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(o[7]=r),128&t&&(o[8]=null==o[8]?h[8]:jo(o[8],h[8])),null==o[9]&&(o[9]=h[9]),o[0]=h[0],o[1]=n),t=o[0],n=o[1],r=o[2],e=o[3],u=o[4],f=o[9]=null==o[9]?c?0:t.length:xo(o[9]-a,0),!f&&24&n&&(n&=-25),ri((h?Ko:ti)(n&&1!=n?8==n||16==n?Nr(t,n,f):32!=n&&33!=n||u.length?qr.apply(P,o):Yr(t,n,r,e):Dr(t,n,r),o),t,n)}function ee(t,n,r,e,u,o){
var i=2&u,f=t.length,c=n.length;if(f!=c&&!(i&&c>f))return false;if((c=o.get(t))&&o.get(n))return c==n;var c=-1,a=true,l=1&u?new Kt:P;for(o.set(t,n),o.set(n,t);++c<f;){var s=t[c],h=n[c];if(e)var p=i?e(h,s,c,n,t,o):e(s,h,c,t,n,o);if(p!==P){if(p)continue;a=false;break}if(l){if(!_(n,function(t,n){if(!l.has(n)&&(s===t||r(s,t,e,u,o)))return l.add(n)})){a=false;break}}else if(s!==h&&!r(s,h,e,u,o)){a=false;break}}return o.delete(t),o.delete(n),a}function ue(t,n,r,e,u,o,i){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)break;
t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":if(t.byteLength!=n.byteLength||!e(new ro(t),new ro(n)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return Ye(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var f=U;case"[object Set]":if(f||(f=D),t.size!=n.size&&!(2&o))break;return(r=i.get(t))?r==n:(o|=1,i.set(t,n),n=ee(f(t),f(n),e,u,o,i),i.delete(t),n);case"[object Symbol]":
if(Fo)return Fo.call(t)==Fo.call(n)}return false}function oe(t){for(var n=t.name+"",r=Co[n],e=Gu.call(Co,n)?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==t)return u.name}return n}function ie(t){return(Gu.call(It,"placeholder")?It:t).placeholder}function fe(){var t=It.iteratee||Su,t=t===Su?Vn:t;return arguments.length?t(arguments[0],arguments[1]):t}function ce(t,n){var r=t.__data__,e=typeof n;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?r[typeof n=="string"?"string":"hash"]:r.map;
}function ae(t){for(var n=bu(t),r=n.length;r--;){var e=n[r],u=t[e];n[r]=[e,u,u===u&&!uu(u)]}return n}function le(t,n){var r=null==t?P:t[n];return Nn(r)?r:P}function se(t,n,r){n=ye(n,t)?[n]:Ar(n);for(var e,u=-1,o=n.length;++u<o;){var i=Ae(n[u]);if(!(e=null!=t&&r(t,i)))break;t=t[i]}return e?e:(o=t?t.length:0,!!o&&eu(o)&&ge(i,o)&&(Fi(t)||He(t)))}function he(t){var n=t.length,r=t.constructor(n);return n&&"string"==typeof t[0]&&Gu.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function pe(t){return typeof t.constructor!="function"||xe(t)?{}:bn(eo(t));
}function _e(r,e,u,o){var i=r.constructor;switch(e){case"[object ArrayBuffer]":return Or(r);case"[object Boolean]":case"[object Date]":return new i((+r));case"[object DataView]":return e=o?Or(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":
return e=o?Or(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.length);case"[object Map]":return e=o?u(U(r),true):U(r),h(e,t,new r.constructor);case"[object Number]":case"[object String]":return new i(r);case"[object RegExp]":return e=new r.constructor(r.source,yt.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=o?u(D(r),true):D(r),h(e,n,new r.constructor);case"[object Symbol]":return Fo?Tu(Fo.call(r)):{}}}function ve(t){return Fi(t)||He(t)||!!(co&&t&&t[co])}function ge(t,n){return n=null==n?9007199254740991:n,
!!n&&(typeof t=="number"||At.test(t))&&-1<t&&0==t%1&&t<n}function de(t,n,r){if(!uu(r))return false;var e=typeof n;return!!("number"==e?Qe(r)&&ge(n,r.length):"string"==e&&n in r)&&Ye(r[n],t)}function ye(t,n){if(Fi(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!au(t))||(ut.test(t)||!et.test(t)||null!=n&&t in Tu(n))}function be(t){var n=oe(t),r=It[n];return typeof r=="function"&&n in $t.prototype&&(t===r||(n=Yo(r),!!n&&t===n[0]))}function xe(t){var n=t&&t.constructor;
return t===(typeof n=="function"&&n.prototype||Zu)}function je(t,n){return function(r){return null!=r&&(r[t]===n&&(n!==P||t in Tu(r)))}}function we(t,n,r,e,u,o){return uu(t)&&uu(n)&&(o.set(n,t),Xn(t,n,P,we,o),o.delete(n)),t}function me(t,n){return 1==n.length?t:In(t,sr(n,0,-1))}function Ae(t){if(typeof t=="string"||au(t))return t;var n=t+"";return"0"==n&&1/t==-Z?"-0":n}function ke(t){if(null!=t){try{return Ku.call(t)}catch(t){}return t+""}return""}function Ee(t,n){return u(V,function(r){var e="_."+r[0];
n&r[1]&&!c(t,e)&&t.push(e)}),t.sort()}function Oe(t){if(t instanceof $t)return t.clone();var n=new Lt(t.__wrapped__,t.__chain__);return n.__actions__=Wr(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function Se(t,n,r){var e=t?t.length:0;return e?(r=null==r?0:hu(r),0>r&&(r=xo(e+r,0)),g(t,fe(n,3),r)):-1}function Ie(t,n,r){var e=t?t.length:0;if(!e)return-1;var u=e-1;return r!==P&&(u=hu(r),u=0>r?xo(e+u,0):jo(u,e-1)),g(t,fe(n,3),u,true)}function Re(t){return t&&t.length?t[0]:P}function We(t){
var n=t?t.length:0;return n?t[n-1]:P}function Be(t,n){return t&&t.length&&n&&n.length?or(t,n):t}function Le(t){return t?Ao.call(t):t}function Ce(t){if(!t||!t.length)return[];var n=0;return t=f(t,function(t){if(Xe(t))return n=xo(t.length,n),true}),E(n,function(n){return l(t,j(n))})}function Ue(t,n){if(!t||!t.length)return[];var e=Ce(t);return null==n?e:l(e,function(t){return r(n,P,t)})}function Me(t){return t=It(t),t.__chain__=true,t}function ze(t,n){return n(t)}function De(){return this}function Te(t,n){
return(Fi(t)?u:Po)(t,fe(n,3))}function $e(t,n){return(Fi(t)?o:Zo)(t,fe(n,3))}function Fe(t,n){return(Fi(t)?l:Yn)(t,fe(n,3))}function Ne(t,n,r){var e=-1,u=lu(t),o=u.length,i=o-1;for(n=(r?de(t,n,r):n===P)?1:vn(hu(n),0,o);++e<n;)t=fr(e,i),r=u[t],u[t]=u[e],u[e]=r;return u.length=n,u}function Pe(t,n,r){return n=r?P:n,n=t&&null==n?t.length:n,re(t,128,P,P,P,P,n)}function Ze(t,n){var r;if(typeof n!="function")throw new Nu("Expected a function");return t=hu(t),function(){return 0<--t&&(r=n.apply(this,arguments)),
1>=t&&(n=P),r}}function qe(t,n,r){return n=r?P:n,t=re(t,8,P,P,P,P,P,n),t.placeholder=qe.placeholder,t}function Ve(t,n,r){return n=r?P:n,t=re(t,16,P,P,P,P,P,n),t.placeholder=Ve.placeholder,t}function Ke(t,n,r){function e(n){var r=c,e=a;return c=a=P,_=n,s=t.apply(e,r)}function u(t){var r=t-p;return t-=_,p===P||r>=n||0>r||g&&t>=l}function o(){var t=Ri();if(u(t))return i(t);var r,e=ni;r=t-_,t=n-(t-p),r=g?jo(t,l-r):t,h=e(o,r)}function i(t){return h=P,d&&c?e(t):(c=a=P,s)}function f(){var t=Ri(),r=u(t);if(c=arguments,
a=this,p=t,r){if(h===P)return _=t=p,h=ni(o,n),v?e(t):s;if(g)return h=ni(o,n),e(p)}return h===P&&(h=ni(o,n)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof t!="function")throw new Nu("Expected a function");return n=_u(n)||0,uu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?xo(_u(r.maxWait)||0,n):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==P&&Go(h),_=0,c=p=a=h=P},f.flush=function(){return h===P?s:i(Ri())},f}function Ge(t,n){function r(){var e=arguments,u=n?n.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=t.apply(this,e),
r.cache=o.set(u,e),e)}if(typeof t!="function"||n&&typeof n!="function")throw new Nu("Expected a function");return r.cache=new(Ge.Cache||qt),r}function Je(t){if(typeof t!="function")throw new Nu("Expected a function");return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function Ye(t,n){return t===n||t!==t&&n!==n}function He(t){return Xe(t)&&Gu.call(t,"callee")&&(!io.call(t,"callee")||"[object Arguments]"==Hu.call(t));
}function Qe(t){return null!=t&&eu(t.length)&&!nu(t)}function Xe(t){return ou(t)&&Qe(t)}function tu(t){return!!ou(t)&&("[object Error]"==Hu.call(t)||typeof t.message=="string"&&typeof t.name=="string")}function nu(t){return t=uu(t)?Hu.call(t):"","[object Function]"==t||"[object GeneratorFunction]"==t}function ru(t){return typeof t=="number"&&t==hu(t)}function eu(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function uu(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function ou(t){
return!!t&&typeof t=="object"}function iu(t){return typeof t=="number"||ou(t)&&"[object Number]"==Hu.call(t)}function fu(t){return!(!ou(t)||"[object Object]"!=Hu.call(t)||C(t))&&(t=eo(t),null===t||(t=Gu.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&Ku.call(t)==Yu))}function cu(t){return typeof t=="string"||!Fi(t)&&ou(t)&&"[object String]"==Hu.call(t)}function au(t){return typeof t=="symbol"||ou(t)&&"[object Symbol]"==Hu.call(t)}function lu(t){if(!t)return[];if(Qe(t))return cu(t)?F(t):Wr(t);
if(uo&&t[uo]){t=t[uo]();for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}return n=St(t),("[object Map]"==n?U:"[object Set]"==n?D:wu)(t)}function su(t){return t?(t=_u(t),t===Z||t===-Z?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function hu(t){t=su(t);var n=t%1;return t===t?n?t-n:t:0}function pu(t){return t?vn(hu(t),0,4294967295):0}function _u(t){if(typeof t=="number")return t;if(au(t))return q;if(uu(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=uu(t)?t+"":t),typeof t!="string")return 0===t?t:+t;
t=t.replace(at,"");var n=jt.test(t);return n||mt.test(t)?Pt(t.slice(2),n?2:8):xt.test(t)?q:+t}function vu(t){return Br(t,xu(t))}function gu(t){return null==t?"":dr(t)}function du(t,n,r){return t=null==t?P:In(t,n),t===P?r:t}function yu(t,n){return null!=t&&se(t,n,Ln)}function bu(t){return Qe(t)?Yt(t):Kn(t)}function xu(t){return Qe(t)?Yt(t,true):Gn(t)}function ju(t,n){return null==t?{}:er(t,Rn(t,xu,Qo),fe(n))}function wu(t){return t?I(t,bu(t)):[]}function mu(t){return jf(gu(t).toLowerCase())}function Au(t){
return(t=gu(t))&&t.replace(kt,un).replace(Bt,"")}function ku(t,n,r){return t=gu(t),n=r?P:n,n===P?Mt.test(t)?t.match(Ct)||[]:t.match(vt)||[]:t.match(n)||[]}function Eu(t){return function(){return t}}function Ou(t){return t}function Su(t){return Vn(typeof t=="function"?t:gn(t,true))}function Iu(t,n,r){var e=bu(n),o=Sn(n,e);null!=r||uu(n)&&(o.length||!e.length)||(r=n,n=t,t=this,o=Sn(n,bu(n)));var i=!(uu(r)&&"chain"in r&&!r.chain),f=nu(t);return u(o,function(r){var e=n[r];t[r]=e,f&&(t.prototype[r]=function(){
var n=this.__chain__;if(i||n){var r=t(this.__wrapped__);return(r.__actions__=Wr(this.__actions__)).push({func:e,args:arguments,thisArg:t}),r.__chain__=n,r}return e.apply(t,s([this.value()],arguments))})}),t}function Ru(){}function Wu(t){return ye(t)?j(Ae(t)):ur(t)}function Bu(){return[]}function Lu(){return false}w=w?cn.defaults(Vt.Object(),w,cn.pick(Vt,zt)):Vt;var Cu=w.Array,Uu=w.Date,Mu=w.Error,zu=w.Function,Du=w.Math,Tu=w.Object,$u=w.RegExp,Fu=w.String,Nu=w.TypeError,Pu=Cu.prototype,Zu=Tu.prototype,qu=w["__core-js_shared__"],Vu=function(){
var t=/[^.]+$/.exec(qu&&qu.keys&&qu.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ku=zu.prototype.toString,Gu=Zu.hasOwnProperty,Ju=0,Yu=Ku.call(Tu),Hu=Zu.toString,Qu=Vt._,Xu=$u("^"+Ku.call(Gu).replace(ft,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),to=Jt?w.Buffer:P,no=w.Symbol,ro=w.Uint8Array,eo=M(Tu.getPrototypeOf,Tu),uo=no?no.iterator:P,oo=Tu.create,io=Zu.propertyIsEnumerable,fo=Pu.splice,co=no?no.isConcatSpreadable:P,ao=w.clearTimeout!==Vt.clearTimeout&&w.clearTimeout,lo=Uu&&Uu.now!==Vt.Date.now&&Uu.now,so=w.setTimeout!==Vt.setTimeout&&w.setTimeout,ho=Du.ceil,po=Du.floor,_o=Tu.getOwnPropertySymbols,vo=to?to.isBuffer:P,go=w.isFinite,yo=Pu.join,bo=M(Tu.keys,Tu),xo=Du.max,jo=Du.min,wo=w.parseInt,mo=Du.random,Ao=Pu.reverse,ko=le(w,"DataView"),Eo=le(w,"Map"),Oo=le(w,"Promise"),So=le(w,"Set"),Io=le(w,"WeakMap"),Ro=le(Tu,"create"),Wo=function(){
var t=le(Tu,"defineProperty"),n=le.name;return n&&2<n.length?t:P}(),Bo=Io&&new Io,Lo=!io.call({valueOf:1},"valueOf"),Co={},Uo=ke(ko),Mo=ke(Eo),zo=ke(Oo),Do=ke(So),To=ke(Io),$o=no?no.prototype:P,Fo=$o?$o.valueOf:P,No=$o?$o.toString:P;It.templateSettings={escape:tt,evaluate:nt,interpolate:rt,variable:"",imports:{_:It}},It.prototype=Rt.prototype,It.prototype.constructor=It,Lt.prototype=bn(Rt.prototype),Lt.prototype.constructor=Lt,$t.prototype=bn(Rt.prototype),$t.prototype.constructor=$t,Ft.prototype.clear=function(){
this.__data__=Ro?Ro(null):{}},Ft.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ft.prototype.get=function(t){var n=this.__data__;return Ro?(t=n[t],"__lodash_hash_undefined__"===t?P:t):Gu.call(n,t)?n[t]:P},Ft.prototype.has=function(t){var n=this.__data__;return Ro?n[t]!==P:Gu.call(n,t)},Ft.prototype.set=function(t,n){return this.__data__[t]=Ro&&n===P?"__lodash_hash_undefined__":n,this},Zt.prototype.clear=function(){this.__data__=[]},Zt.prototype.delete=function(t){var n=this.__data__;
return t=sn(n,t),!(0>t)&&(t==n.length-1?n.pop():fo.call(n,t,1),true)},Zt.prototype.get=function(t){var n=this.__data__;return t=sn(n,t),0>t?P:n[t][1]},Zt.prototype.has=function(t){return-1<sn(this.__data__,t)},Zt.prototype.set=function(t,n){var r=this.__data__,e=sn(r,t);return 0>e?r.push([t,n]):r[e][1]=n,this},qt.prototype.clear=function(){this.__data__={hash:new Ft,map:new(Eo||Zt),string:new Ft}},qt.prototype.delete=function(t){return ce(this,t).delete(t)},qt.prototype.get=function(t){return ce(this,t).get(t);
},qt.prototype.has=function(t){return ce(this,t).has(t)},qt.prototype.set=function(t,n){return ce(this,t).set(t,n),this},Kt.prototype.add=Kt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Kt.prototype.has=function(t){return this.__data__.has(t)},Gt.prototype.clear=function(){this.__data__=new Zt},Gt.prototype.delete=function(t){return this.__data__.delete(t)},Gt.prototype.get=function(t){return this.__data__.get(t)},Gt.prototype.has=function(t){return this.__data__.has(t);
},Gt.prototype.set=function(t,n){var r=this.__data__;if(r instanceof Zt){if(r=r.__data__,!Eo||199>r.length)return r.push([t,n]),this;r=this.__data__=new qt(r)}return r.set(t,n),this};var Po=Mr(En),Zo=Mr(On,true),qo=zr(),Vo=zr(true),Ko=Bo?function(t,n){return Bo.set(t,n),t}:Ou,Go=ao||function(t){return Vt.clearTimeout(t)},Jo=So&&1/D(new So([,-0]))[1]==Z?function(t){return new So(t)}:Ru,Yo=Bo?function(t){return Bo.get(t)}:Ru,Ho=_o?M(_o,Tu):Bu,Qo=_o?function(t){for(var n=[];t;)s(n,Ho(t)),t=eo(t);return n;
}:Bu;(ko&&"[object DataView]"!=St(new ko(new ArrayBuffer(1)))||Eo&&"[object Map]"!=St(new Eo)||Oo&&"[object Promise]"!=St(Oo.resolve())||So&&"[object Set]"!=St(new So)||Io&&"[object WeakMap]"!=St(new Io))&&(St=function(t){var n=Hu.call(t);if(t=(t="[object Object]"==n?t.constructor:P)?ke(t):P)switch(t){case Uo:return"[object DataView]";case Mo:return"[object Map]";case zo:return"[object Promise]";case Do:return"[object Set]";case To:return"[object WeakMap]"}return n});var Xo=qu?nu:Lu,ti=function(){
var t=0,n=0;return function(r,e){var u=Ri(),o=16-(u-n);if(n=u,0<o){if(150<=++t)return r}else t=0;return Ko(r,e)}}(),ni=so||function(t,n){return Vt.setTimeout(t,n)},ri=Wo?function(t,n,r){n+="";var e;e=(e=n.match(pt))?e[1].split(_t):[],r=Ee(e,r),e=r.length;var u=e-1;return r[u]=(1<e?"& ":"")+r[u],r=r.join(2<e?", ":" "),n=n.replace(ht,"{\n/* [wrapped with "+r+"] */\n"),Wo(t,"toString",{configurable:true,enumerable:false,value:Eu(n)})}:Ou,ei=Ge(function(t){t=gu(t);var n=[];return ot.test(t)&&n.push(""),t.replace(it,function(t,r,e,u){
n.push(e?u.replace(gt,"$1"):r||t)}),n}),ui=ar(function(t,n){return Xe(t)?jn(t,kn(n,1,Xe,true)):[]}),oi=ar(function(t,n){var r=We(n);return Xe(r)&&(r=P),Xe(t)?jn(t,kn(n,1,Xe,true),fe(r,2)):[]}),ii=ar(function(t,n){var r=We(n);return Xe(r)&&(r=P),Xe(t)?jn(t,kn(n,1,Xe,true),P,r):[]}),fi=ar(function(t){var n=l(t,mr);return n.length&&n[0]===t[0]?Cn(n):[]}),ci=ar(function(t){var n=We(t),r=l(t,mr);return n===We(r)?n=P:r.pop(),r.length&&r[0]===t[0]?Cn(r,fe(n,2)):[]}),ai=ar(function(t){var n=We(t),r=l(t,mr);return n===We(r)?n=P:r.pop(),
r.length&&r[0]===t[0]?Cn(r,P,n):[]}),li=ar(Be),si=ar(function(t,n){n=kn(n,1);var r=t?t.length:0,e=_n(t,n);return ir(t,l(n,function(t){return ge(t,r)?+t:t}).sort(Sr)),e}),hi=ar(function(t){return yr(kn(t,1,Xe,true))}),pi=ar(function(t){var n=We(t);return Xe(n)&&(n=P),yr(kn(t,1,Xe,true),fe(n,2))}),_i=ar(function(t){var n=We(t);return Xe(n)&&(n=P),yr(kn(t,1,Xe,true),P,n)}),vi=ar(function(t,n){return Xe(t)?jn(t,n):[]}),gi=ar(function(t){return jr(f(t,Xe))}),di=ar(function(t){var n=We(t);return Xe(n)&&(n=P),
jr(f(t,Xe),fe(n,2))}),yi=ar(function(t){var n=We(t);return Xe(n)&&(n=P),jr(f(t,Xe),P,n)}),bi=ar(Ce),xi=ar(function(t){var n=t.length,n=1<n?t[n-1]:P,n=typeof n=="function"?(t.pop(),n):P;return Ue(t,n)}),ji=ar(function(t){function n(n){return _n(n,t)}t=kn(t,1);var r=t.length,e=r?t[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof $t&&ge(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:ze,args:[n],thisArg:P}),new Lt(u,this.__chain__).thru(function(t){return r&&!t.length&&t.push(P),
t})):this.thru(n)}),wi=Cr(function(t,n,r){Gu.call(t,r)?++t[r]:t[r]=1}),mi=Pr(Se),Ai=Pr(Ie),ki=Cr(function(t,n,r){Gu.call(t,r)?t[r].push(n):t[r]=[n]}),Ei=ar(function(t,n,e){var u=-1,o=typeof n=="function",i=ye(n),f=Qe(t)?Cu(t.length):[];return Po(t,function(t){var c=o?n:i&&null!=t?t[n]:P;f[++u]=c?r(c,t,e):Mn(t,n,e)}),f}),Oi=Cr(function(t,n,r){t[r]=n}),Si=Cr(function(t,n,r){t[r?0:1].push(n)},function(){return[[],[]]}),Ii=ar(function(t,n){if(null==t)return[];var r=n.length;return 1<r&&de(t,n[0],n[1])?n=[]:2<r&&de(n[0],n[1],n[2])&&(n=[n[0]]),
nr(t,kn(n,1),[])}),Ri=lo||function(){return Vt.Date.now()},Wi=ar(function(t,n,r){var e=1;if(r.length)var u=z(r,ie(Wi)),e=32|e;return re(t,e,n,r,u)}),Bi=ar(function(t,n,r){var e=3;if(r.length)var u=z(r,ie(Bi)),e=32|e;return re(n,e,t,r,u)}),Li=ar(function(t,n){return xn(t,1,n)}),Ci=ar(function(t,n,r){return xn(t,_u(n)||0,r)});Ge.Cache=qt;var Ui=ar(function(t,n){n=1==n.length&&Fi(n[0])?l(n[0],S(fe())):l(kn(n,1),S(fe()));var e=n.length;return ar(function(u){for(var o=-1,i=jo(u.length,e);++o<i;)u[o]=n[o].call(this,u[o]);
return r(t,this,u)})}),Mi=ar(function(t,n){var r=z(n,ie(Mi));return re(t,32,P,n,r)}),zi=ar(function(t,n){var r=z(n,ie(zi));return re(t,64,P,n,r)}),Di=ar(function(t,n){return re(t,256,P,P,P,kn(n,1))}),Ti=Qr(Wn),$i=Qr(function(t,n){return t>=n}),Fi=Cu.isArray,Ni=Ht?S(Ht):zn,Pi=vo||Lu,Zi=Qt?S(Qt):Dn,qi=Xt?S(Xt):$n,Vi=tn?S(tn):Pn,Ki=nn?S(nn):Zn,Gi=rn?S(rn):qn,Ji=Qr(Jn),Yi=Qr(function(t,n){return t<=n}),Hi=Ur(function(t,n){if(Lo||xe(n)||Qe(n))Br(n,bu(n),t);else for(var r in n)Gu.call(n,r)&&ln(t,r,n[r]);
}),Qi=Ur(function(t,n){Br(n,xu(n),t)}),Xi=Ur(function(t,n,r,e){Br(n,xu(n),t,e)}),tf=Ur(function(t,n,r,e){Br(n,bu(n),t,e)}),nf=ar(function(t,n){return _n(t,kn(n,1))}),rf=ar(function(t){return t.push(P,en),r(Xi,P,t)}),ef=ar(function(t){return t.push(P,we),r(af,P,t)}),uf=Vr(function(t,n,r){t[n]=r},Eu(Ou)),of=Vr(function(t,n,r){Gu.call(t,n)?t[n].push(r):t[n]=[r]},fe),ff=ar(Mn),cf=Ur(function(t,n,r){Xn(t,n,r)}),af=Ur(function(t,n,r,e){Xn(t,n,r,e)}),lf=ar(function(t,n){return null==t?{}:(n=l(kn(n,1),Ae),
rr(t,jn(Rn(t,xu,Qo),n)))}),sf=ar(function(t,n){return null==t?{}:rr(t,l(kn(n,1),Ae))}),hf=ne(bu),pf=ne(xu),_f=$r(function(t,n,r){return n=n.toLowerCase(),t+(r?mu(n):n)}),vf=$r(function(t,n,r){return t+(r?"-":"")+n.toLowerCase()}),gf=$r(function(t,n,r){return t+(r?" ":"")+n.toLowerCase()}),df=Tr("toLowerCase"),yf=$r(function(t,n,r){return t+(r?"_":"")+n.toLowerCase()}),bf=$r(function(t,n,r){return t+(r?" ":"")+jf(n)}),xf=$r(function(t,n,r){return t+(r?" ":"")+n.toUpperCase()}),jf=Tr("toUpperCase"),wf=ar(function(t,n){
try{return r(t,P,n)}catch(t){return tu(t)?t:new Mu(t)}}),mf=ar(function(t,n){return u(kn(n,1),function(n){n=Ae(n),t[n]=Wi(t[n],t)}),t}),Af=Zr(),kf=Zr(true),Ef=ar(function(t,n){return function(r){return Mn(r,t,n)}}),Of=ar(function(t,n){return function(r){return Mn(t,r,n)}}),Sf=Gr(l),If=Gr(i),Rf=Gr(_),Wf=Hr(),Bf=Hr(true),Lf=Kr(function(t,n){return t+n},0),Cf=te("ceil"),Uf=Kr(function(t,n){return t/n},1),Mf=te("floor"),zf=Kr(function(t,n){return t*n},1),Df=te("round"),Tf=Kr(function(t,n){return t-n},0);return It.after=function(t,n){
if(typeof n!="function")throw new Nu("Expected a function");return t=hu(t),function(){if(1>--t)return n.apply(this,arguments)}},It.ary=Pe,It.assign=Hi,It.assignIn=Qi,It.assignInWith=Xi,It.assignWith=tf,It.at=nf,It.before=Ze,It.bind=Wi,It.bindAll=mf,It.bindKey=Bi,It.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Fi(t)?t:[t]},It.chain=Me,It.chunk=function(t,n,r){if(n=(r?de(t,n,r):n===P)?1:xo(hu(n),0),r=t?t.length:0,!r||1>n)return[];for(var e=0,u=0,o=Cu(ho(r/n));e<r;)o[u++]=sr(t,e,e+=n);
return o},It.compact=function(t){for(var n=-1,r=t?t.length:0,e=0,u=[];++n<r;){var o=t[n];o&&(u[e++]=o)}return u},It.concat=function(){for(var t=arguments.length,n=Cu(t?t-1:0),r=arguments[0],e=t;e--;)n[e-1]=arguments[e];return t?s(Fi(r)?Wr(r):[r],kn(n,1)):[]},It.cond=function(t){var n=t?t.length:0,e=fe();return t=n?l(t,function(t){if("function"!=typeof t[1])throw new Nu("Expected a function");return[e(t[0]),t[1]]}):[],ar(function(e){for(var u=-1;++u<n;){var o=t[u];if(r(o[0],this,e))return r(o[1],this,e);
}})},It.conforms=function(t){return dn(gn(t,true))},It.constant=Eu,It.countBy=wi,It.create=function(t,n){var r=bn(t);return n?pn(r,n):r},It.curry=qe,It.curryRight=Ve,It.debounce=Ke,It.defaults=rf,It.defaultsDeep=ef,It.defer=Li,It.delay=Ci,It.difference=ui,It.differenceBy=oi,It.differenceWith=ii,It.drop=function(t,n,r){var e=t?t.length:0;return e?(n=r||n===P?1:hu(n),sr(t,0>n?0:n,e)):[]},It.dropRight=function(t,n,r){var e=t?t.length:0;return e?(n=r||n===P?1:hu(n),n=e-n,sr(t,0,0>n?0:n)):[]},It.dropRightWhile=function(t,n){
return t&&t.length?br(t,fe(n,3),true,true):[]},It.dropWhile=function(t,n){return t&&t.length?br(t,fe(n,3),true):[]},It.fill=function(t,n,r,e){var u=t?t.length:0;if(!u)return[];for(r&&typeof r!="number"&&de(t,n,r)&&(r=0,e=u),u=t.length,r=hu(r),0>r&&(r=-r>u?0:u+r),e=e===P||e>u?u:hu(e),0>e&&(e+=u),e=r>e?0:pu(e);r<e;)t[r++]=n;return t},It.filter=function(t,n){return(Fi(t)?f:An)(t,fe(n,3))},It.flatMap=function(t,n){return kn(Fe(t,n),1)},It.flatMapDeep=function(t,n){return kn(Fe(t,n),Z)},It.flatMapDepth=function(t,n,r){
return r=r===P?1:hu(r),kn(Fe(t,n),r)},It.flatten=function(t){return t&&t.length?kn(t,1):[]},It.flattenDeep=function(t){return t&&t.length?kn(t,Z):[]},It.flattenDepth=function(t,n){return t&&t.length?(n=n===P?1:hu(n),kn(t,n)):[]},It.flip=function(t){return re(t,512)},It.flow=Af,It.flowRight=kf,It.fromPairs=function(t){for(var n=-1,r=t?t.length:0,e={};++n<r;){var u=t[n];e[u[0]]=u[1]}return e},It.functions=function(t){return null==t?[]:Sn(t,bu(t))},It.functionsIn=function(t){return null==t?[]:Sn(t,xu(t));
},It.groupBy=ki,It.initial=function(t){return t&&t.length?sr(t,0,-1):[]},It.intersection=fi,It.intersectionBy=ci,It.intersectionWith=ai,It.invert=uf,It.invertBy=of,It.invokeMap=Ei,It.iteratee=Su,It.keyBy=Oi,It.keys=bu,It.keysIn=xu,It.map=Fe,It.mapKeys=function(t,n){var r={};return n=fe(n,3),En(t,function(t,e,u){r[n(t,e,u)]=t}),r},It.mapValues=function(t,n){var r={};return n=fe(n,3),En(t,function(t,e,u){r[e]=n(t,e,u)}),r},It.matches=function(t){return Hn(gn(t,true))},It.matchesProperty=function(t,n){
return Qn(t,gn(n,true))},It.memoize=Ge,It.merge=cf,It.mergeWith=af,It.method=Ef,It.methodOf=Of,It.mixin=Iu,It.negate=Je,It.nthArg=function(t){return t=hu(t),ar(function(n){return tr(n,t)})},It.omit=lf,It.omitBy=function(t,n){return ju(t,Je(fe(n)))},It.once=function(t){return Ze(2,t)},It.orderBy=function(t,n,r,e){return null==t?[]:(Fi(n)||(n=null==n?[]:[n]),r=e?P:r,Fi(r)||(r=null==r?[]:[r]),nr(t,n,r))},It.over=Sf,It.overArgs=Ui,It.overEvery=If,It.overSome=Rf,It.partial=Mi,It.partialRight=zi,It.partition=Si,
It.pick=sf,It.pickBy=ju,It.property=Wu,It.propertyOf=function(t){return function(n){return null==t?P:In(t,n)}},It.pull=li,It.pullAll=Be,It.pullAllBy=function(t,n,r){return t&&t.length&&n&&n.length?or(t,n,fe(r,2)):t},It.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?or(t,n,P,r):t},It.pullAt=si,It.range=Wf,It.rangeRight=Bf,It.rearg=Di,It.reject=function(t,n){return(Fi(t)?f:An)(t,Je(fe(n,3)))},It.remove=function(t,n){var r=[];if(!t||!t.length)return r;var e=-1,u=[],o=t.length;for(n=fe(n,3);++e<o;){
var i=t[e];n(i,e,t)&&(r.push(i),u.push(e))}return ir(t,u),r},It.rest=function(t,n){if(typeof t!="function")throw new Nu("Expected a function");return n=n===P?n:hu(n),ar(t,n)},It.reverse=Le,It.sampleSize=Ne,It.set=function(t,n,r){return null==t?t:lr(t,n,r)},It.setWith=function(t,n,r,e){return e=typeof e=="function"?e:P,null==t?t:lr(t,n,r,e)},It.shuffle=function(t){return Ne(t,4294967295)},It.slice=function(t,n,r){var e=t?t.length:0;return e?(r&&typeof r!="number"&&de(t,n,r)?(n=0,r=e):(n=null==n?0:hu(n),
r=r===P?e:hu(r)),sr(t,n,r)):[]},It.sortBy=Ii,It.sortedUniq=function(t){return t&&t.length?vr(t):[]},It.sortedUniqBy=function(t,n){return t&&t.length?vr(t,fe(n,2)):[]},It.split=function(t,n,r){return r&&typeof r!="number"&&de(t,n,r)&&(n=r=P),r=r===P?4294967295:r>>>0,r?(t=gu(t))&&(typeof n=="string"||null!=n&&!Vi(n))&&(n=dr(n),!n&&Ut.test(t))?kr(F(t),0,r):t.split(n,r):[]},It.spread=function(t,n){if(typeof t!="function")throw new Nu("Expected a function");return n=n===P?0:xo(hu(n),0),ar(function(e){
var u=e[n];return e=kr(e,0,n),u&&s(e,u),r(t,this,e)})},It.tail=function(t){var n=t?t.length:0;return n?sr(t,1,n):[]},It.take=function(t,n,r){return t&&t.length?(n=r||n===P?1:hu(n),sr(t,0,0>n?0:n)):[]},It.takeRight=function(t,n,r){var e=t?t.length:0;return e?(n=r||n===P?1:hu(n),n=e-n,sr(t,0>n?0:n,e)):[]},It.takeRightWhile=function(t,n){return t&&t.length?br(t,fe(n,3),false,true):[]},It.takeWhile=function(t,n){return t&&t.length?br(t,fe(n,3)):[]},It.tap=function(t,n){return n(t),t},It.throttle=function(t,n,r){
var e=true,u=true;if(typeof t!="function")throw new Nu("Expected a function");return uu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Ke(t,n,{leading:e,maxWait:n,trailing:u})},It.thru=ze,It.toArray=lu,It.toPairs=hf,It.toPairsIn=pf,It.toPath=function(t){return Fi(t)?l(t,Ae):au(t)?[t]:Wr(ei(t))},It.toPlainObject=vu,It.transform=function(t,n,r){var e=Fi(t)||Gi(t);if(n=fe(n,4),null==r)if(e||uu(t)){var o=t.constructor;r=e?Fi(t)?new o:[]:nu(o)?bn(eo(t)):{}}else r={};return(e?u:En)(t,function(t,e,u){
return n(r,t,e,u)}),r},It.unary=function(t){return Pe(t,1)},It.union=hi,It.unionBy=pi,It.unionWith=_i,It.uniq=function(t){return t&&t.length?yr(t):[]},It.uniqBy=function(t,n){return t&&t.length?yr(t,fe(n,2)):[]},It.uniqWith=function(t,n){return t&&t.length?yr(t,P,n):[]},It.unset=function(t,n){var r;if(null==t)r=true;else{r=t;var e=n,e=ye(e,r)?[e]:Ar(e);r=me(r,e),e=Ae(We(e)),r=!(null!=r&&Gu.call(r,e))||delete r[e]}return r},It.unzip=Ce,It.unzipWith=Ue,It.update=function(t,n,r){return null==t?t:lr(t,n,(typeof r=="function"?r:Ou)(In(t,n)),void 0);
},It.updateWith=function(t,n,r,e){return e=typeof e=="function"?e:P,null!=t&&(t=lr(t,n,(typeof r=="function"?r:Ou)(In(t,n)),e)),t},It.values=wu,It.valuesIn=function(t){return null==t?[]:I(t,xu(t))},It.without=vi,It.words=ku,It.wrap=function(t,n){return n=null==n?Ou:n,Mi(n,t)},It.xor=gi,It.xorBy=di,It.xorWith=yi,It.zip=bi,It.zipObject=function(t,n){return wr(t||[],n||[],ln)},It.zipObjectDeep=function(t,n){return wr(t||[],n||[],lr)},It.zipWith=xi,It.entries=hf,It.entriesIn=pf,It.extend=Qi,It.extendWith=Xi,
Iu(It,It),It.add=Lf,It.attempt=wf,It.camelCase=_f,It.capitalize=mu,It.ceil=Cf,It.clamp=function(t,n,r){return r===P&&(r=n,n=P),r!==P&&(r=_u(r),r=r===r?r:0),n!==P&&(n=_u(n),n=n===n?n:0),vn(_u(t),n,r)},It.clone=function(t){return gn(t,false,true)},It.cloneDeep=function(t){return gn(t,true,true)},It.cloneDeepWith=function(t,n){return gn(t,true,true,n)},It.cloneWith=function(t,n){return gn(t,false,true,n)},It.conformsTo=function(t,n){return null==n||yn(t,n,bu(n))},It.deburr=Au,It.defaultTo=function(t,n){return null==t||t!==t?n:t;
},It.divide=Uf,It.endsWith=function(t,n,r){t=gu(t),n=dr(n);var e=t.length,e=r=r===P?e:vn(hu(r),0,e);return r-=n.length,0<=r&&t.slice(r,e)==n},It.eq=Ye,It.escape=function(t){return(t=gu(t))&&X.test(t)?t.replace(H,on):t},It.escapeRegExp=function(t){return(t=gu(t))&&ct.test(t)?t.replace(ft,"\\$&"):t},It.every=function(t,n,r){var e=Fi(t)?i:wn;return r&&de(t,n,r)&&(n=P),e(t,fe(n,3))},It.find=mi,It.findIndex=Se,It.findKey=function(t,n){return v(t,fe(n,3),En)},It.findLast=Ai,It.findLastIndex=Ie,It.findLastKey=function(t,n){
return v(t,fe(n,3),On)},It.floor=Mf,It.forEach=Te,It.forEachRight=$e,It.forIn=function(t,n){return null==t?t:qo(t,fe(n,3),xu)},It.forInRight=function(t,n){return null==t?t:Vo(t,fe(n,3),xu)},It.forOwn=function(t,n){return t&&En(t,fe(n,3))},It.forOwnRight=function(t,n){return t&&On(t,fe(n,3))},It.get=du,It.gt=Ti,It.gte=$i,It.has=function(t,n){return null!=t&&se(t,n,Bn)},It.hasIn=yu,It.head=Re,It.identity=Ou,It.includes=function(t,n,r,e){return t=Qe(t)?t:wu(t),r=r&&!e?hu(r):0,e=t.length,0>r&&(r=xo(e+r,0)),
cu(t)?r<=e&&-1<t.indexOf(n,r):!!e&&-1<d(t,n,r)},It.indexOf=function(t,n,r){var e=t?t.length:0;return e?(r=null==r?0:hu(r),0>r&&(r=xo(e+r,0)),d(t,n,r)):-1},It.inRange=function(t,n,r){return n=su(n),r===P?(r=n,n=0):r=su(r),t=_u(t),t>=jo(n,r)&&t<xo(n,r)},It.invoke=ff,It.isArguments=He,It.isArray=Fi,It.isArrayBuffer=Ni,It.isArrayLike=Qe,It.isArrayLikeObject=Xe,It.isBoolean=function(t){return true===t||false===t||ou(t)&&"[object Boolean]"==Hu.call(t)},It.isBuffer=Pi,It.isDate=Zi,It.isElement=function(t){return!!t&&1===t.nodeType&&ou(t)&&!fu(t);
},It.isEmpty=function(t){if(Qe(t)&&(Fi(t)||typeof t=="string"||typeof t.splice=="function"||Pi(t)||He(t)))return!t.length;var n=St(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;if(Lo||xe(t))return!bo(t).length;for(var r in t)if(Gu.call(t,r))return false;return true},It.isEqual=function(t,n){return Tn(t,n)},It.isEqualWith=function(t,n,r){var e=(r=typeof r=="function"?r:P)?r(t,n):P;return e===P?Tn(t,n,r):!!e},It.isError=tu,It.isFinite=function(t){return typeof t=="number"&&go(t)},It.isFunction=nu,
It.isInteger=ru,It.isLength=eu,It.isMap=qi,It.isMatch=function(t,n){return t===n||Fn(t,n,ae(n))},It.isMatchWith=function(t,n,r){return r=typeof r=="function"?r:P,Fn(t,n,ae(n),r)},It.isNaN=function(t){return iu(t)&&t!=+t},It.isNative=function(t){if(Xo(t))throw new Mu("This method is not supported with core-js. Try https://github.com/es-shims.");return Nn(t)},It.isNil=function(t){return null==t},It.isNull=function(t){return null===t},It.isNumber=iu,It.isObject=uu,It.isObjectLike=ou,It.isPlainObject=fu,
It.isRegExp=Vi,It.isSafeInteger=function(t){return ru(t)&&-9007199254740991<=t&&9007199254740991>=t},It.isSet=Ki,It.isString=cu,It.isSymbol=au,It.isTypedArray=Gi,It.isUndefined=function(t){return t===P},It.isWeakMap=function(t){return ou(t)&&"[object WeakMap]"==St(t)},It.isWeakSet=function(t){return ou(t)&&"[object WeakSet]"==Hu.call(t)},It.join=function(t,n){return t?yo.call(t,n):""},It.kebabCase=vf,It.last=We,It.lastIndexOf=function(t,n,r){var e=t?t.length:0;if(!e)return-1;var u=e;if(r!==P&&(u=hu(r),
u=(0>u?xo(e+u,0):jo(u,e-1))+1),n!==n)return g(t,b,u-1,true);for(;u--;)if(t[u]===n)return u;return-1},It.lowerCase=gf,It.lowerFirst=df,It.lt=Ji,It.lte=Yi,It.max=function(t){return t&&t.length?mn(t,Ou,Wn):P},It.maxBy=function(t,n){return t&&t.length?mn(t,fe(n,2),Wn):P},It.mean=function(t){return x(t,Ou)},It.meanBy=function(t,n){return x(t,fe(n,2))},It.min=function(t){return t&&t.length?mn(t,Ou,Jn):P},It.minBy=function(t,n){return t&&t.length?mn(t,fe(n,2),Jn):P},It.stubArray=Bu,It.stubFalse=Lu,It.stubObject=function(){
return{}},It.stubString=function(){return""},It.stubTrue=function(){return true},It.multiply=zf,It.nth=function(t,n){return t&&t.length?tr(t,hu(n)):P},It.noConflict=function(){return Vt._===this&&(Vt._=Qu),this},It.noop=Ru,It.now=Ri,It.pad=function(t,n,r){t=gu(t);var e=(n=hu(n))?$(t):0;return!n||e>=n?t:(n=(n-e)/2,Jr(po(n),r)+t+Jr(ho(n),r))},It.padEnd=function(t,n,r){t=gu(t);var e=(n=hu(n))?$(t):0;return n&&e<n?t+Jr(n-e,r):t},It.padStart=function(t,n,r){t=gu(t);var e=(n=hu(n))?$(t):0;return n&&e<n?Jr(n-e,r)+t:t;
},It.parseInt=function(t,n,r){return r||null==n?n=0:n&&(n=+n),t=gu(t).replace(at,""),wo(t,n||(bt.test(t)?16:10))},It.random=function(t,n,r){if(r&&typeof r!="boolean"&&de(t,n,r)&&(n=r=P),r===P&&(typeof n=="boolean"?(r=n,n=P):typeof t=="boolean"&&(r=t,t=P)),t===P&&n===P?(t=0,n=1):(t=su(t),n===P?(n=t,t=0):n=su(n)),t>n){var e=t;t=n,n=e}return r||t%1||n%1?(r=mo(),jo(t+r*(n-t+Nt("1e-"+((r+"").length-1))),n)):fr(t,n)},It.reduce=function(t,n,r){var e=Fi(t)?h:m,u=3>arguments.length;return e(t,fe(n,4),r,u,Po);
},It.reduceRight=function(t,n,r){var e=Fi(t)?p:m,u=3>arguments.length;return e(t,fe(n,4),r,u,Zo)},It.repeat=function(t,n,r){return n=(r?de(t,n,r):n===P)?1:hu(n),cr(gu(t),n)},It.replace=function(){var t=arguments,n=gu(t[0]);return 3>t.length?n:n.replace(t[1],t[2])},It.result=function(t,n,r){n=ye(n,t)?[n]:Ar(n);var e=-1,u=n.length;for(u||(t=P,u=1);++e<u;){var o=null==t?P:t[Ae(n[e])];o===P&&(e=u,o=r),t=nu(o)?o.call(t):o}return t},It.round=Df,It.runInContext=N,It.sample=function(t){t=Qe(t)?t:wu(t);var n=t.length;
return 0<n?t[fr(0,n-1)]:P},It.size=function(t){if(null==t)return 0;if(Qe(t))return cu(t)?$(t):t.length;var n=St(t);return"[object Map]"==n||"[object Set]"==n?t.size:Kn(t).length},It.snakeCase=yf,It.some=function(t,n,r){var e=Fi(t)?_:hr;return r&&de(t,n,r)&&(n=P),e(t,fe(n,3))},It.sortedIndex=function(t,n){return pr(t,n)},It.sortedIndexBy=function(t,n,r){return _r(t,n,fe(r,2))},It.sortedIndexOf=function(t,n){var r=t?t.length:0;if(r){var e=pr(t,n);if(e<r&&Ye(t[e],n))return e}return-1},It.sortedLastIndex=function(t,n){
return pr(t,n,true)},It.sortedLastIndexBy=function(t,n,r){return _r(t,n,fe(r,2),true)},It.sortedLastIndexOf=function(t,n){if(t&&t.length){var r=pr(t,n,true)-1;if(Ye(t[r],n))return r}return-1},It.startCase=bf,It.startsWith=function(t,n,r){return t=gu(t),r=vn(hu(r),0,t.length),n=dr(n),t.slice(r,r+n.length)==n},It.subtract=Tf,It.sum=function(t){return t&&t.length?k(t,Ou):0},It.sumBy=function(t,n){return t&&t.length?k(t,fe(n,2)):0},It.template=function(t,n,r){var e=It.templateSettings;r&&de(t,n,r)&&(n=P),t=gu(t),
n=Xi({},n,e,en),r=Xi({},n.imports,e.imports,en);var u,o,i=bu(r),f=I(r,i),c=0;r=n.interpolate||Et;var a="__p+='";r=$u((n.escape||Et).source+"|"+r.source+"|"+(r===rt?dt:Et).source+"|"+(n.evaluate||Et).source+"|$","g");var l="sourceURL"in n?"//# sourceURL="+n.sourceURL+"\n":"";if(t.replace(r,function(n,r,e,i,f,l){return e||(e=i),a+=t.slice(c,l).replace(Ot,L),r&&(u=true,a+="'+__e("+r+")+'"),f&&(o=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+n.length,n}),a+="';",(n=n.variable)||(a="with(obj){"+a+"}"),
a=(o?a.replace(K,""):a).replace(G,"$1").replace(J,"$1;"),a="function("+(n||"obj")+"){"+(n?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",n=wf(function(){return zu(i,l+"return "+a).apply(P,f)}),n.source=a,tu(n))throw n;return n},It.times=function(t,n){if(t=hu(t),1>t||9007199254740991<t)return[];var r=4294967295,e=jo(t,4294967295);for(n=fe(n),t-=4294967295,e=E(e,n);++r<t;)n(r);return e},It.toFinite=su,
It.toInteger=hu,It.toLength=pu,It.toLower=function(t){return gu(t).toLowerCase()},It.toNumber=_u,It.toSafeInteger=function(t){return vn(hu(t),-9007199254740991,9007199254740991)},It.toString=gu,It.toUpper=function(t){return gu(t).toUpperCase()},It.trim=function(t,n,r){return(t=gu(t))&&(r||n===P)?t.replace(at,""):t&&(n=dr(n))?(t=F(t),r=F(n),n=W(t,r),r=B(t,r)+1,kr(t,n,r).join("")):t},It.trimEnd=function(t,n,r){return(t=gu(t))&&(r||n===P)?t.replace(st,""):t&&(n=dr(n))?(t=F(t),n=B(t,F(n))+1,kr(t,0,n).join("")):t;
},It.trimStart=function(t,n,r){return(t=gu(t))&&(r||n===P)?t.replace(lt,""):t&&(n=dr(n))?(t=F(t),n=W(t,F(n)),kr(t,n).join("")):t},It.truncate=function(t,n){var r=30,e="...";if(uu(n))var u="separator"in n?n.separator:u,r="length"in n?hu(n.length):r,e="omission"in n?dr(n.omission):e;t=gu(t);var o=t.length;if(Ut.test(t))var i=F(t),o=i.length;if(r>=o)return t;if(o=r-$(e),1>o)return e;if(r=i?kr(i,0,o).join(""):t.slice(0,o),u===P)return r+e;if(i&&(o+=r.length-o),Vi(u)){if(t.slice(o).search(u)){var f=r;for(u.global||(u=$u(u.source,gu(yt.exec(u))+"g")),
u.lastIndex=0;i=u.exec(f);)var c=i.index;r=r.slice(0,c===P?o:c)}}else t.indexOf(dr(u),o)!=o&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},It.unescape=function(t){return(t=gu(t))&&Q.test(t)?t.replace(Y,fn):t},It.uniqueId=function(t){var n=++Ju;return gu(t)+n},It.upperCase=xf,It.upperFirst=jf,It.each=Te,It.eachRight=$e,It.first=Re,Iu(It,function(){var t={};return En(It,function(n,r){Gu.call(It.prototype,r)||(t[r]=n)}),t}(),{chain:false}),It.VERSION="4.15.0",u("bind bindKey curry curryRight partial partialRight".split(" "),function(t){
It[t].placeholder=It}),u(["drop","take"],function(t,n){$t.prototype[t]=function(r){var e=this.__filtered__;if(e&&!n)return new $t(this);r=r===P?1:xo(hu(r),0);var u=this.clone();return e?u.__takeCount__=jo(r,u.__takeCount__):u.__views__.push({size:jo(r,4294967295),type:t+(0>u.__dir__?"Right":"")}),u},$t.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}}),u(["filter","map","takeWhile"],function(t,n){var r=n+1,e=1==r||3==r;$t.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({
iteratee:fe(t,3),type:r}),n.__filtered__=n.__filtered__||e,n}}),u(["head","last"],function(t,n){var r="take"+(n?"Right":"");$t.prototype[t]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(t,n){var r="drop"+(n?"":"Right");$t.prototype[t]=function(){return this.__filtered__?new $t(this):this[r](1)}}),$t.prototype.compact=function(){return this.filter(Ou)},$t.prototype.find=function(t){return this.filter(t).head()},$t.prototype.findLast=function(t){return this.reverse().find(t);
},$t.prototype.invokeMap=ar(function(t,n){return typeof t=="function"?new $t(this):this.map(function(r){return Mn(r,t,n)})}),$t.prototype.reject=function(t){return this.filter(Je(fe(t)))},$t.prototype.slice=function(t,n){t=hu(t);var r=this;return r.__filtered__&&(0<t||0>n)?new $t(r):(0>t?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==P&&(n=hu(n),r=0>n?r.dropRight(-n):r.take(n-t)),r)},$t.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},$t.prototype.toArray=function(){return this.take(4294967295);
},En($t.prototype,function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),e=/^(?:head|last)$/.test(n),u=It[e?"take"+("last"==n?"Right":""):n],o=e||/^find/.test(n);u&&(It.prototype[n]=function(){function n(t){return t=u.apply(It,s([t],f)),e&&h?t[0]:t}var i=this.__wrapped__,f=e?[1]:arguments,c=i instanceof $t,a=f[0],l=c||Fi(i);l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=o&&!h,c=c&&!p;return!o&&l?(i=c?i:new $t(this),i=t.apply(i,f),i.__actions__.push({
func:ze,args:[n],thisArg:P}),new Lt(i,h)):a&&c?t.apply(this,f):(i=this.thru(n),a?e?i.value()[0]:i.value():i)})}),u("pop push shift sort splice unshift".split(" "),function(t){var n=Pu[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",e=/^(?:pop|shift)$/.test(t);It.prototype[t]=function(){var t=arguments;if(e&&!this.__chain__){var u=this.value();return n.apply(Fi(u)?u:[],t)}return this[r](function(r){return n.apply(Fi(r)?r:[],t)})}}),En($t.prototype,function(t,n){var r=It[n];if(r){var e=r.name+"";
(Co[e]||(Co[e]=[])).push({name:n,func:r})}}),Co[qr(P,2).name]=[{name:"wrapper",func:P}],$t.prototype.clone=function(){var t=new $t(this.__wrapped__);return t.__actions__=Wr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wr(this.__views__),t},$t.prototype.reverse=function(){if(this.__filtered__){var t=new $t(this);t.__dir__=-1,t.__filtered__=true}else t=this.clone(),t.__dir__*=-1;return t;
},$t.prototype.value=function(){var t,n=this.__wrapped__.value(),r=this.__dir__,e=Fi(n),u=0>r,o=e?n.length:0;t=o;for(var i=this.__views__,f=0,c=-1,a=i.length;++c<a;){var l=i[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":t-=s;break;case"take":t=jo(t,f+s);break;case"takeRight":f=xo(f,t-s)}}if(t={start:f,end:t},i=t.start,f=t.end,t=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,c=0,a=jo(t,this.__takeCount__),!e||200>o||o==t&&a==t)return xr(n,this.__actions__);e=[];t:for(;t--&&c<a;){
for(u+=r,o=-1,l=n[u];++o<f;){var h=i[o],s=h.type,h=(0,h.iteratee)(l);if(2==s)l=h;else if(!h){if(1==s)continue t;break t}}e[c++]=l}return e},It.prototype.at=ji,It.prototype.chain=function(){return Me(this)},It.prototype.commit=function(){return new Lt(this.value(),this.__chain__)},It.prototype.next=function(){this.__values__===P&&(this.__values__=lu(this.value()));var t=this.__index__>=this.__values__.length,n=t?P:this.__values__[this.__index__++];return{done:t,value:n}},It.prototype.plant=function(t){
for(var n,r=this;r instanceof Rt;){var e=Oe(r);e.__index__=0,e.__values__=P,n?u.__wrapped__=e:n=e;var u=e,r=r.__wrapped__}return u.__wrapped__=t,n},It.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof $t?(this.__actions__.length&&(t=new $t(this)),t=t.reverse(),t.__actions__.push({func:ze,args:[Le],thisArg:P}),new Lt(t,this.__chain__)):this.thru(Le)},It.prototype.toJSON=It.prototype.valueOf=It.prototype.value=function(){return xr(this.__wrapped__,this.__actions__)},It.prototype.first=It.prototype.head,
uo&&(It.prototype[uo]=De),It}var P,Z=1/0,q=NaN,V=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],K=/\b__p\+='';/g,G=/\b(__p\+=)''\+/g,J=/(__e\(.*?\)|\b__t\))\+'';/g,Y=/&(?:amp|lt|gt|quot|#39|#96);/g,H=/[&<>"'`]/g,Q=RegExp(Y.source),X=RegExp(H.source),tt=/<%-([\s\S]+?)%>/g,nt=/<%([\s\S]+?)%>/g,rt=/<%=([\s\S]+?)%>/g,et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ut=/^\w*$/,ot=/^\./,it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/[\\^$.*+?()[\]{}|]/g,ct=RegExp(ft.source),at=/^\s+|\s+$/g,lt=/^\s+/,st=/\s+$/,ht=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,pt=/\{\n\/\* \[wrapped with (.+)\] \*/,_t=/,? & /,vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,gt=/\\(\\)?/g,dt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,yt=/\w*$/,bt=/^0x/i,xt=/^[-+]0x[0-9a-f]+$/i,jt=/^0b[01]+$/i,wt=/^\[object .+?Constructor\]$/,mt=/^0o[0-7]+$/i,At=/^(?:0|[1-9]\d*)$/,kt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Et=/($^)/,Ot=/['\n\r\u2028\u2029\\]/g,St="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",It="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+St,Rt="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",Wt=RegExp("['\u2019]","g"),Bt=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),Lt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Rt+St,"g"),Ct=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+",It].join("|"),"g"),Ut=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Mt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,zt="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Dt={};
Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=true,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=false;
var Tt={};Tt["[object Arguments]"]=Tt["[object Array]"]=Tt["[object ArrayBuffer]"]=Tt["[object DataView]"]=Tt["[object Boolean]"]=Tt["[object Date]"]=Tt["[object Float32Array]"]=Tt["[object Float64Array]"]=Tt["[object Int8Array]"]=Tt["[object Int16Array]"]=Tt["[object Int32Array]"]=Tt["[object Map]"]=Tt["[object Number]"]=Tt["[object Object]"]=Tt["[object RegExp]"]=Tt["[object Set]"]=Tt["[object String]"]=Tt["[object Symbol]"]=Tt["[object Uint8Array]"]=Tt["[object Uint8ClampedArray]"]=Tt["[object Uint16Array]"]=Tt["[object Uint32Array]"]=true,
Tt["[object Error]"]=Tt["[object Function]"]=Tt["[object WeakMap]"]=false;var $t,Ft={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Nt=parseFloat,Pt=parseInt,Zt=typeof global=="object"&&global&&global.Object===Object&&global,qt=typeof self=="object"&&self&&self.Object===Object&&self,Vt=Zt||qt||Function("return this")(),Kt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gt=Kt&&typeof module=="object"&&module&&!module.nodeType&&module,Jt=Gt&&Gt.exports===Kt,Yt=Jt&&Zt.g;
t:{try{$t=Yt&&Yt.f("util");break t}catch(t){}$t=void 0}var Ht=$t&&$t.isArrayBuffer,Qt=$t&&$t.isDate,Xt=$t&&$t.isMap,tn=$t&&$t.isRegExp,nn=$t&&$t.isSet,rn=$t&&$t.isTypedArray,en=j("length"),un=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I",
"\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C",
"\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i",
"\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S",
"\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n",
"\u017f":"ss"}),on=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}),fn=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"}),cn=N();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Vt._=cn, define(function(){return cn})):Gt?((Gt.exports=cn)._=cn,Kt._=cn):Vt._=cn}).call(this);

function X2JS(v){var q="1.1.5";v=v||{};h();r();function h(){if(v.escapeMode===undefined){v.escapeMode=true;}v.attributePrefix=v.attributePrefix||"_";v.arrayAccessForm=v.arrayAccessForm||"none";v.emptyNodeForm=v.emptyNodeForm||"text";if(v.enableToStringFunc===undefined){v.enableToStringFunc=true;}v.arrayAccessFormPaths=v.arrayAccessFormPaths||[];if(v.skipEmptyTextNodesForObj===undefined){v.skipEmptyTextNodesForObj=true;}if(v.stripWhitespaces===undefined){v.stripWhitespaces=true;}v.datetimeAccessFormPaths=v.datetimeAccessFormPaths||[];}var g={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function r(){function x(z){var y=String(z);if(y.length===1){y="0"+y;}return y;}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|^\n+|(\s|\n)+$/g,"");};}if(typeof Date.prototype.toISOString!=="function"){Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+x(this.getUTCMonth()+1)+"-"+x(this.getUTCDate())+"T"+x(this.getUTCHours())+":"+x(this.getUTCMinutes())+":"+x(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1000).toFixed(3)).slice(2,5)+"Z";};}}function t(x){var y=x.localName;if(y==null){y=x.baseName;}if(y==null||y==""){y=x.nodeName;}return y;}function o(x){return x.prefix;}function p(x){if(typeof(x)=="string"){return x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;");}else{return x;}}function j(x){return x.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#x2F;/g,"/");}function l(B,y,A){switch(v.arrayAccessForm){case"property":if(!(B[y] instanceof Array)){B[y+"_asArray"]=[B[y]];}else{B[y+"_asArray"]=B[y];}break;}if(!(B[y] instanceof Array)&&v.arrayAccessFormPaths.length>0){var x=0;for(;x<v.arrayAccessFormPaths.length;x++){var z=v.arrayAccessFormPaths[x];if(typeof z==="string"){if(z==A){break;}}else{if(z instanceof RegExp){if(z.test(A)){break;}}else{if(typeof z==="function"){if(z(B,y,A)){break;}}}}}if(x!=v.arrayAccessFormPaths.length){B[y]=[B[y]];}}}function a(C){var A=C.split(/[-T:+Z]/g);var B=new Date(A[0],A[1]-1,A[2]);var z=A[5].split(".");B.setHours(A[3],A[4],z[0]);if(z.length>1){B.setMilliseconds(z[1]);}if(A[6]&&A[7]){var y=A[6]*60+Number(A[7]);var x=/\d\d-\d\d:\d\d$/.test(C)?"-":"+";y=0+(x=="-"?-1*y:y);B.setMinutes(B.getMinutes()-y-B.getTimezoneOffset());}else{if(C.indexOf("Z",C.length-1)!==-1){B=new Date(Date.UTC(B.getFullYear(),B.getMonth(),B.getDate(),B.getHours(),B.getMinutes(),B.getSeconds(),B.getMilliseconds()));}}return B;}function n(A,y,z){if(v.datetimeAccessFormPaths.length>0){var B=z.split(".#")[0];var x=0;for(;x<v.datetimeAccessFormPaths.length;x++){var C=v.datetimeAccessFormPaths[x];if(typeof C==="string"){if(C==B){break;}}else{if(C instanceof RegExp){if(C.test(B)){break;}}else{if(typeof C==="function"){if(C(obj,y,B)){break;}}}}}if(x!=v.datetimeAccessFormPaths.length){return a(A);}else{return A;}}else{return A;}}function w(z,E){if(z.nodeType==g.DOCUMENT_NODE){var F=new Object;var x=z.childNodes;for(var G=0;G<x.length;G++){var y=x.item(G);if(y.nodeType==g.ELEMENT_NODE){var D=t(y);F[D]=w(y,D);}}return F;}else{if(z.nodeType==g.ELEMENT_NODE){var F=new Object;F.__cnt=0;var x=z.childNodes;for(var G=0;G<x.length;G++){var y=x.item(G);var D=t(y);if(y.nodeType!=g.COMMENT_NODE){F.__cnt++;if(F[D]==null){F[D]=w(y,E+"."+D);l(F,D,E+"."+D);}else{if(F[D]!=null){if(!(F[D] instanceof Array)){F[D]=[F[D]];l(F,D,E+"."+D);}}(F[D])[F[D].length]=w(y,E+"."+D);}}}for(var A=0;A<z.attributes.length;A++){var B=z.attributes.item(A);F.__cnt++;F[v.attributePrefix+B.name]=B.value;}var C=o(z);if(C!=null&&C!=""){F.__cnt++;F.__prefix=C;}if(F["#text"]!=null){F.__text=F["#text"];if(F.__text instanceof Array){F.__text=F.__text.join("\n");}if(v.escapeMode){F.__text=j(F.__text);}if(v.stripWhitespaces){F.__text=F.__text.trim();}delete F["#text"];if(v.arrayAccessForm=="property"){delete F["#text_asArray"];}F.__text=n(F.__text,D,E+"."+D);}if(F["#cdata-section"]!=null){F.__cdata=F["#cdata-section"];delete F["#cdata-section"];if(v.arrayAccessForm=="property"){delete F["#cdata-section_asArray"];}}if(F.__cnt==1&&F.__text!=null){F=F.__text;}else{if(F.__cnt==0&&v.emptyNodeForm=="text"){F="";}else{if(F.__cnt>1&&F.__text!=null&&v.skipEmptyTextNodesForObj){if((v.stripWhitespaces&&F.__text=="")||(F.__text.trim()=="")){delete F.__text;}}}}delete F.__cnt;if(v.enableToStringFunc&&(F.__text!=null||F.__cdata!=null)){F.toString=function(){return(this.__text!=null?this.__text:"")+(this.__cdata!=null?this.__cdata:"");};}return F;}else{if(z.nodeType==g.TEXT_NODE||z.nodeType==g.CDATA_SECTION_NODE){return z.nodeValue;}}}}function m(E,B,D,y){var A="<"+((E!=null&&E.__prefix!=null)?(E.__prefix+":"):"")+B;if(D!=null){for(var C=0;C<D.length;C++){var z=D[C];var x=E[z];if(v.escapeMode){x=p(x);}A+=" "+z.substr(v.attributePrefix.length)+"='"+x+"'";}}if(!y){A+=">";}else{A+="/>";}return A;}function i(y,x){return"</"+(y.__prefix!=null?(y.__prefix+":"):"")+x+">";}function s(y,x){return y.indexOf(x,y.length-x.length)!==-1;}function u(y,x){if((v.arrayAccessForm=="property"&&s(x.toString(),("_asArray")))||x.toString().indexOf(v.attributePrefix)==0||x.toString().indexOf("__")==0||(y[x] instanceof Function)){return true;}else{return false;}}function k(z){var y=0;if(z instanceof Object){for(var x in z){if(u(z,x)){continue;}y++;}}return y;}function b(z){var y=[];if(z instanceof Object){for(var x in z){if(x.toString().indexOf("__")==-1&&x.toString().indexOf(v.attributePrefix)==0){y.push(x);}}}return y;}function f(y){var x="";if(y.__cdata!=null){x+="<![CDATA["+y.__cdata+"]]>";}if(y.__text!=null){if(v.escapeMode){x+=p(y.__text);}else{x+=y.__text;}}return x;}function c(y){var x="";if(y instanceof Object){x+=f(y);}else{if(y!=null){if(v.escapeMode){x+=p(y);}else{x+=y;}}}return x;}function e(z,B,A){var x="";if(z.length==0){x+=m(z,B,A,true);}else{for(var y=0;y<z.length;y++){x+=m(z[y],B,b(z[y]),false);x+=d(z[y]);x+=i(z[y],B);}}return x;}function d(D){var x="";var B=k(D);if(B>0){for(var A in D){if(u(D,A)){continue;}var z=D[A];var C=b(z);if(z==null||z==undefined){x+=m(z,A,C,true);}else{if(z instanceof Object){if(z instanceof Array){x+=e(z,A,C);}else{if(z instanceof Date){x+=m(z,A,C,false);x+=z.toISOString();x+=i(z,A);}else{var y=k(z);if(y>0||z.__text!=null||z.__cdata!=null){x+=m(z,A,C,false);x+=d(z);x+=i(z,A);}else{x+=m(z,A,C,true);}}}}else{x+=m(z,A,C,false);x+=c(z);x+=i(z,A);}}}}x+=c(D);return x;}this.parseXmlString=function(z){var B=window.ActiveXObject||"ActiveXObject" in window;if(z===undefined){return null;}var A;if(window.DOMParser){var C=new window.DOMParser();var x=null;if(!B){try{x=C.parseFromString("INVALID","text/xml").childNodes[0].namespaceURI;}catch(y){x=null;}}try{A=C.parseFromString(z,"text/xml");if(x!=null&&A.getElementsByTagNameNS(x,"parsererror").length>0){A=null;}}catch(y){A=null;}}else{if(z.indexOf("<?")==0){z=z.substr(z.indexOf("?>")+2);}A=new ActiveXObject("Microsoft.XMLDOM");A.async="false";A.loadXML(z);}return A;};this.asArray=function(x){if(x instanceof Array){return x;}else{return[x];}};this.toXmlDateTime=function(x){if(x instanceof Date){return x.toISOString();}else{if(typeof(x)==="number"){return new Date(x).toISOString();}else{return null;}}};this.asDateTime=function(x){if(typeof(x)=="string"){return a(x);}else{return x;}};this.xml2json=function(x){return w(x);};this.xml_str2json=function(x){var y=this.parseXmlString(x);if(y!=null){return this.xml2json(y);}else{return null;}};this.json2xml_str=function(x){return d(x);};this.json2xml=function(y){var x=this.json2xml_str(y);return this.parseXmlString(x);};this.getVersion=function(){return q;};}

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.snabbdom=e()}}(function(){return function e(t,n,r){function o(f,l){if(!n[f]){if(!t[f]){var a="function"==typeof require&&require;if(!l&&a)return a(f,!0);if(i)return i(f,!0);var u=new Error("Cannot find module '"+f+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[f]={exports:{}};t[f][0].call(d.exports,function(e){var n=t[f][1][e];return o(n?n:e)},d,d.exports,e,t,n,r)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,t,n){function r(e){return document.createElement(e)}function o(e,t){return document.createElementNS(e,t)}function i(e){return document.createTextNode(e)}function f(e,t,n){e.insertBefore(t,n)}function l(e,t){e.removeChild(t)}function a(e,t){e.appendChild(t)}function u(e){return e.parentElement}function d(e){return e.nextSibling}function c(e){return e.tagName}function s(e,t){e.textContent=t}t.exports={createElement:r,createElementNS:o,createTextNode:i,appendChild:a,removeChild:l,insertBefore:f,parentNode:u,nextSibling:d,tagName:c,setTextContent:s}},{}],2:[function(e,t,n){t.exports={array:Array.isArray,primitive:function(e){return"string"==typeof e||"number"==typeof e}}},{}],3:[function(e,t,n){"use strict";function r(e){return void 0===e}function o(e){return void 0!==e}function i(e,t){return e.key===t.key&&e.sel===t.sel}function f(e,t,n){var r,i,f={};for(r=t;n>=r;++r)i=e[r].key,o(i)&&(f[i]=r);return f}function l(e,t){function n(e){return a(t.tagName(e).toLowerCase(),{},[],void 0,e)}function l(e,n){return function(){if(0===--n){var r=t.parentNode(e);t.removeChild(r,e)}}}function m(e,n){var r,i=e.data;o(i)&&o(r=i.hook)&&o(r=r.init)&&(r(e),i=e.data);var f,l=e.children,a=e.sel;if(o(a)){var d=a.indexOf("#"),s=a.indexOf(".",d),p=d>0?d:a.length,h=s>0?s:a.length,v=-1!==d||-1!==s?a.slice(0,Math.min(p,h)):a;if(f=e.elm=o(i)&&o(r=i.ns)?t.createElementNS(r,v):t.createElement(v),h>p&&(f.id=a.slice(p+1,h)),s>0&&(f.className=a.slice(h+1).replace(/\./g," ")),u.array(l))for(r=0;r<l.length;++r)t.appendChild(f,m(l[r],n));else u.primitive(e.text)&&t.appendChild(f,t.createTextNode(e.text));for(r=0;r<C.create.length;++r)C.create[r](c,e);r=e.data.hook,o(r)&&(r.create&&r.create(c,e),r.insert&&n.push(e))}else f=e.elm=t.createTextNode(e.text);return e.elm}function p(e,n,r,o,i,f){for(;i>=o;++o)t.insertBefore(e,m(r[o],f),n)}function h(e){var t,n,r=e.data;if(o(r)){for(o(t=r.hook)&&o(t=t.destroy)&&t(e),t=0;t<C.destroy.length;++t)C.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)h(e.children[n])}}function v(e,n,r,i){for(;i>=r;++r){var f,a,u,d=n[r];if(o(d))if(o(d.sel)){for(h(d),a=C.remove.length+1,u=l(d.elm,a),f=0;f<C.remove.length;++f)C.remove[f](d,u);o(f=d.data)&&o(f=f.hook)&&o(f=f.remove)?f(d,u):u()}else t.removeChild(e,d.elm)}}function x(e,n,o,l){for(var a,u,d,c,s=0,h=0,x=n.length-1,y=n[0],N=n[x],C=o.length-1,k=o[0],b=o[C];x>=s&&C>=h;)r(y)?y=n[++s]:r(N)?N=n[--x]:i(y,k)?(g(y,k,l),y=n[++s],k=o[++h]):i(N,b)?(g(N,b,l),N=n[--x],b=o[--C]):i(y,b)?(g(y,b,l),t.insertBefore(e,y.elm,t.nextSibling(N.elm)),y=n[++s],b=o[--C]):i(N,k)?(g(N,k,l),t.insertBefore(e,N.elm,y.elm),N=n[--x],k=o[++h]):(r(a)&&(a=f(n,s,x)),u=a[k.key],r(u)?(t.insertBefore(e,m(k,l),y.elm),k=o[++h]):(d=n[u],g(d,k,l),n[u]=void 0,t.insertBefore(e,d.elm,y.elm),k=o[++h]));s>x?(c=r(o[C+1])?null:o[C+1].elm,p(e,c,o,h,C,l)):h>C&&v(e,n,s,x)}function g(e,n,f){var l,a;o(l=n.data)&&o(a=l.hook)&&o(l=a.prepatch)&&l(e,n);var u=n.elm=e.elm,d=e.children,c=n.children;if(e!==n){if(!i(e,n)){var s=t.parentNode(e.elm);return u=m(n,f),t.insertBefore(s,u,e.elm),void v(s,[e],0,0)}if(o(n.data)){for(l=0;l<C.update.length;++l)C.update[l](e,n);l=n.data.hook,o(l)&&o(l=l.update)&&l(e,n)}r(n.text)?o(d)&&o(c)?d!==c&&x(u,d,c,f):o(c)?(o(e.text)&&t.setTextContent(u,""),p(u,null,c,0,c.length-1,f)):o(d)?v(u,d,0,d.length-1):o(e.text)&&t.setTextContent(u,""):e.text!==n.text&&t.setTextContent(u,n.text),o(a)&&o(l=a.postpatch)&&l(e,n)}}var y,N,C={};for(r(t)&&(t=d),y=0;y<s.length;++y)for(C[s[y]]=[],N=0;N<e.length;++N)void 0!==e[N][s[y]]&&C[s[y]].push(e[N][s[y]]);return function(e,o){var f,l,a,u=[];for(f=0;f<C.pre.length;++f)C.pre[f]();for(r(e.sel)&&(e=n(e)),i(e,o)?g(e,o,u):(l=e.elm,a=t.parentNode(l),m(o,u),null!==a&&(t.insertBefore(a,o.elm,t.nextSibling(l)),v(a,[e],0,0))),f=0;f<u.length;++f)u[f].data.hook.insert(u[f]);for(f=0;f<C.post.length;++f)C.post[f]();return o}}var a=e("./vnode"),u=e("./is"),d=e("./htmldomapi"),c=a("",{},[],void 0,void 0),s=["create","update","remove","destroy","pre","post"];t.exports={init:l}},{"./htmldomapi":1,"./is":2,"./vnode":4}],4:[function(e,t,n){t.exports=function(e,t,n,r,o){var i=void 0===t?void 0:t.key;return{sel:e,data:t,children:n,text:r,elm:o,key:i}}},{}]},{},[3])(3)});
//# sourceMappingURL=snabbdom.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.h=e()}}(function(){return function e(r,n,i){function o(f,u){if(!n[f]){if(!r[f]){var d="function"==typeof require&&require;if(!u&&d)return d(f,!0);if(t)return t(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var v=n[f]={exports:{}};r[f][0].call(v.exports,function(e){var n=r[f][1][e];return o(n?n:e)},v,v.exports,e,r,n,i)}return n[f].exports}for(var t="function"==typeof require&&require,f=0;f<i.length;f++)o(i[f]);return o}({1:[function(e,r,n){function i(e,r){if(e.ns="http://www.w3.org/2000/svg",void 0!==r)for(var n=0;n<r.length;++n)i(r[n].data,r[n].children)}var o=e("./vnode"),t=e("./is");r.exports=function(e,r,n){var f,u,d,a={};if(void 0!==n?(a=r,t.array(n)?f=n:t.primitive(n)&&(u=n)):void 0!==r&&(t.array(r)?f=r:t.primitive(r)?u=r:a=r),t.array(f))for(d=0;d<f.length;++d)t.primitive(f[d])&&(f[d]=o(void 0,void 0,void 0,f[d]));return"s"===e[0]&&"v"===e[1]&&"g"===e[2]&&i(a,f),o(e,a,f,u,void 0)}},{"./is":2,"./vnode":3}],2:[function(e,r,n){r.exports={array:Array.isArray,primitive:function(e){return"string"==typeof e||"number"==typeof e}}},{}],3:[function(e,r,n){r.exports=function(e,r,n,i,o){var t=void 0===r?void 0:r.key;return{sel:e,data:r,children:n,text:i,elm:o,key:t}}},{}]},{},[1])(1)});
//# sourceMappingURL=h.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.snabbdom_class=e()}}(function(){return function e(n,r,o){function t(i,u){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!u&&a)return a(i,!0);if(f)return f(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var s=r[i]={exports:{}};n[i][0].call(s.exports,function(e){var r=n[i][1][e];return t(r?r:e)},s,s.exports,e,n,r,o)}return r[i].exports}for(var f="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){function o(e,n){var r,o,t=n.elm,f=e.data["class"]||{},i=n.data["class"]||{};for(o in f)i[o]||t.classList.remove(o);for(o in i)r=i[o],r!==f[o]&&t.classList[r?"add":"remove"](o)}n.exports={create:o,update:o}},{}]},{},[1])(1)});
//# sourceMappingURL=snabbdom_class.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.snabbdom_props=e()}}(function(){return function e(n,r,o){function t(i,u){if(!r[i]){if(!n[i]){var d="function"==typeof require&&require;if(!u&&d)return d(i,!0);if(f)return f(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var a=r[i]={exports:{}};n[i][0].call(a.exports,function(e){var r=n[i][1][e];return t(r?r:e)},a,a.exports,e,n,r,o)}return r[i].exports}for(var f="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){function o(e,n){var r,o,t,f=n.elm,i=e.data.props||{},u=n.data.props||{};for(r in i)u[r]||delete f[r];for(r in u)o=u[r],t=i[r],t===o||"value"===r&&f[r]===o||(f[r]=o)}n.exports={create:o,update:o}},{}]},{},[1])(1)});
//# sourceMappingURL=snabbdom_props.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.snabbdom_style=e()}}(function(){return function e(n,t,o){function r(f,d){if(!t[f]){if(!n[f]){var u="function"==typeof require&&require;if(!d&&u)return u(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[f]={exports:{}};n[f][0].call(l.exports,function(e){var t=n[f][1][e];return r(t?t:e)},l,l.exports,e,n,t,o)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<o.length;f++)r(o[f]);return r}({1:[function(e,n,t){function o(e,n,t){u(function(){e[n]=t})}function r(e,n){var t,r,i=n.elm,f=e.data.style||{},d=n.data.style||{},u="delayed"in f;for(r in f)d[r]||(i.style[r]="");for(r in d)if(t=d[r],"delayed"===r)for(r in d.delayed)t=d.delayed[r],u&&t===f.delayed[r]||o(i.style,r,t);else"remove"!==r&&t!==f[r]&&(i.style[r]=t)}function i(e){var n,t,o=e.elm,r=e.data.style;if(r&&(n=r.destroy))for(t in n)o.style[t]=n[t]}function f(e,n){var t=e.data.style;if(!t||!t.remove)return void n();var o,r,i=e.elm,f=0,d=t.remove,u=0,a=[];for(o in d)a.push(o),i.style[o]=d[o];r=getComputedStyle(i);for(var l=r["transition-property"].split(", ");f<l.length;++f)-1!==a.indexOf(l[f])&&u++;i.addEventListener("transitionend",function(e){e.target===i&&--u,0===u&&n()})}var d="undefined"!=typeof window&&window.requestAnimationFrame||setTimeout,u=function(e){d(function(){d(e)})};n.exports={create:r,update:r,destroy:i,remove:f}},{}]},{},[1])(1)});
//# sourceMappingURL=snabbdom_style.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.snabbdom_attributes=e()}}(function(){return function e(t,r,n){function o(i,d){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!d&&f)return f(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){function n(e,t){var r,n,o,i=t.elm,d=e.data.attrs||{},f=t.data.attrs||{};for(r in f)n=f[r],o=d[r],o!==n&&(!n&&a[r]?i.removeAttribute(r):i.setAttribute(r,n));for(r in d)r in f||i.removeAttribute(r)}for(var o=["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","draggable","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","spellcheck","translate","truespeed","typemustmatch","visible"],a={},i=0,d=o.length;d>i;i++)a[o[i]]=!0;t.exports={create:n,update:n}},{}]},{},[1])(1)});
//# sourceMappingURL=snabbdom_attributes.min.js.map


/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));


!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));


// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}


// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


// Unique ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};

// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;
if ($) {
  Vel = $.Velocity;
} else if (jQuery) {
  Vel = jQuery.Velocity;
} else {
  Vel = Velocity;
}


    // Custom Easing
    jQuery.extend( jQuery.easing,
    {
      easeInOutMaterial: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return c/4*((t-=2)*t*t + 2) + b;
      }
    });



(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }
    });

  });
}( jQuery ));

(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        time_constant: 200, // ms
        dist: -100, // zoom scale TODO: make this more intuitive as an option
        shift: 0, // spacing for center image
        padding: 0, // Padding between non center items
        full_width: false, // Change to full width styles
        indicators: false, // Toggle indicators
        no_wrap: false // Don't wrap around and cycle through items.
      };
      options = $.extend(defaults, options);

      return this.each(function() {

        var images, offset, center, pressed, dim, count,
            reference, referenceY, amplitude, target, velocity,
            xform, frame, timestamp, ticker, dragged, vertical_dragged;
        var $indicators = $('<ul class="indicators"></ul>');


        // Initialize
        var view = $(this);
        var showIndicators = view.attr('data-indicators') || options.indicators;

        // Don't double initialize.
        if (view.hasClass('initialized')) {
          // Redraw carousel.
          $(this).trigger('carouselNext', [0.000001]);
          return true;
        }


        // Options
        if (options.full_width) {
          options.dist = 0;
          var firstImage = view.find('.carousel-item img').first();
          if (firstImage.length) {
            imageHeight = firstImage.load(function(){
              view.css('height', $(this).height());
            });
          } else {
            imageHeight = view.find('.carousel-item').first().height();
            view.css('height', imageHeight);
          }

          // Offset fixed items when indicators.
          if (showIndicators) {
            view.find('.carousel-fixed-item').addClass('with-indicators');
          }
        }


        view.addClass('initialized');
        pressed = false;
        offset = target = 0;
        images = [];
        item_width = view.find('.carousel-item').first().innerWidth();
        dim = item_width * 2 + options.padding;

        view.find('.carousel-item').each(function (i) {
          images.push($(this)[0]);
          if (showIndicators) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Add active to first by default.
            if (i === 0) {
              $indicator.addClass('active');
            }

            // Handle clicks on indicators.
            $indicator.click(function () {
              var index = $(this).index();
              cycleTo(index);
            });
            $indicators.append($indicator);
          }
        });

        if (showIndicators) {
          view.append($indicators);
        }
        count = images.length;


        function setupEvents() {
          if (typeof window.ontouchstart !== 'undefined') {
            view[0].addEventListener('touchstart', tap);
            view[0].addEventListener('touchmove', drag);
            view[0].addEventListener('touchend', release);
          }
          view[0].addEventListener('mousedown', tap);
          view[0].addEventListener('mousemove', drag);
          view[0].addEventListener('mouseup', release);
          view[0].addEventListener('mouseleave', release);
          view[0].addEventListener('click', click);
        }

        function xpos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientX;
          }

          // mouse event
          return e.clientX;
        }

        function ypos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
          }

          // mouse event
          return e.clientY;
        }

        function wrap(x) {
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
        }

        function scroll(x) {
          var i, half, delta, dir, tween, el, alignment, xTranslation;

          offset = (typeof x === 'number') ? x : offset;
          center = Math.floor((offset + dim / 2) / dim);
          delta = offset - center * dim;
          dir = (delta < 0) ? 1 : -1;
          tween = -dir * delta * 2 / dim;
          half = count >> 1;

          if (!options.full_width) {
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
            alignment += 'translateY(' + (view[0].clientHeight - item_width) / 2 + 'px)';
          } else {
            alignment = 'translateX(0)';
          }

          // Set indicator active
          if (showIndicators) {
            var diff = (center % count);
            var activeIndicator = $indicators.find('.indicator-item.active');
            if (activeIndicator.index() !== diff) {
              activeIndicator.removeClass('active');
              $indicators.find('.indicator-item').eq(diff).addClass('active');
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.no_wrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween * i) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.full_width) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          for (i = 1; i <= half; ++i) {
            // right side
            if (options.full_width) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 + tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
            }
            // Don't show wrapped items.
            if (!options.no_wrap || center + i < count) {
              el = images[wrap(center + i)];
              el.style[xform] = alignment +
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }


            // left side
            if (options.full_width) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 - tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
            }
            // Don't show wrapped items.
            if (!options.no_wrap || center - i >= 0) {
              el = images[wrap(center - i)];
              el.style[xform] = alignment +
                ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.no_wrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.full_width) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }
        }

        function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - timestamp;
          timestamp = now;
          delta = offset - frame;
          frame = offset;

          v = 1000 * delta / (1 + elapsed);
          velocity = 0.8 * v + 0.2 * velocity;
        }

        function autoScroll() {
          var elapsed, delta;

          if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = amplitude * Math.exp(-elapsed / options.time_constant);
            if (delta > 2 || delta < -2) {
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
          }
        }

        function click(e) {
          // Disable clicks if carousel was dragged.
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
            return false;

          } else if (!options.full_width) {
            var clickedIndex = $(e.target).closest('.carousel-item').index();
            var diff = (center % count) - clickedIndex;

            // Disable clicks if carousel was shifted by click
            if (diff !== 0) {
              e.preventDefault();
              e.stopPropagation();
            }
            cycleTo(clickedIndex);
          }
        }

        function cycleTo(n) {
          var diff = (center % count) - n;

          // Account for wraparound.
          if (!options.no_wrap) {
            if (diff < 0) {
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }

            } else if (diff > 0) {
              if (Math.abs(diff - count) < diff) { diff -= count; }
            }
          }

          // Call prev or next accordingly.
          if (diff < 0) {
            view.trigger('carouselNext', [Math.abs(diff)]);

          } else if (diff > 0) {
            view.trigger('carouselPrev', [diff]);
          }
        }

        function tap(e) {
          pressed = true;
          dragged = false;
          vertical_dragged = false;
          reference = xpos(e);
          referenceY = ypos(e);

          velocity = amplitude = 0;
          frame = offset;
          timestamp = Date.now();
          clearInterval(ticker);
          ticker = setInterval(track, 100);

        }

        function drag(e) {
          var x, delta, deltaY;
          if (pressed) {
            x = xpos(e);
            y = ypos(e);
            delta = reference - x;
            deltaY = Math.abs(referenceY - y);
            if (deltaY < 30 && !vertical_dragged) {
              // If vertical scrolling don't allow dragging.
              if (delta > 2 || delta < -2) {
                dragged = true;
                reference = x;
                scroll(offset + delta);
              }

            } else if (dragged) {
              // If dragging don't allow vertical scroll.
              e.preventDefault();
              e.stopPropagation();
              return false;

            } else {
              // Vertical scrolling.
              vertical_dragged = true;
            }
          }

          if (dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }

        function release(e) {
          if (pressed) {
            pressed = false;
          } else {
            return;
          }

          clearInterval(ticker);
          target = offset;
          if (velocity > 10 || velocity < -10) {
            amplitude = 0.9 * velocity;
            target = offset + amplitude;
          }
          target = Math.round(target / dim) * dim;

          // No wrap of items.
          if (options.no_wrap) {
            if (target >= dim * (count - 1)) {
              target = dim * (count - 1);
            } else if (target < 0) {
              target = 0;
            }
          }
          amplitude = target - offset;
          timestamp = Date.now();
          requestAnimationFrame(autoScroll);

          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }

        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
          var e = prefix + 'Transform';
          if (typeof document.body.style[e] !== 'undefined') {
            xform = e;
            return false;
          }
          return true;
        });



        window.onresize = scroll;

        setupEvents();
        scroll(offset);

        $(this).on('carouselNext', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = offset + dim * n;
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselPrev', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = offset - dim * n;
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselSet', function(e, n) {
          if (n === undefined) {
            n = 0;
          }
          cycleTo(n);
        });

      });



    },
    next : function(n) {
      $(this).trigger('carouselNext', [n]);
    },
    prev : function(n) {
      $(this).trigger('carouselPrev', [n]);
    },
    set : function(n) {
      $(this).trigger('carouselSet', [n]);
    }
  };


    $.fn.carousel = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );
      }
    }; // Plugin end
}( jQuery ));

(function($) {
    var _stack = 0,
    _lastID = 0,
    _generateID = function() {
      _lastID++;
      return 'materialize-lean-overlay-' + _lastID;
    };

  $.fn.extend({
    openModal: function(options) {

      var $body = $('body');
      var oldWidth = $body.innerWidth();
      $body.css('overflow', 'hidden');
      $body.width(oldWidth);

      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        starting_top: '4%',
        ending_top: '10%'
      };
      var $modal = $(this);

      if ($modal.hasClass('open')) {
        return;
      }

      var overlayID = _generateID();
      var $overlay = $('<div class="lean-overlay"></div>');
      lStack = (++_stack);

      // Store a reference of the overlay
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
      $modal.addClass('open');

      $("body").append($overlay);

      // Override defaults
      options = $.extend(defaults, options);

      if (options.dismissible) {
        $overlay.click(function() {
          $modal.closeModal(options);
        });
        // Return on ESC
        $(document).on('keyup.leanModal' + overlayID, function(e) {
          if (e.keyCode === 27) {   // ESC key
            $modal.closeModal(options);
          }
        });
      }

      $modal.find(".modal-close").on('click.close', function(e) {
        $modal.closeModal(options);
      });

      $overlay.css({ display : "block", opacity : 0 });

      $modal.css({
        display : "block",
        opacity: 0
      });

      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);

      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "0", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
      else {
        $.Velocity.hook($modal, "scaleX", 0.7);
        $modal.css({ top: options.starting_top });
        $modal.velocity({top: options.ending_top, opacity: 1, scaleX: '1'}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }


    }
  });

  $.fn.extend({
    closeModal: function(options) {
      var defaults = {
        out_duration: 250,
        complete: undefined
      };
      var $modal = $(this);
      var overlayID = $modal.data('overlay-id');
      var $overlay = $('#' + overlayID);
      $modal.removeClass('open');

      options = $.extend(defaults, options);

      // Enable scrolling
      $('body').css({
        overflow: '',
        width: ''
      });

      $modal.find('.modal-close').off('click.close');
      $(document).off('keyup.leanModal' + overlayID);

      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});


      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "-100%", opacity: 0}, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $overlay.css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $overlay.remove();
            _stack--;
          }
        });
      }
      else {
        $modal.velocity(
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {
          duration: options.out_duration,
          complete:
            function() {

              $(this).css('display', 'none');
              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete();
              }
              $overlay.remove();
              _stack--;
            }
          }
        );
      }
    }
  });

  $.fn.extend({
    leanModal: function(option) {
      return this.each(function() {

        var defaults = {
          starting_top: '4%'
        },
        // Override defaults
        options = $.extend(defaults, option);

        // Close Handlers
        $(this).click(function(e) {
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          $(modal_id).openModal(options);
          e.preventDefault();
        }); // done set on click
      }); // done return
    }
  });
})(jQuery);


(function ($) {
    $.fn.tooltip = function (options) {
      var timeout = null,
      margin = 5;

      // Defaults
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);
        origin.attr('data-tooltip-id', tooltipId);

        // Get attributes.
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?
              options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?
              options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ?
              options.tooltip : tooltipText;
        };
        setAttributes();

        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');

          // Create Text span
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else{
            tooltipText = $('<span></span>').text(tooltipText);
          }

          // Create tooltip
          tooltip.append(tooltipText)
            .appendTo($('body'))
            .attr('id', tooltipId);

          // Create backdrop
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();

        // Destroy previously binded events
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
        var started = false, timeoutRef;
        origin.on({'mouseenter.tooltip': function(e) {
          var showTooltip = function() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ display: 'block', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();

            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft =  origin.offset().left - tooltipWidth - margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                top: '-7px',
                right: 0,
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft = origin.offset().left + originWidth + margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                top: '-7px',
                left: 0,
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              targetTop = origin.offset().top + origin.outerHeight() + margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                top: 0,
                left: 0,
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
              });
            }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdrop.css('width'));
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdrop.css('height'));

            tooltipEl.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
            backdrop.css({ display: 'block' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scaleX: scaleXFactor, scaleY: scaleYFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function() {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false});
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {
                duration:225,
                queue: false,
                complete: function(){
                  backdrop.css('display', 'none');
                  tooltipEl.css('display', 'none');
                  started = false;}
              });
            }
          },225);
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));


(function ($) {
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        if ($(element).val().length > 0 || element.autofocus ||$(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label').addClass('active');
        }
        else {
          $(this).siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function(object) {
      var hasLength = object.attr('length') !== undefined;
      var lenAttr = parseInt(object.attr('length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function(e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function(e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
      if (lineHeight) { hiddenDiv.css('line-height', lineHeight); }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      $textarea.css('height', hiddenDiv.height());
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files      = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());
    });

    $(document).on('input mousedown touchstart', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      var width = $(this).outerWidth();

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }

      if (e.type !== 'input') {
        if(e.pageX === undefined || e.pageX === null){//mobile
           left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        }
        else{ // desktop
           left = e.pageX - $(this).offset().left;
        }
        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
      }

      thumb.find('.value').html($(this).val());
    });

    $(document).on('mouseup touchend', range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('mousemove touchmove', range_wrapper, function(e) {
      var thumb = $(this).children('.thumb');
      var left;
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
        }
        if (e.pageX === undefined || e.pageX === null) { //mobile
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        }
        else{ // desktop
          left = e.pageX - $(this).offset().left;
        }
        var width = $(this).outerWidth();

        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {}
      };

      options = $.extend(defaults, options);

      return this.each(function() {
        var $input = $(this);
        var data = options.data,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          // Create autocomplete element
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');

          // Append autocomplete element
          if ($inputDiv.length) {
            $inputDiv.append($autocomplete); // Set ul in body
          } else {
            $input.after($autocomplete);
          }

          var highlight = function(string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Perform search
          $input.on('keyup', function (e) {
            // Capture Enter
            if (e.which === 13) {
              $autocomplete.find('li').first().click();
              return;
            }

            var val = $input.val().toLowerCase();
            $autocomplete.empty();

            // Check if the input isn't empty
            if (val !== '') {
              for(var key in data) {
                if (data.hasOwnProperty(key) &&
                    key.toLowerCase().indexOf(val) !== -1 &&
                    key.toLowerCase() !== val) {
                  var autocompleteOption = $('<li></li>');
                  if(!!data[key]) {
                    autocompleteOption.append('<img src="'+ data[key] +'" class="right circle"><span>'+ key +'</span>');
                  } else {
                    autocompleteOption.append('<span>'+ key +'</span>');
                  }
                  $autocomplete.append(autocompleteOption);

                  highlight(val, autocompleteOption);
                }
              }
            }
          });

          // Set input value
          $autocomplete.on('click', 'li', function () {
            $input.val($(this).text().trim());
            $autocomplete.empty();
          });
        }
      });
    };

  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          if (type === 'multiple') {
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {
            options.append($('<li class="' + disabledClass + optgroupClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
          }
          return true;
        }

        // Check for multiple type.
        if (type === 'multiple') {
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
        } else {
          options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + option.html() + '</span></li>'));
        }
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function() {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');

            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function() {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled'))
        dropdownIcon.addClass('disabled');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false, 'closeOnClick': false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function (){
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            var selectedOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption);
          }
        },
        'click': function (e){
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function() {
        if (!multiple) {
          $(this).trigger('close');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function() {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      $(window).on({
        'click': function () {
          multiple && (optionsHover || $newSelect.trigger('close'));
        }
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = $(this).index();

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      // Make option as selected and scroll to selected position
      var activateOption = function(collection, newOption) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          options.scrollTo(option);
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function(e){
            // TAB - switch to another input
            if(e.which == 9){
              $newSelect.trigger('close');
              return;
            }

            // ARROW DOWN WHEN SELECT IS CLOSED - open select options
            if(e.which == 40 && !options.is(':visible')){
              $newSelect.trigger('open');
              return;
            }

            // ENTER WHEN SELECT IS CLOSED - submit form
            if(e.which == 13 && !options.is(':visible')){
              return;
            }

            e.preventDefault();

            // CASE WHEN USER TYPE LETTERS
            var letter = String.fromCharCode(e.which).toLowerCase(),
                nonLetters = [9,13,27,38,40];
            if (letter && (nonLetters.indexOf(e.which) === -1)) {
              filterQuery.push(letter);

              var string = filterQuery.join(''),
                  newOption = options.find('li').filter(function() {
                    return $(this).text().toLowerCase().indexOf(string) === 0;
                  })[0];

              if (newOption) {
                activateOption(options, newOption);
              }
            }

            // ENTER - select option and close when select options are opened
            if (e.which == 13) {
              var activeOption = options.find('li.selected:not(.disabled)')[0];
              if(activeOption){
                $(activeOption).trigger('click');
                if (!multiple) {
                  $newSelect.trigger('close');
                }
              }
            }

            // ARROW DOWN - move to next not disabled option
            if (e.which == 40) {
              if (options.find('li.selected').length) {
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];
              } else {
                newOption = options.find('li:not(.disabled)')[0];
              }
              activateOption(options, newOption);
            }

            // ESC - close options
            if (e.which == 27) {
              $newSelect.trigger('close');
            }

            // ARROW UP - move to previous not disabled option
            if (e.which == 38) {
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
              if(newOption)
                activateOption(options, newOption);
            }

            // Automaticaly clean filter query so user can search again by starting letters
            setTimeout(function(){ filterQuery = []; }, 1000);
          };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };

}( jQuery ));


