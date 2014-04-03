(function() {
  jQuery(function() {
    return $.pluginName = function(element, options) {
      this.settings = {};
      this.init = function() {
        this.settings = $.extend({}, this.defaults, options);
        this.callSettingFunction('success', [this.$element, this.getSetting('message')]);
        return this.setState('ready');
      };
      this.init();
      this;
      $.pluginName.prototype.defaults = {
        message: 'hello word',
        success: function() {}
      };
      return $.fn.pluginName = function(options) {
        return this.each(function() {
          var plugin;
          if ($(this).data('pluginName') === void 0) {
            plugin = new $.pluginName(this, options);
            return $(this).data('pluginName', plugin);
          }
        });
      };
    };
  });

}).call(this);
