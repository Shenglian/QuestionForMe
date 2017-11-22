<template>
  <!-- @wheel="onWheel"-->
  <!-- @mousedown="onTouchStart" -->
  <div class="slider"
    @touchstart="onTouchStart">
    <div class="slider_list" :style="setStyle" @transitionend="onTransitionend">
      <div class="slider_item" v-for="(arr, index) in cloneSliderArr" :key="index" :style="{ backgroundImage: `url(${arr.img})` }">{{ index }}</div>
    </div>
    <div class="slider_pagination">
      <div class="next" @click="setTimerNext">prev</div>

      <div class="slider_pagination_bullet" :class="{active: index + 1 === computeIndex}" 
      v-for="(arr, index) in bullets" :key="index"
      @click="goTo(index + 1)"></div>

      <div class="next" @click="setTimerNext">next</div>
    </div>

    
  </div>
</template>

<script>
  export default {
    name: 'slider',
    props: {
      seconds: {
        type: Number,
        default: 3000,
      },
      speed: {
        type: Number,
        default: 500,
      },
    },
    data() {
      return {
        sliderArr: [{
          img: 'https://images.unsplash.com/photo-1494005199821-2cb74a8e75fb?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        },
        {
          img: 'https://images.unsplash.com/photo-1495206255513-257bdf652e26?auto=format&fit=crop&w=2090&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        },
        {
          img: 'https://images.unsplash.com/photo-1507706132643-4b3dabbca8b3?auto=format&fit=crop&w=2134&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        }],
        
        isLoop: true,          // 增加前後 
        startTime: null,
        clientWidth: 0,
        currentPage: 1,
        translateX: 0,
        startPos: null,
        startTranslate: 0,
        transitionDuration: 0,
        delta: 0,

        timer: null,

        excuteNextStatus: true,
        excutePrevStatus: true,
        directionStatus: 'next',
      };
    },
    watch: {},
    mounted() {
      this.slideInit();
    },
    computed: {
      computeIndex() {
        let index = 0;
        
        console.log('this.currentPage: ', this.currentPage);
        if (this.currentPage === 1 || this.currentPage === this.slides.length - 1) {
          index = 1;
        } else if (this.currentPage === this.slides.length - 2 || this.currentPage === 0) {
          index = this.slides.length - 2;
        } else {
          index = this.currentPage;
        }

        return index;
      },
      bullets() {
        let computeBullets = 0;

        if (this.isLoop) {
          computeBullets = this.sliderArr.length - 2;
        } else {
          computeBullets = this.sliderArr.length;
        }

        return computeBullets;
      },
      cloneSliderArr() {
        const sliderArrFirst = this.sliderArr[0];
        const sliderArrLast = this.sliderArr[this.sliderArr.length - 1];

        this.sliderArr.push(sliderArrFirst);
        this.sliderArr.unshift(sliderArrLast);

        return this.sliderArr;
      },
      setStyle() {
        return {
          transform: `translate3d(${this.translateX}px, 0px, 0px)`,
          transitionDuration: `${this.transitionDuration}ms`,
        };
      },
    },
    methods: {
      defineVisibility() {
        if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support 
          this.hidden = 'hidden';
          this.visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
          this.hidden = 'msHidden';
          this.visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
          this.hidden = 'webkitHidden';
          this.visibilityChange = 'webkitvisibilitychange';
        }

        this.detectBrowerVisibility();
      },

      detectBrowerVisibility() {
        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === 'undefined' || typeof document[this.hidden] === 'undefined') {
          console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
        } else {
          // Handle page visibility change   
          document.addEventListener(this.visibilityChange, this.handleVisibilityChange, false);
        }
      },

      handleVisibilityChange() {
        if (document[this.hidden]) {
          this.removeTimer();
        } else {
          this.setTimer();
        }
      },
      slideInit() {
        this.$nextTick(() => {
          this.getSlideList();
          this.getClientWidth();
          this.move(this.currentPage);
        });
      },

      getSlideList() {
        this.slides = this.$el.querySelectorAll('.slider .slider_item');
        // this.setTimer();
      },
      getClientWidth() {
        this.clientWidth = this.slides ? this.slides[0].clientWidth : null;
      },

      clearTimerEvent() {
        this.removeTimer();
      },
      addTimerEvent() {
        // this.setTimer();
      },

      setTimer() {
        this.timer = setInterval(this.setTimerNext, this.seconds);
      },
      removeTimer() {
        clearInterval(this.timer);
      },

      setTimerNext() {
        if (!this.excuteNextStatus) return;
        this.directionStatus = 'next';

        this.currentPage = this.currentPage + 1;
        this.transitionDuration = 500;
        this.move(this.currentPage);

        this.excuteNextStatus = false;
      },

      onTransitionend() {
        this.transitionDuration = 0;

        // Next
        if (this.directionStatus === 'next' && this.currentPage === this.slides.length - 1) this.currentPage = 1;
        
        // Prev
        if (this.currentPage === 0) this.currentPage = this.slides.length - 2;

        // 移到下一個執行緒在移動
        setTimeout(this.goTo, 0);

        this.excuteNextStatus = true;
        this.excutePrevStatus = true;
      },

      next() {
        if (!this.excuteNextStatus) return;
        this.directionStatus = 'next';

        this.currentPage = this.currentPage + 1;
        this.transitionDuration = 500;
        this.move(this.currentPage);

        this.excuteNextStatus = false;
      },
      prev() {
        this.directionStatus = 'prev';

        this.currentPage = this.currentPage - 1;
        this.transitionDuration = 500;
        this.move(this.currentPage);

        this.excutePrevStatus = false;
      },
      goTo(index) {
        if (index) {
          this.currentPage = index;
          this.move(index);
        } else {
          this.move(this.currentPage);
        }
      },
      move(index) {
        this.translateX = -(index * this.clientWidth);
        this.startTranslate = this.translateX;
      },

      setTranslate(value) {
        this.translateX = value;
      },
      getTranslate() {
        return this.translateX;
      },

      getTouchPos(e) {
        const key = 'pageX';
        return e.changedTouches ? e.changedTouches[0][key] : e[key];
      },
      onTouchStart(e) {
        if (this.timer) {
          this.removeTimer();
        }

        this.startPos = this.getTouchPos(e);
        this.startTime = new Date().getTime();
        this.transitionDuration = 0;

        // 4
        if (this.currentPage === this.slides.length - 1) {
          this.currentPage = 1;
          this.startTranslate = -(this.currentPage * this.clientWidth);
        // 0
        } else if (this.currentPage === 0) {
          this.currentPage = this.slides.length - 2;
          this.startTranslate = -(this.currentPage * this.clientWidth);
        }

        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
        document.addEventListener('mousemove', this.onTouchMove, false);
        document.addEventListener('mouseup', this.onTouchEnd, false);
      },
      onTouchMove(e) {
        this.delta = this.getTouchPos(e) - this.startPos;

        this.setTranslate(this.startTranslate + this.delta);
      },

      onTouchEnd() {
        // if (!this.timer) {
        //   this.setTimer();
        // }

        const isQuickAction = new Date().getTime() - this.startTime < 1000;

        this.transitionDuration = this.speed;

        if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
          this.next();
        } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
          this.prev();
        }

        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
        document.removeEventListener('mousemove', this.onTouchMove);
        document.removeEventListener('mouseup', this.onTouchEnd);
      },
      onWheel(e) {
        if (e.deltaY > 0) {
          this.next();
        } else {
          this.prev();
        }
      },
    },
  };
</script>

<style lang="scss">
.slider {
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -webkit-user-drag: none;
}

.slider .slider_list {
  display: flex;
  width: 100%;
  height: 200px;
  transition: all 0ms ease;
}

.slider .slider_list .slider_item {
  width: 100%;
  height: 100%;
  background: #333;
  background-size: cover;
  background-origin: center;

  display: flex;
  flex-shrink: 0;

  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 48px;
  color: #fff;
}

.slider .slider_pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.slider .slider_pagination .slider_pagination_bullet {
  margin: 0 3px;
  width: 10px;
  height: 10px;
  border: 1px solid #dddddd;
  background: #dddddd;
  border-radius: 100%;
  &.active {
    background: #ffffff;
  }
}
</style>