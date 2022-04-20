const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }



$(document).on('click','#main', function(){
    $('#main-skills').show()
    $('#awards').hide() 
    $( '#experiences').hide(), 
    $('#education').hide()
    
})

$(document).on('click','#award', function(){
    $('#awards').show()
    $('#main-skills').hide() 
    $('#experiences').hide()
    $('#education').hide()
})


$(document).on('click','#experience', function(){
    $('#experiences').show()
    $('#awards').hide()
    $('#main-skills').hide() 
    $('#education').hide()
})

$(document).on('click','#edu', function(){
    $('#education').show()
    $('#awards').hide()
    $('#main-skills').hide() 
    $('#experiences').hide()
})





