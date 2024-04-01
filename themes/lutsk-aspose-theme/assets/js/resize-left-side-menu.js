const GUTTER_SIZE = 1;
const MIN_LEFTBAR_SIZE = 12;
const MAX_LEFTBAR_SIZE = 32;
const DEFAULT_LEFT_SIDE_WIDTH = 30;
const DEFAULT_RIGHT_SIDE_WIDTH = 100 - DEFAULT_LEFT_SIDE_WIDTH;

const LEFT_SIDE_ID = '#left-side-bar-menu';
const RIGHT_SIDE_ID = '#right-side';
const Gutter_Id = '#sidebar-resizer';

function clearStyles(objectId, classToRemove) {
  $(objectId).removeAttr("style");
  $(objectId).removeClass(classToRemove);
}

function setStyles(objectId, classToAdd) {
  if(!$(objectId).hasClass(classToAdd)) {
    $(objectId).addClass(classToAdd);
  }
}

function setGutterHeight() {
  $(Gutter_Id).css('height', $(RIGHT_SIDE_ID).height());
}

function calcLeftFotGutter() {
  
  return GUTTER_SIZE + $(LEFT_SIDE_ID).width() + 15 + 'px';
}

function getLefSideWidth() {
  return $(LEFT_SIDE_ID).width() / $(window).width() * 100;
}

function calcGutterPosition() {
  if(getLefSideWidth() < MAX_LEFTBAR_SIZE && getLefSideWidth() > MIN_LEFTBAR_SIZE) {      
    $(Gutter_Id).css('left', calcLeftFotGutter());
  }
  if(getLefSideWidth() > MAX_LEFTBAR_SIZE) {
    $(Gutter_Id).css('left', '32%');
  }
  if(getLefSideWidth() < MIN_LEFTBAR_SIZE) {
      $(Gutter_Id).css('left', `calc(${getLefSideWidth()} + 1px)`);
  }
}

function setGutterStyles(gutterElementId) {
  $(gutterElementId).show();
  $(gutterElementId).css('padding', `0.01rem`);
  $(gutterElementId).css('left', calcLeftFotGutter());
  setGutterHeight();
  $(gutterElementId).css('cursor', 'ew-resize');
}

function removeStylesDependingOnWindowWidth() {
  if ($( window ).width() < 768 ) {
    $(Gutter_Id).hide();
    clearStyles(LEFT_SIDE_ID, "leftSideBarSize");
    clearStyles(RIGHT_SIDE_ID, "rightSideContent");
  } else {
    setGutterStyles(Gutter_Id);

    setStyles(LEFT_SIDE_ID, "leftSideBarSize");
    setStyles(RIGHT_SIDE_ID, "rightSideContent");
    
    split();
  }
}

var split = function (leftSideWidth, rightSideWidth) {
  Split([LEFT_SIDE_ID, RIGHT_SIDE_ID], {
    sizes: [leftSideWidth, rightSideWidth],
    elementStyle: (dimension, size, gutterSize) => ({

        'flex': `0 0 calc(${size}% - ${GUTTER_SIZE/2}px)`,
    }),
    gutterStyle: (dimension, gutterSize) => ({
      'left': calcLeftFotGutter()
    }),
    onDrag: function(dimension, size, gutterSize) {
      calcGutterPosition();
    },
    onDragEnd: function(size, gutterSize) {
      calcGutterPosition();
      setGutterHeight();
    },
      gutter: (index, direction) => {
        const gutter = document.getElementById('sidebar-resizer');
        gutter.className = `gutter gutter-${direction}`
        return gutter
    }
  });
}

if($(LEFT_SIDE_ID).length != 0)
{
  split(DEFAULT_LEFT_SIDE_WIDTH, DEFAULT_RIGHT_SIDE_WIDTH);
  removeStylesDependingOnWindowWidth();

  $( window ).resize(function() {
    removeStylesDependingOnWindowWidth();
  });
}

if($(LEFT_SIDE_ID)!= null & $(RIGHT_SIDE_ID)!= null) {
  $(LEFT_SIDE_ID).show();
  $(RIGHT_SIDE_ID).show();
}
setGutterHeight();
setTimeout($(Gutter_Id).css('left', calcLeftFotGutter()), 1000);
