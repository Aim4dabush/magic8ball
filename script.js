//image sources
const source = [
    './images/magic8ball_1.png',
    './images/magic8ball_2.png',
    './images/magic8ball_3.png',
    './images/magic8ball_4.png',
    './images/magic8ball_5.png',
    './images/magic8ball_6.png',
    './images/magic8ball_7.png',
    './images/magic8ball_8.png',
    './images/magic8ball_9.png',
    './images/magic8ball_10.png',
    './images/magic8ball_11.png',
    './images/magic8ball_12.png',
    './images/magic8ball_13.png',
    './images/magic8ball_14.png',
    './images/magic8ball_15.png',
    './images/magic8ball_16.png',
    './images/magic8ball_17.png',
    './images/magic8ball_18.png',
    './images/magic8ball_19.png',
    './images/magic8ball_20.png'
]

//Generate random image source
function imageSource(){
    const magicEightBallSource = [...source];
    const randomSource = Math.floor(Math.random() * 21);
    const img = document.getElementById('eightBall');
    return img.src = magicEightBallSource[randomSource];
}

//Rest Image
function resetImage(){
    const img = document.getElementById('eightBall');
    return img.src = "./images/magic8ball_empty.png"
}

//Execute getting image and question when clicking the button
function askQuestion(){
    const text = document.getElementById('question').value;
    checkQuestion(text);
    document.getElementById('question').value = null
}

//Execute getting image and question when pressing enter
function enterPressEvent(key){
    if(key.keyCode === 13){
        askQuestion();
    }
}

//Check the text to see if it has a question mark or has numbers
function checkQuestion(question){
    const answer = document.getElementById('answer');
    const checkForNum = /^([^0-9]*)$/gm
    if(question.length === 0 || !checkForNum.test(question)){
        resetImage();
        return answer.innerText = "You didn't ask anything. Try again";
    }
    imageSource();
    
    if(question[question.length - 1] !== '?'){
        return answer.innerText = question + ' ?';
    }
    else{
        return answer.innerText = question;
    }
}








