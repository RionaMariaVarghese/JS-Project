var originalPosts = [
    { id: 1, title: "Daily JS news" },
    { id: 2, title: "HTML tags" },
    { id: 3, title: "Syntactically Awesome Style Sheets" },
    { id: 4, title: "Java Updates" },
];

// Function to get new posts
function getPosts() {
    let storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (!storedPosts) {
        localStorage.setItem("posts", JSON.stringify(originalPosts));
        return originalPosts;
    }
    return storedPosts;
}

// Function to create a new post
function create_post(event) {
    event.preventDefault();
    var postId = document.getElementById("postId");
    var Id = Number(postId.value);
    var postTitle = document.getElementById("postTitle");
    var Title = postTitle.value;

    let posts = getPosts();
    posts.push({ id: Id, title: Title });

    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html";
}

// Function to display posts
function displayPosts() {
    var tableBody = document.getElementById("posts-body");
    var rowsHTML = "";
    var posts = getPosts();

    posts.forEach((post) => {
        rowsHTML += `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
    });

    tableBody.innerHTML = rowsHTML;
}