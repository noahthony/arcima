

// making each form appear according to the category selected
const navigationRow = document.querySelector(".card-row");
const navigationCards = document.querySelectorAll(".card")
const navigation = [
    {
        menu: document.querySelector(".contact-navigation .archviz"),
        form: document.querySelector(".archviz-form")
    },
    {
        menu: document.querySelector(".contact-navigation .web-app"),
        form: document.querySelector(".web-app-form")
    },
    {
        menu: document.querySelector(".contact-navigation .cinematic"),
        form: document.querySelector(".cinematic-form")
    },
    {
        menu: document.querySelector(".contact-navigation .product-showcase"),
        form: document.querySelector(".product-showcase-form")
    }
];



for(let i = 0, c = navigation.length; i < c; i++){
    navigation[i].menu.addEventListener('click', (e)=>{
        
        // keeping the menu being active bright and the others dim.
        if(navigation[i].menu.classList.contains('active') && navigation[i].menu !== e.target){
            navigation[i].menu.classList.add('inactive');
        }
        
        
        // display the corresponding form to the menu being clicked on 
        if(navigation[i].form.classList.contains('hide')){
            navigation[i].form.classList.toggle('hide');
            navigation[i].menu.classList.toggle('active')
        }
        for(let i = 0; i <  c; i++){
            if(navigation[i].menu !== e.target){
                navigation[i].menu.classList.remove('active');
                navigation[i].form.classList.add('hide');
                navigation[i].menu.classList.add('inactive');
            }
        }
    });
}

// 




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