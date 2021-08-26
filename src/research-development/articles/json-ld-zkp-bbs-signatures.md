---
layout: layouts/article.njk
title: "JSON-LD ZKP with BBS+ Signatures - Verifiable Credentials"
date: 2021-08-12
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Acronyms

1. Self Sovereign Identity - SSI
2. Verifiable Credentials - VC
3. Decentralised Identity - DID
4. [Zero-knowledge Proofs (opens in a new tab)](https://en.wikipedia.org/wiki/Zero-knowledge_proof) - ZKP
5. BBS+ - (named after the original authors Boneh, Boyen, and Shacham)
6. LD - Linked Data
7. JSON-LD - JSON formatted version of Linked Data

## Introduction

With the increased rise in requirements to move to a digital version of paper based credentials due to Covid, the idea of Verifiable Credentials as a solution has dramatically increased.

With any new technology or standard that undergoes a rapid rise in popularity, there is a danger of the fundamental ethical, privacy and interoperability standards being ignored.

With Verifiable Credentials, this is especially important due to the information they hold and the potential for misuse.

We can already see from the multiple companies who have taken the [Verifiable Credentials Data Model (opens in a new tab)](https://www.w3.org/TR/vc-data-model/) and created their own wallets or Blockchain backed infrastructure to provide services.

At a certain point these digital wallets will become a part of devices such as phones operating systems and we may face a fragmented market with a race to the most successful standard risking interoperability issues.

We should ensure that before we decide on the use of a particular standard or implementation, that it is the right thing to do and that we reduce any potential risk of damage to society and the citizens we serve.

## What is JSON-LD ZKP with BBS+ Signatures?

BBS+ is a pairing-based cryptographic signature used for signing 1 or more messages.

Pairing-based cryptography has been used to construct identity-based encryption (IBE), which allows a sender to encrypt a message without needing a receiver’s public key to have been certified and distributed in advance.

JSON-LD is a linked data proof that consists of information about the proof, parameters required to verify it, and the proof of value itself.

Combined together, these give a Verified Credential that gives the following benefits.

1. Anonymous in their use
2. Revocable
3. Selective Disclosure
4. Compound Proofs
5. Zero-knowledge proofs

These areas are briefly explained below. For a deeper dive into the technical side of BBS+,, JSON-LD and all other technology mentioned, references are given at the bottom of this document for further reading.

All information in this document has been referenced from these sources.

## What is Decentralised Identity (DID)?

Decentralised identity is a concept that gives back control of identity to consumers through the use of an identity wallet in which they collect verified information about themselves from certified issuers (such as the Government).

By controlling what information is shared from the wallet to requesting 3rd parties (e.g., when registering for a new online service), the user is able to better manage their identity online and their privacy – for example, only presenting proof that they’re over 18 without needing to reveal their actual Date of Birth.

Source: [GSMA Decentralised Identity (opens in a new tab)](https://www.gsma.com/identity/decentralised-identity)

### Selective Disclosure

Within VCs you are able to take selective attributes and only reveal those instead of all the attributes.

For example, presenting a driving licence to prove your age should not require you to disclose all other information on this credential to prove it. All you should need is a boolean response to the query you are asking.

When you present your VC, you should be prompted to ask, are you over 21?

The VC then should be able to present the answer without disclosing all other information to the system requesting it.

> Imagine going to a bar, but instead of showing your ID, which reveals everything, you only prove that you are old enough to get in - without even needing to reveal your birth date!

This is a key advantage of physical documents where you have to hand over your entire id, to confirm a specific attribute of yourself.

### Compound Proofs

Compound Proofs is a way of combining multiple VCs into one queryable VC without generating a new VC.

This allows you to combine multiple attributes from different identities all without disclosing any other data about yourself, only sharing the minimum data.

#### Scenario

You are going on holiday and you are required to present at various checkpoints before boarding a plane, the following documents.

1. A valid Passport
2. A Yellow Fever vaccine pass
3. Your boarding ticket

Compound proofs allow you to combine all these passes into one queryable VC and use Selective Disclosure to verify only the required attributes at different stages.

#### Example

You are buying an item from Duty Free. Currently, you need to present your boarding pass and passport to confirm you are eligible to purchase that item and the amount.

Instead of handing over both of these documents, the checkout operator can scan your VC querying with a question.

"Are you able to purchase these items?"

This can have a combined check for the following

1. Are you over 21?
2. Does the destination you are travelling to allow this item?
3. Does the destination you are travelling to allow the quantity of this item?
4. Is this a valid boarding pass?
5. Is this a valid passport?

All these are then confirmed as being true or false, rather than the system pulling this information, storing it and doing the query internally.

### Correlating signatures and zero-knowledge proof signatures

On previous versions of VCs, when you are issued one by an issuer, it will uniquely sign your credential so that it can be verified.

The downside of this means, everywhere you use your credential, you can be tracked and monitored using this unique identifier through the verification systems in place.

A VC ends up being the equivalent of a global super cookie across your digital and physical life.

You should not be in a position to be tracked while using a VC.

BBS+ removes this and replaces it with a unique proof of the issuer's signature without sharing the signature itself.

This means every time you use a VC as a proof, you never share the unique identifier in the handshake. This results in

1. The Issuer is unable to see how you are using your VCs
2. The verifier you are interacting with has no way to correlate you
3. Multiple companies consuming parts of your data cannot collaborate to build a profile on your shared data

Using zero-knowledge proofs, you only show exactly what the verifier needs without exposing any other information.

## Conclusion

Verifiable Credentials have a key place in the future and cannot be ignored.

This does not mean we should accept them in any form that does not hold to the highest standards of privacy and security.

JSON-LD ZKP with BBS+ Signatures at a minimum will give us assurance in the information the citizen has while maintaining privacy throughout their journey.

A mindset change from modern ways of handling data in services across the internet will be required for this technology to be adopted. We are so used to collecting more information than we need and storing it, forgetting that we only require little to give the citizens the services they require.

There will be legitimate concerns around fraud protection, auditing and national security threats, but with the right thinking, these issues can be overcome and should not be an excuse.

We should move forward with Verifiable Credentials in the future and prepare whatever solution we come up with, with the intent of being able to use them.

## References

1. [What BBS+ Means For Verifiable Credentials - YouTube (opens in a new tab)](https://www.youtube.com/watch?v=dXlRIrrb9f4)
2. [Why the Verifiable Credentials Community Should Converge on BBS+ - Brent Zundel (opens in a new tab)](https://www.evernym.com/blog/bbs-verifiable-credentials/)
3. [Verifiable Credentials Flavors Explained (opens in a new tab)](https://www.lfph.io/wp-content/uploads/2021/02/Verifiable-Credentials-Flavors-Explained.pdf)
4. [https://w3c-ccg.github.io/ld-proofs/ (opens in a new tab)](https://w3c-ccg.github.io/ld-proofs/)
5. [https://github.com/mattrglobal/jsonld-signatures-bbs (opens in a new tab)](https://github.com/mattrglobal/jsonld-signatures-bbs)
6. [https://github.com/mattrglobal/bbs-signatures-spec (opens in a new tab)](https://github.com/mattrglobal/bbs-signatures-spec)
7. [JSON for Linked Data (opens in a new tab)](https://json-ld.org/)
8. [Pairing Based Cryptography (opens in a new tab)](https://doubleoctopus.com/security-wiki/encryption-and-cryptography/pairing-based-cryptography/)
