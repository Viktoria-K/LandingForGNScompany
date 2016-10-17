(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Slider = require('./slider.js');

var firstSlideBlock =
  [
    {
      url: "./img/slide-1.jpg",
      text: "Wangari has mastered the art of the perfect swing and she's still in primary school! Those of you heading to the course should take a quick lesson from these amazing pictures of Wangari in action!"
    },
    {
      url: "./img/slide-2.jpg",
      text: "Wangari has mastered the art of the perfect swing and she's still in primary school! Those of you heading to the course should take a quick lesson from these amazing pictures of Wangari in action!"
    },
    {
      url: "./img/slide-3.jpg",
      text: "Wangari has mastered the art of the perfect swing and she's still in primary school! Those of you heading to the course should take a quick lesson from these amazing pictures of Wangari in action!"
    }
  ];
var secondSlideBlock =
  [
    {
      url: "./img/slide-4.jpg",
      text: "This shot by Wangari was super accurate, nearly smacking the center of the 100 yard sign!"
    },
    {
      url: "./img/slide-5.jpg",
      text: "This shot by Wangari was super accurate, nearly smacking the center of the 100 yard sign!"
    },
    {
      url: "./img/slide-6.jpg",
      text: "This shot by Wangari was super accurate, nearly smacking the center of the 100 yard sign!"
    },
    {
      url: "./img/slide-7.jpg",
      text: "This shot by Wangari was super accurate, nearly smacking the center of the 100 yard sign!"
    }
  ];


new Slider(
  {
    url: firstSlideBlock,
    id: 'firstSlider'
  }
);
new Slider(
  {
    url: secondSlideBlock,
    id: 'secondSlider'
  }
);
},{"./slider.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
