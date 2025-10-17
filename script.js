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
    let lang_object = text[lang[i].id];
    let lang_item = lang_object[language];

    if (lang[i].id.endsWith('-Details')) {
      lang[i].innerHTML = '';
      let details = lang_item.split('#');
      for (let j = 0; j < details.length; j++) {
        lang[i].appendChild(document.createElement('li')).innerHTML =
            details[j];
      }
      continue;
    }

    children = [...lang[i].children];
    lang[i].innerHTML = lang_item;
    for (let j = 0; j < children.length; j++) {
      lang[i].appendChild(children[j]);
    }
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