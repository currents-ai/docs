---
sidebar_position: 3
slug: /export-data
title: Export Data
---
# **Export Data**
## **How to download feedbacks and metadata**

To download raw customer feedback data or metadata, follow these steps

1. Click on "Search" from the left-hand navigation panel.

2. Click on "Select Entity" to choose the product, brand, service, user group, etc. for which you want to download feedback data.

3. You have several options to filter the data before downloading:

   - Apply various filters such as date range, channel, etc., to narrow down the feedback data.

   - If you're looking for specific feedback, enter a search term in the search bar to filter the results accordingly.

   - Use the Sort dropdown menu to sort the feedback data by sentiment, recency, or popularity.

   - Select the "All" tab if you want to download all available data.

   - Select the respective Sentiment tab (Positive/Negative/Neutral) to download by sentiment.

4. Once you've applied your desired filters and sorted the data, click the "Export" button to export as CSV.

The download will contain both the customer feedback text as well as the metadata about the feedback, such as date, author, channel, etc.

Note: Up to 10,000 entries can be downloaded per CSV. For larger datasets, use date range filters to download in batches.

![download-feedback](/img/help/guides/export-data/search.png)

## **How to Create Data Views for Exporting** 

A data view allows you to select specific dimensions and metrics from your data to analyze and download. You can create a data view using tables or pivot tables. Here are the general steps:

1. **Define your analysis goal**: Determine what you want to analyze or visualize from your data.

2. **Select relevant dimensions**: Dimensions are the categorical variables that you want to group or filter your data by.

3. **Select relevant metrics**: Metrics are the numerical values you want to analyze, such as counts, sums, or averages.

4. **Configure filters (optional)**: Filters allow you to narrow down the data based on specific criteria.

5. **Download or share the view**: Finally, you can download the data view in a desired format (CSV, Excel, etc.) or share it with others.


### **Example 1: Topics and Sentiments Data View**

Goal: Analyze the sentiment towards different topics in feedback.

Dimensions to include:

- Topics: The main topics discussed in the feedback.

- Time: The time period (e.g., month, quarter) to analyze sentiment trends.

- Sentiment: The sentiment (positive, negative, or neutral) associated with each topic.

Metrics to include:

- Records (count): The number of feedback mentioning each topic and sentiment combination.

- Net sentiment score: The overall sentiment score for each topic.

This view will allow you to see which topics have the most positive or negative sentiment, and how sentiment towards topics changes over time.

![topic-sentiment](/img/help/guides/export-data/topics-sentiment.png)

### **Example 2: Per Product Rating/Price Over Time Data View**

Goal: Analyze the relationship between product ratings, prices, and time.

Dimensions to include:

- Entity: The specific product or product variant. (Entity for individual products, Variant groups for groups as per marketplace)

- Time: The time period (e.g., month, quarter) to analyze trends.

Metrics to include:

- Records (Count): The number of reviews for each product and time period.

- Marketplace Price Avg: The average price of the product during each time period.

- Review Rating (Average): The average rating for each product and time period.

This view will enable you to see how product ratings and prices fluctuate over time.

![rating-price](/img/help/guides/export-data/rating-price.png)

By following these examples, you can create various data views tailored to your specific analysis needs, combining different dimensions and metrics. 

