// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // $(saveButton).click(function() {
    //   // event.preventDefault();
    //   var parentDiv = $(this).parent().attr('id');
    //   var text = $(this).siblings('.description').val();
    
    //   if (text == '') {
      //     // window.alert("Please fill in before saving");
      //   } else {
        //     console.log("Hey there");
        
        //     localStorage.setItem(parentDiv, text);
  //   }
  // })
  var saveButton = $('.saveBtn');
  var currentTime = dayjs().format('HH');
  // var currentTime = 14;
  
  function display() {
    // event.preventDefault();
    var parentDiv = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    
    localStorage.setItem(parentDiv, text);
    
  };
  var blockDiv = $('#main').children('.row');
  for (var i = 0; i < blockDiv.length; i++) {
    var blockDivPos = blockDiv.eq(i).attr('id');
    var keys = localStorage.getItem(blockDivPos);
    console.log(blockDivPos);
    console.log(keys);
    blockDiv.eq(i).children('textarea').val(keys);
  }
  
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


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
// TODO: Add code to display the current date in the header of the page.