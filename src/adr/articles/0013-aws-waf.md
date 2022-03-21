---
layout: layouts/adr.njk
title: "AWS WAF"
weight: 1
date: 2022-03-21
review_in: 12 months
tags:  
    - adr
    - observability
    - tools
    - security_threats
    - observability
areas_of_coverage: ["Digital Service"]
status: "accepted"
contributors: ["John Nolan"]
adr_number: "0013"
---

## Context

We want a way to trace, analyse and debug our distributed systems across our cloud architecture.

This will give us the ability to

* Find bottle necks in our services
* Discover hidden errors within our stack
* Identify areas of improvement
* Justify continuous improvement work

## Technical

### Developer Knowledge - How well known is this in our current skill sets

**Overall**: 5/10
Our teams are starting to use this functionality in their services.

### Decision

We should use [AWS X-Ray](https://aws.amazon.com/xray/) to monitor and maintain a healthy service.

### Consequences

* Chosen languages may not support its features
* Code should be written from the start to add the feature
* Continuous improvement a part of the Product lifecycle
* Ownership of monitoring
* Benchmarks set for acceptable parameters
