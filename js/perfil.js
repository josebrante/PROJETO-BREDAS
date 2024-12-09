
function scrollCarousel(button, direction) {
    const wrapper = button.parentElement.querySelector('.card-container');
    const cardWidth = wrapper.querySelector('.card').offsetWidth;
    const scrollAmount = cardWidth + 20; // 20 é a margem entre os cards

    wrapper.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}
