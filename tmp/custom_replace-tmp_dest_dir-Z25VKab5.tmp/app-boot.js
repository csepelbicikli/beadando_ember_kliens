/* jshint ignore:start */

define('client1/config/environment', ['ember'], function(Ember) {
  var prefix = 'client1';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("client1/tests/test-helper");
} else {
  require("client1/app")["default"].create({"name":"client1","version":"0.0.0+103482c3"});
}

/* jshint ignore:end */
