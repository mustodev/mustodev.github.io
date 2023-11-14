(function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var textarea = document.getElementById('a')

if (navigator.userAgent.indexOf('Mobile') !== -1) { 
    document.getElementById('save').style.display = "none"; 
    textarea.style.height = "100px";
}

function getGiftCode() {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < 5; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return 'bsky-social-' + code;
}

function getSecondGiftCode() {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < 5; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return code + "\n";
}

function generate() {
    var triesPerSecond = document.getElementById('speed').value;

    function printGiftCode() {
        var firstCode = getGiftCode();
        var secondCode = getSecondGiftCode();

        console.log(firstCode + '-' + secondCode);

        var bElement = document.getElementById('b');
        bElement.value += firstCode + secondCode;
    }

    var gInterval = setInterval(printGiftCode, (500/triesPerSecond) * 1);

    document.getElementById('stop').addEventListener("click", function() {
        clearInterval(gInterval);
        clearInterval(interval);
    });

    function scroll() {
        document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight;
    }
    var interval = setInterval(scroll, 100);

    document.getElementById('clear').addEventListener("click", function() {
        clearInterval(gInterval);
        clearInterval(interval);
    });
}

document.getElementById('generate').addEventListener("click", generate);
