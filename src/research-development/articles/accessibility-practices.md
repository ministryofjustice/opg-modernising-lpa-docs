---
layout: layouts/article.njk
title: "Accesibility Practices"
date: 2022-03-30
tags: 
  - research_development
  - testing
  - open_standards
  - techniques
  - tools
  - stability
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

Accessibility is one of the most important factors to be considered while building a service in Government. We build services for everyone.

This article will cover the areas within the service manual and parts that aren't.

We want to set out our intent while in our Alpha phase that we should hold ourselves too in the Beta phase of the service.

## Web Content Accessibility Guidelines (WCAG 2.1)

Reference: [Understanding WCAG 2.1](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag#wcag-design-principles)

> The Web Content Accessibility Guidelines are an internationally recognised set of recommendations for improving web accessibility.

Any services created will be built to the WCAG 2.1 standard.

We will also ensure as newer versions of the standard get released that we meet these as part of our ongoing commitment to continous improvement.

We will do this by

* Ensure all professions collaborate on early designs
* Adding automation to our pipelines
* Adding checks in our development environments
* Working with internal dedicated accessibility groups
* Encourage and aid team members to learn about accessibility
* Run regular accessibility audits to capture problems that cannot be caught by automated tooling
* Use our OPG accessibility tools to test our sites against popular accessibility tooling

We are already doing all of the above on our existing services and we will be learning from these implementations and using this knowledge to apply it to any new services.

## Automated testing in pipelines

Reference: [Testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility)

We should add automated testing into the pipeline for our services. We should not solely rely on this though. We need to also do manual testing, however this will give us knowledge that issues that can be automatically found are monitored.

This will allow us to break the build if we introduce new content that doesn't meet the WCAG 2.1 standard.

We should take this into account when choosing how we build our service. If we can produce static HTML files then testing becomes faster and cheaper to run rather than writing scripts to run over a etherial environment.

Research has been undertaken by the GDS accessibility team's [audit of the most use accessibility tools](https://alphagov.github.io/accessibility-tool-audit/) and should be consulted.

We used [aXe](https://www.deque.com/axe/) and [pa11y](https://pa11y.org/) on services currently which will aid in our knowledge of implementing this tooling in the pipeline.

## Browserstack in pipeline

a

## GDS and MoJ Design patterns/components

a

## Accessibility audits for service

[Accessibility audits for service](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)
a

## MoJ Community Accessibility audit for new components and patterns

a

## Progressive enhancement

[Progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
a

## Semantic HTML

a

## Conclusion

a

## References

* [Avast - What is browser fingerprinting?](https://www.avast.com/c-what-is-browser-fingerprinting)
