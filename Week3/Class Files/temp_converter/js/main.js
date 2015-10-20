var temp = prompt('enter a temp in celsius');
var ftemp = temp * (9/5) + 32;


if(ftemp>60){
  document.body.setAttribute('style', 'background-color: yellow;');
}

document.write(ftemp);