// 1. DATENBANK: FILME
const fixedMovies = [
    { "title": "Madagascar (2005)", "category": "family", "image": "https://images8.alphacoders.com/807/thumb-1920-807266.jpg", "url": "https://supervideo.cc/e/55q3nlcnh2ix" },
    { "title": "Madagascar 2 (2008)", "category": "family", "image": "https://wallpapercave.com/wp/wp9149703.jpg", "url": "https://supervideo.cc/e/vmnlxaj8jhxl" },
    { "title": "Madagascar 3", "category": "family", "image": "https://static.wikia.nocookie.net/penguinsofmadagascar/images/b/be/Madagascar3poster.jpg", "url": "https://supervideo.cc/e/nzfuqywn3uf0" },
    { "title": "Ich – Einfach Unverbesserlich", "category": "family", "image": "https://image.tmdb.org/t/p/w500/f2QpHiuMjQ5J9olQVIJBDLV8Hr4.jpg", "url": "https://supervideo.cc/e/5cbbk6igu9ja" },
    { "title": "Ich – Einfach Unverbesserlich 2", "category": "family", "image": "https://www.booknerds.de/wp-content/uploads/2013/11/ich-einfach-unverbesserlich-dvd-cover-c-universal-pictures.jpg", "url": "https://supervideo.cc/e/v8bzede3gzas" },
    { "title": "Ich – Einfach Unverbesserlich 3", "category": "family", "image": "https://image.tmdb.org/t/p/w500/f2QpHiuMjQ5J9olQVIJBDLV8Hr4.jpg", "url": "https://supervideo.cc/e/5cbbk6igu9ja" },
    { "title": "Ich – Einfach Unverbesserlich 4", "category": "family", "image": "https://media1.jpc.de/image/w600/front/0/5053083267445.jpg", "url": "https://supervideo.cc/e/v5mhbsxyx3a4" },
    { "title": "Ice Age (2002)", "category": "family", "image": "https://m.media-amazon.com/images/I/71Pq1GT6FWL.jpg", "url": "https://supervideo.cc/e/lzeq1gll95nm" },
    { "title": "Ice Age 2 – Jetzt taut's", "category": "family", "image": "https://static.wikia.nocookie.net/iceage/images/3/3f/Ice_Age_2.jpg", "url": "https://supervideo.cc/e/mvq24kewhibx" },
    { "title": "Ice Age 3", "category": "family", "image": "https://m.media-amazon.com/images/I/91nKOn6MSmS.jpg", "url": "https://supervideo.cc/e/u6w9jp1zh1r9" },
    { "title": "Ice Age 4", "category": "family", "image": "https://m.media-amazon.com/images/I/81WrHM1AIdL.jpg", "url": "https://supervideo.cc/e/qostnun3tvu3" },
    { "title": "Ice Age – Kollision voraus!", "category": "family", "image": "https://lumiere-a.akamaihd.net/v1/images/p_iceagecollisioncourse_21384_ed27f2ef.jpeg", "url": "https://supervideo.cc/e/m6odazb3ek80" },
    { "title": "Ice Age – Buck Wild", "category": "family", "image": "https://www.kino-zeit.de/sites/default/files/2022-01/ice_age_die_abenteuer_von_buck_wild_1.jpg", "url": "https://supervideo.cc/e/tjj8a905n651" },
    { "title": "Zoomania", "category": "family", "image": "https://m.media-amazon.com/images/I/71C0W6LcI-L.jpg", "url": "https://supervideo.cc/e/natykdayxl3c" },
    { "title": "Zoomania 2 (2025)", "category": "family", "image": "https://de.web.img2.acsta.net/img/9c/92/9c92ca0dd9165527467d966dfba2913a.jpg", "url": "https://filemoon.to/d/3ebnscayvpys/Zoomania2.mp4" },
    { "title": "Deadpool", "category": "action", "image": "https://lumiere-a.akamaihd.net/v1/images/image_8c4aa72b.jpeg", "url": "https://supervideo.cc/e/feirv5cx3p72" },
    { "title": "Deadpool 2", "category": "action", "image": "https://images.moviesanywhere.com/974b94c6b5d14e214b8aef12c72035b4/62dab46a-16ee-4d5e-9675-5da3d5ced2b7.jpg", "url": "https://supervideo.cc/e/m7mv6o3rj1iz" },
    { "title": "Deadpool & Wolverine", "category": "action", "image": "https://de.web.img3.acsta.net/c_310_420/img/97/24/9724450d5b6d3b2df12f46d9394c7286.jpg", "url": "https://lulustream.com/s0ykwt9rem80" },
    { "title": "The Lego Ninjago Movie", "category": "lego", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWjESl5y5SrCd3WjUmMp1tXpg9zOwmRh6eg&s", "url": "https://supervideo.cc/e/e3hwyqq3ockf" },
    { "title": "The Lego Movie", "category": "lego", "image": "https://images.justwatch.com/poster/302705492/s718/The-Lego-Movie.jpg", "url": "https://supervideo.cc/e/umb43puzujma" },
    { "title": "The LEGO Movie 2", "category": "lego", "image": "https://cineprog.de/images/Breite_400px_RGB/p_70682.jpg", "url": "https://supervideo.cc/e/bzt91j1n8s1v" },
    { "title": "The LEGO Batman Movie", "category": "lego", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9FcTeNJFd7qtk-AMyKmUoTFBym9Gx6AsKg&s", "url": "https://supervideo.cc/e/ks2pzwgvqeed" },
    { "title": "Avengers: Infinity War", "category": "action", "image": "https://m.media-amazon.com/images/S/aplus-media/vc/5547601c-ed8a-4464-974c-d06a511d6332.png", "url": "https://supervideo.cc/e/nocgrri8g8zn" },
    { "title": "Cars (2006)", "category": "family", "image": "https://static.wikia.nocookie.net/disney/images/0/00/Cars_Poster.jpg", "url": "https://supervideo.cc/e/nbepd3f6kuv5" },
    { "title": "Cars 2", "category": "family", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeyBGU54ZLTHjx9F_aFCqS2WRWsoT06DFRg&s", "url": "https://supervideo.cc/e/muh298hcktnl" },
    { "title": "Cars 3", "category": "family", "image": "https://m.media-amazon.com/images/I/71PJ--35JoL.jpg", "url": "https://supervideo.cc/e/tc9l31j7x99c" },
    { "title": "Findet Nemo", "category": "family", "image": "https://cdn.premiumkino.de/movie/5166/b353fd74aadc247ac1d91b89b96315d2_w900.webp", "url": "https://supervideo.cc/e/zls9d15wkfj7" },
    { "title": "Spongebob: Rettung", "category": "family", "image": "https://trailer.kinopolis.de/grafiken/plakate_608x860/124309.jpg", "url": "https://supervideo.cc/e/04j7gg91bxls" },
    { "title": "Der SpongeBob Film", "category": "family", "image": "https://m.media-amazon.com/images/I/81hC6F+dTyL.jpg", "url": "https://supervideo.cc/e/1sx31hma8mtn" },
    { "title": "Phineas und Ferb Film", "category": "family", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtE--Nq2XttjW4dWzUMOF1nOqa9K4PRSjFAw&s", "url": "https://supervideo.cc/e/g30a650h2v36" },
    { "title": "Jumanji 2", "category": "action", "image": "https://m.media-amazon.com/images/I/71vK+mS083L.jpg", "url": "https://supervideo.cc/e/h8iarmm3xhtb" }
];

// 2. DATENBANK: SERIEN
const fixedSeries = [
    { "title": "NINJAGO", "category": "lego", "image": "https://img.tvspielfilm.de/ab/68/1a/5632679bea60e556a31a68ab.jpeg", "url": "https://www.youtube.com/embed/VmrhLifMMr4" },
    { "title": "Tokyo Ghoul", "category": "anime", "image": "https://aniworld.to/public/img/cover/tokyo-ghoul-stream-cover-1UXP5kH2v4RrUaN2GYspRmMde8J7woUE_220x330.jpg", "url": "https://aniworld.to/anime/stream/tokyo-ghoul" },
    { "title": "Tokyo Revengers", "category": "anime", "image": "https://aniworld.to/public/img/cover/tokyo-revengers-stream-cover-tjm7FA6p2yoYbYnoVIZTwU07bGA3x63K_220x330.jpg", "url": "https://aniworld.to/anime/stream/tokyo-revengers" },
    { "title": "Jujutsu Kaisen", "category": "anime", "image": "https://aniworld.to/public/img/cover/jujutsu-kaisen-stream-cover-repX7K4JuFCsuNLaimSSlxjaOomIlZQw_220x330.JPG", "url": "https://aniworld.to/anime/stream/jujutsu-kaisen" },
    { "title": "GOTHAM", "category": "action", "image": "https://m.media-amazon.com/images/I/81jhdzP7XxL.jpg", "url": "https://xcine.ru/browse?keyword=gotham" },
    { "title": "Phineas und Ferb", "category": "family", "image": "https://de.web.img3.acsta.net/c_310_420/pictures/14/02/28/13/16/398172.jpg", "url": "https://xcine.ru/browse?keyword=ferb" }
];

// --- LOGIK ---
let currentType = 'movie';

window.onload = () => {
    // Loader ausblenden
    setTimeout(() => {
        const loader = document.getElementById('intro-loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1500);

    renderGrid();
};

function renderGrid(filteredData = null) {
    const grid = document.getElementById('item-grid');
    const custom = JSON.parse(localStorage.getItem('myWebItems')) || [];
    
    // Basis-Daten wählen
    let source = (currentType === 'movie') ? [...fixedMovies] : [...fixedSeries];
    
    // Eigene hinzugefügte Inhalte reinmischen
    const relevantCustom = custom.filter(i => i.type === currentType);
    source = [...relevantCustom, ...source];

    const data = filteredData || source;

    grid.innerHTML = data.map(item => `
        <div class="card" onclick="openContent('${item.url}', '${item.title}')">
            <img src="${item.image}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300?text=Bild+Fehler'">
            <h4>${item.title}</h4>
        </div>
    `).join('');
}

function openContent(url, title) {
    const layer = document.getElementById('player-layer');
    const frame = document.getElementById('video-frame');
    const titleEl = document.getElementById('player-title');

    titleEl.innerText = title;
    frame.src = url;
    layer.style.display = 'flex';
}

function closePlayer() {
    document.getElementById('video-frame').src = "about:blank";
    document.getElementById('player-layer').style.display = 'none';
}

function switchType(type) {
    currentType = type;
    document.getElementById('type-movie').classList.toggle('active', type === 'movie');
    document.getElementById('type-series').classList.toggle('active', type === 'series');
    renderGrid();
}

function searchItems(q) {
    const custom = JSON.parse(localStorage.getItem('myWebItems')) || [];
    let source = (currentType === 'movie') ? [...fixedMovies] : [...fixedSeries];
    const relevantCustom = custom.filter(i => i.type === currentType);
    source = [...relevantCustom, ...source];

    const filtered = source.filter(i => i.title.toLowerCase().includes(q.toLowerCase()));
    renderGrid(filtered);
}

// SETTINGS & SPEICHERN
function openSettings() { document.getElementById('settings-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('settings-modal').style.display = 'none'; }

function saveEntry() {
    const title = document.getElementById('add-title').value;
    const url = document.getElementById('id-url').value;
    const image = document.getElementById('id-image').value || 'https://via.placeholder.com/200x300';
    const type = document.getElementById('add-type-select').value;
    const category = document.getElementById('add-category').value || 'User';

    if(!title || !url) return alert("Bitte mindestens Titel und URL ausfüllen!");

    const newItem = { title, url, image, type, category };
    const custom = JSON.parse(localStorage.getItem('myWebItems')) || [];
    custom.push(newItem);
    localStorage.setItem('myWebItems', JSON.stringify(custom));

    // Felder leeren
    document.getElementById('add-title').value = '';
    document.getElementById('id-url').value = '';

    alert("Gespeichert!");
    closeModal();
    renderGrid();
}
