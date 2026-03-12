document.addEventListener("DOMContentLoaded", () => {
    // 1. List your image filenames here
    const images = [
        "f22_sippy.png",
        "kurt_cobain.png",
        "amongus.png",
        "jack_newkirk_squadron.png",
        "skimmer.png"
    ];

    // 2. Select a random image from the list
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 3. Apply it to the body style
    // We assume the images are in the "img/" folder relative to the HTML
    document.body.style.backgroundImage = `url('img/${randomImage}')`;
});