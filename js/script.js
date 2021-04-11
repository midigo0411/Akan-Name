var century, year, month, dayOfMonth, dayOfWeek, day;
//gettting the input
function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);
  
  
    if(century == ""){
      alert("Input the correct gender");
      return false;
    }else if (year == ""){
      alert("Input the correct year");
      return false;
    }else if (month == ""){
      alert("Input the correct month");
      return false;
    }else if(dayOfMonth == ""){
      alert("input the correct date");
      return false;
    }
  }

  //calculating function

  function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7);
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1; //takes care for those entering -ve value
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}

// a function that calls other functions

function checkDayOfWeek(){
    day = calculateDay();
     checkGender();
     console.log("The function runs");//Test chackDayOfWeek function
}