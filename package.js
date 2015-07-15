Package.describe({
  name: 'cbranch101:grindage',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A tool for checking whether Stoney thinks our food group is legit',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('grindage.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cbranch101:grindage');
  api.addFiles('grindage-tests.js');
});
