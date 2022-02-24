---
layout: layouts/article.njk
title: "Using Technology to reduce mass LPA attempts"
date: 2022-02-21
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan", "Andrew Pearce"]
---

## Introduction

OPG needs to cover costs. ID lookups will cost money, as do other elements of maintaining the service.

Registered and unused LPAs cover costs of a small number of expensive investigations/safeguard work.

Regardless of the solution we come to, we need to identify ways in which we can mitigate abuse of bad actors abusing a service and costing the business, and in turn our end users, money.

We should also try to protect the highest cost endpoints ensuring as much of the user journey is unaffected by any negative experiences.

## Solutions

Below is a list of options we can investigate to try and mitigate this problem.

### Account Creation Flow

There are ways to prevent malicious creation of accounts and use of verification flows on the service.

By setting up our registration flow in the correct way, we can put manual steps in place to prevent automation attempts without causing a bad experience to the end user.

Some of these are

- Limit the number of LPAs allowed to be created over time. A rate limit to prevent bad behaviour
- One account per email address
- Email alias prevention or instances of alias check
- Allow registration of new accounts via third party account providers
- Verify account via email and SMS before user verification or LPA process
- Require two factor authentication

### Web Application Firewall

Sources

- [AWS WAF - Web Application Firewall](https://aws.amazon.com/waf/)

We already have experience of using Web Application Firewalls internally.

Web Application Firewalls give us a suite of useful security tools to help against not only attack, but mitigating suspicious behaviour.

A benefit of using a Web Application Firewall is it does not impact legitamite use, it only targets negative types of behaviour.

#### Web traffic filtering

> Web Application Firewalls let you create rules to filter web traffic based on conditions that include IP addresses, HTTP headers and body, or custom URIs.

This feature allows us to take advantage of existing and well known traffic patterns that could potentially be used to setup attacks to drive up our costs.

#### Bot Control

> Bot Control is a managed rule group that gives you visibility and control over common and pervasive bot traffic that can consume excess resources, skew metrics, cause downtime, or perform other undesired activities.

Being able to capture bots that abuse our service will help with any third parties trying to use our service bypassing any available APIs.

It will also prevent attackers trying to drive costs up by repeating certain journeys that cost us to validate details with third parties or internal storage costs.

### Rate limiting

Rate limiting can also be enabled, allowing us to block access to the site when abuse is detected.

We should investigate strategies to blocking access such as captcha (showing a captcha image to check for bots), perminant (blocking access to the site completely) or incremental time blocking (blocking for timed increments such as 2 minutes, 5 minutes, 10 minutes, etc).

We can also have different types of rate limiting based on users behaviour patterns. For example, having different implementations for fast but successful journeys or brute forcing attempts.

#### Account takeover prevention

> Account Takeover Prevention is a managed rule group that monitors your application’s login page for unauthorized access to user accounts using compromised credentials. You can use the rule group to help protect against credential stuffing attacks, brute force login attempts, and other anomalous login activities.

While not preventing attacks for mass attempts, this does help with reducing the risk of an attack via a compromised account.

If an OPG trusted account has been comprised and is therefore trusted to make more calls for verification or LPA creation, then this helps reduce this attack area.

### User Behaviour Analytics (UBA) or Transaction Monitoring

Sources

- [NCSC 10 Steps to Cyber Security - Logging and Security](https://www.ncsc.gov.uk/collection/10-steps/logging-and-monitoring)
- [Using User Behaviour Analytics in place of Witnessing](/research-development/articles/user-behaviour-analytics-witnessing/)
- [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/)

We have talked extensively about UBA and how we could use it within our service. This technology can be a data point we can work with to aid in our confidence of a LPA.

Flagging legitamite and suspicious activity through this technology will aid in our confidence for giving account holders the ability to access more expensive operations such as verification and signing.

#### Identify suspicious online payments

Sources

- [GOV.UK Pay](https://www.payments.service.gov.uk/)

For any payments through our service, we will be using the [GOV.UK Pay](https://www.payments.service.gov.uk/) service.

Built into this service are fraud prevention methods and risk scores that will help with any fraudulent payments.

Using a trusted SAAS payment service, that has the resources and expertise in the financial services area is a preferred way of outsourcing this issue.

#### Detect new account fraud

> Accurately distinguish between legitimate and high-risk account registrations so you can selectively introduce additional checks, such as phone or email verification.

We could use this service to ensure that the data collected on registration and the verification process is not fraudulent.

Having extra safe guards around these already secure processes will help mitigate high-risk accounts being created and subsequently abused.

## Preventing Bias

Some of these suggestions use some form of Machine Learning and with this we know your model is only as good as your data.

We should use tools that allow us to analyse our use of these services and identify any negative biases that could occur and hold ourselves accountable to the highest standards.

## Conclusion

We have options that we should investigate in Beta to learn more about how they can help solve the problem.

We already have experience of using Web Application Firewall, so we will have real world data to look at. We should take the opportunity with the existing implementations to trial any exploration.

## References

- [AWS WAF introduces AWS WAF Fraud Control - Account Takeover Prevention for protecting your login page against credential stuffing attacks](https://aws.amazon.com/about-aws/whats-new/2022/02/aws-waf-fraud-control-login-credential-attacks/)
- [AWS WAF - Web Application Firewall](https://aws.amazon.com/waf/)
- [Using User Behaviour Analytics in place of Witnessing](/research-development/articles/user-behaviour-analytics-witnessing/)
- [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/)
- [NCSC 10 Steps to Cyber Security - Logging and Security](https://www.ncsc.gov.uk/collection/10-steps/logging-and-monitoring)
