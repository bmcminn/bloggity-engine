# bloggity-engine
The driving force behind the Bloggity CMS/Static site generator.


## Using Bloggity

To run various operations of bloggity, you can review the `scripts` configured `package.json` to understand what all processes you have access to. You may customize them and add more as you see fit to suit your needs as you work with platform.

Below is a detailed summary of the default tasks built into this package:

_**NOTE:** To run any of the following, use: `npm run <TASK_NAME>`_

Task  | Type    | Description
---   |---      |---
`bloggity` | _default_ | Development build of the site into `.dev/`
`bloggity:prod` | _prod_ | Production build of the site into `.prod/`
`swig` | _default_ | Runs a precompilation of all template files in your theme
`stylus` | _default_ | Runs the Stylus preprocessor task
`stylus:prod` | _prod_ | Runs the Stylus preprocessor task and minifies the output



## TODO:

- consider rebuilding this thing on [Feathers](https://github.com/feathersjs/feathers)
