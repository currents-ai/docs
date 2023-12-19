---
sidebar_position: 3
slug: /roles
---

# Roles & Permissions 

Currently, the platform supports three different user roles -
1. Members
2. Admins
3. Owners

**'Members'** 
- have read-only access. 
- cannot edit existing reports, bookmarks, etc. 
- can create reports or bookmarks for themselves (for personal analysis), which is viewable only by them.

**'Admins'** 
- have edit access. 
- can create teams, reports, invite users, manage their team's resources (e.g reports, bookmarks), etc.

**'Owners'** 
- have the highest level of access 
- e.g deactivating users, demoting 'admins', etc. 
- typically, the user who created the account is assigned as the "owner".


Below is a table that enumerates the permissions associated with various roles.

| Feature                        | Member             | Admin             | Owner |
|--------------------------------|--------------------|-------------------|-------|
| **User Management**            |                    |                   |       |
| View Users                     | Yes                | Yes               | Yes   |
| Invite Users                   | No                 | Yes               | Yes   |
| Remove Users                   | No                 | No                | Yes   |
| Edit User Role                 | No                 | Yes               | Yes   |
| **Team Management**            |                    |                   |       |
| View Teams                     | Yes                | Yes               | Yes   |
| Create Teams                   | No                 | Yes               | Yes   |
| Delete Teams                   | No                 | Yes               | Yes   |
| Edit Team                      | No                 | Yes               | Yes   |
| **Reports**      | | | |
| Create Reports | Only for individual use. | For teams they are a part of. | For teams they are a part of. |
| Delete Reports | Only Individual Reports. | Individual & Team Reports. | Individual & Team Reports. |
| Edit Reports | Only Individual Reports. | Individual & Team Reports. | Individual & Team Reports. |
| **Bookmarks** | | | |
| Create Bookmark | Only for individual use. | For teams they are a part of. | For teams they are a part of. |
| Delete Bookmarks               | Only Individual Bookmarks. | Individual & Team Bookmarks. | Individual & Team Bookmarks. |
| Edit Bookmarks               | Only Individual Bookmarks. | Individual & Team Bookmarks. | Individual & Team Bookmarks. |
| **Catalog Management**         |                    |                   |       |
| Download Catalog CSV           | Yes                | Yes               | Yes   |
| Upload Catalog Edits           | No    | Yes   | Yes   |
| **Source Management**          |                    |                   |       |
| View Sources                   | Yes                | Yes               | Yes   |
| Create Source                  | Yes (for now) (will change)    | Yes   | Yes   |
| Edit Source                    | Yes (for now) (will change)    | Yes   | Yes   |
| Delete Source                  | Yes (for now) (will change)    | Yes   | Yes   |
| **Appearance Changes (Overall)** |                  |                   |       |
| Graph Colors                   | Yes (for now) (will change)    | Yes   | Yes   |
| Graph Axis                     | Yes (for now) (will change)    | Yes   | Yes   |
| **Account Settings (Individual)** |                 |                   |       |
| Dark/Light Mode                | Yes                | Yes               | Yes   |
| Email Alerts for Source        | Yes    | Yes   | Yes   |
| Email Alerts for New User      | Yes    | Yes   | Yes   |
