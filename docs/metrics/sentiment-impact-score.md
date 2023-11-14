---
slug: /sentiment-impact-score
---


# Sentiment Impact Score


In today's business landscape, understanding customer feedback plays a pivotal role in shaping products, services, and overall business strategies. Given the unstructured nature of customer feedback, tools such as sentiment analysis and topic modeling are employed to convert this feedback into actionable, quantitative insights. 

A key metric in this process is the "Impact Score" of a topic. This metric indicates the extent to which a specific topic has influenced the overall customer sentiment.

## Range

The numerical value for this metric ranges from -1 to +1, with a positive score indicating a positive impact on customer sentiment and a negative score indicating a negative impact. The higher the absolute value of the Impact Score, the more significant the impact of the topic on overall sentiment. 

> For example, if a topic has an Impact Score of +0.5, it means that the topic has had a positive impact on customer sentiment, but the impact is not as significant as a topic with an Impact Score of +0.9. If a topic has an Impact Score of -0.5, it means that the topic has had a negative impact on customer sentiment, but the impact is not as significant as a topic with an Impact Score of -0.9.

## Algorithm Summary

Utilizing a machine learning model, customer feedback is classified into positive, negative, or neutral sentiments, with scores assigned according to the magnitude of the sentiment. The algorithm calculates average sentiment scores, establishes baselines, and hypothesizes outcomes by flipping sentiment scores to model the effects of converting all detractors to promoters, or vice versa. The algorithm computes new sentiment scores based on these hypothetical situations and then normalizes these scores to measure the raw impact of each topic. Essentially, the algorithm gauges the potential shifts in overall sentiment if all negative sentiments towards a topic were converted to positive and vice versa.


## Algorithm

- Step 1: Sentiment Classification and Scoring
- Step 2: Establishing Baseline Sentiments
- Step 3: Hypothetical Sentiment Score Calculation
- Step 4: Impact Score Computation

Each step of the algorithm is described in detail below.

**Step 1: Sentiment Classification and Scoring**
We begin by utilizing a machine learning model trained for sentiment analysis. This model analyzes each piece of customer feedback and classifies the expressed sentiment into positive, negative, or neutral categories, assigning a probability to each one. These probabilities represent the strength of the sentiment.

We then convert these probabilities into a sentiment score ranging from -1 to +1, where -1 represents extreme negative sentiment, +1 signifies extreme positive sentiment, and 0 denotes neutral sentiment. This score is a weighted sum of the probabilities, each multiplied by a factor representing its respective category (e.g., -1 for negative, 0 for neutral, and +1 for positive). This way, the sentiment score captures the sentiment polarity and its intensity.

By repeating this process for all customer feedback, we generate sentiment scores for the entire dataset and compute the average sentiment score for a holistic understanding of overall customer sentiment.

**Step 2: Establishing Baseline Sentiments**
After sentiment scores are generated for the entire data set, we calculate the average sentiment score, providing a holistic understanding of overall customer sentiment. Simultaneously, we compute the average sentiment score for each identified topic from the feedback records mentioning it.

**Step 3: Hypothetical Sentiment Score Calculation**
Next, we compute a hypothetical overall sentiment score. If the average sentiment score of a topic is less than the overall average, it's considered to have a negative impact on the sentiment. For these topics, we hypothetically flip the sentiment score of all negative records to +1.

Conversely, if a topic's average sentiment score is higher than the overall average, it's seen as having a positive impact on sentiment. For such topics, we flip the sentiment score of all positive records to -1.


**Step 4: Impact Score Computation**
With these hypothetical changes, we compute the new overall sentiment score. The difference between the original and the new sentiment score gives us a raw impact score for each topic. This raw score is then normalized to a range of -1 to +1, using the formula:

Normalized Impact Score = (Raw Impact Score - Min Impact Score) / (Max Impact Score - Min Impact Score) * 2 - 1

## Example

Let's consider a case where the overall average sentiment score is 0.2. For the topic "Price," the average sentiment score is -0.5, indicating customers are generally unhappy about the price. If we hypothetically flip the sentiment score of all negative records for "Price" to +1, the overall sentiment score may increase to 0.4. Thus, the raw impact score for "Price" is  0.2 - 0.4 = -0.2. We would then normalize this raw impact score to get the final impact score for "Price."




## Further Information

For more detailed insights into how you can leverage the Sentiment Impact Score, please reach out to your Success Partner.
