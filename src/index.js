function displayTripDetails(response) {
    new Typewriter("#travel-plans", {
        strings: response.data.answer,
        autoStart: true, 
        delay: 1, 
        cursor: "",
    });
}

function generateTrip(event) {
    event.preventDefault();

    let apiKey = "4tao58d1a814447011bb9de5e3623b3f";
    let prompt = "";
    let context = "";
    let apiUrl = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';

    axios.get(apiUrl).then(displayTripDetails);
}

let tripFormElement = document.querySelector("#travel-plans-generator");
tripFormElement .addEventListener("submit", generateTrip);

