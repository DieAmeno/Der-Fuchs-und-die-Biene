let currentIndexes = [0, 0, 0, 0, 0, 0];
let currentVideoIndex = 0;

function showSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    const items = slider.getElementsByTagName('img');
    const totalSlides = items.length;
    const sliderIndex = parseInt(sliderId.replace('slider', '')) - 1;

    index = (index + totalSlides) % totalSlides;
    currentIndexes[sliderIndex] = index;

    Array.from(items).forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) item.classList.add('active');
    });

    updateButtonStates(sliderId);
}

function nextSlide(sliderId) {
    const sliderIndex = parseInt(sliderId.replace('slider', '')) - 1;
    showSlide(sliderId, currentIndexes[sliderIndex] + 1);
}

function prevSlide(sliderId) {
    const sliderIndex = parseInt(sliderId.replace('slider', '')) - 1;
    showSlide(sliderId, currentIndexes[sliderIndex] - 1);
}

function updateButtonStates(sliderId) {
    const sliderIndex = parseInt(sliderId.replace('slider', '')) - 1;
    const prevBtn = document.getElementById(`prevBtn${sliderIndex + 1}`);
    const nextBtn = document.getElementById(`nextBtn${sliderIndex + 1}`);

    const totalSlides = document.getElementById(sliderId).getElementsByTagName('img').length;
    const currentIndex = currentIndexes[sliderIndex];

    prevBtn.classList.toggle('disabled', currentIndex === 0);
    nextBtn.classList.toggle('disabled', currentIndex === totalSlides - 1);
}

function toggleFullscreenImage(img) {
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = img.src;
    modal.style.display = 'flex';
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.style.display = 'none';
}

function showVideo(index) {
    const videos = document.getElementById('videoSlider').getElementsByTagName('video');
    const totalVideos = videos.length;

    index = (index + totalVideos) % totalVideos;
    currentVideoIndex = index;

    Array.from(videos).forEach((video, i) => {
        video.classList.remove('active');
        if (i === index) video.classList.add('active');
    });

    updateVideoButtonStates();
}

function nextVideo() {
    showVideo(currentVideoIndex + 1);
}

function prevVideo() {
    showVideo(currentVideoIndex - 1);
}

function updateVideoButtonStates() {
    const prevBtn = document.getElementById('prevVideoBtn');
    const nextBtn = document.getElementById('nextVideoBtn');

    const totalVideos = document.getElementById('videoSlider').getElementsByTagName('video').length;

    prevBtn.classList.toggle('disabled', currentVideoIndex === 0);
    nextBtn.classList.toggle('disabled', currentVideoIndex === totalVideos - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 6; i++) {
        showSlide(`slider${i}`, currentIndexes[i - 1]);
    }
    showVideo(currentVideoIndex);
});
