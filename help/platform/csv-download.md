---
sidebar_position: 1
slug: /data-export
---

# Export Data 

You can export / download raw data from FreeText AI. 

## Export Raw Data

Follow the steps below to export raw records and corresponding inferences (topics, sentiment, etc) -

- Go to the 'Search' tab from the LHS menu navigation
- Apply relevant filters 
- Verify that the data is correct
- Click on the download icon on the top-right of the page

:::tip
A maximum of 2000 rows can be downloaded at a time. So, apply necessary filters to download the data.
:::


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

