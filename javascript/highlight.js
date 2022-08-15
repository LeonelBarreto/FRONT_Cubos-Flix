const video = document.querySelector('.highlight__video');
const title = document.querySelector('.highlight__title');
const rating = document.querySelector('.highlight__rating');
const gender = document.querySelector('.highlight__genres');
const launch = document.querySelector('.highlight__launch');
const sinopse = document.querySelector('.highlight__description');
const linkVideo = document.querySelector('.highlight__video-link');


let allInfo = [];
let movie = [];
const getData = async () => {
    const film = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
    const info = await film.json();
    allInfo = info;

    const video = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
    const infoVideo = await video.json();
    movie = infoVideo.results;
};


const informations = (item) => {
    video.style.backgroundImage = `url("${item.backdrop_path}")`;

    title.textContent = item.title;

    rating.textContent = item.vote_average;

    let genres = [];
    let allGenres = ''
    item.genres.forEach(gender => {
        genres.push(gender.name);
        allGenres = genres.join(", ")
    });
    gender.textContent = allGenres;

    const date = item.release_date.slice(-2);
    const month = item.release_date.slice(5,7);
    const year = item.release_date.slice(0,4);
    let monthLaunch = '';
    if (month === '01') {
        monthLaunch = 'janeiro'
    } else if (month === '02') {
        monthLaunch = 'fevereiro'
    } else if (month === '03') {
        monthLaunch = 'março'
    } else if (month === '04') {
        monthLaunch = 'abril'
    } else if (month === '05') {
        monthLaunch = 'maio'
    } else if (month === '06') {
        monthLaunch = 'junho'
    } else if (month === '07') {
        monthLaunch = 'julho'
    } else if (month === '08') {
        monthLaunch = 'agosto'
    } else if (month === '09') {
        monthLaunch = 'setembro'
    } else if (month === '10') {
        monthLaunch = 'outubro'
    } else if (month === '11') {
        monthLaunch = 'novembro'
    } else {
        monthLaunch = 'dezembro'
    }
    launch.textContent = `${date} ${monthLaunch} ${year}`

    sinopse.textContent = item.overview;

    const key = movie[0].key;
    linkVideo.href = `https://www.youtube.com/watch?v=` + key;
};


const highlight = () => {
    informations(allInfo);
};


const init_Highlight = async () => {
    await getData();
    highlight();
};


init_Highlight();