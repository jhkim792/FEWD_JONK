var user1 = prompt('Rock, Paper, or Scissors?','');
var user2 = prompt('Rock, Paper, or Scissors?','');


if(user1 === 'Rock' && user2 ==='Scissors'){
  console.log('Rock beats Scissors');
}
if(user1 === 'Scissors' && user2 === 'Paper'){
  console.log('Scissors beats Paper');
}
if(user1 === 'Paper' && user2 === 'Rock'){
  console.log('Paper beat Rock');
}
if(user1 === user2){
  console.log('tie game');
}

else{
  console.log('Player 2 wins with ' + user2 + ' over ' + user1);
}
