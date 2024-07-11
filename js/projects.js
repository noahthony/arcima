



// getting all the necessary menu items


const projectNavigationItems = document.querySelectorAll('.project-navigation > div');
const projectNavigation = document.querySelector('.project-navigation');



const archviz = document.querySelector('.archviz');
const webApp = document.querySelector('.web-app');
const cinematic = document.querySelector('.cinematic');
const showcase = document.querySelector('.showcase');

// archviz menu

archviz.addEventListener('mouseover', (e)=>{
    webApp.style = 'left: '+ (100+400)+'px;';
    cinematic.style = 'left: '+ (200+400)+'px;'
    showcase.style = 'left: '+ (300+400)+'px;'
});

archviz.addEventListener('mouseout', (e)=>{
    webApp.style = 'left: '+ (100)+'px;';
    cinematic.style = 'left: '+ (200)+'px;'
    showcase.style = 'left: '+ (300)+'px;'
});

// web app  menu 

webApp.addEventListener('mouseover', (e)=>{
    cinematic.style = 'left: '+ (200+400)+'px;'
    showcase.style = 'left: '+ (300+400)+'px;'
});
webApp.addEventListener('mouseout', (e)=>{
    cinematic.style = 'left: '+ (200)+'px;'
    showcase.style = 'left: '+ (300)+'px;'
});


// cinematic menu

cinematic.addEventListener('mouseover', (e)=>{
    showcase.style = 'left: '+ (300+400)+'px;'
});
cinematic.addEventListener('mouseout', (e)=>{
    showcase.style = 'left: '+ (300)+'px;'
});

