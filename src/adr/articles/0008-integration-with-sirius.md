---
layout: layouts/adr.njk
title: "Integration with Sirius"
weight: 1
date: 2022-03-15
review_in: 12 months
tags:  
    - adr
    - open_standards
    - apis
    - integration
    - open_data
    - common_platforms
areas_of_coverage: ["Digital Service"]
status: "accepted"
contributors: ["John Nolan"]
adr_number: "0008"
---

## Context

We need to ensure we can integrate to Sirius (Case Management System) as it is the core of our LPA services.

## Technical

All our services in some way integrate with the Sirius database, whether this is directly or via a service in between.

Sirius and its database contain all our LPA information from creation on Make a LPA, scanning of the documents, case workers working on the case, through to the Use an LPA service.

Modernising will be no different, but we must decide on the best way to do this as we enter our Beta phase.

### Interoperability - How does this enable the exchange of information

It is essential to be able to communicate with our Case Management System and the database which contains existing LPA data.

In order for all other services to take advantage of the Modernising work, we need to ensure interopability between the services.

### Developer Knowledge - How well known is this in our current skill sets

**Overall**: 8/10

Developers already work against shared APIs and internal services to Sirius.

### Support/Open Source - Is it well supported

N/A

### Scalability

As long as the correct technology is chosen to sit between Sirius, its database and Modernising, we should be able to scale any points of interaction between the services.

As Sirius is the Case Management System as well as holding the data, we should look at how we can decouple this for greater interopability.

## Ethics

### Mitigate against being tech deterministic

N/A

### Ensure you conduct inclusive research

N/A

### Think big and imagine what the impact of your work can be

Integrating with the Sirius database during the Modernising user flows will allow us to progressively approve LPAs as they are created. If there is a safeguarding issue early on in the process, then we can catch it sooner.

It also allows us to capture earlier those who are eligible for discounts to LPAs and therefore reducing the need for refunds post registration.

### Interrogate your data decisions

When we integrate with Sirius, it is important to ensure we only have access to the data we need and nothing more.

If the part of the service is responsible for adding data and validating that data, then the integration point should for example only allow adding of data and getting a confirmation of valid or not from the integration. We should not be returning data and comparing it on the Modernising side.

### Decision

We should integrate with the Sirius database and not directly with the case management system.

### Consequences

We need to explore the best way to integrate and define any processes and data models that will ensure that case management work and Modernising flows match for data consistency.
