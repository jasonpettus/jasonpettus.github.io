// -----------------------------------------------------------Toggle menu between scrollable and fixed

var watcher = scrollMonitor.create( '#menu' );
watcher.lock();
watcher.stateChange(function() {
  $('#menu').toggleClass('fixed', ($(window).scrollTop() - this.top >= 0))
});

// -----------------------------------------------------------Trigger sidebar slide-ins

var watcher = scrollMonitor.create( 'div.one' );
watcher.stateChange(function() {
  $('div.one').toggleClass('trigger-left', this.isInViewport)
});

var watcher = scrollMonitor.create( 'div.two' );
watcher.stateChange(function() {
  $('div.two').toggleClass('trigger-right', this.isInViewport)
});

var watcher = scrollMonitor.create( 'div.three' );
watcher.stateChange(function() {
  $('div.three').toggleClass('trigger-left', this.isInViewport)
});

var watcher = scrollMonitor.create( 'div.four' );
watcher.stateChange(function() {
  $('div.four').toggleClass('trigger-right', this.isInViewport)
});

var watcher = scrollMonitor.create( 'div.five' );
watcher.stateChange(function() {
  $('div.five').toggleClass('trigger-left', this.isInViewport)
});

var watcher = scrollMonitor.create( 'div.six' );
watcher.stateChange(function() {
  $('div.six').toggleClass('trigger-right', this.isInViewport)
});

// -----------------------------------------------------------Parallax scrolling

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.frontend-bg').css('top', -(scrolled * 0.2) + 'px');
    // $('.manager-bg').css('top', -(scrolled * 0.2) + 'px');
    // $('.me-bg').css('top', -(scrolled * 0.2) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
