window.addEventListener('load', () => {
  // Wait 3 seconds then hide splash screen
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3000); // 3000ms = 3 seconds
});
