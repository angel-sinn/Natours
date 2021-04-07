/* eslint-disable */

import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';

// DOM Elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');

// DELEGATION
if (mapBox) {
  // Get location info from HTML (tour.pug) under section-map
  const locations = JSON.parse(mapBox.dataset.locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
