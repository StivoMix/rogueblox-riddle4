function launchRogueblox() {
  const bootScreen = document.getElementById('bootScreen');
  const gameContainer = document.getElementById('gameContainer');
  const gameplayVideo = document.getElementById('gameplay-video');

  bootScreen.style.display = 'none';
  gameContainer.style.display = 'block';

  gameplayVideo.src = "https://streamable.com/e/kx0dis?autoplay=1&nocontrols=1";
}