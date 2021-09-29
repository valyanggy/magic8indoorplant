function myFunction() {
    // Randomize a number for swtich()
    var num = Math.floor(Math.random() * 12) + 1;;
    var mood = document.getElementById("background");
    console.log(num);

    //Generate responses and also add class for scenarios: need to make concise of the repetitive removing class action(problem is that each response is independently tagged)
    switch (num) {
        case 1:
            answer = "Just be";
            mood.classList.add("water");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("water");
            }
            break;
        case 2:
            answer = "no";
            mood.classList.add("grit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("grit");
            }
            break;
        case 3:
            answer = "Home? It’s the place you can never visit for the first time, because by the time it’s become home, you’ve already been there. You can only return. (You can never go home, only go home again.)";
            mood.classList.add("grit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("grit");
            }
            break;
        case 4:
            answer = "platonic love is a source of power";
            mood.classList.add("fruit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("fruit");
            }
            break;
        case 5:
            answer = "may i go away bye it is certain";
            mood.classList.add("water");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("water");
            }
            break;
        case 6:
            answer = "be confident in the depth of your curiosity not in the depth of your expertise";
            mood.classList.add("grit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("grit");
            }
            break;
        case 7:
            answer = "Practice silence";
            mood.classList.add("grit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("grit");
            }
            break;
        case 8:
            answer = "Tomorrow, the things you desire will start to change";
            mood.classList.add("fruit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("fruit");
            }
            break;
        case 9:
            answer = "after the revolution, who’s going to pick up the garbage on Monday morning?";
            mood.classList.add("water");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("water");
            }
            break;
        case 10:
            answer = "I'd rather be reading.";
            mood.classList.add("fruit");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("fruit");
            }
            break;
        case 11:
            answer = "Take a familiar idea and show it in an unfamiliar way and vice versa";
            mood.classList.add("water");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("water");
            }
            break;
        case 12:
            answer = "What is radical to you?";
            mood.classList.add("water");
            setTimeout(removeClass, 800);

            function removeClass() {
                var mood = document.getElementById("background");
                mood.classList.remove("water");
            }
            break;
    }

    //Display responses
    document.getElementById("coin").innerHTML = answer;
}