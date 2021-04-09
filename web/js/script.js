class Trip {

    constructor() {
        const container = createContainer();

        const departure = document.createElement("INPUT");
        departure.setAttribute("type", "text");
        departure.setAttribute("id", "departure");

        const departureLabel = document.createElement("Label");
        departureLabel.setAttribute("for", "departure");
        departureLabel.innerText = "Départ : ";

        const arrive = document.createElement("INPUT");
        arrive.setAttribute("type", "text");
        arrive.setAttribute("id", "arrive");

        const arriveLabel = document.createElement("Label");
        arriveLabel.setAttribute("for", "arrive");
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

        document.getElementById("btnGo").addEventListener("click", this.question.bind(this));
    }

    question() {

        const container = clearContainer();

        const question = document.createElement("h2");
        
        const btn0 = document.createElement("button");
        btn0.setAttribute("id", "btn0");

        const btn1 = document.createElement("button");
        btn1.setAttribute("id", "btn1");

        fetch("https://www.openquizzdb.org/api.php?key=V2E329W7EP&choice=2&categ=informatique&diff=1&anec=1")
        .then(response => response.json())
        .then(response => {
            console.log(response.results[0]);
            if(response.response_code === 5){
                window.alert("code 5")
            }else{
                question.innerText = response.results[0].question;
                btn0.innerText = response.results[0].autres_choix[0];
                btn1.innerText = response.results[0].autres_choix[1];

                

            }
            
        });

        
        

        container.appendChild(question);

        container.appendChild(btn0);
        container.appendChild(btn1);

        document.body.appendChild(container);

        

    }

    success() {

        const container = clearContainer();

        const message = document.createElement("h2");
        message.innerText = "Bonne réponse ! Voilà vos horraire:";
        container.appendChild(message);

        const tab = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const trdeparture = document.createElement("th");
        trdeparture.innerText = "Départ à "
        const trarrive = document.createElement("th");
        trarrive.innerText = "Arrivé à "

        thead.appendChild(trdeparture);
        thead.appendChild(trarrive);

        tab.appendChild(thead);
        tab.appendChild(tbody);
        container.appendChild(tab);
        document.body.appendChild(container);
    }

    failure() {

        const container = clearContainer();

        const risitas = document.createElement("iframe");
        risitas.setAttribute("src", "assets/videos/Risitas_sncf.mp4");
        risitas.setAttribute("allow", "autoplay; encrypted-media");

        container.appendChild(risitas);

        document.body.appendChild(container);

    }


}



function clearContainer() {
    document.body.removeChild(document.getElementById("container"));

    return createContainer();
}

function createContainer() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");

    return container;
}

const r = new Trip();