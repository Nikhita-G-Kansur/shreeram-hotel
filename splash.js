window.addEventListener('load', () => {

  // If splash has already shown in this browser session
  if (sessionStorage.getItem('splashShown')) {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    return;
  }

  // First time in this visit → show splash
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Mark as shown for this session
    sessionStorage.setItem('splashShown', 'true');

  }, 3000); // duration of splash
});
