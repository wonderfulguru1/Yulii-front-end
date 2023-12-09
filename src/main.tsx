import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from "react-router-dom";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../src/locales/en/en.json"
import fr from "../src/locales/fr/fr.json"
import { Provider } from 'react-redux';
import store from './redux/store.ts';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
        <App />
        </Provider >
    </HashRouter>
  </React.StrictMode>,
)
