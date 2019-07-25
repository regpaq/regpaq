---
layout: post
title: Netlify Analytics Review
description: Is it everything the industry has been waiting for?
date: '2019-07-25T01:02:48.485Z'
categories: [marketing]
slug: /netlify-analytics-review
image: netlify-analytics.jpg
image-alt: netlify analytics review
author: Reggie Paquette
post-id: 26
seo:
    date_modified: '2019-07-25T01:02:48.485Z'
---

Netlify Analytics is a server side analytics tool that doesn't slow down your website, protects the privacy of your users, and is GDPR compliant.

Released in July 2019, [Netlify Analytics](https://www.netlify.com/products/analytics/) is a new add-on to Netlify's popular hosting and deployment platform. Starting at $9/month, it's an "expensive" alternative to the analytics king, Google Analytics, which is free. But is it worth it?

I bought it to find out.

## What is Good About Netlify Analytics?

Netlify Analytics doesn't slow down your website at all since you don't need to add any code to your site. Installation was as easy as clicking a button in my Netlify backend. And since it's anonymous and doesn't use javascript or cookies, users with adblock are still counted and I didn't need to add any cookie warnings on my site for GDPR.

## What You Can See in Netlify Analytics

*   pageviews
*   unique visitors
*   top viewed pages
*   top pages/resources not found
*   top sources/referrers (with path)
*   bandwidth used

## What Can't You See in Netlify Analytics?

*   **you can't see beyond the last 30 days**
*   you can't filter by page or change the date range
*   you can't look at the top sources for an individual page
*   you can't see the bounce rate or average time on site

## Is Netlify Analytics Worth It?

No. Not right now. At $9/month for a product whose competitors are free and more capable, everyone was expecting more from this release.

{% include figure.html image="/assets/images/netlify-analytics-pricing.jpg" caption="Netlify Analytics starts at $9/month." width="wide" %}

**You only have one "screen" without a single filter to segment your data.** Most egregious though is they delete data older than 30 days (or at least it's not accessible). Second, I need to be able to break down referrer and pageviews by URL so I can see from where and how much traffic specific pages are getting.

As it is now, Netlify Analytics is a great product for people who have a simple curiosity for a site or project's stats. And if you really care about shaving milliseconds off load times or capturing ad block users, Netlify Analytics could be for you. But if you just casually need analytics, are you going to pay $9/month for it? I'm not sure it's worth it, but many people are happy to give Netlify $9/month for Analytics because their free hosting and deployment platform is so good that they just want to support them. It's not all bad news for Netlify.

But remember, this is version one of Netlify Analytics. If Netlify can improve the product by adding the above features, it very well could be a game changer - something I'm eagerly anticipating.

## Alternatives to Netlify Analytics

*   [Fathom Analytics](https://usefathom.com/)
*   [Simple Analytics](https://simpleanalytics.com/)

Although both Fathom and Simple Analytics are not server-side analytics, they are both GDPR compliant and focused on user privacy.

I just signed up for Fathom and will do a review soon to see how it compares to Netlify Analytics.