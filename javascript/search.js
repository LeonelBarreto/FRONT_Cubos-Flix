const search = document.querySelector('.input');

search.addEventListener('keydown', async (event) => {
    if (event.key !== 'Enter') {
        return;
    };

    if (event.key === "Enter") {

        if (search.value === '') {
            init();
            makeCardsMovies(0, 5);
            return;
        } else {
            let searchMovie = [];
            const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?query=' + search.value);
            const view = await response.json();
            allMovies = view.results;
            allMovies.forEach(item => {
                if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                    searchMovie.push(item);
                };
            });

            makeCardsMovies(0, 5);
            search.value = '';
        };
    };    
});