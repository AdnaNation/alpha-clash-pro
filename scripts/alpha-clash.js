// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
    
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
     console.log('your random alphabet', alphabet)

    //  set randomly genarated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backgroundColor
    setBacgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}