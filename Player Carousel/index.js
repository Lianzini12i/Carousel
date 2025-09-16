let  leeFC = [
    {
        position: 'Goal Keeper',
        profile: 'abbiati.jpeg',
        name: "Christian Abbiati",
        nation: 'Italy',
        playStyle: 'Sweeper Keeper',
        serialNo: `001`,
        otherPositions: 'None' ,
    },

        {
        position: 'Left Back',
        profile: 'costa.jpeg',
        name: "Alessandro Costacurta",
        nation: 'Italy',
        playStyle: 'Defensive Full Back',
        serialNo: `002`,
        otherPositions: 'Center Back' ,
    },

        {
        position: 'Center Back',
        profile: 'canna.jpeg',
        name: "Fabio Cannavaro",
        nation: 'Italy',
        playStyle: 'The Destroyer',
        serialNo: `004`,
        otherPositions: 'Right Back',
    },

        {
        position: 'Center Back',
        profile: 'saliba.jpeg',
        name: "William Saliba",
        nation: 'France',
        playStyle: 'Build-Up',
        serialNo: `003`,
        otherPositions: 'Right Back' ,
    },

        {
        position: 'Left Back',
        profile: 'silvestre.jpg',
        name: "Mikaël Silvestre",
        nation: 'France',
        playStyle: 'Attacking Full Back',
        serialNo: `066`,
        otherPositions: "Right Back" ,
    },

        {
        position: 'Defensive Midfield',
        profile: 'kante.jpeg',
        name: "Ngolo Kante",
        nation: 'France',
        playStyle:'Box-to-box',
        serialNo: `006`,
        otherPositions: 'Center Midfielder' ,
    },

        {
        position: 'Defensive Midfield',
        profile: 'rijkaard.jpeg',
        name: "Frank Rijkaard",
        nation: '',
        playStyle:'Anchor Man',
        serialNo: `005`,
        otherPositions: 'Center Back, Center Midfielder' ,
    },
    
        {
        position: 'Center Midfielder',
        profile: 'barella.jpg',
        name: "Nicolò Barella",
        nation: 'Italy',
        playStyle: 'Creative Playmaker',
        serialNo: `008`,
        otherPositions: 'Defensive Midfield, Attacking Midfield' ,
    },

        {
        position: 'Attacking Midfield',
        profile: 'raul.jpeg',
        name: "Raúl",
        nation: '',
        playStyle:'Hole Player',
        serialNo: `009`,
        otherPositions: 'Center Forward, Second Striker' ,
    },

        {
        position: 'Right Wing',
        profile: 'messi.jpeg',
        name: "Lionel Messi",
        nation: '',
        playStyle:'Prolific Winger',
        serialNo: `10`,
        otherPositions: 'Center Forward, Second Striker' ,
    },

        {
        position: 'Left Wing',
        profile: "mbappe.jpeg",
        name: "Kylian Mbappe",
        nation: 'France',
        playStyle:'Goal Poacher',
        serialNo: `007`,
        otherPositions: 'Center Forward, Right Wing'  ,
    }
]

let playerCard = document.getElementById('playerCard')

let currentIndex = 0;

function displayCard(index) {
    const element = leeFC[index];
    playerCard.innerHTML = `
        <div id="logo"><img src="barca.png"></div>
        <h4>LEE FC</h4>
        <div id="position">${element.position}</div>
        <div id="profile"><img src="${element.profile}"></div>
        <h4 id="name">${element.name}</h4>
        <h4 id="playStyle">${element.playStyle}</h4>
        <h4 id="serialNo">${element.serialNo}</h4>
       <div id="position">Other Positions:<br><h4 id="playStyle">${element.otherPositions}</h4></div>
    `;
}


displayCard(currentIndex);

function Prev() {
    currentIndex = (currentIndex - 1 + leeFC.length) % leeFC.length;
    displayCard(currentIndex);
}

function Next() {
    currentIndex = (currentIndex + 1) % leeFC.length;
    displayCard(currentIndex);
}
