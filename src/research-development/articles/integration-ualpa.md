---
layout: layouts/article.njk
title: "Integration and building upon Use a LPA"
weight: 1
date: 2022-04-01
review_in: 12 months
tags:  
    - research_development
    - open_standards
    - apis
    - language
    - integration
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

This article is to document the intent of keeping the [Use a LPA service](https://www.gov.uk/use-lasting-power-of-attorney) as its own domain and being responsible for all features post execution of a LPA.

Use a LPA is responsible for all services online after Execution of an LPA. We envision that Modernising will not replace this service and instead any new features in this domain will be built upon this service.

We need to ensure any new work done within Modernising pre execution and internal APIs or database work, is still compatible with Use a LPA or the service is brought in line with changes.

## Technical

### Interoperability - How does this enable the exchange of information

The Use a LPA site currently has no API for internal consumers to interact with as there isn't currently a need.

It only stores within its own database, what it needs to run the service and additional data needed is pulled on demand from the core LPA database.

If other new services began to require data from the Use a LPA service, the team would be responsible for engaging with those services and working with them to provide the necessary interface for the problem.

### How is the service currently run

We have a dedicated multidisciplinary team who are responsible for the upkeep of the service.

It is also in its `Live` phase of the [GDS Assessment](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works) and is [Open Source on github](https://github.com/ministryofjustice/opg-use-an-lpa).

Use a LPA is built and maintained as Infrastructure as Code via Terraform. It is also able to scale up on demand as required.

### Keeping the domains separate

Having the separation of the Modernising creation domain and the Use a LPA domain (post Execution) will mean a clean split of data and functionality that is easier to manage over time.

If we build an internal API layer that Modernising and Use a LPA can integrate with, we can ensure a well defined data schema and rule set for LPA data.

This shared data schema is out of scope for this document and will be covered elsewhere. It will be important for all interactions across the services to be able to communicate efficiently and follow the same data standards.

### Final thoughts

We should continue to keep the domains separate where appropriate.

Should a part of the Modernising service require access to the data stored within Use a LPA, then the teams should work together to analyse the problem and come to the best solution.

Decisions on implementation detail should be left to teams to work out and inspire collaboration across domains for the best outcome for the services.
