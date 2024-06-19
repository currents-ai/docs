---
sidebar_position: 8
slug: /rank-list
title: Rank List Report
---

# **Rank List Report**

The Rank List Report provides a stack ranked view of products based on customer reviews and ratings.

## **Accessing the Report**

- Click on **‘Reports**’ from the left hand navigation menu.

- Select ‘**Rank List**’ from the available options.

- Click on ‘**Select Entity**’ to choose the source you want to analyze. You can select from variant groups, brands, or user groups as your source.

![rank-list](/img/help/reports/rank-list/rank-list.png)

## **Rank List Table**

### **Key Components of the Rank List Table**

|                       |                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Products              | Lists the names of the products included in the report.                                                                              |
| First Record Date     | Refers to the date of the oldest review as discovered by FreeText AI platform. .                                                     |
| Rank                  | Shows the current rank of the product within the existing selection (i.e top, bottom, new, etc).                                 |
| Overall Rank          | Overall Top Rankings (calculation/formula explained below)                                                                           |
| Total Reviews         | The total number of reviews received for each product.                                                                               |
| CSAT                  | The Customer Satisfaction Score, shown as a percentage, measures how satisfied customers are with the product, brand, or experience. |
| Average Review Rating | Average of all ratings with reviews.                                                                                                 |
| Price(Max)            | Indicates the highest price of the product.                                                                                          |
| Price(Min)            | Indicates the lowest price of the product.                                                                                           |

![rank-list-table](/img/help/reports/rank-list/rank-list-table.png)

### **Sorting**

Each column in the rank list table can be sorted in ascending or descending order by clicking on the column header.

![sort](/img/help/reports/rank-list/sort.png)

### **Search & Filtering Options**

- The search bar allows you to find specific products or brands by entering keywords.

- You can select either 'Product' or 'Brand' from the dropdown menu to filter the displayed data accordingly.

- You can apply various filters to refine the data displayed in the rank list table.

![search-filter](/img/help/reports/rank-list/search-filter.png)

### **Compare**

Select the checkboxes next to the products you want to compare.

Choose ‘**Compare**’ from the ‘**Actions**’ dropdown.

![compare](/img/help/reports/rank-list/compare.png)

## **Ranking System**

### **How Rankings are Calculated**

The ranking system is designed to evaluate products or brands within a specific category based on customer feedback. Rankings are determined by a formula that measures how much a product or brand deviates in terms of its ratings and the number of reviews it has, compared to the average for its category. Products with higher ratings and more reviews than the average for their category will score better and rank higher.

**The Formula**

The ranking score for each product or brand is calculated using the following formula:

![formula](/img/help/reports/rank-list/formula.png)

The numerator combines the product’s performance with the category’s average performance, weighted by their respective number of ratings. This part of the formula assesses how much a product’s rating and review count deviate from the category averages.

The denominator serves as a normalization factor, ensuring that the scores are comparable across different categories with varying numbers of ratings.

### **Ranking Criteria**

You can sort the rank list by clicking on these ranking criteria tabs:

- **Top:** Ranks products and brands based on the volume of reviews and customer satisfaction.

- **Bottom:** Surfaces the products and brands at the bottom of the group, based on volume of reviews and customer satisfaction.

- **New:** Ranks the newest launches, currently based on the first review date.

- **Rising:** Ranks products based on the most jumps in ranking from the previous time period.

- **Dropping:** Ranks products based on the most drop in ranking from the previous time period.

![ranking-tabs](/img/help/reports/rank-list/ranking-tabs.png)

## **Bookmark & Download Report**

You can bookmark the report for easy access from the homepage.

Download the report as CSV or PPT for further analysis.

![bookmark-download](/img/help/reports/rank-list/bookmark-download.png)

## **Share Report**

You can share the report by following these steps:

- Click the ‘**Share’** button.

- Toggle the switch to make the report public.

- Copy the link and share it with others.

![share](/img/help/reports/rank-list/share.png)
