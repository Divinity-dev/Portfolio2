/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-destructuring */
document.getElementById('open-bar').onclick = () => {
  document.getElementById('menu-bar').classList.add('show');
  document.getElementById('open-bar').classList.add('close');
  document.getElementById('close-bar').classList.remove('close');
};

document.getElementById('close-bar').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle1').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle1').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

document.getElementById('toggle2').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

const projectprop = [
  {
    name: 'My portfolio',
    Description: 'This is a simple portfolio website detailing  my skills, previous jobs and coding languages',
    URL: 'Images/Img Placeholder.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://divinity-dev.github.io/Portfolio2/',
    source: 'https://github.com/Divinity-dev/Portfolio2',
  },

  {
    name: 'My portfolio',
    Description: 'This is a simple portfolio website detailing  my skills, previous jobs and coding languages',
    URL: 'Images/bkg1.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://divinity-dev.github.io/Portfolio2/',
    source: 'https://github.com/Divinity-dev/Portfolio2',
  }];

document.getElementById('portfolio-btn').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[0].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[0].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[0].technologies[2];
  document.getElementById('pop').src = projectprop[0].URL;
  document.getElementById('h2').innerHTML = projectprop[0].name;
  document.getElementById('site').href = projectprop[0].site;
  document.getElementById('source').href = projectprop[0].source;
};

document.getElementById('close-page').onclick = () => {
  document.getElementById('pop-up').classList.remove('star');
  document.getElementById('main').classList.remove('blur');
  document.getElementById('Portfolio').classList.remove('blur');
  document.getElementById('About').classList.remove('blur');
  document.getElementById('Contact').classList.remove('blur');
};

document.getElementById('card-btn').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[1].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[1].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[1].technologies[2];
  document.getElementById('pop').src = projectprop[1].URL;
  document.getElementById('h2').innerHTML = projectprop[1].name;
  document.getElementById('site').href = projectprop[1].site;
  document.getElementById('source').href = projectprop[1].source;
};

document.getElementById('submit-form').onsubmit = (e) => {
  const email = document.getElementById('name').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = 'Email must be in lowercase';
  }
};
