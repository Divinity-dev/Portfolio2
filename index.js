document.getElementById('open-bar').onclick = function open() {
  document.getElementById('menu-bar').classList.add('show');
  document.getElementById('open-bar').classList.add('close');
  document.getElementById('close-bar').classList.remove('close');
};

document.getElementById('close-bar').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle').onclick = function toggle() {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle1').onclick = function toggle1() {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle2').onclick = function toggle2() {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};
