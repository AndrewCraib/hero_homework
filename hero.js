var Hero = function( name, health, favFood ) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  }

  var Food = function( type, value ) {
    this.type = type;
    this.value = value;
  }

  var Rat = function( poison, life ) {
  this.poison = poison;
  this.life = life;
}
  var Wizard = function( powerup, destroy ) {
    this.powerup = powerup;
    this.destroy = destroy;
  }


  Hero.prototype = {

    talk: function(){
      console.log("hello my name is " + this.name);
    },

    eat: function(food){
      if (this.favFood === food.type){
       this.health += (food.value * 1.5);
      } else {
       (this.health += food.value);
      }
   },

   ill: function( rat, food ){
    food.value -= rat.poison;
    console.log(food.value);
    if (this.favFood === food.type){
     this.health += (food.value * 1.5);
    } else {
     (this.health += food.value);
    }
  },

  heel: function(food, wizard) {
    if ( food.value < 0) {
      food.value += wizard.powerup;
    }
      else {
        food.value;
      }
    },

  kill: function( rat , wizard) {
    if ( rat.life === wizard.destroy);
      
  }
  }





  var andrew = new Hero ( 'Andrew', 100 , 'chili' );
  var pizza = new Food ( 'pizza', 20 );
  var chili = new Food ('chili', 30);
  var roland = new Rat ( 50, 1 )
  var merlin = new Wizard ( 70, 1 )

  andrew.talk();
  andrew.eat(chili);
  console.log(andrew.health);
  andrew.ill(roland,chili);
  console.log(andrew.health);
  andrew.heel(chili, merlin);
  console.log(andrew.health);
  // console.log(andrew.extraHealth(pizza));