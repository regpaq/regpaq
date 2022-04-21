---
layout: casestudy
title: Grew Organic Traffic 1,279% Through Content & SEO Program
description: by optimizing & improving existing content and building a public Facebook ad cost tool.
date: '2022-04-18T02:37:27.735Z'
categories: [casestudy,revealbot]
slug: /revealbot-seo-case-study
skills: [seo,content marketing]
image: /assets/images/revealbot-seo-results.png
image-alt: Revealbot traffic growth
author: Reggie Paquette
post-id: 35
seo:
    date_modified: '2019-07-24T02:37:27.735Z'
---

## Problem

When I joined Revealbot, we had several blog posts that were ranking on the bottom of page one and two in Google's Search Result Pages (SERPs) because our website already had a very strong and healthy backlink profile.

Although our posts and pages were ranking relatively well, we weren't getting much traffic to them. They needed to be in the top five results in the SERPs to get meaningful traffic. At the start of committing to improving our organic traffic, we were averaging ~500 organic users per month.

## Solution

We used three strategies to improve our organic traffic:

1. Find the opportunities with an SEO audit
2. Update existing website pages and blog posts
3. Strategically create new content


## Part I - Complete an SEO Audit

Using a combination of Screaming Frog, Ahrefs, Google Webmaster Tools, and Google Analytics, I ran a complete site audit to identify all opportunities for improvement on every page of the public-facing website.

Here's what the main audit looked like in Google Sheets:

{% include figure.html image="/assets/images/revealbot-seo-audit.png" caption="Dynamic SEO audit spreadsheet for Revealbot" width="vwide" %}

Although everything couldn't fit in this screenshot, the sheet incorporated data from all the data sources mentioned above held in different tabs. This main dashboard was built with formulas so I could always update one of the data sources in their respective tab, for example export the latest data from Webmaster Tools, and now the new data would populate automatically in this dashboard tab. This made the health of our SEO easy to frequently monitor.

Once the data sources were pulled together, we could immediately identify opportunities, including the foundational items, such as:

1. Establish a keyword for every URL
2. Update titles - unique, under max character count, included the keyword, yet written for humans
3. Update descriptions - unique, included the keyword, written to generate curiosity
4. Change page URL to one that includes the keyword and implement 301 redirects from the old URL

Then we did some more advanced optimizations:

5. Combine pages/posts which were competing for the same keyword
6. Edit main website and blog template's HTML to ensure they are following the correct HTML structure best practices
7. Identify what stage of the buyer's journey each page is serving, TOFU, MOFU, or BOFU (or Brand) to quantify opportunity and prioritize pages to update
8. Add more internal links from pages with the highest page ranking to pages with the highest opportunity for leads and traffic that are not ranking in the top three of the SERPs
9. Add and refine content to pages starting with ones with the highest opportunity to bring in more leads and traffic
{: .counter-reset}

## Part II - Update existing website pages and blog posts

After making the quick fixes discovered in the SEO audit, it was time to invest in the more significant updates to pages in order to get them to rank higher in the SERPs.

From the audit, we labeled each page and post with their respective stage of the buyer's journey based on its content and primary keyword: TOFU, MOFU, or BOFU. Roughly, if it was about accomplishing what the product does, it was BOFU; the challenges people had close to our product, MOFU; not related to the solutions or challenges of our product area but industry relevant, TOFU.

Then we identified the top ranking competing URL for each page's target keyword that we could reasonably expect to beat (e.g. excluding facebook.com). We analyzed these pages to see what others were doing in terms of how they met the searcher's intent, content quality, and length that helped them rank so high. This was our standard to beat.

There were two considerations for prioritizing which pages or posts to update first:

1. BOFU pages, because more traffic to BOFU pages should produce more leads
2. Current ranking and perceived difficulty to get to a top three position in the SERPs

Then we got to work updating the pages and posts knowing these would get us the quickest and most impactful results in 60-90 days. Over time, we rewrote, updated, and optimized every post and page on the website.

## Part III - Strategically create new content

The final solution to increasing our organic traffic was creating new content around valuable search queries we don't have existing content for. Of course, there were many new pages and posts, so here are my favorites.

### Facebook Ad Cost Tool

One of the best ways to generate passive backlinks is to create a report with proprietary data, or in other words be a source of original data. With content like this, journalists and other content writers will use our research as a source for their articles.

Revealbot's proprietary data comes from our customers who need to connect their Facebook ad accounts to our platform to use the product. So we had access to hundreds of millions of dollars of Facebook ad spend data we could combine, anonymize, and analyze. With all this data, we decided to publish monthly reports of Facebook and Instagram advertising costs and its fluctuations over time.

To test whether this idea would generate traffic and backlinks, we first pulled this data ad-hoc every month and published it in a blog post format with charts of our data. Here's what it looked like:

{% include figure.html image="/assets/images/revealbot-seo-facebook-ad-cost-tool-old.png" caption="MVP of Revealbot's Facebook ad cost tool" width="wide" %}

After a few months, our article reached the first page in the SERPs and up to position three. That's when we started getting a ton of traffic for search queries like **facebook advertising costs**, **facebook ad costs**, **facebook cpm**, **facebook cpc**, etc. Not only that, we started getting backlinks from people referencing our data in their blog posts and even sharing our branded graphs in their article, too. This was the signal we needed to automate it and build it is a proper "mini app."

