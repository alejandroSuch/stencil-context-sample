declare const Context: any;
var userAgent = navigator.userAgent || navigator.vendor || (<any>window).opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        Context.mode = "wp";
    } else if (/android/i.test(userAgent)) {
        Context.mode = "md";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        Context.mode = "ios";
    } else {
      Context.mode = "desktop";
    }

document.documentElement.setAttribute('mode', Context.mode);
