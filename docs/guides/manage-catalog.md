---
slug: /manage-catalog
---


# How to Manage Catalog

## Overview 

The Review Rating Impact Score is a metric that quantifies the impact of individual topics on a product's Star Rating. It is a numerical value associated with each topic and quantifies how much each topic impacts the overall rating, either positively or negatively.


## Score Range

Since the star rating is a 5 point scale metric, this metric typically ranges from -5 to +5, where:
- **-5** signifies a maximum negative impact on the Star Rating.
- **+5** indicates a maximum positive impact on the Star Rating.


## Examples

> Impact Score: -0.2
> <br/>Topic "Battery Life" has with an Impact score of **-0.2**. 
> <br/>This suggests that "Battery Life" has negatively impacted the Star Rating of the product, bringing it down by approximately 0.2 stars.

> Impact Score: -0.3
> Topic "Ease Of Use" has an Impact Score of **+0.3**.
> This suggests that "Ease of Use" has positively impacted the Star Rating of the product, enhancing it by approximately 0.3 stars.




## Interpretation and Usage

Utilize the Impact Score to prioritize product improvements by:
1. **Identifying Key Topics**: Determine which topics have the highest absolute NIS values.
2. **Understanding Impact**: Recognize that topics closer to -1 or +1 have a stronger influence on the Average Star Rating.
3. **Prioritizing Actions**: Focus on topics with higher negative NIS values for improvement or positive NIS values for marketing.



## Algorithm Summary

The computation of NIS involves:
1. **Volume and Sentiment Analysis**: Evaluating the frequency and sentiment of topic mentions in reviews.
2. **Range Simulation**: Establishing the potential impact range (R<sub>min</sub> and R<sub>max</sub>) for each topic.
3. **Effective Rating Calculation**: Determining the actual impact of the topic based on sentiment distribution and calculating the NIS.

## Detailed Algorithm

1. Calculate the R<sub>max</sub> and R<sub>min</sub> by replacing negative and positive mentions, respectively.
2. Compare the sentiment distribution of each topic against the overall product sentiment.
3. The NIS is derived by finding the effective Star Rating change due to the topic.

## Properties of NIS

- **Intuitive Scale**: As it uses the familiar star rating system.
- **Weighted Importance**: More frequently mentioned topics have a greater impact on the NIS.
- **Sentiment Analysis**: Captures the sentiment polarity associated with topics.
- **Transparent Computation**: The NIS calculation process is clear and easy to communicate.

## Potential Biases and Limitations

- Sentiment complexity may not be fully captured.
- Interrelated topics can affect each other's NIS.
- Topics with a large number of mentions can disproportionately influence the NIS.
- Customer review subjectivity may lead to potential NIS distortions.
