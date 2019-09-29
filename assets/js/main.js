document.getElementById("learnMore").addEventListener("click", displayDetails);
document.getElementById("close").addEventListener("click", hideDetails);



function displayDetails(){
    document.getElementById("shellAlt").classList.remove("not-visible");
    document.getElementById("shell").classList.add("shell-animation");

    setTimeout(showDetailsContent, 1000);
    setTimeout(reinitAnimation, 2000);
}

function showDetailsContent(){
    document.getElementById("shell").classList.add("shell-hidden");
    document.getElementById("close").classList.remove("hidden");
    document.getElementById("subtitle").classList.add("product-subtitle-alt");
    document.getElementById("image").classList.add("product-image-alt");
    document.getElementById("price").classList.add("product-price-alt");
    document.getElementById("description").classList.remove("hidden");
    document.getElementById("learnMore").classList.add("hidden");
    document.getElementById("buyNow").classList.remove("hidden");
}

function hideDetails(){
    document.getElementById("shellAlt").classList.add("not-visible");
    document.getElementById("shell").classList.add("shell-animation");

    setTimeout(hideDetailsContent, 1000);
    setTimeout(reinitAnimation, 2000);
}

function hideDetailsContent(){
    document.getElementById("shell").classList.remove("shell-hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("subtitle").classList.remove("product-subtitle-alt");
    document.getElementById("image").classList.remove("product-image-alt");
    document.getElementById("price").classList.remove("product-price-alt");
    document.getElementById("description").classList.add("hidden");
    document.getElementById("learnMore").classList.remove("hidden");
    document.getElementById("buyNow").classList.add("hidden");
}

function reinitAnimation(){
    document.getElementById("shell").classList.remove("shell-animation");
}