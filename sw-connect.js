"serviceWorker"in navigator && window.addEventListener("load", function() {
setTimeout(function(){
navigator.serviceWorker.register("sw.js").then(function(a) {
console.log("ServiceWorker registration successful with scope: ", a.scope)
}, function(a) {
console.error("ServiceWorker registration failed: ", a)
});
var c = function() {
var a = window.navigator.userAgent.toLowerCase();
return /ipad/.test(a)
};
if (function() {
var a = window.navigator.userAgent.toLowerCase();
return /iphone|ipad|ipod/.test(a)
}() && !("standalone"in window.navigator && window.navigator.standalone)) {
var b = document.createElement("div");
b.style.cssText = "display: block;position: fixed;z-index:1000000;padding: 5px 7px;left: 2%;" + (c() ? "top:15px;" : "bottom: 15px;") + "width: 96%;border-radius: 3px;background-color: #f1f1f1;font-size: 14px;font-family: sans-serif;text-align: center;";
b.innerHTML = '<span id="triangle-down" style="' + (c() ? "opacity:0;" : "opacity:1;") + 'position: absolute;width: 0;height: 0;bottom: -7px;left: 50%;transform: translateX(-50%);border-left: 7px solid transparent;border-right: 7px solid transparent;border-top: 7px solid #fff;"></span><span>Download the WebApp: tap <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="15px" xml:space="preserve"><polyline fill="none" points="17,10 25,2 33,10   " stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="32" y2="2.333"/><rect fill="none" height="50" width="50"/><path d="M17,17H8v32h34V17h-9" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/></svg></span> and then Add to homescreen.</span>';
//CLOSE THE POPUP AFTER SECONDS
window.document.body.appendChild(b);
setTimeout(function() {
window.document.body.removeChild(b)
}, 8E3) //Define Seconds to remove popup
}
}, 5000); // Delay Execution of Whole Code by 5 seconds
});
