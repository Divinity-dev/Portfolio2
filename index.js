/* eslint-disable func-names */
document.getElementById('open-bar').onclick = function () {
  document.getElementById('menu-bar').classList.add('show');
  document.getElementById('open-bar').classList.add('close');
  document.getElementById('close-bar').classList.remove('close');
};

// eslint-disable-next-line func-names
document.getElementById('close-bar').onclick = function () {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

// eslint-disable-next-line func-names
document.getElementById('toggle').onclick = function () {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle1').onclick = function () {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle2').onclick = function () {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};
