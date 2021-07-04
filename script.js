//set your variables
var pokeImage = document.getElementById('pokeImage');
var pokeName = document.getElementById('pokeName');
var pokeNum = document.getElementById('pokeNum');
var pokeTypes = document.getElementById('pokeTypes');
var pokeAbilities = document.getElementById('pokeAbilities');
var movesHeader = document.getElementById('movesHeader');
var pokeMoves = document.getElementById('pokeMoves');
var input = document.getElementById('inputPoke');
var pokes = document.getElementById('pokes');

var searchArray = [];

document.getElementById('btn').addEventListener('click', ()=> {
    getPokemon(input.value.toLowerCase());
    
    var newPoke = input.value.trim();
    //only add when we have a value
    if (newPoke) {
      searchArray.push(newPoke);
      for (var i = 0, n; n = searchArray[i]; i++) {
        //create an li element  
        var liElement = document.createElement('li');
        liElement.innerText = n;
        liElement.style.listStyle="none";
        liElement.style.textTransform="capitalize";
      }
      pokes.appendChild(liElement);
      //clears the text box after hitting search
      input.value = "";
    }
})


function getPokemon(pokemon) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(({data}) => {
        console.log(data);
        
        pokeImage.src = data.sprites.front_default
        pokeName.innerHTML = data.name;
        pokeNum.innerHTML = `No. ${data.id}`;
        pokeAbilities.innerHTML = `<strong>Abilities: </strong>`

        data.abilities.forEach(abil => {
            pokeAbilities.innerHTML += `${abil.ability.name}, ` 
        });
        
        //pokemon moves
        movesHeader.innerHTML = `<strong>Moves</strong>`
        data.moves.forEach(pMove => {
            pokeMoves.innerHTML += `<li>${pMove.move.name}</li>`
        });

        //pokeTypes
        pokeTypes.innerHTML = `Type(s): `
        data.types.forEach(pTypes => {
            pokeTypes.innerHTML += `${pTypes.type.name} `
            pokeTypes.style.textTransform = "capitalize";
        })
    })
    .catch(err => console.log(err))
}

pokeName.style.textTransform = "capitalize";
pokeAbilities.style.textTransform = "capitalize";
pokeMoves.style.textTransform = "capitalize";