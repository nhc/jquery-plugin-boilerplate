jQuery ->

	$.pluginName = ( element, options ) ->

		@settings = {}

		@init = ->
      @settings = $.extend( {}, @defaults, options )
      @callSettingFunction( 'callback', [ @$element, @getSetting( 'message' ) ] )

      @setState 'ready'

    # initialise the plugin
    @init()

    # make the plugin chainable
    this