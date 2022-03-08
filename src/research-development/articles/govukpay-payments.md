---
layout: layouts/article.njk
title: "GOV.UK Pay for Solicitors and Organisations"
date: 2022-03-08
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

We require a way to use GOV.UK Pay for solicitors and organisations who register LPAs on behalf of their clients.

This will require a different process from paying per LPA. We ideally want to give Solicitors a way to pay via invoice, batch payments or other process to simplify their process with their fee structure.

## What GOV.UK Pay does and does not do

GOV.UK Pays responsibility is to take payment from a user, handle the payment and respond to whether payment was successful or not.

It is not responsible for managing accounts, invoicing or any other type of payment processing.

We can only use GOV.UK Pay for requesting payment and tracking the status of the payment.

## Solution

Due to the nature of GOV.UK Pay, we need to build into our service the ability for Organisations to be invoiced with a link to pay via GOV.UK Pay.

In Beta we need to look at the Organisation feature of our service to include the following

* Monthly/Quarterly invoicing based on the number of LPAs registered
* Optional payments by phone or post
* Ensuring payments are tagged with an Organisation reference and LPA ID
* Dashboard for viewing daily usage
* Audit trails for Organisations payments
* Automatic billing and reconciliation of LPAs registered via Organisations
* Any type of support needed for Organisations should they have a query with their bill

## References

* [GOV.UK Pay](https://www.payments.service.gov.uk/)
* [Integrate with the GOV.UK Pay API](https://docs.payments.service.gov.uk/integrate_with_govuk_pay/#integrate-with-the-gov-uk-pay-api)
* [Take payments by phone or post](https://www.payments.service.gov.uk/take-payments-by-phone-or-post/)
