const StarWars7 = 'Star Wars: El despertar de la fuerza'
const minAgeStarWars7 = 13

const name1 = 'Carles'
const age1 = 33

const name2 = 'Victor'
const age2 = 12

function canWtchStarWars7 (name, age, isWithAdult) {
  if (age >= minAgeStarWars7) {
    alert(`${name} puede pasar a ver ${StarWars7}`)
  } else if (isWithAdult) {
  	alert(`${name} puede pasar a ver ${StarWars7}.
  		Aunque su edad es ${age}, se encuentra acompañado/a.`)
  } else {
    alert(`${name} no puede pasar a ver ${StarWars7}.
			Tiene ${age} años y necesita tener ${minAgeStarWars7}`)
  }
}

canWtchStarWars7(name1, age1, false)
canWtchStarWars7(name2, age2, true)
