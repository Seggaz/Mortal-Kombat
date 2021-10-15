let player1 = {
    name: 'Scorpion',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword'],
    attack: function() {
        console.log(player1.name +'Fight...')
    }

};

player1.attack();

let player2 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword'],
    attack: function() {
        console.log(player2.name +'Fight...')
    }

};

player2.attack();

function createPlayer(player, namePlayer, hp) {
    let $player1 = document.createElement('div');
    $player1.classList.add(player);

    let $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    let $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + '%';

    let $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = namePlayer.name;


    let $character = document.createElement('div');
    $character.classList.add('character');

    let $img = document.createElement('img');
    $img.src = namePlayer.img;

    let $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    
};
    createPlayer('player1', player1);
    createPlayer('player2', player2);
