(function(t){function e(e){for(var n,i,o=e[0],c=e[1],d=e[2],f=0,l=[];f<o.length;f++)i=o[f],a[i]&&l.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(l.length)l.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/<git-map>/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){var e=n[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("GitMap")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GitMap"},[s("h1",[t._v(" Git-Map ")]),s("h2",[t._v(" visualize your commit activity !")]),s("label",{staticClass:"input-label",attrs:{for:"githubName"}},[t._v("Enter a GitHub name")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.githubname,expression:"githubname"}],staticClass:"input-style",attrs:{name:"githubName"},domProps:{value:t.githubname},on:{input:function(e){e.target.composing||(t.githubname=e.target.value)}}}),s("br"),s("label",{staticClass:"input-label",attrs:{for:"repositoryName"}},[t._v("Enter a corresponding repository name ")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.repoName,expression:"repoName"}],staticClass:"input-style",attrs:{name:"repositoryName"},domProps:{value:t.repoName},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.getCommitActivity(e):null},input:function(e){e.target.composing||(t.repoName=e.target.value)}}}),s("br"),s("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"button"},on:{click:t.getCommitActivity}},[t._v("Submit")]),t.errorBool?s("h4",[t._v(" "+t._s(t.errorMess))]):t._e(),s("GitCalendar",{attrs:{codingDays:t.codingDays}})],1)},o=[],c=s("bc3a"),d=s.n(c),u=d.a.create({baseURL:"https://api.github.com"}),f={getGitData:function(t){return u.get("/users/".concat(t,"/repos"))},getCommitActivity:function(t,e){return u.get("/repos/".concat(t,"/").concat(e,"/stats/commit_activity"))}},l=s("c1df"),b=s.n(l),m={commitData:function(t){var e=this.getUnixTimestamps(t),s=this.getTimestampsForEveryDay(e),n=this.convertUnixTimestamps(s),a=this.getCodingDays(t),r=this.getDatesOfCodingDays(n,a);return r},getUnixTimestamps:function(t){for(var e=[],s=t.length,n=0;n<s;n++)e.push(t[n]["week"]);return e},getTimestampsForEveryDay:function(t){var e=[],s=7*t.length,n=86400;e.push(t[0]);for(var a=0;a<s;a++)e.push(e[a]+n);return e},convertUnixTimestamps:function(t){for(var e=[],s=0;s<t.length;s++)e.push(b.a.unix(t[s]).format());return e},getCodingDays:function(t){for(var e=[],s=7,n=0;n<t.length;n++)for(var a=0;a<s;a++)e.push(t[n].days[a]);return e},getDatesOfCodingDays:function(t,e){for(var s={},n=0;n<e.length;n++)e[n]>0&&(s[t[n]]=e[n]);return s}},j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GitCalendar"},[t._l(t.renderMonths,function(e,n){return s("div",{key:n},[s("div",{staticClass:"month-display"},[t._v(" Commit activity in "+t._s(t.monthList[n])+" ")]),s("div",{staticClass:"container"},t._l(t.renderMonths[n],function(e,a){return s("div",{key:a,staticClass:"git-days",attrs:{id:t.monthList[n]+"-"+e}},[t._v(" \n                        "+t._s(e)+"\n                    ")])}),0)])}),s("p",{attrs:{id:"update-dom"}},[t._v(" Coding Days "+t._s(t.codingDays))])],2)},h=[],p=s("a4bb"),g=s.n(p),v=s("db0c"),y=s.n(v),k={name:"GitCalendar",data:function(){return{codingMonths:[],renderMonths:[],monthList:[],codingDatesFormatted:[]}},props:{codingDays:Array},beforeUpdate:function(){this.codingDates()},methods:{codingDates:function(){this.codingMonths=[],this.renderMonths=[],this.monthList=[],this.codingDatesFormatted=[];var t=[];for(var e in this.codingDays[0])t.push(e),this.codingDatesFormatted.push(e);this.getCodingMonths(t)},getCodingDays:function(){for(var t=[],e=0;e<this.codingDatesFormatted.length;e++){var s=b()(this.codingDatesFormatted[e]);t.push(s.format("MMMM YYYY-D"))}this.$nextTick(function(){for(var e=0;e<t.length;e++)document.getElementById(t[e]).id="coding-day"})},getCodingMonths:function(t){for(var e=[],s={},n=0;n<t.length;n++){var a=b()(t[n]);e.push(a.daysInMonth()),s[a.format("MMMM YYYY")]=e[n]}this.codingMonths.push(s),this.getDayIterator()},getDayIterator:function(){var t=y()(this.codingMonths[0]);this.monthList=g()(this.codingMonths[0]);for(var e=[],s=0;s<t.length;s++){for(var n=[],a=1;a<t[s]+1;a++)n.push(a);e.push(n)}this.renderMonths=e,this.getCodingDays()}}},D=k,M=(s("6715"),s("2877")),C=Object(M["a"])(D,j,h,!1,null,null,null),_=C.exports,w={name:"GitMap",components:{GitCalendar:_},data:function(){return{githubname:"",repoName:"",commitdata:[],codingDays:[],errorMess:"",errorBool:!1}},methods:{getCommitActivity:function(){var t=this;this.codingDays=[],f.getCommitActivity(this.githubname,this.repoName).then(function(e){200===e.status?(t.errorBool=!1,t.commitdata=e.data,t.codingDays.push(m.commitData(t.commitdata))):t.getCommitActivity()}).catch(function(e){404===e.response.status&&(t.errorBool=!0,t.errorMess="This Github name or repository doesn't exist. Please try a different combination.")})}}},z=w,x=(s("9cdf"),Object(M["a"])(z,i,o,!1,null,"509097bf",null)),O=x.exports,G={name:"app",components:{GitMap:O}},N=G,T=(s("034f"),Object(M["a"])(N,a,r,!1,null,null,null)),E=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},"64a9":function(t,e,s){},6715:function(t,e,s){"use strict";var n=s("dc57"),a=s.n(n);a.a},"9cdf":function(t,e,s){"use strict";var n=s("eb76"),a=s.n(n);a.a},dc57:function(t,e,s){},eb76:function(t,e,s){}});
//# sourceMappingURL=app.d419d1ea.js.map