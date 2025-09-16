let imgArr = []
let currentIndex = 0

function pickPic() {
    let file = document.getElementById('imageInp').files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener('load', (ev)=>{    
        let result = ev.target.result
        imgArr.push(result)
        displayCarousel()
    })
}

// function addImg() {
//     if (imgArr.length > 0) {
//         displayCarousel();
//     }
// }
displayCarousel()

function displayCarousel() {
    let img = document.getElementById('imgHold');
    // let carCon = document.getElementById('carouselContain')
    let carIndex = document.getElementById('carIndex');

    if (imgArr.length > 0) {
        img.src = imgArr[currentIndex];
        carIndex.innerHTML = `${currentIndex + 1} / ${imgArr.length}`;
    } else if(!imgArr.length){
        img.src = ''
        img.alt = 'No images yet'
    }

}

function prev() {
    if (imgArr.length === 0){
        return
    }
    currentIndex = (currentIndex - 1 + imgArr.length) % imgArr.length
    displayCarousel()
}

function next() {
    if (imgArr.length === 0){
        return
    }
    currentIndex = (currentIndex + 1) % imgArr.length
    displayCarousel()
}

