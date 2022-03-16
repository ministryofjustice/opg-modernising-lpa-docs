---
layout: layouts/adr.njk
title: "Integration with Use a LPA"
weight: 1
date: 2022-03-16
review_in: 12 months
tags:  
    - adr
    - open_standards
    - apis
    - language
    - integration
areas_of_coverage: ["Digital Service"]
status: "proposed"
contributors: ["John Nolan"]
adr_number: "0009"
---

## Context

Our [Use a LPA service](https://use-lasting-power-of-attorney.service.gov.uk/home) is the latest service built by the OPG. We want to build any new features around this service moving forward, taking advantage of the work done on it.

Modernising needs to be interopable with this service moving forward.

## Technical

### Interoperability - How does this enable the exchange of information

The Use a LPA site currently has no API for internal consumers to interact with as there isn't a need.

It's purpose is to pull data as it needs from the Sirius database via an API.

It only stores within its own database, what it needs to run the service.

Anything to do with using or viewing a LPA sits within its domain/responsibility and therefore has no need for a internal API currently for other services to consume.

### Developer Knowledge - How well known is this in our current skill sets

**Overall**: 10/10
We have a dedicated multidisciplinary team who are responsible for the upkeep of the service.

It is also in its `Live` phase of the [GDS Assessment](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works)

### Support/Open Source - Is it well supported

Use a LPA is Open Source and has a dedicated, multidisciplinary team working on it.

### Scalability

Use a LPA is built and maintained as Infrastructure as Code via Terraform.

It is able to scale up on demand as required. Any future infrastructure added will follow this same principle.

## Ethics

### Mitigate against being tech deterministic

Use a LPA is written in PHP and the Admin service is written in Golang.

Where possible we want to use Golang in place of PHP in the future so any new work that does not tightly couple itself to the main code base should be done in either Python or Golang.

### Ensure you conduct inclusive research

N/A - the use of this technology does not have an effect on marginalised groups directly.

### Think big and imagine what the impact of your work can be

Having the separation of the Modernising creation domain and the Use a LPA domain will mean a clean split of data and functionality that is easier to manage over time.

### Interrogate your data decisions

Use a LPA currently follows the rule of only storing the information it absolutely needs to serve the users. It should maintain this rule and if required to share this information with other services, ensure that the use case is ethically correct and only gives the information that is needed.

### Decision

We should continue to keep the domains separate where appropriate.

Should a part of the Modernising service require access to the data stored within Use a LPA, then we should build an appropriate layer for this to be accessed and continue to ensure we only supply the data that is needed for the use case.

### Consequences

 Separate domains with only required data interactions between services reduces our potential for creating technical debt like having to update code in multiple places due to changes in one domain.
