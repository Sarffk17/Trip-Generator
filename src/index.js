function displayTripDetails(response) {
    new Typewriter("#travel-plan", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateTrip(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4tao58d1a814447011bb9de5e3623b3f";
    let context =
      "You are an adventurous tourist and love to try everything that is recommended. Your mission is to generate a 3-day trip iternary with at least 6 activites in basic HTML. Make sure to follow the user instructions and separate each line with a <br />. Do not include a title to the Trip. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a 3-day trip itinerary poem about ${instructionsInput.value}, and present it neatly.`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#travel-plan");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a 3-day trip itinerary about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayTripDetails);
  }
  
  let poemFormElement = document.querySelector("#travel-plans-generator");
  poemFormElement.addEventListener("submit", generateTrip);