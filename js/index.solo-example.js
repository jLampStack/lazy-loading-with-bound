/**
 * EXAMPLE
 * 
 * For only 1 image
 */


import Bound from 'bounds.js';

const boundary = Bound({
  margins: {
    // load threshold
    bottom: -400
  }
});

const h2 = document.querySelector('h2');

boundary.watch( h2, () => {
  console.log('Watching this!!!');
  h2.classList.add('show');
  // Stops watching if you want it to load only once
  // boundary.unWatch(h2);
}, () => {
  // 3rd arg for when it leaves the scroll position
  h2.classList.remove('show');
});


const image = document.querySelector('img');