// getting the elements of the form that needs changes

const inputQuestion = document.querySelectorAll('.project-info span[help]');


for(let i = 0, c = inputQuestion.length; i < c; i++){
    inputQuestion[i].addEventListener('mouseover', (e)=> {
        e.target.firstElementChild.style = 'display: block';
    });

    inputQuestion[i].addEventListener('mouseout', (e)=> {
        e.target.firstElementChild.style = 'display: none';
    });
}