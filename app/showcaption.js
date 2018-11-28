

$('.js-toggledesc').click(function(e){
  e.preventDefault();
  $(this).closest('section').find('div.js-eventshowhide').toggle();
})