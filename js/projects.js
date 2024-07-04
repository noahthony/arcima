



// getting all the necessary menu items


const projectNavigationItems = document.querySelectorAll('.project-navigation > div');
const projectNavigation = document.querySelector('.project-navigation');

for( let i = 0, c = projectNavigationItems.length, gridAtStart = 2, gridAtEnd = 6; i < c; i++){
    projectNavigationItems[i].addEventListener('mousemove', (e)=> {
        switch(i){
            case i=0:
                // projectNavigationItems[i+1].style = 'grid-column:'+ (gridAtEnd + i) + '/ span 4;'
                projectNavigation.style = 'grid-template-columns: 400px repeat(11, 100px)';
        }
        
    });
    projectNavigationItems[i].addEventListener('mouseout', (e)=> {
        switch(i){
            case i=0:
                projectNavigation.style= 'grid-template-columns: repeat(12, 100px);'
        }
        
    })
}