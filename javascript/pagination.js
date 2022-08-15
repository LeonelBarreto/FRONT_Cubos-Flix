const previous = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

let start = 0;
let end = 5;

previous.addEventListener('click', () => {
    if (moviesSearch.length < 5) {
        return;
    };

    if (start === 0) {
        start = moviesSearch.length - 5;
        end = moviesSearch.length;
    } else {
        start -= 5;
        end -= 5;
    };

    makeCardsMovies(start, end);
});

next.addEventListener('click', () => {
    if (moviesSearch.length < 5) {
        return;
    }
    if (end === moviesSearch.length) {
        start = 0;
        end = 5;
    } else {
        start += 5;
        end += 5;
    };
    
    makeCardsMovies(start, end);
});
