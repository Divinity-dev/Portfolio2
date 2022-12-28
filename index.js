document.getElementById('open-bar').onclick = function() {
    document.getElementById('menu-bar').classList.add('show')
    document.getElementById('open-bar').classList.add('close');
    document.getElementById('close-bar').classList.remove('close');
    // document.getElementById('navi').classList.add('navi');
    
}

document.getElementById('close-bar').onclick = function(){
    document.getElementById('menu-bar').classList.remove('show')
    document.getElementById('open-bar').classList.remove('close');
    document.getElementById('close-bar').classList.add('close');
    // document.getElementById('navi').classList.remove('navi');
}

document.getElementById('toggle').onclick=function(){
  document.getElementById('menu-bar').classList.remove('show');
  // document.getElementById('navi').classList.remove('navi');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};