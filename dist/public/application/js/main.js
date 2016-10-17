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