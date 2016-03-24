# TODO:

## Phase 1:
- Initial setup that generates a site
- Automagically parses folder structure
- Must generate default URL schema
    - `/:taxonomy/:post/index.html`
    - `/:taxonomy/:index/index.html`
    - `/:page/index.html`


## Phase 2:
- Better build tooling for automating/generating certain things
    - Taxonomies
    - Author management
    - Integrate HTPASSWD generation for post types (requires Apache server)
        - https://httpd.apache.org/docs/2.4/programs/htpasswd.html
        - https://www.npmjs.com/package/pass
        - https://www.npmjs.com/package/htpasswd
    - Automated deployment with configs
        - S/FTP
    - robots.txt generation using page frontmatter data


## Phase 3:
- Better controls/configs for customizations
    - custom URL schema
- More robust data modeling
    - `/:taxonomy/:postmeta/index.html`
    - `/:taxonomy/:postmeta/:index/index.html`
