// Source:
// https://developers.google.com/web/updates/2017/09/sticky-headers#introducing_the_sticky-change_event

/*================================
Advantage of this tool:
There is no event to know when the property position:sticky is active.
One can use scroll listeners but they have some disadvantages. They're
bad if the callback function of a scroll event includes complex
computations like for animations.

Using
- IntersectionObserver,
- "Sentinels". Nodes added in each sticky section, one at the top and one
    at the bottom. ( I just need the top sentinel for my nav bar.)
- They're entering and leaving the container, their visibility changes
    and the IntersectionObserver fires a callback.
================================

// Check link above for the CSS.

================================*/




(function() {

    'use strict';
    
    /**
     * Returns true if the element's computed style is `position: sticky`.
     * @param {!Element} el
     * @return {boolean}
     */
    function isSticky(el) {
      return getComputedStyle(el).position.match('sticky') !== null;
    }
    

    
/*------------------ CREATE A CUSTOM EVENT ------------------*/
    /**
     * Dispatches a `sticky-event` custom event on the element.
     * @param {boolean} stuck
     * @param {!Element} target Target element of event.
     */
    function fire(stuck, target) {
      const evt = new CustomEvent('sticky-change', {detail: {stuck, target}});
      document.dispatchEvent(evt);
    }
    
    
    
/*------------------ ADD SENTINELS ------------------*/

    /**
     * @param {!Element} container
     * @param {string} className
     */
    function addSentinels(container, className) {
      return Array.from(container.querySelectorAll('.sticky')).map(el => {
        const sentinel = document.createElement('div');
        sentinel.classList.add('sticky_sentinel', className);
        return el.parentElement.appendChild(sentinel);
      });
    }
    

    
/*------------------ OBSERVER (Class) ------------------*/

    // TOP
    /**
     * Sets up an intersection observer to notify when elements with the class
     * `.sticky_sentinel--top` become visible/invisible at the top of the container.
     * @param {!Element} container
     */
    function observeHeaders(container) {
      const observer = new IntersectionObserver((records, observer) => {
        for (const record of records) {
          const targetInfo = record.boundingClientRect;
          const stickyTarget = record.target.parentElement.querySelector('.sticky');
          const rootBoundsInfo = record.rootBounds;
          if (targetInfo.bottom < rootBoundsInfo.top) {
            fire(true, stickyTarget);
          }
          if (targetInfo.bottom >= rootBoundsInfo.top &&
              targetInfo.bottom < rootBoundsInfo.bottom) {
           fire(false, stickyTarget);
          }
        }
      }, {
        // rootMargin: '-16px',
        threshold: [0],
        root: container
      });
      // Add the top sentinels to each section and attach an observer.
      const sentinels = addSentinels(container, 'sticky_sentinel--top');
      sentinels.forEach(el => observer.observe(el));
    }
    
    // BOTTOM
    /**
     * Sets up an intersection observer to notify when elements with the class
     * `.sticky_sentinel--bottom` become visible/invisible at the botton of the
     * container.
     * @param {!Element} container
     */
    
    /*
    ------------------------------------------- DEACTIVATED, NOT REQUIRED FOR MY PAGE...
    function observeFooters(container) {
      const observer = new IntersectionObserver((records, observer) => {
        for (const record of records) {
          const targetInfo = record.boundingClientRect;
          const stickyTarget = record.target.parentElement.querySelector('.sticky');
          const rootBoundsInfo = record.rootBounds;
          const ratio = record.intersectionRatio;
          if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
            fire(true, stickyTarget);
          }
          if (targetInfo.top < rootBoundsInfo.top &&
              targetInfo.bottom < rootBoundsInfo.bottom) {
            fire(false, stickyTarget);
          }
        }
      }, {
        // rootMargin: '16px',
        // Get callback slightly before element is 100% visible/invisible.
        threshold: [1],
        root: container
      });
      // Add the bottom sentinels to each section and attach an observer.
      const sentinels = addSentinels(container, 'sticky_sentinel--bottom');
      sentinels.forEach(el => observer.observe(el));
    }
     */
    

/*------------------ FEED THE ELEMENT(s) TO THE OBSERVER(s) ------------------*/

    /**
     * Notifies when elements that have the class `sticky` begin to stick or not.
     * Note: these should be children of the `container` element.
     */
    function notifyWhenStickyHeadersChange(container) {
      observeHeaders(container);
      // observeFooters(container);     // DEACTIVATED: NOT REQUIRED FOR MY PAGE
    }


    // initialize tool:

    const container = document.querySelector('#container');

    // Feature detect warning after page content is generated.
    if (!isSticky(document.querySelector('.sticky')) || !window.IntersectionObserver) {
      //document.querySelector('.nosupport').style.display = 'block';
      console.log("Your browser does not support CSS position: sticky or IntersectionObserver!");
    } else  {
      notifyWhenStickyHeadersChange(container);
    }
    
/*------------------ USE OF THE CUSTOM EVENT LISTENER ------------------*/

    /*
    document.addEventListener('sticky-change', e => {
        console.log("event fired.");
    });
    */
    // I am using the listener in apps.js
})();