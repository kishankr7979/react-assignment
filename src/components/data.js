// Total Users list
var Users = [
    { name: 'Edward', score: 1, avatar:'\u{1F638}'},
    { name: 'Sharpe', score: 7, avatar: '\u{1F639}'},
    { name: 'Rishav', score: 45, avatar: '\u{1F637}'},
    { name: 'Kishan', score: 12 , avatar: '\u{1F984}'},
    { name: 'Ashutosh', score: 13 , avatar: '\u{1F631}'},
    { name: 'Hariom', score: 37, avatar: '\u{1F632}'},
    { name: 'Tarun', score: 12 , avatar: '\u{1F633}'},
    { name: 'Uday', score: 53 , avatar: '\u{1F633}'},
    { name: 'Shashwat', score: 47, avatar: '\u{1F634}'}, 
    { name: 'Vidhan', score: 9 , avatar: '\u{1F627}'},
    { name: 'Sameer', score: 0 , avatar: '\u{1F641}'},
    { name: 'Rivya', score: 27, avatar: '\u{1F984}'}
  ];
  // Sorting based on Scores
  Users.sort((a,b) => {
      return b.score - a.score;
  })

  let n = 5; // number of Top Scorer 
  let arr = []; // empty list inorder to serve top scorer
  for(let i=0; i<n; i++){
      arr.push(Users[i]);
  
}
console.log(arr);
 export default arr;