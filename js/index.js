/**
 * EXAMPLE
 * 
 * For MULTIPLE images
 */

import Bound from 'bounds.js';

const boundary = Bound({
  margins: {
    bottom: -100
  }
});

const image = document.querySelectorAll('img');

const whenImageEnters = ( image ) => {
  return () => {
    image.src = image.dataset.src;
    // image.classList.add('show');
    // Only want this to happen once, don't want to keep loading images
    boundary.unWatch(image)
    console.log(('Showing lazy stuff....'))
  }
}

image.forEach( img => {
  boundary.watch( img, whenImageEnters(img) );
});
