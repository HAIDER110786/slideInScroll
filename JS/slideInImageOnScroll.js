const images = document.querySelectorAll('.blogBody img');
let imagesDistance = [];
let i1 = images[0];

window.onload = () => {
    images.forEach(image=>{
        imagesDistance.push(image.getBoundingClientRect().top);
    })
}

document.addEventListener('scroll',trackScroll);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function trackScroll() {
    for (let i = 0; i < images.length; i++) {
        const scrolledToHalfImage = imagesDistance[i] - document.documentElement.clientHeight + images[i].clientHeight / 2;

        if(window.scrollY > scrolledToHalfImage && window.scrollY < (scrolledToHalfImage + images[i].clientHeight / 2) + document.documentElement.clientHeight -10){
            i % 2 == 0 ? ( 
                images[i].parentElement.classList.remove('float-right')
            ) : (
                images[i].parentElement.classList.remove('float-left') 
            );

            images[i].parentElement.classList.add('slide_in')
        }
        
        if(window.scrollY > (scrolledToHalfImage + images[i].clientHeight / 2) + document.documentElement.clientHeight -10){
            i % 2 == 0 ? ( 
                images[i].parentElement.classList.add('float-right')
            ) : (
                images[i].parentElement.classList.add('float-left') 
            );

            images[i].parentElement.classList.remove('slide_in')
        }
    
        if(window.scrollY + document.documentElement.clientHeight < imagesDistance[i]+60){
            i % 2 == 0 ? ( 
                images[i].parentElement.classList.add('float-right')
            ) : (
                images[i].parentElement.classList.add('float-left') 
            );

            images[i].parentElement.classList.remove('slide_in')
        }
    }
}