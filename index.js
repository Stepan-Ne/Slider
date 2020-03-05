function Slider() {
  this.imgArray = [];
    this.indexImg = 0;
    this.btnLeft = null;
    this.btnRight = null;
    this.imgSlider = null;

    this.start = function(elId) {
      let selectIdEl = '#' + elId;
      let el = document.querySelector(selectIdEl);

      this.btnLeft = el.querySelector('.left');
      this.btnRight = el.querySelector('.right');
      this.imgSlider = el.querySelector('.img-car');

      let that = this; //ухватились за объект
      //subscribe to events
      this.btnLeft.addEventListener('click', function(e) {that.onClickLeft(e);});
      this.btnRight.addEventListener('click', function(e) {that.onClickRight(e);});
      addEventListener('keydown', function(e) {that.leftRight(e);});

      this.imgArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfqtOOQ_n8wqUAhcbWCRP5ZglFO3qSka77GsexlWDP8j6K1jcR');
      this.imgArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnPKa7shxykcDiuNozWt2qHuKiLkJDNGN-exzKpEHlbENFg7L_');
      this.imgArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT--I9hqq_Z1iUjWd1DgLwL6ByPpqqU6etSDUdzC06nbC2LpmYG');
      this.imgArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFX6Op_9oKMjYCpop4rrt_6r03zsQUZA-rl4UikOpyrYlbvweY');

      //first settings
      this.btnLeft.disabled = true;
      this.imgSlider.src = this.imgArray[this.indexImg];
    };
    this.onClickLeft = function(e) {
      if (this.indexImg > 0) {
        this.indexImg--;
      };
      this.imgSlider.src = this.imgArray[this.indexImg];
      this.btnRight.disabled = false;

      if (this.indexImg == 0) {
        this.btnLeft.disabled = true;
      }
    };
    this.onClickRight = function(e) {
      if (this.indexImg < this.imgArray.length - 1) {
        this.indexImg++;
      };
      this.imgSlider.src = this.imgArray[this.indexImg];
      this.btnLeft.disabled = false;

      if (this.indexImg == (this.imgArray.length - 1)) {
        this.btnRight.disabled = true;
      }
    };

    this.leftRight = function(e) {
      if (e.keyCode == 37) {

        this.onClickLeft();
      } else if (e.keyCode == 39) {

        this.onClickRight();
      }
    };

}

// let sliderFactory = {
//   getNewSlider: function() {
//     let newSlidedr = new Slider();
//     return newSlider;
//   }
// }
