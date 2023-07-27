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

const fetchPostsBtn = document.querySelector(".btn");
const userList2 = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  // Change the number of items in the group here  
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(
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