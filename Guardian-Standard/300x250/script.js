
// Reference to the creative's various properties and elements.
var creative = {};



/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('bg-exit');
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
var tl;
tl = new TimelineMax();
function show() {
    tl.to(copy1,0.5,{ ease: "power1.in", autoAlpha:1 },"+=0.5");
    tl.to(copy2,0.5,{ ease: "power1.in", autoAlpha:1 },"+=0.8");
    tl.to(copy3,0.5,{ ease: "power1.in", autoAlpha:1 },"+=1.1");
    tl.to(["#copy1, #copy2, #copy3"], 0.5, { ease: "power1.in", autoAlpha:0, display: "none" },"+=1.2");
    tl.to(copy4,0.5,{ ease: "power1.in", autoAlpha:1 },">");
    tl.to(copy5,0.5,{ ease: "power1.in", autoAlpha:1 },"+=1.7");
    tl.to(cta,0.5,{ ease: "power1.in", autoAlpha:1 },"+=2");

}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('Background Exit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);