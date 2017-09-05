Welcome!

Thank you for checking out my Movie Finder project.

Project Description:

The movie finder project uses the Express framework to build a server that talks to another server and caches the results. The server will respond to GET requests by fetching the movie data from the OMDb API. If the data has already been fetched, the cached data will be returned, as opposed to fetching the data again. Visiting localhost:3000/data will return to the page all of the data that has been requested and cached.

How to open:

Using the command prompt, copy and paste 'code ~/oca/startnow-movie-finder-data' and push enter. This will open the project in visual studio code. To start and test this application, run 'node index.js' in Terminal, after navigating to the server folder.

There will be two routes we can (initially) take to fetch the data:

1. http://localhost:3000/?i=tt3896198

2. http://localhost:3000/?i=tt3896198