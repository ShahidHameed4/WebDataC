let data =[];
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history',{
        headers:{
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        DisplayQuestion(data);
        document.getElementById("btn").addEventListener("click", ()=>{
            calculateScore(data);
        })
    })
    .catch(error => console.log(error));



});

function displayQ(data,i){
    let form = document.getElementById('quiz');
    let carddiv =document.createElement('div');
    carddiv.setAttribute('class','card');
    carddiv.classList.add('card');
    h3 = document.createElement('h3');
    h3.innerText = "Question "+(i+1);
    p = document.createElement('p');
    p.innerText = data.question;
    // let optionDiv = document.createElement('div');
    // optionDiv.setAttribute('class','options');
    // optionDiv.classList.add('options');

    carddiv.appendChild(h3);
    carddiv.appendChild(p);
    let optionDiv = document.createElement('div');
    optionDiv.setAttribute('class','options');
    optionDiv.classList.add('options');
    let answer = data.correctAnswer;
    let correctAnswerId = parseInt((Math.random()*10)%4);
        console.log(correctAnswerId);
    for(let j=0; j<4; j++){

        let div1= document.createElement('div');


        let input = document.createElement('input');
        input.setAttribute('type','radio');
        input.setAttribute('name','question'+(i+1));
        input.setAttribute('value',j);
        let label = document.createElement('label');
        
        if(correctAnswerId== j && j!=3){
            label.innerText = answer;
            answer = data.incorrectAnswers[j];
        }
    
        else if(j==3){
            label.innerText = answer;

        }
        else{
            label.innerText = data.incorrectAnswers[j];
        }
        div1.appendChild(input);
        div1.appendChild(label);
        optionDiv.appendChild(div1);
    }


    carddiv.appendChild(optionDiv);




    form.appendChild(carddiv);
   


}


function calculateScore(data) {

    let totalScore = 0;

    for (let i = 0; i < data.length; i++) {
        let selectedOption = document.querySelector(`input[name=q${i}]:checked`);
        if (selectedOption) {
            let selectedAnswer = selectedOption.value;
            let correctAnswer = data[i].correctAnswer;
            if (selectedAnswer === correctAnswer) {
                totalScore++;
            }
        }
    }

    console.log("Total Score: " + totalScore);

}
