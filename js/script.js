
// page bottom
function appendBottom () {$("body").append(
        "<div id=\"bottom\"><p>GAMES&ensp;·&ensp;<a href='/thy-flesh-td'>THY FLESH TD</a>&ensp;·&ensp;<a href='/digaway'>DIGAWAY</a>&ensp;·&ensp;<a href='/prism-crush'>PRISM CRUSH</a></p><p>LINKS&ensp;·&ensp;<a href=\"javascript:alert('Soon!');\">STEAM</a>&ensp;·&ensp;<a href='https://itunes.apple.com/us/developer/aleksandr-muromtsev/id1021751735'>APP STORE</a>&ensp;·&ensp;<a href='https://play.google.com/store/apps/developer?id=mavirtual'>GOOGLE PLAY</a>&ensp;·&ensp;<a href='https://discord.gg/ea6wbpDjhX'>DISCORD</a></p><p>COPYRIGHT&ensp;©&ensp;"+new Date().getFullYear()+"&ensp;·&ensp;MAVIRTUAL&ensp;·&ensp;ALEKSANDR MUROMTSEV</p></div>"
    );}

// page top
function appendTop (appendGame = true ) {
    $("body").append(        "<div id=\"header\"><a id=\"logo\" href=\"/\"></a></div>"    );
    if (appendGame) $("body").append(        "<div id=\"game\" style=\"background-image: url('logo.png'), url('bg.png');\"></div>"    );

}

// init modal images
function initModals () {
    const images = document.querySelectorAll(".imageGrid img");
    let imgSrc;
    images.forEach((img) => {        img.addEventListener("click", (e) => {            imgSrc = e.target.src;            imgModal(imgSrc);        });    });
}

// showing the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector("body").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.onclick = () => { modal.remove(); };
    modal.append(newImage);
};

