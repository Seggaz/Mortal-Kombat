const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');



const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },

}


const player2 = {
    player: 2,
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },

}


function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div','progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div','life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
   
    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

   return $player;

};

function changeHp(player) {
    const randomValue = Math.ceil(Math.random()*20);
    $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp = (player.hp - randomValue)<0? 0 : (player.hp - randomValue);
	$playerLife.style.width = player.hp + '%';

	if(player.hp == 0){
		$arenas.appendChild(playerWin((player.player==1)?player2.name:player1.name));
		$player = document.querySelector('.player' + player.player + ' .character');

		$randomButton.disabled = true;
    }

}

// function playerLose(name) {
//     const $loseTitle = createElement('div', 'loseTitle');
//     $loseTitle.innerText = name + ' lose';

//      return $loseTitle;
//   }

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' Wins';

    return $winTitle;
}



$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHp(player1);
    changeHp(player2);
})
    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));


  

    

    


    
