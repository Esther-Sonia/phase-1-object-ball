let gameObject = {
    homeTeam: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brooke Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    awayTeam: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismack Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
};

 console.log(gameObject.homeTeam.players["Alan Anderson"]);

 const numPointsScored = playerName => {
    const teams = Object.values(gameObject); 
    
    for (let team of teams) {
        if (team.players[playerName]) {
            return team.players[playerName].points; 
        }
    }

    return "Player not found"; 
};

 console.log(numPointsScored("Alan Anderson")); 

 const shoeSize = playerName => {
    const teams = Object.values(gameObject); 

    for (let team of teams) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
    return "Player not found"

};

 console.log(shoeSize("Brendan Haywood"));

 const teamColors = (teamName) => {
    const teams = Object.values(gameObject); 

    for (let team of teams) {
        if (team.teamName === teamName) {
            return team.colors; 
        }
    }

    return "Team not found"; 
};

console.log(teamColors("Brooklyn Nets"));

const teamNames = () => {
    let names = [];
    Object.values(gameObject).forEach(team => names.push(team.teamName));
    return names;
};

console.log(teamNames()); 

const playerNumbers = teamName => {
    for (let team of Object.values(gameObject)) {
        if (team.teamName === teamName) {
            return Object.values(team.players).map(player => player.number);
        }
    }
    return "Team not found";
};

console.log(playerNumbers("Brooklyn Nets"));

const playerStats = playerName => {
    for (let team of Object.values(gameObject)) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return "Player not found";
};

console.log(playerStats("Ben Gordon"));

const bigShoeRebounds = function () {
    let largestShoeSize = 0;
    let rebounds = 0;

    Object.values(gameObject).forEach(team => {
        Object.values(team.players).forEach(player => {
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                rebounds = player.rebounds;
            }
        });
    });
    return rebounds;
};
console.log(bigShoeRebounds());
const mostPointsScored = function () {
    let mostPointsScored = 0;
    let highestScorer = "";

    Object.values(gameObject).forEach(team => {
        Object.entries(team.players).forEach(([playerName, player]) => {
            if (player.points > mostPointsScored){
                mostPointsScored = player.points; 
                highestScorer = playerName;
            }
 });
});
return highestScorer;
 };
 console.log(mostPointsScored());

 const winningTeam = () => {
    let highestPoints = 0;
    let winningTeam = "";


    for (let team of Object.values(gameObject)) {
        let totalPoints = 0;

        for (let playerName in team.players) {
            totalPoints += team.players[playerName].points;
        }

        if (totalPoints > highestPoints) {
            highestPoints = totalPoints;
            winningTeam = team.teamName;
        }
    }

    return winningTeam;
};

console.log(winningTeam());


const playerWithLongestName = () => {
    let longestName = "";

    for (let team of Object.values(gameObject)) {  
        for (let playerName in team.players) {  
            if (playerName.length > longestName.length) {  
                longestName = playerName;  
            }
        }
    }

    return longestName;
};

console.log(playerWithLongestName());



const doesLongNameStealATon = () => {
    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (let team of Object.values(gameObject)) {  
        for (let playerName in team.players) {  
            if (playerName.length > longestName.length) {  
                longestName = playerName;
            }
        }
    }

    for (let team of Object.values(gameObject)) {  
        for (let [playerName, player] of Object.entries(team.players)) {  
            if (player.steals > mostSteals) {  
                mostSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    return longestName === playerWithMostSteals;
};

console.log(doesLongNameStealATon());


