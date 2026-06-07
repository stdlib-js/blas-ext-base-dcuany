"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(G,p){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(r,e,i,n,a,t,v){var d,u,s,o,f;if(r<=0)return a;for(d=g(a,0),u=!1,s=n,o=v,f=0;f<r;f++)!u&&e[s]&&(u=!0),d[o]=u,s+=i,o+=t;return a}p.exports=B
});var j=q(function(H,l){
var x=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(r,e,i,n,a){var t=x(r,i),v=x(r,a);return E(r,e,i,t,n,a,v)}l.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),y,b=A(z(__dirname,"./native.js"));C(b)?y=D:y=b;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
