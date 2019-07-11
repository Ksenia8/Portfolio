const parallax = document.querySelector(".parallax");
const layers = parallax.children;
const layersToExclude = [0,1,2,3,4,5,6];

function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach((layer,layerIndex) => {
        const strafe = `${wScroll / (-layerIndex * 40)}%`
        
        if (layersToExclude.includes(layerIndex) === false) {
            layer.getElementsByClassName.transform = `translateY(${strafe})`;
        }
    });
}

const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
    window.addEventListener("scroll", e => {
        const wScroll = window.pageYOffset;
        moveLayersDependsOnScroll(wScroll);
    });
}



