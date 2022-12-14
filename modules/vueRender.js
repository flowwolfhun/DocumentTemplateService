// this runs in Node.js on the server.
//import { createSSRApp } from 'vue'
const vue = require('vue');
// Vue's server-rendering API is exposed under `vue/server-renderer`.
//import { renderToString } from 'vue/server-renderer'
const vssr  = require('vue/server-renderer');
const BuiltInFunctions  = require('./BuiltInFunctions');
class VueRender {

 Render(template, data){
  data.customFunctions = {};
  data.builtInFunctions = new BuiltInFunctions();
    const promise = new Promise((resolve, reject) =>{
    const app = vue.createSSRApp ({
        data: () => (data),
        template: template
      })
      
      vssr.renderToString(app).then((html) => {
        resolve(html);
    })
  });
  return promise;
}

};
module.exports = VueRender;

