/*
 * grunttest
 * https://github.com/lawrence.norton/grunttest
 *
 * Copyright (c) 2015 Lawrence Norton
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunttest = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunttest = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunttest.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunttest.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunttest = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
