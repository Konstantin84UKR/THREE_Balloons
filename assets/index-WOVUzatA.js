var Yh=Object.defineProperty;var Kh=(o,e,t)=>e in o?Yh(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Ma=(o,e,t)=>(Kh(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="161",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$h=0,Ea=1,Zh=2,Vl=1,Wl=2,Pn=3,Un=0,kt=1,dn=2,Kn=0,qi=1,Sa=2,Ta=3,ba=4,Jh=5,li=100,Qh=101,eu=102,wa=103,Aa=104,tu=200,nu=201,iu=202,su=203,No=204,Do=205,ru=206,ou=207,au=208,cu=209,lu=210,hu=211,uu=212,du=213,fu=214,pu=0,mu=1,gu=2,vr=3,_u=4,vu=5,xu=6,yu=7,Xl=0,Mu=1,Eu=2,$n=0,Su=1,Tu=2,bu=3,ql=4,wu=5,Au=6,Ra="attached",Ru="detached",jl=300,Ki=301,$i=302,xr=303,Uo=304,Ar=306,Zi=1e3,Nt=1001,yr=1002,wt=1003,Fo=1004,Vi=1005,pt=1006,gr=1007,pn=1008,Zn=1009,Cu=1010,Lu=1011,Yo=1012,Yl=1013,jn=1014,Gt=1015,Nn=1016,Kl=1017,$l=1018,pi=1020,Pu=1021,qt=1023,Iu=1024,Nu=1025,mi=1026,Ji=1027,Du=1028,Zl=1029,Uu=1030,Jl=1031,Ql=1033,zr=33776,Hr=33777,Gr=33778,kr=33779,Ca=35840,La=35841,Pa=35842,Ia=35843,eh=36196,Na=37492,Da=37496,Ua=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ha=37813,Ga=37814,ka=37815,Va=37816,Wa=37817,Xa=37818,qa=37819,ja=37820,Ya=37821,Vr=36492,Ka=36494,$a=36495,Fu=36283,Za=36284,Ja=36285,Qa=36286,bs=2300,Qi=2301,Wr=2302,ec=2400,tc=2401,nc=2402,Ou=2500,Bu=0,th=1,Oo=2,nh=3e3,gi=3001,zu=3200,Hu=3201,Ko=0,Gu=1,Jt="",ut="srgb",Mt="srgb-linear",$o="display-p3",Rr="display-p3-linear",Mr="linear",at="srgb",Er="rec709",Sr="p3",Ti=7680,ic=519,ku=512,Vu=513,Wu=514,ih=515,Xu=516,qu=517,ju=518,Yu=519,Bo=35044,sc="300 es",zo=1035,Dn=2e3,Tr=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const Ms=Math.PI/180,es=180/Math.PI;function on(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[o&255]+Pt[o>>8&255]+Pt[o>>16&255]+Pt[o>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function Zo(o,e){return(o%e+e)%e}function Ku(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function $u(o,e,t){return o!==e?(t-o)/(e-o):0}function Es(o,e,t){return(1-t)*o+t*e}function Zu(o,e,t,n){return Es(o,e,1-Math.exp(-t*n))}function Ju(o,e=1){return e-Math.abs(Zo(o,e*2)-e)}function Qu(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function ed(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function td(o,e){return o+Math.floor(Math.random()*(e-o+1))}function nd(o,e){return o+Math.random()*(e-o)}function id(o){return o*(.5-Math.random())}function sd(o){o!==void 0&&(rc=o);let e=rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(o){return o*Ms}function od(o){return o*es}function Ho(o){return(o&o-1)===0&&o!==0}function ad(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function br(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function cd(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,c*d,c*u,a*l);break;case"YZY":o.set(c*u,a*h,c*d,a*l);break;case"ZXZ":o.set(c*d,c*u,a*h,a*l);break;case"XZX":o.set(a*h,c*g,c*f,a*l);break;case"YXY":o.set(c*f,a*h,c*g,a*l);break;case"ZYZ":o.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function tt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const sh={DEG2RAD:Ms,RAD2DEG:es,generateUUID:on,clamp:_t,euclideanModulo:Zo,mapLinear:Ku,inverseLerp:$u,lerp:Es,damp:Zu,pingpong:Ju,smoothstep:Qu,smootherstep:ed,randInt:td,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:Ho,ceilPowerOfTwo:ad,floorPowerOfTwo:br,setQuaternionFromProperEuler:cd,normalize:tt,denormalize:sn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,r,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l)}set(e,t,n,i,s,r,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],y=i[4],M=i[7],A=i[2],b=i[5],T=i[8];return s[0]=r*_+a*v+c*A,s[3]=r*p+a*y+c*b,s[6]=r*m+a*M+c*T,s[1]=l*_+h*v+d*A,s[4]=l*p+h*y+d*b,s[7]=l*m+h*M+d*T,s[2]=u*_+f*v+g*A,s[5]=u*p+f*y+g*b,s[8]=u*m+f*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*r-a*l,u=a*c-h*s,f=l*s-r*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*r)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-i*l,i*c,-i*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new qe;function rh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ws(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ld(){const o=ws("canvas");return o.style.display="block",o}const oc={};function _i(o){o in oc||(oc[o]=!0,console.warn(o))}const ac=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cc=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Mt]:{transfer:Mr,primaries:Er,toReference:o=>o,fromReference:o=>o},[ut]:{transfer:at,primaries:Er,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Rr]:{transfer:Mr,primaries:Sr,toReference:o=>o.applyMatrix3(cc),fromReference:o=>o.applyMatrix3(ac)},[$o]:{transfer:at,primaries:Sr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(cc),fromReference:o=>o.applyMatrix3(ac).convertLinearToSRGB()}},hd=new Set([Mt,Rr]),et={enabled:!0,_workingColorSpace:Mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!hd.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Us[e].toReference,i=Us[t].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Us[o].primaries},getTransfer:function(o){return o===Jt?Mr:Us[o].transfer}};function ji(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let bi;class oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=ws("canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ji(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(jr(i[r].image)):s.push(jr(i[r]))}else s=jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class Rt extends yi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Nt,i=Nt,s=pt,r=pn,a=qt,c=Zn,l=Rt.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=on(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gi?ut:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?gi:nh}set encoding(e){_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gi?ut:Jt}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=jl;Rt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(f+1)/2,A=(m+1)/2,b=(h+u)/4,T=(d+_)/4,D=(g+p)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=T/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gi?ut:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ch extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let p=1-a;const m=c*u+l*f+h*g+d*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,m*v);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const M=a*v;if(c=c*p+u*M,l=l*p+f*M,h=h*p+g*M,d=d*p+_*M,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(r){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*i-a*n),h=2*(a*t-s*i),d=2*(s*n-r*t);return this.x=t+c*l+r*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new O,lc=new mn;class Fn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Qt):Qt.fromBufferAttribute(s,r),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Os.subVectors(this.max,ls),wi.subVectors(e.a,ls),Ai.subVectors(e.b,ls),Ri.subVectors(e.c,ls),On.subVectors(Ai,wi),Bn.subVectors(Ri,Ai),ni.subVectors(wi,Ri);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ni.z,ni.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ni.z,0,-ni.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ni.y,ni.x,0];return!Kr(t,wi,Ai,Ri,Os)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,wi,Ai,Ri,Os))?!1:(Bs.crossVectors(On,Bn),t=[Bs.x,Bs.y,Bs.z],Kr(t,wi,Ai,Ri,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new O,new O,new O,new O,new O,new O,new O,new O],Qt=new O,Fs=new Fn,wi=new O,Ai=new O,Ri=new O,On=new O,Bn=new O,ni=new O,ls=new O,Os=new O,Bs=new O,ii=new O;function Kr(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ii.fromArray(o,s);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const md=new Fn,hs=new O,$r=new O;let gn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add($r)),this.expandByPoint(hs.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Mn=new O,Zr=new O,zs=new O,zn=new O,Jr=new O,Hs=new O,Qr=new O;let As=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zr.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(zs),a=zn.dot(this.direction),c=-zn.dot(zs),l=zn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*c-a,u=r*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+r*u+2*a)+u*(r*d+u+2*c)+l}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zr).addScaledVector(zs,u),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,s){Jr.subVectors(t,e),Hs.subVectors(n,e),Qr.crossVectors(Jr,Hs);let r=this.direction.dot(Qr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;zn.subVectors(this.origin,e);const c=a*this.direction.dot(Hs.crossVectors(zn,Hs));if(c<0)return null;const l=a*this.direction.dot(Jr.cross(zn));if(l<0||c+l>r)return null;const h=-a*zn.dot(Qr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class We{constructor(e,t,n,i,s,r,a,c,l,h,d,u,f,g,_,p){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l,h,d,u,f,g,_,p)}set(e,t,n,i,s,r,a,c,l,h,d,u,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),r=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=r*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=_-u*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,f=r*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=r*c,f=r*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hn.crossVectors(n,Wt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hn.crossVectors(n,Wt)),Hn.normalize(),Gs.crossVectors(Wt,Hn),i[0]=Hn.x,i[4]=Gs.x,i[8]=Wt.x,i[1]=Hn.y,i[5]=Gs.y,i[9]=Wt.y,i[2]=Hn.z,i[6]=Gs.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],y=n[7],M=n[11],A=n[15],b=i[0],T=i[4],D=i[8],z=i[12],x=i[1],w=i[5],B=i[9],F=i[13],R=i[2],U=i[6],P=i[10],$=i[14],k=i[3],W=i[7],Z=i[11],J=i[15];return s[0]=r*b+a*x+c*R+l*k,s[4]=r*T+a*w+c*U+l*W,s[8]=r*D+a*B+c*P+l*Z,s[12]=r*z+a*F+c*$+l*J,s[1]=h*b+d*x+u*R+f*k,s[5]=h*T+d*w+u*U+f*W,s[9]=h*D+d*B+u*P+f*Z,s[13]=h*z+d*F+u*$+f*J,s[2]=g*b+_*x+p*R+m*k,s[6]=g*T+_*w+p*U+m*W,s[10]=g*D+_*B+p*P+m*Z,s[14]=g*z+_*F+p*$+m*J,s[3]=v*b+y*x+M*R+A*k,s[7]=v*T+y*w+M*U+A*W,s[11]=v*D+y*B+M*P+A*Z,s[15]=v*z+y*F+M*$+A*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+_*(+t*c*f-t*l*u+s*r*u-i*r*f+i*l*h-s*c*h)+p*(+t*l*d-t*a*f-s*r*d+n*r*f+s*a*h-n*l*h)+m*(-i*a*h-t*c*d+t*a*u+i*r*d-n*r*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=d*p*l-_*u*l+_*c*f-a*p*f-d*c*m+a*u*m,y=g*u*l-h*p*l-g*c*f+r*p*f+h*c*m-r*u*m,M=h*_*l-g*d*l+g*a*f-r*_*f-h*a*m+r*d*m,A=g*d*c-h*_*c-g*a*u+r*_*u+h*a*p-r*d*p,b=t*v+n*y+i*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(_*u*s-d*p*s-_*i*f+n*p*f+d*i*m-n*u*m)*T,e[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*m+n*c*m)*T,e[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*T,e[4]=y*T,e[5]=(h*p*s-g*u*s+g*i*f-t*p*f-h*i*m+t*u*m)*T,e[6]=(g*c*s-r*p*s-g*i*l+t*p*l+r*i*m-t*c*m)*T,e[7]=(r*u*s-h*c*s+h*i*l-t*u*l-r*i*f+t*c*f)*T,e[8]=M*T,e[9]=(g*d*s-h*_*s-g*n*f+t*_*f+h*n*m-t*d*m)*T,e[10]=(r*_*s-g*a*s+g*n*l-t*_*l-r*n*m+t*a*m)*T,e[11]=(h*a*s-r*d*s-h*n*l+t*d*l+r*n*f-t*a*f)*T,e[12]=A*T,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*p+t*d*p)*T,e[14]=(g*a*i-r*_*i-g*n*c+t*_*c+r*n*p-t*a*p)*T,e[15]=(r*d*i-h*a*i+h*n*c-t*d*c-r*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,c=e.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,c=t._w,l=s+s,h=r+r,d=a+a,u=s*l,f=s*h,g=s*d,_=r*h,p=r*d,m=a*d,v=c*l,y=c*h,M=c*d,A=n.x,b=n.y,T=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+M)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(u+m))*b,i[6]=(p+v)*b,i[7]=0,i[8]=(g+y)*T,i[9]=(p-v)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ci.set(i[0],i[1],i[2]).length();const r=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const l=1/s,h=1/r,d=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=Dn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===Dn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Tr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=Dn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(r-s),u=(t+e)*l,f=(n+i)*h;let g,_;if(a===Dn)g=(r+s)*d,_=-2*d;else if(a===Tr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new O,en=new We,gd=new O(0,0,0),_d=new O(1,1,1),Hn=new O,Gs=new O,Wt=new O,hc=new We,uc=new mn;class Cr{constructor(e=0,t=0,n=0,i=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const dc=new O,Li=new mn,En=new We,ks=new O,us=new O,xd=new O,yd=new mn,fc=new O(1,0,0),pc=new O(0,1,0),mc=new O(0,0,1),Md={type:"added"},Ed={type:"removed"};class lt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new O,t=new Cr,n=new mn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new qe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(us,ks,this.up):En.lookAt(ks,us,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(En),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Md)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new O(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new O,Sn=new O,eo=new O,Tn=new O,Pi=new O,Ii=new O,gc=new O,to=new O,no=new O,io=new O;class fn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Sn.subVectors(n,t),eo.subVectors(e,t);const r=tn.dot(tn),a=tn.dot(Sn),c=tn.dot(eo),l=Sn.dot(Sn),h=Sn.dot(eo),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(r*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,i,s,r,a,c){return this.getBarycoord(e,t,n,i,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Tn.x),c.addScaledVector(r,Tn.y),c.addScaledVector(a,Tn.z),c)}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Sn.subVectors(e,t),tn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Pi.subVectors(i,n),Ii.subVectors(s,n),to.subVectors(e,n);const c=Pi.dot(to),l=Ii.dot(to);if(c<=0&&l<=0)return t.copy(n);no.subVectors(e,i);const h=Pi.dot(no),d=Ii.dot(no);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Pi,r);io.subVectors(e,s);const f=Pi.dot(io),g=Ii.dot(io);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ii,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return gc.subVectors(s,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(gc,a);const m=1/(p+_+u);return r=_*m,a=u*m,t.copy(n).addScaledVector(Pi,r).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function so(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Zo(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=so(r,s,e+1/3),this.g=so(r,s,e),this.b=so(r,s,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return et.fromWorkingColorSpace(It.copy(this),e),Math.round(_t(It.r*255,0,255))*65536+Math.round(_t(It.g*255,0,255))*256+Math.round(_t(It.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=ut){et.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Vs);const n=Es(Gn.h,Vs.h,t),i=Es(Gn.s,Vs.s,t),s=Es(Gn.l,Vs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ue;Ue.NAMES=hh;let Sd=0,an=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=on(),this.name="",this.type="Material",this.blending=qi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Do,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class di extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=Td();function Td(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function bd(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=_t(o,-65504,65504),In.floatView[0]=o;const e=In.uint32View[0],t=e>>23&511;return In.baseTable[t]+((e&8388607)>>In.shiftTable[t])}function wd(o){const e=o>>10;return In.uint32View[0]=In.mantissaTable[In.offsetTable[e]+(o&1023)]+In.exponentTable[e],In.floatView[0]}const Ws={toHalfFloat:bd,fromHalfFloat:wd},mt=new O,Xs=new Re;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _i("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class uh extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ad=0;const $t=new We,ro=new lt,Ni=new O,Xt=new Fn,ds=new Fn,bt=new O;class jt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?dh:uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Xt.min,ds.min),Xt.expandByPoint(bt),bt.addVectors(Xt.max,ds.max),Xt.expandByPoint(bt)):(Xt.expandByPoint(ds.min),Xt.expandByPoint(ds.max))}Xt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bt.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(e,l),bt.add(Ni)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let x=0;x<a;x++)l[x]=new O,h[x]=new O;const d=new O,u=new O,f=new O,g=new Re,_=new Re,p=new Re,m=new O,v=new O;function y(x,w,B){d.fromArray(i,x*3),u.fromArray(i,w*3),f.fromArray(i,B*3),g.fromArray(r,x*2),_.fromArray(r,w*2),p.fromArray(r,B*2),u.sub(d),f.sub(d),_.sub(g),p.sub(g);const F=1/(_.x*p.y-p.x*_.y);isFinite(F)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(F),v.copy(f).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(F),l[x].add(m),l[w].add(m),l[B].add(m),h[x].add(v),h[w].add(v),h[B].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let x=0,w=M.length;x<w;++x){const B=M[x],F=B.start,R=B.count;for(let U=F,P=F+R;U<P;U+=3)y(n[U+0],n[U+1],n[U+2])}const A=new O,b=new O,T=new O,D=new O;function z(x){T.fromArray(s,x*3),D.copy(T);const w=l[x];A.copy(w),A.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(D,w);const F=b.dot(h[x])<0?-1:1;c[x*4]=A.x,c[x*4+1]=A.y,c[x*4+2]=A.z,c[x*4+3]=F}for(let x=0,w=M.length;x<w;++x){const B=M[x],F=B.start,R=B.count;for(let U=F,P=F+R;U<P;U+=3)z(n[U+0]),z(n[U+1]),z(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new O,s=new O,r=new O,a=new O,c=new O,l=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new Bt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _c=new We,si=new As,qs=new gn,vc=new O,Di=new O,Ui=new O,Fi=new O,oo=new O,js=new O,Ys=new Re,Ks=new Re,$s=new Re,xc=new O,yc=new O,Mc=new O,Zs=new O,Js=new O;class At extends lt{constructor(e=new jt,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(oo.fromBufferAttribute(d,e),r?js.addScaledVector(oo,h):js.addScaledVector(oo.sub(t),h))}t.add(js)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(qs.containsPoint(si.origin)===!1&&(si.intersectSphere(qs,vc)===null||si.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(_c.copy(s).invert(),si.copy(e.ray).applyMatrix4(_c),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,A=y;M<A;M+=3){const b=a.getX(M),T=a.getX(M+1),D=a.getX(M+2);i=Qs(this,m,e,n,l,h,d,b,T,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);i=Qs(this,r,e,n,l,h,d,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,A=y;M<A;M+=3){const b=M,T=M+1,D=M+2;i=Qs(this,m,e,n,l,h,d,b,T,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,M=p+2;i=Qs(this,r,e,n,l,h,d,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Rd(o,e,t,n,i,s,r,a){let c;if(e.side===kt?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,e.side===Un,a),c===null)return null;Js.copy(a),Js.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(Js);return l<t.near||l>t.far?null:{distance:l,point:Js.clone(),object:o}}function Qs(o,e,t,n,i,s,r,a,c,l){o.getVertexPosition(a,Di),o.getVertexPosition(c,Ui),o.getVertexPosition(l,Fi);const h=Rd(o,e,t,n,Di,Ui,Fi,Zs);if(h){i&&(Ys.fromBufferAttribute(i,a),Ks.fromBufferAttribute(i,c),$s.fromBufferAttribute(i,l),h.uv=fn.getInterpolation(Zs,Di,Ui,Fi,Ys,Ks,$s,new Re)),s&&(Ys.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,c),$s.fromBufferAttribute(s,l),h.uv1=fn.getInterpolation(Zs,Di,Ui,Fi,Ys,Ks,$s,new Re),h.uv2=h.uv1),r&&(xc.fromBufferAttribute(r,a),yc.fromBufferAttribute(r,c),Mc.fromBufferAttribute(r,l),h.normal=fn.getInterpolation(Zs,Di,Ui,Fi,xc,yc,Mc,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};fn.getNormal(Di,Ui,Fi,d.normal),h.face=d}return h}class ss extends jt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(_,p,m,v,y,M,A,b,T,D,z){const x=M/T,w=A/D,B=M/2,F=A/2,R=b/2,U=T+1,P=D+1;let $=0,k=0;const W=new O;for(let Z=0;Z<P;Z++){const J=Z*w-F;for(let K=0;K<U;K++){const me=K*x-B;W[_]=me*v,W[p]=J*y,W[m]=R,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[m]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(K/T),d.push(1-Z/D),$+=1}}for(let Z=0;Z<D;Z++)for(let J=0;J<T;J++){const K=u+J+U*Z,me=u+J+U*(Z+1),j=u+(J+1)+U*(Z+1),Q=u+(J+1)+U*Z;c.push(K,me,Q),c.push(me,j,Q),k+=6}a.addGroup(f,k,z),f+=k,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(o){const e={};for(let t=0;t<o.length;t++){const n=ts(o[t]);for(const i in n)e[i]=n[i]}return e}function Cd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function fh(o){return o.getRenderTarget()===null?o.outputColorSpace:et.workingColorSpace}const Ld={clone:ts,merge:Ft};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new O,Ec=new Re,Sc=new Re;class Ot extends ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Sc),t.subVectors(Sc,Ec)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Nd extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const s=new Ot(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new Ot(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const a=new Ot(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const c=new Ot(Oi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new Ot(Oi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,c]=t;for(const l of t)this.remove(l);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mh extends Rt{constructor(e,t,n,i,s,r,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,i,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dd extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gi?ut:Jt),this.texture=new mh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ss(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Kn});s.uniforms.tEquirect.value=t;const r=new At(i,s),a=t.minFilter;return t.minFilter===pn&&(t.minFilter=pt),new Nd(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const ao=new O,Ud=new O,Fd=new qe;let Xn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fd.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ri=new gn,er=new O;class Jo{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,s=new Xn,r=new Xn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,p-f,M-m).normalize(),n[1].setComponents(c+s,u+l,p+f,M+m).normalize(),n[2].setComponents(c+r,u+h,p+g,M+v).normalize(),n[3].setComponents(c-r,u-h,p-g,M-v).normalize(),n[4].setComponents(c-a,u-d,p-_,M-y).normalize(),t===Dn)n[5].setComponents(c+a,u+d,p+_,M+y).normalize();else if(t===Tr)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(er.x=i.normal.x>0?e.max.x:e.min.x,er.y=i.normal.y>0?e.max.y:e.min.y,er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Od(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=d.byteLength,g=o.createBuffer();o.bindBuffer(h,g),o.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=o.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=o.SHORT;else if(d instanceof Uint32Array)_=o.UNSIGNED_INT;else if(d instanceof Int32Array)_=o.INT;else if(d instanceof Int8Array)_=o.BYTE;else if(d instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(o.bindBuffer(d,l),f.count===-1&&g.length===0&&o.bufferSubData(d,0,u),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?o.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):o.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:r,remove:a,update:c}}class Rs extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let y=0;y<l;y++){const M=y*d-s;g.push(M,-v,0),_.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+l*m,M=v+l*(m+1),A=v+1+l*(m+1),b=v+1+l*m;f.push(y,M,b),f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:kd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:jd,begin_vertex:Yd,beginnormal_vertex:Kd,bsdfs:$d,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:of,color_vertex:af,common:cf,cube_uv_reflection_fragment:lf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:_f,envmap_common_pars_fragment:vf,envmap_pars_fragment:xf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:If,envmap_vertex:Mf,fog_vertex:Ef,fog_pars_vertex:Sf,fog_fragment:Tf,fog_pars_fragment:bf,gradientmap_pars_fragment:wf,lightmap_fragment:Af,lightmap_pars_fragment:Rf,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Pf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:jf,map_particle_fragment:Yf,map_particle_pars_fragment:Kf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Zf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:ep,morphtarget_vertex:tp,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:op,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:vp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Sp,skinbase_vertex:Tp,skinning_pars_vertex:bp,skinning_vertex:wp,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Np,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:zp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:kp,cube_frag:Vp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:jp,equirect_vert:Yp,equirect_frag:Kp,linedashed_vert:$p,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:om,meshphong_frag:am,meshphysical_vert:cm,meshphysical_frag:lm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},ae={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},un={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};un.physical={uniforms:Ft([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const tr={r:0,b:0,g:0};function vm(o,e,t,n,i,s,r){const a=new Ue(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(p,m){let v=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),v=!0);const M=o.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ar)?(h===void 0&&(h=new At(new ss(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ts(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=et.getTransfer(y.colorSpace)!==at,(d!==y||u!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new At(new Rs(2,2),new Qn({name:"BackgroundMaterial",uniforms:ts(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,m){p.getRGB(tr,fh(o)),n.buffers.color.setClear(tr.r,tr.g,tr.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function xm(o,e,t,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(R,U,P,$,k){let W=!1;if(r){const Z=_($,P,U);l!==Z&&(l=Z,f(l.object)),W=m(R,$,P,k),W&&v(R,$,P,k)}else{const Z=U.wireframe===!0;(l.geometry!==$.id||l.program!==P.id||l.wireframe!==Z)&&(l.geometry=$.id,l.program=P.id,l.wireframe=Z,W=!0)}k!==null&&t.update(k,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,D(R,U,P,$),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?o.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,U,P){const $=P.wireframe===!0;let k=a[R.id];k===void 0&&(k={},a[R.id]=k);let W=k[U.id];W===void 0&&(W={},k[U.id]=W);let Z=W[$];return Z===void 0&&(Z=p(u()),W[$]=Z),Z}function p(R){const U=[],P=[],$=[];for(let k=0;k<i;k++)U[k]=0,P[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:$,object:R,attributes:{},index:null}}function m(R,U,P,$){const k=l.attributes,W=U.attributes;let Z=0;const J=P.getAttributes();for(const K in J)if(J[K].location>=0){const j=k[K];let Q=W[K];if(Q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;Z++}return l.attributesNum!==Z||l.index!==$}function v(R,U,P,$){const k={},W=U.attributes;let Z=0;const J=P.getAttributes();for(const K in J)if(J[K].location>=0){let j=W[K];j===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),k[K]=Q,Z++}l.attributes=k,l.attributesNum=Z,l.index=$}function y(){const R=l.newAttributes;for(let U=0,P=R.length;U<P;U++)R[U]=0}function M(R){A(R,0)}function A(R,U){const P=l.newAttributes,$=l.enabledAttributes,k=l.attributeDivisors;P[R]=1,$[R]===0&&(o.enableVertexAttribArray(R),$[R]=1),k[R]!==U&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),k[R]=U)}function b(){const R=l.newAttributes,U=l.enabledAttributes;for(let P=0,$=U.length;P<$;P++)U[P]!==R[P]&&(o.disableVertexAttribArray(P),U[P]=0)}function T(R,U,P,$,k,W,Z){Z===!0?o.vertexAttribIPointer(R,U,P,k,W):o.vertexAttribPointer(R,U,P,$,k,W)}function D(R,U,P,$){if(n.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const k=$.attributes,W=P.getAttributes(),Z=U.defaultAttributeValues;for(const J in W){const K=W[J];if(K.location>=0){let me=k[J];if(me===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),me!==void 0){const j=me.normalized,Q=me.itemSize,ue=t.get(me);if(ue===void 0)continue;const Ee=ue.buffer,Ce=ue.type,_e=ue.bytesPerElement,Ke=n.isWebGL2===!0&&(Ce===o.INT||Ce===o.UNSIGNED_INT||me.gpuType===Yl);if(me.isInterleavedBufferAttribute){const De=me.data,G=De.stride,xt=me.offset;if(De.isInstancedInterleavedBuffer){for(let be=0;be<K.locationSize;be++)A(K.location+be,De.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let be=0;be<K.locationSize;be++)M(K.location+be);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let be=0;be<K.locationSize;be++)T(K.location+be,Q/K.locationSize,Ce,j,G*_e,(xt+Q/K.locationSize*be)*_e,Ke)}else{if(me.isInstancedBufferAttribute){for(let De=0;De<K.locationSize;De++)A(K.location+De,me.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let De=0;De<K.locationSize;De++)M(K.location+De);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let De=0;De<K.locationSize;De++)T(K.location+De,Q/K.locationSize,Ce,j,Q*_e,Q/K.locationSize*De*_e,Ke)}}else if(Z!==void 0){const j=Z[J];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(K.location,j);break;case 3:o.vertexAttrib3fv(K.location,j);break;case 4:o.vertexAttrib4fv(K.location,j);break;default:o.vertexAttrib1fv(K.location,j)}}}}b()}function z(){B();for(const R in a){const U=a[R];for(const P in U){const $=U[P];for(const k in $)g($[k].object),delete $[k];delete U[P]}delete a[R]}}function x(R){if(a[R.id]===void 0)return;const U=a[R.id];for(const P in U){const $=U[P];for(const k in $)g($[k].object),delete $[k];delete U[P]}delete a[R.id]}function w(R){for(const U in a){const P=a[U];if(P[R.id]===void 0)continue;const $=P[R.id];for(const k in $)g($[k].object),delete $[k];delete P[R.id]}}function B(){F(),h=!0,l!==c&&(l=c,f(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:B,resetDefaultState:F,dispose:z,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:M,disableUnusedAttributes:b}}function ym(o,e,t,n){const i=n.isWebGL2;let s;function r(h){s=h}function a(h,d){o.drawArrays(s,h,d),t.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,d,u),t.update(d,s,u)}function l(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Mm(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),p=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,M=r||e.has("OES_texture_float"),A=y&&M,b=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:b}}function Em(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Xn,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=o.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const v=s?0:n,y=v*4;let M=m.clippingState||null;c.value=M,M=h(g,u,y,f);for(let A=0;A!==y;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==_;++y,M+=4)r.copy(d[y]).applyMatrix4(v,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Sm(o){let e=new WeakMap;function t(r,a){return a===xr?r.mapping=Ki:a===Uo&&(r.mapping=$i),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===xr||a===Uo)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Dd(c.height);return l.fromEquirectangularTexture(o,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qo extends ph{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,Tc=[.125,.215,.35,.446,.526,.582],hi=20,co=new Qo,bc=new Ue;let lo=null,ho=0,uo=0;const ci=(1+Math.sqrt(5))/2,zi=1/ci,wc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ci,zi),new O(0,ci,-zi),new O(zi,0,ci),new O(-zi,0,ci),new O(ci,zi,0),new O(-ci,zi,0)];class Ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,ho,uo),e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Nn,format:qt,colorSpace:Mt,depthBuffer:!1},i=Rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(s)),this._blurMaterial=bm(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(bc),h.toneMapping=$n,h.autoClear=!1;const f=new di({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new At(new ss,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(bc),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;nr(i,v*y,m>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=wc[(i-1)%wc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hi-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const m=[];let v=0;for(let T=0;T<hi;++T){const D=T/_,z=Math.exp(-D*D/2);m.push(z),T===0?v+=z:T<p&&(v+=2*z)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-Wi?i-y+Wi:0),b=4*(this._cubeSize-M);nr(t,A,b,3*M,2*M),c.setRenderTarget(t),c.render(d,co)}}function Tm(o){const e=[],t=[],n=[];let i=o;const s=o-Wi+1+Tc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let c=1/a;r>o-Wi?c=Tc[r-o+Wi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),y=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,D=b>2?0:-1,z=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(z,_*g*b),y.set(u,p*g*b);const x=[b,b,b,b,b,b];M.set(x,m*g*b)}const A=new jt;A.setAttribute("position",new Bt(v,_)),A.setAttribute("uv",new Bt(y,p)),A.setAttribute("faceIndex",new Bt(M,m)),e.push(A),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rc(o,e,t){const n=new vi(o,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function bm(o,e,t){const n=new Float32Array(hi),i=new O(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Cc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Lc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wm(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xr||c===Uo,h=c===Ki||c===$i;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ac(o)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ac(o));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Am(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rm(o,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],o.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,M=v.length;y<M;y+=3){const A=v[y+0],b=v[y+1],T=v[y+2];u.push(A,b,b,T,T,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const A=y+0,b=y+1,T=y+2;u.push(A,b,b,T,T,A)}}else return;const p=new(rh(u)?dh:uh)(u,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Cm(o,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){o.drawElements(s,g,a,f*c),t.update(g,s,1)}function d(f,g,_){if(_===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*c,_),t.update(g,s,_)}function u(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let m=0;for(let v=0;v<_;v++)m+=g[v];t.update(m,s,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Lm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pm(o,e){return o[0]-e[0]}function Im(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Nm(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new st,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let U=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var f=U;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;y===!0&&(z=1),M===!0&&(z=2),A===!0&&(z=3);let x=h.attributes.position.count*z,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const B=new Float32Array(x*w*4*_),F=new ch(B,x,w,_);F.type=Gt,F.needsUpdate=!0;const R=z*4;for(let P=0;P<_;P++){const $=b[P],k=T[P],W=D[P],Z=x*w*4*P;for(let J=0;J<$.count;J++){const K=J*R;y===!0&&(r.fromBufferAttribute($,J),B[Z+K+0]=r.x,B[Z+K+1]=r.y,B[Z+K+2]=r.z,B[Z+K+3]=0),M===!0&&(r.fromBufferAttribute(k,J),B[Z+K+4]=r.x,B[Z+K+5]=r.y,B[Z+K+6]=r.z,B[Z+K+7]=0),A===!0&&(r.fromBufferAttribute(W,J),B[Z+K+8]=r.x,B[Z+K+9]=r.y,B[Z+K+10]=r.z,B[Z+K+11]=W.itemSize===4?r.w:1)}}p={count:_,texture:F,size:new Re(x,w)},s.set(h,p),h.addEventListener("dispose",U)}let m=0;for(let y=0;y<u.length;y++)m+=u[y];const v=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",u),d.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const A=_[M];A[0]=M,A[1]=u[M]}_.sort(Im);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Pm);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const A=a[M],b=A[0],T=A[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+M)!==p[b]&&h.setAttribute("morphTarget"+M,p[b]),m&&h.getAttribute("morphNormal"+M)!==m[b]&&h.setAttribute("morphNormal"+M,m[b]),i[M]=T,v+=T):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),m&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Dm(o,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class _h extends Rt{constructor(e,t,n,i,s,r,a,c,l,h){if(h=h!==void 0?h:mi,h!==mi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=jn),n===void 0&&h===Ji&&(n=pi),super(null,i,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vh=new Rt,xh=new _h(1,1);xh.compareFunction=ih;const yh=new ch,Mh=new pd,Eh=new mh,Pc=[],Ic=[],Nc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function rs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Pc[i];if(s===void 0&&(s=new Float32Array(i),Pc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Et(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function St(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Lr(o,e){let t=Ic[e];t===void 0&&(t=new Int32Array(e),Ic[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Um(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2fv(this.addr,e),St(t,e)}}function Om(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;o.uniform3fv(this.addr,e),St(t,e)}}function Bm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4fv(this.addr,e),St(t,e)}}function zm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;Uc.set(n),o.uniformMatrix2fv(this.addr,!1,Uc),St(t,n)}}function Hm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;Dc.set(n),o.uniformMatrix3fv(this.addr,!1,Dc),St(t,n)}}function Gm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;Nc.set(n),o.uniformMatrix4fv(this.addr,!1,Nc),St(t,n)}}function km(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2iv(this.addr,e),St(t,e)}}function Wm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3iv(this.addr,e),St(t,e)}}function Xm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4iv(this.addr,e),St(t,e)}}function qm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function jm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2uiv(this.addr,e),St(t,e)}}function Ym(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3uiv(this.addr,e),St(t,e)}}function Km(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4uiv(this.addr,e),St(t,e)}}function $m(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?xh:vh;t.setTexture2D(e||s,i)}function Zm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mh,i)}function Jm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Eh,i)}function Qm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yh,i)}function eg(o){switch(o){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return km;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return jm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(o,e){o.uniform1fv(this.addr,e)}function ng(o,e){const t=rs(e,this.size,2);o.uniform2fv(this.addr,t)}function ig(o,e){const t=rs(e,this.size,3);o.uniform3fv(this.addr,t)}function sg(o,e){const t=rs(e,this.size,4);o.uniform4fv(this.addr,t)}function rg(o,e){const t=rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function og(o,e){const t=rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function ag(o,e){const t=rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function cg(o,e){o.uniform1iv(this.addr,e)}function lg(o,e){o.uniform2iv(this.addr,e)}function hg(o,e){o.uniform3iv(this.addr,e)}function ug(o,e){o.uniform4iv(this.addr,e)}function dg(o,e){o.uniform1uiv(this.addr,e)}function fg(o,e){o.uniform2uiv(this.addr,e)}function pg(o,e){o.uniform3uiv(this.addr,e)}function mg(o,e){o.uniform4uiv(this.addr,e)}function gg(o,e,t){const n=this.cache,i=e.length,s=Lr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||vh,s[r])}function _g(o,e,t){const n=this.cache,i=e.length,s=Lr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Mh,s[r])}function vg(o,e,t){const n=this.cache,i=e.length,s=Lr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Eh,s[r])}function xg(o,e,t){const n=this.cache,i=e.length,s=Lr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||yh,s[r])}function yg(o){switch(o){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yg(t.type)}}class Sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Fc(o,e){o.seq.push(e),o.map[e.id]=e}function Tg(o,e,t){const n=o.name,i=n.length;for(fo.lastIndex=0;;){const s=fo.exec(n),r=fo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Fc(t,l===void 0?new Mg(a,o,e):new Eg(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new Sg(a),Fc(t,d)),t=d}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Tg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Oc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const bg=37297;let wg=0;function Ag(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Rg(o){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(o);let n;switch(e===t?n="":e===Sr&&t===Er?n="LinearDisplayP3ToLinearSRGB":e===Er&&t===Sr&&(n="LinearSRGBToLinearDisplayP3"),o){case Mt:case Rr:return[n,"LinearTransferOETF"];case ut:case $o:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Bc(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ag(o.getShaderSource(e),r)}else return i}function Cg(o,e){const t=Rg(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lg(o,e){let t;switch(e){case Su:t="Linear";break;case Tu:t="Reinhard";break;case bu:t="OptimizedCineon";break;case ql:t="ACESFilmic";break;case Au:t="AgX";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Ig(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Ng(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Xi(o){return o!==""}function zc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(o){return o.replace(Ug,Og)}const Fg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Og(o,e){let t=Ge[e];if(t===void 0){const n=Fg.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Go(t)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(o){return o.replace(Bg,zg)}function zg(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kc(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	`;return o.isWebGL2&&(e+=`precision ${o.precision} sampler3D;
		precision ${o.precision} sampler2DArray;
		precision ${o.precision} sampler2DShadow;
		precision ${o.precision} samplerCubeShadow;
		precision ${o.precision} sampler2DArrayShadow;
		precision ${o.precision} isampler2D;
		precision ${o.precision} isampler3D;
		precision ${o.precision} isamplerCube;
		precision ${o.precision} isampler2DArray;
		precision ${o.precision} usampler2D;
		precision ${o.precision} usampler3D;
		precision ${o.precision} usamplerCube;
		precision ${o.precision} usampler2DArray;
		`),o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ki:case $i:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function Vg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Mu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xg(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=Hg(t),l=Gg(t),h=kg(t),d=Vg(t),u=Wg(t),f=t.isWebGL2?"":Pg(t),g=Ig(t),_=Ng(s),p=i.createProgram();let m,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),v.length>0&&(v+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),v=[f,kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ge.tonemapping_pars_fragment:"",t.toneMapping!==$n?Lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),r=Go(r),r=zc(r,t),r=Hc(r,t),a=Go(a),a=zc(a,t),a=Hc(a,t),r=Gc(r),a=Gc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=y+m+r,A=y+v+a,b=Oc(i,i.VERTEX_SHADER,M),T=Oc(i,i.FRAGMENT_SHADER,A);i.attachShader(p,b),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(B){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(T).trim();let P=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(P=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,p,b,T);else{const k=Bc(i,b,"vertex"),W=Bc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+F+`
`+k+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||U==="")&&($=!1);$&&(B.diagnostics={runnable:P,programLog:F,vertexShader:{log:R,prefix:m},fragmentShader:{log:U,prefix:v}})}i.deleteShader(b),i.deleteShader(T),z=new _r(i,p),x=Dg(i,p)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,bg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let qg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yg(e),t.set(e,n)),n}}class Yg{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}}function Kg(o,e,t,n,i,s,r){const a=new lh,c=new jg,l=new Set,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,B,F,R){const U=F.fog,P=R.geometry,$=x.isMeshStandardMaterial?F.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),W=k&&k.mapping===Ar?k.image.height:null,Z=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=J!==void 0?J.length:0;let me=0;P.morphAttributes.position!==void 0&&(me=1),P.morphAttributes.normal!==void 0&&(me=2),P.morphAttributes.color!==void 0&&(me=3);let j,Q,ue,Ee;if(Z){const je=un[Z];j=je.vertexShader,Q=je.fragmentShader}else j=x.vertexShader,Q=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),Ee=c.getFragmentShaderID(x);const Ce=o.getRenderTarget(),_e=R.isInstancedMesh===!0,Ke=R.isBatchedMesh===!0,De=!!x.map,G=!!x.matcap,xt=!!k,be=!!x.aoMap,Pe=!!x.lightMap,ye=!!x.bumpMap,rt=!!x.normalMap,Fe=!!x.displacementMap,L=!!x.emissiveMap,S=!!x.metalnessMap,V=!!x.roughnessMap,re=x.anisotropy>0,ee=x.clearcoat>0,ie=x.iridescence>0,ve=x.sheen>0,ce=x.transmission>0,ge=re&&!!x.anisotropyMap,Ae=ee&&!!x.clearcoatMap,Oe=ee&&!!x.clearcoatNormalMap,te=ee&&!!x.clearcoatRoughnessMap,Je=ie&&!!x.iridescenceMap,ke=ie&&!!x.iridescenceThicknessMap,Ie=ve&&!!x.sheenColorMap,Se=ve&&!!x.sheenRoughnessMap,de=!!x.specularMap,ze=!!x.specularColorMap,N=!!x.specularIntensityMap,oe=ce&&!!x.transmissionMap,le=ce&&!!x.thicknessMap,Te=!!x.gradientMap,I=!!x.alphaMap,se=x.alphaTest>0,ne=!!x.alphaHash,xe=!!x.extensions;let we=$n;x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(we=o.toneMapping);const $e={isWebGL2:d,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:Q,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ke,instancing:_e,instancingColor:_e&&R.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?o.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Mt,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:G,envMap:xt,envMapMode:xt&&k.mapping,envMapCubeUVHeight:W,aoMap:be,lightMap:Pe,bumpMap:ye,normalMap:rt,displacementMap:f&&Fe,emissiveMap:L,normalMapObjectSpace:rt&&x.normalMapType===Gu,normalMapTangentSpace:rt&&x.normalMapType===Ko,metalnessMap:S,roughnessMap:V,anisotropy:re,anisotropyMap:ge,clearcoat:ee,clearcoatMap:Ae,clearcoatNormalMap:Oe,clearcoatRoughnessMap:te,iridescence:ie,iridescenceMap:Je,iridescenceThicknessMap:ke,sheen:ve,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:de,specularColorMap:ze,specularIntensityMap:N,transmission:ce,transmissionMap:oe,thicknessMap:le,gradientMap:Te,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:se,alphaHash:ne,combine:x.combine,mapUv:De&&p(x.map.channel),aoMapUv:be&&p(x.aoMap.channel),lightMapUv:Pe&&p(x.lightMap.channel),bumpMapUv:ye&&p(x.bumpMap.channel),normalMapUv:rt&&p(x.normalMap.channel),displacementMapUv:Fe&&p(x.displacementMap.channel),emissiveMapUv:L&&p(x.emissiveMap.channel),metalnessMapUv:S&&p(x.metalnessMap.channel),roughnessMapUv:V&&p(x.roughnessMap.channel),anisotropyMapUv:ge&&p(x.anisotropyMap.channel),clearcoatMapUv:Ae&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(x.sheenRoughnessMap.channel),specularMapUv:de&&p(x.specularMap.channel),specularColorMapUv:ze&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:oe&&p(x.transmissionMap.channel),thicknessMapUv:le&&p(x.thicknessMap.channel),alphaMapUv:I&&p(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(rt||re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(De||I),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:we,useLegacyLights:o._useLegacyLights,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:xe&&x.extensions.derivatives===!0,extensionFragDepth:xe&&x.extensions.fragDepth===!0,extensionDrawBuffers:xe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function v(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(y(w,x),M(w,x),w.push(o.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function y(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const w=_[x.type];let B;if(w){const F=un[w];B=Ld.clone(F.uniforms)}else B=x.uniforms;return B}function b(x,w){let B;for(let F=0,R=h.length;F<R;F++){const U=h[F];if(U.cacheKey===w){B=U,++B.usedTimes;break}}return B===void 0&&(B=new Xg(o,w,x,s),h.push(B)),B}function T(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function D(x){c.remove(x)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:z}}function $g(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Vc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wc(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,_,p){let m=o[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},o[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,u,f,g,_,p){const m=r(d,u,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(d,u,f,g,_,p){const m=r(d,u,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,u){t.length>1&&t.sort(d||Zg),n.length>1&&n.sort(u||Vc),i.length>1&&i.sort(u||Vc)}function h(){for(let d=e,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jg(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Wc,o.set(n,[r])):i>=s.length?(r=new Wc,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Qg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function e_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let t_=0;function n_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function i_(o,e){const t=new Qg,n=e_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,r=new We,a=new We;function c(h,d){let u=0,f=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,p=0,m=0,v=0,y=0,M=0,A=0,b=0,T=0,D=0,z=0;h.sort(n_);const x=d===!0?Math.PI:1;for(let B=0,F=h.length;B<F;B++){const R=h[B],U=R.color,P=R.intensity,$=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*P*x,f+=U.g*P*x,g+=U.b*P*x;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],P);z++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*x),R.castShadow){const Z=R.shadow,J=n.get(R);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=W,_++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(P*x),W.distance=$,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[m]=W;const Z=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Z.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[m]=Z.matrix,R.castShadow){const J=n.get(R);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=k,b++}m++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(U).multiplyScalar(P),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=W,v++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*x),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Z=R.shadow,J=n.get(R);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=R.shadow.matrix,A++}i.point[p]=W,p++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(P*x),W.groundColor.copy(R.groundColor).multiplyScalar(P*x),i.hemi[y]=W,y++}}v>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==v||w.hemiLength!==y||w.numDirectionalShadows!==M||w.numPointShadows!==A||w.numSpotShadows!==b||w.numSpotMaps!==T||w.numLightProbes!==z)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=z,w.directionalLength=_,w.pointLength=p,w.spotLength=m,w.rectAreaLength=v,w.hemiLength=y,w.numDirectionalShadows=M,w.numPointShadows=A,w.numSpotShadows=b,w.numSpotMaps=T,w.numLightProbes=z,i.version=t_++)}function l(h,d){let u=0,f=0,g=0,_=0,p=0;const m=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const M=h[v];if(M.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(M.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function Xc(o,e){const t=new i_(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function s_(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let c;return a===void 0?(c=new Xc(o,e),t.set(s,[c])):r>=a.length?(c=new Xc(o,e),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class r_ extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o_ extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(o,e,t){let n=new Jo;const i=new Re,s=new Re,r=new st,a=new r_({depthPacking:Hu}),c=new o_,l={},h=t.maxTextureSize,d={[Un]:kt,[kt]:Un,[dn]:dn},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:a_,fragmentShader:c_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let m=this.type;this.render=function(b,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const z=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),B=o.state;B.setBlending(Kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==Pn&&this.type===Pn,R=m===Pn&&this.type!==Pn;for(let U=0,P=b.length;U<P;U++){const $=b[U],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const W=k.getFrameExtents();if(i.multiply(W),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||F===!0||R===!0){const J=this.type!==Pn?{minFilter:wt,magFilter:wt}:{};k.map!==null&&k.map.dispose(),k.map=new vi(i.x,i.y,J),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Z=k.getViewportCount();for(let J=0;J<Z;J++){const K=k.getViewport(J);r.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),B.viewport(r),k.updateMatrices($,J),n=k.getFrustum(),M(T,D,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&v(k,D),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(z,x,w)};function v(b,T){const D=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(T,null,D,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(T,null,D,f,_,null)}function y(b,T,D,z){let x=null;const w=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?c:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,F=T.uuid;let R=l[B];R===void 0&&(R={},l[B]=R);let U=R[F];U===void 0&&(U=x.clone(),R[F]=U,T.addEventListener("dispose",A)),x=U}if(x.visible=T.visible,x.wireframe=T.wireframe,z===Pn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=o.properties.get(x);B.light=D}return x}function M(b,T,D,z,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Pn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const F=e.update(b),R=b.material;if(Array.isArray(R)){const U=F.groups;for(let P=0,$=U.length;P<$;P++){const k=U[P],W=R[k.materialIndex];if(W&&W.visible){const Z=y(b,W,z,x);b.onBeforeShadow(o,b,T,D,F,Z,k),o.renderBufferDirect(D,null,F,Z,b,k),b.onAfterShadow(o,b,T,D,F,Z,k)}}}else if(R.visible){const U=y(b,R,z,x);b.onBeforeShadow(o,b,T,D,F,U,null),o.renderBufferDirect(D,null,F,U,b,null),b.onAfterShadow(o,b,T,D,F,U,null)}}const B=b.children;for(let F=0,R=B.length;F<R;F++)M(B[F],T,D,z,x)}function A(b){b.target.removeEventListener("dispose",A);for(const D in l){const z=l[D],x=b.target.uuid;x in z&&(z[x].dispose(),delete z[x])}}}function h_(o,e,t){const n=t.isWebGL2;function i(){let I=!1;const se=new st;let ne=null;const xe=new st(0,0,0,0);return{setMask:function(we){ne!==we&&!I&&(o.colorMask(we,we,we,we),ne=we)},setLocked:function(we){I=we},setClear:function(we,$e,je,it,Ct){Ct===!0&&(we*=it,$e*=it,je*=it),se.set(we,$e,je,it),xe.equals(se)===!1&&(o.clearColor(we,$e,je,it),xe.copy(se))},reset:function(){I=!1,ne=null,xe.set(-1,0,0,0)}}}function s(){let I=!1,se=null,ne=null,xe=null;return{setTest:function(we){we?_e(o.DEPTH_TEST):Ke(o.DEPTH_TEST)},setMask:function(we){se!==we&&!I&&(o.depthMask(we),se=we)},setFunc:function(we){if(ne!==we){switch(we){case pu:o.depthFunc(o.NEVER);break;case mu:o.depthFunc(o.ALWAYS);break;case gu:o.depthFunc(o.LESS);break;case vr:o.depthFunc(o.LEQUAL);break;case _u:o.depthFunc(o.EQUAL);break;case vu:o.depthFunc(o.GEQUAL);break;case xu:o.depthFunc(o.GREATER);break;case yu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ne=we}},setLocked:function(we){I=we},setClear:function(we){xe!==we&&(o.clearDepth(we),xe=we)},reset:function(){I=!1,se=null,ne=null,xe=null}}}function r(){let I=!1,se=null,ne=null,xe=null,we=null,$e=null,je=null,it=null,Ct=null;return{setTest:function(Ze){I||(Ze?_e(o.STENCIL_TEST):Ke(o.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!I&&(o.stencilMask(Ze),se=Ze)},setFunc:function(Ze,dt,Dt){(ne!==Ze||xe!==dt||we!==Dt)&&(o.stencilFunc(Ze,dt,Dt),ne=Ze,xe=dt,we=Dt)},setOp:function(Ze,dt,Dt){($e!==Ze||je!==dt||it!==Dt)&&(o.stencilOp(Ze,dt,Dt),$e=Ze,je=dt,it=Dt)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Ct!==Ze&&(o.clearStencil(Ze),Ct=Ze)},reset:function(){I=!1,se=null,ne=null,xe=null,we=null,$e=null,je=null,it=null,Ct=null}}}const a=new i,c=new s,l=new r,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,y=null,M=null,A=null,b=null,T=null,D=null,z=new Ue(0,0,0),x=0,w=!1,B=null,F=null,R=null,U=null,P=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=W>=2);let J=null,K={};const me=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),Q=new st().fromArray(me),ue=new st().fromArray(j);function Ee(I,se,ne,xe){const we=new Uint8Array(4),$e=o.createTexture();o.bindTexture(I,$e),o.texParameteri(I,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(I,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let je=0;je<ne;je++)n&&(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)?o.texImage3D(se,0,o.RGBA,1,1,xe,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(se+je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return $e}const Ce={};Ce[o.TEXTURE_2D]=Ee(o.TEXTURE_2D,o.TEXTURE_2D,1),Ce[o.TEXTURE_CUBE_MAP]=Ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[o.TEXTURE_2D_ARRAY]=Ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ce[o.TEXTURE_3D]=Ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(o.DEPTH_TEST),c.setFunc(vr),Fe(!1),L(Ea),_e(o.CULL_FACE),ye(Kn);function _e(I){u[I]!==!0&&(o.enable(I),u[I]=!0)}function Ke(I){u[I]!==!1&&(o.disable(I),u[I]=!1)}function De(I,se){return f[I]!==se?(o.bindFramebuffer(I,se),f[I]=se,n&&(I===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=se),I===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=se)),!0):!1}function G(I,se){let ne=_,xe=!1;if(I)if(ne=g.get(se),ne===void 0&&(ne=[],g.set(se,ne)),I.isWebGLMultipleRenderTargets){const we=I.texture;if(ne.length!==we.length||ne[0]!==o.COLOR_ATTACHMENT0){for(let $e=0,je=we.length;$e<je;$e++)ne[$e]=o.COLOR_ATTACHMENT0+$e;ne.length=we.length,xe=!0}}else ne[0]!==o.COLOR_ATTACHMENT0&&(ne[0]=o.COLOR_ATTACHMENT0,xe=!0);else ne[0]!==o.BACK&&(ne[0]=o.BACK,xe=!0);xe&&(t.isWebGL2?o.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function xt(I){return p!==I?(o.useProgram(I),p=I,!0):!1}const be={[li]:o.FUNC_ADD,[Qh]:o.FUNC_SUBTRACT,[eu]:o.FUNC_REVERSE_SUBTRACT};if(n)be[wa]=o.MIN,be[Aa]=o.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(be[wa]=I.MIN_EXT,be[Aa]=I.MAX_EXT)}const Pe={[tu]:o.ZERO,[nu]:o.ONE,[iu]:o.SRC_COLOR,[No]:o.SRC_ALPHA,[lu]:o.SRC_ALPHA_SATURATE,[au]:o.DST_COLOR,[ru]:o.DST_ALPHA,[su]:o.ONE_MINUS_SRC_COLOR,[Do]:o.ONE_MINUS_SRC_ALPHA,[cu]:o.ONE_MINUS_DST_COLOR,[ou]:o.ONE_MINUS_DST_ALPHA,[hu]:o.CONSTANT_COLOR,[uu]:o.ONE_MINUS_CONSTANT_COLOR,[du]:o.CONSTANT_ALPHA,[fu]:o.ONE_MINUS_CONSTANT_ALPHA};function ye(I,se,ne,xe,we,$e,je,it,Ct,Ze){if(I===Kn){m===!0&&(Ke(o.BLEND),m=!1);return}if(m===!1&&(_e(o.BLEND),m=!0),I!==Jh){if(I!==v||Ze!==w){if((y!==li||b!==li)&&(o.blendEquation(o.FUNC_ADD),y=li,b=li),Ze)switch(I){case qi:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sa:o.blendFunc(o.ONE,o.ONE);break;case Ta:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ba:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sa:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ta:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ba:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,A=null,T=null,D=null,z.set(0,0,0),x=0,v=I,w=Ze}return}we=we||se,$e=$e||ne,je=je||xe,(se!==y||we!==b)&&(o.blendEquationSeparate(be[se],be[we]),y=se,b=we),(ne!==M||xe!==A||$e!==T||je!==D)&&(o.blendFuncSeparate(Pe[ne],Pe[xe],Pe[$e],Pe[je]),M=ne,A=xe,T=$e,D=je),(it.equals(z)===!1||Ct!==x)&&(o.blendColor(it.r,it.g,it.b,Ct),z.copy(it),x=Ct),v=I,w=!1}function rt(I,se){I.side===dn?Ke(o.CULL_FACE):_e(o.CULL_FACE);let ne=I.side===kt;se&&(ne=!ne),Fe(ne),I.blending===qi&&I.transparent===!1?ye(Kn):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const xe=I.stencilWrite;l.setTest(xe),xe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(o.SAMPLE_ALPHA_TO_COVERAGE):Ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){B!==I&&(I?o.frontFace(o.CW):o.frontFace(o.CCW),B=I)}function L(I){I!==$h?(_e(o.CULL_FACE),I!==F&&(I===Ea?o.cullFace(o.BACK):I===Zh?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ke(o.CULL_FACE),F=I}function S(I){I!==R&&(k&&o.lineWidth(I),R=I)}function V(I,se,ne){I?(_e(o.POLYGON_OFFSET_FILL),(U!==se||P!==ne)&&(o.polygonOffset(se,ne),U=se,P=ne)):Ke(o.POLYGON_OFFSET_FILL)}function re(I){I?_e(o.SCISSOR_TEST):Ke(o.SCISSOR_TEST)}function ee(I){I===void 0&&(I=o.TEXTURE0+$-1),J!==I&&(o.activeTexture(I),J=I)}function ie(I,se,ne){ne===void 0&&(J===null?ne=o.TEXTURE0+$-1:ne=J);let xe=K[ne];xe===void 0&&(xe={type:void 0,texture:void 0},K[ne]=xe),(xe.type!==I||xe.texture!==se)&&(J!==ne&&(o.activeTexture(ne),J=ne),o.bindTexture(I,se||Ce[I]),xe.type=I,xe.texture=se)}function ve(){const I=K[J];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ce(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(I){Q.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function N(I){ue.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function oe(I,se){let ne=d.get(se);ne===void 0&&(ne=new WeakMap,d.set(se,ne));let xe=ne.get(I);xe===void 0&&(xe=o.getUniformBlockIndex(se,I.name),ne.set(I,xe))}function le(I,se){const xe=d.get(se).get(I);h.get(se)!==xe&&(o.uniformBlockBinding(se,xe,I.__bindingPointIndex),h.set(se,xe))}function Te(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},J=null,K={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,y=null,M=null,A=null,b=null,T=null,D=null,z=new Ue(0,0,0),x=0,w=!1,B=null,F=null,R=null,U=null,P=null,Q.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:_e,disable:Ke,bindFramebuffer:De,drawBuffers:G,useProgram:xt,setBlending:ye,setMaterial:rt,setFlipSided:Fe,setCullFace:L,setLineWidth:S,setPolygonOffset:V,setScissorTest:re,activeTexture:ee,bindTexture:ie,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:ge,texImage2D:Se,texImage3D:de,updateUBOMapping:oe,uniformBlockBinding:le,texStorage2D:ke,texStorage3D:Ie,texSubImage2D:Ae,texSubImage3D:Oe,compressedTexSubImage2D:te,compressedTexSubImage3D:Je,scissor:ze,viewport:N,reset:Te}}function u_(o,e,t,n,i,s,r){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):ws("canvas")}function _(L,S,V,re){let ee=1;if((L.width>re||L.height>re)&&(ee=re/Math.max(L.width,L.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ie=S?br:Math.floor,ve=ie(ee*L.width),ce=ie(ee*L.height);d===void 0&&(d=g(ve,ce));const ge=V?g(ve,ce):d;return ge.width=ve,ge.height=ce,ge.getContext("2d").drawImage(L,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ve+"x"+ce+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function p(L){return Ho(L.width)&&Ho(L.height)}function m(L){return a?!1:L.wrapS!==Nt||L.wrapT!==Nt||L.minFilter!==wt&&L.minFilter!==pt}function v(L,S){return L.generateMipmaps&&S&&L.minFilter!==wt&&L.minFilter!==pt}function y(L){o.generateMipmap(L)}function M(L,S,V,re,ee=!1){if(a===!1)return S;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=S;if(S===o.RED&&(V===o.FLOAT&&(ie=o.R32F),V===o.HALF_FLOAT&&(ie=o.R16F),V===o.UNSIGNED_BYTE&&(ie=o.R8)),S===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(ie=o.R8UI),V===o.UNSIGNED_SHORT&&(ie=o.R16UI),V===o.UNSIGNED_INT&&(ie=o.R32UI),V===o.BYTE&&(ie=o.R8I),V===o.SHORT&&(ie=o.R16I),V===o.INT&&(ie=o.R32I)),S===o.RG&&(V===o.FLOAT&&(ie=o.RG32F),V===o.HALF_FLOAT&&(ie=o.RG16F),V===o.UNSIGNED_BYTE&&(ie=o.RG8)),S===o.RGBA){const ve=ee?Mr:et.getTransfer(re);V===o.FLOAT&&(ie=o.RGBA32F),V===o.HALF_FLOAT&&(ie=o.RGBA16F),V===o.UNSIGNED_BYTE&&(ie=ve===at?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(ie=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(ie=o.RGB5_A1)}return(ie===o.R16F||ie===o.R32F||ie===o.RG16F||ie===o.RG32F||ie===o.RGBA16F||ie===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function A(L,S,V){return v(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==wt&&L.minFilter!==pt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function b(L){return L===wt||L===Fo||L===Vi?o.NEAREST:o.LINEAR}function T(L){const S=L.target;S.removeEventListener("dispose",T),z(S),S.isVideoTexture&&h.delete(S)}function D(L){const S=L.target;S.removeEventListener("dispose",D),w(S)}function z(L){const S=n.get(L);if(S.__webglInit===void 0)return;const V=L.source,re=u.get(V);if(re){const ee=re[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(L),Object.keys(re).length===0&&u.delete(V)}n.remove(L)}function x(L){const S=n.get(L);o.deleteTexture(S.__webglTexture);const V=L.source,re=u.get(V);delete re[S.__cacheKey],r.memory.textures--}function w(L){const S=L.texture,V=n.get(L),re=n.get(S);if(re.__webglTexture!==void 0&&(o.deleteTexture(re.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let ie=0;ie<V.__webglFramebuffer[ee].length;ie++)o.deleteFramebuffer(V.__webglFramebuffer[ee][ie]);else o.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)o.deleteFramebuffer(V.__webglFramebuffer[ee]);else o.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ee=0,ie=S.length;ee<ie;ee++){const ve=n.get(S[ee]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),r.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(L)}let B=0;function F(){B=0}function R(){const L=B;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),B+=1,L}function U(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function P(L,S){const V=n.get(L);if(L.isVideoTexture&&rt(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,L,S);return}}t.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+S)}function $(L,S){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Q(V,L,S);return}t.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+S)}function k(L,S){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Q(V,L,S);return}t.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+S)}function W(L,S){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ue(V,L,S);return}t.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+S)}const Z={[Zi]:o.REPEAT,[Nt]:o.CLAMP_TO_EDGE,[yr]:o.MIRRORED_REPEAT},J={[wt]:o.NEAREST,[Fo]:o.NEAREST_MIPMAP_NEAREST,[Vi]:o.NEAREST_MIPMAP_LINEAR,[pt]:o.LINEAR,[gr]:o.LINEAR_MIPMAP_NEAREST,[pn]:o.LINEAR_MIPMAP_LINEAR},K={[ku]:o.NEVER,[Yu]:o.ALWAYS,[Vu]:o.LESS,[ih]:o.LEQUAL,[Wu]:o.EQUAL,[ju]:o.GEQUAL,[Xu]:o.GREATER,[qu]:o.NOTEQUAL};function me(L,S,V){if(S.type===Gt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pt||S.magFilter===gr||S.magFilter===Vi||S.magFilter===pn||S.minFilter===pt||S.minFilter===gr||S.minFilter===Vi||S.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(o.texParameteri(L,o.TEXTURE_WRAP_S,Z[S.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Z[S.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Z[S.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,J[S.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,J[S.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(S.wrapS!==Nt||S.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,b(S.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==wt&&S.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===wt||S.minFilter!==Vi&&S.minFilter!==pn||S.type===Gt&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Nn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(L,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function j(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",T));const re=S.source;let ee=u.get(re);ee===void 0&&(ee={},u.set(re,ee));const ie=U(S);if(ie!==L.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ee[ie].usedTimes++;const ve=ee[L.__cacheKey];ve!==void 0&&(ee[L.__cacheKey].usedTimes--,ve.usedTimes===0&&x(S)),L.__cacheKey=ie,L.__webglTexture=ee[ie].texture}return V}function Q(L,S,V){let re=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=o.TEXTURE_3D);const ee=j(L,S),ie=S.source;t.bindTexture(re,L.__webglTexture,o.TEXTURE0+V);const ve=n.get(ie);if(ie.version!==ve.__version||ee===!0){t.activeTexture(o.TEXTURE0+V);const ce=et.getPrimaries(et.workingColorSpace),ge=S.colorSpace===Jt?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===Jt||ce===ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Oe=m(S)&&p(S.image)===!1;let te=_(S.image,Oe,!1,i.maxTextureSize);te=Fe(S,te);const Je=p(te)||a,ke=s.convert(S.format,S.colorSpace);let Ie=s.convert(S.type),Se=M(S.internalFormat,ke,Ie,S.colorSpace,S.isVideoTexture);me(re,S,Je);let de;const ze=S.mipmaps,N=a&&S.isVideoTexture!==!0&&Se!==eh,oe=ve.__version===void 0||ee===!0,le=ie.dataReady,Te=A(S,te,Je);if(S.isDepthTexture)Se=o.DEPTH_COMPONENT,a?S.type===Gt?Se=o.DEPTH_COMPONENT32F:S.type===jn?Se=o.DEPTH_COMPONENT24:S.type===pi?Se=o.DEPTH24_STENCIL8:Se=o.DEPTH_COMPONENT16:S.type===Gt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===mi&&Se===o.DEPTH_COMPONENT&&S.type!==Yo&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,Ie=s.convert(S.type)),S.format===Ji&&Se===o.DEPTH_COMPONENT&&(Se=o.DEPTH_STENCIL,S.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=pi,Ie=s.convert(S.type))),oe&&(N?t.texStorage2D(o.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(o.TEXTURE_2D,0,Se,te.width,te.height,0,ke,Ie,null));else if(S.isDataTexture)if(ze.length>0&&Je){N&&oe&&t.texStorage2D(o.TEXTURE_2D,Te,Se,ze[0].width,ze[0].height);for(let I=0,se=ze.length;I<se;I++)de=ze[I],N?le&&t.texSubImage2D(o.TEXTURE_2D,I,0,0,de.width,de.height,ke,Ie,de.data):t.texImage2D(o.TEXTURE_2D,I,Se,de.width,de.height,0,ke,Ie,de.data);S.generateMipmaps=!1}else N?(oe&&t.texStorage2D(o.TEXTURE_2D,Te,Se,te.width,te.height),le&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,te.width,te.height,ke,Ie,te.data)):t.texImage2D(o.TEXTURE_2D,0,Se,te.width,te.height,0,ke,Ie,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&oe&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Se,ze[0].width,ze[0].height,te.depth);for(let I=0,se=ze.length;I<se;I++)de=ze[I],S.format!==qt?ke!==null?N?le&&t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,I,0,0,0,de.width,de.height,te.depth,ke,de.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,I,Se,de.width,de.height,te.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,I,0,0,0,de.width,de.height,te.depth,ke,Ie,de.data):t.texImage3D(o.TEXTURE_2D_ARRAY,I,Se,de.width,de.height,te.depth,0,ke,Ie,de.data)}else{N&&oe&&t.texStorage2D(o.TEXTURE_2D,Te,Se,ze[0].width,ze[0].height);for(let I=0,se=ze.length;I<se;I++)de=ze[I],S.format!==qt?ke!==null?N?le&&t.compressedTexSubImage2D(o.TEXTURE_2D,I,0,0,de.width,de.height,ke,de.data):t.compressedTexImage2D(o.TEXTURE_2D,I,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(o.TEXTURE_2D,I,0,0,de.width,de.height,ke,Ie,de.data):t.texImage2D(o.TEXTURE_2D,I,Se,de.width,de.height,0,ke,Ie,de.data)}else if(S.isDataArrayTexture)N?(oe&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Se,te.width,te.height,te.depth),le&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ke,Ie,te.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,ke,Ie,te.data);else if(S.isData3DTexture)N?(oe&&t.texStorage3D(o.TEXTURE_3D,Te,Se,te.width,te.height,te.depth),le&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ke,Ie,te.data)):t.texImage3D(o.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,ke,Ie,te.data);else if(S.isFramebufferTexture){if(oe)if(N)t.texStorage2D(o.TEXTURE_2D,Te,Se,te.width,te.height);else{let I=te.width,se=te.height;for(let ne=0;ne<Te;ne++)t.texImage2D(o.TEXTURE_2D,ne,Se,I,se,0,ke,Ie,null),I>>=1,se>>=1}}else if(ze.length>0&&Je){N&&oe&&t.texStorage2D(o.TEXTURE_2D,Te,Se,ze[0].width,ze[0].height);for(let I=0,se=ze.length;I<se;I++)de=ze[I],N?le&&t.texSubImage2D(o.TEXTURE_2D,I,0,0,ke,Ie,de):t.texImage2D(o.TEXTURE_2D,I,Se,ke,Ie,de);S.generateMipmaps=!1}else N?(oe&&t.texStorage2D(o.TEXTURE_2D,Te,Se,te.width,te.height),le&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,Ie,te)):t.texImage2D(o.TEXTURE_2D,0,Se,ke,Ie,te);v(S,Je)&&y(re),ve.__version=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ue(L,S,V){if(S.image.length!==6)return;const re=j(L,S),ee=S.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+V);const ie=n.get(ee);if(ee.version!==ie.__version||re===!0){t.activeTexture(o.TEXTURE0+V);const ve=et.getPrimaries(et.workingColorSpace),ce=S.colorSpace===Jt?null:et.getPrimaries(S.colorSpace),ge=S.colorSpace===Jt||ve===ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,te=[];for(let I=0;I<6;I++)!Ae&&!Oe?te[I]=_(S.image[I],!1,!0,i.maxCubemapSize):te[I]=Oe?S.image[I].image:S.image[I],te[I]=Fe(S,te[I]);const Je=te[0],ke=p(Je)||a,Ie=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),de=M(S.internalFormat,Ie,Se,S.colorSpace),ze=a&&S.isVideoTexture!==!0,N=ie.__version===void 0||re===!0,oe=ee.dataReady;let le=A(S,Je,ke);me(o.TEXTURE_CUBE_MAP,S,ke);let Te;if(Ae){ze&&N&&t.texStorage2D(o.TEXTURE_CUBE_MAP,le,de,Je.width,Je.height);for(let I=0;I<6;I++){Te=te[I].mipmaps;for(let se=0;se<Te.length;se++){const ne=Te[se];S.format!==qt?Ie!==null?ze?oe&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se,0,0,ne.width,ne.height,Ie,ne.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se,de,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?oe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se,0,0,ne.width,ne.height,Ie,Se,ne.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se,de,ne.width,ne.height,0,Ie,Se,ne.data)}}}else{Te=S.mipmaps,ze&&N&&(Te.length>0&&le++,t.texStorage2D(o.TEXTURE_CUBE_MAP,le,de,te[0].width,te[0].height));for(let I=0;I<6;I++)if(Oe){ze?oe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,te[I].width,te[I].height,Ie,Se,te[I].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,de,te[I].width,te[I].height,0,Ie,Se,te[I].data);for(let se=0;se<Te.length;se++){const xe=Te[se].image[I].image;ze?oe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se+1,0,0,xe.width,xe.height,Ie,Se,xe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se+1,de,xe.width,xe.height,0,Ie,Se,xe.data)}}else{ze?oe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ie,Se,te[I]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,de,Ie,Se,te[I]);for(let se=0;se<Te.length;se++){const ne=Te[se];ze?oe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se+1,0,0,Ie,Se,ne.image[I]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+I,se+1,de,Ie,Se,ne.image[I])}}}v(S,ke)&&y(o.TEXTURE_CUBE_MAP),ie.__version=ee.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Ee(L,S,V,re,ee,ie){const ve=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),ge=M(V.internalFormat,ve,ce,V.colorSpace);if(!n.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>ie),te=Math.max(1,S.height>>ie);ee===o.TEXTURE_3D||ee===o.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ge,Oe,te,S.depth,0,ve,ce,null):t.texImage2D(ee,ie,ge,Oe,te,0,ve,ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),ye(S)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,re,ee,n.get(V).__webglTexture,0,Pe(S)):(ee===o.TEXTURE_2D||ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,re,ee,n.get(V).__webglTexture,ie),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(L,S,V){if(o.bindRenderbuffer(o.RENDERBUFFER,L),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(V||ye(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gt?re=o.DEPTH_COMPONENT32F:ee.type===jn&&(re=o.DEPTH_COMPONENT24));const ie=Pe(S);ye(S)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ie,re,S.width,S.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,re,S.width,S.height)}else o.renderbufferStorage(o.RENDERBUFFER,re,S.width,S.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(S.depthBuffer&&S.stencilBuffer){const re=Pe(S);V&&ye(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,re,o.DEPTH24_STENCIL8,S.width,S.height):ye(S)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,re,o.DEPTH24_STENCIL8,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<re.length;ee++){const ie=re[ee],ve=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),ge=M(ie.internalFormat,ve,ce,ie.colorSpace),Ae=Pe(S);V&&ye(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ge,S.width,S.height):ye(S)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ge,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,ge,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function _e(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,ee=Pe(S);if(S.depthTexture.format===mi)ye(S)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,re,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,re,0);else if(S.depthTexture.format===Ji)ye(S)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,re,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ke(L){const S=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");_e(S.__webglFramebuffer,L)}else if(V){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=o.createRenderbuffer(),Ce(S.__webglDepthbuffer[re],L,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ce(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function De(L,S,V){const re=n.get(L);S!==void 0&&Ee(re.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&Ke(L)}function G(L){const S=L.texture,V=n.get(L),re=n.get(S);L.addEventListener("dispose",D),L.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=S.version,r.memory.textures++);const ee=L.isWebGLCubeRenderTarget===!0,ie=L.isWebGLMultipleRenderTargets===!0,ve=p(L)||a;if(ee){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let ge=0;ge<S.mipmaps.length;ge++)V.__webglFramebuffer[ce][ge]=o.createFramebuffer()}else V.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)V.__webglFramebuffer[ce]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(ie)if(i.drawBuffers){const ce=L.texture;for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Oe=n.get(ce[ge]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&ye(L)===!1){const ce=ie?S:[S];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Ae=ce[ge];V.__webglColorRenderbuffer[ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[ge]);const Oe=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),Je=M(Ae.internalFormat,Oe,te,Ae.colorSpace,L.isXRRenderTarget===!0),ke=Pe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,Je,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ge,o.RENDERBUFFER,V.__webglColorRenderbuffer[ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ee){t.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture),me(o.TEXTURE_CUBE_MAP,S,ve);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ee(V.__webglFramebuffer[ce][ge],L,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Ee(V.__webglFramebuffer[ce],L,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(S,ve)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=L.texture;for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Oe=ce[ge],te=n.get(Oe);t.bindTexture(o.TEXTURE_2D,te.__webglTexture),me(o.TEXTURE_2D,Oe,ve),Ee(V.__webglFramebuffer,L,Oe,o.COLOR_ATTACHMENT0+ge,o.TEXTURE_2D,0),v(Oe,ve)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let ce=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ce=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,re.__webglTexture),me(ce,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ee(V.__webglFramebuffer[ge],L,S,o.COLOR_ATTACHMENT0,ce,ge);else Ee(V.__webglFramebuffer,L,S,o.COLOR_ATTACHMENT0,ce,0);v(S,ve)&&y(ce),t.unbindTexture()}L.depthBuffer&&Ke(L)}function xt(L){const S=p(L)||a,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let re=0,ee=V.length;re<ee;re++){const ie=V[re];if(v(ie,S)){const ve=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ce=n.get(ie).__webglTexture;t.bindTexture(ve,ce),y(ve),t.unbindTexture()}}}function be(L){if(a&&L.samples>0&&ye(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,re=L.height;let ee=o.COLOR_BUFFER_BIT;const ie=[],ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=n.get(L),ge=L.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ie.push(o.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&ie.push(ve);const Oe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Oe===!1&&(L.depthBuffer&&(ee|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ee|=o.STENCIL_BUFFER_BIT)),ge&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),Oe===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ve]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ve])),ge){const te=n.get(S[Ae]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,te,0)}o.blitFramebuffer(0,0,V,re,0,0,V,re,ee,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);const Oe=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,Oe,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Pe(L){return Math.min(i.maxSamples,L.samples)}function ye(L){const S=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(L){const S=r.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Fe(L,S){const V=L.colorSpace,re=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===zo||V!==Mt&&V!==Jt&&(et.getTransfer(V)===at?a===!1?e.has("EXT_sRGB")===!0&&re===qt?(L.format=zo,L.minFilter=pt,L.generateMipmaps=!1):S=oh.sRGBToLinear(S):(re!==qt||ee!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=R,this.resetTextureUnits=F,this.setTexture2D=P,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=De,this.setupRenderTarget=G,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ye}function d_(o,e,t){const n=t.isWebGL2;function i(s,r=Jt){let a;const c=et.getTransfer(r);if(s===Zn)return o.UNSIGNED_BYTE;if(s===Kl)return o.UNSIGNED_SHORT_4_4_4_4;if(s===$l)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Cu)return o.BYTE;if(s===Lu)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Yl)return o.INT;if(s===jn)return o.UNSIGNED_INT;if(s===Gt)return o.FLOAT;if(s===Nn)return n?o.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Pu)return o.ALPHA;if(s===qt)return o.RGBA;if(s===Iu)return o.LUMINANCE;if(s===Nu)return o.LUMINANCE_ALPHA;if(s===mi)return o.DEPTH_COMPONENT;if(s===Ji)return o.DEPTH_STENCIL;if(s===zo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Du)return o.RED;if(s===Zl)return o.RED_INTEGER;if(s===Uu)return o.RG;if(s===Jl)return o.RG_INTEGER;if(s===Ql)return o.RGBA_INTEGER;if(s===zr||s===Hr||s===Gr||s===kr)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ca||s===La||s===Pa||s===Ia)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ca)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===La)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===eh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Na||s===Da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Na)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Da)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ua||s===Fa||s===Oa||s===Ba||s===za||s===Ha||s===Ga||s===ka||s===Va||s===Wa||s===Xa||s===qa||s===ja||s===Ya)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ua)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fa)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oa)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ba)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===za)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ha)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ga)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ka)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Va)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wa)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xa)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qa)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ja)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ya)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vr||s===Ka||s===$a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vr)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ka)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fu||s===Za||s===Ja||s===Qa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Za)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pi?n?o.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class f_ extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fi extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Qn({extensions:{fragDepth:!0},vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Rs(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class v_ extends yi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new __,p=t.getContextAttributes();let m=null,v=null;const y=[],M=[],A=new Re;let b=null;const T=new Ot;T.layers.enable(1),T.viewport=new st;const D=new Ot;D.layers.enable(2),D.viewport=new st;const z=[T,D],x=new f_;x.layers.enable(1),x.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=y[j];return Q===void 0&&(Q=new po,y[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=y[j];return Q===void 0&&(Q=new po,y[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=y[j];return Q===void 0&&(Q=new po,y[j]=Q),Q.getHandSpace()};function F(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const ue=y[Q];ue!==void 0&&(ue.update(j.inputSource,j.frame,l||r),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function R(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",U);for(let j=0;j<y.length;j++){const Q=M[j];Q!==null&&(M[j]=null,y[j].disconnect(Q))}w=null,B=null,_.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,v=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",R),i.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vi(f.framebufferWidth,f.framebufferHeight,{format:qt,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,Ee=null;p.depth&&(Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ji:mi,ue=p.stencil?pi:jn);const Ce={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ce),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new vi(u.textureWidth,u.textureHeight,{format:qt,type:Zn,depthTexture:new _h(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const _e=e.properties.get(v);_e.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(j){for(let Q=0;Q<j.removed.length;Q++){const ue=j.removed[Q],Ee=M.indexOf(ue);Ee>=0&&(M[Ee]=null,y[Ee].disconnect(ue))}for(let Q=0;Q<j.added.length;Q++){const ue=j.added[Q];let Ee=M.indexOf(ue);if(Ee===-1){for(let _e=0;_e<y.length;_e++)if(_e>=M.length){M.push(ue),Ee=_e;break}else if(M[_e]===null){M[_e]=ue,Ee=_e;break}if(Ee===-1)break}const Ce=y[Ee];Ce&&Ce.connect(ue)}}const P=new O,$=new O;function k(j,Q,ue){P.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const Ee=P.distanceTo($),Ce=Q.projectionMatrix.elements,_e=ue.projectionMatrix.elements,Ke=Ce[14]/(Ce[10]-1),De=Ce[14]/(Ce[10]+1),G=(Ce[9]+1)/Ce[5],xt=(Ce[9]-1)/Ce[5],be=(Ce[8]-1)/Ce[0],Pe=(_e[8]+1)/_e[0],ye=Ke*be,rt=Ke*Pe,Fe=Ee/(-be+Pe),L=Fe*-be;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(L),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const S=Ke+Fe,V=De+Fe,re=ye-L,ee=rt+(Ee-L),ie=G*De/V*S,ve=xt*De/V*S;j.projectionMatrix.makePerspective(re,ee,ie,ve,S,V),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function W(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),x.near=D.near=T.near=j.near,x.far=D.far=T.far=j.far,(w!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,B=x.far,T.near=w,T.far=B,D.near=w,D.far=B,T.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const Q=j.parent,ue=x.cameras;W(x,Q);for(let Ee=0;Ee<ue.length;Ee++)W(ue[Ee],Q);ue.length===2?k(x,T,D):x.projectionMatrix.copy(T.projectionMatrix),Z(j,x,Q)};function Z(j,Q,ue){ue===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=es*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null};let J=null;function K(j,Q){if(h=Q.getViewerPose(l||r),g=Q,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ee=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let _e=0;_e<ue.length;_e++){const Ke=ue[_e];let De=null;if(f!==null)De=f.getViewport(Ke);else{const xt=d.getViewSubImage(u,Ke);De=xt.viewport,_e===0&&(e.setRenderTargetTextures(v,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(v))}let G=z[_e];G===void 0&&(G=new Ot,G.layers.enable(_e),G.viewport=new st,z[_e]=G),G.matrix.fromArray(Ke.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Ke.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(x.matrix.copy(G.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(G)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const _e=d.getDepthInformation(ue[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,i.renderState)}}for(let ue=0;ue<y.length;ue++){const Ee=M[ue],Ce=y[ue];Ee!==null&&Ce!==void 0&&Ce.update(Ee,Q,l||r)}_.render(e,x),J&&J(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const me=new gh;me.setAnimationLoop(K),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}function x_(o,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fh(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function y_(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function l(v,y){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function h(v){const y=d();v.__bindingPointIndex=y;const M=o.createBuffer(),A=v.__size,b=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,M),o.bufferData(o.UNIFORM_BUFFER,A,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],M=v.uniforms,A=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let b=0,T=M.length;b<T;b++){const D=Array.isArray(M[b])?M[b]:[M[b]];for(let z=0,x=D.length;z<x;z++){const w=D[z];if(f(w,b,z,A)===!0){const B=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let R=0;for(let U=0;U<F.length;U++){const P=F[U],$=_(P);typeof P=="number"||typeof P=="boolean"?(w.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,B+R,w.__data)):P.isMatrix3?(w.__data[0]=P.elements[0],w.__data[1]=P.elements[1],w.__data[2]=P.elements[2],w.__data[3]=0,w.__data[4]=P.elements[3],w.__data[5]=P.elements[4],w.__data[6]=P.elements[5],w.__data[7]=0,w.__data[8]=P.elements[6],w.__data[9]=P.elements[7],w.__data[10]=P.elements[8],w.__data[11]=0):(P.toArray(w.__data,R),R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,B,w.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,y,M,A){const b=v.value,T=y+"_"+M;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const D=A[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return A[T]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(v){const y=v.uniforms;let M=0;const A=16;for(let T=0,D=y.length;T<D;T++){const z=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,w=z.length;x<w;x++){const B=z[x],F=Array.isArray(B.value)?B.value:[B.value];for(let R=0,U=F.length;R<U;R++){const P=F[R],$=_(P),k=M%A;k!==0&&A-k<$.boundary&&(M+=A-k),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=$.storage}}}const b=M%A;return b>0&&(M+=A-b),v.__size=M,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Sh{constructor(e={}){const{canvas:t=ld(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const y=this;let M=!1,A=0,b=0,T=null,D=-1,z=null;const x=new st,w=new st;let B=null;const F=new Ue(0);let R=0,U=t.width,P=t.height,$=1,k=null,W=null;const Z=new st(0,0,U,P),J=new st(0,0,U,P);let K=!1;const me=new Jo;let j=!1,Q=!1,ue=null;const Ee=new We,Ce=new Re,_e=new O,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?$:1}let G=n;function xt(C,H){for(let q=0;q<C.length;q++){const Y=C[q],X=t.getContext(Y,H);if(X!==null)return X}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",se,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&H.shift(),G=xt(H,C),G===null)throw xt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,Pe,ye,rt,Fe,L,S,V,re,ee,ie,ve,ce,ge,Ae,Oe,te,Je,ke,Ie,Se,de,ze,N;function oe(){be=new Am(G),Pe=new Mm(G,be,e),be.init(Pe),de=new d_(G,be,Pe),ye=new h_(G,be,Pe),rt=new Lm(G),Fe=new $g,L=new u_(G,be,ye,Fe,Pe,de,rt),S=new Sm(y),V=new wm(y),re=new Od(G,Pe),ze=new xm(G,be,re,Pe),ee=new Rm(G,re,rt,ze),ie=new Dm(G,ee,re,rt),ke=new Nm(G,Pe,L),Oe=new Em(Fe),ve=new Kg(y,S,V,be,Pe,ze,Oe),ce=new x_(y,Fe),ge=new Jg,Ae=new s_(be,Pe),Je=new vm(y,S,V,ye,ie,u,c),te=new l_(y,ie,Pe),N=new y_(G,rt,Pe,ye),Ie=new ym(G,be,rt,Pe),Se=new Cm(G,be,rt,Pe),rt.programs=ve.programs,y.capabilities=Pe,y.extensions=be,y.properties=Fe,y.renderLists=ge,y.shadowMap=te,y.state=ye,y.info=rt}oe();const le=new v_(y,G);this.xr=le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(U,P,!1))},this.getSize=function(C){return C.set(U,P)},this.setSize=function(C,H,q=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,P=H,t.width=Math.floor(C*$),t.height=Math.floor(H*$),q===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(U*$,P*$).floor()},this.setDrawingBufferSize=function(C,H,q){U=C,P=H,$=q,t.width=Math.floor(C*q),t.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,H,q,Y){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,H,q,Y),ye.viewport(x.copy(Z).multiplyScalar($).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,H,q,Y){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,H,q,Y),ye.scissor(w.copy(J).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){ye.setScissorTest(K=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,H=!0,q=!0){let Y=0;if(C){let X=!1;if(T!==null){const fe=T.texture.format;X=fe===Ql||fe===Jl||fe===Zl}if(X){const fe=T.texture.type,Me=fe===Zn||fe===jn||fe===Yo||fe===pi||fe===Kl||fe===$l,Le=Je.getClearColor(),Ne=Je.getClearAlpha(),Ve=Le.r,Be=Le.g,He=Le.b;Me?(f[0]=Ve,f[1]=Be,f[2]=He,f[3]=Ne,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=Ve,g[1]=Be,g[2]=He,g[3]=Ne,G.clearBufferiv(G.COLOR,0,g))}else Y|=G.COLOR_BUFFER_BIT}H&&(Y|=G.DEPTH_BUFFER_BIT),q&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ge.dispose(),Ae.dispose(),Fe.dispose(),S.dispose(),V.dispose(),ie.dispose(),ze.dispose(),N.dispose(),ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ct),le.removeEventListener("sessionend",Ze),ue&&(ue.dispose(),ue=null),dt.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=rt.autoReset,H=te.enabled,q=te.autoUpdate,Y=te.needsUpdate,X=te.type;oe(),rt.autoReset=C,te.enabled=H,te.autoUpdate=q,te.needsUpdate=Y,te.type=X}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const H=C.target;H.removeEventListener("dispose",ne),xe(H)}function xe(C){we(C),Fe.remove(C)}function we(C){const H=Fe.get(C).programs;H!==void 0&&(H.forEach(function(q){ve.releaseProgram(q)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,Y,X,fe){H===null&&(H=Ke);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Le=Wh(C,H,q,Y,X);ye.setMaterial(Y,Me);let Ne=q.index,Ve=1;if(Y.wireframe===!0){if(Ne=ee.getWireframeAttribute(q),Ne===void 0)return;Ve=2}const Be=q.drawRange,He=q.attributes.position;let ft=Be.start*Ve,Vt=(Be.start+Be.count)*Ve;fe!==null&&(ft=Math.max(ft,fe.start*Ve),Vt=Math.min(Vt,(fe.start+fe.count)*Ve)),Ne!==null?(ft=Math.max(ft,0),Vt=Math.min(Vt,Ne.count)):He!=null&&(ft=Math.max(ft,0),Vt=Math.min(Vt,He.count));const Tt=Vt-ft;if(Tt<0||Tt===1/0)return;ze.setup(X,Y,Le,q,Ne);let xn,ct=Ie;if(Ne!==null&&(xn=re.get(Ne),ct=Se,ct.setIndex(xn)),X.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*De()),ct.setMode(G.LINES)):ct.setMode(G.TRIANGLES);else if(X.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*De()),X.isLineSegments?ct.setMode(G.LINES):X.isLineLoop?ct.setMode(G.LINE_LOOP):ct.setMode(G.LINE_STRIP)}else X.isPoints?ct.setMode(G.POINTS):X.isSprite&&ct.setMode(G.TRIANGLES);if(X.isBatchedMesh)ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ct.renderInstances(ft,Tt,X.count);else if(q.isInstancedBufferGeometry){const Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ur=Math.min(q.instanceCount,Xe);ct.renderInstances(ft,Tt,Ur)}else ct.render(ft,Tt)};function $e(C,H,q){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=kt,C.needsUpdate=!0,Ds(C,H,q),C.side=Un,C.needsUpdate=!0,Ds(C,H,q),C.side=dn):Ds(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),p=Ae.get(q),p.init(),v.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(y._useLegacyLights);const Y=new Set;return C.traverse(function(X){const fe=X.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Le=fe[Me];$e(Le,q,X),Y.add(Le)}else $e(fe,q,X),Y.add(fe)}),v.pop(),p=null,Y},this.compileAsync=function(C,H,q=null){const Y=this.compile(C,H,q);return new Promise(X=>{function fe(){if(Y.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){X(C);return}setTimeout(fe,10)}be.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let je=null;function it(C){je&&je(C)}function Ct(){dt.stop()}function Ze(){dt.start()}const dt=new gh;dt.setAnimationLoop(it),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(C){je=C,le.setAnimationLoop(C),C===null?dt.stop():dt.start()},le.addEventListener("sessionstart",Ct),le.addEventListener("sessionend",Ze),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,H,T),p=Ae.get(C,v.length),p.init(),v.push(p),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),me.setFromProjectionMatrix(Ee),Q=this.localClippingEnabled,j=Oe.init(this.clippingPlanes,Q),_=ge.get(C,m.length),_.init(),m.push(_),Dt(C,H,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(k,W),this.info.render.frame++,j===!0&&Oe.beginShadows();const q=p.state.shadowsArray;if(te.render(q,C,H),j===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Je.render(_,C),p.setupLights(y._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let X=0,fe=Y.length;X<fe;X++){const Me=Y[X];ma(_,C,Me,Me.viewport)}}else ma(_,C,H);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(y,C,H),ze.resetDefaultState(),D=-1,z=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Dt(C,H,q,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||me.intersectsSprite(C)){Y&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ee);const Me=ie.update(C),Le=C.material;Le.visible&&_.push(C,Me,Le,q,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||me.intersectsObject(C))){const Me=ie.update(C),Le=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),_e.copy(Me.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(Ee)),Array.isArray(Le)){const Ne=Me.groups;for(let Ve=0,Be=Ne.length;Ve<Be;Ve++){const He=Ne[Ve],ft=Le[He.materialIndex];ft&&ft.visible&&_.push(C,Me,ft,q,_e.z,He)}}else Le.visible&&_.push(C,Me,Le,q,_e.z,null)}}const fe=C.children;for(let Me=0,Le=fe.length;Me<Le;Me++)Dt(fe[Me],H,q,Y)}function ma(C,H,q,Y){const X=C.opaque,fe=C.transmissive,Me=C.transparent;p.setupLightsView(q),j===!0&&Oe.setGlobalState(y.clippingPlanes,q),fe.length>0&&Vh(X,fe,H,q),Y&&ye.viewport(x.copy(Y)),X.length>0&&Ns(X,H,q),fe.length>0&&Ns(fe,H,q),Me.length>0&&Ns(Me,H,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Vh(C,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const fe=Pe.isWebGL2;ue===null&&(ue=new vi(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Nn:Zn,minFilter:pn,samples:fe?4:0})),y.getDrawingBufferSize(Ce),fe?ue.setSize(Ce.x,Ce.y):ue.setSize(br(Ce.x),br(Ce.y));const Me=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(F),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();const Le=y.toneMapping;y.toneMapping=$n,Ns(C,q,Y),L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue);let Ne=!1;for(let Ve=0,Be=H.length;Ve<Be;Ve++){const He=H[Ve],ft=He.object,Vt=He.geometry,Tt=He.material,xn=He.group;if(Tt.side===dn&&ft.layers.test(Y.layers)){const ct=Tt.side;Tt.side=kt,Tt.needsUpdate=!0,ga(ft,q,Y,Vt,Tt,xn),Tt.side=ct,Tt.needsUpdate=!0,Ne=!0}}Ne===!0&&(L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue)),y.setRenderTarget(Me),y.setClearColor(F,R),y.toneMapping=Le}function Ns(C,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,fe=C.length;X<fe;X++){const Me=C[X],Le=Me.object,Ne=Me.geometry,Ve=Y===null?Me.material:Y,Be=Me.group;Le.layers.test(q.layers)&&ga(Le,H,q,Ne,Ve,Be)}}function ga(C,H,q,Y,X,fe){C.onBeforeRender(y,H,q,Y,X,fe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(y,H,q,Y,C,fe),X.transparent===!0&&X.side===dn&&X.forceSinglePass===!1?(X.side=kt,X.needsUpdate=!0,y.renderBufferDirect(q,H,Y,X,C,fe),X.side=Un,X.needsUpdate=!0,y.renderBufferDirect(q,H,Y,X,C,fe),X.side=dn):y.renderBufferDirect(q,H,Y,X,C,fe),C.onAfterRender(y,H,q,Y,X,fe)}function Ds(C,H,q){H.isScene!==!0&&(H=Ke);const Y=Fe.get(C),X=p.state.lights,fe=p.state.shadowsArray,Me=X.state.version,Le=ve.getParameters(C,X.state,fe,H,q),Ne=ve.getProgramCacheKey(Le);let Ve=Y.programs;Y.environment=C.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(C.isMeshStandardMaterial?V:S).get(C.envMap||Y.environment),Ve===void 0&&(C.addEventListener("dispose",ne),Ve=new Map,Y.programs=Ve);let Be=Ve.get(Ne);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Me)return va(C,Le),Be}else Le.uniforms=ve.getUniforms(C),C.onBuild(q,Le,y),C.onBeforeCompile(Le,y),Be=ve.acquireProgram(Le,Ne),Ve.set(Ne,Be),Y.uniforms=Le.uniforms;const He=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Oe.uniform),va(C,Le),Y.needsLights=qh(C),Y.lightsStateVersion=Me,Y.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function _a(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=_r.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function va(C,H){const q=Fe.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Wh(C,H,q,Y,X){H.isScene!==!0&&(H=Ke),L.resetTextureUnits();const fe=H.fog,Me=Y.isMeshStandardMaterial?H.environment:null,Le=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mt,Ne=(Y.isMeshStandardMaterial?V:S).get(Y.envMap||Me),Ve=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,Vt=!!q.morphAttributes.color;let Tt=$n;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const xn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=xn!==void 0?xn.length:0,Xe=Fe.get(Y),Ur=p.state.lights;if(j===!0&&(Q===!0||C!==z)){const Kt=C===z&&Y.id===D;Oe.setState(Y,C,Kt)}let ht=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ur.state.version||Xe.outputColorSpace!==Le||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||Xe.envMap!==Ne||Y.fog===!0&&Xe.fog!==fe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Oe.numPlanes||Xe.numIntersection!==Oe.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==Be||Xe.morphTargets!==He||Xe.morphNormals!==ft||Xe.morphColors!==Vt||Xe.toneMapping!==Tt||Pe.isWebGL2===!0&&Xe.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,Xe.__version=Y.version);let ei=Xe.currentProgram;ht===!0&&(ei=Ds(Y,H,X));let xa=!1,cs=!1,Fr=!1;const Lt=ei.getUniforms(),ti=Xe.uniforms;if(ye.useProgram(ei.program)&&(xa=!0,cs=!0,Fr=!0),Y.id!==D&&(D=Y.id,cs=!0),xa||z!==C){Lt.setValue(G,"projectionMatrix",C.projectionMatrix),Lt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Kt=Lt.map.cameraPosition;Kt!==void 0&&Kt.setValue(G,_e.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,cs=!0,Fr=!0)}if(X.isSkinnedMesh){Lt.setOptional(G,X,"bindMatrix"),Lt.setOptional(G,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(Pe.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Lt.setValue(G,"boneTexture",Kt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Lt.setOptional(G,X,"batchingTexture"),Lt.setValue(G,"batchingTexture",X._matricesTexture,L));const Or=q.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&Pe.isWebGL2===!0)&&ke.update(X,q,ei),(cs||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Lt.setValue(G,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ti.envMap.value=Ne,ti.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),cs&&(Lt.setValue(G,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&Xh(ti,Fr),fe&&Y.fog===!0&&ce.refreshFogUniforms(ti,fe),ce.refreshMaterialUniforms(ti,Y,$,P,ue),_r.upload(G,_a(Xe),ti,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_r.upload(G,_a(Xe),ti,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(G,"center",X.center),Lt.setValue(G,"modelViewMatrix",X.modelViewMatrix),Lt.setValue(G,"normalMatrix",X.normalMatrix),Lt.setValue(G,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Kt=Y.uniformsGroups;for(let Br=0,jh=Kt.length;Br<jh;Br++)if(Pe.isWebGL2){const ya=Kt[Br];N.update(ya,ei),N.bind(ya,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Xh(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function qh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,H,q){Fe.get(C.texture).__webglTexture=H,Fe.get(C.depthTexture).__webglTexture=q;const Y=Fe.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const q=Fe.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,q=0){T=C,A=H,b=q;let Y=!0,X=null,fe=!1,Me=!1;if(C){const Ne=Fe.get(C);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ne.__hasExternalTextures&&L.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const Be=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?X=Be[H][q]:X=Be[H],fe=!0):Pe.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?X=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[q]:X=Be,x.copy(C.viewport),w.copy(C.scissor),B=C.scissorTest}else x.copy(Z).multiplyScalar($).floor(),w.copy(J).multiplyScalar($).floor(),B=K;if(ye.bindFramebuffer(G.FRAMEBUFFER,X)&&Pe.drawBuffers&&Y&&ye.drawBuffers(C,X),ye.viewport(x),ye.scissor(w),ye.setScissorTest(B),fe){const Ne=Fe.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,q)}else if(Me){const Ne=Fe.get(C.texture),Ve=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,Ve)}D=-1},this.readRenderTargetPixels=function(C,H,q,Y,X,fe,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){ye.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ne=C.texture,Ve=Ne.format,Be=Ne.type;if(Ve!==qt&&de.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Nn&&(be.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&be.has("EXT_color_buffer_float"));if(Be!==Zn&&de.convert(Be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Gt&&(Pe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-X&&G.readPixels(H,q,Y,X,de.convert(Ve),de.convert(Be),fe)}finally{const Ne=T!==null?Fe.get(T).__webglFramebuffer:null;ye.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,H,q=0){const Y=Math.pow(2,-q),X=Math.floor(H.image.width*Y),fe=Math.floor(H.image.height*Y);L.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,C.x,C.y,X,fe),ye.unbindTexture()},this.copyTextureToTexture=function(C,H,q,Y=0){const X=H.image.width,fe=H.image.height,Me=de.convert(q.format),Le=de.convert(q.type);L.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,X,fe,Me,Le,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,Me,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,Me,Le,H.image),Y===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,H,q,Y,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=C.max.x-C.min.x+1,Me=C.max.y-C.min.y+1,Le=C.max.z-C.min.z+1,Ne=de.convert(Y.format),Ve=de.convert(Y.type);let Be;if(Y.isData3DTexture)L.setTexture3D(Y,0),Be=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)L.setTexture2DArray(Y,0),Be=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),ft=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vt=G.getParameter(G.UNPACK_SKIP_PIXELS),Tt=G.getParameter(G.UNPACK_SKIP_ROWS),xn=G.getParameter(G.UNPACK_SKIP_IMAGES),ct=q.isCompressedTexture?q.mipmaps[X]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Be,X,H.x,H.y,H.z,fe,Me,Le,Ne,Ve,ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Be,X,H.x,H.y,H.z,fe,Me,Le,Ne,ct.data)):G.texSubImage3D(Be,X,H.x,H.y,H.z,fe,Me,Le,Ne,Ve,ct),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xn),X===0&&Y.generateMipmaps&&G.generateMipmap(Be),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){A=0,b=0,T=null,ye.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$o?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?gi:nh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gi?ut:Mt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class M_ extends Sh{}M_.prototype.isWebGL1Renderer=!0;class E_ extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class S_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _i("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new O;class ta{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qc=new O,jc=new st,Yc=new st,T_=new O,Kc=new We,ir=new O,mo=new gn,$c=new We,go=new As;class b_ extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ra,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingBox.expandByPoint(ir)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingSphere.expandByPoint(ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),e.ray.intersectsSphere(mo)!==!1&&($c.copy(i).invert(),go.copy(e.ray).applyMatrix4($c),!(this.boundingBox!==null&&go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ra?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ru?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jc.fromBufferAttribute(i.attributes.skinIndex,e),Yc.fromBufferAttribute(i.attributes.skinWeight,e),qc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Yc.getComponent(s);if(r!==0){const a=jc.getComponent(s);Kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(T_.copy(qc).applyMatrix4(Kc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Th extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class na extends Rt{constructor(e=null,t=1,n=1,i,s,r,a,c,l=wt,h=wt,d,u){super(null,r,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new We,w_=new We;class ia{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:w_;Zc.multiplyMatrices(a,t[s]),Zc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new na(t,e,e,qt,Gt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Th),this.bones.push(r),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ko extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new We,Jc=new We,sr=[],Qc=new Fn,A_=new We,fs=new At,ps=new gn;class bh extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Qc.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Qc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),ps.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Hi),Jc.multiplyMatrices(n,Hi),fs.matrixWorld=Jc,fs.raycast(e,sr);for(let r=0,a=sr.length;r<a;r++){const c=sr[r];c.instanceId=s,c.object=this,t.push(c)}sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new O,tl=new O,nl=new We,_o=new As,rr=new gn;class Pr extends lt{constructor(e=new jt,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=s,e.ray.intersectsSphere(rr)===!1)return;nl.copy(i).invert(),_o.copy(e.ray).applyMatrix4(nl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,h=new O,d=new O,u=new O,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let y=m,M=v-1;y<M;y+=f){const A=g.getX(y),b=g.getX(y+1);if(l.fromBufferAttribute(p,A),h.fromBufferAttribute(p,b),_o.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),v=Math.min(p.count,r.start+r.count);for(let y=m,M=v-1;y<M;y+=f){if(l.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),_o.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const il=new O,sl=new O;class R_ extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)il.fromBufferAttribute(t,i),sl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(sl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rl=new We,Vo=new As,or=new gn,ar=new O;class L_ extends lt{constructor(e=new jt,t=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=s,e.ray.intersectsSphere(or)===!1)return;rl.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(rl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=u,_=f;g<_;g++){const p=l.getX(g);ar.fromBufferAttribute(d,p),ol(ar,p,c,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,_=f;g<_;g++)ar.fromBufferAttribute(d,g),ol(ar,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(o,e,t,n,i,s,r){const a=Vo.distanceSqToPoint(o);if(a<t){const c=new O;Vo.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class P_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),c=t||(r.isVector2?new Re:new O);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,i=[],s=[],r=[],a=new O,c=new We;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new O)}s[0]=new O,r[0]=new O;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(_t(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function ra(){let o=0,e=0,t=0,n=0;function i(s,r,a,c){o=s,e=a,t=-3*s+3*r-2*a-c,n=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){i(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,h,d){let u=(r-s)/l-(a-s)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const cr=new O,vo=new ra,xo=new ra,yo=new ra;class I_ extends P_{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(cr.subVectors(i[0],i[1]).add(i[0]),l=cr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(cr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),vo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,p),xo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,p),yo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),xo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),yo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(vo.calc(c),xo.calc(c),yo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class oa extends jt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function v(){const M=new O,A=new O;let b=0;const T=(t-e)/n;for(let D=0;D<=s;D++){const z=[],x=D/s,w=x*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,R=F*c+a,U=Math.sin(R),P=Math.cos(R);A.x=w*U,A.y=-x*n+p,A.z=w*P,d.push(A.x,A.y,A.z),M.set(U,T,P).normalize(),u.push(M.x,M.y,M.z),f.push(F,1-x),z.push(g++)}_.push(z)}for(let D=0;D<i;D++)for(let z=0;z<s;z++){const x=_[z][D],w=_[z+1][D],B=_[z+1][D+1],F=_[z][D+1];h.push(x,w,F),h.push(w,B,F),b+=6}l.addGroup(m,b,0),m+=b}function y(M){const A=g,b=new Re,T=new O;let D=0;const z=M===!0?e:t,x=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*x,0),u.push(0,x,0),f.push(.5,.5),g++;const w=g;for(let B=0;B<=i;B++){const R=B/i*c+a,U=Math.cos(R),P=Math.sin(R);T.x=z*P,T.y=p*x,T.z=z*U,d.push(T.x,T.y,T.z),u.push(0,x,0),b.x=U*.5+.5,b.y=P*.5*x+.5,f.push(b.x,b.y),g++}for(let B=0;B<i;B++){const F=A+B,R=w+B;M===!0?h.push(R,R+1,F):h.push(R+1,R,F),D+=3}l.addGroup(m,D,M===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends jt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new O,u=new O,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let M=0;m===0&&r===0?M=.5/t:m===n&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const b=A/t;d.x=-e*Math.cos(i+b*s)*Math.sin(r+y*a),d.y=e*Math.cos(r+y*a),d.z=e*Math.sin(i+b*s)*Math.sin(r+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(b+M,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=h[m][v+1],M=h[m][v],A=h[m+1][v],b=h[m+1][v+1];(m!==0||r>0)&&f.push(y,M,b),(m!==n-1||c<Math.PI)&&f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cs extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _n extends Cs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wo extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function lr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function N_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function D_(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function al(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[r++]=o[a+c]}return i}function Ah(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Ls{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class U_ extends Ls{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case tc:s=e,a=2*t-n;break;case nc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tc:r=e,c=2*n-t;break;case nc:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let A=0;A!==a;++A)s[A]=m*r[h+A]+v*r[l+A]+y*r[c+A]+M*r[d+A];return s}}class F_ extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=r[l+u]*d+r[c+u]*h;return s}}class O_ extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new O_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new F_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new U_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Qi:t=this.InterpolantFactoryMethodLinear;break;case Wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Qi;case this.InterpolantFactoryMethodSmooth:return Wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),e=!1;break}r=c}if(i!==void 0&&N_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==r){e[r]=e[a];const d=a*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[a+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Qi;class os extends vn{}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=bs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class Rh extends vn{}Rh.prototype.ValueTypeName="color";class ns extends vn{}ns.prototype.ValueTypeName="number";class B_ extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)mn.slerpFlat(s,0,r,l-a,r,l,c);return s}}class xi extends vn{InterpolantFactoryMethodLinear(e){return new B_(this.times,this.values,this.getValueSize(),e)}}xi.prototype.ValueTypeName="quaternion";xi.prototype.DefaultInterpolation=Qi;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends vn{}as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=bs;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends vn{}is.prototype.ValueTypeName="vector";class z_{constructor(e,t=-1,n,i=Ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(G_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(vn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=D_(c);c=al(c,1,h),l=al(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new ns(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const p=[],m=[];Ah(f,p,m,g),p.length!==0&&_.push(new d(u,p,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==u[g].morphTargets.length;++v){const y=u[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",p,m))}c=f.length*r}else{const f=".bones["+t[d].name+"]";n(is,f+".position",u,"pos",i),n(xi,f+".quaternion",u,"rot",i),n(is,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return is;case"color":return Rh;case"quaternion":return xi;case"bool":case"boolean":return os;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function G_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H_(o.type);if(o.times===void 0){const t=[],n=[];Ah(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Yn={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class k_{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const V_=new k_;class Mi{constructor(e){this.manager=e!==void 0?e:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class W_ extends Error{constructor(e,t){super(e),this.response=t}}class aa extends Mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:n,onError:i});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=bn[e],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){d.read().then(({done:y,value:M})=>{if(y)m.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,T=h.length;b<T;b++){const D=h[b];D.onProgress&&D.onProgress(A)}m.enqueue(M),v()}})}}});return new Response(p)}else throw new W_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Yn.add(e,l);const h=bn[e];delete bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class X_ extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Yn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=ws("img");function c(){h(),Yn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class q_ extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new na,a=new aa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?r.image=l.image:l.data!==void 0&&(r.image.width=l.width,r.image.height=l.height,r.image.data=l.data),r.wrapS=l.wrapS!==void 0?l.wrapS:Nt,r.wrapT=l.wrapT!==void 0?l.wrapT:Nt,r.magFilter=l.magFilter!==void 0?l.magFilter:pt,r.minFilter=l.minFilter!==void 0?l.minFilter:pt,r.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?r.colorSpace=l.colorSpace:l.encoding!==void 0&&(r.encoding=l.encoding),l.flipY!==void 0&&(r.flipY=l.flipY),l.format!==void 0&&(r.format=l.format),l.type!==void 0&&(r.type=l.type),l.mipmaps!==void 0&&(r.mipmaps=l.mipmaps,r.minFilter=pn),l.mipmapCount===1&&(r.minFilter=pt),l.generateMipmaps!==void 0&&(r.generateMipmaps=l.generateMipmaps),r.needsUpdate=!0,t&&t(r,l)},n,i),r}}class j_ extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,r=new X_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ca extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Mo=new We,cl=new O,ll=new O;class la{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y_ extends la{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class K_ extends ca{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hl=new We,ms=new O,Eo=new O;class $_ extends la{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class Z_ extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class J_ extends la{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ss{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Q_ extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Yn.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Yn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Yn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Yn.add(e,c),s.manager.itemStart(e)}}class e0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ul(){return(typeof performance>"u"?Date:performance).now()}const ha="\\[\\]\\.:\\/",t0=new RegExp("["+ha+"]","g"),ua="[^"+ha+"]",n0="[^"+ha.replace("\\.","")+"]",i0=/((?:WC+[\/:])*)/.source.replace("WC",ua),s0=/(WCOD+)?/.source.replace("WCOD",n0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ua),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ua),a0=new RegExp("^"+i0+s0+r0+o0+"$"),c0=["material","materials","bones","map"];class l0{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(e){const t=a0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);c0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=l0;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);class rn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new E);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new E);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new rn);const n=this.elements,i=e.elements,s=t.elements,r=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],_=i[0],p=i[1],m=i[2],v=i[3],y=i[4],M=i[5],A=i[6],b=i[7],T=i[8];return s[0]=r*_+a*v+c*A,s[1]=r*p+a*y+c*b,s[2]=r*m+a*M+c*T,s[3]=l*_+h*v+d*A,s[4]=l*p+h*y+d*b,s[5]=l*m+h*M+d*T,s[6]=u*_+f*v+g*A,s[7]=u*p+f*y+g*b,s[8]=u*m+f*M+g*T,t}scale(e,t){t===void 0&&(t=new rn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new E);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const l=c;let h;const d=4;let u;do{if(r=l-c,s[r+i*r]===0){for(a=r+1;a<l;a++)if(s[r+i*a]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*a];while(--h);break}}if(s[r+i*r]!==0)for(a=r+1;a<l;a++){const f=s[r+i*a]/s[r+i*r];h=d;do u=d-h,s[u+i*a]=u<=r?0:s[u+i*a]-s[u+i*r]*f;while(--h)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new rn);const t=3,n=6,i=h0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(r=s+1;r<c;r++)if(i[s+n*r]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<c;r++){const u=i[s+n*r]/i[s+n*s];l=h;do d=h-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--l)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,c=i+i,l=t*r,h=t*a,d=t*c,u=n*a,f=n*c,g=i*c,_=s*r,p=s*a,m=s*c,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-m,v[3*0+2]=d+p,v[3*1+0]=h+m,v[3*1+1]=1-(l+g),v[3*1+2]=f-_,v[3*2+0]=d-p,v[3*2+1]=f+_,v[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new rn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const h0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z;return t.x=a*s-c*i,t.y=c*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new E(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new E(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new E);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new E);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new E),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new E),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new E),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=u0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=d0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(fl),fl.almostEquals(e,t)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const u0=new E,d0=new E,fl=new E;class Yt{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,pl),l=pl),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Yt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=ml,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=ml,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}}const pl=new E,ml=[new E,new E,new E,new E,new E,new E,new E,new E];class gl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Lh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class vt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=f0,i=p0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new vt);const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+r*a+i*l-s*c,t.y=i*h+r*c+s*a-n*l,t.z=s*h+r*l+n*c-i*a,t.w=r*h-n*a-i*c-s*l,t}inverse(e){e===void 0&&(e=new vt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new vt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-r*s,u=l*s+r*i-a*n,f=-r*n-a*i-c*s;return t.x=h*l+f*-r+d*-c-u*-a,t.y=d*l+f*-a+u*-r-h*-c,t.z=u*l+f*-c+h*-a-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=r*a+c*l;if(h>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*r*a+s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a-c*l*h):i==="YXZ"?(this.x=c*r*a+s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a+c*l*h):i==="ZXY"?(this.x=c*r*a-s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a-c*l*h):i==="ZYX"?(this.x=c*r*a-s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a+c*l*h):i==="YZX"?(this.x=c*r*a+s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a-c*l*h):i==="XZY"&&(this.x=c*r*a-s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a+c*l*h),this}clone(){return new vt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new vt);const i=this.x,s=this.y,r=this.z,a=this.w;let c=e.x,l=e.y,h=e.z,d=e.w,u,f,g,_,p;return f=i*c+s*l+r*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),_=Math.sin((1-t)*u)/g,p=Math.sin(t*u)/g):(_=1-t,p=t),n.x=_*i+p*c,n.y=_*s+p*l,n.z=_*r+p*h,n.w=_*a+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new vt);const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+r*h-a*l),i.y+=u*(r*d+a*c-s*h),i.z+=u*(a*d+s*l-r*c),i.w+=u*(-s*c-r*l-a*h),i}}const f0=new E,p0=new E,m0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pe{constructor(e){e===void 0&&(e={}),this.id=pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pe.idCounter=0;pe.types=m0;class Qe{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new vt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Qe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Qe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),n.vsub(e,i),t.conjugate(_l),_l.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new E),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new E),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const _l=new vt;class Ts extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;t[r[c]].vsub(t[r[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new E;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Ts.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new E,r=new E;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,a,c,l){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(r);_>u&&(u=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new E;p.copy(_),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(r,e,t,f,a,c,l)}findSeparatingAxis(e,t,n,i,s,r,a,c){const l=new E,h=new E,d=new E,u=new E,f=new E,g=new E;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);const v=p.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(l))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const y=a?a[v]:v;l.copy(p.faceNormals[y]),n.vmult(l,l);const M=p.testSepAxis(l,e,t,n,i,s);if(M===!1)return!1;M<_&&(_=M,r.copy(l))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){s.vmult(e.uniqueAxes[m],h);const v=p.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(h))}else{const m=c?c.length:e.faces.length;for(let v=0;v<m;v++){const y=c?c[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const M=p.testSepAxis(h,e,t,n,i,s);if(M===!1)return!1;M<_&&(_=M,r.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();const y=p.testSepAxis(g,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;Ts.project(a,e,n,i,So),Ts.project(t,e,s,r,To);const c=So[0],l=So[1],h=To[0],d=To[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(e,t){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const c=new E,l=new E,h=new E,d=new E,u=new E,f=new E,g=new E,_=new E,p=this,m=[],v=i,y=m;let M=-1,A=Number.MAX_VALUE;for(let x=0;x<p.faces.length;x++){c.copy(p.faceNormals[x]),n.vmult(c,c);const w=c.dot(e);w<A&&(A=w,M=x)}if(M<0)return;const b=p.faces[M];b.connectedFaces=[];for(let x=0;x<p.faces.length;x++)for(let w=0;w<p.faces[x].length;w++)b.indexOf(p.faces[x][w])!==-1&&x!==M&&b.connectedFaces.indexOf(x)===-1&&b.connectedFaces.push(x);const T=b.length;for(let x=0;x<T;x++){const w=p.vertices[b[x]],B=p.vertices[b[(x+1)%T]];w.vsub(B,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(w),n.vmult(f,f),t.vadd(f,f);const F=b.connectedFaces[x];g.copy(this.faceNormals[F]);const R=this.getPlaneConstantOfFace(F);_.copy(g),n.vmult(_,_);const U=R-_.dot(t);for(this.clipFaceAgainstPlane(v,y,_,U);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[M]);const D=this.getPlaneConstantOfFace(M);_.copy(g),n.vmult(_,_);const z=D-_.dot(t);for(let x=0;x<v.length;x++){let w=_.dot(v[x])+z;if(w<=s&&(console.log(`clamped: depth=${w} to minDist=${s}`),w=s),w<=r){const B=v[x];if(w<=1e-6){const F={point:B,normal:_,depth:w};a.push(F)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],r=n.dot(l)+i,s<0)if(r<0){const d=new E;d.copy(l),t.push(d)}else{const d=new E;c.lerp(l,s/(s-r),d),t.push(d)}else if(r<0){const d=new E;c.lerp(l,s/(s-r),d),t.push(d),t.push(l)}c=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,c,l,h,d,u=new E;for(let f=0;f<s.length;f++){u.copy(s[f]),t.vmult(u,u),e.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new E;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let c=i[a];const l=t[n[a][0]],h=new E;e.vsub(l,h);const d=c.dot(h),u=new E;r.vsub(l,u);const f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,a=g0;let c=0,l=0;const h=_0,d=e.vertices;h.setZero(),Qe.vectorToLocalFrame(n,i,t,a),Qe.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const So=[],To=[];new E;const g0=new E,_0=new E;class Nr extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Ts({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new E),Nr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Vn.set(s[r][0],s[r][1],s[r][2]),t.vmult(Vn,Vn),e.vadd(Vn,Vn),n(Vn.x,Vn.y,Vn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;cn[0].set(s.x,s.y,s.z),cn[1].set(-s.x,s.y,s.z),cn[2].set(-s.x,-s.y,s.z),cn[3].set(-s.x,-s.y,-s.z),cn[4].set(s.x,-s.y,-s.z),cn[5].set(s.x,s.y,-s.z),cn[6].set(-s.x,s.y,-s.z),cn[7].set(s.x,-s.y,s.z);const r=cn[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const c=cn[a];t.vmult(c,c),e.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Vn=new E,cn=[new E,new E,new E,new E,new E,new E,new E,new E],da={DYNAMIC:1,STATIC:2,KINEMATIC:4},fa={AWAKE:0,SLEEPY:1,SLEEPING:2};class he extends Lh{constructor(e){e===void 0&&(e={}),super(),this.id=he.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?he.STATIC:he.DYNAMIC,typeof e.type==typeof he.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=he.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new vt,this.initQuaternion=new vt,this.previousQuaternion=new vt,this.interpolatedQuaternion=new vt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new rn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new rn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Yt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=he.AWAKE,this.wakeUpAfterNarrowphase=!1,e===he.SLEEPING&&this.dispatchEvent(he.wakeupEvent)}sleep(){this.sleepState=he.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===he.AWAKE&&n<i?(this.sleepState=he.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(he.sleepyEvent)):t===he.SLEEPY&&n>i?this.wakeUp():t===he.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(he.sleepEvent))}}updateSolveMassProperties(){this.sleepState===he.SLEEPING||this.type===he.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new E),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new E),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new E,s=new vt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),c=r.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=v0,r=x0,a=this.quaternion,c=this.aabb,l=y0;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=M0,i=E0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new E),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=T0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new E),this.type!==he.DYNAMIC)return;const n=b0,i=w0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===he.DYNAMIC&&(this.sleepState===he.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new E),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=t,i=A0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=R0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new E),this.type!==he.DYNAMIC)return;const n=C0,i=L0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=P0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Nr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new E;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===he.DYNAMIC||this.type===he.KINEMATIC)||this.sleepState===he.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,_=this.angularFactor,p=c.x*_.x,m=c.y*_.y,v=c.z*_.z;s.x+=e*(g[0]*p+g[1]*m+g[2]*v),s.y+=e*(g[3]*p+g[4]*m+g[5]*v),s.z+=e*(g[6]*p+g[7]*m+g[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}he.idCounter=0;he.COLLIDE_EVENT_NAME="collide";he.DYNAMIC=da.DYNAMIC;he.STATIC=da.STATIC;he.KINEMATIC=da.KINEMATIC;he.AWAKE=fa.AWAKE;he.SLEEPY=fa.SLEEPY;he.SLEEPING=fa.SLEEPING;he.wakeupEvent={type:"wakeup"};he.sleepyEvent={type:"sleepy"};he.sleepEvent={type:"sleep"};const v0=new E,x0=new vt,y0=new Yt,M0=new rn,E0=new rn,S0=new rn,T0=new E,b0=new E,w0=new E,A0=new E,R0=new E,C0=new E,L0=new E,P0=new E;class I0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&he.STATIC||e.sleepState===he.SLEEPING)&&(t.type&he.STATIC||t.sleepState===he.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=N0;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=D0,i=U0,s=F0,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new E;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const N0=new E;new E;new vt;new E;const D0={keys:[]},U0=[],F0=[];new E;new E;new E;class Ph extends I0{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)r=i[c],a=i[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class wr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let Ih,Nh,Dh,Uh,Fh,Oh,Bh;const pa={CLOSEST:1,ANY:2,ALL:4};Ih=pe.types.SPHERE;Nh=pe.types.PLANE;Dh=pe.types.BOX;Uh=pe.types.CYLINDER;Fh=pe.types.CONVEXPOLYHEDRON;Oh=pe.types.HEIGHTFIELD;Bh=pe.types.TRIMESH;class gt{get[Ih](){return this._intersectSphere}get[Nh](){return this._intersectPlane}get[Dh](){return this._intersectBox}get[Uh](){return this._intersectConvex}get[Fh](){return this._intersectConvex}get[Oh](){return this._intersectHeightfield}get[Bh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new E),t===void 0&&(t=new E),this.from=e.clone(),this.to=t.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=gt.ANY,this.result=new wr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||gt.ANY,this.result=t.result||new wr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(vl),bo.length=0,e.broadphase.aabbQuery(e,vl,bo),this.intersectBodies(bo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=O0,s=B0;for(let r=0,a=e.shapes.length;r<a;r++){const c=e.shapes[r];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(J0(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,c=this.direction,l=new E(0,0,1);t.vmult(l,l);const h=new E;r.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||r.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new E,_=new E,p=new E;r.vsub(n,g);const m=-l.dot(g)/f;c.scale(m,_),r.vadd(_,p),this.reportIntersection(l,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=z0;r.from.copy(this.from),r.to.copy(this.to),Qe.pointToLocalFrame(n,t,r.from,r.from),Qe.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=H0;let c,l,h,d;c=l=0,h=d=e.data.length-1;const u=new Yt;r.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(r)){if(e.getConvexTrianglePillar(f,g,!1),Qe.pointToWorldFrame(n,t,e.pillarOffset,hr),this._intersectConvex(e.pillarConvex,t,hr,i,s,xl),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Qe.pointToWorldFrame(n,t,e.pillarOffset,hr),this._intersectConvex(e.pillarConvex,t,hr,i,s,xl)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,c=e.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,u=h**2-4*l*d,f=G0,g=k0;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(_>=0&&_<=1&&(r.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=V0,c=yl,l=r&&r.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=l?l.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<m;y++){const M=l?l[y]:y,A=h[M],b=u[M],T=t,D=n;c.copy(d[A[0]]),T.vmult(c,c),c.vadd(D,c),c.vsub(g,c),T.vmult(b,a);const z=f.dot(a);if(Math.abs(z)<this.precision)continue;const x=a.dot(c)/z;if(!(x<0)){f.scale(x,Ht),Ht.vadd(g,Ht),nn.copy(d[A[0]]),T.vmult(nn,nn),D.vadd(nn,nn);for(let w=1;!v.shouldStop&&w<A.length-1;w++){ln.copy(d[A[w]]),hn.copy(d[A[w+1]]),T.vmult(ln,ln),T.vmult(hn,hn),D.vadd(ln,ln),D.vadd(hn,hn);const B=Ht.distanceTo(g);!(gt.pointInTriangle(Ht,nn,ln,hn)||gt.pointInTriangle(Ht,ln,nn,hn))||B>p||this.reportIntersection(a,Ht,s,i,M)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=W0,c=$0,l=Z0,h=yl,d=X0,u=q0,f=j0,g=K0,_=Y0,p=e.indices;e.vertices;const m=this.from,v=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(t),Qe.vectorToLocalFrame(n,t,y,d),Qe.pointToLocalFrame(n,t,m,u),Qe.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let A=0,b=c.length;!this.result.shouldStop&&A!==b;A++){const T=c[A];e.getNormal(T,a),e.getVertex(p[T*3],nn),nn.vsub(u,h);const D=d.dot(a),z=a.dot(h)/D;if(z<0)continue;d.scale(z,Ht),Ht.vadd(u,Ht),e.getVertex(p[T*3+1],ln),e.getVertex(p[T*3+2],hn);const x=Ht.distanceSquared(u);!(gt.pointInTriangle(Ht,ln,nn,hn)||gt.pointInTriangle(Ht,nn,ln,hn))||x>M||(Qe.vectorToWorldFrame(t,a,_),Qe.pointToWorldFrame(n,t,Ht,g),this.reportIntersection(_,g,s,i,T))}c.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,c=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case gt.ALL:this.hasHit=!0,l.set(r,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case gt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c));break;case gt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,ui),n.vsub(t,gs),e.vsub(t,wo);const s=ui.dot(ui),r=ui.dot(gs),a=ui.dot(wo),c=gs.dot(gs),l=gs.dot(wo);let h,d;return(h=c*a-r*l)>=0&&(d=s*l-r*a)>=0&&h+d<s*c-r*r}}gt.CLOSEST=pa.CLOSEST;gt.ANY=pa.ANY;gt.ALL=pa.ALL;const vl=new Yt,bo=[],gs=new E,wo=new E,O0=new E,B0=new vt,Ht=new E,nn=new E,ln=new E,hn=new E;new E;new wr;const xl={faceList:[0]},hr=new E,z0=new gt,H0=[],G0=new E,k0=new E,V0=new E;new E;new E;const yl=new E,W0=new E,X0=new E,q0=new E,j0=new E,Y0=new E,K0=new E;new Yt;const $0=[],Z0=new Qe,ui=new E,ur=new E;function J0(o,e,t){t.vsub(o,ui);const n=ui.dot(e);return e.scale(n,ur),ur.vadd(o,ur),t.distanceTo(ur)}class zh{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Dr{constructor(e,t,n){n===void 0&&(n={}),n=zh.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=Dr.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}}Dr.idCounter=0;class Ml{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ps{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ps.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ml,this.jacobianElementB=new Ml,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,El),a.scale(h,Sl),n.invInertiaWorldSolve.vmult(r,Tl),i.invInertiaWorldSolve.vmult(c,bl),e.multiplyVectors(El,Tl)+t.multiplyVectors(Sl,bl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+r;return a.vmult(e.rotational,dr),l+=dr.dot(e.rotational),c.vmult(t.rotational,dr),l+=dr.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Q0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ps.idCounter=0;const El=new E,Sl=new E,Tl=new E,bl=new E,dr=new E,Q0=new E;class Hh extends Ps{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,c=ev,l=tv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=nv,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,c),a.cross(m,l),m.negate(_.spatial),c.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const v=m.dot(g),y=this.restitution+1,M=y*u.dot(m)-y*h.dot(m)+f.dot(l)-d.dot(c),A=this.computeGiMf();return-v*t-M*n-e*A}getImpactVelocityAlongNormal(){const e=iv,t=sv,n=rv,i=ov,s=av;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const ev=new E,tv=new E,nv=new E,iv=new E,sv=new E,rv=new E,ov=new E,av=new E;new E;new E;new E;new E;new E;new E;class wl extends Dr{constructor(e,t,n,i){i===void 0&&(i=1e6),super(e,t),typeof n>"u"&&(n=e.position.distanceTo(t.position)),this.distance=n;const s=this.distanceEquation=new Hh(e,t);this.equations.push(s),s.minForce=-i,s.maxForce=i}update(){const e=this.bodyA,t=this.bodyB,n=this.distanceEquation,i=this.distance*.5,s=n.ni;t.position.vsub(e.position,s),s.normalize(),s.scale(i,n.ri),s.scale(-i,n.rj)}}new E;new E;new E;new E;class Al extends Ps{constructor(e,t,n){super(e,t,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=cv,r=lv,a=this.t;n.cross(a,s),i.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const cv=new E,lv=new E;class Is{constructor(e,t,n){n=zh.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Is.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Is.idCounter=0;class Jn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Jn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Jn.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new gt;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Rl extends pe{constructor(e){if(super({type:pe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new E);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const c=r[a];n[c]=e[c]-s,i[c]=e[c]+s}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;class Cl extends pe{constructor(){super({type:pe.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new E),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){wn.set(0,0,1),t.vmult(wn,wn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),wn.x===1?i.x=e.x:wn.x===-1&&(n.x=e.x),wn.y===1?i.y=e.y:wn.y===-1&&(n.y=e.y),wn.z===1?i.z=e.z:wn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const wn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Yt;new E;new Yt;new E;new E;new E;new E;new E;new E;new E;new Yt;new E;new Qe;new Yt;class hv{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class uv extends hv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=t.bodies,l=c.length,h=e;let d,u,f,g,_,p;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const m=fv,v=pv,y=dv;m.length=a,v.length=a,y.length=a;for(let M=0;M!==a;M++){const A=r[M];y[M]=0,v[M]=A.computeB(h),m[M]=1/A.computeC()}if(a!==0){for(let b=0;b!==l;b++){const T=c[b],D=T.vlambda,z=T.wlambda;D.set(0,0,0),z.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const T=r[b];d=v[b],u=m[b],p=y[b],_=T.computeGWlambda(),f=u*(d-_-T.eps*p),p+f<T.minForce?f=T.minForce-p:p+f>T.maxForce&&(f=T.maxForce-p),y[b]+=f,g+=f>0?f:-f,T.addToWlambda(f)}if(g*g<s)break}for(let b=0;b!==l;b++){const T=c[b],D=T.velocity,z=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),D.vadd(T.vlambda,D),T.wlambda.vmul(T.angularFactor,T.wlambda),z.vadd(T.wlambda,z)}let M=r.length;const A=1/h;for(;M--;)r[M].multiplier=y[M]*A}return n}}const dv=[],fv=[],pv=[];he.STATIC;class mv{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class gv extends mv{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const ot={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class _v{get[ot.sphereSphere](){return this.sphereSphere}get[ot.spherePlane](){return this.spherePlane}get[ot.boxBox](){return this.boxBox}get[ot.sphereBox](){return this.sphereBox}get[ot.planeBox](){return this.planeBox}get[ot.convexConvex](){return this.convexConvex}get[ot.sphereConvex](){return this.sphereConvex}get[ot.planeConvex](){return this.planeConvex}get[ot.boxConvex](){return this.boxConvex}get[ot.sphereHeightfield](){return this.sphereHeightfield}get[ot.boxHeightfield](){return this.boxHeightfield}get[ot.convexHeightfield](){return this.convexHeightfield}get[ot.sphereParticle](){return this.sphereParticle}get[ot.planeParticle](){return this.planeParticle}get[ot.boxParticle](){return this.boxParticle}get[ot.convexParticle](){return this.convexParticle}get[ot.cylinderCylinder](){return this.convexConvex}get[ot.sphereCylinder](){return this.sphereConvex}get[ot.planeCylinder](){return this.planeConvex}get[ot.boxCylinder](){return this.boxConvex}get[ot.convexCylinder](){return this.convexConvex}get[ot.heightfieldCylinder](){return this.heightfieldCylinder}get[ot.particleCylinder](){return this.particleCylinder}get[ot.sphereTrimesh](){return this.sphereTrimesh}get[ot.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new gv,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Hh(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new Al(n,i,u*f),p=g.length?g.pop():new Al(n,i,u*f);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-u*f,_.maxForce=p.maxForce=u*f,_.ri.copy(e.ri),_.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(_.t,p.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=e.enabled,t.push(_,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];oi.setZero(),Gi.setZero(),ki.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(oi.vadd(t.ni,oi),Gi.vadd(t.ri,Gi),ki.vadd(t.rj,ki)):(oi.vsub(t.ni,oi),Gi.vadd(t.rj,Gi),ki.vadd(t.ri,ki));const r=1/e;Gi.scale(r,n.ri),ki.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),oi.normalize(),oi.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const c=yv,l=Mv,h=vv,d=xv;for(let u=0,f=e.length;u!==f;u++){const g=e[u],_=t[u];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&he.KINEMATIC&&_.type&he.STATIC||g.type&he.STATIC&&_.type&he.KINEMATIC||g.type&he.KINEMATIC&&_.type&he.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],l),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const A=_.shapes[M];if(!(y.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+A.boundingSphereRadius)continue;let b=null;y.material&&A.material&&(b=n.getContactMaterial(y.material,A.material)||null),this.currentContactMaterial=b||p||n.defaultContactMaterial;const T=y.type|A.type,D=this[T];if(D){let z=!1;y.type<A.type?z=D.call(this,y,A,h,d,c,l,g,_,y,A,m):z=D.call(this,A,y,d,h,l,c,_,g,y,A,m),z&&m&&(n.shapeOverlapKeeper.set(y.id,A.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,r,a,c,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,c,l,h,d){const u=this.createContactEquation(a,c,e,t,l,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,fr),u.ni.scale(u.ni.dot(fr),Ll),fr.vsub(Ll,u.rj),-fr.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,d)}sphereBox(e,t,n,i,s,r,a,c,l,h,d){const u=this.v3pool,f=jv;n.vsub(i,pr),t.getSideNormals(f,r);const g=e.radius;let _=!1;const p=Kv,m=$v,v=Zv;let y=null,M=0,A=0,b=0,T=null;for(let P=0,$=f.length;P!==$&&_===!1;P++){const k=Wv;k.copy(f[P]);const W=k.length();k.normalize();const Z=pr.dot(k);if(Z<W+g&&Z>0){const J=Xv,K=qv;J.copy(f[(P+1)%3]),K.copy(f[(P+2)%3]);const me=J.length(),j=K.length();J.normalize(),K.normalize();const Q=pr.dot(J),ue=pr.dot(K);if(Q<me&&Q>-me&&ue<j&&ue>-j){const Ee=Math.abs(Z-W-g);if((T===null||Ee<T)&&(T=Ee,A=Q,b=ue,y=W,p.copy(k),m.copy(J),v.copy(K),M++,d))return!0}}}if(M){_=!0;const P=this.createContactEquation(a,c,e,t,l,h);p.scale(-g,P.ri),P.ni.copy(p),P.ni.negate(P.ni),p.scale(y,p),m.scale(A,m),p.vadd(m,p),v.scale(b,v),p.vadd(v,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.vadd(i,P.rj),P.rj.vsub(c.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}let D=u.get();const z=Yv;for(let P=0;P!==2&&!_;P++)for(let $=0;$!==2&&!_;$++)for(let k=0;k!==2&&!_;k++)if(D.set(0,0,0),P?D.vadd(f[0],D):D.vsub(f[0],D),$?D.vadd(f[1],D):D.vsub(f[1],D),k?D.vadd(f[2],D):D.vsub(f[2],D),i.vadd(D,z),z.vsub(n,z),z.lengthSquared()<g*g){if(d)return!0;_=!0;const W=this.createContactEquation(a,c,e,t,l,h);W.ri.copy(z),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(D),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(D),D=null;const x=u.get(),w=u.get(),B=u.get(),F=u.get(),R=u.get(),U=f.length;for(let P=0;P!==U&&!_;P++)for(let $=0;$!==U&&!_;$++)if(P%3!==$%3){f[$].cross(f[P],x),x.normalize(),f[P].vadd(f[$],w),B.copy(n),B.vsub(w,B),B.vsub(i,B);const k=B.dot(x);x.scale(k,F);let W=0;for(;W===P%3||W===$%3;)W++;R.copy(n),R.vsub(F,R),R.vsub(w,R),R.vsub(i,R);const Z=Math.abs(k),J=R.length();if(Z<f[W].length()&&J<g){if(d)return!0;_=!0;const K=this.createContactEquation(a,c,e,t,l,h);w.vadd(F,K.rj),K.rj.copy(K.rj),R.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}u.release(x,w,B,F,R)}planeBox(e,t,n,i,s,r,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,d)}convexConvex(e,t,n,i,s,r,a,c,l,h,d,u,f){const g=dx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,u,f)){const _=[],p=fx;e.clipAgainstHull(n,s,t,i,r,g,-100,100,_);let m=0;for(let v=0;v!==_.length;v++){if(d)return!0;const y=this.createContactEquation(a,c,e,t,l,h),M=y.ri,A=y.rj;g.negate(y.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,M),A.copy(_[v].point),M.vsub(n,M),A.vsub(i,A),M.vadd(n,M),M.vsub(a.position,M),A.vadd(i,A),A.vsub(c.position,A),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,s,r,a,c,l,h,d){const u=this.v3pool;n.vsub(i,Jv);const f=t.faceNormals,g=t.faces,_=t.vertices,p=e.radius;let m=!1;for(let v=0;v!==_.length;v++){const y=_[v],M=nx;r.vmult(y,M),i.vadd(M,M);const A=tx;if(M.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;m=!0;const b=this.createContactEquation(a,c,e,t,l,h);b.ri.copy(A),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(p,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&m===!1;v++){const M=f[v],A=g[v],b=ix;r.vmult(M,b);const T=sx;r.vmult(_[A[0]],T),T.vadd(i,T);const D=rx;b.scale(-p,D),n.vadd(D,D);const z=ox;D.vsub(T,z);const x=z.dot(b),w=ax;if(n.vsub(T,w),x<0&&w.dot(b)>0){const B=[];for(let F=0,R=A.length;F!==R;F++){const U=u.get();r.vmult(_[A[F]],U),i.vadd(U,U),B.push(U)}if(Vv(B,b,n)){if(d)return!0;m=!0;const F=this.createContactEquation(a,c,e,t,l,h);b.scale(-p,F.ri),b.negate(F.ni);const R=u.get();b.scale(-x,R);const U=u.get();b.scale(-p,U),n.vsub(i,F.rj),F.rj.vadd(U,F.rj),F.rj.vadd(R,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),u.release(R),u.release(U),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let P=0,$=B.length;P!==$;P++)u.release(B[P]);return}else for(let F=0;F!==A.length;F++){const R=u.get(),U=u.get();r.vmult(_[A[(F+1)%A.length]],R),r.vmult(_[A[(F+2)%A.length]],U),i.vadd(R,R),i.vadd(U,U);const P=Qv;U.vsub(R,P);const $=ex;P.unit($);const k=u.get(),W=u.get();n.vsub(R,W);const Z=W.dot($);$.scale(Z,k),k.vadd(R,k);const J=u.get();if(k.vsub(n,J),Z>0&&Z*Z<P.lengthSquared()&&J.lengthSquared()<p*p){if(d)return!0;const K=this.createContactEquation(a,c,e,t,l,h);k.vsub(i,K.rj),k.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(p,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let me=0,j=B.length;me!==j;me++)u.release(B[me]);u.release(R),u.release(U),u.release(k),u.release(J),u.release(W);return}u.release(R),u.release(U),u.release(k),u.release(J),u.release(W)}for(let F=0,R=B.length;F!==R;F++)u.release(B[F])}}}planeConvex(e,t,n,i,s,r,a,c,l,h,d){const u=cx,f=lx;f.set(0,0,1),s.vmult(f,f);let g=0;const _=hx;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,c,e,t,l,h),y=ux;f.scale(f.dot(_),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,d)}sphereHeightfield(e,t,n,i,s,r,a,c,l,h,d){const u=t.data,f=e.radius,g=t.elementSize,_=bx,p=Tx;Qe.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/g)-1,v=Math.ceil((p.x+f)/g)+1,y=Math.floor((p.y-f)/g)-1,M=Math.ceil((p.y+f)/g)+1;if(v<0||M<0||m>u.length||y>u[0].length)return;m<0&&(m=0),v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),m>=u.length&&(m=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const A=[];t.getRectMinMax(m,y,v,M,A);const b=A[0],T=A[1];if(p.z-f>T||p.z+f<b)return;const D=this.result;for(let z=m;z<v;z++)for(let x=y;x<M;x++){const w=D.length;let B=!1;if(t.getConvexTrianglePillar(z,x,!1),Qe.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,c,e,t,d)),d&&B||(t.getConvexTrianglePillar(z,x,!0),Qe.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,c,e,t,d)),d&&B))return!0;if(D.length-w>2)return}}boxHeightfield(e,t,n,i,s,r,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,d)}convexHeightfield(e,t,n,i,s,r,a,c,l,h,d){const u=t.data,f=t.elementSize,g=e.boundingSphereRadius,_=Ex,p=Sx,m=Mx;Qe.pointToLocalFrame(i,r,n,m);let v=Math.floor((m.x-g)/f)-1,y=Math.ceil((m.x+g)/f)+1,M=Math.floor((m.y-g)/f)-1,A=Math.ceil((m.y+g)/f)+1;if(y<0||A<0||v>u.length||M>u[0].length)return;v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),A<0&&(A=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),A>=u[0].length&&(A=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const b=[];t.getRectMinMax(v,M,y,A,b);const T=b[0],D=b[1];if(!(m.z-g>D||m.z+g<T))for(let z=v;z<y;z++)for(let x=M;x<A;x++){let w=!1;if(t.getConvexTrianglePillar(z,x,!1),Qe.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(w=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,c,null,null,d,p,null)),d&&w||(t.getConvexTrianglePillar(z,x,!0),Qe.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(w=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,c,null,null,d,p,null)),d&&w))return!0}}sphereParticle(e,t,n,i,s,r,a,c,l,h,d){const u=_x;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(c,a,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,c,l,h,d){const u=px;u.set(0,0,1),a.quaternion.vmult(u,u);const f=mx;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(c,a,t,e,l,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=gx;u.scale(u.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,d)}convexParticle(e,t,n,i,s,r,a,c,l,h,d){let u=-1;const f=xx,g=yx;let _=null;const p=vx;if(p.copy(i),p.vsub(n,p),s.conjugate(Pl),Pl.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let m=0,v=e.faces.length;m!==v;m++){const y=[e.worldVertices[e.faces[m][0]]],M=e.worldFaceNormals[m];i.vsub(y[0],Il);const A=-M.dot(Il);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,u=m,f.copy(M)}}if(u!==-1){const m=this.createContactEquation(c,a,t,e,l,h);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,y=m.rj;v.vadd(i,v),v.vsub(c.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,a,c,l,h,d){return this.convexHeightfield(t,e,i,n,r,s,c,a,l,h,d)}particleCylinder(e,t,n,i,s,r,a,c,l,h,d){return this.convexParticle(t,e,i,n,r,s,c,a,l,h,d)}sphereTrimesh(e,t,n,i,s,r,a,c,l,h,d){const u=Cv,f=Lv,g=Pv,_=Iv,p=Nv,m=Dv,v=Bv,y=Rv,M=wv,A=zv;Qe.pointToLocalFrame(i,r,n,p);const b=e.radius;v.lowerBound.set(p.x-b,p.y-b,p.z-b),v.upperBound.set(p.x+b,p.y+b,p.z+b),t.getTrianglesInAABB(v,A);const T=Av,D=e.radius*e.radius;for(let F=0;F<A.length;F++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[A[F]*3+R],T),T.vsub(p,M),M.lengthSquared()<=D){if(y.copy(T),Qe.pointToWorldFrame(i,r,y,T),T.vsub(n,M),d)return!0;let U=this.createContactEquation(a,c,e,t,l,h);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(T),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let F=0;F<A.length;F++)for(let R=0;R<3;R++){t.getVertex(t.indices[A[F]*3+R],u),t.getVertex(t.indices[A[F]*3+(R+1)%3],f),f.vsub(u,g),p.vsub(f,m);const U=m.dot(g);p.vsub(u,m);let P=m.dot(g);if(P>0&&U<0&&(p.vsub(u,m),_.copy(g),_.normalize(),P=m.dot(_),_.scale(P,m),m.vadd(u,m),m.distanceTo(p)<e.radius)){if(d)return!0;const k=this.createContactEquation(a,c,e,t,l,h);m.vsub(p,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Qe.pointToWorldFrame(i,r,m,m),m.vsub(c.position,k.rj),Qe.vectorToWorldFrame(r,k.ni,k.ni),Qe.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const z=Uv,x=Fv,w=Ov,B=bv;for(let F=0,R=A.length;F!==R;F++){t.getTriangleVertices(A[F],z,x,w),t.getNormal(A[F],B),p.vsub(z,m);let U=m.dot(B);if(B.scale(U,m),p.vsub(m,m),U=m.distanceTo(p),gt.pointInTriangle(m,z,x,w)&&U<e.radius){if(d)return!0;let P=this.createContactEquation(a,c,e,t,l,h);m.vsub(p,P.ni),P.ni.normalize(),P.ni.scale(e.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),Qe.pointToWorldFrame(i,r,m,m),m.vsub(c.position,P.rj),Qe.vectorToWorldFrame(r,P.ni,P.ni),Qe.vectorToWorldFrame(r,P.ri,P.ri),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}}A.length=0}planeTrimesh(e,t,n,i,s,r,a,c,l,h,d){const u=new E,f=Ev;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const _=new E;_.copy(u),Qe.pointToWorldFrame(i,r,_,u);const p=Sv;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,c,e,t,l,h);v.ni.copy(f);const y=Tv;f.scale(p.dot(f),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const oi=new E,Gi=new E,ki=new E,vv=new E,xv=new E,yv=new vt,Mv=new vt,Ev=new E,Sv=new E,Tv=new E,bv=new E,wv=new E;new E;const Av=new E,Rv=new E,Cv=new E,Lv=new E,Pv=new E,Iv=new E,Nv=new E,Dv=new E,Uv=new E,Fv=new E,Ov=new E,Bv=new Yt,zv=[],fr=new E,Ll=new E,Hv=new E,Gv=new E,kv=new E;function Vv(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=Hv;o[(s+1)%i].vsub(r,a);const c=Gv;a.cross(e,c);const l=kv;t.vsub(r,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const pr=new E,Wv=new E,Xv=new E,qv=new E,jv=[new E,new E,new E,new E,new E,new E],Yv=new E,Kv=new E,$v=new E,Zv=new E,Jv=new E,Qv=new E,ex=new E,tx=new E,nx=new E,ix=new E,sx=new E,rx=new E,ox=new E,ax=new E;new E;new E;const cx=new E,lx=new E,hx=new E,ux=new E,dx=new E,fx=new E,px=new E,mx=new E,gx=new E,_x=new E,Pl=new vt,vx=new E;new E;const xx=new E,Il=new E,yx=new E,Mx=new E,Ex=new E,Sx=[0],Tx=new E,bx=new E;class Nl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Dl(e,h)}a=0;for(let c=0;c<r;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Dl(t,h)}}}function Dl(o,e){o.push((e&4294901760)>>16,e&65535)}const Ao=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class wx{constructor(){this.data={keys:[]}}get(e,t){const n=Ao(e,t);return this.data[n]}set(e,t,n){const i=Ao(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Ao(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Ax extends Lh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Ph,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new uv,this.constraints=[],this.narrowphase=new _v(this),this.collisionMatrix=new gl,this.collisionMatrixPrevious=new gl,this.bodyOverlapKeeper=new Nl,this.shapeOverlapKeeper=new Nl,this.contactmaterials=[],this.contactMaterialTable=new wx,this.defaultMaterial=new Jn("default"),this.defaultContactMaterial=new Is(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof wr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=gt.ALL,n.from=e,n.to=t,n.callback=i,Ro.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=gt.ANY,n.from=e,n.to=t,n.result=i,Ro.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=gt.CLOSEST,n.from=e,n.to=t,n.result=i,Ro.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof he&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=yt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=yt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(yt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Ix,i=Nx,s=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=he.DYNAMIC;let u=-1/0;const f=this.constraints,g=Px;c.length();const _=c.x,p=c.y,m=c.z;let v=0;for(l&&(u=yt.now()),v=0;v!==s;v++){const F=r[v];if(F.type===d){const R=F.force,U=F.mass;R.x+=U*_,R.y+=U*p,R.z+=U*m}}for(let F=0,R=this.subsystems.length;F!==R;F++)this.subsystems[F].update();l&&(u=yt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=yt.now()-u);let y=f.length;for(v=0;v!==y;v++){const F=f[v];if(!F.collideConnected)for(let R=n.length-1;R>=0;R-=1)(F.bodyA===n[R]&&F.bodyB===i[R]||F.bodyB===n[R]&&F.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),l&&(u=yt.now());const M=Lx,A=t.length;for(v=0;v!==A;v++)M.push(t[v]);t.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,M,this.frictionEquations,g),l&&(h.narrowphase=yt.now()-u),l&&(u=yt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const T=t.length;for(let F=0;F!==T;F++){const R=t[F],U=R.bi,P=R.bj,$=R.si,k=R.sj;let W;if(U.material&&P.material?W=this.getContactMaterial(U.material,P.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,U.material&&P.material&&(U.material.friction>=0&&P.material.friction>=0&&U.material.friction*P.material.friction,U.material.restitution>=0&&P.material.restitution>=0&&(R.restitution=U.material.restitution*P.material.restitution)),a.addEquation(R),U.allowSleep&&U.type===he.DYNAMIC&&U.sleepState===he.SLEEPING&&P.sleepState===he.AWAKE&&P.type!==he.STATIC){const Z=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),J=P.sleepSpeedLimit**2;Z>=J*2&&(U.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===he.DYNAMIC&&P.sleepState===he.SLEEPING&&U.sleepState===he.AWAKE&&U.type!==he.STATIC){const Z=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),J=U.sleepSpeedLimit**2;Z>=J*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,P,!0),this.collisionMatrixPrevious.get(U,P)||(_s.body=P,_s.contact=R,U.dispatchEvent(_s),_s.body=U,P.dispatchEvent(_s)),this.bodyOverlapKeeper.set(U.id,P.id),this.shapeOverlapKeeper.set($.id,k.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=yt.now()-u,u=yt.now()),v=0;v!==s;v++){const F=r[v];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const F=f[v];F.update();for(let R=0,U=F.equations.length;R!==U;R++){const P=F.equations[R];a.addEquation(P)}}a.solve(e,this),l&&(h.solve=yt.now()-u),a.removeAllEquations();const D=Math.pow;for(v=0;v!==s;v++){const F=r[v];if(F.type&d){const R=D(1-F.linearDamping,e),U=F.velocity;U.scale(R,U);const P=F.angularVelocity;if(P){const $=D(1-F.angularDamping,e);P.scale($,P)}}}this.dispatchEvent(Cx),l&&(u=yt.now());const x=this.stepnumber%(this.quatNormalizeSkip+1)===0,w=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,x,w);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=yt.now()-u),this.stepnumber+=1,this.dispatchEvent(Rx);let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==s;v++){const F=r[v];F.sleepTick(this.time),F.sleepState!==he.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(An,Rn),e){for(let s=0,r=An.length;s<r;s+=2)vs.bodyA=this.getBodyById(An[s]),vs.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(vs);vs.bodyA=vs.bodyB=null}if(t){for(let s=0,r=Rn.length;s<r;s+=2)xs.bodyA=this.getBodyById(Rn[s]),xs.bodyB=this.getBodyById(Rn[s+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}An.length=Rn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(An,Rn),n){for(let s=0,r=An.length;s<r;s+=2){const a=this.getShapeById(An[s]),c=this.getShapeById(An[s+1]);Cn.shapeA=a,Cn.shapeB=c,a&&(Cn.bodyA=a.body),c&&(Cn.bodyB=c.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,r=Rn.length;s<r;s+=2){const a=this.getShapeById(Rn[s]),c=this.getShapeById(Rn[s+1]);Ln.shapeA=a,Ln.shapeB=c,a&&(Ln.bodyA=a.body),c&&(Ln.bodyB=c.body),this.dispatchEvent(Ln)}Ln.bodyA=Ln.bodyB=Ln.shapeA=Ln.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Yt;const Ro=new gt,yt=globalThis.performance||{};if(!yt.now){let o=Date.now();yt.timing&&yt.timing.navigationStart&&(o=yt.timing.navigationStart),yt.now=()=>Date.now()-o}new E;const Rx={type:"postStep"},Cx={type:"preStep"},_s={type:he.COLLIDE_EVENT_NAME,body:null,contact:null},Lx=[],Px=[],Ix=[],Nx=[],An=[],Rn=[],vs={type:"beginContact",bodyA:null,bodyB:null},xs={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ln={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ul={type:"change"},Co={type:"start"},Fl={type:"end"},mr=new As,Ol=new Xn,Dx=Math.cos(70*sh.DEG2RAD);class Ux extends yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ae),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ul),n.update(),s=i.NONE},this.update=function(){const N=new O,oe=new mn().setFromUnitVectors(e.up,new O(0,1,0)),le=oe.clone().invert(),Te=new O,I=new mn,se=new O,ne=2*Math.PI;return function(we=null){const $e=n.object.position;N.copy($e).sub(n.target),N.applyQuaternion(oe),a.setFromVector3(N),n.autoRotate&&s===i.NONE&&B(x(we)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let je=n.minAzimuthAngle,it=n.maxAzimuthAngle;isFinite(je)&&isFinite(it)&&(je<-Math.PI?je+=ne:je>Math.PI&&(je-=ne),it<-Math.PI?it+=ne:it>Math.PI&&(it-=ne),je<=it?a.theta=Math.max(je,Math.min(it,a.theta)):a.theta=a.theta>(je+it)/2?Math.max(je,a.theta):Math.min(it,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*l),N.setFromSpherical(a),N.applyQuaternion(le),$e.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ct=!1;if(n.zoomToCursor&&b){let Ze=null;if(n.object.isPerspectiveCamera){const dt=N.length();Ze=Z(dt*l);const Dt=dt-Ze;n.object.position.addScaledVector(M,Dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const dt=new O(A.x,A.y,0);dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ct=!0;const Dt=new O(A.x,A.y,0);Dt.unproject(n.object),n.object.position.sub(Dt).add(dt),n.object.updateMatrixWorld(),Ze=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(mr.origin.copy(n.object.position),mr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mr.direction))<Dx?e.lookAt(n.target):(Ol.setFromNormalAndCoplanarPoint(n.object.up,n.target),mr.intersectPlane(Ol,n.target))))}else n.object.isOrthographicCamera&&(Ct=l!==1,Ct&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,b=!1,Ct||Te.distanceToSquared(n.object.position)>r||8*(1-I.dot(n.object.quaternion))>r||se.distanceToSquared(n.target)>0?(n.dispatchEvent(Ul),Te.copy(n.object.position),I.copy(n.object.quaternion),se.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",V),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new dl,c=new dl;let l=1;const h=new O,d=new Re,u=new Re,f=new Re,g=new Re,_=new Re,p=new Re,m=new Re,v=new Re,y=new Re,M=new O,A=new Re;let b=!1;const T=[],D={};let z=!1;function x(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function w(N){const oe=Math.abs(N*.01);return Math.pow(.95,n.zoomSpeed*oe)}function B(N){c.theta-=N}function F(N){c.phi-=N}const R=function(){const N=new O;return function(le,Te){N.setFromMatrixColumn(Te,0),N.multiplyScalar(-le),h.add(N)}}(),U=function(){const N=new O;return function(le,Te){n.screenSpacePanning===!0?N.setFromMatrixColumn(Te,1):(N.setFromMatrixColumn(Te,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(le),h.add(N)}}(),P=function(){const N=new O;return function(le,Te){const I=n.domElement;if(n.object.isPerspectiveCamera){const se=n.object.position;N.copy(se).sub(n.target);let ne=N.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),R(2*le*ne/I.clientHeight,n.object.matrix),U(2*Te*ne/I.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(le*(n.object.right-n.object.left)/n.object.zoom/I.clientWidth,n.object.matrix),U(Te*(n.object.top-n.object.bottom)/n.object.zoom/I.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(N,oe){if(!n.zoomToCursor)return;b=!0;const le=n.domElement.getBoundingClientRect(),Te=N-le.left,I=oe-le.top,se=le.width,ne=le.height;A.x=Te/se*2-1,A.y=-(I/ne)*2+1,M.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function J(N){d.set(N.clientX,N.clientY)}function K(N){W(N.clientX,N.clientX),m.set(N.clientX,N.clientY)}function me(N){g.set(N.clientX,N.clientY)}function j(N){u.set(N.clientX,N.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;B(2*Math.PI*f.x/oe.clientHeight),F(2*Math.PI*f.y/oe.clientHeight),d.copy(u),n.update()}function Q(N){v.set(N.clientX,N.clientY),y.subVectors(v,m),y.y>0?$(w(y.y)):y.y<0&&k(w(y.y)),m.copy(v),n.update()}function ue(N){_.set(N.clientX,N.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),P(p.x,p.y),g.copy(_),n.update()}function Ee(N){W(N.clientX,N.clientY),N.deltaY<0?k(w(N.deltaY)):N.deltaY>0&&$(w(N.deltaY)),n.update()}function Ce(N){let oe=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),oe=!0;break}oe&&(N.preventDefault(),n.update())}function _e(N){if(T.length===1)d.set(N.pageX,N.pageY);else{const oe=de(N),le=.5*(N.pageX+oe.x),Te=.5*(N.pageY+oe.y);d.set(le,Te)}}function Ke(N){if(T.length===1)g.set(N.pageX,N.pageY);else{const oe=de(N),le=.5*(N.pageX+oe.x),Te=.5*(N.pageY+oe.y);g.set(le,Te)}}function De(N){const oe=de(N),le=N.pageX-oe.x,Te=N.pageY-oe.y,I=Math.sqrt(le*le+Te*Te);m.set(0,I)}function G(N){n.enableZoom&&De(N),n.enablePan&&Ke(N)}function xt(N){n.enableZoom&&De(N),n.enableRotate&&_e(N)}function be(N){if(T.length==1)u.set(N.pageX,N.pageY);else{const le=de(N),Te=.5*(N.pageX+le.x),I=.5*(N.pageY+le.y);u.set(Te,I)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;B(2*Math.PI*f.x/oe.clientHeight),F(2*Math.PI*f.y/oe.clientHeight),d.copy(u)}function Pe(N){if(T.length===1)_.set(N.pageX,N.pageY);else{const oe=de(N),le=.5*(N.pageX+oe.x),Te=.5*(N.pageY+oe.y);_.set(le,Te)}p.subVectors(_,g).multiplyScalar(n.panSpeed),P(p.x,p.y),g.copy(_)}function ye(N){const oe=de(N),le=N.pageX-oe.x,Te=N.pageY-oe.y,I=Math.sqrt(le*le+Te*Te);v.set(0,I),y.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),$(y.y),m.copy(v);const se=(N.pageX+oe.x)*.5,ne=(N.pageY+oe.y)*.5;W(se,ne)}function rt(N){n.enableZoom&&ye(N),n.enablePan&&Pe(N)}function Fe(N){n.enableZoom&&ye(N),n.enableRotate&&be(N)}function L(N){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",V)),ke(N),N.pointerType==="touch"?Oe(N):re(N))}function S(N){n.enabled!==!1&&(N.pointerType==="touch"?te(N):ee(N))}function V(N){switch(Ie(N),T.length){case 0:n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",V),n.dispatchEvent(Fl),s=i.NONE;break;case 1:const oe=T[0],le=D[oe];Oe({pointerId:oe,pageX:le.x,pageY:le.y});break}}function re(N){let oe;switch(N.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Ei.DOLLY:if(n.enableZoom===!1)return;K(N),s=i.DOLLY;break;case Ei.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;me(N),s=i.PAN}else{if(n.enableRotate===!1)return;J(N),s=i.ROTATE}break;case Ei.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;J(N),s=i.ROTATE}else{if(n.enablePan===!1)return;me(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Co)}function ee(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(N);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(N);break;case i.PAN:if(n.enablePan===!1)return;ue(N);break}}function ie(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(Co),Ee(ve(N)),n.dispatchEvent(Fl))}function ve(N){const oe=N.deltaMode,le={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(oe){case 1:le.deltaY*=16;break;case 2:le.deltaY*=100;break}return N.ctrlKey&&!z&&(le.deltaY*=10),le}function ce(N){N.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(N){N.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function Ae(N){n.enabled===!1||n.enablePan===!1||Ce(N)}function Oe(N){switch(Se(N),T.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;_e(N),s=i.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;Ke(N),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(N),s=i.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(N),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Co)}function te(N){switch(Se(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Pe(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(N),n.update();break;default:s=i.NONE}}function Je(N){n.enabled!==!1&&N.preventDefault()}function ke(N){T.push(N.pointerId)}function Ie(N){delete D[N.pointerId];for(let oe=0;oe<T.length;oe++)if(T[oe]==N.pointerId){T.splice(oe,1);return}}function Se(N){let oe=D[N.pointerId];oe===void 0&&(oe=new Re,D[N.pointerId]=oe),oe.set(N.pageX,N.pageY)}function de(N){const oe=N.pointerId===T[0]?T[1]:T[0];return D[oe]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",ie,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}class Fx extends q_{constructor(e){super(e),this.type=Nn}parse(e){const r=function(D,z){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(z||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(z||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(z||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(z||""))}},h=`
`,d=function(D,z,x){z=z||1024;let B=D.pos,F=-1,R=0,U="",P=String.fromCharCode.apply(null,new Uint16Array(D.subarray(B,B+128)));for(;0>(F=P.indexOf(h))&&R<z&&B<D.byteLength;)U+=P,R+=P.length,B+=128,P+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(B,B+128)));return-1<F?(x!==!1&&(D.pos+=R+F+1),U+P.slice(0,F)):!1},u=function(D){const z=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let U,P;for((D.pos>=D.byteLength||!(U=d(D)))&&r(1,"no header found"),(P=U.match(z))||r(3,"bad initial token"),R.valid|=1,R.programtype=P[1],R.string+=U+`
`;U=d(D),U!==!1;){if(R.string+=U+`
`,U.charAt(0)==="#"){R.comments+=U+`
`;continue}if((P=U.match(x))&&(R.gamma=parseFloat(P[1])),(P=U.match(w))&&(R.exposure=parseFloat(P[1])),(P=U.match(B))&&(R.valid|=2,R.format=P[1]),(P=U.match(F))&&(R.valid|=4,R.height=parseInt(P[1],10),R.width=parseInt(P[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||r(3,"missing format specifier"),R.valid&4||r(3,"missing image size specifier"),R},f=function(D,z,x){const w=z;if(w<8||w>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);w!==(D[2]<<8|D[3])&&r(3,"wrong scanline width");const B=new Uint8Array(4*z*x);B.length||r(4,"unable to allocate buffer space");let F=0,R=0;const U=4*w,P=new Uint8Array(4),$=new Uint8Array(U);let k=x;for(;k>0&&R<D.byteLength;){R+4>D.byteLength&&r(1),P[0]=D[R++],P[1]=D[R++],P[2]=D[R++],P[3]=D[R++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=w)&&r(3,"bad rgbe scanline format");let W=0,Z;for(;W<U&&R<D.byteLength;){Z=D[R++];const K=Z>128;if(K&&(Z-=128),(Z===0||W+Z>U)&&r(3,"bad scanline data"),K){const me=D[R++];for(let j=0;j<Z;j++)$[W++]=me}else $.set(D.subarray(R,R+Z),W),W+=Z,R+=Z}const J=w;for(let K=0;K<J;K++){let me=0;B[F]=$[K+me],me+=w,B[F+1]=$[K+me],me+=w,B[F+2]=$[K+me],me+=w,B[F+3]=$[K+me],F+=4}k--}return B},g=function(D,z,x,w){const B=D[z+3],F=Math.pow(2,B-128)/255;x[w+0]=D[z+0]*F,x[w+1]=D[z+1]*F,x[w+2]=D[z+2]*F,x[w+3]=1},_=function(D,z,x,w){const B=D[z+3],F=Math.pow(2,B-128)/255;x[w+0]=Ws.toHalfFloat(Math.min(D[z+0]*F,65504)),x[w+1]=Ws.toHalfFloat(Math.min(D[z+1]*F,65504)),x[w+2]=Ws.toHalfFloat(Math.min(D[z+2]*F,65504)),x[w+3]=Ws.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=u(p),v=m.width,y=m.height,M=f(p.subarray(p.pos),v,y);let A,b,T;switch(this.type){case Gt:T=M.length/4;const D=new Float32Array(T*4);for(let x=0;x<T;x++)g(M,x*4,D,x*4);A=D,b=Gt;break;case Nn:T=M.length/4;const z=new Uint16Array(T*4);for(let x=0;x<T;x++)_(M,x*4,z,x*4);A=z,b=Nn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:y,data:A,header:m.string,gamma:m.gamma,exposure:m.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case Gt:case Nn:r.colorSpace=Mt,r.minFilter=pt,r.magFilter=pt,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}function Bl(o,e){if(e===Bu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Oo||e===th){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Oo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Ox extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Ss.extractUrlBase(e);r=Ss.resolveURL(l,this.path)}else r=Ss.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new aa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gh){try{r[Ye.KHR_BINARY_GLTF]=new ny(e)}catch(d){i&&i(d);return}s=JSON.parse(r[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new my(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:r[d]=new Hx;break;case Ye.KHR_DRACO_MESH_COMPRESSION:r[d]=new iy(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:r[d]=new sy;break;case Ye.KHR_MESH_QUANTIZATION:r[d]=new ry;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Bx(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zx{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Mt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ch(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Z_(h),l.distance=d;break;case"spot":l=new K_(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Hx{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Mt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ut))}return Promise.all(i)}}class Gx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(a,a)}return Promise.all(s)}}class Vx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Wx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ut)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Xx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class qx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Mt),Promise.all(s)}}class jx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Yx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Mt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ut)),Promise.all(s)}}class Kx{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class $x{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Zx{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Jx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ey{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class ty{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Zt.TRIANGLES&&l.mode!==Zt.TRIANGLE_STRIP&&l.mode!==Zt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const _=new We,p=new O,m=new mn,v=new O(1,1,1),y=new bh(g.geometry,g.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,_.compose(p,m,v));for(const M in c)if(M==="_COLOR_0"){const A=c[M];y.instanceColor=new ko(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);lt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Gh="glTF",ys=12,zl={JSON:1313821514,BIN:5130562};class ny{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ys,s=new DataView(e,ys);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===zl.JSON){const l=new Uint8Array(e,ys+r,a);this.content=n.decode(l)}else if(c===zl.BIN){const l=ys+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},c={},l={};for(const h in r){const d=Xo[h]||h.toLowerCase();a[d]=r[h]}for(const h in e.attributes){const d=Xo[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Yi[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}d(f)},a,l,Mt,u)})})}}class sy{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ry{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class kh extends Ls{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,_=g-l,p=-2*f+3*u,m=f-u,v=1-p,y=m-u+d;for(let M=0;M!==a;M++){const A=r[_+M+a],b=r[_+M+c]*h,T=r[g+M+a],D=r[g+M]*h;s[M]=v*A+y*b+p*T+m*D}return s}}const oy=new mn;class ay extends kh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oy.fromArray(s).normalize().toArray(s),s}}const Zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hl={9728:wt,9729:pt,9984:Fo,9985:gr,9986:Vi,9987:pn},Gl={33071:Nt,33648:yr,10497:Zi},Lo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cy={CUBICSPLINE:void 0,LINEAR:Qi,STEP:bs},Po={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ly(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Cs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),o.DefaultMaterial}function ai(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hy(o,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;c.push(u)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=d),s&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function uy(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dy(o){let e;const t=o.extensions&&o.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Io(t.attributes):e=o.indices+":"+Io(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Io(o.targets[n]);return e}function Io(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function qo(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const py=new We;class my{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new j_(this.options.manager):this.textureLoader=new Q_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new aa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ai(s,a,i),qn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,c=r.length;a<c;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,h]of r.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Ss.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Lo[i.type],a=Yi[i.componentType],c=i.normalized===!0,l=new a(i.count*r);return Promise.resolve(new Bt(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],c=Lo[i.type],l=Yi[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(v);y||(_=new l(a,m*f,i.count*f/h),y=new S_(_,f/h),t.cache.add(v,y)),p=new ta(y,c,u%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),p=new Bt(_,c,g);if(i.sparse!==void 0){const m=Lo.SCALAR,v=Yi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new v(r[1],y,i.sparse.count*m),b=new l(r[2],M,i.sparse.count*c);a!==null&&(p=new Bt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,D=A.length;T<D;T++){const z=A[T];if(p.setX(z,b[T*c]),c>=2&&p.setY(z,b[T*c+1]),c>=3&&p.setZ(z,b[T*c+2]),c>=4&&p.setW(z,b[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Hl[u.magFilter]||pt,h.minFilter=Hl[u.minFilter]||pn,h.wrapS=Gl[u.wrapS]||Zi,h.wrapT=Gl[u.wrapT]||Zi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:r.mimeType});return c=a.createObjectURL(u),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Rt(_);p.needsUpdate=!0,u(p)}),t.load(Ss.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),d.userData.mimeType=r.mimeType||fy(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(r);r=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new wh,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new sa,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Cs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const d=i[Ye.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Mt),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,ut)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=dn);const h=s.alphaMode||Po.OPAQUE;if(h===Po.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Po.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==di&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Re(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==di&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==di){const d=s.emissiveFactor;a.emissive=new Ue().setRGB(d[0],d[1],d[2],Mt)}return s.emissiveTexture!==void 0&&r!==di&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ut)),Promise.all(l).then(function(){const d=new r(a);return s.name&&(d.name=s.name),qn(d,s),t.associations.set(d,{materials:e}),s.extensions&&ai(i,d,s),d})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return kl(c,a,t)})}const r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=dy(l),d=i[h];if(d)r.push(d.promise);else{let u;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=kl(new jt,l,t),i[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?ly(this.cache):this.getDependency("material",r[c].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=r[f];let m;const v=l[f];if(p.mode===Zt.TRIANGLES||p.mode===Zt.TRIANGLE_STRIP||p.mode===Zt.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new b_(_,v):new At(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Zt.TRIANGLE_STRIP?m.geometry=Bl(m.geometry,th):p.mode===Zt.TRIANGLE_FAN&&(m.geometry=Bl(m.geometry,Oo));else if(p.mode===Zt.LINES)m=new R_(_,v);else if(p.mode===Zt.LINE_STRIP)m=new Pr(_,v);else if(p.mode===Zt.LINE_LOOP)m=new C_(_,v);else if(p.mode===Zt.POINTS)m=new L_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&uy(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),qn(m,s),p.extensions&&ai(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&ai(i,d[0],s),d[0];const u=new fi;s.extensions&&ai(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(sh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],c=[];for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d){a.push(d);const u=new We;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ia(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let v=0,y=u.length;v<y;v++){const M=u[v],A=f[v],b=g[v],T=_[v],D=p[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const z=n._createAnimationTracks(M,A,b,T,D);if(z)for(let x=0;x<z.length;x++)m.push(z[x])}return new z_(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)r.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,py)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Th:l.length>1?h=new fi:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=r),qn(h,s),s.extensions&&ai(n,h,s),s.matrix!==void 0){const d=new We;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new fi;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&ai(t,s,n);const r=n.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(i.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)s.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof an||u instanceof Rt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,c=[];Wn[s.path]===Wn.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Wn[s.path]){case Wn.weights:l=ns;break;case Wn.rotation:l=xi;break;case Wn.position:case Wn.scale:l=is;break;default:switch(n.itemSize){case 1:l=ns;break;case 2:case 3:default:l=is;break}break}const h=i.interpolation!==void 0?cy[i.interpolation]:Qi,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Wn[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=qo(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xi?ay:kh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gy(o,e,t){const n=e.attributes,i=new Fn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){const h=qo(Yi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,c=new O;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=qo(Yi[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new gn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function kl(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(c){o.setAttribute(a,c)})}for(const r in n){const a=Xo[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return et.workingColorSpace!==Mt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),qn(o,e),gy(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hy(o,e.targets,t):o})}const _y="./assets/balloon-n4dWZU7B.glb";class vy{constructor({world:e,scene:t,chainSize:n,chainDist:i,balloonRadius:s,balloonGravity:r,rootPosition:a}){this.world=e,this.scene=t,this.chainSize=n,this.chainDist=i,this.chainRadius=.05,this.balloonRadius=s,this.balloonGravity=r,this.balloonGravity.y*=s,this.rootPosition=a,this.arraySpheres=[],this.arrayBodys=[],this.material=void 0,this.loader=new Ox,this.init()}async init(){await this.initMaterials(),await this.initPhysicsChain(),await this.initPhysicsBalloon(),await this.initVisualChain(),await this.initVisualBalloon()}async initMaterials(){this.material=new Jn}async initPhysicsChain(){let e=this.chainRadius;this.previous=void 0;for(let t=0;t<=this.chainSize;t++){let n=this.chainDist,i=.2,s=new E(0,n*(5-t),0);t==0&&(i=0,s=this.rootPosition);const r=new Rl(e),a=new he({mass:i,material:this.material,shape:r});if(a.position=s,a.velocity.x=-t,a.sleepSpeedLimit=.1,a.sleepTimeLimit=1,a.linearDamping=.3,a.angularDamping=.3,this.world.addBody(a),this.arrayBodys.push({bodySphere:a}),this.previous){const c=new wl(a,this.previous,n);this.world.addConstraint(c)}this.previous=a}}async initPhysicsBalloon(){const e=new Rl(this.balloonRadius);this.balloonBody=new he({mass:this.balloonRadius,material:this.material,shape:e}),this.balloonBody.position.set(0,0,0),this.balloonBody.sleepSpeedLimit=.1,this.balloonBody.sleepTimeLimit=1,this.balloonBody.linearDamping=.3,this.balloonBody.angularDamping=.3,this.world.addBody(this.balloonBody);const t=new wl(this.balloonBody,this.previous,this.balloonRadius*1);this.world.addConstraint(t);const n=new Is(this.balloonBody.material,this.world.groundMaterial,{friction:.1,restitution:.9});this.world.addContactMaterial(n)}async initVisualChain(){let e=this.chainRadius;const t=new Ir(e*3,16,8),n=new Wo;for(let a=0;a<=this.chainSize;a++){let c=new At(t,n);this.arrayBodys[a].sphere=c}this.curve=new I_([new O(0,0,0),new O(0,5,0),new O(0,10,0)]);const i=this.curve.getPoints(this.chainSize),s=new jt().setFromPoints(i),r=new sa({color:5605631,linewidth:10});this.curve.mesh=new Pr(s.clone(),r)}async initVisualBalloon(){const t=(await this.loader.loadAsync(_y)).scene.children[0].geometry;t.rotateX(Math.PI*.5);const n=[35071,16711680,16711935,65280,16776960],i=Math.floor(Math.random()*5),s=new _n({color:n[i],envMap:this.scene.environment,envMapIntensity:.5,transmission:.2,ior:1.5,sheen:1,thickness:.1});s.depthTest=!0,s.roughness=.2,this.sphereBalloon=new At(t,s),this.sphereBalloon.matrixAutoUpdate=!1,this.sphereBalloon.castShadow=!0,this.sphereBalloon.receiveShadow=!0,this.scene.add(this.sphereBalloon)}}class xy{constructor({scene:e,chains:t,chainSize:n}){this.scene=e,this.dataTexture=null,this.chains=t,this.sizeUVx=n,this.init(this.chains)}async init(e){const t=this.chains;await this.initDataTexture(e);const n=new oa(.02,.03,10,6,this.sizeUVx,!0),i=new Cs({color:14540253,envMap:this.scene.environment,envMapIntensity:1});i.depthTest=!0,i.roughness=.8,i.uniforms={myDataTexture:{value:this.dataTexture},myChainSize:{value:this.sizeUVx}},i.onBeforeCompile=function(s){s.uniforms.myDataTexture=i.uniforms.myDataTexture,s.uniforms.myChainSize=i.uniforms.myChainSize,s.vertexShader=`
      uniform sampler2D myDataTexture;
      uniform float myChainSize;
      `+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",`
        //gl_InstanceID
        ivec2 scaledUV = ivec2(uv * myChainSize); 

        vec3 direction = texelFetch(myDataTexture, ivec2(scaledUV.y, gl_InstanceID ), 0).xyz;
        vec3 direction1 = texelFetch(myDataTexture, ivec2(scaledUV.y + 1 , gl_InstanceID), 0).xyz;    
        
        // // -----NORMAL --------------------------------
        vec3 up  = normalize(vec3(0.0, 0.0, -1.0));         
        vec3 norm  = normalize(direction1 - direction);             

        vec3 tang  = normalize(cross(up, norm));
        vec3 binormal  = normalize(cross(tang, norm));
        mat3 tbnMatrix  = mat3(tang, norm, binormal);
        
        transformed.y = 0.0;
        transformed =  tbnMatrix * transformed;  

        transformed += direction;
        vNormal = normalize( transformedNormal );
   

      `)},this.fatLine=new bh(n,i,t),this.fatLine.castShadow=!0,this.fatLine.receiveShadow=!0,this.scene.add(this.fatLine)}async initDataTexture(e){const t=e;let n=this.sizeUVx+2;this.dataOfChainForTexture=new Float32Array(4*n*t);for(let i=0;i<t;i++)for(let s=0;s<n;s++){const r=i*(n*4);this.dataOfChainForTexture[4*s+r]=.1,this.dataOfChainForTexture[4*s+1+r]=.2,this.dataOfChainForTexture[4*s+2+r]=.3,this.dataOfChainForTexture[4*s+3+r]=.4}this.dataTexture=new na(this.dataOfChainForTexture,n,t,qt,Gt,0,Nt,Nt),this.dataTexture.needsUpdate=!0}}class yy{constructor(){Ma(this,"renderLoop",()=>{this.renderer.setAnimationLoop(e=>{const t=performance.now()/1e3;if(!this.lastCallTime)this.world.step(this.timeStep);else{const n=t-this.lastCallTime;for(let i=0;i<4;i++)this.world.step(this.timeStep,n/4)}this.balloonArray.map((n,i)=>{for(let s=0;s<n.arrayBodys.length;s++){const r=n.arrayBodys[s].sphere;r.position.copy(n.arrayBodys[s].bodySphere.position),r.quaternion.copy(n.arrayBodys[s].bodySphere.quaternion);const l=n.curve.mesh.geometry.attributes.position;l.setXYZ(s,r.position.x,r.position.y,r.position.z),l.needsUpdate=!0;const h=(n.arrayBodys.length+1)*4*i;this.fatLines.dataOfChainForTexture[4*s+h]=r.position.x,this.fatLines.dataOfChainForTexture[4*s+1+h]=r.position.y,this.fatLines.dataOfChainForTexture[4*s+2+h]=r.position.z,this.fatLines.dataOfChainForTexture[4*s+3+h]=0,s==n.arrayBodys.length-1&&(this.fatLines.dataOfChainForTexture[4*(s+1)+h]=r.position.x,this.fatLines.dataOfChainForTexture[4*(s+1)+1+h]=r.position.y+1,this.fatLines.dataOfChainForTexture[4*(s+1)+2+h]=r.position.z,this.fatLines.dataOfChainForTexture[4*(s+1)+3+h]=100)}n.sphereBalloon&&(n.balloonBody.position.y>100&&(n.balloonGravity=new E(0,0,0)),n.balloonBody.applyForce(n.balloonGravity),n.sphereBalloon.position.copy(n.balloonBody.position),n.sphereBalloon.matrix.lookAt(n.sphereBalloon.position,n.arrayBodys[8].sphere.position,new O(0,1,0)),n.sphereBalloon.matrix.setPosition(n.sphereBalloon.position),n.sphereBalloon.matrixNeedsUpdate=!0)}),this.fatLines.dataTexture.image.data=this.fatLines.dataOfChainForTexture,this.fatLines.dataTexture.needsUpdate=!0,this.renderer.render(this.scene,this.camera)})});this.canvas=document.getElementById("canvas"),this.width=window.innerWidth,this.height=window.innerHeight,this.renderer=new Sh({alpha:!1,antialias:!1,canvas:this.canvas}),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wl,this.renderer.toneMapping=ql,this.renderer.toneMappingExposure=1,this.clock=new e0,this.timeStep=1/60,this.lastCallTime==null,this.scene=new E_,this.scene.background=new Ue("rgb(50, 50, 50)"),this.camera=null,this.balloonCount=35,this.chainSize=9,this.loader=new Fx,this.init(),this.addObject(),this.renderLoop()}initEvents(){window.addEventListener("mousemove",e=>{}),window.addEventListener("resize",()=>{this.resize()})}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setSize(this.width,this.height),this.camera.fov=40,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}init(){this.initCamera(),this.initHelpers(),this.initPhysics(),this.initEvents(),this.initLights(),this.addModels()}initCamera(){const t=this.width/this.height,n=.1,i=1e3;this.camera=new Ot(40,t,n,i),this.camera.position.z=50,this.camera.position.y=5,this.controls=new Ux(this.camera,this.canvas),this.controls.enableDamping=!0}initHelpers(){}addObject(){const e=new ss(1,1,1),t=new Wo;this.cube1=new At(e,t),this.cube1.matrixAutoUpdate=!1;const n=new Ir(.5,16,8),i=new Wo;this.sphere1=new At(n,i),this.fatLines=new xy({scene:this.scene,chains:this.balloonCount,chainSize:this.chainSize})}initPhysics(){this.world=new Ax,this.world.solver.iterations=20,this.fixedTimeStep=1/60,this.damping=.01,this.world.broadphase=new Ph,this.world.gravity.set(0,-9.8,0);const e=new Cl,t=new Jn,n=new he({mass:0,material:t,type:he.STATIC});n.quaternion.setFromAxisAngle(new E(1,0,0),-Math.PI/2),n.addShape(e),this.world.addBody(n);const i=new Cl,s=new Jn,r=new he({mass:0,material:s,type:he.STATIC});r.quaternion.setFromAxisAngle(new E(1,0,0),-Math.PI/2),r.addShape(i),this.world.addBody(r);const a=new Jn,c=new Nr(new E(.5,.5,.5));this.body=new he({mass:1,material:a}),this.body.position=new E(5,.5,8),this.body.addShape(c),this.world.addBody(this.body),this.body.angularDamping=.5,this.balloonArray=[],this.addBalloons(),this.world.groundMaterial=n.material}initEvents(){window.addEventListener("keydown",this.keyEvent.bind(this)),document.querySelectorAll(".arrow").forEach(n=>{n.addEventListener("click",this.keyEvent.bind(this))}),document.querySelectorAll(".btnBalloons").forEach(n=>{n.addEventListener("click",this.keyEvent.bind(this))})}initLights(){const e=this.scene;this.loader.setPath("./assets/textures/hdri/").load("basic.hdr",function(i){console.log(i),i.mapping=xr,e.background=i,e.environment=i});const t=new Ch(16777215,1);t.position.set(0,20,20),t.castShadow=!0,this.scene.add(t),t.shadow.mapSize.width=128,t.shadow.mapSize.height=128,t.shadow.bias=-1e-4;const n=t.shadow.camera;n.left=-15,n.right=15,n.top=15,n.bottom=-15,n.near=.5,n.far=40}keyEvent(e){const t=e.target.accessKey;if((e.key==="ArrowLeft"||t==="ArrowLeft")&&this.balloonArray.map(i=>{i.arrayBodys[0].bodySphere.position.x-=.5}),(e.key==="ArrowRight"||t==="ArrowRight")&&this.balloonArray.map(i=>{i.arrayBodys[0].bodySphere.position.x+=.5}),(e.key==="ArrowUp"||t==="ArrowUp")&&this.balloonArray.map(i=>{i.arrayBodys[0].bodySphere.position.z-=.5}),(e.key==="ArrowDown"||t==="ArrowDown")&&this.balloonArray.map(i=>{i.arrayBodys[0].bodySphere.position.z+=.5}),t==="plus"){for(var n=0;n<this.balloonArray.length;n++)if(this.balloonArray[n].arrayBodys[0].bodySphere.invMass===1&&this.balloonArray[n].balloonGravity.y<=0&&this.balloonArray[n].balloonBody.position.y<=5){this.balloonArray[n].balloonGravity=new E(0,50,0);break}}if(t==="minus"){for(var n=0;n<this.balloonArray.length;n++)if(this.balloonArray[n].arrayBodys[0].bodySphere.invMass===0){this.balloonArray[n].arrayBodys[0].bodySphere.invMass=1,this.balloonArray[n].arrayBodys[0].bodySphere.mass=1,this.balloonArray[n].arrayBodys[0].bodySphere.invMassSolve=1,this.balloonArray[n].arrayBodys[0].bodySphere.type=1;break}}}addBalloons(){for(let e=0;e<this.balloonCount;e++){const t=new vy({world:this.world,scene:this.scene,chainSize:this.chainSize,chainDist:.5*Math.random()+.4,balloonRadius:1.1,balloonGravity:new E(0,50,0),rootPosition:new E(0,0,0)});this.balloonArray.push(t)}}addModels(){const e=new Rs(25,25,25);e.rotateX(Math.PI*-.5);const t=new Cs({color:6715255,envMap:this.scene.environment,envMapIntensity:1});t.depthTest=!0;const n=new At(e,t);n.receiveShadow=!0,n.transparent=!0,n.opacity=.9,this.scene.add(n)}}new yy;
