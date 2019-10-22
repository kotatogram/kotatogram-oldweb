/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("js/lib/push_worker.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["badbrowser.html","086a0f96efcc8b9c714045005402fcaf"],["css/app.css","757c777e848ea5ebf972ca9ce6c56869"],["css/badbrowser.css","07f4388bbe7ea38565aeb4f597d4b822"],["css/desktop.css","10b7719ce8be3eb0690ad6352e3e2e61"],["css/mobile.css","3158f4c501771c3827dda05fd684e4cc"],["favicon.ico","fb606fe0a27a1c62bdfc48561d908f39"],["favicon_unread.ico","b3a7e3414d29305250f377be7ab1e3e2"],["img/Manytabs.png","2bbd15e6ddf8c0212ccbedf7abd1c77e"],["img/Manytabs_2x.png","7a71629a5e4f7482b6320b103f1d543c"],["img/Telegram.png","85cd9ed3491576ba5e6ed3a9336f116f"],["img/Telegram.svg","4964c9bbfba510f495319c52562d70d4"],["img/Telegram72.png","1125082924531bd25844bc89a8f394e3"],["img/Telegram72_2x.png","0e7d8c7a5ba3f56eaa3123b97b8922b0"],["img/Telegram_2x.png","5f9f549b9d6bee5b0e4ac2141621b632"],["img/blank.gif","56398e76be6355ad5999b262208a17c9"],["img/changelog/card_wecandoit.png","3a0e66db81d0ea06166dd13fd8029aed"],["img/emojisprite_0.png","a279a9ce5721c10b6908b5f20cf5dda2"],["img/emojisprite_1.png","8db4db65bc5526baae9fb363d2ba3827"],["img/emojisprite_2.png","ff3a6afdb36b22d428aaebda31c8f2d7"],["img/emojisprite_3.png","54af1766e3f6ac1a79d8342c869ae3e7"],["img/emojisprite_4.png","e21d1b6c310a5bdfea043093623c270e"],["img/icons/AboutLogos.png","35d8405d003067c9d707bc5d65152d67"],["img/icons/AboutLogos_2x.png","b9e82c6df1d0782b45eb3d6a3461e5cc"],["img/icons/General.png","10639598adc8046b54dfa15d2e6443d0"],["img/icons/General_2x.png","5270d71cd78fd282a3736b0e6ae7f048"],["img/icons/IconsetSmiles.png","b639ed6a2b91d707dafe7861e0aee93b"],["img/icons/IconsetSmiles_2x.png","f9385d002e9cd787d704c26eaa4e6b9b"],["img/icons/IconsetW.png","1afbc8040b6c671431d27c3e25e84545"],["img/icons/IconsetW_2x.png","f01cec9bccc80a678ed0ec04acecade2"],["img/icons/Major.png","f647639ac513b1b536ada5a0c8771a7b"],["img/icons/Major_2x.png","73ed42f9ad14e613c20b4fbaaa566cc1"],["img/icons/MobileIcons.png","98d22350c7a4a25456074b40509fa954"],["img/icons/MobileIcons_2x.png","4bd2be1096ac23847a1ac6981a666652"],["img/icons/PhotoIcons.png","23a876a0e0c97b8e63be3c03bc372c24"],["img/icons/PhotoIcons_2x.png","292582f6e1b991b28242dfaf0b6b3667"],["img/icons/ProfileIcons.png","e94f10d7230ce03b5b961055aec1072d"],["img/icons/ProfileIcons_2x.png","11e2549774d7e05bf82448f15838572e"],["img/icons/icon.svg","a0cd37dd90703fc27a9bc98e076c5158"],["img/icons/icon120.png","f5856bbec8d918d921e7ab733319b24e"],["img/icons/icon128.png","e89aea693493e8a6b727417d99c3345c"],["img/icons/icon16.png","78b34ae9efbd05a8588040649a01b8de"],["img/icons/icon192.png","7316e15eb09d45413b65bad597c0762e"],["img/icons/icon32.png","0843d36cbaf7172c87b27aba4a1a3787"],["img/icons/icon512.png","73a8fe87836f0916d61a89f96a223189"],["img/icons/icon60.png","0e99d9872818ad3bf80a57c65f7ab01f"],["img/icons/icon64.png","30bd04ee092bde79aaf61a09e0d2ac8f"],["img/icons/icon90.png","ec811df90200dc5ca319629ed9a26eb6"],["img/iphone_home120.png","86b05c2c7e8ad0de8204789716898da4"],["img/iphone_startup.png","435b6009c9339a57dd4092e57ea466df"],["img/logo_share.png","ddf6cddc068b7cc2eac1af77ad9da4be"],["img/placeholders/DialogListAvatarSystem@2x.png","4f9f71e3b925ffc22994ad369c6e89d2"],["img/placeholders/Fave.png","975c515598a947c2885378e599898d31"],["img/placeholders/GroupAvatar1@2x.png","6b03ad1a83390a7833d053e61489accb"],["img/placeholders/GroupAvatar2@2x.png","cc24ed051254b8fd7c4d922c00fd226c"],["img/placeholders/GroupAvatar3@2x.png","bdfbb7e8c41efb40a8f73763f9d0c87b"],["img/placeholders/GroupAvatar4@2x.png","d2331f23158ae401b5b44cc135cb7c29"],["img/placeholders/PhotoThumbConversation.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/PhotoThumbModal.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/UserAvatar1@2x.png","27be09024c0bc78aa6469c7b2179400b"],["img/placeholders/UserAvatar2@2x.png","9ccf627d5bd7319e01e973584cd4441f"],["img/placeholders/UserAvatar3@2x.png","14b44e53a00014723acabee293c1e35a"],["img/placeholders/UserAvatar4@2x.png","b4fab5ac3d9100e8aa4670cfed4ada37"],["img/placeholders/UserAvatar5@2x.png","311ffa6462b8978e12b66e3902549e1d"],["img/placeholders/UserAvatar6@2x.png","3a52d80f3d3356e4051350dd1939982f"],["img/placeholders/UserAvatar7@2x.png","7135b26aacaaae0a59a2c32e8096fbc6"],["img/placeholders/UserAvatar8@2x.png","13f581d89c13b7c27338a548390d6765"],["img/placeholders/VideoThumbConversation.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/VideoThumbModal.gif","56398e76be6355ad5999b262208a17c9"],["img/sound_a.mp3","eba09b6a457792c52fc610b5f9f974b3"],["index.html","5f55a0960e6403a9ea8962824c3270d2"],["js/app.js","b62e030c9741dc73493808a23799f651"],["js/background.js","05008823de46f96f30d47980d96a1306"],["js/lib/bin_utils.js","c0c9e32c7153064dc1c5211e66a81e60"],["js/lib/crypto_worker.js","6d64758167c4ba084b18f2fc2cded622"],["js/lib/polyfill.js","afbe5563f0ae9c0992be6c3de6b2586d"],["js/lib/push_worker.js","ffa3823c4340418b987287d2b9bce3ca"],["js/locales/de-de.json","faa2d2e5319000629578f1ef0b085aa1"],["js/locales/en-us.json","00ec9dcd27c925ec97f22695a5f37906"],["js/locales/es-es.json","5d09e1589f1203fb13eaca51d09acd73"],["js/locales/it-it.json","b842db0dcf8f42d9947d7f94f283ee38"],["js/locales/nl-nl.json","d46ec7254b3daff04cdf88b234e4e283"],["js/locales/pt-br.json","8649d21e696e247b3d9d1ba869619b09"],["js/locales/ru-ru.json","616963b8a2487f44b7345259f2318d27"],["manifest.json","202ec9a32fd659bce2efed0877b6ea48"],["manifest.webapp","5d567746dde65d6d9ef57d43e001dc0f"],["manifest.webapp.json","0bb904cfc77927bb94389620d703b040"],["nacl/mtproto_crypto.nmf","6e103ee28ab3866e84d30b633d694c61"],["nacl/mtproto_crypto.pexe","9b0030189b74b07a96908bc00ca2df54"],["vendor/angular/i18n/angular-locale_de-de.js","01cd2a7eb133697038e0fc34476115eb"],["vendor/angular/i18n/angular-locale_en-us.js","b55e03e13600a500be2a3c766b483f6f"],["vendor/angular/i18n/angular-locale_es-es.js","d0aa49474e92ac2526839956ad19168f"],["vendor/angular/i18n/angular-locale_it-it.js","15f89e553d01f5b0e72f9deeee91cdf0"],["vendor/angular/i18n/angular-locale_nl-nl.js","c9dd0d5066c16495c68e186503cb1247"],["vendor/angular/i18n/angular-locale_pt-br.js","e3f4364b3b6a95f9113e11f1a3a18e2b"],["vendor/angular/i18n/angular-locale_ru-ru.js","71ffb23866e597f711c96e2f1b6b307f"],["vendor/closure/long.js","7bcf798c67a1ae678a5b14c9e28bf775"],["vendor/cryptoJS/crypto.js","35d44ffed0c530166d72a387c9269a88"],["vendor/jsbn/jsbn_combined.js","a00c793b7b0de8906bef763f312877ee"],["vendor/leemon_bigint/bigint.js","ceddb6b4b1c822311c4b1b855c2672fd"],["vendor/recorderjs/encoder_worker.js","91923927e2f83cf13abaf93cc67f523b"],["vendor/rusha/rusha.js","47e5ebc967d21d86ab4db0a48bb62495"],["webogram.appcache","9550009543841dd91b12317f0ae38a16"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-Kotatogram-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function(url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function(precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = 'index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




