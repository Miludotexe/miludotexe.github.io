let tag1 = document.getElementsByClassName('customTag')[0]
tag1.innerText = '<name>'
tag1.style.color = 'rgb(216, 84, 103)'

let tag2 = document.getElementsByClassName('customTag')[1]
tag2.innerText = '</name>'
tag2.style.color = 'rgb(216, 84, 103)'

let visibleCursor = false
setInterval(() => {
    if (visibleCursor){
        document.getElementById('cursor').style.opacity = 0;
    } else {
        document.getElementById('cursor').style.opacity = 1;
    }
    visibleCursor = !visibleCursor
}, 500);