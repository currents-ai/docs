---
sidebar_position: 4
slug: /custom-metrics
title: Custom Metrics
---

# **Custom Metrics**

You can create your own metrics by defining formulas that combine and perform operations on existing data metrics. Similar to spreadsheets, you can write formulas using Excel-like functions such as SUM, AVERAGE, IF, CONCATENATE, and ROUND, among others.

To create a custom metrics, follow these steps:

- Navigate to the Pivot table or Table that you want to modify.

- Click on the ‘Edit Widget’ option.

![edit-widget](/img/help/metrics/edit-widget.png)

- In the ‘Data’ tab, scroll down until you find the ‘Advanced Options’ section.

- In the ‘Advanced Options’ section, find and click on the ‘Formula’ field.

![custom-metric](/img/help/metrics/custom-metric.png)

- Enter ‘SPACE #’ in the ‘Formula’ field to get suggestions for the available metrics.

- Select the desired metric(s) from the suggestions.

- Select the desired metric(s) from the suggestions.

- Combine the metrics using Excel-like formulas and functions such as SUM, AVERAGE, IF, CONCATENATE, ROUND, etc.

- Once you’ve entered your formula, click on the ‘Formula Name’ field and provide a descriptive name for your custom metric.

- Click on ‘Save’ to save changes.

If you’re creating a new chart and want to create formulas (custom metric), you can follow the same steps after clicking on ‘Advanced Options’.

Here are some common functions you can use in your custom metric formulas:

1. **SUM():** Adds up a range of numbers. Example: SUM(Positive Record Count, Negative Record Count)

2. **IF():** Performs a logical test and returns one value for a TRUE result and another for FALSE. Example: IF(Marketplace Star Rating > 3, "Good", "Poor")

3. **CONCATENATE():** Joins two or more text strings into one string. Example: CONCATENATE(Sentiment Score, "%")

4. **ROUND():** Rounds a number to a specified number of digits. Example: ROUND(Sentiment Score, 2)

## **Example 1**

**Formula Name:** Total Rating Count

**Formula:** Marketplace Star Split (Max) One Star Rating Count + Marketplace Star Split (Max) Two Star Rating Count + Marketplace Star Split (Max) Three Star Rating Count + Marketplace Star Split (Max) Four Star Rating Count + Marketplace Star Split (Max) Five Star Rating Count

This formula sums up the values for each star rating level (1 star, 2 stars, 3 stars, 4 stars, and 5 stars) to give the total count of all ratings received for a product.

![rating-count](/img/help/metrics/total-rating-count.png)

## **Example 2**

**Formula Name:** Positive Percentage

**Formula:** CONCATENATE(ROUND((Positive Record Count / Records (Count)) \* 100, 1), "%")

This metric calculates the proportion of positive records relative to the total number of records, expressed as a percentage.

![positive-percentage](/img/help/metrics/positive-record-percentage.png)

## **Example 3**

Formula Name: Sentiment Score

Formula: (Positive Record Count - Negative Record Count) / Records (Count)

This metric provides an overall sentiment analysis by calculating the difference between positive and negative sentiment records, relative to the total number of records.

The Sentiment Score typically ranges from -1 (very negative) to 1 (very positive), with 0 indicating neutrality.

![seniment-score](/img/help/metrics/net-sentiment-score.png)

## **Example 4**

Formula Name: Sentiment Score % (Normalized)

Formula: CONCATENATE(ROUND((((Positive Record Count - Negative Record Count) / Records (Count) + 1) / 2) \* 100, 2), "%")

This metric provides a standardized measure of sentiment on a 0-100% scale.

- 0% - 40%: Predominantly Negative Sentiment

- 41% - 60%: Mixed or Neutral Sentiment

- 61% - 100%: Predominantly Positive Sentiment

![sentiment-score-percentage](/img/help/metrics/sentiment-score-%.png)
