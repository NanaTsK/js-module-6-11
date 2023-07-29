// *     ----->     ----->     Example 1                                
// ===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
        return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}

// *     ----->     ----->     Example 2                                
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const fetchPostsBtn = document.querySelector(".btn2");
const userList2 = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  // Change the number of items in the group here  
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=3").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  userList2.innerHTML = markup;
}

// *     ----->     ----->     Example 3                                
// ===================================================
console.log(`____________________`);
console.log(`Example 3 :`);

// newsapi.org
// 473ce05f82184291a23e48340991f924
// https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1

// thecatapi.com
// live_kSIRSSuXC66Asfm1UmGRFimLVxLxKgZLpH0ehQLig7yUCgW8RM2ZryaFPNo8SDAW 
//  Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 
// 'api_key=live_kSIRSSuXC66Asfm1UmGRFimLVxLxKgZLpH0ehQLig7yUCgW8RM2ZryaFPNo8SDAW'

const searchForm = document.querySelector(".js-search-form");
const articlesContainer = document.querySelector(".js-articles-container");

searchForm.addEventListener("submit", onSearch);

function onSearch(evt) { 
  evt.preventDefault();

  const options = {
  headers: {
    // Authorization: "473ce05f82184291a23e48340991f924",
    Authorization: "live_kSIRSSuXC66Asfm1UmGRFimLVxLxKgZLpH0ehQLig7yUCgW8RM2ZryaFPNo8SDAW",
  },
};
  // const url = "https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1";
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
}

// *     ----->     ----->     Example 4                                
// ===================================================
console.log(`____________________`);
console.log(`Example 4 :`);

// https://www.weatherapi.com
// API Key: 1c9cb3dbb21c4924ae3110013232907
// Base URL: http://api.weatherapi.com/v1
//  /forecast.json

// http://api.weatherapi.com/v1?key=1c9cb3dbb21c4924ae3110013232907&q=Paris&days=5

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");

search.addEventListener("submit", onCitySearch);

function onCitySearch(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;

  getWeather(query.value, days.value)
  .then(data => list.innerHTML = createMarkup(data.forecast.forecastday))
  .catch(err => console.log(err));
}

function getWeather(city, days) { 
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "1c9cb3dbb21c4924ae3110013232907";

  // const params = new URLSearchParams({
  //   key: API_KEY,
  //   q: city,
  //   days: days
  // })

  //  return fetch(`${BASE_URL}/forecast.json?key=${params}`)
//*або

  return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`)
    .then(resp => { 
      if (!resp.ok) { 
        throw new Error(resp.statusText)
      }
      return resp.json()
    })
}

function createMarkup(arr) { 
  return arr.map(({ date, day: { avgtemp_c, condition: { icon, text } } }) => `<li>
  <img src="${icon}" alt="${text}" />
  <p>${text}</p>
  <h2>${date}</h2>
  <h3>${avgtemp_c}</h3>
</li>`)
    .join("")
}
