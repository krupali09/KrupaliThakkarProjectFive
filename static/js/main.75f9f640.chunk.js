(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},22:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),a=t(11),r=t.n(a),c=(t(22),t(12)),s=t(13),l=t(16),u=t(15),d=t(14),f=t.n(d),h=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).performSearch=function(n){console.log("please work"),f()({method:"GET",url:"https://api.giphy.com/v1/gifs/search",dataResponse:"json",params:{api_key:"dAuwo6dniKEMHLAGEmCjv6bYaWyVN5em",q:"query",limit:6}}).then((function(n){e.setState({gifs:n.data.data,loading:!1})}))},e.state={gifs:[],loading:!0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return console.log("display data on page"),i.a.createElement("div",null,i.a.createElement("h1",null,"Show me some Gifs"),this.state.gifs.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("h2",null,e.title),i.a.createElement("img",{src:e.images.downsized_large.url,alt:e.title}))})))}}]),t}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/KrupaliThakkarProjectFive",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/KrupaliThakkarProjectFive","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.75f9f640.chunk.js.map