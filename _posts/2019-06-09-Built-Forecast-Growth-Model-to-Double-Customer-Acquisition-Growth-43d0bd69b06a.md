---
layout: casestudy
title: Built Forecast Model to Double Customer Acquisition
description: which informed sales hiring count, marketing budget, and monthly goals.
date: '2019-06-09T18:01:47.645Z'
categories: [casestudy,chilipiper]
slug: /created-a-forecast-model-to-double-customer-acquisition-growth
skills: [reporting,spreadsheets]
image: /assets/images/chili-forecast-8.jpeg
image-alt: Chili Piper forecast
author: Reggie Paquette
post-id: 21
seo:
    date_modified: '2019-06-09T18:01:47.645Z'
---

## Problem

We had a goal to double new business monthly revenue, but not a clear path or timeline to get there. We were only looking in the rear view mirror and monthly reviews ended with us saying, “we did well, but we need to get to x (somehow).”

Without clear targets for each team and individual in the customer acquisition org, we couldn’t motivate the team, forecast growth, or determine which channels and initiatives to prioritize to hit our target in the shortest amount of time.

## Solution

If we look at the previous 12 month performance by major customer acquisition (CA) function (Outbound, Events, Paid Inbound, and Earned Inbound), we could find the best opportunities for growth while giving clear targets to each team.

To start, it’s essential to have reliable data. Since I previously built a [Revenue Dashboard](/automating-new-business-revenue-reporting-into-google-sheets) that detailed our funnel metrics by major CA function already, I could begin to do some estimations.

The wrong way to forecast is to start with saying “Okay, we need to get to x in 12 months. What do we need to do to get there?

I‘ve learned to to start with from the bottom up by identifying the inputs and levers that are in your control and what the results could be if you increased those inputs and pulled those levers over time.

Here’s how it works.

### Step 1 — Start With Previous Results

In a new spreadsheet, I started with previous data broken down by the major CA functions I wanted to forecast by: Outbound, Events, Paid Inbound, Earned Inbound, and a total that rolls up all four.

### Step 2 — Define Your Inputs and Levers for Each Function

Different functions will have different inputs and levers and you’ll have to determine what those are. Here’s what I went with at Chili Piper.

#### Outbound

Inputs for cold Outbound were the (1) number of sales development reps (SDRs) and full-cycle account executives (AEs) and (2) the number of booked meetings we could reasonably expect each rep to book at full efficiency.

Therefore, I knew how many reps we needed to hit a particular Outbound meeting goal and closed won revenue goal. Then we added an estimated ramp period and figured out what was possible with cold Outbound based on when and how many people we could afford to hire.

{% include figure.html image="/assets/images/chili-forecast-1.png" caption="Cold outbound hiring plan and forecast." width="vwide" %}

Cold Outbound hiring plan and booked meeting forecast to hit goal in December ‘19.

Now I knew what we could expect in Outbound meetings per month based on the number of each type of sales reps we had and if they were running at full efficiency.

Next was to look at the levers, which I concluded to be (1) our conversion rates of each part of the funnel and (2) our average customer value (ACV).

{% include figure.html image="/assets/images/chili-forecast-2.png" caption="Levers can be adjusted for a ground up forecast." width="vwide" %}

Blue numbers are the levers. By pulling these levers, we could improve efficiency over time. Number of Goal Booked Meetings roll up from the inputs.

Why conversion rates and ACV? It’s what our sales team has most control of. For example, in April, I estimated our team would convert 75% of Outbound booked meetings into opportunities. The SDR is in control of setting qualified meetings and in control of the cadence and messaging to increase likelihood the prospect will attend the meeting. Next was estimating improvement in opportunity to closed-won conversion rates. It’s 16% in April and grows to 20% by June. We estimated this 25% improvement in just two months because we had already recognized this as an opportunity for improvement and implemented weekly training and call coaching to improve it.

Because Chili Piper’s product can be used by many different teams at a company and we have a variety of products, it’s difficult to estimate the potential value of an account. In the past, AEs have closed good-size companies in just a $300 deal (one product and one license), and other times deal sizes can be several thousand dollars when selling multiple products and many licenses up front. With training again, we were able to improve the ACV and expected it to continue to grow as skills improve and as we release more products throughout the year.

#### Events

Continuing my methodology for Events, the inputs are (1) the number of events and (2) the number of expected meetings from each event. Working with our Events Manager, we were able to roughly plan out the rest of the year and set meeting goals for each event and attending sales rep.

{% include figure.html image="/assets/images/chili-forecast-3.png" caption="Event booked meeting goals by sales rep. Meetings booked by “Other” are from non Sales team members." width="vwide" %}

The levers for Events are the same as Outbound, conversion rates and ACV; however, we didn’t forecast any change here since we already converted well from events.

{% include figure.html image="/assets/images/chili-forecast-4.png" caption="Number of Goal Booked Meetings roll up from the inputs." width="vwide" %}

#### Paid Inbound

Forecasting and goal setting for Paid Inbound is a bit tricky because the only true input fully in my control is spend, however with limited historical data, spend and cost-per-lead (CPL) by channel wasn’t the best place to start.

Instead, my inputs were the number of leads I could reasonably expect from each of the channels we’re currently using and plan to use in the future.

{% include figure.html image="/assets/images/chili-forecast-5.png" caption="Inbound lead goal by channel for Paid Inbound." width="vwide" %}

The levers for Inbound include conversion rates and ACV, but start with Leads and two additional conversion stages: Lead > Marketing Qualified Lead (MQL) and MQL to Booked Meeting (BM). For spend, I estimated the average total CPL and therefore determined the budget required for paid acquisition for the rest of the year.

{% include figure.html image="/assets/images/chili-forecast-6.png" caption="Paid forecast broken down by channel." width="vwide" %}

Since we didn’t have historical Paid & Earned Inbound metrics until May, Paid Inbound forecasts start in June.

#### Earned Inbound

Earned Inbound is even more trickier than Paid. For the most part, Earned Inbound is out of my direct control. Results come from a combination of activities done throughout the company. And since we didn’t have a marketing automation platform set up, we couldn’t yet determine the source of non paid leads, which could either be direct, organic, or referral. So unfortunately, there was much more guess work here and I simply estimated a growth in leads over time and the levers being the same as Paid Inbound.

{% include figure.html image="/assets/images/chili-forecast-7.png" caption="Estimated growth in Earned (non paid) leads over time." width="vwide" %}

### Step 3 — Making This Useful

Each function’s goals had two tables below: (1) an auto updating “Actuals” table and (2) a table comparing the differences from Goal to Actual to visually see where we hit and missed goal.

{% include figure.html image="/assets/images/chili-forecast-8.jpeg" caption="Everything rolls up for a total customer acquisition forecast." width="vwide" %}

Having all this data in one place was great for the leadership team to get a pulse check on all the teams in CA.

Then because I built dashboards for [New Business Revenue](/automating-new-business-revenue-reporting-into-google-sheets), [Marketing](/building-the-marketing-dashboard), and Outbound Sales, I could put an auto updating Trend and Goal column where each team could see what they were currently trending to as a team and individually and how that compared to the month’s Goal. This made it easy to see at any point during the month where we had to step up in order to hit goal. Here’s an example of what that looked like:

{% include figure.html image="/assets/images/chili-forecast-9.jpeg" caption="Forecast and goals by channel were added to each channel's dashboards." width="full" %}

## Result

After this was created, each team and individual now had goals and targets to hit every month that they could easily find on the dashboards they already used. This made it more simple to set everyone’s monthly OKRs, motivate the team, and let us rest easy by knowing that if we hit the month’s goal we were on our way to double growth.