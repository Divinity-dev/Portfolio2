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

document.getElementById('toggle2').onclick = () => {
  document.getElementById('menu-bar').classList.remove('show');
  document.getElementById('open-bar').classList.remove('close');
  document.getElementById('close-bar').classList.add('close');
};

const projectprop = [
  {
    name: 'farmers summit',
    Description: 'This is a website for a farmers summit. A summit that brings together all the best hands in farming from both in and outside the country. It had workshops, tranings and several seminars.',
    URL: 'Images/farmers-summit.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://divinity-dev.github.io/Capstone-project/',
    source: 'https://github.com/Divinity-dev/Capstone-project',
  },

  {
    name: 'Budget App',
    Description: 'This is a mobile budget app that categorizes, plans and gives th total spending',
    URL: 'Images/budget\ app.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://budget-app-4qqw.onrender.com/',
    source: 'https://github.com/Divinity-dev/Budget-App',
  },
  {
    name: 'Bookshop',
    Description: 'This is a mobile app that displays a collection fo books from an API. Details about each book can be gotten by clicking on each book and there is a searh filter.',
    URL: 'Images/bookshop.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://bookhubs.onrender.com/',
    source: 'https://github.com/Divinity-dev/Bookshop',
  },
  {
    name: 'Reastaurant App',
    Description: 'This is an application that showcases a list of healthy meals to clients. A client could comment and like a meal.',
    URL: 'Images/restaurant.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://divinity-dev.github.io/Restaurant-app/dist/',
    source: 'https://github.com/Divinity-dev/Restaurant-app',
  },
  {
    name: 'To-do-list',
    Description: 'This is an app that helps to plan day to day activities and keep track of which activity has been executed. An activity could be remove or added based on whether it is completed.',
    URL: 'Images/To-do.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://divinity-dev.github.io/To-do-list/dist/',
    source: 'https://github.com/Divinity-dev/To-do-list',
  },
  {
    name: 'Bookstore App',
    Description: 'This is a simple portfolio website detailing  my skills, previous jobs and coding languages',
    URL: 'Images/Bookstore.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby on rails'],
    site: 'https://bookstore-9cvk.onrender.com',
    source: 'https://github.com/Divinity-dev/Bookstore',
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
  document.getElementById('paragragh').innerHTML = projectprop[0].Description;
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
  document.getElementById('pop').src = projectprop[0].URL;
  document.getElementById('h2').innerHTML = projectprop[0].name;
  document.getElementById('paragragh').innerHTML = projectprop[0].Description;
  document.getElementById('site').href = projectprop[0].site;
  document.getElementById('source').href = projectprop[0].source;
};

document.getElementById('card-btn1').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[1].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[1].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[1].technologies[4];
  document.getElementById('pop').src = projectprop[1].URL;
  document.getElementById('h2').innerHTML = projectprop[1].name;
  document.getElementById('paragragh').innerHTML = projectprop[1].Description;
  document.getElementById('site').href = projectprop[1].site;
  document.getElementById('source').href = projectprop[1].source;
};

document.getElementById('card-btn2').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[2].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[2].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[2].technologies[2];
  document.getElementById('pop').src = projectprop[2].URL;
  document.getElementById('h2').innerHTML = projectprop[2].name;
  document.getElementById('paragragh').innerHTML = projectprop[2].Description;
  document.getElementById('site').href = projectprop[2].site;
  document.getElementById('source').href = projectprop[2].source;
};

document.getElementById('card-btn3').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[3].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[3].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[3].technologies[2];
  document.getElementById('pop').src = projectprop[3].URL;
  document.getElementById('h2').innerHTML = projectprop[3].name;
  document.getElementById('paragragh').innerHTML = projectprop[3].Description;
  document.getElementById('site').href = projectprop[3].site;
  document.getElementById('source').href = projectprop[3].source;
};

document.getElementById('card-btn4').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[4].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[4].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[4].technologies[2];
  document.getElementById('pop').src = projectprop[4].URL;
  document.getElementById('h2').innerHTML = projectprop[4].name;
  document.getElementById('paragragh').innerHTML = projectprop[4].Description;
  document.getElementById('site').href = projectprop[4].site;
  document.getElementById('source').href = projectprop[4].source;
};

document.getElementById('card-btn5').onclick = () => {
  document.getElementById('pop-up').classList.add('star');
  document.getElementById('main').classList.add('blur');
  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = projectprop[5].technologies[0];
  document.getElementById('l2').innerHTML = projectprop[5].technologies[1];
  document.getElementById('l3').innerHTML = projectprop[5].technologies[2];
  document.getElementById('pop').src = projectprop[5].URL;
  document.getElementById('h2').innerHTML = projectprop[5].name;
  document.getElementById('paragragh').innerHTML = projectprop[5].Description;
  document.getElementById('site').href = projectprop[5].site;
  document.getElementById('source').href = projectprop[5].source;
};

document.getElementById('submit-form').onsubmit = (e) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = 'Email must be in lowercase';
  }
};
// localStorage
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Textmessage = document.getElementById('message');

let data = { name: '', email: '', message: '' };

const ToLocalStorage = () => {
  localStorage.setItem('Data', JSON.stringify(data));
};

Name.addEventListener('change', () => {
  data.name = Name.value;
  ToLocalStorage();
});
Email.addEventListener('change', () => {
  data.email = Email.value;
  ToLocalStorage();
});
Textmessage.addEventListener('change', () => {
  data.message = Textmessage.value;
  ToLocalStorage();
});

window.onload = () => {
  if (localStorage.getItem('Data') !== null) {
    data = JSON.parse(localStorage.getItem('Data'));
    Name.value = data.name;
    Email.value = data.email;
    Textmessage.value = data.message;
  }
};