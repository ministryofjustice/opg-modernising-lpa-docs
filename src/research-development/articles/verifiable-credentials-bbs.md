---
layout: layouts/article.njk
title: "Verifiable Credentials - JSON-LD ZKP with BBS+ Signatures"
date: 2021-08-12
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

# Verifiable Credentials - JSON-LD ZKP with BBS+ Signatures

## Introduction

With the increased rise in requirements to move to a digital version of paper based credentials due to Covid, the idea of Verifiable Credentials as a solution has drastically increased.

Reduced ability to process paper documents due to health guidelines in offices and access postal services, has driven a move to more online services.

However previous services that were reliant on paper now face a challenge of how to move to a new way of working.

With any new technology or standard that undergoes a rapid rise in popularity, there is a danger of the fundamental ethical, privacy and interoperability standards being forgotten.

With Verifiable Credentials, this is especially important due to the information they hold and the potential for misuse.

There are multiple companies who have taken the [Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) and created their own wallets to store these credentials. Companies include

1. [https://tykn.tech/](https://tykn.tech/)
2. [https://www.evernym.com](https://www.evernym.com)
   [https://www.postoffice.co.uk/identity/easyid](https://www.postoffice.co.uk/identity/easyid)
3. [https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/decentralized-identifier-overview](https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/decentralized-identifier-overview)
4. [https://auth0.com/blog/verifiable-credentials-with-auth0-and-mattr/](https://auth0.com/blog/verifiable-credentials-with-auth0-and-mattr/)

A digital wallet is a way of securely storing your VCs and using them. The use of these would mirror the way NFC works when storing your credit card details on your phone.

At a certain point these digital wallets will become a part of devices such as a phone’s operating system. There is a risk the wallets that store these credentials may face a fragmented market with a race to the most successful standard risking interoperability issues.

We should ensure that before we decide on the use of a particular standard or implementation, that it is the right thing to do and that we reduce any potential risk of damage to society and the citizens we serve.
## What is Decentralised Identity (DID)?

Decentralised identity, also sometimes referred to as self-sovereign identity, is a concept that aims to give back control of identity data to consumers through the use of an identity wallet or personal data store. In this way, data can be verified by a trusted source (such as the government) and then issued to an individual to store in a location of their choice.

By controlling what information is shared from the wallet to requesting 3rd parties (e.g., when registering for a new online service), the user is able to better manage their identity online and privacy – for example, only presenting proof that they’re over 18 without needing to reveal their date of birth.

Source: [https://www.gsma.com/identity/decentralised-identity](https://www.gsma.com/identity/decentralised-identity)

## What is JSON-LD ZKP with BBS+ Signatures?

BBS+ is a pairing-based cryptographic signature used for signing one or more messages.

Pairing-based cryptography has been used to construct identity-based encryption (IBE), which allows a sender to encrypt a message without needing a receiver’s public key to have been certified and distributed in advance. 

JSON-LD is a linked data proof that consists of information about the proof, parameters required to verify it, and the proof of value itself.

Combined together, these give a verified credential the following benefits:

1. Anonymous in its use
2. Revocable
3. Selective disclosure
4. Compound proofs
5. Zero-knowledge proofs

These areas are briefly explained below. For a deeper dive into the technical side of BBS+, JSON-LD and all other technology mentioned, references are given at the bottom of this document for further reading.

All information in this document has been referenced from these sources.

### Selective Disclosure

Within VCs you are able to take selective attributes and only reveal those instead of all the attributes.

For example, presenting a driving licence to prove your age should not require you to disclose all other information on this credential to prove it. All you should need is a boolean response to the query you are asking.

When you present your VC, you could be prompted to answer, “Are you over 21?”

The VC then should be able to present the answer without disclosing all other information to the system requesting it.

> Imagine going to a bar, but instead of showing your ID, which reveals everything, you only prove that you are old enough to get in - without even needing to reveal your birth date!

This is a key advantage of physical documents where you have to hand over your entire ID, to confirm a specific personal attribute.

### Compound Proofs

Compound proofs is a way of combining multiple VCs into one queryable VC without generating a new VC.

This allows you to combine multiple attributes from different identities all without disclosing any other data about yourself, only sharing the minimum data.

#### Scenario

You are going on holiday and you are required to present at various checkpoints before boarding a plane, the following documents:

1. A valid passport
2. A yellow fever vaccine pass
3. Boarding pass 

Compound proofs allow you to combine all these passes into one queryable VC and use selective disclosure to verify only the required attributes at different stages.

#### Example

You are buying a couple of bottles of wine from Duty Free. Currently, you need to present your boarding pass and passport to confirm you are eligible to purchase that item and the amount.

Instead of handing over both of these documents, the checkout operator can scan your VC querying with a question.

"Are you able to purchase these items?"

This can have a combined check for the following

1. Are you over 18?
2. Does the destination you are travelling to allow this item?
3. Does the destination you are travelling to allow the quantity of this item?
4. Is this a valid boarding pass?
5. Is this a valid passport?

All these are then confirmed as being true or false, rather than the system pulling this information, storing it and doing the query internally.

### Correlating signatures and zero-knowledge proof signatures

On previous versions of VCs, when you are issued one by an issuer, it will uniquely sign your credential so that it can be verified.

The downside of this means, everywhere you use your credential, you can be tracked and monitored using this unique identifier through the verification systems in place.

A VC ends up being the equivalent of a global super cookie across your digital and physical life. You should not be in a position to be tracked while using a VC.

BBS+ removes this and replaces it with a unique proof of the issuer's signature without sharing the signature itself.

This means every time you use a VC as a proof, you never share the unique identifier in the handshake. This results in:

1. The Issuer is unable to see how you are using your VCs
2. The Verifier you are interacting with has no way to correlate you
3. Multiple companies consuming parts of your data cannot collaborate to build a profile on your shared data

Using zero-knowledge proofs, you only show exactly what the verifier needs without exposing any other information.

This is important for the privacy of the user. Using cookies in browsers to track a user's habits then selling and sharing this data is a current issue we face. Without zero-knowledge proofs in place, we enable this same level of tracking in the physical world too.

## Conclusion

Verifiable credentials have a key place in the future. Many governments and organizations around the world are already implementing their own versions and schemas of verifiable credentials. A list of a few examples are below

1. Scottish Government via Okta UK (https://blogs.gov.scot/digital/2020/05/13/digital-identity-scotland-prototype-draws-to-a-close/)
2. Post Office (https://www.postoffice.co.uk/identity)
3. Evernym (https://www.evernym.com/)
4. Microsoft (https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/decentralized-identifier-overview)
5. RSA (https://www.rsa.com/en-us/blog/2021-07/verifiable-credentials-the-key-to-trust-on-the-next-web)


This does not mean we should accept them in any form that does not hold to the highest standards of privacy and security.

JSON-LD ZKP with BBS+ signatures at a minimum will provide us with assurance while maintaining privacy throughout the user journey.

A mindset change from modern ways of handling data in services across the internet will be required for this technology to be adopted. We are so used to collecting more information than we need and storing it, forgetting that we only require little to give citizens the services they require.

There will be legitimate concerns around fraud protection, auditing and national security threats, but with the right thinking, these issues can be overcome and should not be used as excuses.

We should move forward with verifiable credentials in the future and prepare whatever solution we come up with, with the intent of being able to use them.

## Acronyms

1. Verifiable Credentials - VC
2. Decentralised Identity - DID
3. Zero-knowledge Proofs - ZKP [https://en.wikipedia.org/wiki/Zero-knowledge_proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof)
4. BBS+ - (named after the original authors Boneh, Boyen, and Shacham)
5. LD - Linked Data
6. JSON-LD - JSON formatted version of Linked Data
## References

- [What BBS+ Means For Verifiable Credentials - (YouTube)](https://www.youtube.com/watch?v=dXlRIrrb9f4)
- [Why the Verifiable Credentials Community Should Converge on BBS+ - Brent Zundel](https://www.evernym.com/blog/bbs-verifiable-credentials/)
- [Verifiable Credentials Flavors Explained](https://www.lfph.io/wp-content/uploads/2021/02/Verifiable-Credentials-Flavors-Explained.pdf)
- [https://w3c-ccg.github.io/ld-proofs/](https://w3c-ccg.github.io/ld-proofs/)
- [https://github.com/mattrglobal/jsonld-signatures-bbs](https://github.com/mattrglobal/jsonld-signatures-bbs)
- [https://github.com/mattrglobal/bbs-signatures-spec](https://github.com/mattrglobal/bbs-signatures-spec)
- [JSON for Linked Data](https://json-ld.org/)
- [Pairing Based Cryptography (PBC)](https://doubleoctopus.com/security-wiki/encryption-and-cryptography/pairing-based-cryptography/)
