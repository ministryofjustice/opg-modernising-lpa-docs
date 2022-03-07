---
layout: layouts/article.njk
title: "Browser Fingerprinting and Registered Devices"
date: 2022-03-07
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

We would like to gain confidence that the user is who they say they are when using our site.

During the process, it would be a help if we knew the device they use is the same or one of many devices they use on repeat journeys.

We want to investigate the use of Browser Fingerprinting and its use in helping give the user confidence that they have been the only one accessing the site via their login and give us confidence in the devices they are using.

## What is Browser Fingerprinting?

Browser Fingerprinting is the process of identifying a user via their browser and operating system when using a website.

It uses a range of different methods and techniques to gather properties about the browser and if possible, the device and operating system it is running on.

### Techniques used

There are a range of techniques that can be used to successfully identify a browser. Below is a range of examples that are commonly used techniques and methods.

* User agent including screen resolution
* Browser details
* Timezone
* Cookies
* Does IP Address and DNS Server match
* Is WebRTC enabled
* Is Javascript enabled
* Is the user in incognito mode
* IP Location
* Web API
  * Battery status
  * Canvas
  * WebGL
  * HTTP/2
* Keystroke patterns
* Accelerometer readings
* And more

## Who uses Fingerprinting

Many companies use Fingerprinting technologies for both positive and negative reasons. Below are a few examples.

### Online Banking

To help reduce fraud, many online banking services will use Fingerprinting as part of their sign in process.

This aids in helping with their confidence levels of the user being who they say they are at time of log in. It also gives a better user experience for users returning from a commonly used device.

For example, if a user logs on to their site via a VPN, they can detect a change in the network IP address from the previous log in and ensure the user has to re-enter their two factor authentication details or put captcha screens in front of the login to deter unwanted threats.

### Video On Demand Registered Devices

A lot of Video on Demand services require you to register your browser before being able to watch their services.

They also limit the amount of devices you are allowed to register.

This gives them many benefits, the main one being that it helps ensure that a licence is not being shared between multiple households.

### Advanced User Tracking

With the increased awareness around cookie misuse, browsers and browser addons that disable tracking cookies, services are starting to rely instead on new ways to track users across websites.

Browser Fingerprinting has begun to replace cookie misuse.

Because of this more browsers are now disabling common Browser Fingerprinting techniques and creating open source lists to help detect and classify known bad trackers.

## Accuracy

Depending on how we would gather and use this data, we could damage our users experience on the site while gaining minimal security benefits.

Examples of a few way in how the accuracy of using Browser Fingerprinting can drop are as follows

* Users on a corporate network could all come from the same IP
* Multiple users could work from the same device in a household
* Use of a modern browser that prevents any detection of Fingerprinting technology such as Brave Browser, Tor Project or Mozilla Firefox

## Browser changes

Even though there is a case for Browser Fingerprinting in safeguarding people who use sites and detecting fraudulent behaviour, browser companies are working hard to remove the ability to reliably identify users by their hardware.

[Chrome have announced they will be removing the User Agent from their Chrome browser in the latest version](https://www.xda-developers.com/chrome-100-beta/) and we should expect more and more personally identifiable attributes from browsers to be removed over time.

## Conclusion

### What we should not do

We may have to rule out using it as a way to give us confidence in knowing the user is who they say they are. The technology is changing too quickly and as our accuracy drops, we risk introducing unforeseen consequences in how people use the site.

If however during Beta we discover a need for this technology, then we should look to source the solution externally. Maintaining a system that can stay up to date with the latest changes in browsers and ensuring accuracy would be beyond internal resourcing.

If we do use Browser Fingerprinting, we should make it clear to our users that we do, what we use it for and the ability to opt out should they wish to.

### What we should do

For now I suggest what value a basic implementation would hold with a user able to see their basic device history and log in history. This gives value to a user to have ownership of their own security and raise with us any unusual behaviour.

Even with the removal of data from browsers, we should still investigate its use with users in Beta and see what value it could give them.

## References

* [Avast - What is browser fingerprinting?](https://www.avast.com/c-what-is-browser-fingerprinting)
* [Mozilla - Firefox blocks fingerprinting](https://www.mozilla.org/en-GB/firefox/features/block-fingerprinting/)
* [Amazon Cognito - Creating a device fingerprint](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html)
* [Browser Fingerprinting: The Good, Bad & Ugly](https://www.thesslstore.com/blog/browser-fingerprinting-the-good-bad-ugly/)
