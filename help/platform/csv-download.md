---
sidebar_position: 1
slug: /data-export
title: Export Data
---

# Export Data 

You can export / download raw data from FreeText AI. 

## **How to export raw data and metadata**

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

:::tip
Up to 10,000 entries can be downloaded per CSV. For larger datasets, use date range filters to download in batches.
:::

![download-feedback](/img/help/platform/search.png)

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

![topic-sentiment](/img/help/platform/topics-sentiment.png)

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

![rating-price](/img/help/platform/rating-price.png)

By following these examples, you can create various data views tailored to your specific analysis needs, combining different dimensions and metrics. 

## Known Issues

### Excel CSV parsing issues on Windows

A common issue with CSV parsing is that the delimiter character is incorrectly assumed. This happens especially in European versions of Excel. To get around this, instead of "opening" the CSV with Excel, we need to "import" the CSV.

For Office Windows -

1.  Open a new spreadsheet.
2.  Then,
    1.  (For Office 2010 - Office 2016) Go the Data tab, in the Get & Transform Data group, click From Text/CSV 
    2.  (For Newer versions) Click File > Options > Data. Under Show legacy data import wizards, select From Text (Legacy)
3.  In the Import Data dialog box, locate and double-click the text file that you want to import. Select "Original data type" as "Delimited". Click Import.
4.  **Choose "," as the Delimiter character to use**
5.  Import the data your sheet

(More details [here](https://support.microsoft.com/en-us/office/text-import-wizard-c5b02af6-fda1-4440-899f-f78bafe41857#ID0EBBJ=Newer_versions))

