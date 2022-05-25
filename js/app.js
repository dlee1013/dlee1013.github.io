fetch("https://api.github.com/users/dlee1013")
.then(response => response.json())
.then(data => {
    display_image(data.avatar_url);
    display_bio(data.bio);
    display_hireable(data.is_hireable);
})

function display_image(image_url){
    document.getElementById("image").src = image_url;
}

function display_bio(bio){
    document.getElementById("bio").innerHTML = bio;
}

function display_hireable(hireable){
    if(!hireable){
        document.getElementById("hireable_status").innerHTML = "Hireable <i class='fa fa-check' aria-hidden='true'></i> ";
    }else{
        document.getElementById("hireable_status").innerHTML = hireable;
    }
}

//smooth scroll
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});