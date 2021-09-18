const slideit = () => {
  let slide = setTimeout(function () {
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = document.querySelectorAll('#cardBox');
    slider.forEach(
      slider => {
        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2.5; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
          // console.log(walk);
        });
        window.clearTimeout(slide);
      }, 1000);
      }
    )
}
window.onload = slideit;
// export default slideit();
export default slideit;