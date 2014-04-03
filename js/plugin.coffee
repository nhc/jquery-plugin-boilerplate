jQuery ->

	$.pluginName = ( element, options ) ->

		@settings = {}

		@init = ->
      @settings = $.extend( {}, @defaults, options )
      @callSettingFunction( 'success', [ @$element, @getSetting( 'message' ) ] )

      @setState 'ready'

    # initialise the plugin
    @init()

    # make the plugin chainable
    this

   $.pluginName::defaults =
      message: 'hello word'  # option description
      success: ->           # callback description

   $.fn.pluginName = ( options ) ->
    this.each ->
      if $( this ).data( 'pluginName' ) is undefined
        plugin = new $.pluginName( this, options )
        $( this ).data( 'pluginName', plugin )