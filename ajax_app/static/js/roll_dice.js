function roll_dice(){
    let srd = document.getElementById("self-roll-display")
    let crd = document.getElementById("cpu-roll-display")
    let winnerText = document.getElementById("winner-text")
    let wd = document.getElementById("wins-display")
    let ld = document.getElementById("losses-display")
    
    Promise.all([
        fetch("http://127.0.0.1:5000/api/get_dice_roll/"),
        fetch("http://127.0.0.1:5000/api/get_dice_roll/")
    ]).then((responses) => {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }).then((data) => {
        return data.map((datum) => {
            return datum.roll;
        })
    }).then((rolls) => {
        srd.innerHTML = `<p>You rolled a ${rolls[0]}</p>`;
        crd.innerHTML = `<p>The computer rolled a ${rolls[1]}</p>`;
        if (rolls[0] > rolls[1]){
            winnerText.innerHTML = `<p>You win!</p>`
            wd.innerText = parseInt(wd.innerText) + 1
        } else if (rolls[0] == rolls[1]){
            winnerText.innerHTML = `<p>Tie!</p>`
        } else {
            winnerText.innerHTML = `<p>Computer wins!</p>`
            ld.innerText = parseInt(ld.innerText) + 1 
        }
    }).catch((error) => {
        console.log(error);
    });
}

let button = document.getElementById("roll-button");
button.addEventListener("click", roll_dice);
