document.addEventListener("DOMContentLoaded", function () {
const checkbox = document.getElementById("myonoffswitch");
const images = document.querySelectorAll("#image-effect-2 img");

updateImage();

//cong tac
checkbox.addEventListener("change", updateImage);
function updateImage() {
    if (checkbox.checked) {
        //on 
        images[0].src = "Images/on.png"; 
        images[1].src = "Images/off.png";
    } else {
        //off
        images[0].src = "Images/off.png";
        images[1].src = "Images/on.png";
    }
}
});