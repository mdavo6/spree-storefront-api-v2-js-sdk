!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(global,(function(){return(()=>{"use strict";var e={390:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(919),o=s(r(378));t.default=class{constructor(e){const t={host:globalThis.process&&globalThis.process.env.SPREE_HOST||"http://localhost:3000/",fetcherType:"axios",...e};this.fetcher=o.default({host:t.host,fetcherType:t.fetcherType,createFetcher:t.createFetcher}),this.addEndpoints()}addEndpoints(){this.account=this.makeAccount(),this.authentication=this.makeAuthentication(),this.cart=this.makeCart(),this.checkout=this.makeCheckout(),this.countries=this.makeCountries(),this.order=this.makeOrder(),this.pages=this.makePages(),this.products=this.makeProducts(),this.taxons=this.makeTaxons()}makeAccount(){return new a.Account({fetcher:this.fetcher})}makeAuthentication(){return new a.Authentication({fetcher:this.fetcher})}makeCart(){return new a.Cart({fetcher:this.fetcher})}makeCheckout(){return new a.Checkout({fetcher:this.fetcher})}makeCountries(){return new a.Countries({fetcher:this.fetcher})}makeOrder(){return new a.Order({fetcher:this.fetcher})}makePages(){return new a.Pages({fetcher:this.fetcher})}makeProducts(){return new a.Products({fetcher:this.fetcher})}makeTaxons(){return new a.Taxons({fetcher:this.fetcher})}}},759:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(844),c=n(r(306)),i=o(r(614)),d=r(490);t.default=class{constructor({fetcher:e}){this.fetcher=e}async spreeResponse(e,t,r={},s={}){try{const a={url:t,params:s,method:e,headers:this.spreeOrderHeaders(r)},o=await this.fetcher.fetch(a);return i.makeSuccess(o.data)}catch(e){return i.makeFail(this.processError(e))}}classifySpreeError(e){const{error:t,errors:r}=e.data;return"string"==typeof t?"object"==typeof r?d.ErrorClass.FULL:d.ErrorClass.BASIC:d.ErrorClass.LIMITED}processError(e){return e instanceof c.default?e.response?this.processSpreeError(e):e.request?new u.NoResponseError:new u.MisconfigurationError(e.message):new u.SpreeSDKError(e.message)}processSpreeError(e){const{error:t,errors:r}=e.data,s=this.classifySpreeError(e);return s===d.ErrorClass.FULL?new u.ExpandedSpreeError(e.response,t,r):s===d.ErrorClass.BASIC?new u.BasicSpreeError(e.response,t):new u.SpreeError(e.response)}spreeOrderHeaders(e){const t={};return e.orderToken&&(t["X-Spree-Order-Token"]=e.orderToken),e.bearerToken&&(t.Authorization=`Bearer ${e.bearerToken}`),t}}},993:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async accountInfo(e,t={}){return await this.spreeResponse("get",o.default.accountPath(),e,t)}async creditCardsList(e,t={}){return await this.spreeResponse("get",o.default.accountCreditCardsPath(),e,t)}async defaultCreditCard(e,t={}){return await this.spreeResponse("get",o.default.accountDefaultCreditCardPath(),e,t)}async completedOrdersList(e,t={}){return await this.spreeResponse("get",o.default.accountCompletedOrdersPath(),e,t)}async completedOrder(e,t,r={}){return await this.spreeResponse("get",o.default.accountCompletedOrderPath(t),e,r)}async create(e){return await this.spreeResponse("post",o.default.accountPath(),{},e)}async confirm(e){return await this.spreeResponse("get",o.default.accountConfirmPath(e))}async forgotPassword(e){return await this.spreeResponse("post",o.default.forgotPasswordPath(),{},e)}async resetPassword(e,t){return await this.spreeResponse("patch",o.default.resetPasswordPath(e),{},t)}async update(e,t){return await this.spreeResponse("patch",o.default.accountPath(),e,t)}async addressesList(e){return await this.spreeResponse("get",o.default.accountAddressesPath(),e)}async showAddress(e,t,r={}){return await this.spreeResponse("get",o.default.accountAddressPath(t),e,r)}async createAddress(e,t){return await this.spreeResponse("post",o.default.accountAddressesPath(),e,t)}async removeAddress(e,t,r={}){return await this.spreeResponse("delete",o.default.accountAddressRemovePath(t),e,r)}async updateAddress(e,t,r){return await this.spreeResponse("patch",o.default.accountAddressPath(t),e,r)}}t.default=n},464:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(339),o=s(r(759)),n=s(r(319));class u extends o.default{async getToken(e){return await this.spreeResponse("post",n.default.oauthTokenPath(),{},a.authParams(e))}async refreshToken(e){return await this.spreeResponse("post",n.default.oauthTokenPath(),{},a.refreshParams(e))}async revokeToken(e){return await this.spreeResponse("post",n.default.oauthRevokePath(),{},a.revokeParams(e))}}t.default=u},712:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async show(e,t={}){return await this.spreeResponse("get",o.default.cartPath(),e,t)}async create(e,t={}){return await this.spreeResponse("post",o.default.cartPath(),e,t)}async addItem(e,t){return await this.spreeResponse("post",o.default.cartAddItemPath(),e,t)}async removeItem(e,t,r={}){return await this.spreeResponse("delete",o.default.cartRemoveItemPath(t),e,r)}async emptyCart(e,t={}){return await this.spreeResponse("patch",o.default.cartEmptyPath(),e,t)}async remove(e,t={}){return await this.spreeResponse("delete",o.default.cartPath(),e,t)}async setQuantity(e,t){return await this.spreeResponse("patch",o.default.cartSetItemQuantity(),e,t)}async applyCouponCode(e,t){return await this.spreeResponse("patch",o.default.cartApplyCodePath(),e,t)}async removeCouponCode(e,t=null,r={}){let s="";return s=null!==t?o.default.cartRemoveCodePath(t):o.default.cartRemoveCodePath(""),await this.spreeResponse("delete",s,e,r)}async estimateShippingMethods(e,t){return await this.spreeResponse("get",o.default.cartEstimateShippingMethodsPath(),e,t)}async associateGuestCart(e,t){return await this.spreeResponse("patch",o.default.cartAssociatePath(),e,t)}}t.default=n},846:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async orderNext(e,t={}){return await this.spreeResponse("patch",o.default.checkoutNextPath(),e,t)}async orderUpdate(e,t){return await this.spreeResponse("patch",o.default.checkoutPath(),e,t)}async advance(e,t={}){return await this.spreeResponse("patch",o.default.checkoutAdvancePath(),e,t)}async complete(e,t={}){return await this.spreeResponse("patch",o.default.checkoutCompletePath(),e,t)}async addStoreCredits(e,t){return await this.spreeResponse("post",o.default.checkoutAddStoreCreditsPath(),e,t)}async removeStoreCredits(e,t={}){return await this.spreeResponse("post",o.default.checkoutRemoveStoreCreditsPath(),e,t)}async paymentMethods(e){return await this.spreeResponse("get",o.default.checkoutPaymentMethodsPath(),e)}async shippingMethods(e,t={}){return await this.spreeResponse("get",o.default.checkoutShippingMethodsPath(),e,t)}}t.default=n},898:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async list(){return await this.spreeResponse("get",o.default.countriesPath())}async show(e,t={}){return await this.spreeResponse("get",o.default.countryPath(e),{},t)}}t.default=n},298:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async status(e,t,r={}){return await this.spreeResponse("get",o.default.orderStatusPath(t),e,r)}}t.default=n},995:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async list(e={}){return await this.spreeResponse("get",o.default.pagesPath(),{},e)}async show(e,t={}){return await this.spreeResponse("get",o.default.pagePath(e),{},t)}}t.default=n},799:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async list(e={},t={}){return await this.spreeResponse("get",o.default.productsPath(),e,t)}async show(e,t={},r={}){return await this.spreeResponse("get",o.default.productPath(e),t,r)}}t.default=n},193:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(759)),o=s(r(319));class n extends a.default{async list(e={}){return await this.spreeResponse("get",o.default.taxonsPath(),{},e)}async show(e,t={}){return await this.spreeResponse("get",o.default.taxonPath(e),{},t)}}t.default=n},919:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Taxons=t.Pages=t.Products=t.Order=t.Countries=t.Checkout=t.Cart=t.Authentication=t.Account=void 0;const a=s(r(993));t.Account=a.default;const o=s(r(464));t.Authentication=o.default;const n=s(r(712));t.Cart=n.default;const u=s(r(846));t.Checkout=u.default;const c=s(r(898));t.Countries=c.default;const i=s(r(298));t.Order=i.default;const d=s(r(995));t.Pages=d.default;const l=s(r(799));t.Products=l.default;const f=s(r(193));t.Taxons=f.default},112:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(589));class o extends a.default{constructor(e,t){super(e),Object.setPrototypeOf(this,o.prototype),this.name="BasicSpreeError",this.summary=t}}t.default=o},583:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e){super(e),Object.setPrototypeOf(this,o.prototype),this.name="CastError"}}t.default=o},811:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e){super(e),Object.setPrototypeOf(this,o.prototype),this.name="DeserializeError"}}t.default=o},461:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e){super(e),Object.setPrototypeOf(this,o.prototype),this.name="DocumentRelationshipError"}}t.default=o},957:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(566));r(368);const o=s(r(112));class n extends o.default{constructor(e,t,r){super(e,t),Object.setPrototypeOf(this,n.prototype),this.name="ExpandedSpreeError",this.errors=Object.keys(r).reduce(((e,t)=>{const s=t.split(".");let a=s.shift(),o=e;for(;a;)o[a]||(0===s.length?o[a]=r[t]:o[a]={}),o=o[a],a=s.shift();return e}),{})}getErrors(e){return a.default(this.errors,e,null)}}t.default=n},306:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e,t,r,s){super(s),Object.setPrototypeOf(this,o.prototype),this.name="FetchError",this.response=e,this.request=t,this.data=r}}t.default=o},234:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e){super(`Incorrect request setup: ${e}`),Object.setPrototypeOf(this,o.prototype),this.name="MisconfigurationError"}}t.default=o},815:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(){super("No response received from Spree"),Object.setPrototypeOf(this,o.prototype),this.name="NoResponseError"}}t.default=o},589:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(527));class o extends a.default{constructor(e){super(`Spree returned a HTTP ${e.status} error code`),Object.setPrototypeOf(this,o.prototype),this.name="SpreeError",this.serverResponse=e}}t.default=o},527:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype),this.name="SpreeSDKError"}}t.default=r},844:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentRelationshipError=t.FetchError=t.SpreeSDKError=t.SpreeError=t.NoResponseError=t.MisconfigurationError=t.ExpandedSpreeError=t.BasicSpreeError=void 0;const a=s(r(112));t.BasicSpreeError=a.default;const o=s(r(957));t.ExpandedSpreeError=o.default;const n=s(r(234));t.MisconfigurationError=n.default;const u=s(r(815));t.NoResponseError=u.default;const c=s(r(589));t.SpreeError=c.default;const i=s(r(527));t.SpreeSDKError=i.default;const d=s(r(306));t.FetchError=d.default;const l=s(r(461));t.DocumentRelationshipError=l.default},596:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=o(r(850)),c=n(r(306));t.default=e=>{const t=r(376),s=t.create({baseURL:e.host,headers:{"Content-Type":"application/json"},paramsSerializer:e=>u.stringify(e,{arrayFormat:"brackets"})});return{fetch:async e=>{try{const{url:t,params:r,method:a,headers:o}=e;let n;switch(a.toUpperCase()){case"PUT":case"POST":case"DELETE":case"PATCH":n={data:r};break;default:n={params:r}}return{data:(await s({url:t,method:a.toUpperCase(),headers:o,...n})).data}}catch(e){if(t.isAxiosError(e)){const{response:t}=e;if(!t)throw new c.default(null,e.request,null,e.message);const r={...t};throw Object.defineProperties(r,{config:{enumerable:!1},data:{enumerable:!1},headers:{enumerable:!1},request:{enumerable:!1}}),new c.default(r,e.request,r.data,e.message)}throw new c.default(null,null,null,e.message)}}}}},990:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createCustomizedFetchFetcher=void 0;const u=o(r(850)),c=n(r(306)),i=e=>{const t={"Content-Type":"application/json"},{host:r,fetch:s,requestConstructor:a}=e;return{fetch:async e=>{try{const{url:o,params:n,method:i,headers:d}=e,l=new URL(o,r);let f;switch(i.toUpperCase()){case"PUT":case"POST":case"DELETE":case"PATCH":f={body:JSON.stringify(n)};break;default:f=null,l.search=u.stringify(n,{arrayFormat:"brackets"})}const h=new a(l.toString(),{method:i.toUpperCase(),headers:{...t,...d},...f});try{const e=await s(h),t=e.headers.get("content-type");let r;if(r=t&&(t.includes("application/json")||t.includes("application/vnd.api+json"))?await e.json():await e.text(),!e.ok)throw new c.default(e,h,r);return{data:r}}catch(e){if(e instanceof c.default)throw e;throw new c.default(null,h,null,e.message)}}catch(e){if(e instanceof c.default)throw e;throw new c.default(null,null,null,e.message)}}}};t.createCustomizedFetchFetcher=i,t.default=e=>{let t,r;if(globalThis.fetch&&globalThis.Request)t=globalThis.fetch,r=globalThis.Request;else{const e=require("node-fetch");t=e.default,r=e.Request}return i({fetch:t,requestConstructor:r,...e})}},339:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.revokeParams=t.refreshParams=t.authParams=void 0,r(391),t.authParams=({username:e,password:t})=>({username:e,password:t,grant_type:"password"}),t.refreshParams=({refresh_token:e})=>({refresh_token:e,grant_type:"refresh_token"}),t.revokeParams=({token:e})=>({token:e})},378:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(234)),o=s(r(596)),n=s(r(990));t.default=e=>{const t={host:e.host};switch(e.fetcherType){case"axios":return o.default(t);case"fetch":return n.default(t);case"custom":return e.createFetcher(t);default:throw new a.default(`${e.fetcher} is not supported as a fetcher type.`)}}},921:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.findSingleRelationshipDocument=t.findRelationshipDocuments=t.findDocument=void 0;const s=r(844),a=(e,t)=>e.included&&e.included.find((e=>e.type===t.type&&e.id===t.id))||null;t.findDocument=a;const o=(e,t,r)=>{if(!e.included)return[];const o=(t.relationships[r]||{}).data;if(!o)throw new s.DocumentRelationshipError(`Incorrect relationship ${r}.`);let n;return n=Array.isArray(o)?o:[o],n.map((t=>a(e,t))).filter(Boolean)};t.findRelationshipDocuments=o,t.findSingleRelationshipDocument=(e,t,r)=>{const s=o(e,t,r);return 0===s.length?null:s[0]}},614:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.fromJson=t.toJson=t.makeFail=t.makeSuccess=void 0;const u=o(r(844)),c=n(r(583)),i=n(r(811));r(864);const d=e=>({isSuccess:()=>!0,isFail:()=>!1,success:()=>e,fail:()=>{throw new Error("Cannot call fail() on success.")}});t.makeSuccess=d;const l=e=>({isSuccess:()=>!1,isFail:()=>!0,success:()=>{throw new Error("Cannot call success() on fail.")},fail:()=>e});t.makeFail=l,t.toJson=e=>e.isSuccess()?{type:"SpreeSDKResult",subtype:"success",value:e.success()}:{type:"SpreeSDKResult",subtype:"fail",value:{...e.fail()}},t.fromJson=e=>{if("SpreeSDKResult"===e.type){if("success"===e.subtype)return d(e.value);if("fail"===e.subtype)return l((e=>{if(!(e.name in u))throw new c.default("Error not recognized");return Object.assign(Object.create(u[e.name].prototype),e)})(e.value));throw new i.default("Expected success or fail subtype.")}throw new i.default("Unknown signature.")}},341:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.jsonApi=t.storefrontPath=t.routes=t.endpoints=t.makeClient=t.errors=t.result=t.Http=t.Client=void 0;const u=n(r(390));t.Client=u.default;const c=o(r(844));t.errors=c;const i=o(r(614));t.result=i;const d=o(r(921));t.jsonApi=d;const l=n(r(759));t.Http=l.default;const f=o(r(319));t.routes=f.default,Object.defineProperty(t,"storefrontPath",{enumerable:!0,get:function(){return f.storefrontPath}});const h=o(r(919));t.endpoints=h;const p=n(r(664));t.makeClient=p.default},391:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},864:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},490:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorClass=void 0,(r=t.ErrorClass||(t.ErrorClass={}))[r.BASIC=0]="BASIC",r[r.FULL=1]="FULL",r[r.LIMITED=2]="LIMITED"},368:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},664:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(390));t.default=e=>new a.default(e)},319:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.storefrontPath=void 0,t.storefrontPath="api/v2/storefront";const r={productsPath:()=>`${t.storefrontPath}/products`,productPath:e=>`${t.storefrontPath}/products/${e}`,taxonsPath:()=>`${t.storefrontPath}/taxons`,taxonPath:e=>`${t.storefrontPath}/taxons/${e}`,countriesPath:()=>`${t.storefrontPath}/countries`,countryPath:e=>`${t.storefrontPath}/countries/${e}`,cartPath:()=>`${t.storefrontPath}/cart`,cartAddItemPath:()=>`${t.storefrontPath}/cart/add_item`,cartRemoveItemPath:e=>`${t.storefrontPath}/cart/remove_line_item/${e}`,cartEmptyPath:()=>`${t.storefrontPath}/cart/empty`,cartSetItemQuantity:()=>`${t.storefrontPath}/cart/set_quantity`,cartApplyCodePath:()=>`${t.storefrontPath}/cart/apply_coupon_code`,cartRemoveCodePath:e=>`${t.storefrontPath}/cart/remove_coupon_code/${e}`,cartEstimateShippingMethodsPath:()=>`${t.storefrontPath}/cart/estimate_shipping_rates`,cartAssociatePath:()=>`${t.storefrontPath}/cart/associate`,checkoutPath:()=>`${t.storefrontPath}/checkout`,checkoutNextPath:()=>`${t.storefrontPath}/checkout/next`,checkoutAdvancePath:()=>`${t.storefrontPath}/checkout/advance`,checkoutCompletePath:()=>`${t.storefrontPath}/checkout/complete`,checkoutAddStoreCreditsPath:()=>`${t.storefrontPath}/checkout/add_store_credit`,checkoutRemoveStoreCreditsPath:()=>`${t.storefrontPath}/checkout/remove_store_credit`,checkoutPaymentMethodsPath:()=>`${t.storefrontPath}/checkout/payment_methods`,checkoutShippingMethodsPath:()=>`${t.storefrontPath}/checkout/shipping_rates`,oauthTokenPath:()=>"spree_oauth/token",oauthRevokePath:()=>"spree_oauth/revoke",accountPath:()=>`${t.storefrontPath}/account`,accountAddressPath:e=>`${t.storefrontPath}/account/addresses/${e}`,accountAddressesPath:()=>`${t.storefrontPath}/account/addresses`,accountAddressRemovePath:e=>`${t.storefrontPath}/account/addresses/${e}`,accountConfirmPath:e=>`${t.storefrontPath}/account_confirmations/${e}`,accountCreditCardsPath:()=>`${t.storefrontPath}/account/credit_cards`,accountDefaultCreditCardPath:()=>`${t.storefrontPath}/account/credit_cards/default`,accountCompletedOrdersPath:()=>`${t.storefrontPath}/account/orders`,accountCompletedOrderPath:e=>`${t.storefrontPath}/account/orders/${e}`,forgotPasswordPath:()=>`${t.storefrontPath}/passwords`,resetPasswordPath:e=>`${t.storefrontPath}/passwords/${e}`,orderStatusPath:e=>`${t.storefrontPath}/order_status/${e}`,pagesPath:()=>`${t.storefrontPath}/cms_pages`,pagePath:e=>`${t.storefrontPath}/cms_pages/${e}`};t.default=r},376:e=>{e.exports=require("axios")},566:e=>{e.exports=require("lodash/get")},850:e=>{e.exports=require("qs")}},t={};return function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,r),o.exports}(341)})()}));
//# sourceMappingURL=index.js.map