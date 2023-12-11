---
sidebar_position: 3
slug: /ecommerce-data-sources
---


# Data Sources | eCommerce

"Sources" are custom sources of data that you may want to analyze independently. For e.g an individual product is a source, so is a cluster of products, or a brand.

You can create and manage custom "Data Sources" by going to the ___Manage > Data Sources___ page.

Answers to some commonly asked questions are below -

---

#### Where can I manage data sources?

Click on ⚙Manage from the left side-bar and then click on "Data Sources"

![Image 0](/img/data-source/0.png)

---

#### How can I add a new product to the platform?

To add a new product -

1. Go to ___Manage > Data Sources___ page
2. Click on "Create Data Source" button (top right of page)
3. Enter relevant details in the form and click on "Add New Item"
   ![Image 1](/img/data-source/1.png)
4. Click on "Add New Product URL"
   ![Image 2](/img/data-source/2.png)
5. Copy paste the product URLs.
   - Note - to add multiple product URLs together, make sure each URL is in a new line.
   ![Image 3](/img/data-source/3.png)
6. Click "Done" and then click "Finish" to create the data source.
7. Once this is done, a task will be scheduled to crawl the new product URLs and process the data.

---

#### How can I add a new category?

To add a new category or collection of products -

1. Go to ___Manage > Data Sources___ page
2. Click on "Create Data Source" button (top right of page)
3. Enter relevant details in the form and click on "Add New Item"
   ![Image 4](/img/data-source/4.png)
4. Click on "Add New Search URL"
   ![Image 5](/img/data-source/5.png)
5. From the marketplace, fetch the search page URL for the category or collection you want to add.
   - For e.g, on Amazon.com, the search URL follows the pattern [https://amazon.com/s/..](https://amazon.com/s/..).
   ![Image 6](/img/data-source/6.png)
6. Enter the Max Products e.g 200
   - For a medium sized category, 200-300 products are usually sufficient.
   - For a large category, enter a number upwards of
7. Click "Done" and then click "Finish" to create the data source.
8. Once this is done, a task will be scheduled to crawl the new product URLs and process the data.

---
