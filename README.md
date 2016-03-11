# Spotify Link Resolver for MixMax

This is an open source intergration for MixMax to allow embedding of tracks and albums from Spotify in emails. Written in Node with help from [this example tutorial](https://github.com/mixmaxhq/giphy-example-link-resolver)

## Usage

Get the code and run the server
	
	
	git clone https://github.com/atallahhezbor/mixmax-spotify-link-resolver.git
	cd mixmax-spotify-link-resolver
	npm install
	npm start`

Integrate it with MixMax [here](https://app.mixmax.com/dashboard/integrations)

Click 'Add link resolver' and enter 

    
`spotify.com/[a-zA-Z]+/[a-zA-Z0-9]+$` for the regular expression
and `http://localhost:9146/resolver` for the resolver API URL.

Then simply paste a track from spotify into an email a watch it magically transform into an embedded player! 

Note: You may have to allow unsafe content in your browser since the resolver is hosted locally on http.
    
    
