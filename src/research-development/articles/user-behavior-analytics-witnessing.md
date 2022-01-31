---
layout: layouts/article.njk
title: "Using User Behaviour Analytics in place of Witnessing"
date: 2022-31-01
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

> "A signature is only useful as evidence if it provides a reliable link between the authorised signatory and the agreed terms. The stronger the evidence of that link, the more robust the signature. If the authenticity of a signature later comes to be contested (for example, in legal proceedings) it may be necessary to prove that the document in question was signed by the parties to it (or, where appropriate, their authorised signatory)."

We require an option to investigate replacing physical witnessing with a technology approach. There are many demographic factors that will affect our approach such as age, complexity and cost.

This document outlines the most unobtrusive option that also gives us confidence and potential to grow in that confidence over time.

Throughout the process we must ensure that any data collected is anonymous, secure and discarded as soon as it has exceeded its use.

In a safeguarding issue during the LPA Process, we know the investigations team would use the Certificate Provider as the main contact to pursue. They use data from the LPA and elements from our case management system to track changes and find patterns of behaviour for safeguarding issues.

## User Behaviour Analytics and AWS Fraud Detector

AWS Fraud Detector (FD) allows us to feed our data into a Machine Learning (ML) service to look for common patterns in fraudulent behaviour and assess our confidence that the person who is interacting with our service is who they say they are.

We can put anonymised data from our existing Case Management service into it, such as our timeline events, but also data from users using the Modernising service.

We can capture all behavioural data from all parties making an LPA and assess key data points.

A few examples of this could be:

1. Are all logins from a user coming from the same IP Address
2. Is the IP Address within the country they have provided on sign up
3. Does the user change their address or other fields more than once
4. Is there an appropriate time gap between each stage of form filling
5. Are there any negative patterns to users logging back in e.g. x number of failed attempts

Each rule can be weighted accordingly and adjusted over time. As we discover new patterns of fraud and misuse, while working closely with the Investigations team, we can amend the rules to be more accurate using real life examples.

As we discover more areas and patterns within our flow we can also add or remove some. We can also take this information and build on it over time through interactions with our call centers to find patterns in how people act after completing a LPA.

If we use the confidence score after a user journey, we can potentially use this in place of the Witness and also raise awareness with case workers which could potentially preempt any future fraud.

This process could potentially solve 3 specific areas of concern.

1. Replace witnessing
2. Detect Fraud pre and post LPA creation
3. Reduce mass attempts for making LPAs

User Behaviour Analytics is a great tool, but it should be used with other human processes and technology, not be solely relied upon. This process is only as good as the data you provide it and your understanding of your users.

## Digital Signature

Given the definition of a signature, we should ensure that not only have we collected the data of the person filling in the form at that time, but also indicate using technology that they are who they say they are.

We can create a digital signature that contains entered information and validation processes that have taken place. But as a final step, we should ensure, based on a confidence score of all parties involved in the process that we are confident they are authentic.

We should therefore ensure before creating the signature that we run the data through a model to assign a confidence score and either create the signature then or hold off for investigation.

If we do this, it will be an asynchronous process and will have to be dealt with appropriately within the user flow.

## Conclusion

To conclude, I believe that we should investigate using User Behaviour Analytics scores alongside strong authentication techniques to see whether we can replace a physical witness with a technology based solution.

## References

- AWS Fraud Detector ([https://aws.amazon.com/fraud-detector/](https://aws.amazon.com/fraud-detector/))
