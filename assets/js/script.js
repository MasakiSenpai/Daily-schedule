
$(function () {
  
  var saveButton = $('.saveBtn');
  var currentTime = dayjs().format('HH');
  // var currentTime = 14;
  
  //Function that adds input to storage
  function display() {
    // event.preventDefault();
    var parentDiv = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    
    localStorage.setItem(parentDiv, text);
    
  };
  //displays storage on page
  var blockDiv = $('#main').children('.row');
  for (var i = 0; i < blockDiv.length; i++) {
    var blockDivPos = blockDiv.eq(i).attr('id');
    var keys = localStorage.getItem(blockDivPos);
    console.log(blockDivPos);
    console.log(keys);
    blockDiv.eq(i).children('textarea').val(keys);
  }
  
  // function that applys color to block based on the time
  function applyTime() {
    
    var mainDivs = $('#main').children();
    mainDivs.each(function(i) {
      // console.log(i + '' + $(this).attr('id'));
    });
    
    for (var i = 9; i < 18; i++) {
      if(currentTime == i) {
        mainDivs.eq(i-9).addClass('present');
      } else if (currentTime > i) {
        mainDivs.eq(i-9).addClass('past');
      } else {
        mainDivs.eq(i-9).addClass('future');
      }
    };
    
  }


  var todayDate = dayjs().format('dddd, MMMM Do');
  $('#currentDay').text(todayDate);
  
  saveButton.on('click', display);
  applyTime();
});
