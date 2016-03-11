var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Spotify urls can be 
  // http://open.spotify.com/track/<alphanumeric-id>
  // ( or http://play.spotify.com/track/<alphanumeric-id> )
  var matches = url.match(/.com\/([a-zA-Z]+)\/([a-zA-Z0-9]+)$/);  
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  // Get the type of resoruce (track or album)
  var type = matches[1];
  // Get its id
  var id = matches[2];
  // Construct the url
  var url = 'https://embed.spotify.com/?uri=spotify:' + type + ':' + encodeURIComponent(id);
  // Construct and return the html as json
  var html = '<iframe src="' + url + '" width=300 height=380" frameborder="0"></iframe>';
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};