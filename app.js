const form = document.getElementById("form");
const playlistsContainer = document.getElementById("playlists");

let playlists = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("playlistName").value;
    const genre = document.getElementById("genre").value;
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;

    const newPlaylist = {
        name, 
        genre, 
        artist, 
        song
    };

    playlists.push(newPlaylist);
    renderPlaylists();
    form.reset();

    function renderPlaylists() {
        playlistsContainer.innerHTML = '';
      
        playlists.forEach(function (pl) {
          const div = document.createElement('div');
          div.className = 'playlist';
      
          const title = document.createElement('h3');
          title.textContent = pl.name;
      
          const genre = document.createElement('p');
          genre.textContent = 'Genre: ' + pl.genre;
      
          const artist = document.createElement('p');
          artist.textContent = 'Artist: ' + pl.artist;
      
          const song = document.createElement('p');
          song.textContent = 'Låt: ' + pl.song;
    
          div.appendChild(title);
          div.appendChild(genre);
          div.appendChild(artist);
          div.appendChild(song);
      
          playlistsContainer.appendChild(div);
        });
      }
      
});