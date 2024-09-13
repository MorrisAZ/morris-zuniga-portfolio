//IIFE -- Immeediately Invoked Function Expression
(function() {
    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();

//whe window finihses loading, the Start function is called and the message is displayed in the console.