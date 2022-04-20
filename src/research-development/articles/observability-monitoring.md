---
layout: layouts/article.njk
title: "Observability and Monitoring"
date: 2022-04-20
tags: 
  - research_development
  - security_threats
  - techniques
  - tools
  - deployment
  - open_standards
  - observability
  - stability
  - testing
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

## Logging

Logging is key to identifying how your application is running. Reporting application, network, firewall, KPI and service metric events to a single place helps raise the visibility of expected and unexpected behaviour.

There are three key elements to storing logs that we will ensure we meet.

* All data is anonymised
* Stored in one place
* In a structure and parsable format

As we build up logs in the service, we can build in alerting for abnormal behaviour in our service to alert us as issues arrive. This allows us to be proactive and know about issues at the same time a user is experiencing them.

We already use logging within our existing services to a high standard, we will build upon this knowledge in the Modernising service.

## Monitoring

Being able to collect the data in a structured format allows us to use monitoring tools to consume that data visualise it over time.

As well as visualising the data, modern tooling also allows you to setup

* Alerting around key log data
* Dashboards to visualise common data
* Overlay multiple log groups to find patterns of behaviour
* Identify changes in performance over periods of time
* Visualise your KPIs and other metrics

A good monitoring setup should better enable our teams to include observability in their decision making and make the data consumable to all professions by making it the universal language of the services health.

## Performance Benchmarks

When defining our infrastructure and setting up [tracing](#tracing),  [logging alerts](#logging) and our pipelines, we should add in benchmarks that can monitor the health of new code and existing code.

This will allow us to maintain a set standard we expect from our code and help identify technical debt in the future.

Examples of what benchmarks we could set are as follows.

* All APIs should respond within 300ms
* All JS should be fully loaded on a low end mobile device over 3G in 2 seconds
* The size of our CSS should not exceed 10kb using Brotli compression
* Tests should run within 1 minute
* Test coverage should be 80% or higher
* Build times should not exceed 5 minutes
* Accessibility checks should always meet WCAG 2.1 AAA
* There should be a maximum of three 500 errors in one minute

Using these benchmarks, we set ourselves up to succeed and encourage good coding practices and maintainability in our code.

## Tracing

Being able to trace, analyse and debug our cloud infrastructure will be key to running a healthy service. We cover this aspect of Observability in our [ADR AWS X-Ray](/adr/articles/0012-aws-xray).

## Real User Metrics

Obtaining data from real users provides an additional set of data compared to synthetic or back end data that we cover in this article.

Being able to capture real users experience while using the service allows us to refine our front end code to better facilitate our users.

Data we can capture anonymously from the browser and act upon include but not limited to

* [WebVitals](https://web.dev/vitals/)
* Device type (Mobile, Tablet, Desktop)
* Connection type (3G, 4G, 5G, landline)
* Screen size/orientation
* API Response times
* Navigation Timing
* Resource Timing (static assets)
* Bounce pages

When we set up [server side tracing](#tracing) we will also be able to link this data from our front end, through to our back end stack giving us an overview of the entire lifecycle of a page/click.

## Service KPIs and Metrics

On our Use a LPA service, we have begun adding manual and anonymised logging events to our application code when key user journey events occur. An example of this is firing an event when a user clicks the `Download PDF` button on our View part of the service.

This has allowed us to

* Identify points in time where a release could have affected negatively or positively a user journey
* When releasing a new feature, are we meeting the goal of that feature (e.g. does this new feature increase the success rate of users logging in)
* Identify drop out points in the service and research better ways to help the user

We have also used this same process to automate the collection of our services performance data. [This is required of all services to provide for the public to ensure we are meeting the aims it was built for](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard#collect-performance-data-1).

This means we no longer need multiple professions to analyse raw data each month and report on it.

Integrating KPIS and performance data into the code we write allows us to make data driven decisions and reduce manual work for more accurate reporting and decision making.

## References

* [Service Standard: Collect performance data](https://www.gov.uk/service-manual/service-assessments/pre-july-2019-digital-service-standard#collect-performance-data-1)
