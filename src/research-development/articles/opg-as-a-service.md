---
layout: layouts/article.njk
title: "OPG as a Service"
date: 2022-02-14
tags: research_development
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Introduction

70% of LPAs made are done by solicitors, charities or other third parties on behalf of the Donor.

Citation: [Lasting Power of Attorney Statistics](https://www.lastingpowerofattorney.service.gov.uk/stats)

If we are to encourage the uptake of our digital pathway, we need to explore a way of enabling this group of users to interact with their systems more efficiently.

Supplying our users with an option to integrate via an API will help move a significant amount of users over to our digital LPA service.

We know that most solicitors firms use a small range of software providers and work with a group called the [Legal Software Suppliers Association](https://www.lssa.co.uk) (LSSA).

The companies behind this software have a keen interest in integrating with our service through code so that they can streamline their processes and automate work.

They already integrate with other government services like the Land Registry.

### Legal Software Suppliers Association (LSSA)

> The Legal Software Suppliers Association (LSSA) is the UK industry body for legal systems developers and vendors. Representing most of the leading UK suppliers, it aims to both set and maintain professional standards within the industry and manage areas of mutual interest between lawyers and software providers.

Working with the LSSA and those outside of them will be key to unlocking the full potential of any new service we create.

## OPG as a Service

> An API is not "just" an API

There is more to building an API than providing consumers with an endpoint to connect to.

To accomplish providing an integration for the users of our service, we need to build something that does the following:

- Allow the user to Self Service
- Quality support expected of a service that is widely used
- A testing environment for new and existing integrations
- Information on the service status
- Well documented schema and versioning strategy
- Allows the consumer to integrate into their existing software platforms
- Communicate data flows and business logic for an LPA lifecycle

We should take the learnings from the existing [GOV.UK Notify](https://www.notifications.service.gov.uk/) and [GOV.UK Pay](https://www.payments.service.gov.uk/) services which provide a centralised API for any government service to integrate with.

We should follow the patterns they use, including their url structure, design and features.

Below is an example of how this may be structured

![Diagram showing an overview of all components of a potential future self service API.](/assets/images/research-development/opg-as-a-service/opg-as-a-service.jpg "Diagram showing an overview of all components of a potential future self service API.")

**TODO: Better pattern to display this?**

| Component | Description |
|---|---|
| **Documentation** | Details on how to use the service from sign up to implementation |
| **Account Management** | Manage your account resources in a self service way |
| Organisation Details | Solicitor, Charity, Company or third party details management |
| User Details | Individual user details associated with the organisation. This allows for better auditing with interactions within the API |
| API Keys | Each Organisation has a unique API Key that is required for any API calls |
| API Throttling Limits | Throttling rules shown to understand your allowed usage of the service |
| Audit Trails | Anonymised logs to allow you to Audit activity within your organisation |
| **Support** | Provide technical support to users of the service |
| Uptime and Issues Dashboard | Dashboard with current and past service uptime, alerting hooks for integrations into 3rd party tooling such as Slack and scheduled maintenance times |
| Sandbox | A testing environment for new integrations or testing out code against newer versions of APIs |
| **API** | Endpoints for external parties to integrate with |
| Security | IP Range, API Key (Organisation) and UserID (User Details ID) all set for requests to the API |
| Responses | JSON and potentially FHIR+JSON for the NHS |
| OpenAPI Specifications | Defined OpenAPI specifications allowing mocks and integration checks. There is a potential for Contract Testing here too |
| API Design Styles | REST or GraphQL. Our Domain supports REST more than GraphQL so REST is probably the way we will go |
| **Internal Government Services** |  |
| [GOV.UK Notify](https://www.notifications.service.gov.uk/) | Sending of emails, texts and letters |
| [GOV.UK Pay](https://www.payments.service.gov.uk/) | For the handling of payments through the process |

## Example API Endpoints

Below are a list of potential endpoints and flows we could implement within OPG as a Service.

### Example API Flow 1

![Diagram showing a simplified version of submitting an LPA](/assets/images/research-development/opg-as-a-service/simple-api-example.jpg "Diagram showing a simplified version of submitting an LPA")

We are able to replicate the entire [Make a LPA](https://www.lastingpowerofattorney.service.gov.uk/home) journey via this endpoint.

Providing a Data Model for integrations, we can specify the structure of the data required and provide an endpoint that can be a one off transaction.

This would allow third parties to create LPAs and actors in a simplified way, but would end the journey there.

Negatives are that we will find ourselves in a position where we will have duplicate actors and no sure proof way of matching them against existing OPG actors.

### Example API Flow 2

![Diagram showing an overview of all components of a potential future self service API.](/assets/images/research-development/opg-as-a-service/full-api-example.jpg "Diagram showing an overview of all components of a potential future self service API.")

This diagram offers a more complete API for greater control and management of LPA data.

#### Actor

An actor endpoint will allow systems to manage OPG users details from their own content management systems.

Creating an actor will then supply the third party with a OPG User ID that they can use in any future LPA management.

They should also be able to claim the management of a OPG User if they already exist in the system. This needs to be thought about more on how the user would manage and consent to this through the website.

Having the ability to properly manage a actor will mean better audit trails and confidence in safe guarding rather than potential duplicate identities within the OPG service.

#### Documents

Giving the ability for third parties to submit documents such as identification material, signatures or photos is a nice to have and may not be required.

It is here to show that it is possible to do so, however we would rather not be in a position where we are managing copies of users private documents.

Where possible we should be using transactional processes that return us a confidence score to act upon and not storing copies of user data.

#### LPA Create

Unlike the Make a LPA endpoint, this splits the process into 4 stages to correctly manage an LPA.

You can register a new empty LPA by a POST to the create endpoint with a internal reference number. At this point we have created a blank record with a reference to the third parties internal reference number.

After this you can PUT as often as you wish, a `OPGLPADataModel` object with data that will be stored and saved on the OPG system.

The `OPGLPADataModel` will be well documented and have all validation rules defined to work against.

Sending an LPAID as a GET you will be able to get the status of the LPA.

Sending a DELETE with the LPAID will delete the LPA from the OPG system.

#### LPA Complete

Once you have completed the LPA Create flow with the correct OPG status being returned, you will be ready to complete the lpa. Doing a GET to this endpoint will tell OPG this is ready to be processed and will lock any amends to the LPA moving forward.

You will be returned the final `OPGLPADataModel` data and any other corresponding data to confirm this action.

### Using the API Flow

![Diagram showing how you would use the API to manage actors and LPA creation](/assets/images/research-development/opg-as-a-service/using-api-flow.jpg "Diagram showing how you would use the API to manage actors and LPA creation")

This example will take you through a potential flow of integrating with an API.

We have included a path for users to sign in and do actions on our site. This is a way to help prevent duplicate and orphan records from appearing in the OPG system.

#### Create LPA

Send a request to `/lpa/create` with

- The integrations internal reference number
- LPA Configuration data which optionally tells OPG what they need to do when a user first registers
  - Pay via OPG
  - Sign via OPG
  - Verify via OPG
- Returns a LPAID to store against the internal LPA record

#### Create Actors

Send a request to `/actor` with

- `LPAID` that is stored from the Create LPA Endpoint call
- List of `OPGActor`
- (optional) `EmailActors` setting to `true` will optionally send emails via Notify
- (optional) `WebhookUrl` setting to tell OPG where to send confirmation for each actor completing their sign up. **Note**: This could be set at a higher level in the Organisation settings
- Returns a list of unique, time based urls for each actor if `EmailActors` is `false`

#### Actors Log In

Each Actor follows the links and does one of the following

- Signs in to an existing account
- Confirms that this LPA should sit within their account

- Registers a new account
- If any LPA Configuration is set, do these activities
- LPA gets added to their account

#### Webhook or Poll

Once all actors have completed their sign up, the third party are able to carry on with completing and submitting the LPA.

##### Webhook

If a `WebhookUrl` was specified in the create actors step, OPG will send a message to a specific endpoint as set by the third party.

##### Polling Endpoint

If a `WebhookUrl` was not specified in the create actors step, the third party can check an endpoint on a regular basis to check for those actors being verified or not.

#### Submit LPA

Once you have a `LPAID`, a LPA returning a status indicating all data is complete and all actors are verified, you can submit the LPA to OPG and lock it for processing.

### View an LPA

![Diagram showing the View an LPA website as an API](/assets/images/research-development/opg-as-a-service/view-an-lpa-api.jpg "Diagram showing the View an LPA website as an API")

This example shows how we could offer the View a LPA service as a API Endpoint.

With the ability to monitor third parties by their credentials, we can ensure high levels of trust and prevent bad actors from attacking.

This will aid those in need of adding the service to their back end systems for better automation rather than the current manual process of using a web form.

## Conclusion

Due to the size of the market who use our site via an intermediary, we should enable third parties to integrate into our service in a programmatic way.

Feedback from research done with these third parties suggests the more complicated route would be better so that they can have more fine grained control within their systems.

As well as the user journey on the website, we should dedicate the same amount of effort to our integration service.

This will require the business to look at Modernising not only in the form of a website feeding into a database, but as a more accessible service with multiple routes to interact with LPAs in the wider ecosystem.

## References

- [Lasting Power of Attorney Statistics](https://www.lastingpowerofattorney.service.gov.uk/stats)
- [Make a LPA](https://www.lastingpowerofattorney.service.gov.uk/home)
- [GOV.UK Notify](https://www.notifications.service.gov.uk/)
- [GOV.UK Pay](https://www.payments.service.gov.uk/)
