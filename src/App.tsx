import { useState } from 'react';
import './App.css';

import Texts from './texts.json'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const pages = {
  Home: Home,
  About: About,
  Contact: Contact,
}
type Page = keyof typeof pages;
type Language = keyof typeof Texts;
export type PageProps = Readonly<typeof Texts[Language]>;

export default function App() {
  const [requestedPage, setRequestedPage] = useState<Page>('Home');
  const [language, setLanguage] = useState<Language>('english');
  const texts = Texts[language];

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="title">
            <h1>Taraxtix</h1>
          </div>
        </div>
        <div className="buttons">
          <div className="language-select">
            <button onClick={() => setLanguage('french')}>🇫🇷</button>
            <button onClick={() => setLanguage('english')}>🇬🇧</button>
          </div>
          <button className="home" onClick={() => alert("Home")}>
            <img src='assets/home.svg' alt='Home'></img>
          </button>
        </div>
      </header>
      <div className="page-content"></div>
    </div>
  );
}