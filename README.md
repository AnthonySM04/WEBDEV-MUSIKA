# Musika: Your Personal Music Search Engine

## Overview
Musika is an interactive web application designed to help users discover music from Spotify and YouTube. By integrating with the Spotify API and the YouTube Data API, the application provides detailed information about songs, artists, albums, and related videos, offering a rich informational experience.

## Features
- **Dynamic Content Update:** Utilizes JavaScript to manipulate the DOM and dynamically update content based on user interactions.
- **Web API Integration:** Fetches data from the Spotify API and the YouTube Data API to display music information and related videos.
- **WebSocket Functionality:** Enables real-time updates through WebSocket connections.
- **Custom Scrollbar:** Implements a custom scrollbar for a better user experience.
- **Responsive Design:** Ensures a seamless experience across different devices and screen sizes.
- **Animated Elements:** Includes animated elements to enhance user engagement.

## Project Structure
The project consists of the following key files and directories:

- `index.html`: Contains the HTML structure of the web application.
- `styles.css`: Includes the CSS styles for the web application.
- `button.css`: Additional CSS for button styles.
- `app.js`: Contains the client-side JavaScript code.
- `server.js`: Contains the server-side code using Express.js and WebSocket.
- `README.md`: Provides information about the project.

## Getting Started
### Prerequisites
Ensure you have Node.js and npm installed on your machine.

### Installation
1. Install the necessary packages:
   ```bash
   npm install express ws

### Running the application
1. Download all of the files from the repository
2. Go to the terminal of the server and type:
   ```bash
   node server.js
3. Open a web browser and go to http://localhost:8080.

### Usage
- **Enter the name of a song, artist, or album in the search box and click "Search" to see detailed information from Spotiy, if you want to listen to that specific song then press the Watch on Youtube button for the related videos for that song.**
