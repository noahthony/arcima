

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
