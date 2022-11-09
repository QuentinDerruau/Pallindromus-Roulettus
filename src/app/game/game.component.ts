import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  started!: boolean;
  timer!: number; 
  ended!: boolean;
  tempsRestant! : number; 
  reponse! : boolean;
  mot! : string;
  score!: number; 
  answerfalse!: boolean;
  timesup!: boolean;
  temps!: string;
  mauvaisereponse!: string;
  tempsBase!:number;

  constructor() { }

  ngOnInit(): void {
  }
//met en place les valeurs de base : mot de début de partie, démarrage, réeinitialisation du score, ended=false, définition du temps, si temps finit => ended=true
startgame() {
  this.started = true; 
  this.score = 0;
  this.ended = false; 
  this.tempsBase = 2000;
  this.tempsRestant = 2000;
  this.timer = window.setInterval(() => {
    this.tempsRestant = this.tempsRestant -10; 
    if (this.tempsRestant === 0) {
    window.clearInterval(this.timer);
      this.ended = true;
      this.answerfalse = false;
      this.timesup  = true; 
      this.temps = "temps écoulé";
    }
  },1); 
 
}
//si le joueur appuye sur non et que la réponse est en faite oui alors tu arretes le jeu, si et seulement si, le mot est bien faux alors on lui ajoute du temps et un 1 point

resetOui() {
if( this.reponse === false){
  window.clearInterval(this.timer);
  this.ended = true;
  this.answerfalse = true;
  this.timesup = false; 
  this.mauvaisereponse = "vous vous êtes trompé(e)";
}
else{
  this.score ++;
  let array = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84];
  this.tempsRestant=this.tempsBase;
    if(array.includes(this.score)){
      this.tempsBase=this.tempsBase-100;
    }
}
}

//si il y a un pallindrome et que le joueur click sur oui et que la reponse est bonne, reset vers une autre question, si et seulement si, le mot est faux fin du jeux 

resetNon() {
  if(this.reponse === true  ){
    window.clearInterval(this.timer);
    this.ended = true;
    this.answerfalse = true;
    this.timesup = false; 
    this.mauvaisereponse = "vous vous êtes trompé(e)";
  }
else{
  this.score ++;
  let array = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84];
  this.tempsRestant=this.tempsBase
    if(array.includes(this.score)){
      this.tempsBase=this.tempsBase-100;
    }
}
}


//génération de pallindrome
generation(){

              //blibliothéque, split pour récupérer chaque lettre
                  const vowels = 'aeiouy'.split('');
                  const consonnants = 'bcdfghjklmnpqrstvwxz'.split('');
              // on donne une valeur a -mot- pour qu'une valeur s'insere, ce qui va réinisialier la valeur  
                  this.mot= "";
              // cette ligne permet d'avoir une taille aléatoire d'un mot 

                  const length = Math.floor(Math.random() * 2) +2;

                  const probabilite = Math.random();
                  const stat = Math.random();
                  // création du pallindrom
                  for (let i=0; i < length; i++){
                      if(probabilite < 0.5){
                  
                              this.mot += vowels[Math.floor(Math.random() * vowels.length)]; 
                              this.mot += consonnants[Math.floor(Math.random() * consonnants.length)]
                      }
                  // on repéte l'opération mais à l'envers 
                      else{
                
                          this.mot += consonnants[Math.floor(Math.random() * consonnants.length)];
                          this.mot += vowels[Math.floor(Math.random() * vowels.length)]
                      }
                  }
              //creer un pallindrom en ajoutant a la variable mot la variable inversé
                  this.mot += this.mot.split('').reverse().join('');
      
             
              //on choisis si notre variable sera un pallindrom avec ou sans une lettre au centre 
                  if (stat > 0.5){
                    // si la probalité est supérieure a 5 alors la réponse est vrai 
                      this.reponse = true;
                      // Création de la lettre au centre 
                      if(stat < 0.25){
                          this.mot = this.mot.substr(0,length*2) + this.mot.substr(length*2+1);
                      }
                  }
                  else{
                     // si la probalité n'est pas supérieure à 5 alors la réponse est fausse
                    this.reponse = false; 
                  // modification du mot en faux mot 
                  if (stat< 0.7){
                    this.mot = this.mot.substr(0,length-1) + this.mot.substr(length*2,length*2-1);
                  }  
                  else if (stat < 0.8 ){
                    this.mot = this.mot.substr(1,length*2) + this.mot.substr(length*2+2);
                  }
                  else{
                    this.mot = this.mot.substr(0,length*2) + this.mot.substr(length*2+2);
                  }
                }
                  // afficher le mot en début 
                  console.log(this.mot)
              }

}