const clientId = 'ee48dca882d64b2494c2120b3c4b81db';
const clientSecret = '52a1424173834365a5257e028979f34a';
const redirectUri = 'http://localhost:8000';

let accessToken = '';


const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

ws.onmessage = (event) => {
    const message = event.data;
    
    console.log('Received message:', message);
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

function sendMessage(message) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(message);
    }
}


document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    searchSpotify(query);
    sendMessage(`New search: ${query}`);
});


const searchSpotify = async (query) => {
    try {
        if (!accessToken) {
            await getAccessToken();
        }
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,artist,album`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data from Spotify:', error);
    }
};


const getAccessToken = async () => {
    const authString = btoa(`${clientId}:${clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authString}`
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    accessToken = data.access_token;
};


const displayResults = (data) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (data.tracks.items.length > 0) {
        data.tracks.items.forEach(item => {
            const trackElement = document.createElement('div');
            trackElement.classList.add('track');
            trackElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Artist: ${item.artists[0].name}</p>
                <p>Album: ${item.album.name}</p>
                <button onclick="searchYouTube('${item.name} ${item.artists[0].name}')">Watch on YouTube</button>
            `;
            resultsDiv.appendChild(trackElement);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
    }
};


const searchYouTube = async (query) => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(query)}&key=AIzaSyCSz12XVZNo3Un6K6ACz1rA2Wj-x0q3nCA`);
        const data = await response.json();
        displayYouTubeResults(data);
    } catch (error) {
        console.error('Error fetching data from YouTube:', error);
    }
};


const displayYouTubeResults = (data) => {
    const youtubeResultsDiv = document.getElementById('youtubeResults');
    youtubeResultsDiv.innerHTML = '';
    if (data.items.length > 0) {
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const videoElement = document.createElement('div');
            videoElement.classList.add('video');
            videoElement.innerHTML = `
                <h3>${item.snippet.title}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;
            youtubeResultsDiv.appendChild(videoElement);
        });
    } else {
        youtubeResultsDiv.innerHTML = '<p>No results found</p>';
    }
};
