define("ember-hello/app",["ember","ember/resolver","ember/load-initializers","exports"],function(e,t,r,l){"use strict";var a=e["default"],o=t["default"],s=r["default"];a.MODEL_FACTORY_INJECTIONS=!0;var n=a.Application.extend({modulePrefix:"ember-hello",Resolver:o});s(n,"ember-hello"),l["default"]=n}),define("ember-hello/router",["ember","exports"],function(e,t){"use strict";var r=e["default"],l=r.Router.extend({location:EmberHelloENV.locationType});l.map(function(){}),t["default"]=l}),define("ember-hello/templates/application",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Handlebars.template(function(e,t,l,a,o){this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,r.Handlebars.helpers),o=o||{};var s,n="";return o.buffer.push("<h2 id='title'>Welcome to Ember.js</h2>\n\n"),s=l._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:o}),(s||0===s)&&o.buffer.push(s),o.buffer.push("\n"),n})});