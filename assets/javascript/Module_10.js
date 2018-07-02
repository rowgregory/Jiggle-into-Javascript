
var fadeOut = anime({
    targets: 'div.box1',
    opacity: {
        value: '0',
        easing: 'easeInOutSine',
    },
     autoplay: false
});
document.querySelector('#box .fadeOut').onclick = fadeOut.restart;


var fadeIn = anime({
    targets: 'div.box1',
    opacity: '0',
    easing: 'easeInOutSine',
    delay: function(target, index) {
        return index * 5000;
    },
    direction: 'reverse',
    autoplay:  false
});
document.querySelector('#box .fadeIn').onclick = fadeIn.restart;



var blue = anime({
    targets: 'div.box1',
    backgroundColor: '#0000ff',
    autoplay: false,
    });
document.querySelector('#box .blue').onclick = blue.restart;

var purple = anime({
    targets: 'div.box1',
    backgroundColor: '#800080',
    autoplay: false,
    });
document.querySelector('#box .purple').onclick = purple.restart;


var radius = anime({
    targets: 'div.box1',
    borderRadius: '75%', 
    autoplay: false,
    });
document.querySelector('#box .radius').onclick = radius.restart;


var grow = anime({
    targets: 'div.box1',
    scale: 1.7,
    autoplay: false
    });
document.querySelector('#box .grow').onclick = grow.restart;




var shrink = anime({
    targets: 'div.box1',
    scale: 0.4,
    autoplay: false
    });
document.querySelector('#box .shrink').onclick = shrink.restart;



var slide = anime({
    targets: 'div.box1',
    translateX: [
        { value: 800, duration: 3000, elasticity: 0 },
        ],
    translateY: [
        { value: 300, duration: 300,
            delay: 1000, elasticity: 0 },
        ],
    
    autoplay: false
    });
document.querySelector('#box .slide').onclick = slide.restart;




var rotate = anime({
    targets: 'div.box1',
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    autoplay: false
});
document.querySelector('#box .rotate').onclick = rotate.restart;


var rotateL = anime({
    targets: 'div.box1',
    rotate: {
        value: '-1turn',
        easing: 'easeInOutSine',
    },
    autoplay: false
});
document.querySelector('#box .rotateL').onclick = rotateL.restart;



var flip = anime({
    targets: 'div.box1',
    
    rotateY: 360,
    rotateZ: 360,
    duration: 2000,
    easing: 'easeInOutSine',
    
    autoplay: false
    });
document.querySelector('#box .flip').onclick = flip.restart;



var playPause = anime({
    targets: 'div.box1',
    translateY: [
        { value: 160, duration: 500},
        { value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    autoplay: false,
});
document.querySelector('#box .play').onclick = playPause.restart;
document.querySelector('#box .pause').onclick = playPause.pause;        
    


function myButton() {

    location.reload();
}

var stretch = anime({
    targets: 'div.box1',
    translateX: {
        value: '+-150',
        duration: 1000
    },
    backgroundColor: [
        {value: '#FFF'},
        {value: 'rgb(255, 0, 0)'},
        {value: 'hsl(100, 60%, 60%)'}
    ],
    easing: 'linear',
    direction: 'alternate',
    width: {
        value: '-=150',
        duration: 1800,
        easing: 'easeInOutSine'
    },
    height: {
        value: '*=2',
        duration: 1800,
        easing: 'easeInOutSine'
    },
    direction: 'alternate',
    autoplay: false

});
document.querySelector('#box .stretch').onclick = stretch.restart;