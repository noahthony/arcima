

function stretchElement(element){

}
function shortenElement(element){}

// getting all the necessary menu items


const projectNavigationItems = document.querySelectorAll('.project-navigation > div');
const projectNavigation = document.querySelector('.project-navigation');

const menu = [
    {
        element: document.querySelector('.archviz'),
        section: document.querySelector('.archviz-section'),
        position: 0
    },
    {
        element: document.querySelector('.web-app'),
        section: document.querySelector('.web-app-section'),
        position: 100
    },
    {
        element: document.querySelector('.cinematic'),
        section: document.querySelector('.cinematic-section'),
        position: 200
    },
    {
        element: document.querySelector('.showcase'),
        section: document.querySelector('.showcase-section'),
        position: 300
    }
]

for(let i = 0, c = menu.length; i < c; i++){
    menu[i].element.addEventListener('mousedown',(e)=>{
       
        // check for any node that isn't same as the target and disabling active mode
        for(let a = 0; a<c; a++){

            menu[i].element.setAttribute('active', 'true');
            menu[i].element.firstElementChild.setAttribute('active', 'true');
            menu[i].section.classList.remove('hide');
            if(menu[a].element.isSameNode(e.target) === false){
                menu[a].element.setAttribute('active', 'false');
                menu[a].element.firstElementChild.setAttribute('active', 'false');
                menu[a].section.classList.add('hide');
                
            }
        }
        // pushes the other element forward
        for(let j = i+1; j < c; j++){
            menu[j].element.style = 'left:' + ((j*100)+400) + 'px;';
        }
        // reset the element back in place
        for(let k = i; k >= 0; k--){
            menu[k].element.style = 'left:' + ((k*100)) + 'px;';
        }
    });
}

// corresponding sections to be displayed or hidden


// const smaller = "clip-path: path('M 0 500 L 300 0 L 400 0 L 100 500 L 0 500'); width: ";
// const bigger = "clip-path: path('M 0 500 L 300 0 L 800 0 L 500 500 L 0 500');"
// window.addEventListener('click', (e)=>{
//     if(!archviz.classList.contains('active')){
//         archviz.style
//     }
// })
// archviz menu

// archviz.addEventListener('mouseover', (e)=>{
//     webApp.style = 'left: '+ (100+400)+'px;';
//     cinematic.style = 'left: '+ (200+400)+'px;';
//     showcase.style = 'left: '+ (300+400)+'px;';
// });

// archviz.addEventListener('mouseout', (e)=>{
//     webApp.style = 'left: '+ (100)+'px;';
//     cinematic.style = 'left: '+ (200)+'px;';
//     showcase.style = 'left: '+ (300)+'px;';
// });

// archviz.addEventListener('mousedown',(e)=>{
    

    
    // archviz.setAttribute('active', 'true')
    // webApp.style = 'left: '+ (100+400)+'px;';
    // cinematic.style = 'left: '+ (200+400)+'px;';
    // showcase.style = 'left: '+ (300+400)+'px;';



//     archvizSection.classList.remove('hide');
//     webAppSection.classList.add('hide');
//     cinematicSection.classList.add('hide');
//     showcaseSection.classList.add('hide');
    
    
// });

// web app  menu 


// webApp.addEventListener('mousedown',(e)=>{

    // webApp.classList.add('active');
    // cinematic.style = 'left: '+ (200+400)+'px;'
    // showcase.style = 'left: '+ (300+400)+'px;'


//     archvizSection.classList.add('hide');
//     webAppSection.classList.remove('hide');
//     cinematicSection.classList.add('hide');
//     showcaseSection.classList.add('hide');
    
    
// });


// cinematic menu

// cinematic.addEventListener('mouseover', (e)=>{
    // showcase.style = 'left: '+ (300+400)+'px;'
// });
// cinematic.addEventListener('mouseout', (e)=>{
    // showcase.style = 'left: '+ (300)+'px;'
// });
// archviz.addEventListener('mousedown',(e)=>{
    // archvizSection.classList.remove('hide');
//     webAppSection.classList.add('hide');
//     cinematicSection.classList.add('hide');
//     showcaseSection.classList.add('hide');
// });


// showcase.addEventListener('mousedown',(e)=>{
//     archviz.setAttribute('active', 'false');
//     webApp.setAttribute('active', 'false');
//     cinematic.setAttribute('active', 'false');
//     showcase.setAttribute('active', 'true');
    
//     archvizSection.classList.add('hide');
//     webAppSection.classList.add('hide');
//     cinematicSection.classList.add('hide');
//     showcaseSection.classList.remove('hide');
    
    
// });

