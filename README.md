# Musika: Your Personal Music Search Engine

## Overview
Musika is an interactive web application designed to help users discover music from Spotify and YouTube. By integrating with the Spotify API and the YouTube Data API, the application provides information about songs, artists, albums, and related videos, offering a rich and fun experience.

## Features
- **Dynamic Content Update:** Utilizes JavaScript to manipulate the DOM and dynamically update content based on user interactions.
- **Web API Integration:** Fetches data from the Spotify API and the YouTube Data API to display music information and related videos.
- **WebSocket Functionality:** Enables real-time updates through WebSocket connections.
- **Music Search:** A button that allows you to search for a song, artist, or album.
- **Youtube Button:** It is another button below the details of the music you searched that will open up the container on the right that shows all of the related videos for that specific music or artist.
- **Custom Scrollbar:** Implements a custom scrollbar for a better user experience.
- **Responsive Design:** Ensures a seamless experience across different devices and screen sizes.
- **Animated Elements:** Includes animated elements to enhance user engagement.

## LOCAL SETUP
### Note:
Ensure you have Node.js and npm installed on your machine.

### Running the application
1. Download and extract all of the ZIP files from the repository
2. Go to the terminal of the server.js and type:
   ```bash
   node server.js
3. Open a web browser and paste this link http://localhost:8080 onto your browser.

### Usage
- **Enter the name of a song, artist, or album in the search box and click "Search" to see information from Spotify such as the artist and the album it is from, if you want to listen to that specific song then press the Watch on Youtube button for the related videos for that song.**
