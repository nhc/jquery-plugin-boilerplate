(function() {
  jQuery(function() {
    return $.pluginName = function(element, options) {
      this.settings = {};
      this.init = function() {
        this.settings = $.extend({}, this.defaults, options);
        this.callSettingFunction('callback', [this.$element, this.getSetting('message')]);
        return this.setState('ready');
      };
      this.init();
      return this;
    };
  });

}).call(this);
