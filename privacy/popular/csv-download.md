---
sidebar_position: 5
slug: /csv-download
---

# CSV Download - Common Issues - FreeText AI Knowledge Base
### **Excel CSV parsing issues on Windows**

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

