// *     ----->     ----->     Example 1 - INFINITE SCROLL                          
// ===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

//* https://the-one-api.dev/v2
//* https://the-one-api.dev/v2/character
//* Access token: rn7U0Cz2x45D1oQn8nIn

const target = document.querySelector(".js-guard");
const BASE_URL = "https://api.themoviedb.org/3/";
const END_POINT = "trending/movie/day";
const API_KEY = "8985958d9c3d07552296f275319902b2";
const list = document.querySelector(".js-list");

let currentPage = 1;

let options = {
  root: null,
  rootMargin: "300px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) { 

    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            currentPage += 1; 
            getTrending(currentPage)
               .then(data => { 
                   list.insertAdjacentHTML("beforeend", createMarkup(data.results))
                //    if (data.page === data.total_pages) {    <=THIS IS NOT WORKING AS ONLY 500 PAGES ARE LOADING INSTEAD OF 1000
                   if (data.page === data.total_pages/2) { 
                       observer.unobserve(target);
                   }
    })
    .catch(err => console.log(err));
        }
    })
}

function createMarkup(arr) { 
    return arr.map(({ poster_path, title }) =>
        `<li class="infinite-li fetch-card"><img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
                <h2>${title}</h2>
            </li>`
    ).join("")
}

function getTrending(page=1) { 
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
        .then(resp => { 
            if (!resp.ok) { 
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
}
getTrending()
    .then(data => { 
        list.insertAdjacentHTML("beforeend", createMarkup(data.results))
        observer.observe(target);
    })
    .catch(err => console.log(err));