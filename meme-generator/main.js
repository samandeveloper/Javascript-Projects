function update_text(){
    let user_text = document.getElementById("user_text");
    meme_text.innerHTML=user_text.value;

}

function update_image(){
    let img = document.querySelector("img");
    let file = document.querySelector("input[type=file]").files[0];
    img.src=URL.createObjectURL(file);
}