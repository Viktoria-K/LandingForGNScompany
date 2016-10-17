/**
 * Slider constructor
 * @param {object} args
 * @constructor
 */
function Slider(args) {
  var url,
    sliderContainer = args.id,
    shoots,
    counter = 0,
    container = document.getElementById(sliderContainer),
    imgContainer = container.querySelector('img'),
    previousButton = container.querySelector('[data-id="previous-slide-btn"]'),
    nextButton = container.querySelector('[data-id="next-slide-btn"]'),
    slideDescription = container.querySelector('[data-id="slide-description"]');

  if(typeof args.url == "string"){
    url = args.url;
    getShoots();
  }else {
    shoots = args.url;
    slider();
  }

  function getShoots() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

      if(xhr.status == 200 && xhr.readyState == 4){
        shoots = JSON.parse(xhr.responseText);
        slider()
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }

  function slider(item) {
    var currentItem = item || counter;
    imgContainer.src = shoots[currentItem].url;
    slideDescription.textContent = shoots[currentItem].text;
  }

  function getNextItem(isPreviousOrNext){

    var nextSlide;

    switch (isPreviousOrNext){

      case 'next':
        nextSlide = counter+1;

        if (nextSlide >= shoots.length){
          nextSlide = 0;
        }
        break;

      case 'previous':
        nextSlide = counter-1;

        if (nextSlide < 0){
          nextSlide = shoots.length - 1;
        }
        break;
    }
    counter = nextSlide;
    return nextSlide;
  }

  /**
   * Event handlers
   */
  function nextSlide(event) {
    event.preventDefault();
    slider(getNextItem('next'));
  }

  function previousSlide(event) {
    event.preventDefault();
    slider(getNextItem('previous'));
  }

  /**
   * Event listeners
   */
  nextButton.addEventListener('click', nextSlide);
  previousButton.addEventListener('click', previousSlide);
}

module.exports = Slider;