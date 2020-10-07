
    'use strict';
    var uName = prompt ('what\'s your name?');
    console.log(uName);
    alert ('Hello '+ uName +' let\'s play aguessing game about me  hope you gonna enjoy it');
    alert('plz answer with yes/no or y/n for the next five questions ');
  var i2 = 0;
var name =prompt ('Am I a person who use nicknames on social media?');
name = name.toLowerCase();
console.log (name);
 switch(name) {
     case 'no':
     case 'n':    
         alert ('alright it is correct I hate nicknames');
         i2 = i2+ 1;
         console.log(i2);
        break; 
     case 'yes':
     case 'y' :
         alert ('no your wrong no points for this');
         break; 
    default :
    alert('plz enter yes/no or y/n');
 }
 var pets = prompt(' Do I prefer dogs more than cats?');
 pets = pets.toLowerCase();
 console.log (pets);
 if(pets=='yes'||pets=='y'){
     alert ('yes that is correct ,so add apoint');
      i2 = i2+1;
      console.log(i2);
 }else if(pets=='no'|| pets=='n'){
    alert ('No that is wrong, I love dogs but I can not have one beacuse of my MOM,sad story,LOL');
  }else {
    alert('plz enter yes/no or y/n');
 }
 var cro = prompt('Can I do handemade items?');
 cro =cro.toLowerCase();
 console.log (cro);
 if (cro=='yes'||cro=='y'){
     alert ('okay now you know me well cause this is correct');
         i2 = i2 + 1;
         console.log(i2);
 }else if(cro=='no'|| cro=='n') {
     alert ('No this is wrong cause I can make you a present with crochet if you want');
  }else {
    alert('plz enter yes/no or y/n');
 }

var music= prompt('Is piano my fav instrument?');
music =music.toLowerCase();
console.log(music);
switch(music){
    case'yes':
    case'y':
    alert ('no I like it but not my fav  ,Iprefer violin');
    break;
    case 'no':
    case 'n':
    alert('well you are right my fav one is violin');
     i2 = i2 + 1;
     console.log(i2);
    break;
    default:
        alert ('plz enter yes/no or y/n')
}
var sub = prompt('Is physic my fav subject?');
sub =sub.toLowerCase();
console.log (sub);
if (sub=='yes'||sub=='y'){
    alert('well it seems strange but it was my fav at school');
      i2 = i2 + 1;
      console.log(i2);
}else if(sub=='no'|| sub=='n') {
  alert('no this is wrong');
}else {
    alert('plz enter yes/no or y/n');
}
alert ('okay '+ uName + ' now you know me better lets play another guessing game and let\'s make it harder');
alert ('will it\'s agame with rules, you will have two questions with specific number of attempts so try to focus');
alert('so let\'s start');
var i=0;
var nGuess= prompt('from 1 to 10 I have a special lucky number so can you guess it?');
for (var i= 0; i<4; i++) { 
    if (nGuess>8){
        nGuess =prompt ('nup it\'s lower than this try it again');
    }else if (nGuess<8){
        nGuess =prompt ('wrong it\'s more than this ,try it again');
    } else if (nGuess=8){
        alert('great it is my lucky number');
        i2 = i2+1;
        console.log(i2);
        break 
    }
}
    alert (' the correct anewer is 8 ');
    for (var i=0; i<5; i++){
        var uNovel = prompt ('my most liked novels are five novels,can you guess just one of them?').toLowerCase();
        var novel = ['gone with the wind','the perfume','pride and prejudice','the dafenshy code','the animal farm'];
        console.log(uNovel);
 if (uNovel===novel[0]){
  alert ('yes it\'s one of them ,you\'re a great guesser');
     i2=i2+1;
     console.log(i2);
     break
 }else if (uNovel===novel[1]){   
    alert ('yes it\'s one of them ,you\'re a great guesser');
    i2= i2+1;
    console.log(i2);
    break
 }else if (uNovel===novel[2]){
    alert ('yes it\'s one of them ,you\'re a great guesser');
    i2= i2+1;
    console.log(i2);
    break
 }else if (uNovel===novel[4]){
    alert ('yes it\'s one of them ,you\'re a great guesser');
    i2= i2+1;
    console.log(i2);
    break
 }else{
     alert('try it again');
    }
 
}
alert ('my favourite novels are gone with the wind,the animal farm ,pride and prejudice,the dafenchy code,and the perfume');
alert ('your final score is '+ i2);
alert (`welcome to my website ${uName} hope you enjoyed the game`);
