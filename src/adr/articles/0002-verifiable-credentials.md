---
layout: layouts/fullwidth.njk
title: "2. Verifiable Credentials"
weight: 1
date: 2021-07-02
date_view: "2021-07-02"
review_in: 3 months
tags: adr
areas_of_coverage: "Verifiable Credentials"
status: proposed
contributors: "John Nolan"
---
# {{title}}

## Overview

**Date**: {{date_view}}

### Status

<strong class="govuk-tag">{{status}}</strong>

### Contributors

{{contributors}}

### Areas of coverage

{{areas_of_coverage}}

## Context

We want to give the Citizen a way of using a verifiable digital representation of a LPA. This will enable them to use this to prove they are who they say they are.

If an LPA is no longer a paper deed, then this is one solution to what a digital version could be.

This could be an optional addition to the existing Use a LPA service to allow for a wider demographic of users.

It needs to be fully interopable with

1. Future technology such as mobile phone digital wallets
2. Industry standard validation and authenticity implementations
3. Potential for other agencies to use as a proof of identity

We would need to be able to reliably sign the credential for others to validate the authenticity.

We would need the Verifiable Credential to be able to store the appropriate required information for the consumer to understand its responsibilities.

## Technical

### Interoperability - How does this enable the exchange of information

The Verifiable Credentials data model is a [W3C Open Standard](https://www.w3.org/TR/vc-data-model/). As long as the standards are adhered to, interopability will be high.

The standards don't supply a definitive way of handling Proofs (Signatures). This raises concerns on the interopability of verification and authenticity at this stage and should be taken into account when deciding whether to use this solution. More information can be found here [https://www.w3.org/TR/vc-data-model/#proofs-signatures](https://www.w3.org/TR/vc-data-model/#proofs-signatures)

The signing of a Verifiable Credential should also be standards driven and supported by the wider industry.

### Developer Knowledge - How well known is this in our current skill sets

**Overall**: 2/10
The data model is well defined and an understood pattern for representing data.

The validity and authenticity aspect of the specification are early in discovery.

If signing was done via a certificate provider setting, such is done for SSL Certification, then the understanding will be higher. It will come with extra challenges on management of the signing keys and the key life cycle.

### Support/Open Source - Is it well supported

The Verifiable Credentials data model is a [W3C Open Standard](https://www.w3.org/TR/vc-data-model/).

The implementation of verifying and signing Verifiable Credentials is covered in the standard. This is in early stages of research and development with various companies such as [RSA Labs and Project Mercury](https://mercury.rsalabs.com/).

The specifications it is built on are in a draft state and can be found at the following links. This should be considered and monitored. We should aim to listen and contribute if possible to these areas to gain confidence in our choice moving forward.

1. [https://w3c-ccg.github.io/ld-proofs/](https://w3c-ccg.github.io/ld-proofs/)
2. [https://json-ld.github.io/rdf-dataset-canonicalization/spec/](https://json-ld.github.io/rdf-dataset-canonicalization/spec/)

### Scalability

The credential is a small file that can be stored anywhere. Either as a file on a storage platform such as Cloud Object Storage, database, Personal Data Store or a users device.

Once created and digitally signed, it is handed over to the Citizen and only requires checks on its validity from us as its issuer.

## Ethics

### Mitigate against being tech deterministic

TBD

### Ensure you conduct inclusive research

TBD

### Think big and imagine what the impact of your work can be

TBD

### Interrogate your data decisions

TBD

### Decision

We should continue to explore the idea.

We should continue to consult other parties to ensure we work to the open standards and maintain the ability to pivot in this direction as the industry integrates into this technology.

### Consequences

Depending on further research this will vary.

Using the method of RSA Labs Project Mercury would mean us setting up the Office of the Public Guardian or the Ministry of Justice as an issuer.

We also have the choice of building our own implementation to confidently sign and manage credentials. We should follow the same standards and guidelines to maintain ownership of the code and interopability.

This would require us knowing the agreed upon proofing method that would be accepted by the wider industry.

This would introduce issues with

1. Revoking credentials if the validity of an LPA is questioned
2. Credentials short life cycle and how this fits with policy and issuing
3. Limited industry understanding and use of the technology
