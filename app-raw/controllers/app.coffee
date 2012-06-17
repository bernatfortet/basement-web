class App extends Spine.Controller

	#elements:
		#".FBPreviewMessage": "fbPreviewMessage"

	#events:
		# "click .Google": "OnShareGoogle"


	debug:
		active: true
		color: "color:white; background-color:black"
		name: "APP"


	constructor: ->
		super
		log("App Controller initialised", this.debug)