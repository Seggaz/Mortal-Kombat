const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword'],
    attack: function() {
        console.log(player1.name +'Fight...')
    }

};

const player2 = {
    name: 'Subzero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword'],
    attack: function() {
        console.log(player2.name +'Fight...')
    }

};

function createPlayer(player, name, hp) {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player1.name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('div');
    $img.src = player1.img;

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);

    createPlayer('player1', 'Scorpion', 50);
    createPlayer('player2', 'Subzero', 80);

    



    

    


    
}