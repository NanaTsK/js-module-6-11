console.log("...something...");

// *     ----->     ----->     Example 1 - BEARER AUTHORIZATION EXAMPLE                                
// ===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

//* https://the-one-api.dev/v2
//* https://the-one-api.dev/v2/character
//* Access token: rn7U0Cz2x45D1oQn8nIn

// const BASE_URL = "https://the-one-api.dev/v2/";
// const END_POINT = "character";
// const KEY = "rn7U0Cz2x45D1oQn8nIn";

// function getCharacter() { 
//     const param = new URLSearchParams({
//         limit: 30,
//         page: 1,
//     });

//     const option = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${KEY}`
//         }
//     }

//     fetch(`${ BASE_URL }${END_POINT}?${param}`, option).then(resp => console.log(resp))
// }
// getCharacter()  


// *     ----->     ----->     Example 2 - PAGINATION                               
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

//* https://api.themoviedb.org/3/trending/all/day?api_key=
//* https://developer.themoviedb.org/docs
//* API Key: 8985958d9c3d07552296f275319902b2
//* API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTg1OTU4ZDljM2QwNzU1MjI5NmYyNzUzMTk5MDJiMiIsInN1YiI6IjY0Y2U1MTA1NGQ2NzkxMDBjNTJjMDE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLRqsA4cFkJO0FSKBWymdUd61U2wFnHzZ7zltYr1BcQ
//* example API request: https://api.themoviedb.org/3/movie/550?api_key=8985958d9c3d07552296f275319902b2

const BASE_URL = "https://api.themoviedb.org/3/";
const END_POINT = "trending/movie/day";
const API_KEY = "8985958d9c3d07552296f275319902b2";
const list = document.querySelector(".js-list");
const loadMoreBtn = document.querySelector(".js-load");
let currentPage = 1;

loadMoreBtn.addEventListener("click", onload);

function onload() { 
    currentPage += 1;
    getTrending(currentPage)
        .then(data => { 
            list.insertAdjacentHTML("beforeend", createMarkup(data.results))
            if (data.page === data.total_pages) {
                loadMoreBtn.classList.add('is-hidden');
            }
        })
        .catch(err => console.log(err));
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
        if(data.page !== data.total_pages) { 
            loadMoreBtn.classList.remove('is-hidden');
        }
    })
    .catch(err => console.log(err));

function createMarkup(arr) { 
    return arr.map(({ poster_path, title }) =>
        `<li><img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
                <h2>${title}</h2>
            </li>`
    ).join("")
}



