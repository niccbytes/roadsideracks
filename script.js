// myscript.js
function redirectBasedOnInput() {
    var searchQuery = document.getElementById("searchInput").value;
    window.location.href = searchQuery + ".html";
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    redirectBasedOnInput();
});
