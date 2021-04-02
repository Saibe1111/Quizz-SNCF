function init() {

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const departure = document.createElement("INPUT");
    departure.setAttribute("type", "text");
    departure.setAttribute("id", "departure");
    
    const departureLabel = document.createElement("Label");
    departureLabel.setAttribute("for","departure");
    departureLabel.innerText = "Départ : ";

    const arrive = document.createElement("INPUT");
    arrive.setAttribute("type", "text");
    arrive.setAttribute("id", "arrive");
    
    const arriveLabel = document.createElement("Label");
    arriveLabel.setAttribute("for","arrive");
    arriveLabel.innerText = "Arrivée : ";
    
    const go = document.createElement("button");
    go.setAttribute("id", "btnGo");
    go.innerText = "Go";

    

    container.appendChild(departureLabel);
    container.appendChild(departure);
    container.appendChild(document.createElement("br"));
    container.appendChild(arriveLabel);
    container.appendChild(arrive);
    container.appendChild(document.createElement("br"));
    container.appendChild(go);

    document.body.appendChild(container);

    document.getElementById("btnGo").addEventListener("click", question);
    
}

function question() {

    clearContainer()

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const question = document.createElement("h2");
    question.innerText = "Question";

    const btnTrue = document.createElement("button");
    btnTrue.setAttribute("id", "btnTrue");
    btnTrue.innerText = "Vrai";

    const btnFalse = document.createElement("button");
    btnFalse.setAttribute("id", "btnFalse");
    btnFalse.innerText = "Faux";

    container.appendChild(question);

    container.appendChild(btnTrue);
    container.appendChild(btnFalse);

    document.body.appendChild(container);

    document.getElementById("btnTrue").addEventListener("click", success);

    document.getElementById("btnFalse").addEventListener("click", failure);

}

function success() {
    clearContainer()

    

}

function failure() {
    clearContainer()

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const risitas = document.createElement("iframe");
    risitas.setAttribute("src", "assets/videos/Risitas_sncf.mp4");
    risitas.setAttribute("allow", "autoplay; encrypted-media");

    container.appendChild(risitas);

    document.body.appendChild(container);


}

function clearContainer() {
    document.body.removeChild(document.getElementById("container"));
}



init();