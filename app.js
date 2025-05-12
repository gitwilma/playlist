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

    if (!playlists[genre]) {
        playlists[genre] = {};
    }

    if (!playlists[genre][artist]) {
        playlists[genre][artist] = [];
    }

    playlists[genre][artist].push({
        song: song,
        playlistName: name
    });

    renderPlaylists();
    form.reset();
});

function renderPlaylists() {
    playlistsContainer.innerHTML = '';

    for (let genre in playlists) {
        for (let artist in playlists[genre]) {
            playlists[genre][artist].forEach(function (entry) {
                const playlistSection = document.createElement('div');
                playlistSection.className = 'playlist-entry';

                const playlistTitle = document.createElement('h3');
                playlistTitle.textContent = entry.playlistName;
                playlistSection.appendChild(playlistTitle);

                const songItem = document.createElement('p');
                songItem.textContent = `${entry.song} (Artist: ${artist}, Genre: ${genre})`;
                playlistSection.appendChild(songItem);

                playlistsContainer.appendChild(playlistSection);
            });
        }
    }
}
