'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"version.json": "67b8930b723789e1b27bf5d1ecdf32c0",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/salas.json": "c092c3329131d579557b1ee9710163ad",
"assets/assets/images/logo.png": "978f123d55e62a27ff1b3449b6aef6e3",
"assets/AssetManifest.bin": "5bd21d0b3bdbc251d48ab4036f954b94",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2729f5dd224def43a4d4d7d76cdae892",
"assets/AssetManifest.bin.json": "940f932bf21da4bd4c770667d732c5e3",
"assets/NOTICES": "d386b9c5a7066e62fa56b278d791714e",
"assets/AssetManifest.json": "07f09c519f377a0cfac6cda2a7929fd9",
"favicon.png": "02f7923deb43f5a93dd72b65df2b3b9f",
"flutter_bootstrap.js": "4bd3c73f13f4de150e7956980e3374be",
"main.dart.js": "e31a6ed71e2203be6f289195aa56b34f",
"index.html": "ff4a368c225668e0bb328950af928b5a",
"/": "ff4a368c225668e0bb328950af928b5a",
"icons/Icon-192.png": "a299824a72a5cd965f59853487e3a680",
"icons/Icon-maskable-512.png": "b48a5a8e3d9d483bdf531030d8e448a7",
"icons/Icon-512.png": "b48a5a8e3d9d483bdf531030d8e448a7",
"icons/Icon-maskable-192.png": "a299824a72a5cd965f59853487e3a680",
".git/refs/heads/main": "222db7790070086bf393ee92d1708e7b",
".git/refs/remotes/origin/main": "222db7790070086bf393ee92d1708e7b",
".git/logs/refs/heads/main": "62e547fa2fc983739953b4f42aa3868b",
".git/logs/refs/remotes/origin/main": "babaadda182cb21787344cc9042283c5",
".git/logs/HEAD": "70be2439ee025c902197e251b57b41a0",
".git/index": "b8ecbfdb1fd51913aaaf3a8aa9cdef4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/b3/de58248f6c3e0eaae3956c4b919cb14f34bfdd": "994d0c32a59721aee2a5873a78dd6d35",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/63/fabd5b9a9241119847e8fae362e07a33d85052": "258a6a0356b98be1e82d65a56d3ba34f",
".git/objects/6b/3d63ff829d0aebbdf59c595f117a12b6438c3b": "2b5d1927195c5215c63bb4e2fac8b1ee",
".git/objects/e3/4e9dcc9da295f3fe868eade0ca44f29a81ca17": "5824c780ec8c6d609f7b540744920e31",
".git/objects/83/ab8775d075ddeb4d454a7eab755e95590f8701": "7ebfb4f2acf9743da9f5c6e8a0ce0239",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/2d/7eec814b84e89d22b7c4617f55376f124cb362": "17d1f6c1c8dfa07bd0cc8ce31b191575",
".git/objects/7e/75de998c7c6d4dc6d64f93451058acb3a1aa9f": "c9ef3592ac00f05928264abf90c5c5d4",
".git/objects/28/664d2d05a8598f7ad0a2c5a699f487e81563e3": "4dd9694f4912b27a180d7e779ace77a1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a6/ae72923bc9f1e9c7c84ee79e533ad0e1075b77": "418f2fd6d695569363d57e0adc693c94",
".git/objects/dc/5cbc6c7154b55f157f659a6c308ac85a15a973": "65273957c98cea189eabe9f4bde3e013",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/79/79cfbf9f59e9d3a103c8dbb1626cca4a2ef965": "e620d33b62344f5faaacae7b79a0ac0d",
".git/objects/e8/b4039f01534cc95b83d9b9fd33c3322536c10c": "379549d6441fd7e4bcf88cbdf73e0ef1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/f1/3d02d5313eb8bd28e5342a934869c18c925798": "7a36fa97d2d5eb8f5f79408f5787ffde",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/dd/cb916ad56d19649c97d30480fd913188f6afc4": "6c6a34b3a3354a531ddfe7002dc7cdad",
".git/objects/2a/cd6027cb8bfda778ec6438cade845ed9f2a9c6": "d8c5a96a675d3dd16b47708afdee97c9",
".git/objects/33/b4d777f95666c2dd44de604223d53c856b8309": "9fb9b42d8ea87e2c6edc7ee03545b3ae",
".git/objects/be/591adcc8bd6445939179603f7087ac8dd0c7ee": "7f4e5d21fce2b7fa08f207091e32b75e",
".git/objects/1c/fbd64269bf97c2e77108ba93ed421d24b0910f": "3e8a0453af62bc64887e57e23387cdcc",
".git/objects/17/b845f3eb9b2f9eaff43bf449fa48cec4449255": "ff319d46c4b5a568ba2917e4b1515a4f",
".git/objects/bf/b2f6d6799868704d5a5ed9b262c326276709c6": "cbf7dff52280e57b9514aa747d4e3dee",
".git/objects/67/0bbfaf8d6eff7d04168fc76949e93ec41582e6": "c99d020cc45b4ef1a770b962eaaad68f",
".git/objects/4a/91def1a81167b13fca422831d978c2e765b725": "2df552ba3ccb3c91d0d5f0294572e855",
".git/objects/e6/0ca4e78f5ebeb3dccdd8ca4cf5fceb78916182": "9972635952b346e50ee73e6ae8c3aec0",
".git/objects/05/cd5aa06d7c8c763ac83c0baadecbb634c1fc3b": "716f829a26b2a533bf86394e3873d542",
".git/objects/06/ced8a97799730cf4a19841788a87ec81c566cf": "628dd2ee739dd8fd15c8e26627954b61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ab/4e43b90bbb099e63436911251d9b84f400b526": "591cd623f0ef9ad7f42931e8a1a7e87f",
".git/objects/43/8e1d7c93bddc80262f8eeeeffdca1e6d88ce8b": "cdd224af14f3e29c1581ec58d57f9e77",
".git/objects/81/4502f4823a5b1054fd5b5f455b4926a7a35751": "c04c8a04005830e552e1c0f9a0af55d8",
".git/objects/81/71b5416b71cd5ab5c9068ebe30b90f72933b0f": "96f7b20a48dd91cbccc1f0f91da02b53",
".git/objects/4f/60e3756c05e3d7edc0fa0a0aef90607579d1f0": "dbf1f2f4cf228590931a25f2d6d3cb97",
".git/objects/38/512f3bc4da7a86e81504b69293a949587989cf": "6494e98b9d95b0f9d41f6b298aa60ebc",
".git/objects/f8/9f4921659366ec161faa84cbd93910b5edf9ac": "7eca8e63ee2d994eef015ea4dee83f7f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/26/62893b3636b500ea387b3806fe2880c51a77b6": "804dd50104cf0aa70084f972db175c0b",
".git/objects/26/2ef839f06d012444e73ec8ebfc472341c8c369": "21f6f11245b6f485dd8a8728bffc34d3",
".git/COMMIT_EDITMSG": "ca0d10935a1b3716dd7a21f416671086",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "0c2a82774975acbf321c8beafecc2f6d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"manifest.json": "b977355f7597bb76473a982aacc16e3c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
