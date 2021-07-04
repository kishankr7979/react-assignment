var players = {
	player1: {
		name: "Uday",
        score: 257,
        avatar:'\u{1f466}'
	},
	player2: {
		name: "Ummaid",
        score: 210,
        avatar:'\u{1f466}'
	},
	player3: {
		name: "Shashwat",
        score: 300,
        avatar:'\u{1f465}'
	},
	player4: {
		name: "Tarun",
        score: 319,
        avatar:'\u{1f470}'
	},
	player5: {
		name: "Kishan",
        score: 962,
        avatar:'\u{1f468}'
    },
    player6: {
		name: "Sameer",
        score: 469,
        avatar:'\u{1f468}'
    },
    player7: {
		name: "Rishav",
        score: 521,
        avatar:'\u{1f466}'
    },
    player8: {
		name: "Ashutosh",
        score: 28,
        avatar:'\u{1f466}'
    },
    player9: {
		name: "Rivya",
        score: 32,
        avatar:'\u{1f466}'
	}
};

var array = [];

for (var key in players) {
	array.push(players[key]);
  
}

array.sort(function(a, b){
    return b.score - a.score;
});

var rank = 1;
for (var i = 0; i < array.length; i++) {
  if (i > 0 && array[i].score < array[i - 1].score) {
  	rank++;
  }
	array[i].rank = rank;
}
let arr = [];
let n = 5;
for(let i=0; i<n; i++){
    arr.push(array[i]);

}
export default arr
console.log(arr);