self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(){});
self.addEventListener("notificationclick",function(e){
 var d=e.notification.data||{},i=d.i;
 e.notification.close();
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(l){
  for(var k=0;k<l.length;k++){
   if("focus" in l[k]){return l[k].focus().then(function(c){try{(c||l[k]).postMessage({open:i})}catch(x){}})}
  }
  return self.clients.openWindow("./delivery-final.html"+(i!=null?"?open="+i:""));
 }));
});
