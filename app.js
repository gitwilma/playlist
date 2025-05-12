const form = document.getElementById("form");
const playlistsContainer = document.getElementById("playlists");

let playlists = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("playlistName").value.trim(); 
    const genre = document.getElementById("genre").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const song = document.getElementById("song").value.trim();

    if (!name || !genre || !artist || !song) {
        alert("Fyll i alla fält!");
        return;
    }

    if (!playlists[name]) {
        playlists[name] = [];
    }

    playlists[name].push({
        song: song,
        artist: artist,
        genre: genre
    });

    renderPlaylists();
    form.reset();
});

function renderPlaylists() {
    playlistsContainer.innerHTML = '';

    for (let playlistName in playlists) {
        const playlistSection = document.createElement('div');
        playlistSection.className = 'playlist-entry';

        const playlistTitle = document.createElement('h3');
        playlistTitle.textContent = playlistName;
        playlistSection.appendChild(playlistTitle);

        const songList = document.createElement('ul');

        playlists[playlistName].forEach(function (entry) {
            const songItem = document.createElement('li');
            songItem.textContent = `${entry.song} (Artist: ${entry.artist}, Genre: ${entry.genre})`;
            songList.appendChild(songItem);
        });

        playlistSection.appendChild(songList);
        playlistsContainer.appendChild(playlistSection);
    }
}
