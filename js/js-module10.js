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

