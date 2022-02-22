---
layout: layouts/article.njk
title: "Using Technology to reduce mass LPA attempts"
date: 2022-02-21
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

OPG needs to cover costs. ID lookups will cost money, as do other elements of maintaining the service.

We know a lot of LPAs remain unused, 90% from 'Use' stats. Registered and unused LPAs cover costs of a small number of expensive investigations/safeguard work.

Regardless of the solution we come to, we need to identify ways in which we can mitigate abuse of bad actors generating LPAs and costing the business, and in turn our end users, money.

## Solutions

Below is a list of options we can investigate to try and mitigate this problem.

### Authentication

There are ways to prevent creation of accounts and verification flows on the service.

By setting up our registration flow in the correct way, we can put manual steps in place to prevent automation attempts and slow people down without causing a bad experience to the end user.

Some of these are

- Limit the number of LPAs being created in an account at a time
- One email address allowed per account
- Verify account via email and SMS before user verification or LPA process
- Require two factor authentication

### AWS WAF - Web Application Firewall

Sources

- [AWS WAF - Web Application Firewall](https://aws.amazon.com/waf/)

We currently use AWS WAF on all our customer facing services throughout OPG.

AWS WAF gives us a suite of useful security tools to help against not only attack, but mitigating suspicious behaviour.

For a full list of features, see [AWS WAF Features](https://aws.amazon.com/waf/features/)

#### Web traffic filtering

> AWS WAF lets you create rules to filter web traffic based on conditions that include IP addresses, HTTP headers and body, or custom URIs.

This feature allows us to take advantage of existing and well known traffic patterns that could potentially be used to setup attacks to drive up our costs.

#### AWS WAF Bot Control

> AWS WAF Bot Control is a managed rule group that gives you visibility and control over common and pervasive bot traffic that can consume excess resources, skew metrics, cause downtime, or perform other undesired activities.

Being able to capture bots that abuse our service will help with any third parties trying to use our service bypassing any APIs.

It will also prevent attackers trying to drive costs up by repeating certain journeys that cost us to validate details with third parties or internal storage costs.

#### Account takeover fraud prevention

> Account Takeover Prevention is a managed rule group that monitors your application’s login page for unauthorized access to user accounts using compromised credentials. You can use the rule group to help protect against credential stuffing attacks, brute force login attempts, and other anomalous login activities.

While not preventing attacks for mass attempts, this does help with reducing the risk of an attack via a compromised account.

If a OPG trusted account has been comprised and is therefore trusted to make more calls for verification or LPA creation, then this helps reduce this attack area.

### User Behaviour Analytics (UBA) or Transaction Monitoring with Amazon Fraud Detector

Sources

- [NCSC 10 Steps to Cyber Security - Logging and Security](https://www.ncsc.gov.uk/collection/10-steps/logging-and-monitoring)
- [Using User Behaviour Analytics in place of Witnessing](/research-development/articles/user-behaviour-analytics-witnessing/)
- [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/)

We have talked extensively about UBA and how we could use it to detect fraudulent cases while giving us assurance scores for LPAs created.

The data from this tool can also be used to help prevent fraudulent use before it gets too far.

#### Identify suspicious online payments

> Reduce online payment fraud by flagging suspicious online payment transactions before processing payments and fulfilling orders.

At the payment stage we can mitigate financial fraud before a transaction occurs.

We can use this in our designs to help make a better user journey for the significant majority of good actors that use our service while prevent bad actors.

This is important as we should make the service as easy to use for those who want to use it while preventing fraudulent activity or increased admin and service costs.

#### Detect new account fraud

> Accurately distinguish between legitimate and high-risk account registrations so you can selectively introduce additional checks, such as phone or email verification.

We could use this service to ensure that the data collected on registration and the verification process is passed into this.

Having extra safe guards around these already secure processes will help mitigate high-risk accounts being created and subsequently abused.

## Conclusion

We have options that we should investigate in Beta to learn more about how they can solve the problem.

We already use AWS WAF so we will have real world data to look at. We should take the opportunity with the existing implementations to trial any exploration.

## References

- [AWS WAF introduces AWS WAF Fraud Control - Account Takeover Prevention for protecting your login page against credential stuffing attacks](https://aws.amazon.com/about-aws/whats-new/2022/02/aws-waf-fraud-control-login-credential-attacks/)
- [AWS WAF - Web Application Firewall](https://aws.amazon.com/waf/)
- [Using User Behaviour Analytics in place of Witnessing](/research-development/articles/user-behaviour-analytics-witnessing/)
- [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/)
- [NCSC 10 Steps to Cyber Security - Logging and Security](https://www.ncsc.gov.uk/collection/10-steps/logging-and-monitoring)
