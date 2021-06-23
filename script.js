

// $('.js-trigger-transition').on('click', function(e) {
//   e.preventDefault();
//   setInterval(transition, 4000);
// setTimeout(function() {
//    setInterval(stop, 4000);
//  }, 2000);
// });


var btn = document.getElementById("js-trigger-transition");
btn.οnclick=function(){
	e.preventDefault();
	setInterval(transition, 4000);
}

function transition() {
  var body = document.querySelector('body');
  body.classList.add('show');
  	setTimeout(function() {
	   setInterval(stop, 4000);
	   window.open('sidePage/index.html','_self');
	 }, 2000);

}

function stop() {
  var body = document.querySelector('body');
  body.classList.remove('show');
}