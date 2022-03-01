function init() {
  var analyticsCookieName = "modernising_cookie_policy";
  var gaCookieValue = getCookie(analyticsCookieName);
  var gaCookieSettings = document.querySelector(
    'input[name="ga-preferences"]:checked'
  );
  var isAnalyticsCookieSet = gaCookieValue !== null;
  document.addEventListener("click", (e) => {
    if (e.target.name === "cookies") {
      if (e.target.value === "update") {
        var newCookieSetting = document.querySelector(
          'input[name="ga-preferences"]:checked'
        );
        if (newCookieSetting !== null && newCookieSetting.value !== null) {
          setCookie(analyticsCookieName, newCookieSetting.value === "true");
        }
        document.location.href = "/";
      }
      if (e.target.value === "accept") {
        setCookie(analyticsCookieName, true);
        toggleCookieBanner(true);
        toggleCookieBannerConfirm(false);
      }
      if (e.target.value === "reject") {
        setCookie(analyticsCookieName, false);
        toggleCookieBanner(true);
        toggleCookieBannerReject(false);
      }
      if (e.target.value === "hide") {
        toggleCookieBannerConfirm(true);
        toggleCookieBannerReject(true);
      }
    }

    if (isAnalyticsCookieSet) {
      if (e.target) {
        if (
          e.target.getAttribute("href") &&
          e.target.getAttribute("href").indexOf("http") === 0
        ) {
          window.gtag("event", "click", {
            event_category: "outbound",
            event_label: e.target.getAttribute("href"),
          });
        }
      }
    }
  });
  if (isAnalyticsCookieSet) {
    toggleCookieBanner(true);
    toggleCookieBannerConfirm(true);
    toggleCookieBannerReject(true);
    if (gaCookieValue == "true") {
      setupGoogleAnalytics("G-70EPL8ZB7Y");
    }
  }

  if (location.pathname === "/view-cookies/") {
    if (gaCookieSettings === null || gaCookieValue == "false") {
      document.querySelector(
        'input[name="ga-preferences"][value="false"]'
      ).checked = true;
    } else {
      document.querySelector(
        'input[name="ga-preferences"][value="true"]'
      ).checked = true;
    }
  }
}

function toggleCookieBanner(isHidden) {
  var cookieBanner = document.getElementsByClassName("js-cookie-banner")[0];
  cookieBanner.toggleAttribute("hidden", isHidden);
}

function toggleCookieBannerConfirm(isHidden) {
  var cookieBannerConfirm = document.getElementsByClassName(
    "js-cookie-banner-confirm"
  )[0];
  cookieBannerConfirm.toggleAttribute("hidden", isHidden);
}

function toggleCookieBannerReject(isHidden) {
  var cookieBannerReject = document.getElementsByClassName(
    "js-cookie-banner-reject"
  )[0];
  cookieBannerReject.toggleAttribute("hidden", isHidden);
}

function setCookie(name, value) {
  document.cookie =
    name +
    "=" +
    value +
    "; max-age=" +
    365 * 24 * 60 * 60 * 1 +
    "; path=/; secure";
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function setupGoogleAnalytics(analyticsId) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + analyticsId;
  document.getElementsByTagName("head")[0].appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, {
    linker: {
      domains: ["www.gov.uk"],
    },
    transport_type: "beacon",
    anonymize_ip: true, // https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization
    allow_google_signals: false, // https://developers.google.com/analytics/devguides/collection/gtagjs/display-features
    allow_ad_personalization_signals: false, // https://developers.google.com/analytics/devguides/collection/gtagjs/display-features
    page_title: document.title,
    page_path: location.pathname.split("?")[0],
  });
}

init();
