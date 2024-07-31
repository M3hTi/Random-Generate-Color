let countsOfDiv = 9
// to create div elemenet with box class in js
for(let i = 0; i < countsOfDiv ; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box)
    box.addEventListener('click' , ()=>{
        navigator.clipboard.writeText(box.innerHTML);
        // console.dir(toastr)
        toastr.success('you can use it Now!', 'Copied To Clipboard', {timeOut: 4000})
    })
}
















// select all divs with class box
const boxElements = document.querySelectorAll('.box')
// console.dir(boxElement);


// create a function to get random color
const getRandomColor = function () {
    const letters = '0123456789abcdef'
    const colorLength = 6;
    let color = '#'
    for (let index = 0; index < colorLength; index++) {
        color += letters[Math.floor(Math.random() * letters.length)] 
    }
    return color;
}


// create a function to show color
const showColor = function () {
    boxElements.forEach(boxElement => {
        // console.dir(boxElement);
        const newColor = getRandomColor();
        boxElement.innerHTML = newColor;
        boxElement.style.backgroundColor = newColor;
    })
}

// call the function to show color
window.onload = showColor;