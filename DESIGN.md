# Bloggity Engine Design


## Folder system

- `themes/`
- `engine/`
- `content/`
    - `blog/`
    - `portfolio/`
    - `projects/`


### Notes:

- Root level folders have special meaning.
- `content/` subfolders are their own post types
    - Your file configs within each post type determines how the engine parses your content
- The directory structure of `content/` determines the directory structure of your site


## File FrontMatter

Below is an example file format for each of the pages in your site.

```yaml
---
title: "string"
author:
    name: string
    website: url
    email: email
    # (add as many `author` properties as you see fit, ex:)
    twitter: url
    facebook: url
    instagram: url
robots: noindex, nofollow
_tags: tag 1, tag 2 # (taxonomy tags allow you to filter your content)
date: dateString # (allows future dates for scheduled publishing)
draft: bool # (optional, allows you to block publishing until you're ready)
template: index # (optional, allows you to use a different template)
theme: main # (optional, allows you to use a custom theme for this page)
style: null # (optional, allows you to use a custom stylesheet for this page)
---
Body/post content would go here as you normally would expect.

Including <span>custom markup</span>, even though this will eventually be parsed by markdown :)
```


### Notes:

- `_PROPS` are taxonomy values, which you can use to create custom "tags" or meta values for filtering and sorting your content.

    ```yaml
    ---
    #ex:
    _tags: tag1, tag2
    _tools: waffles, syrup
    _colors: red, green, blue
    ...
    ---
    ```


## Inspiration

The above design was inspired heavily by the following sources:

- http://jekyllrb.com/
- http://fansoro.org/
- http://www.cabinjs.com/
- https://sculpin.io/
- https://cdmedia.github.io/cms.js/
- http://wintersmith.io/
- https://github.com/clavery/grunt-generator

