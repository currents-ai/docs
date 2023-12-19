---
sidebar_position: 3
slug: /catalog
---

# Catalog Management 
The product listings on marketplaces (e.g Amazon) can be messy, incorrect or incomplete.

Since our crawlers rely heavily on the meta-data collected from the marketplace, the catalog here might reflect the inconsistencies of the marketplace. For example, a keyboard SKU could get listed under the "Mouse" category on Amazon.

The "Catalog Management" feature enables you to correct such errors by enabling you to edit various properties of each entity.

Answers to some commonly asked questions are below -

* * *

#### How to edit the catalog data?

##### _1\. Select the Entity_

*   This could be an individual product or a collection of products e.g Brand, Variant Aggregate, a custom Source, the entire Category or Super-Category.

##### _2\. Download CSV_

*   Click on the "Download CSV" button to download the details of the selected entity.
*   If the selected entity is an individual product, the CSV will have just 1 row with details of that product.
*   If the selected entity is a Brand or Category, the CSV will have details of all products in that collection, with each row representing a single product.
*   The download could take a few seconds.

##### _3\. Edit Details_

*   Edit the details of individual products. The list of editable and non-editable properties are described below.

##### _4. Delete Unedited Rows_

*   Remove any rows that you did not edit.

##### _5\. Upload the Edited CSV_

*   Once you upload the edited CSV, a task will be created to check the differences and make the necessary changes. This can take a few minutes to hours, depending on the number of changes requested.

* * *

#### What properties of an entity should NOT be edited?

*   Entity Id
*   Source Id
*   URL

These properties have been provided only for the purposes of identifying the product.

* * *

#### What properties of an entity can be edited?

The following properties can be edited.

1.  Name
2.  Brand
3.  Categories
4.  Search Terms
5.  Cross Marketplace Ids
6.  Visibility

* * *

#### How to change the "Name" of an entity?

The default product name is determined from the marketplace. You can change the name by overriding the “Name” column in the CSV.

Once updated, the new name will be used for search and visualisations (tables, graphs, etc).

Tip - If you just want to add a searchable nick name, add it to "Search Terms" instead of changing the name.

* * *

#### How to change the "Brand" of an entity?

The default brand is determined from the marketplace. You can change the brand by overriding the “Brand” column in the CSV.

Ensure that you use the exact name of the brand as used in this platform.

For example, if the entity name is “Logitech (Brand) - All Marketplaces”, the Brand is “Logitech”.

* * *

#### How to change the "Category" of an entity?

The default category for an entity is determined from the marketplace. You can change the category by overriding the "Categories" column in the CSV.

Ensure that you use the exact name of the categories as used in this platform. To indicate a hierarchy in category, use comma separated values. 

For example, a SKU has the category hierarchy -  _All, Input Devices, Keyboard._

To change the category from  _Keyboard_ to _Mouse_, change _All, Input Devices, Keyboard_ to _All, Input Devices, Mouse_. 

* * *

#### What are "Search Terms"? How to add searchable terms to an entity?

Search Terms are additional terms that can be added as meta-data for an entity. These terms can then be used for searching for that entity.

For example, you can add an internal model number as a search term.

* * *

#### What are "Cross Marketplace Ids"? How to add these to an entity?

The Cross Marketplace Id is used to reconcile the same products across different marketplaces. If the "Cross Marketplace Ids" of a few products are exactly the same, they are treated as the same products from different marketplaces.

Note - the "Cross Marketplace Ids" can only contain alphabets, numbers, dashes ("-") or underscores ("\_"). It should NOT include spaces.

You can change this reconciliation by editing the "Cross Marketplace Ids" column in the CSV.

* * *

#### How to remove an entity from the catalog?

The default visibility of each entity is True. If the visibility is set to False, the entity will be removed from the catalog and it will no longer appear in search, reports, visualizations or be counted as a part of any group.

* * *

#### Can I upload another CSV while older tasks are in progress?

Yes, you can. If there are conflicing changes, then the latest edits will be honoured.

* * *
