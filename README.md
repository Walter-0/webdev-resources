# webdev-resources
Search and add helpful resources relevant to full stack web development.

## User Stories

- User should be able to search for resources using keywords.
- User should be able to browse related resources by tag name
- User should be able to add new resources that have a title, optional description, url, and optional tag.
- User should be able to authenticate using github in order to save their resources

## Entities

### Resource
- id:Integer
- title:String
- description:String (optional)
- url:String
- user_id:Integer

### Tag
- id:Integer
- title:String
- description:String (optional)

### TaggedResource
- resource_id:Integer
- tag_id:Integer

### User
- github_user_id
- name
- email
