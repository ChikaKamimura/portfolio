console.log("script.js 読み込めました！");

// ふわふわ背景
const title = document.querySelector('.page-title');
const keyframes = {
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};
const options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};
title.animate(keyframes, options);

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.sp-menu');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});
