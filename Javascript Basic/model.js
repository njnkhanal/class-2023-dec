// listener
document.getElementById('clickOpenMdl').addEventListener('click', function(){
    document.getElementById('openMdlOC').className += ' show';
})
// close model
document.getElementById('skipMdl').addEventListener('click', function(){
    document.getElementById('openMdlOC').className = 'model-container';
})

// auto close after 2sec
setInterval(() => {
    document.getElementById('openMdlOC').className = 'model-container';
}, 2000); // 1s = 1000ms
