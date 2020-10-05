
    'use strict';
   
    alert('Hello there, let us play a gessing game about me ');
    
var name =prompt ('Am I a person who use nicknames on social media?');
name = name.toLowerCase();
console.log (name);
 switch(name) {
     case 'no':
     case 'n':    
         alert ('alright it is correct I hate nicknames');
        break; 
     case 'yes':
     case 'y' :
         alert ('no your wrong no points for this');
         break;     
 }

 var pets = prompt(' Do I prefer dogs more than cats?');
 pets = pets.toLowerCase();
 console.log (pets);
 if (pets=='yes'||pets=='y'){
     alert (' yes that is correct ,so add apoint');
 } else {
     alert ('No that is wrong, Ilove dogs but I can not have one beacuse of my MOM,sad story,LOL');

 }
 var cro = prompt('Can I do handemade items?');
 cro =cro.toLowerCase();
 console.log (cro);
 if (cro=='yes'||cro=='y'){
     alert ('okay now you know me well cause this is correct');
 }else {
     alert ('No this is wrong cause I can make you a present with crochet if you want');
 }

var music= prompt('Is piano my fav instrument?');
music =music.toLowerCase();
console.log(music);
switch(music){
    case'yes':
    case'y':
    alert ('no I like it but not my fav');
    break;
    case 'no':
    case 'n':
    alert('well you are right my fav one is viollin');
    break;
}
var sub = prompt('Is physic my fav subject?');
sub =sub.toLowerCase();
console.logs (sub);
if (sub=='yes'||sub=='y'){
    alert('well it seems strang but it was my fav back then');
}else{
alert ('Now you know me ,Welcome to my page');
}