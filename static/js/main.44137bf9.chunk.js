(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(23),n(2)),s=n(3),l=n(5),u=n(4),h=n(17),f=n.n(h),d=(n(6),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({search:e.target.value})},a.state={search:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"form",onSubmit:function(t){e.props.handleSearch(t,e.state.search)}},r.a.createElement("input",{className:"inputText",type:"text",placeholder:"Keep On Giffing",name:"search",value:this.state.search,onChange:this.handleChange,autoComplete:"off"}),r.a.createElement("input",{type:"submit",value:"Search"}),r.a.createElement("button",{className:"button",onClick:this.props.handleSearch},"Clear All")))}}]),n}(a.Component)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={gifs:[]},a}return Object(s.a)(n,[{key:"clearGifs",value:function(){this.setState({gifs:[]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{handleSearch:this.props.handleSearch,removeGifs:this.clearGifs}))}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleSearch=function(t,n){t.preventDefault(),f()({url:"http://proxy.hackeryou.com",method:"GET",responseType:"JSONP",params:{reqUrl:"http://api.giphy.com/v1/gifs/search?",api_key:"dAuwo6dniKEMHLAGEmCjv6bYaWyVN5em",q:n,limit:6}}).then((function(t){console.log(t.data.data),e.setState({gif:t.data.data})}))},e.removeGifs=function(t){t.preventDefault(),e.setState({gif:""})},e.state={gif:[]},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Search Your Favourite Gif"),r.a.createElement(p,{handleSearch:this.handleSearch}),r.a.createElement("div",{className:"gifParent"},this.state.gif.map((function(e){return r.a.createElement("img",{src:e.images.downsized_large.url,alt:e.title})}))))}}]),n}(a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/KrupaliThakkarProjectFive",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/KrupaliThakkarProjectFive","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.44137bf9.chunk.js.map