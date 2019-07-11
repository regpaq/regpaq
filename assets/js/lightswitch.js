/*******************************************************************************

LIGHTSWITCH: A DARK MODE SWITCHER WITH USER OVERRIDE

Originally By Nick Punt 10/26/2018

How to use:
  1.  Create two data theme sets with CSS Variables 'light' and 'dark' such as:
      html[data-theme="light"] {
        --color-text: #000;
      }
      html[data-theme="dark"] {
        --color-text: #fff;
      }
  2.  Use the same variable but with different values in each color theme. In your
      CSS, set color declarations with your CSS variables. Example:
      p {
        color: var(--color-text);
      }
  3.  Add the attribute `data-theme="light"` (or dark) to your `<html>` element
      as your default color theme.
  4.  Add `onclick="handleThemeUpdate()"` attribute to the element you want to
      trigger the color theme switch.
  5.  Link to this .js file or add inline in your `<head>` to avoid
      flashing/flickering of your default color theme as much as possible when
      user is using an alternate.

Logic:
  1. When user hits page for first time, color scheme is based on OS/browser
     (if supported), otherwise it defaults to the body class you added
  2. When user clicks lightswitch to override colors, their preference is stored
  3. When user alters their OS light/dark mode, switch to dark if dark mode,
     and light if light mode
     
Note:
The 'prefers-color-scheme' css support is currently only available in Safari 
Technology Preview 68. 

*******************************************************************************/

// New prefers-color-scheme media query to detect OS light/dark mode setting
var prefers_light = window.matchMedia('(prefers-color-scheme: light)')
var prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')
var root = document.documentElement

// Change to dark
function darkmode() {
  root.setAttribute('data-theme', 'dark');
}

// Change to light
function lightmode() {;  
  root.setAttribute('data-theme', 'light');
}

// Initialization triggers light/dark mode based on prior preference, then OS setting
if(localStorage.getItem("mode")=="dark") {
  darkmode();
} else if(localStorage.getItem("mode")=="light") {
  lightmode();
} else if(prefers_light.matches) {
  lightmode();
} else if(prefers_dark.matches) {
  darkmode();
}

// Fires when user clicks light/dark mode switch in top right
function handleThemeUpdate() {
  if (localStorage.getItem('mode')=="light") {
    darkmode();
    localStorage.setItem('mode', 'dark');
  } else {
    lightmode();
    localStorage.setItem('mode', 'light');
  }
}

// Runs when OS changes light/dark mode. Changes only if you were on default
// color state (light on light mode, dark on dark mode).
function OSColorChange() {
  if (prefers_light.matches) {
    lightmode();
    localStorage.setItem("mode", "light");
  } else if (prefers_dark.matches) {
    darkmode();
    localStorage.setItem("mode", "dark");
  }
}

// Listeners for when you change OS setting for light/dark mode
prefers_light.addListener(OSColorChange)
prefers_dark.addListener(OSColorChange)