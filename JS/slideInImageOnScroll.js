const images = document.querySelectorAll('.blogBody img');
let imagesDistance = [];
let i1 = images[0];

window.onload = () => {
    images.forEach(image=>{
        imagesDistance.push(image.getBoundingClientRect().top);
    })
}

document.addEventListener('scroll',trackScroll);

function trackScroll() {
    // images.forEach(image=>{
        currentlyScrolled = imagesDistance[0] - document.documentElement.clientHeight + i1.clientHeight / 2;
        // console.log(`the offset height of the first image is ${imagesDistance[0] - document.documentElement.clientHeight + i1.clientHeight / 2}`);
        let math = window.scrollY;
        // console.log(`the currently scrolled is ${math}`);
        if(math > currentlyScrolled){
            i1.parentElement.classList.remove('float-right');
            i1.parentElement.classList.add('slide_in');
        }
         
        if(imagesDistance[0]+i1.clientHeight > window.scrollY+document.documentElement.clientHeight){
            console.log('now');
            i1.parentElement.classList.add('float-right');
            i1.parentElement.classList.remove('slide_in');
        }


        if(window.scrollY+document.documentElement.clientHeight+10 > imagesDistance[0]+i1.clientHeight+document.documentElement.clientHeight){
            i1.parentElement.classList.add('float-right');
            i1.parentElement.classList.remove('slide_in');
        }
    // })
}