function displayTripDetails(response) {
    console.log("Trip plans generated")
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
    let prompt = 'User Instructions: Generate a 3-day itinerary about ${instructionInput.value}';
    let apiUrl = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';

    console.log("Generating trip plans");

    axios.get(apiUrl).then(displayTripDetails);
}

let tripFormElement = document.querySelector("#travel-plans-generator");
tripFormElement .addEventListener("submit", generateTrip);

