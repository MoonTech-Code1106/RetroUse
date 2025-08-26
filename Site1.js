const bg = document.getElementById('bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollRatio = scrollY / maxScroll;

  const angle = 180 - (scrollRatio * 180);
  bg.style.background = `linear-gradient(${angle}deg, #eea539, #ffffff, #91ea99)`;
});
