---
layout: layouts/article.njk
title: "Business Continuity and Disaster Recovery"
date: 2022-04-11
tags: 
  - research_development
  - testing
  - open_standards
  - techniques
  - tools
  - stability
areas_of_coverage: ["Digital Service"]
contributors: ["John Nolan"]
---

## Business Continuity

Business continuity planning makes your product prepared for worst case scenarios. That might be accidental data loss, intentional data destruction or system failure from suppliers like AWS. Essentially asking the question: what happens when things go catastrophically wrong? This relates to service standard point 14, [Operate a Reliable Service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service)

Your business continuity strategy should be:

* Appropriate and proportionate to the needs of the service and its users
* Supportable by the delivery team
* Agreed with the business
* Documented as part of your service’s GitHub repo

Conversations around business continuity should include the Business, Product, Delivery, Developers, WebOps and Technical Architecture.

### What to look at during the Discovery / Alpha Stage

During alpha and discovery phases you should be experimenting and testing your hypothesis. Business continuity work will be light touch at this stage. You should identify and understand what is proportional and appropriate for your product’s business continuity.

Good questions to ask include:

* What is the impact of this proposed service failing on users and the business?
* What risks exist that you need to find mitigations for?
* Which data will be key to your service functioning?
* Which data only exists in your service?
* What are the business and user expectations around response and recovery?
* What non-digital fallbacks are in place already?

Answering these will help identify areas to build on in later phases.

### What to look at during Beta Stage

During private and public beta stages you should focus on how your business continuity needs will impact the MVP build and how you can avoid issues in the future.

During beta you should:

* Identify how your service is likely to fail and which components are the greatest risk
* Identify how any disaster recovery will impact how you build your infrastructure
* Define recovery point objective and recovery time objective for your service
* Identify who owns any business continuity processes inside and outside the delivery team
* Document any disaster recovery in /docs/DISASTER_RECOVERY.md
* Ensure you have a backup and restore process for key data assets
* Build familiarity with the incident management tools
* Identify if your service is dependent on other systems and how much it can operate without them
* Identify defensive coding and architectural practices to avoid or reduce dependencies

### For Live products

You should document your support practices, disaster recovery plan and approaches before live assessment. However, you may have inherited a live codebase and need to bring it up to current standards.

* Do you need to retrofit a business continuity strategy for the product?
* How regularly are you testing your Disaster Recovery plan?
* Is ownership of the Disaster Recovery plan clear?
* Are the team familiar with the incident management tools?
* Have any of the business needs, user needs or contacts changed?

Differences between internal-facing and external-facing services
Requirements for recovery time (how quickly things are working again) and recovery point (what data is brought back) are different across different products and service areas depending on who uses them and the impact, both internally and externally of any downtime.

For example, downtime on a flagship service like Make An LPA has both impact to users and the business, but also reputational impact.

Some products are the canonical source of truth for data in the OPG ecosystem. Others could be rebuilt from other sources. This will have a large impact on what a proportional plan is for your service.

Some products are essential to the core work of the business and their failure has a large cost implication if staff aren’t able to work.

For example, downtime to Sirius has an impact on connected digital services and on the ability of core business functions. Whereas downtime for Complete the Deputy Report is inconvenient, but can be managed through good communication with users and stakeholders.

## Disaster Recovery

### High-level options

#### Backup and restore

* Take automated backups/snapshots of data. Restoration time could be hours as we’d need to replicate the backups/snapshots into another account or region within AWS.
* Data loss: Up to 24 hours
* Time to Recover: 6+ hours
* Cost: Low (Only inactive storage costs)

#### Pilot Light

* We keep core services running in another region. For Sirius, we could move into a global Aurora cluster which would replicate the data into a cluster located in another region. Typically there is a 1 second lag between replication.
* Data loss: Low (Minutes)
* Time to Recover: 2-3 hours
* Cost: Medium (Core Data Services would be scaled down but active in a second region)

#### Hot standby

* Full replica of Sirius running in another region, in the event of a disaster we would be able to point users at this in seconds.
* Data loss: Low (Minutes/Seconds)
* Time to Recover: Minutes
* Cost: High (Full-stack active in a secondary region)

### Building the DR plan

To have an effective disaster recovery plan in place, we should define an RTO (Recovery Time Objective) and an RPO (Recovery Point Objective). As a team, this will enable us to create a disaster recovery plan that is effective for Sirius, and it’s something we can simulate periodically to ensure it’s still effective.

#### Recovery Time Objective

The allowed time it would take to restore the services after a disaster occurs. For example, if the service was to fail at 1030 and our RTO was 1 hour, everything should be back up and running at 1130.

#### Recovery Point Objective

This should define the amount of acceptable data loss in time. For example, should the service go down at 1030, and we have an RPO of 2 hours, we should be able to recover all the data up to 0830.

## References

* [Operate a Reliable Service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service)
