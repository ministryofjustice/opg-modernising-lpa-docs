---
layout: layouts/article.njk
title: "Observability and Monitoring"
date: 2022-04-20
tags: 
  - research_development
  - data_privacy
  - security_threats
  - techniques
  - deployment
  - stability
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

Observability is the practice of ensuring we know what is going on in our service at any time, in a consumable way.

This includes the visibility of

* Is the service or any part of it down
* Is there a slow down in the service with one of its components
* Has their been an increase in costs to run the service
* Has the User Experience degraded
* Are our service KPIs still being met
* And lots more

There are many ways we can monitor our service to ensure we know what is happening. This document outlines a few we will be implementing from the start in the Modernising Service.

## Logging

Logging is key to identifying how your application is running. Reporting application, network, firewall, KPI and service metric events to a single place helps raise the visibility of expected and unexpected behaviour.

There are three key elements to storing logs that we will ensure we meet.

* All data is anonymised
* Stored in one place
* In a common, parsable, format

As we build up logs in the service, we can build in alerting for abnormal behaviour in our service to alert us as issues arrive. This allows us to be proactive and know about issues at the same time a user is experiencing them.

We already use logging within our existing services to a high standard, we will build upon this knowledge in the Modernising service.

## Monitoring

OPG

## Performance Benchmarks

OPG

## Tracing

Being able to trace, analyse and debug our cloud infrastructure will be key to running a healthy service. We cover this aspect of Observability in our [ADR AWS X-Ray](/adr/articles/0012-aws-xray).

## Real User Metrics

Synthetic vs Real User Metrics

## Service KPIs

Performance Platform

## References

* [Operate a Reliable Service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service)
