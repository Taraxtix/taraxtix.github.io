async function fill_text(text) {
  lang = document.getElementsByClassName('lang');

  for (let i = 0; i < lang.length; i++) {
    lang[i].innerHTML = text[lang[i].id].fr;
  }
}

function fill_age() {
  now = new Date();
  age = now.getFullYear() - 2002;

  if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDay() < 13)) age--;

  document.getElementById('Age').innerHTML = 'Age: ' + age;
}

text = fetch('text.json').then(res => res.json());

window.onload = init;
async function init() {
  fill_age();
  fill_text(await text);
}