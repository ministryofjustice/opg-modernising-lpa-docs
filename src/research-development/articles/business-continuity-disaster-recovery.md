---
layout: layouts/article.njk
title: "Business Continuity and Disaster Recovery"
date: 2022-04-11
tags: 
  - research_development
  - data_privacy
  - security_threats
  - techniques
  - deployment
  - stability
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Business Continuity

Business continuity planning makes our service prepared for worst case scenarios. That might be accidental data loss, intentional data destruction or system failure from suppliers like cloud providers.

Essentially asking the question: what happens when things go catastrophically wrong? This relates to service standard point 14, [Operate a Reliable Service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service)

Our business continuity strategy should be:

* Appropriate and proportionate to the needs of the service and its users
* Supportable by the delivery team
* Agreed with the business
* Documented as part of your service’s GitHub repo

Conversations around business continuity should include the Business, Product, Delivery, Developers, WebOps and Technical Architecture.

### What to look at during the Discovery / Alpha Stage

During alpha and discovery phases we should be experimenting and testing our hypothesis. Business continuity work has been light touch at this stage as we need to identify and understand what is proportional and appropriate for our services business continuity. We also need to understand what the service is.

Questions we need to ask include:

* What is the impact of this proposed service failing on users and the business?
* What risks exist that you need to find mitigations for?
* Which data will be key to your service functioning?
* Which data only exists in your service?
* What are the business and user expectations around response and recovery?
* What non-digital fallbacks are in place already?

Starting to collect answers to these will help identify areas to build on as we move into Beta.

### What to look at during Beta Stage

During private and public beta stages we should focus on how our business continuity needs will impact the MVP build and how we can avoid issues in the future.

In this phase, decisions should be recorded and agreed upon from all parties.

During beta we should:

* Identify how our service is likely to fail and which components are the greatest risk
* Identify how any disaster recovery will impact how we build our infrastructure
* Define recovery point objective and recovery time objective for our service
* Identify who owns any business continuity processes inside and outside the delivery team
* Document any disaster recovery in `/docs/DISASTER_RECOVERY.md`
* Ensure we have a backup and restore process for key data assets
* Build familiarity with the incident management tools
* Identify if our service is dependent on other systems and how much it can operate without them
* Identify defensive coding and architectural practices to avoid or reduce dependencies

## Disaster Recovery

Once we know the decisions made from above, we can decide on what is the Disaster Recovery option to take.

The options are listed below and should be considered at the start of the Beta phase.

### High-level options

#### Option 1: Backup and restore

* Take automated backups/snapshots of data. Restoration time could be hours as we’d need to replicate the backups/snapshots into another account or region within AWS.
* Data loss: Up to 24 hours
* Time to Recover: 6+ hours
* Cost: Low (Only inactive storage costs)

#### Option 2: Pilot Light

* We keep core services running in another region. For example, we could move into a global Aurora cluster which would replicate the data into a cluster located in another region. Typically there is a 1 second lag between replication.
* Data loss: Low (Minutes)
* Time to Recover: 2-3 hours
* Cost: Medium (Core Data Services would be scaled down but active in a second region)

#### Option 3: Hot standby

* Full replica of our service running in another region, in the event of a disaster we would be able to point users at this in seconds.
* Data loss: Low (Minutes/Seconds)
* Time to Recover: Minutes
* Cost: High (Full-stack active in a secondary region)

### Building the DR plan

To have an effective disaster recovery plan in place, we should define an 

* RTO ([Recovery Time Objective](#recovery-time-objective))
* RPO ([Recovery Point Objective](#recovery-point-objective))

As a team, this will enable us to create a disaster recovery plan that is effective for Modernising, and it’s something we can simulate periodically to ensure it’s still effective.

#### Recovery Time Objective

The allowed time it would take to restore the services after a disaster occurs. For example, if the service was to fail at 1030 and our RTO was 1 hour, everything should be back up and running at 1130.

#### Recovery Point Objective

This should define the amount of acceptable data loss in time. For example, should the service go down at 1030, and we have an RPO of 2 hours, we should be able to recover all the data up to 0830.

## References

* [Operate a Reliable Service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service)
