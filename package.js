Package.describe({
  summary: "Write your templates using Handlebars and Jade instead of HTML and Handlebars -- Meteor UI compatible"
});

Package._transitional_registerBuildPlugin({
  name: "jade-handlebars",
  use: ["spacebars"],
  sources: [
    "plugin/html_scanner.js",
    "plugin/StringScanner.js",
    "plugin/compile-jade.js"
  ],
  npmDependencies: {"jade": "0.35.0"}
});

// This on_use describes the *runtime* implications of using this package.
Package.on_use(function (api) {
  // XXX would like to do the following only when the first html file
  // is encountered

  api.add_files('global_template_object.js', 'client');
  api.export('Template', 'client');

  // html_scanner.js emits client code that calls Meteor.startup and
  // UI, so anybody using templating (eg apps) need to implicitly use
  // 'meteor' and 'ui'.
  api.imply(['meteor', 'ui'], 'client');
});
