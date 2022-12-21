import{x as e}from"./main-c4dd4de7.js";function n(e){return Intl.getCanonicalLocales(e)}function t(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function r(e){if(void 0===e)return NaN;if(null===e)return 0;if("boolean"==typeof e)return e?1:0;if("number"==typeof e)return e;if("symbol"==typeof e||"bigint"==typeof e)throw new TypeError("Cannot convert symbol/bigint to number");return Number(e)}function u(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function i(e,n){return Object.is?Object.is(e,n):e===n?0!==e||1/e==1/n:e!=e&&n!=n}function a(e){return new Array(e)}function o(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var c=864e5;function l(e,n){return e-Math.floor(e/n)*n}function s(e){return Math.floor(e/c)}function f(e){return Date.UTC(e,0)/c}function D(e){return new Date(e).getUTCFullYear()}function m(e){return e%4!=0?365:e%100!=0?366:e%400!=0?365:366}function g(e){return s(e)-f(D(e))}function p(e){return 365===m(D(e))?0:1}function d(e){var n=g(e),t=p(e);if(n>=0&&n<31)return 0;if(n<59+t)return 1;if(n<90+t)return 2;if(n<120+t)return 3;if(n<151+t)return 4;if(n<181+t)return 5;if(n<212+t)return 6;if(n<243+t)return 7;if(n<273+t)return 8;if(n<304+t)return 9;if(n<334+t)return 10;if(n<365+t)return 11;throw new Error("Invalid time")}var y=1e3;function F(e){return void 0===e?Object.create(null):u(e)}function v(e,n,t,r){if(void 0!==e){if(e=Number(e),isNaN(e)||e<n||e>t)throw new RangeError("".concat(e," is outside of range [").concat(n,", ").concat(t,"]"));return Math.floor(e)}return r}function h(e,n,t,r,u){return v(e[n],t,r,u)}function b(e,n,r,u,i){if("object"!=typeof e)throw new TypeError("Options must be an object");var a=e[n];if(void 0!==a){if("boolean"!==r&&"string"!==r)throw new TypeError("invalid type");if("boolean"===r&&(a=Boolean(a)),"string"===r&&(a=t(a)),void 0!==u&&!u.filter((function(e){return e==a})).length)throw new RangeError("".concat(a," is not within ").concat(u.join(", ")));return a}return i}var E=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];function C(e){return e.slice(e.indexOf("-")+1)}var S=E.map(C);function w(e){return S.indexOf(e)>-1}var A=/[^A-Z]/;function x(e){return 3===(e=e.replace(/([a-z])/g,(function(e,n){return n.toUpperCase()}))).length&&!A.test(e)}function B(e){if(w(e=e.replace(/([A-Z])/g,(function(e,n){return n.toLowerCase()}))))return!0;var n=e.split("-per-");if(2!==n.length)return!1;var t=n[0],r=n[1];return!(!w(t)||!w(r))}function O(e){return Math.floor(Math.log(e)*Math.LOG10E)}function N(e,n){if("function"==typeof e.repeat)return e.repeat(n);for(var t=new Array(n),r=0;r<t.length;r++)t[r]=e;return t.join("")}function I(e,n,t,r){e.get(n)||e.set(n,Object.create(null)),e.get(n)[t]=r}function M(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var u=e.get(n);if(!u)throw new TypeError("".concat(n," InternalSlot has not been initialized"));return t.reduce((function(e,n){return e[n]=u[n],e}),Object.create(null))}function T(e,n,t){if(void 0===t&&(t=Error),!e)throw new t(n)}function k(e,n,t){var r=(0,t.getInternalSlots)(e),u=r.notation,i=r.dataLocaleData,a=r.numberingSystem;switch(u){case"standard":return 0;case"scientific":return n;case"engineering":return 3*Math.floor(n/3);default:var o=r.compactDisplay,c=r.style,l=r.currencyDisplay,s=void 0;if("currency"===c&&"name"!==l){s=(i.numbers.currency[a]||i.numbers.currency[i.numbers.nu[0]]).short}else{var f=i.numbers.decimal[a]||i.numbers.decimal[i.numbers.nu[0]];s="long"===o?f.long:f.short}if(!s)return 0;var D=String(Math.pow(10,n)),m=Object.keys(s);if(D<m[0])return 0;if(D>m[m.length-1])return m[m.length-1].length-1;var g=m.indexOf(D);if(-1===g)return 0;var p=m[g];return"0"===s[p].other?0:p.length-s[p].other.match(/0+/)[0].length}}function j(e,n,t){var r,u,i,a,o=t;if(0===e)r=N("0",o),u=0,i=0;else{var c=e.toString(),l=c.indexOf("e"),s=c.split("e"),f=s[0],D=s[1],m=f.replace(".","");if(l>=0&&m.length<=o)u=+D,r=m+N("0",o-m.length),i=e;else{var g=(u=O(e))-o+1,p=Math.round(y(e,g));y(p,o-1)>=10&&(u+=1,p=Math.floor(p/10)),r=p.toString(),i=y(p,o-1-u)}}if(u>=o-1?(r+=N("0",u-o+1),a=u+1):u>=0?(r="".concat(r.slice(0,u+1),".").concat(r.slice(u+1)),a=u+1):(r="0.".concat(N("0",-u-1)).concat(r),a=1),r.indexOf(".")>=0&&t>n){for(var d=t-n;d>0&&"0"===r[r.length-1];)r=r.slice(0,-1),d--;"."===r[r.length-1]&&(r=r.slice(0,-1))}return{formattedString:r,roundedNumber:i,integerDigitsCount:a};function y(e,n){return n<0?e*Math.pow(10,-n):e/Math.pow(10,n)}}function L(e,n,t){var r,u,i=t,a=Math.round(e*Math.pow(10,i)),o=a/Math.pow(10,i);if(a<1e21)r=a.toString();else{var c=(r=a.toString()).split("e"),l=c[0],s=c[1];r=l.replace(".",""),r+=N("0",Math.max(+s-r.length+1,0))}if(0!==i){var f=r.length;if(f<=i)r=N("0",i+1-f)+r,f=i+1;var D=r.slice(0,f-i),m=r.slice(f-i);r="".concat(D,".").concat(m),u=D.length}else u=r.length;for(var g=t-n;g>0&&"0"===r[r.length-1];)r=r.slice(0,-1),g--;return"."===r[r.length-1]&&(r=r.slice(0,-1)),{formattedString:r,roundedNumber:o,integerDigitsCount:u}}function U(e,n){var t,r=n<0||i(n,-0);switch(r&&(n=-n),e.roundingType){case"significantDigits":t=j(n,e.minimumSignificantDigits,e.maximumSignificantDigits);break;case"fractionDigits":t=L(n,e.minimumFractionDigits,e.maximumFractionDigits);break;default:(t=j(n,1,2)).integerDigitsCount>1&&(t=L(n,0,0))}n=t.roundedNumber;var u=t.formattedString,a=t.integerDigitsCount,o=e.minimumIntegerDigits;a<o&&(u=N("0",o-a)+u);return r&&(n=-n),{roundedNumber:n,formattedString:u}}function P(e,n,t){var r=t.getInternalSlots;if(0===n)return[0,0];n<0&&(n=-n);var u=O(n),i=k(e,u,{getInternalSlots:r});n=i<0?n*Math.pow(10,-i):n/Math.pow(10,i);var a=U(r(e),n);return 0===a.roundedNumber||O(a.roundedNumber)===u-i?[i,u]:[k(e,u+1,{getInternalSlots:r}),u+1]}function R(e,n){var t=n.currencyDigitsData;return o(t,e)?t[e]:2}var z={adlm:["𞥐","𞥑","𞥒","𞥓","𞥔","𞥕","𞥖","𞥗","𞥘","𞥙"],ahom:["𑜰","𑜱","𑜲","𑜳","𑜴","𑜵","𑜶","𑜷","𑜸","𑜹"],arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],bhks:["𑱐","𑱑","𑱒","𑱓","𑱔","𑱕","𑱖","𑱗","𑱘","𑱙"],brah:["𑁦","𑁧","𑁨","𑁩","𑁪","𑁫","𑁬","𑁭","𑁮","𑁯"],cakm:["𑄶","𑄷","𑄸","𑄹","𑄺","𑄻","𑄼","𑄽","𑄾","𑄿"],cham:["꩐","꩑","꩒","꩓","꩔","꩕","꩖","꩗","꩘","꩙"],deva:["०","१","२","३","४","५","६","७","८","९"],diak:["𑥐","𑥑","𑥒","𑥓","𑥔","𑥕","𑥖","𑥗","𑥘","𑥙"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gong:["𑶠","𑶡","𑶢","𑶣","𑶤","𑶥","𑶦","𑶧","𑶨","𑶩"],gonm:["𑵐","𑵑","𑵒","𑵓","𑵔","𑵕","𑵖","𑵗","𑵘","𑵙"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],hmng:["𖭐","𖭑","𖭒","𖭓","𖭔","𖭕","𖭖","𖭗","𖭘","𖭙"],hmnp:["𞅀","𞅁","𞅂","𞅃","𞅄","𞅅","𞅆","𞅇","𞅈","𞅉"],java:["꧐","꧑","꧒","꧓","꧔","꧕","꧖","꧗","꧘","꧙"],kali:["꤀","꤁","꤂","꤃","꤄","꤅","꤆","꤇","꤈","꤉"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],lana:["᪀","᪁","᪂","᪃","᪄","᪅","᪆","᪇","᪈","᪉"],lanatham:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],lepc:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mathbold:["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗"],mathdbl:["𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"],mathmono:["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"],mathsanb:["𝟬","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵"],mathsans:["𝟢","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],modi:["𑙐","𑙑","𑙒","𑙓","𑙔","𑙕","𑙖","𑙗","𑙘","𑙙"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mroo:["𖩠","𖩡","𖩢","𖩣","𖩤","𖩥","𖩦","𖩧","𖩨","𖩩"],mtei:["꯰","꯱","꯲","꯳","꯴","꯵","꯶","꯷","꯸","꯹"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],mymrshan:["႐","႑","႒","႓","႔","႕","႖","႗","႘","႙"],mymrtlng:["꧰","꧱","꧲","꧳","꧴","꧵","꧶","꧷","꧸","꧹"],newa:["𑑐","𑑑","𑑒","𑑓","𑑔","𑑕","𑑖","𑑗","𑑘","𑑙"],nkoo:["߀","߁","߂","߃","߄","߅","߆","߇","߈","߉"],olck:["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],osma:["𐒠","𐒡","𐒢","𐒣","𐒤","𐒥","𐒦","𐒧","𐒨","𐒩"],rohg:["𐴰","𐴱","𐴲","𐴳","𐴴","𐴵","𐴶","𐴷","𐴸","𐴹"],saur:["꣐","꣑","꣒","꣓","꣔","꣕","꣖","꣗","꣘","꣙"],segment:["🯰","🯱","🯲","🯳","🯴","🯵","🯶","🯷","🯸","🯹"],shrd:["𑇐","𑇑","𑇒","𑇓","𑇔","𑇕","𑇖","𑇗","𑇘","𑇙"],sind:["𑋰","𑋱","𑋲","𑋳","𑋴","𑋵","𑋶","𑋷","𑋸","𑋹"],sinh:["෦","෧","෨","෩","෪","෫","෬","෭","෮","෯"],sora:["𑃰","𑃱","𑃲","𑃳","𑃴","𑃵","𑃶","𑃷","𑃸","𑃹"],sund:["᮰","᮱","᮲","᮳","᮴","᮵","᮶","᮷","᮸","᮹"],takr:["𑛀","𑛁","𑛂","𑛃","𑛄","𑛅","𑛆","𑛇","𑛈","𑛉"],talu:["᧐","᧑","᧒","᧓","᧔","᧕","᧖","᧗","᧘","᧙"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"],tirh:["𑓐","𑓑","𑓒","𑓓","𑓔","𑓕","𑓖","𑓗","𑓘","𑓙"],vaii:["ᘠ","ᘡ","ᘢ","ᘣ","ᘤ","ᘥ","ᘦ","ᘧ","ᘨ","ᘩ"],wara:["𑣠","𑣡","𑣢","𑣣","𑣤","𑣥","𑣦","𑣧","𑣨","𑣩"],wcho:["𞋰","𞋱","𞋲","𞋳","𞋴","𞋵","𞋶","𞋷","𞋸","𞋹"]},_=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,G=new RegExp("^".concat(_.source)),Y=new RegExp("".concat(_.source,"$")),Z=/[#0](?:[\.,][#0]+)*/g;function $(e,n,t,r){var u,i,a=e.sign,o=e.exponent,c=e.magnitude,l=r.notation,s=r.style,f=r.numberingSystem,D=n.numbers.nu[0],m=null;if("compact"===l&&c&&(m=function(e,n,t,r,u,i,a){var o,c,l=e.roundedNumber,s=e.sign,f=e.magnitude,D=String(Math.pow(10,f)),m=t.numbers.nu[0];if("currency"===r&&"name"!==i){var g=null===(o=((p=t.numbers.currency)[a]||p[m]).short)||void 0===o?void 0:o[D];if(!g)return null;c=V(n,l,g)}else{var p,d=((p=t.numbers.decimal)[a]||p[m])[u][D];if(!d)return null;c=V(n,l,d)}if("0"===c)return null;return c=W(c,s).replace(/([^\s;\-\+\d¤]+)/g,"{c:$1}").replace(/0+/,"0"),c}(e,t,n,s,r.compactDisplay,r.currencyDisplay,f)),"currency"===s&&"name"!==r.currencyDisplay){var g=n.currencies[r.currency];if(g)switch(r.currencyDisplay){case"code":u=r.currency;break;case"symbol":u=g.symbol;break;default:u=g.narrow}else u=r.currency}if(m)i=m;else if("decimal"===s||"unit"===s||"currency"===s&&"name"===r.currencyDisplay)i=W((n.numbers.decimal[f]||n.numbers.decimal[D]).standard,a);else if("currency"===s){i=W((d=n.numbers.currency[f]||n.numbers.currency[D])[r.currencySign],a)}else{i=W(n.numbers.percent[f]||n.numbers.percent[D],a)}var p=Z.exec(i)[0];if(i=i.replace(Z,"{0}").replace(/'(.)'/g,"$1"),"currency"===s&&"name"!==r.currencyDisplay){var d,y=(d=n.numbers.currency[f]||n.numbers.currency[D]).currencySpacing.afterInsertBetween;y&&!Y.test(u)&&(i=i.replace("¤{0}","¤".concat(y,"{0}")));var F=d.currencySpacing.beforeInsertBetween;F&&!G.test(u)&&(i=i.replace("{0}¤","{0}".concat(F,"¤")))}for(var v=i.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),h=[],b=n.numbers.symbols[f]||n.numbers.symbols[D],E=0,C=v;E<C.length;E++){if($=C[E])switch($){case"{0}":h.push.apply(h,H(b,e,l,o,f,!m&&r.useGrouping,p));break;case"-":h.push({type:"minusSign",value:b.minusSign});break;case"+":h.push({type:"plusSign",value:b.plusSign});break;case"%":h.push({type:"percentSign",value:b.percentSign});break;case"¤":h.push({type:"currency",value:u});break;default:/^\{c:/.test($)?h.push({type:"compact",value:$.substring(3,$.length-1)}):h.push({type:"literal",value:$})}}switch(s){case"currency":if("name"===r.currencyDisplay){var S=(n.numbers.currency[f]||n.numbers.currency[D]).unitPattern,w=void 0,A=n.currencies[r.currency];w=A?V(t,e.roundedNumber*Math.pow(10,o),A.displayName):r.currency;for(var x=[],B=0,O=S.split(/(\{[01]\})/g);B<O.length;B++){switch($=O[B]){case"{0}":x.push.apply(x,h);break;case"{1}":x.push({type:"currency",value:w});break;default:$&&x.push({type:"literal",value:$})}}return x}return h;case"unit":var N=r.unit,I=r.unitDisplay,M=n.units.simple[N];S=void 0;if(M)S=V(t,e.roundedNumber*Math.pow(10,o),n.units.simple[N][I]);else{var T=N.split("-per-"),k=T[0],j=T[1];M=n.units.simple[k];var L=V(t,e.roundedNumber*Math.pow(10,o),n.units.simple[k][I]),U=n.units.simple[j].perUnit[I];if(U)S=U.replace("{0}",L);else{var P=n.units.compound.per[I],R=V(t,1,n.units.simple[j][I]);S=S=P.replace("{0}",L).replace("{1}",R.replace("{0}",""))}}x=[];for(var z=0,_=S.split(/(\s*\{0\}\s*)/);z<_.length;z++){var $=_[z],q=/^(\s*)\{0\}(\s*)$/.exec($);q?(q[1]&&x.push({type:"literal",value:q[1]}),x.push.apply(x,h),q[2]&&x.push({type:"literal",value:q[2]})):$&&x.push({type:"unit",value:$})}return x;default:return h}}function H(e,n,t,r,u,i,a){var o=[],c=n.formattedString,l=n.roundedNumber;if(isNaN(l))return[{type:"nan",value:c}];if(!isFinite(l))return[{type:"infinity",value:c}];var s=z[u];s&&(c=c.replace(/\d/g,(function(e){return s[+e]||e})));var f,D,m=c.indexOf(".");if(m>0?(f=c.slice(0,m),D=c.slice(m+1)):f=c,i&&("compact"!==t||l>=1e4)){var g=e.group,p=[],d=a.split(".")[0].split(","),y=3,F=3;d.length>1&&(y=d[d.length-1].length),d.length>2&&(F=d[d.length-2].length);var v=f.length-y;if(v>0){for(p.push(f.slice(v,v+y)),v-=F;v>0;v-=F)p.push(f.slice(v,v+F));p.push(f.slice(0,v+F))}else p.push(f);for(;p.length>0;){var h=p.pop();o.push({type:"integer",value:h}),p.length>0&&o.push({type:"group",value:g})}}else o.push({type:"integer",value:f});if(void 0!==D&&o.push({type:"decimal",value:e.decimal},{type:"fraction",value:D}),("scientific"===t||"engineering"===t)&&isFinite(l)){o.push({type:"exponentSeparator",value:e.exponential}),r<0&&(o.push({type:"exponentMinusSign",value:e.minusSign}),r=-r);var b=L(r,0,0);o.push({type:"exponentInteger",value:b.formattedString})}return o}function W(e,n){e.indexOf(";")<0&&(e="".concat(e,";-").concat(e));var t=e.split(";"),r=t[0],u=t[1];switch(n){case 0:return r;case-1:return u;default:return u.indexOf("-")>=0?u.replace(/-/g,"+"):"+".concat(r)}}function V(e,n,t){return t[e.select(n)]||t.other}function q(e,n,t){var r,u,a,o=t.getInternalSlots,c=o(e),l=c.pl,s=c.dataLocaleData,f=c.numberingSystem,D=s.numbers.symbols[f]||s.numbers.symbols[s.numbers.nu[0]],m=0,g=0;if(isNaN(n))u=D.nan;else if(isFinite(n)){"percent"===c.style&&(n*=100),g=(r=P(e,n,{getInternalSlots:o}))[0],m=r[1];var p=U(c,n=g<0?n*Math.pow(10,-g):n/Math.pow(10,g));u=p.formattedString,n=p.roundedNumber}else u=D.infinity;switch(c.signDisplay){case"never":a=0;break;case"auto":a=i(n,0)||n>0||isNaN(n)?0:-1;break;case"always":a=i(n,0)||n>0||isNaN(n)?1:-1;break;default:a=0===n||isNaN(n)?0:n>0?1:-1}return $({roundedNumber:n,formattedString:u,exponent:g,magnitude:m,sign:a},c.dataLocaleData,l,c)}var J,K=/-u(?:-[0-9a-z]{2,8})+/gi;function Q(e,n,t){if(void 0===t&&(t=Error),!e)throw new t(n)}function X(e,n){for(var t=n;;){if(e.has(t))return t;var r=t.lastIndexOf("-");if(!~r)return;r>=2&&"-"===t[r-2]&&(r-=2),t=t.slice(0,r)}}function ee(e,n){Q(2===n.length,"key must have 2 elements");var t=e.length,r="-".concat(n,"-"),u=e.indexOf(r);if(-1!==u){for(var i=u+4,a=i,o=i,c=!1;!c;){var l=e.indexOf("-",o);2===(-1===l?t-o:l-o)?c=!0:-1===l?(a=t,c=!0):(a=l,o=l+1)}return e.slice(i,a)}if(r="-".concat(n),-1!==(u=e.indexOf(r))&&u+3===t)return""}function ne(e,n,t,r,u,i){var a;a="lookup"===t.localeMatcher?function(e,n,t){for(var r={locale:""},u=0,i=n;u<i.length;u++){var a=i[u],o=a.replace(K,""),c=X(e,o);if(c)return r.locale=c,a!==o&&(r.extension=a.slice(o.length+1,a.length)),r}return r.locale=t(),r}(e,n,i):function(e,n,t){var r,u={},i={},a={},o=new Set;e.forEach((function(e){var n=new Intl.Locale(e).minimize().toString(),t=Intl.getCanonicalLocales(e)[0]||e;u[n]=e,i[e]=e,a[t]=e,o.add(n),o.add(e),o.add(t)}));for(var c=0,l=n;c<l.length;c++){var s=l[c];if(r)break;var f=s.replace(K,"");if(e.has(f)){r=f;break}if(o.has(f)){r=f;break}var D=new Intl.Locale(f),m=D.maximize().toString(),g=D.minimize().toString();if(o.has(g)){r=g;break}r=X(o,m)}return r?{locale:i[r]||a[r]||u[r]||r}:{locale:t()}}(e,n,i);for(var o=a.locale,c={locale:"",dataLocale:o},l="-u",s=0,f=r;s<f.length;s++){var D=f[s];Q(o in u,"Missing locale data for ".concat(o));var m=u[o];Q("object"==typeof m&&null!==m,"locale data ".concat(D," must be an object"));var g=m[D];Q(Array.isArray(g),"keyLocaleData for ".concat(D," must be an array"));var p=g[0];Q("string"==typeof p||null===p,"value must be string or null but got ".concat(typeof p," in key ").concat(D));var d="";if(a.extension){var y=ee(a.extension,D);void 0!==y&&(""!==y?~g.indexOf(y)&&(p=y,d="-".concat(D,"-").concat(p)):~y.indexOf("true")&&(p="true",d="-".concat(D)))}if(D in t){var F=t[D];Q("string"==typeof F||null==F,"optionsValue must be String, Undefined or Null"),~g.indexOf(F)&&F!==p&&(p=F,d="")}c[D]=p,l+=d}if(l.length>2){var v=o.indexOf("-x-");if(-1===v)o+=l;else{var h=o.slice(0,v),b=o.slice(v,o.length);o=h+l+b}o=Intl.getCanonicalLocales(o)[0]}return c.locale=o,c}function te(e,n){for(var t=[],r=0,u=n;r<u.length;r++){var i=X(e,u[r].replace(K,""));i&&t.push(i)}return t}function re(e,n,t){void 0===n&&(n=Object.create(null));var r=(0,t.getInternalSlots)(e),u=b(n,"style","string",["decimal","percent","currency","unit"],"decimal");r.style=u;var i=b(n,"currency","string",void 0,void 0);if(void 0!==i&&!x(i))throw RangeError("Malformed currency code");if("currency"===u&&void 0===i)throw TypeError("currency cannot be undefined");var a=b(n,"currencyDisplay","string",["code","symbol","narrowSymbol","name"],"symbol"),o=b(n,"currencySign","string",["standard","accounting"],"standard"),c=b(n,"unit","string",void 0,void 0);if(void 0!==c&&!B(c))throw RangeError("Invalid unit argument for Intl.NumberFormat()");if("unit"===u&&void 0===c)throw TypeError("unit cannot be undefined");var l=b(n,"unitDisplay","string",["short","narrow","long"],"short");"currency"===u&&(r.currency=i.toUpperCase(),r.currencyDisplay=a,r.currencySign=o),"unit"===u&&(r.unit=c,r.unitDisplay=l)}function ue(e,n,t,r,u){var i=h(n,"minimumIntegerDigits",1,21,1),a=n.minimumFractionDigits,o=n.maximumFractionDigits,c=n.minimumSignificantDigits,l=n.maximumSignificantDigits;if(e.minimumIntegerDigits=i,void 0!==c||void 0!==l)e.roundingType="significantDigits",c=v(c,1,21,1),l=v(l,c,21,21),e.minimumSignificantDigits=c,e.maximumSignificantDigits=l;else if(void 0!==a||void 0!==o){e.roundingType="fractionDigits",a=v(a,0,20,t),o=v(o,a,20,Math.max(a,r)),e.minimumFractionDigits=a,e.maximumFractionDigits=o}else"compact"===u?e.roundingType="compactRounding":(e.roundingType="fractionDigits",e.minimumFractionDigits=t,e.maximumFractionDigits=r)}!function(n){function t(){var e=null!==n&&n.apply(this,arguments)||this;return e.type="MISSING_LOCALE_DATA",e}e(t,n)}(Error),function(e){e.startRange="startRange",e.shared="shared",e.endRange="endRange"}(J||(J={}));var ie=Object.freeze({__proto__:null,_formatToParts:$,getInternalSlot:function(e,n,t){return M(e,n,t)[t]},getMultiInternalSlots:M,isLiteralPart:function(e){return"literal"===e.type},setInternalSlot:I,setMultiInternalSlots:function(e,n,t){for(var r=0,u=Object.keys(t);r<u.length;r++){var i=u[r];I(e,n,i,t[i])}},getMagnitude:O,defineProperty:function(e,n,t){var r=t.value;Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:!0,value:r})},isMissingLocaleDataError:function(e){return"MISSING_LOCALE_DATA"===e.type},invariant:T,CanonicalizeLocaleList:n,CanonicalizeTimeZoneName:function(e,n){var t=n.tzData,r=n.uppercaseLinks,u=e.toUpperCase(),i=Object.keys(t).reduce((function(e,n){return e[n.toUpperCase()]=n,e}),{}),a=r[u]||i[u];return"Etc/UTC"===a||"Etc/GMT"===a?"UTC":a},CoerceOptionsToObject:F,GetNumberOption:h,GetOption:b,GetOptionsObject:function(e){if(void 0===e)return Object.create(null);if("object"==typeof e)return e;throw new TypeError("Options must be an object")},SANCTIONED_UNITS:E,removeUnitNamespace:C,SIMPLE_UNITS:S,IsSanctionedSimpleUnitIdentifier:w,IsValidTimeZoneName:function(e,n){var t=n.tzData,r=n.uppercaseLinks,u=e.toUpperCase(),i=new Set,a=new Set;return Object.keys(t).map((function(e){return e.toUpperCase()})).forEach((function(e){return i.add(e)})),Object.keys(r).forEach((function(e){a.add(e.toUpperCase()),i.add(r[e].toUpperCase())})),i.has(u)||a.has(u)},IsWellFormedCurrencyCode:x,IsWellFormedUnitIdentifier:B,ComputeExponent:P,ComputeExponentForMagnitude:k,CurrencyDigits:R,FormatNumericToParts:function(e,n,t){for(var r=q(e,n,t),u=a(0),i=0,o=r;i<o.length;i++){var c=o[i];u.push({type:c.type,value:c.value})}return u},FormatNumericToString:U,InitializeNumberFormat:function(e,t,r,u){var i=u.getInternalSlots,a=u.localeData,o=u.availableLocales,c=u.numberingSystemNames,l=u.getDefaultLocale,s=u.currencyDigitsData,f=n(t),D=F(r),m=Object.create(null),g=b(D,"localeMatcher","string",["lookup","best fit"],"best fit");m.localeMatcher=g;var p=b(D,"numberingSystem","string",void 0,void 0);if(void 0!==p&&c.indexOf(p)<0)throw RangeError("Invalid numberingSystems: ".concat(p));m.nu=p;var d=ne(o,f,m,["nu"],a,l),y=a[d.dataLocale];T(!!y,"Missing locale data for ".concat(d.dataLocale));var v=i(e);v.locale=d.locale,v.dataLocale=d.dataLocale,v.numberingSystem=d.nu,v.dataLocaleData=y,re(e,D,{getInternalSlots:i});var h,E,C=v.style;if("currency"===C){var S=R(v.currency,{currencyDigitsData:s});h=S,E=S}else h=0,E="percent"===C?0:3;var w=b(D,"notation","string",["standard","scientific","engineering","compact"],"standard");v.notation=w,ue(v,D,h,E,w);var A=b(D,"compactDisplay","string",["short","long"],"short");"compact"===w&&(v.compactDisplay=A);var x=b(D,"useGrouping","boolean",void 0,!0);v.useGrouping=x;var B=b(D,"signDisplay","string",["auto","never","always","exceptZero"],"auto");return v.signDisplay=B,e},PartitionNumberPattern:q,SetNumberFormatDigitOptions:ue,SetNumberFormatUnitOptions:re,ToRawFixed:L,ToRawPrecision:j,PartitionPattern:function(e){for(var n=[],t=e.indexOf("{"),r=0,u=0,i=e.length;t<e.length&&t>-1;)T((r=e.indexOf("}",t))>t,"Invalid pattern ".concat(e)),t>u&&n.push({type:"literal",value:e.substring(u,t)}),n.push({type:e.substring(t+1,r),value:void 0}),u=r+1,t=e.indexOf("{",u);return u<i&&n.push({type:"literal",value:e.substring(u,i)}),n},SupportedLocales:function(e,n,t){return void 0!==t&&b(t=u(t),"localeMatcher","string",["lookup","best fit"],"best fit"),te(e,n)},get RangePatternType(){return J},ToString:t,ToNumber:r,TimeClip:function(e){return isFinite(e)?Math.abs(e)>8640000000000001?NaN:function(e){var n=r(e);if(isNaN(n)||i(n,-0))return 0;if(isFinite(n))return n;var t=Math.floor(Math.abs(n));return n<0&&(t=-t),i(t,-0)?0:t}(e):NaN},ToObject:u,SameValue:i,ArrayCreate:a,HasOwnProperty:o,Type:function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":void 0},Day:s,WeekDay:function(e){return l(s(e)+4,7)},DayFromYear:f,TimeFromYear:function(e){return Date.UTC(e,0)},YearFromTime:D,DaysInYear:m,DayWithinYear:g,InLeapYear:p,MonthFromTime:d,DateFromTime:function(e){var n=g(e),t=d(e),r=p(e);if(0===t)return n+1;if(1===t)return n-30;if(2===t)return n-58-r;if(3===t)return n-89-r;if(4===t)return n-119-r;if(5===t)return n-150-r;if(6===t)return n-180-r;if(7===t)return n-211-r;if(8===t)return n-242-r;if(9===t)return n-272-r;if(10===t)return n-303-r;if(11===t)return n-333-r;throw new Error("Invalid time")},HourFromTime:function(e){return l(Math.floor(e/36e5),24)},MinFromTime:function(e){return l(Math.floor(e/6e4),60)},SecFromTime:function(e){return l(Math.floor(e/y),60)},OrdinaryHasInstance:function(e,n,t){if("function"!=typeof e)return!1;if(null==t?void 0:t.boundTargetFunction)return n instanceof(null==t?void 0:t.boundTargetFunction);if("object"!=typeof n)return!1;var r=e.prototype;if("object"!=typeof r)throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");return Object.prototype.isPrototypeOf.call(r,n)},msFromTime:function(e){return l(e,y)}});export{ie as l};
