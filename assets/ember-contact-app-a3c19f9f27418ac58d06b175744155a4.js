"use strict";define("ember-contact-app/app",["exports","ember","ember-contact-app/resolver","ember-load-initializers","ember-contact-app/config/environment"],function(e,t,n,a,r){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(o,r.default.modulePrefix),e.default=o}),define("ember-contact-app/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-contact-app/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("ember-contact-app/components/component-contact",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"",store:t.default.inject.service(),init:function(){this._super.apply(this,arguments)},actions:{click:function(){this.get("store").findRecord("contact",this.get("id"),{backgroundReload:!1}).then(function(e){e.unloadRecord()})}}})}),define("ember-contact-app/components/component-contacts",["exports","ember"],function(e,t){function n(e,t){e.createRecord("contact",{id:t.id,fullName:t.fullName,phoneNumber:t.phoneNumber,mobileNumber:t.mobileNumber})}e.default=t.default.Component.extend({store:t.default.inject.service(),init:function(){this._super.apply(this,arguments)},actions:{submit:function(){var e={};e.fullName=this.get("fullName"),e.phoneNumber=this.get("phoneNumber"),e.mobileNumber=this.get("mobileNumber");var t=this.get("store"),a=t.peekAll("contact"),r=a.get("length");console.log("contacts: "+a.indexOf(0)+" length: "+r),r>0?t.findAll("contact").then(function(a){var r=a.get("length");console.log(r),e.id=Number(a.objectAt(r-1).id)+1,n(t,e)}):(e.id=0,n(t,e))}}})}),define("ember-contact-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-contact-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-contact-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-contact-app/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("ember-contact-app/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-contact-app/initializers/data-adapter",["exports"],function(e){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-contact-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("ember-contact-app/initializers/export-application-global",["exports","ember","ember-contact-app/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var r,o=n.default.exportApplicationGlobal;r="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("ember-contact-app/initializers/injectStore",["exports"],function(e){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-contact-app/initializers/store",["exports"],function(e){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-contact-app/initializers/transforms",["exports"],function(e){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-contact-app/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-contact-app/models/contact",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({fullName:t.default.attr("string"),phoneNumber:t.default.attr("number"),mobileNumber:t.default.attr("number")})}),define("ember-contact-app/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-contact-app/router",["exports","ember","ember-contact-app/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType});a.map(function(){this.route("contacts",{path:"/"})}),e.default=a}),define("ember-contact-app/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){this.get("store").createRecord("contact",{id:"0",fullName:"Alex store",phoneNumber:10101,mobileNumber:10101})}})}),define("ember-contact-app/routes/contacts",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("contact")}})}),define("ember-contact-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-contact-app/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-contact-app/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("ember-contact-app/templates/components/component-contact",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:17,column:0}},moduleName:"ember-contact-app/templates/components/component-contact.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("tr");e.setAttribute(n,"class","contact");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("button"),o=e.createTextNode("\n      Remove\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[7,1]),o=new Array(4);return o[0]=e.createMorphAt(e.childAt(a,[1]),1,1),o[1]=e.createMorphAt(e.childAt(a,[3]),1,1),o[2]=e.createMorphAt(e.childAt(a,[5]),1,1),o[3]=e.createElementMorph(r),o},statements:[["content","fullName",["loc",[null,[3,4],[3,16]]]],["content","phoneNumber",["loc",[null,[6,4],[6,19]]]],["content","mobileNumber",["loc",[null,[9,4],[9,20]]]],["element","action",["click"],[],["loc",[null,[12,12],[12,30]]]]],locals:[],templates:[]}}())}),define("ember-contact-app/templates/components/component-contacts",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:39,column:4},end:{line:46,column:4}},moduleName:"ember-contact-app/templates/components/component-contacts.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","component-contact",[],["id",["subexpr","@mut",[["get","contact.id",["loc",[null,[41,11],[41,21]]]]],[],[]],"fullName",["subexpr","@mut",[["get","contact.fullName",["loc",[null,[42,17],[42,33]]]]],[],[]],"phoneNumber",["subexpr","@mut",[["get","contact.phoneNumber",["loc",[null,[43,20],[43,39]]]]],[],[]],"mobileNumber",["subexpr","@mut",[["get","contact.mobileNumber",["loc",[null,[44,21],[44,41]]]]],[],[]]],["loc",[null,[40,4],[45,6]]]]],locals:["contact"],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:49,column:10}},moduleName:"ember-contact-app/templates/components/component-contacts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("section");e.setAttribute(n,"class","contacts");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"class","contacts__title");var r=e.createTextNode("Contact Information");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h3");e.setAttribute(a,"class","contacts__subtitle");var r=e.createTextNode(" Add New Contact ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("form");e.setAttribute(a,"class","contacts__form");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div"),o=e.createTextNode("\n        ");e.appendChild(r,o);var o=e.createElement("label");e.setAttribute(o,"for","fullName");var l=e.createTextNode("Full Name");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n        ");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div"),o=e.createTextNode("    \n        ");e.appendChild(r,o);var o=e.createElement("label");e.setAttribute(o,"for","phoneNumber");var l=e.createTextNode("Phone No");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n        ");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("    \n    ");e.appendChild(a,r);var r=e.createElement("div"),o=e.createTextNode("\n        ");e.appendChild(r,o);var o=e.createElement("label");e.setAttribute(o,"for","mobileNumber");var l=e.createTextNode("Mobile No");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n        ");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","contacts__form__button");var o=e.createTextNode("    \n        ");e.appendChild(r,o);var o=e.createElement("button");e.setAttribute(o,"type","submit");var l=e.createTextNode("Submit");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("table");e.setAttribute(a,"class","contacts__table");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("thead");e.setAttribute(r,"class","contacts__head");var o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createElement("tr");e.setAttribute(o,"class","contacts__tr");var l=e.createTextNode("\n      ");e.appendChild(o,l);var l=e.createElement("th"),i=e.createTextNode("\n          Full Name\n      ");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode("\n      ");e.appendChild(o,l);var l=e.createElement("th"),i=e.createTextNode("\n          Phone No\n      ");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode("\n      ");e.appendChild(o,l);var l=e.createElement("th"),i=e.createTextNode("\n          Mobile No\n      ");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode("\n      ");e.appendChild(o,l);var l=e.createElement("th"),i=e.createTextNode("\n          Actions\n      ");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode("\n    ");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n  ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("tbody"),o=e.createTextNode("\n");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("  ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[5]),o=new Array(5);return o[0]=e.createElementMorph(r),o[1]=e.createMorphAt(e.childAt(r,[1]),3,3),o[2]=e.createMorphAt(e.childAt(r,[3]),3,3),o[3]=e.createMorphAt(e.childAt(r,[5]),3,3),o[4]=e.createMorphAt(e.childAt(a,[7,3]),1,1),o},statements:[["element","action",["submit"],["on","submit"],["loc",[null,[4,31],[4,62]]]],["inline","input",[],["maxlength","30","placeholder","Alexander Morton","id","fullName","value",["subexpr","@mut",[["get","fullName",["loc",[null,[7,82],[7,90]]]]],[],[]],"required","required"],["loc",[null,[7,8],[7,112]]]],["inline","input",[],["maxlength","20","type","tel","pattern","^[0-9\\-\\+\\s\\(\\)]*$","placeholder","5332197","id","phoneNumber","value",["subexpr","@mut",[["get","phoneNumber",["loc",[null,[11,116],[11,127]]]]],[],[]],"required","required"],["loc",[null,[11,8],[11,149]]]],["inline","input",[],["maxlength","20","type","tel","pattern","^[0-9\\-\\+\\s\\(\\)]*$","placeholder","07397987811","id","mobileNumber","value",["subexpr","@mut",[["get","mobileNumber",["loc",[null,[15,121],[15,133]]]]],[],[]],"required","required"],["loc",[null,[15,8],[15,155]]]],["block","each",[["get","contacts",["loc",[null,[39,12],[39,20]]]]],[],0,null,["loc",[null,[39,4],[46,13]]]]],locals:[],templates:[e]}}())}),define("ember-contact-app/templates/contacts",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:1,column:37}},moduleName:"ember-contact-app/templates/contacts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["inline","component-contacts",[],["contacts",["subexpr","@mut",[["get","model",["loc",[null,[1,30],[1,35]]]]],[],[]]],["loc",[null,[1,0],[1,37]]]]],locals:[],templates:[]}}())}),define("ember-contact-app/config/environment",["ember"],function(e){try{var t="ember-contact-app/config/environment",n=e.default.$('meta[name="'+t+'"]').attr("content");return{default:JSON.parse(unescape(n))}}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-contact-app/app").default.create({name:"ember-contact-app",version:"0.0.0+c1bb2ac1"});