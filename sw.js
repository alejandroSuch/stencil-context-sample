/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/mycomponent.js",
    "revision": "2d09b08c5c40b6229b07048147f3b0e4"
  },
  {
    "url": "build/mycomponent/es5-build-disabled.js",
    "revision": "fea234cb3ef16f063c930dd30a4b14af"
  },
  {
    "url": "build/mycomponent/my-component.desktop.js",
    "revision": "d358d9b6f3c9943993f5f809f8fa813b"
  },
  {
    "url": "build/mycomponent/my-component.desktop.sc.js",
    "revision": "74f134057a039f991890d91bc1b02b4c"
  },
  {
    "url": "build/mycomponent/my-component.ios.js",
    "revision": "60dd37e1c087f258cd418e52bf51ec66"
  },
  {
    "url": "build/mycomponent/my-component.ios.sc.js",
    "revision": "52eaddfa12d6f1c0c14e76c148d6e4d6"
  },
  {
    "url": "build/mycomponent/my-component.md.js",
    "revision": "6fd24ab7df217826d8e0b02118592af9"
  },
  {
    "url": "build/mycomponent/my-component.md.sc.js",
    "revision": "3731f500fcc8feb4186e03b9263f7aad"
  },
  {
    "url": "build/mycomponent/my-component.wp.js",
    "revision": "0da9edffc17b5b8d2450299e5688bd0e"
  },
  {
    "url": "build/mycomponent/my-component.wp.sc.js",
    "revision": "8a22a5615aa9a12c566f1ac6bf00063d"
  },
  {
    "url": "build/mycomponent/mycomponent.core.js",
    "revision": "50aefd4c7890b5c84a8f22816028bad8"
  },
  {
    "url": "build/mycomponent/mycomponent.global.js",
    "revision": "335bbf33b4218255e77c81b08d16bffd"
  },
  {
    "url": "build/mycomponent/mycomponent.registry.json",
    "revision": "2d363457debb297018ffddc545aba83a"
  },
  {
    "url": "index.html",
    "revision": "c04aa2dc47a5d31d1cb6e83f2869dc3b"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
