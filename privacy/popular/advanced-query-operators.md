---
sidebar_position: 2
slug: /advanced-query-operators
---

# Advanced Query Operators

## Text Query Operators


The following are the query operators supported right now:

*   **AND** \- matches when sentence contains both the terms**.** Generally, there is no need to use this operator as the query bright light is equivalent to bright **AND** light
*   **OR -** matches when sentence contains either of the terms. For eg. bright **OR** light matches sentences containing either of "bright" or "light"
*   **"..."** - quotes are used for exact match of phrases within the quotes eg. **"**light brown**"**
*   **(...)** \- the brackets are used in order to override precendence. eg. **(**bright OR light**)** person 
*   **NOT (...)** - NOT is used to negate a term. eg. bight **NOT** light matches records containing bright and not containing light
*   **aspects:"..."**  - This can be used to use System Defined Topics in any search query eg. to search for the system defined topic Battery with the text query phone the query will be - phone **aspects:"battery"**
*   Using these basic building blocks, we can specify logic for matching that is as complex as the needs demand.

Note on Exact Matches 
----------------------

All the queries are run on the stemmed words, except when it's mentioned in quotes. For eg:

**light** matches **light**, **lights**, **lighting**, **lighter**. 

**"light"** matches only **light**

Example Queries
---------------

* * *

Query: **(happy OR sad) person** 

The presence of "happy" or "sad" and presence of "person". The order is not enforced.

Matches **happy** **person,**  **sad person,  person happy,  person sad.**

* * *

Query: **((happy OR sad) OR (no emotion)) person**

The term (no emotion) is an implicit and of "no" and "emotion". No ordering is enforced.

Matches **happy person**, **sad person**, **no emotion person, emotion person no**. Does not match **emotion person**, **no person.** 

* * *

Query:  **(happy OR sad OR "no emotion") person**

Like above, except matches the exact phrase **"no emotion"**

Matches  **happy person**, **sad person**, **no emotion person**. Does not match **emotion person no, emotion person, no person.**  

* * *

Query: **battery NOT charge**

Looks for the term battery **without the term "charge" in the same record**.