Our engineering team built an [automatically updating Facebook and Instagram ad cost data tool](https://revealbot.com/facebook-advertising-costs). It updates every week and provides current and historical data for CPM, CPC, CPE, CPL, and CPI for both Facebook and Instagram ads. The cost data can even be broken down by campaign objective. Here's what the new tool looks like:

{% include figure.html image="/assets/images/revealbot-seo-facebook-ad-cost-tool.png" caption="Completed form of Revealbot's Facebook ad cost tool" width="wide" %}

And based on what information you're viewing, for example Facebook CPM, the URL changes. The H1 changes. The supporting content below the graph changes. Everything was built with SEO in mind.

Then we started getting even more backlinks. We got links from competitors, like [Hunch Ads](https://blog.hunchads.com/facebook-ads-cost){:target="_blank"}, [Wordstream](https://www.wordstream.com/blog/ws/2021/07/12/facebook-ads-cost){:target="_blank"}, and [AdZooma](https://www.adzooma.com/blog/how-much-does-facebook-marketing-cost/){:target="_blank"}. Respectable Facebook ad agencies, like [KlientBoost](https://klientboost.com/facebook/how-to-run-facebook-ads/){:target="_blank"}. And huge companies like [Shopify](https://www.shopify.com/blog/facebook-ads-cost){:target="_blank"} ([twice](https://www.shopify.com/blog/instagram-ads){:target="_blank"}), [HubSpot](https://blog.hubspot.com/insiders/how-to-shift-your-marketing-from-traditional-to-inbound){:target="_blank"}, [Gizmodo](https://gizmodo.com/the-butt-pajamas-will-follow-you-forever-1845929307){:target="_blank"}, [Ars Technica](https://arstechnica.com/tech-policy/2021/08/facebook-reveals-top-posts-but-still-wont-share-key-data-about-disinformation/){:target="_blank"}, and [Seeking Alpha](https://seekingalpha.com/article/4476242-shopify-the-future-of-retail){:target="_blank"}.

As of writing this case study, the tool has generated backlinks from over 380 domains, over 100k unique visitors, and increased the awareness of our brand and product in the industry. It has boosted the SEO of our entire revealbot.com domain helping to improve the rankings of all our other pages.

{% include figure.html image="/assets/images/revealbot-seo-ad-cost-tool-backlinks.png" caption="Number of domains linking to Revealbot's Facebook ad cost tool" width="wide" %}

And on top of all that SEO goodness, it's been a consistent driver of new customers.

### Revealbot Answers

Sometimes answering a search query just doesn't need one to two thousand words to answer.

We created Revealbot Answers, a section on our blog, for short form content to target keywords in a question format. Here's what the section looked like on the blog:

{% include figure.html image="/assets/images/revealbot-seo-answers.png" caption="Dedicated section on the blog for Revealbot answers" width="wide" %}

 Some examples of the content we wrote for Revealbot Answers:

- [How much should I spend on Facebook ads?](https://revealbot.com/blog/how-much-should-i-spend-on-facebook-ads/){:target="_blank"}
- [What is Facebook ad scheduling?](https://revealbot.com/blog/facebook-ad-scheduling/){:target="_blank"}
- [Are Facebook automated rules broken after iOS 14.5?](https://revealbot.com/blog/facebook-automated-rules-broken-not-working/){:target="_blank"}

These are much less resource heavy articles, which means we can create many of them quickly. Plus, because these are usually long tailed keywords, we have a great chance of ranking well and quickly.

{% include figure.html image="/assets/images/revealbot-seo-serp-example.png" caption="Search result page for a Revealbot answers blog post" width="wide" %}

This was such a success that I think every B2B blog needs an "answers" section to take advantage of long-tailed keywords written in a question.

### Facebook and Instagram Ads Updates and Changes

In addition to being a resource for Facebook and Instagram ad cost data, I wanted Revealbot to be a resource for the ever changing ad platform and algorithm changes.

We created two blog posts, one for [Facebook ad updates](https://revealbot.com/blog/facebook-update-changes-news/){:target="_blank"} and another for [Instagram ad updates](https://revealbot.com/blog/instagram-algorithm-update-news/){:target="_blank"}. These pieces of content were extremely resource heavy. They not only required a lot of research to be a reliable source of information, but they also required those updates to be timely. When a big update happens, Facebook ad advertisers look for answers immediately. We couldn't update the post every day, but we did get to a point where we could update them monthly.

Despite our timing challenges, we were able to get them up to position three or four in the SERPs and became our second biggest driver of traffic behind our Facebook ad cost tool.

If we were able to invest more resources into producing this content, we really could have been a go-to source of Facebook ad update information with a unique design (similar again to a "mini app") that sets it apart from any other blog post you can find on the internet.

## Results

At the time I joined Revealbot in August 2019, we were averaging 580 organic users per week. Just about two years later, traffic grew 1,279% to around 8,000 users per week.

{% include figure.html image="/assets/images/revealbot-seo results-full.png" caption="Results in Google Analytics of 1,000% organic search growth" width="wide" %}

Organic clicks from non brand search queries.

{% include figure.html image="/assets/images/revealbot-seo-non-brand-organic-traffic-growth.png" caption="Organic, non-brand traffic growth results in Google Webmaster Tools" width="wide" %}

Along with the traffic, our domain strength and SEO profile grew tremendously as well.

{% include figure.html image="/assets/images/revealbot-seo-ahrefs-domain-strength.png" caption="Backlinks, traffic, and keyword growth from Ahrefs" width="full" %}
