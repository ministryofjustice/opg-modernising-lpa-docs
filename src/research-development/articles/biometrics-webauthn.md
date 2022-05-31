---
layout: layouts/article.njk
title: "Biometrics and WebAuthn for identity"
date: 2022-05-30
tags: 
  - research_development
  - security_threats
  - fraud_vectors
  - data_privacy
  - open_standards
  - techniques
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

[WebAuthn](https://www.w3.org/TR/webauthn/) is a [W3C standard](https://www.w3.org/) that lets users authenticate to web applications using the [Client-To-Authenticator-Protocol (CTAP)](https://fidoalliance.org/specs/fido-v2.0-ps-20190130/fido-client-to-authenticator-protocol-v2.0-ps-20190130.html).

It allows the browser to use the device's (Mobile phone or computer) biometric capability to securely and privately authenticate a user with a login.

WebAuthn can use

* Fingerprints
* Facial recognition
* Compatible company security key
* [FIDO2](https://fidoalliance.org/fido2/) key

When registering or logging in, a user can optionally register their device with their account. They then get prompted by their browser to allow permissions for that site and then register a specific biometric or FIDO2 key.

From that point on they gain the following benefits

### Passwordless Authentication

Log in without a password (like native Online Banking mobile applications).

### Two-factor Authentication

Use your Biometric as well as a password when authenticating.

### Multi-factor Authentication

Allows your biometric as an addition to other required authentication types such as an SMS, email or authenticator application.

### Self manage devices

See a list of registered devices on their account. The user is able to add or remove any devices and track the last use of them.

## Where it is already used

We currently use this technology in a wide range of every day applications. Below is a list of examples where this is already common practice.

* Macbook built in fingerprint scanner for permission dialogues
* Windows Hello to auto log onto your desktop with a webcam
* Fingerprint scan checkout for school children in canteens
* Fingerprint and Facial recognition to unlock mobile phones
* Log in to online banking applications on phones
* Workplace hardware keys to auto log into laptops and online services
* Fingerprint to open modern electric cars

## Compatibility

WebAuthn is supported in Chrome, Firefox, Safari and Edge browsers as well as various built in mobile browsers. Total coverage in the browser market today gives 88.69% of users.

You can see full support for WebAuthn at [Can I Use](https://caniuse.com/?search=webauthn).

## What does this mean for us?

Though we are using a [Good Practice Guide (GPG) 45](https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual) score of low in our service, this gives us and the user an increased score of High. This has benefits to both parties.

We have confidence that the authenticated user is who they say they are over many sessions. Most importantly, at the final point of signing the LPA, we have confidence that the same device(s) that have been used throughout, including during verification, match the final submission.

## Ethical Concerns

### Mitigate against being tech deterministic

We are trying to solve the problem of ways in which we can increase the confidence score when completing a LPA for the end user and ourselves.

We will accept a low confidence score, however giving the user the ability to optionally increase their score, in turn making them feel more trusting of the service, is a bonus.

Other ways of reaching a high level are complicated and expensive with risks of data privacy (such as uploading photos and videos).

### Ensure you conduct inclusive research

We have already done research with the [Research Institute for Disabled Consumers(RIDC)](https://www.ridc.org.uk/) which showed a preference to using biometrics on a users device for those with disabilities.

Even so we should look to do more of our own testing across a full spectrum of users around the use of Biometrics to judge trust, user experience and accessibility before making a choice.

### Interrogate your data decisions

In using webauthn we do not store peoples' biometrics. We trust the device they are using to tell us who they are. We only need to store the public key and a randomly generate credential ID and match against this device each time.

This ensures the power sits with the user while we have a high degree of trust.

## Summary

Before deciding on whether we should use it, we need to do user research and gather feedback from our users to aid in the decision.

As we don't require a high level of assurance, this should be a completely optional feature and not be a barrier in any way to the user.

Our next steps should be capturing user research findings and feed that decision into a [Architectural Decision Record](/adr).

## References

* [FIDO Alliance](https://fidoalliance.org/fido2/)
* [WebAuthn W3C](https://www.w3.org/TR/webauthn/)
* [WebAuthn](https://webauthn.guide/)
* [Can I Use WebAuthn](https://caniuse.com/?search=webauthn)
* [Good Practice Guide (GPG) 45](https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual)
