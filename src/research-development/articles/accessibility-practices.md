---
layout: layouts/article.njk
title: "Accessibility Practices"
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

We will also ensure as newer versions of the standard get released that we meet these as part of our ongoing commitment to continuous improvement.

We will do this by

* Ensure all professions collaborate on early designs
* [Adding automated testing to our pipelines](#automated-testing-in-pipelines)
* Working with internal dedicated accessibility groups
* Encourage and aid team members to learn about accessibility
* [Run regular accessibility audits to capture problems that cannot be caught by automated tooling](#accessibility-audits)
* [Use our OPG accessibility tools to test our sites against popular accessibility tooling](#testing-with-assistive-technologies)

We are already doing all of the above on our existing services and we will be learning from these implementations and using this knowledge to apply it to any new services.

## Automated testing in pipelines

Reference: [Testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility)

We should add automated testing into the pipeline for our services. We should not solely rely on this though. We need to also do manual testing, however this will give us knowledge that issues that can be automatically found are monitored.

This will allow us to break the build if we introduce new content that doesn't meet the WCAG 2.1 standard.

We should take this into account when choosing how we build our service. If we can produce static HTML files then testing becomes faster and cheaper to run rather than writing scripts to run over a ethereal environment.

Research has been undertaken by the GDS accessibility team's [audit of the most use accessibility tools](https://alphagov.github.io/accessibility-tool-audit/) and should be consulted.

We used [aXe](https://www.deque.com/axe/) and [pa11y](https://pa11y.org/) on services currently which will aid in our knowledge of implementing this tooling in the pipeline.

## Cross Device testing in pipeline

Reference: [Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)

We need to ensure that our service is accessible with as many browsers and devices as possible.

Testing across multiple devices and browsers manually can be time consuming and should be automated.

Using a tool that can load the service and take screenshots, report on Javascript errors and CSS issues across the most popular devices is key to reduce cost.

A list of browsers and devices we should support can be found at the GDS service manual page [Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

## Testing with assistive technologies

Reference: [Testing with assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies)

> You must make sure your service works with assistive technologies. This is so everyone can use your service with the technology they rely on, such as a screen reader or speech recognition software.

The entire service should be tested using assistive technologies to ensure everyone is able to use it.

This can be done on new patterns and components we create and once tested, those patterns and components should be repeated throughout the user journeys to ensure a reliable journey.

We have access to our own OPG Accessibility Lab which should be utilized for our own research, but we should also seek out external services that provide expert analysis with real users, which is usually included in [Accessibility audits](#accessibility-audits).

## GOV.UK and MoJ Design patterns and components

When building services, we use the [GOV.UK Design System](https://design-system.service.gov.uk/) and the [MoJ Pattern Library](https://design-patterns.service.justice.gov.uk/).

Any new patterns or components we build, we contribute back to the MoJ Pattern Library and Slack community to get our code and research peer reviewed from specialists in other departments.

This gives us the benefits of a community of specialist roles who can check accessibility among other things before sharing with other departments.

If we feel a pattern or component is worth sharing with GOV.UK, then we will also work with them to being adding it to the Design System.

Working this way ensures we can move fast while gaining extra knowledge from others in areas of Government.

## Accessibility audits

Reference: [Getting an accessibility audit](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)

[Accessibility audits for service](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)

Every service the OPG build goes through yearly accessibility audits and ad-hoc audits when required, such as newly made user journeys.

We should look for an independent, external service that can provide us with an expert audit to prevent any sort of bias or gap in knowledge internally.

When receiving an audit report back, if there are issues, the entire team should work through them and learn what needs to be fixed and why. Audits are a great learning tool as well as a check that standards are met.

## Progressive enhancement

[Building a resilient frontend using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)

Making our service accessible to all devices and connections is extremely important, especially in the demographic LPAs are aimed at.

Using images, Javascript and CSS to give users a better experience can come with its own downfalls.

Examples of this are

* If you require javascript for your site to work, users without it enabled will not be able to use it
* If you have large images, poor network connections or devices will cause long loading delays giving a poor and frustrating experience
* If you are serving large assets over a mobile network, this has a cost to users [(What does my site cost?)](https://whatdoesmysitecost.com/)

We should build the service to reach as many people as possible in the quickest and simplest way.

If we do add assets to enhance the interface, we should do so in a way that does not stop those who have them disabled from using the site.

We should look to also taking advantage of modern browser APIs to help serve the right content to users.

For example

* Using the `prefers-color-scheme` setting to serve dark mode styling
* Using the `Network Information API` to detect network quality and serve smaller images
* Using the `Service Workers API` to intelligently cache assets in the browser

## Conclusion

We should continue to build upon our existing practices for accessibility and ensure that it is thought of from the start.

Using the service manual as a guide, we should go beyond it where we can.

## References

* [Understanding WCAG 2.1](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag#wcag-design-principles)
* [Testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility)
* [audit of the most use accessibility tools](https://alphagov.github.io/accessibility-tool-audit/)
* [aXe](https://www.deque.com/axe/)
* [pa11y](https://pa11y.org/)
* [Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)
* [Testing with assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies)
* [GOV.UK Design System](https://design-system.service.gov.uk/)
* [MoJ Pattern Library](https://design-patterns.service.justice.gov.uk/)
* [Getting an accessibility audit](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)
* [Building a resilient frontend using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
* [What does my site cost?](https://whatdoesmysitecost.com/)
