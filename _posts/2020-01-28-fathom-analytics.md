---
layout: post
title: Fathom Analytics Review (From a Marketer)
description: The privacy-focused, Google hating, indie analytics company. Is it worth switching?
date: '2020-01-28T01:02:48.485Z'
categories: [marketing]
category: [all]
slug: /fathom-analytics-review
image: /assets/images/fathom-analytics-review.png
image-alt: fathom analytics review from a marketer
author: Reggie Paquette
post-id: 32
seo:
    date_modified: '2020-01-28T01:02:48.485Z'
---
 
Fathom Analytics is a cookie-less analytics platform that values user privacy above all.

Most marketers default to using Google Analytics for every website. It’s free, powerful, and the industry standard. Why try anything else, *right?*

## Why I Wanted an Alternative to Google Analytics

There’s three reasons I wanted something different than Google Analytics:

1. It adds load time to a website
2. It uses cookies and requires a GDPR notice
3. It tracks users for Google’s own data gain

**When rebuilding this site from scratch, one of my big focuses was on speed.** Since I was using Netlify to host and deploy my site from GitHub, I first tried their server-side analytics called [Netlify Analytics](/netlify-analytics-review).

Netlify Analytics is cool because it tracks users on the server side vs the client side. That means it adds zero weight and load time to a website, doesn’t use cookies, and doesn’t track users. *Great!*

But the product isn’t nearly detailed enough to offer any actionable insights, especially at $9/month as I explained in my review:

{% assign subpage = site.posts | where: 'post-id', '26' %}{% for post in subpage %} {% include rec-article.html %}{% endfor %}

So still interested in other analytics platforms, I heard about Fathom through Twitter. Although it’s not server-side analytics, it is cookie-less and doesn’t add much more load time than Google Analytics does.

The idea of Fathom started in 2018 from a tweet by [Paul Jarvis](https://twitter.com/pjrvs/) who asked: 

> “What if website analytics software didn’t take your users data to line their pockets for advertising?”
>
> > Paul Jarvis
{: .big-quote}

**I love the idea behind this.** But a problem I couldn’t deal with when switching to Netlify Analytics was, as a marketer, not being able to take away enough actionable insights to improve my content and website.

Would Fathom Analytics be any different? **Because I don’t want to pay for vanity metrics.**

Not only is Fathom Analytics more expensive than Netlify Analytics, but it will add to my website’s load time. If I’m going to have to pay more and deal with the load time, it will have to be worth it.

**So far, I’ve been using and paying for Fathom for seven months now and here’s what I think of it.**

## My Review of Fathom Analytics: Can it Replace Google Analytics for Marketers?

Fathom analytics has two types of customers: personal blogs (like this website), and businesses.

For personal blogs, the message is simple: Google is kind of a bully and you don’t want to give them data on all your users. And their analytics is complicated to use. So here’s an analytics platform that just gives you the data you need and keeps your user data private.

For businesses (and marketers), it’s a different story. We actually know how to use Google Analytics and rely on that data to help drive our SEO, content, and website strategy. **Do most marketers care about their user privacy? Aren’t marketers the ones who are always trying to identify their users?**

It’s a much tougher sell. In my opinion, the only companies who are going to ditch Google Analytics for privacy-focused analytics like Fathom are ones with founders who already value data privacy. If they don’t, no chance in hell.

And I don’t think Paul Jarvis or his co-founder [Jack Ellis](https://twitter.com/jackellis/) care. They don’t want those types of customers anyway.

> “The way we run our business is ridiculously simple (not the norm in tech): we charge a fair amount of money for our product, use that money to keep the business running indefinitely, and remain small so that we don’t need a lot of money to be profitable and sustainable.”
>
> > [Fathom Analytics About Page](https://usefathom.com/about)

If you, as a marketer, don’t value data-privacy for your users, you’re probably not going to like Fathom Analytics. If you do, it’s then it’s the best privacy-focused analytics solution available.

If you can’t decide whether you value data-privacy or tracking users more, then read on.

{% include figure.html image="/assets/images/ethical-marketing-dilemma.jpg" caption="The ethical marketer's dilemma." width="full" %}

## What Data Can You See from Fathom Analytics?

If you want to know what kind of data you can see in Fathom, you can [check out my website’s analytics](https://app.usefathom.com/share/xcyerepi/regpaq). With Fathom, you can choose to make your analytics public like I did, and you can see everything that I can. 

Here’s a list of what you get:

- live, real-time data that doesn’t expire like Netlify Analytics
- custom date range picker to filter data
- total unique visits (equivalent to sessions in Google Analytics, I think), page views, average time on site, and bounce rate
- list of your site’s URLs with the percent of total and number of unique visits and page views
- [unlimited goal creation](https://usefathom.com/support/goals) by link click, page load, or form submission
- list of referrers (actual page referring URL) with the percent of total and number of unique visits and page views (also shows the individual tweets sending you traffic)
- device type, browser, and country

This all sounds good, but when I dug in, I found some shortcomings.

## What I Want From Fathom Analytics

There’s a few things I'd like to see built in future releases. I’m not sure if it’s possible based on [their way of measuring traffic](https://usefathom.com/news/anonymization), but if it is, I would be so happy. 

With Fathom Analytics, you can’t:

- filter traffic by referrer to see what pages are being viewed by that referring traffic
- or filter traffic by device type, browser, or country (no equivalent to Google Analytics' dimensions)
- filter metrics by looking at a one page URL at a time to see the referrers, device type, country, and goals for any given page
- see bounce rate, average time spent on site, or goal completions by page URL
- or see the above by the first page URL of a unique visit (equivalent to Google Analytics’ Landing Page dimension)

If these were added, this would give me about 90% of what I use Google Analytics for as a marketer and would be sufficient for a personal blog, but still don’t think it could suffice for a growth-focused company’s website.

If they can’t add these features without sacrificing user privacy, Fathom is the type of company to stand its ground and say *no.* [Paul Jarvis already denied my request to work with AMP.](https://github.com/usefathom/fathom/issues/283) I get it...

## Other Cool Things You Can Do With Fathom Analytics

- You can choose to make your analytics public if you want to have a transparent website ([see my Fathom Analytics dashboard](https://app.usefathom.com/share/xcyerepi/regpaq))
- They do have an affiliate program where you can [get 25% lifetime commissions and people you refer will get $10 off their first month](https://usefathom.com/ref/W2AU06)
- They’re working on an API - I’m going to use it to display page view counts on articles for social proof
- You can set up weekly and monthly reports and also set up client reports
- You can use it on unlimited domains and [their pricing is based on total page views](https://usefathom.com/ref/W2AU06) not by domain
- You can get a [7-day free trial](https://usefathom.com/ref/W2AU06)

## Is Fathom Analytics Worth It?

**Fathom Analytics costs $14/month and right now, I do feel like I’m paying for vanity metrics.**

{% include figure.html image="/assets/images/fathom-analytics-pricing.png" caption="Fathom Analytics starts at $14/month with unlimited domains." width="wide" %}

That said, I enjoy paying for it and using it on this site. It’s rare to come across a company that sticks to its mission which radiates in everything they do - their roadmap, design, content, and podcast. And they’re upfront about charging more than the industry standard so they can afford to stick to their principles. 

**I just love it when companies do that. And I’m a sucker for it.**

So should you make the switch? Well it comes down to whether you can get behind the mission of the company:

> “Our goal is huge but simple: to make as many websites as possible black holes for data to Google.”
>
> > Paul Jarvis
{: .big-quote}

If you vibe with that, [give it a shot](https://usefathom.com/ref/W2AU06).