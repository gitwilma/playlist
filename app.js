const form = document.getElementById("form");
const playlistsContainer = document.getElementById("playlists");

let playlists = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("playlistName").value;
    const genre = document.getElementById("genre").value;
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;

    console.log("Formulärdata:");
    console.log("Namn:", name);
    console.log("Genre:", genre);
    console.log("Artist:", artist);
    console.log("Låt:", song);
});