var vid = document.querySelector('#vid')
function ajustarIframe(){
    let larg = Number.parseInt(vid.clientWidth / 2)
    vid.style.height = larg + 'px'
}
window.setInterval('ajustarIframe()', 1000)