            <script type="text/javascript">
              window.handleIFrameMessage = function(e) {
                var args = e.data.split(":");
                var iframe = false;
                if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[2]); } else { iframe = document.getElementById("JotFormIFrame"); }
                if (!iframe)
                  return;
                switch (args[0]) {
                  case "scrollIntoView":
                    iframe.scrollIntoView();
                    break;
                  case "setHeight":
                    iframe.style.height = args[1] + "px";
                    break;
                  case "collapseErrorPage":
                    if (iframe.clientHeight > window.innerHeight) {
                      iframe.style.height = window.innerHeight + "px";
                    }
                    break;
                  case "reloadPage":
                    window.location.reload();
                    break;
                }
                var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                  var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
                  iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
                }
              };
              if (window.addEventListener) {
                window.addEventListener("message", handleIFrameMessage, false);
              } else if (window.attachEvent) {
                window.attachEvent("onmessage", handleIFrameMessage);
              }
              if(window.location.href && window.location.href.indexOf("?") > -1) {
                var ifr = false;
                if (args.length > 2) { ifr = document.getElementById("JotFormIFrame-" + args[2]); } else { ifr = document.getElementById("JotFormIFrame"); }
                var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
                if(ifr && get.length > 0) {
                  var src = ifr.src;
                  src = src.indexOf("?") > -1 ? src + "&" + get : src  + "?" + get;
                  ifr.src = src;
                }
              }
              </script>