/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function cardCarousel() {
  // create elements
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const imgMount = document.createElement('img');
  const imgComp = document.createElement('img');
  const imgTrees = document.createElement('img');
  const imgTurn = document.createElement('img');
  const rightBtn = document.createElement('div');

  // create structure
  carousel.appendChild(leftBtn);
  carousel.appendChild(imgMount);
  carousel.appendChild(imgComp);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurn);
  carousel.appendChild(rightBtn);
  
  // set the content
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
  imgMount.src = "./assets/carousel/mountains.jpeg"
  imgComp.src = "./assets/carousel/computer.jpeg"
  imgTrees.src = "./assets/carousel/trees.jpeg"
  imgTurn.src = "./assets/carousel/turntable.jpeg"

  // apply styles
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  imgMount.classList.add('display');
  

  console.log(carousel);
  return carousel;
}

const container = document.querySelector('.carousel-container');
test = cardCarousel();
container.appendChild(cardCarousel());
console.log(container);

