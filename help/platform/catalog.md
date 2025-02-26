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
*   Entity Name

These properties have been provided only for the purposes of identifying the product.

* * *

#### What properties of an entity can be edited?

The following properties can be edited.

1.  Brand
2.  Categories
3.  Search Terms
4.  Cross Marketplace Ids
5.  Visibility

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

#### How to add "Alternate Name" to an entity?

The default product name is determined from the marketplace. This is available in the CSV under the "Name" column. You cannot change the primary name.

If you want to change the display name of the product, you can add the updated name in the "Alternate Name" column. This is currently used in certain shortlisted visualizations only, and will be extended to all graphs, tables and visualizations.

:::tip
If you just want to add a searchable nickname, you can add it to "Search Terms".
:::

* * *

#### What are “Catalog Labels”? How to add these to an entity?

Catalog Labels are additional filters that you can define and add to a CSV file. They provide a way to categorize products based on specific criteria that may not be included in the original metadata.These filters are in the form of key-value pairs, where the key represents the filter name, and the value represents an option within that filter. They will be added as filters in the tool after the source is refreshed.

**How to Add “Catalog Labels” to a CSV File**

- Download the CSV file you want to update.

- Open the file using a spreadsheet application.

- Add a edit the column named ‘Catalog Labels’.

- In the ‘Catalog Label’ column, enter key-value pairs for each product row you want to label.

You can add new fields using the **Catalog Labels** column. The value of this column, takes the following format:
`<key1>: <value1>, <key2>: <value2>`

For example:
`Priority Product: True, Product Line: AA22AB`

This will create two new fields for the entity - `Priority Product` with the value `True` and `Product Line` with the value `AA22AB`

* * *

- You can add Catalog Labels to all products or only specific products of your choice.

- After adding the Catalog Labels, save the modified CSV file and upload it back.

- Once uploaded and refreshed, the Catalog Labels will be available as filters within the tool.

* * *

#### How to change the specifications of an entity?

To update the product specifications in a CSV file, look for columns with the ‘Spec:’ prefix, such as ‘Spec:Price’ , ’Spec:Country’, etc. These columns contain default data from the marketplace. To change the specifications, overwrite the existing entry with the new specification. Ensure the data format matches the platform’s requirements.

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

#### What is “User Source”? How to Change “User Source Names” and “User Source Ids” of an entity?

User Source refers to custom groups created by users to organize and classify entities.

**How to Change “User Source Names” and “User Source Ids” in the CSV**

“User Source Names” represent groups created by the user, while “User Source Ids” represent unique identifiers for those groups.

"User Source Names" column can be used to combine multiple products to create a data source.

For example, if you want to create a data source with 5 products, simply add the same source name for all 5 products in the "Source Name" column.

To change a product's group id, overwrite the entry in the “User Source Ids” column with the new group id.

:::tip
You can add multiple comma separated source names to the "Source Names" column.
:::

:::note
Source Names created using the catalog cannot be managed from the "Manage - Data Sources" page and can only be edited using the catalog.
:::

* * *

#### How to remove an entity from the catalog?

The default visibility of each entity is True. If the visibility is set to False, the entity will be removed from the catalog and it will no longer appear in search, reports, visualizations or be counted as a part of any group.

* * *

#### Can I upload another CSV while older tasks are in progress?

Yes, you can. If there are conflicing changes, then the latest edits will be honoured.

* * *
