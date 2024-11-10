// Display a welcome message in the console
console.log("Welcome to My First Website!");

// Example: Adding a small popup when a user clicks on the contact link
document.querySelector("a[href='#contact']").addEventListener("click", function() {
    alert("Feel free to reach out via email!");
});