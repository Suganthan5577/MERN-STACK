
// Select the elements from the DOM
const button = document.getElementById("button");
const funContent = document.getElementById("funContent");
const fun = document.getElementById("fun");

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Fetch a random joke from the API
    axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            // Extract the joke data
            const joke = response.data;
            funContent.textContent = joke.setup; // Display the joke setup
            fun.textContent = joke.punchline;   // Display the punchline
        })
        .catch((error) => {
            // Handle any errors during the API call
            funContent.textContent = "Oops! Something went wrong.";
            fun.textContent = "Please try again later.";
            console.error("Error fetching joke:", error);
        });
});
