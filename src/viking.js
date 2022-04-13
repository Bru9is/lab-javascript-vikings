// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  
  attack() {
    return this.strength
  }
  
  receiveDamage(damage) {
   this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0 ){
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  
  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
constructor (){
  this.vikingArmy = []
  this.saxonArmy = []
  }
  addViking(solViking){
    this.vikingArmy.push(solViking)
  }
       
  addSaxon(solSaxon){
    this.saxonArmy.push(solSaxon)
  }
  
  vikingAttack(){
    let randomSaxonIn = Math.floor(math.random() * this.saxonArmy)
    let randomSaxon = this.saxonArmy[randomSaxonIn]
    let randomVikingIn = Math.floor(math.random() * this.vikingArmy)
    let randomViking = this.VikingArmy[randomVikingIn]
  }
  
  saxonAttack()
  
  showStatus()
}


let viking1 = new Viking (Gabriel, 15, 28)
console.log(viking1)


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
