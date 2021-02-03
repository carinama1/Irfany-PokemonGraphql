(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{271:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.d(n,"a",(function(){return a}));var o=new(t(279).a)("PokemonsDexie");o.version(2).stores({pokemon:"++id, &uniqueName"});var a=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,(t=[{key:"getMyPokemons",value:function(){return new Promise((function(e){e(o.pokemon.toArray())}))}},{key:"getMyPokemonByName",value:function(e){return new Promise((function(n){n(o.pokemon.where("uniqueName").equals(e).first())}))}},{key:"getMyPokemonById",value:function(e){return new Promise((function(n){n(o.pokemon.where("id").equals(e).first())}))}},{key:"updatePokemonNameById",value:function(e,n){return new Promise((function(t){t(o.pokemon.where("id").equals(e).modify({uniqueName:n}))}))}},{key:"releasePokemon",value:function(e){return new Promise((function(n){n(o.pokemon.where("id").equals(e).delete())}))}},{key:"catchPokemon",value:function(e){return new Promise((function(n){n(o.pokemon.add(e))}))}}])&&r(n.prototype,t),a&&r(n,a),e}())},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var r,o,a=t(39),i=t.n(a);function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u=i()(r||(r=c(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      status\n      next\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"]))),l=i()(o||(o=c(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      abilities {\n        ability {\n          name\n        }\n      }\n      moves {\n        move {\n          name\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"])))},293:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c=t(0),u=t.n(c),l=t(262),f=t(266),m=t(268),s=t(287),p=t(78),d=t(67),b=t(280),y=t(18),g=t(7);function v(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h,O=y.a.div(r||(r=w(["\n  margin: 16px;\n  &:hover {\n    margin-top: 8px;\n  }\n  width: 200px;\n  @media (max-width: 600px) {\n    width: 110px;\n    margin: 4px;\n  }\n"]))),k=y.a.div(o||(o=w(["\n  padding: 24px;\n  height: auto;\n  border-radius: 10px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);\n  cursor: pointer;\n  @media (max-width: 600px) {\n    padding: 12px;\n  }\n"]))),j=y.a.div(a||(a=w(["\n  font-weight: bold;\n  margin-top: 16px;\n  text-transform: capitalize;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  @media (max-width: 600px) {\n    font-size: 0.75rem;\n  }\n"]))),x=y.a.img({background:"#f5f5f5",width:"100%",borderRadius:"50%"}),P=Object(y.a)("span")(i||(i=w(["\n  margin-top: 12px;\n  padding: 10px 14px;\n  border-radius: 16px;\n  background-color: #ffcb05;\n  color: #806600;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  @media (max-width: 600px) {\n    font-size: 0.5rem;\n  }\n  font-weight: bold;\n"]))),E=function(e){var n=e.pokemon,t=(v(e,["pokemon"]),Object(g.g)());return u.a.createElement(O,null,u.a.createElement(k,{onClick:function(){return t("/pokemon-details",{replace:!1,state:{name:n.name,image:n.image}})}},u.a.createElement(x,{src:n.image,alt:"Pokemon "}),u.a.createElement(j,{className:"pokemon-name"},n.name),u.a.createElement(P,null," CAPTURED : ",n.owned)))};var S,A,z=y.a.div(h||(S=["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-flow: {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"],A||(A=S.slice(0)),h=Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(A)}})))),I=t(77),M=t(79),q=t(271);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||R(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){if(e){if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,n):void 0}}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var F=Object(l.a)((function(e){return{root:{minHeight:"100%",paddingBottom:e.spacing(3)},buttonMain:{fontWeight:"bold",padding:10,borderRadius:12,background:e.btn.primary,"&:hover":{opacity:.9,background:e.btn.primary}}}}));n.default=function(){var e=F(),n=B(Object(c.useState)(9),1)[0],t=B(Object(c.useState)(!1),2),r=t[0],o=t[1],a=B(Object(c.useState)(0),2),i=a[0],l=a[1],y=B(Object(c.useState)([]),2),g=y[0],v=y[1],w=B(Object(c.useState)([]),2),h=w[0],O=w[1];Object(c.useEffect)((function(){k()}),[]);var k=function(){q.a.getMyPokemons().then((function(e){O(e||[])})).catch((function(e){console.log({error:P})}))},j=Object(d.useQuery)(b.a,{variables:{limit:n,offset:0}}),x=j.data,P=j.error,S=j.loading,A=j.fetchMore;Object(c.useEffect)((function(){var e=function(e){var n=D(e.pokemons.results);if(g[0]&&n[0].name===g[0].name)o(!1);else{var t=[];n.map((function(e){var n=h.filter((function(n){return n.name===e.name})).length;t.push($($({},e),{},{owned:n}))}));var r=g.concat(t);v(r),o(!1)}},n=function(e){return u.a.createElement("div",null,e)};(e||n)&&(!e||S||P?n&&!S&&P&&n(P):e(x))}),[S,x,P]);return u.a.createElement(c.Fragment,null,S&&u.a.createElement(M.a,null),!S&&u.a.createElement(p.a,{className:e.root,title:"Pokemon List"},u.a.createElement(c.Fragment,null,u.a.createElement(f.a,{maxWidth:"lg"},u.a.createElement(m.a,{style:{marginBottom:40}}),u.a.createElement(z,null,g&&g.length>=0&&g.map((function(e,n){return u.a.createElement(c.Fragment,{key:"item-".concat(n)},u.a.createElement(E,{pokemon:e}))}))),u.a.createElement(m.a,{display:"flex",style:{margin:20},justifyContent:"center"},r&&u.a.createElement(I.a,null),!r&&x&&x.pokemons.next&&u.a.createElement(s.a,{className:e.buttonMain,onClick:function(){if(o(!0),!r){var e=i+1;l(e),A({variables:{limit:n,offset:n*e+1},updateQuery:function(e,n){var t=n.fetchMoreResult;return t||e}})}}},"Load More"))))))}}}]);