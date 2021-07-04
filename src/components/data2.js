// Total Users list

var Rank = [
    {rank:'1'},
    { rank:'2'},
    { rank:'3'},
    { rank:'4'},
    { rank:'5'},
    { rank:'6'},
    { rank:'7'},
    { rank:'8'},
    { rank:'9'}, 
    { rank:'10'},
    { rank:'11'},
    {rank:'12'}
  ];
  // Sorting based on Scores
  let n = 5; // number of Top Scorer
  let brr = []; // empty list inorder to serve top scorer
  for(let i=1; i<=n; i++){
      brr.push(Rank[i]);
}
//console.log(brr);
 export default brr;