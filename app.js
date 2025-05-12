const form = document.getElementById("form");
const playlistsContainer = document.getElementById("playlists");

let playlists = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("playlistName").value; 
    const genre = document.getElementById("genre").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const song = document.getElementById("song").value.trim();

    if (!genre || !artist || !song) {
        alert("Fyll i alla fält!");
        return;
    }

    if (!playlists[genre]) {
        playlists[genre] = {};
    }

    if (!playlists[genre][artist]) {
        playlists[genre][artist] = [];
    }

    playlists[genre][artist].push(song);

    renderPlaylists();
    form.reset();
});

function renderPlaylists() {
    playlistsContainer.innerHTML = '';

    for (let genre in playlists) {
        const genreSection = document.createElement('div');
        genreSection.className = 'genre-section';

        const genreTitle = document.createElement('h3');
        genreTitle.textContent = 'Genre: ' + genre;
        genreSection.appendChild(genreTitle);

        for (let artist in playlists[genre]) {
            const artistTitle = document.createElement('p');
            artistTitle.innerHTML = '<strong>Artist:</strong> ' + artist;
            genreSection.appendChild(artistTitle);

            const songList = document.createElement('ul');

            playlists[genre][artist].forEach(function (song) {
                const songItem = document.createElement('li');
                songItem.textContent = song;
                songList.appendChild(songItem);
            });

            genreSection.appendChild(songList);
        }

        playlistsContainer.appendChild(genreSection);
    }
}
