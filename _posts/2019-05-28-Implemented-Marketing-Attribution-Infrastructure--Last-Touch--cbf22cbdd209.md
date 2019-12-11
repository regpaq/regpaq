---
layout: casestudy
title: Implemented Marketing Attribution Infrastructure
description: to automatically record marketing and sales attribution for paid leads through to closed-won deals.
date: '2019-05-28T01:10:51.063Z'
categories: [casestudy,chilipiper]
slug: /implementing-a-marketing-attribution-system
skills: [reporting,demandgen]
image: /assets/images/chili-attribution-2.jpeg
image-alt: URL Builder in a spreadsheet for Chili Piper
author: Reggie Paquette
post-id: 19
seo:
    date_modified: '2019-05-28T01:10:51.063Z'
---

## Problem

When I first came onboard, we were running paid acquisition campaigns on just LinkedIn and Capterra. To measure their performance, we were using a separate form for each channel and just three URL tracking parameters: ppc\_campaign, ppc\_ad, and ppc\_keyword without any kind of naming conventions in place.

Using multiple forms is an easy way to separate channel performance easily, but the upkeep of them as more channels are added is cumbersome and becomes unnecessary with a proper attribution system in place. And without standard naming conventions for campaigns, content, and term, it can be difficult to scale tracking and measuring performance of content and angles across channels.

## Solution

Upgrading ppc\_campaign, ppc\_ad, and ppc\_keyword to the full main five tracking parameters used in Google Analytics (source, medium, campaign, content, and term) provided us with a standardized attribution system we could use across channels. Then we just needed one form we could use on all of our landing pages.

Because we didn’t have a marketing automation platform or a marketing attribution platform, we decided to move forward with a simple last-touch attribution system.

### Step 1 — Create Marketing Attribution Fields in Salesforce

First we changed the three existing tracking fields to ‘Marketing Campaign,’ ‘Marketing Content,’ and ‘Marketing Term’. Then we added ‘Marketing Source’ and ‘Marketing Medium’. For marketing reporting purposes, we also added ‘Latest Demo Request Date’ and a ‘Demo Requested’ toggle we use to fire other automation. These fields were created on the Lead object in Salesforce (SFDC), the Contact, and the Opportunity (Opp).

{% include figure.html image="/assets/images/chili-attribution-1.png" caption="New marketing attribution fields in Salesforce." width="wide" %}

### Step 2 — Creating the Form and Capturing URL Parameters

We are using Clearbit Forms, which allow us to capture values from URL parameters natively. All I needed to do was create the hidden fields and map them to the parameter.

### Step 3— Automating the Data Flow in Salesforce

When a Lead is converted to a Contact and Account, we set up the attribution fields to be carried over to the Contact. When converted to an Opp, they also flow to the Opp where once created are frozen so they can’t be overwritten by a subsequent form submissions. This was set up because we wanted to credit the last marketing campaign that generated the Opp.

### Step 4 — Standardizing Naming Conventions in a URL Builder

Now the foundation has been built, I could build a URL Builder tool in a Google Sheet and standardize naming conventions used for channels, campaigns, content, audiences etc. This is essential for being able to uncover what’s working what isn’t within a single channel over time and across channels.

In one tab (data tab) was columns for source, medium, campaign, and term. I broke content up into five sub data points that all combined into one that was to be used for content. They were product, value/benefit, audience, media, and copy/ad variant. In the rows under each column were a list of values. For example, under source was google, linkedin, capterra, etc. Under value/benefit was connecting, conversion-rate, speed-to-lead. That way, in any future campaign in any channel, we could come back to using these naming conventions.

On another tab was the actual URL Builder. Each column used data validation from the data tab so my team and I could build tracking URLs using a series of dropdown menus and if something didn’t match it threw an error.

It looked liked this:

{% include figure.html image="/assets/images/chili-attribution-2.jpeg" caption="URL Builder in a spreadsheet for Chili Piper" width="wide" %}

The final cell combined all the data using simple CONCATENATE formulas and resulted in a tracking URL.

## Result

Every campaign started was built using this URL builder that ensured consistent naming conventions for marketing attributions. This allowed us to build accurate marketing reports broken down by channel, audience, and campaign. It allowed us to view the success specific pieces of content, ads, media type, or angles across channels. And because it’s all in SFDC, we could do quick ad-hoc analysis using any combination of these parameters to see what’s working or not and drive strategy.