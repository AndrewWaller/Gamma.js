// STYLE THEMES
/* 
  LOGOS, In html set the id equal to the fuction name, plus the data-size attr (measures size in ems).
  In js, call the function(preferabbly at the bottom for loading purposes). 
*/
export function logoCircle() {
  let logo = document.getElementById('logoCircle');
  let size = logo.dataset.size;
  logo.style.height = size + 'em';
  logo.style.width = size + 'em';
  logo.style.borderRadius = '50%';
}

export function logoRoundedSquare() {
  let logo = document.getElementById('logoRoundedSquare');
  let size = logo.dataset.size;
  logo.style.height = size + 'em';
  logo.style.width = size + 'em';
  logo.style.borderRadius = '10%';
}

export function logoSquare() {
  let logo = document.getElementById('logoSquare');
  let size = logo.dataset.size;
  logo.style.height = size + 'em';
  logo.style.width = size + 'em';
}

export default {logoCircle, logoRoundedSquare, logoSquare}