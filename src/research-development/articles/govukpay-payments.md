---
layout: layouts/article.njk
title: "GOV.UK Pay for Solicitors and Organisations"
date: 2022-03-08
tags: 
  - research_development
  - third_parties
  - common_platforms
  - integration
  - fraud_vectors
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

We require a way to use GOV.UK Pay for solicitors and organisations who register LPAs on behalf of their clients.

This will require a different process from paying per LPA.

We want to give Solicitors a way to pay via invoice, batch payments or other methods to simplify their process with fee structures.

## What GOV.UK Pay does and does not do

GOV.UK Pay's responsibility is to take payment from a user, handle the payment and respond to whether payment was successful or not.

It is not responsible for managing accounts, invoicing or any other type of payment processing.

We can only use GOV.UK Pay for requesting payment and tracking the status of the payment.

## Solution

We cannot hand off an invoicing solution to GOV.UK Pay, however we can still use it for payment of invoices in our service.

We need to build into our service the ability for organisations to be invoiced and pay via GOV.UK Pay.

In Beta we need to look at the organisation feature of our service to include the following

* Monthly/Quarterly invoicing based on the number of LPAs registered
* Optional payments by phone or post
* Ensuring payments are tagged with an organisation reference and LPA ID
* Dashboard for viewing daily usage
* Audit trails for organisations payments
* Automatic billing and reconciliation of LPAs registered via organisations
* Any type of support needed for organisations should they have a query with their bill

## References

* [GOV.UK Pay](https://www.payments.service.gov.uk/)
* [Integrate with the GOV.UK Pay API](https://docs.payments.service.gov.uk/integrate_with_govuk_pay/#integrate-with-the-gov-uk-pay-api)
* [Take payments by phone or post](https://www.payments.service.gov.uk/take-payments-by-phone-or-post/)
