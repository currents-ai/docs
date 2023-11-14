---
slug: /star-rating-impact-score
---


# Star Rating Impact Score 


## Overview 
In the realm of ecommerce and customer reviews, the Star Rating of a product serves as a quick visual cue for product quality and significantly affects purchase decisions. Understanding which aspects of a product are affecting its Star Rating positively or negatively can guide improvements and innovation.

The Rating Impact Score is a metric designed to quantify the influence of topics on the overall star rating of a product.


## What is the Impact Score?

The Star Rating Impact Score measures the extent to which a particular topic affects the average Star Rating of a product. It assigns a numerical value, indicating the extent (in star rating points) to which a topic has contributed positively or negatively to the overall rating.

## Range

The Impact Score of a topic can vary significantly based on the volume of topic mentions, the intensity of sentiment as well as the proportion of topic mentions within the whole corpus. It is expressed as a value within the possible range of the average star rating system, typically between -5 to +5, where negative values indicate a detrimental effect and positive values indicate a beneficial effect on the product’s overall star rating.


## Examples

> Topic "Battery Life" has a Net Impact Score of **-0.3**. This means the topic of "Battery Life" has negatively impacted the overall Star Rating by approximately 0.3 star rating points.

> Topic "User Interface" has a Net Impact Score of **+0.5**. Here, the "User Interface" is positively influencing the overall Star Rating by half a star.

Theoretically,
- A topic will have an Impact Score of +5 if all the reviews only mention this topic and all these mentions are very positive. 
- A topic will have an Impact Score of -5 if all the reviews only mention this topic and all these mentions are very negative.

## Intuition 

The intuition behind the score is to provide a clear, quantitative measure of how much each topic discussed in reviews contributes to the overall perception of a product. For example, if "customer service" has a high negative score, it's a clear indicator that this area is a pain point for customers and is dragging down the product’s rating. On the other hand, a high positive score for "ease of use" would suggest that this feature is a strong selling point that could be leveraged in marketing and product development.

:::tip

By focusing on topics with the most significant impact scores, you can strategically address the factors that most influence your product's market success.

:::




## Factors 

The calculation involves several factors listed below:

1. **Topic Importance**: The frequency of a topic's mention in reviews relative to the total number of reviews.
2. **Sentiment Analysis**: The overall sentiment (positive or negative) associated with each mention of the topic.
3. **Comparison with Overall Sentiment**: How the sentiment around a topic compares with the general sentiment across all reviews for the product.
4. **Rating Simulation**: Estimating the potential maximum and minimum impact a topic could have on the average star rating, assuming all mentions were either positive or negative.


## Algorithm Details


The computation of the Impact Score is a multi-step process that involves understanding the boundaries of a topic’s potential influence on the product's average star rating, and then pinpointing its actual impact within this range. Here's a step-by-step breakdown:


![Image 0](/img/help/scorecomputation.svg)

- **Identify the Topics**: Extract topics from customer reviews using Large Language Models.

- **Determine the Baseline**: Calculate the current average star rating of the product reviews without any topic-specific adjustments. This serves as a reference point for understanding the impact of individual topics.

- **Assess Topic Importance**: Evaluate how often each topic is mentioned across all reviews. This is done by counting the mentions of each topic and comparing it to the total number of reviews to get a proportional volume.

- **Simulate Extremes**: For each topic, simulate two scenarios to establish the range of potential impact:

  - **Positive Extreme (R<sub>max</sub>)**: Assume every review mentioning the topic is as positive as possible. Replace any negative mentions with the highest possible rating and recalculate the average rating to get R<sub>max</sub>.
  - **Negative Extreme (R<sub>min</sub>)**: Assume every review mentioning the topic is as negative as possible. Replace positive mentions with the lowest possible rating and recalculate the average rating to get R<sub>min</sub>.

- **Calculate the Potential Impact Range**: Establish the maximum and minimum impact values (R<sub>max</sub> and R<sub>min</sub>) that the topic could have on the product’s star rating if all its mentions were positive or negative, respectively.

- **Actual Sentiment Distribution**: Analyze the real sentiment of the mentions for each topic. This involves classifying each mention as positive, negative, or neutral and understanding the overall sentiment distribution for the topic.

- **Compute Effective Rating Impact**: With the range and actual sentiment distribution known, calculate the effective impact by factoring in the actual proportion of positive and negative sentiments. This gives an actual star rating impact that the topic has had, which will fall between R<sub>min</sub> and R<sub>max</sub>.

- **Derive the Net Impact Score**: Subtract the product's baseline average star rating from the effective rating impact to obtain the Net Impact Score for each topic.



## Key Properties 

- **Interpretability**: Measured in stars, it is straightforward and intuitive.
- **Volume Weighting**: It considers the prevalence of the topic in the context of all reviews.
- **Sentiment Sensitive**: It takes into account the sentiment expressed in the mentions of the topic.
- **Simplicity**: The method is clear and the computation is not complex.
- **Versatility**: It can be applied to assess the impact of subsets of reviews on a larger set.

## Usage and Benefits

Businesses can use the Star Rating Impact Score to pinpoint what drives customer satisfaction and dissatisfaction. By targeting areas with negative impact scores for improvement, companies can effectively enhance their product ratings and, consequently, their market performance.

## Further Information

For more detailed insights into how the Star Rating Impact Score can benefit your product analysis and development strategy, please reach out to your Success Partner.
