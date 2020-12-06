function detectBrowser();

//gets the type of browser
function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //return 'Opera';
        open("index_android.html");
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //return 'Chrome';
        open("index_android.html");
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        //return 'Safari';
        open("index_apple.html");
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        //return 'Firefox';
        open("index_android.html");
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        //return 'IE';
        open("index_android.html");
    } else {
        //return 'Unknown';
        open("index_android.html");
    }

} 