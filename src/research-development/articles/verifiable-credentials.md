---
layout: layouts/article.njk
title: "BBS+ Verifiable Credentials"
date: 2021-08-12
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

Self Sovereign Identity - SSI
Verifiable Credentials - VC
Decentralised Identity - DID
BBS+ - 
Technology that enables it - Google/Apple catchup, SDKs or wallets, interopability, security, 

## Introduction

With the increased rise in requirements to move to a digital version of credentials due to Covid, the idea of Verifiable Credentials as a solution has dramatically increased.

With any new technology or standard that undergoes a rapid rise in popularity, there is a danger of the fundamental ethical, privacy and interopability standards being ignored.

With Verifiable Credentials, this is especially important due to the information they hold and the potential for misuse.

We should ensure that before we decide on the use of a particular standard or implementation, that it is the right thing to do and that we reduce any potential risk of damage to society and the citizens we serve.

## What is BBS+?


## What is Decentralise Identity (DID)?


## Privacy first

### Selective Disclosure

Within VCs you are able to take selective attributes and only reveal those instead of all the attributes.

For example, presenting a driving licence to prove your age should not require you to disclose all other information on this credential to prove it. All you should need is a boolean response to the query you are asking.

So when you present your VC, you should be prompted to ask, are you over 21?

The VC then should be able to present the answer without disclosing all other information to the system requesting it.

This is a key advantage of physical documents where you have to hand over your entire id, to confirm a specific attribute of yourself.

### Compound Proofs

Compound Proofs is a way of combining multiple VCs into one queryable VC without generating a new VC.

This allows you to combine multiple attributes from different identities all without disclosing any other data about yourself, only sharing the minimum data.

#### Scenario

You are going on holiday and you are required to present at various check points before boarding a plane, the following documents.

1. A valid Passport
2. A Yellow Fever vaccine pass
3. Your boarding ticket

Compound proofs allow you to combine all these passes into one queryable VC and use Selective Disclosure to verify only the required attributes at different stages.

#### Example

You are buying an item from Duty Free. Currently you need to present your boarding pass and Passport to confirm you are eligible to purchase that item and the amount.

Instead of handing over both of these documents, the checkout operator can scan your VC querying with a question.

"Are you able to purchase these items?"

This can have a combined check for the following

1. Are you over 21?
2. Does the destination you are travelling to allow this item?
3. Does the destination you are travelling to allow the quantity of this item?
4. Is this a valid boarding pass?
5. Is this a valid passport?

All these are then confirmed as being true or false, rather than the system pulling this information, storing it and doing the query internally.

### Correlating signatures and zero-knowledge proof signatures

On previous versions of VCs, when you are issued one by a issuer, it will uniquely sign your credential so that it can be verified.

The downside of this means, everywhere you use your credential, you can be tracked and monitored using this unique identifier through the verification systems in place.

A VC ends up being the equivilant of a global super cookie across your digital and physical life.

This is against the privacy standards we hold as you should not be in a position to be tracked while using a VC.

BBS+ removes this and replaces it with a unique proof of the issuers signature without sharing the signature itself.

This means every time you use a VC as a proof, you never share the unique identifier in the handshake. This results in

1. The Issuer is unable to see how you are using your VCs
2. The Organisations you are interacting with have no way to correlate you



## References

- [https://www.youtube.com/watch?v=dXlRIrrb9f4](https://www.youtube.com/watch?v=dXlRIrrb9f4)
- [https://www.evernym.com/blog/bbs-verifiable-credentials/](https://www.evernym.com/blog/bbs-verifiable-credentials/)
- [https://www.lfph.io/wp-content/uploads/2021/02/Verifiable-Credentials-Flavors-Explained.pdf](https://www.lfph.io/wp-content/uploads/2021/02/Verifiable-Credentials-Flavors-Explained.pdf)
