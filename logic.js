d3.json("http://127.0.0.1:8000/spotify")
    .then(
        function(songs) {
            songs.forEach(
                function(song) {
                    console.log(song);
                }
            );
        }
    )
;


