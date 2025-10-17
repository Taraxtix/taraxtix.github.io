let language = navigator.language || navigator.userLanguage;
if (language.startsWith('fr')) {
  language = 'fr';
} else {
  language = 'en';
}

async function setLanguage(lang) {
  language = lang;
  fill_text(await text);
}

function fill_text(text) {
  lang = document.getElementsByClassName('lang');

  for (let i = 0; i < lang.length; i++) {
    let lang_item = text[lang[i].id];
    if (language == 'fr')
      lang[i].innerHTML = lang_item.fr;
    else
      lang[i].innerHTML = lang_item.en;
  }
}

function fill_age() {
  now = new Date();
  age = now.getFullYear() - 2002;

  if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDay() < 13)) age--;

  document.getElementById('Age').innerHTML = 'Age: ' + age;
}

text = fetch('text.json').then(res => res.json()).then(json => json);

window.onload = init;
async function init() {
  fill_age();
  fill_text(await text);
}