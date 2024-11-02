function displayTripDetails(response) {
    new Typewriter("#travel-plans", {
        strings: response.data.answer
        autoStart: true, 
        delay: 1, 
        cursor: "",
    });
}

function generateTrip(event) {
    event.preventDefault();

    let instructionsInput = docume.querySelector("#user-instructions")
    let apiKey = "4tao58d1a814447011bb9de5e3623b3f";
    let context = "You are an adventurous tourist and love to try everything that is recommended. Your mission is to generate a 3-day trip iternary with at least 6 activites in basic HTML. Make sure to follow the user instructions.";
    let prompt = `User instructions: Generate a 3-day trip intinerary about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#travel-plans");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a 3-day Travel Itinerary about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayTripDetails);
}

let tripFormElement = document.querySelector("#travel-plans-generator");
tripFormElement .addEventListener("submit", generateTrip);

