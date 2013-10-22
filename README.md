# Jade-handlebars for Meteor

### **NOTE: THIS VERSION IS NOT COMPATABLE WITH THE OLD TEMPLATE API (SPARK)**

If you are using the old templete library please use version `0.1.0` by adding:

`smart.json`

```json

    "belt-jade-template": {
      "git": "https://github.com/meteorbelt/belt-jade-template.git",
      "tag": "v0.1.0"
    },
```

Write the templates in your [Meteor](https://github.com/meteor/meteor) Application using [Handlebars](http://github.com/wycats/handlebars.js) and [Jade](https://github.com/visionmedia/jade) instead of HTML and Handlebars.

## Why?

Jade is a high performance template engine heavily influenced by [Haml](http://haml.info/). Main features are great readability, filters (stylus, less, markdown, coffee-script, etc), flexible indentation,...

## How?

Instead of writing (demo.html):
    
    <head>
      <title>demo</title>
    </head>

    <body>
      {{> hello}}
    </body>

    <template name="hello">
      <h1>Hello World!</h1>
      {{greeting}}
      <input type='button' value="Click"/>
    </template> 

You may write (demo.jade):
    
    head
      title test-jade-handlebars

    body
      {{> hello}}

    template(name="hello")
      h1 Hello World!
      {{greeting}}
      input(type="button", value="Click")

See more details with the [todos example](https://github.com/meteorbelt/meteor-jade-handlebars/blob/master/examples/todos/client/todos.jade).

## Installation

To install Jade-handlebars using [Atmosphere](https://atmosphere.meteor.com), simply install Meteorite.
    
    $ npm install -g meteorite

Navigate to your Meteor project directory and add the package.

    $ mrt add belt-jade-handlebars

Then, don't forget to run your project using `mrt` instead of `meteor`.

## Todo

Write tests
