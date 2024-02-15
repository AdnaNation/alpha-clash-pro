// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
    
// }

function handleKeyboardKeyUpEvent (event){
    const playerPressed = event.key;
    console.log(playerPressed);
    console.log('player pressed', playerPressed)
    if(playerPressed === 'Escape'){
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        removeBacgroundColorById(expectedAlphabet);
        continueGame();

        const currentScoreElement = document.getElementById('current-score')
       const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScoreText);
        const currentScore = parseInt(currentScoreText);
        // console.log(typeof currentScore);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        // console.log(currentScoreElement.innerText)
    }
    else{
        console.log('you missed. you lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if (newLife ===0){
           gameOver();
        }
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

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
    hideElementById('final-score')
    showElementById('play-ground');
    
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore );

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBacgroundColorById(currentAlphabet);
    
}