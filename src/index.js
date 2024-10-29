function generateTrip(event) {
    event.preventDefault();

    new Typewriter("#travel-plans", {
        strings: "3-Day Travel Plans",
        autoStart: true, 
        delay: 1, 
        cursor: "",
    });
}

let tripFormElement = document.querySelector("#travel-plans-generator");
tripFormElement .addEventListener("submit", generateTrip);

