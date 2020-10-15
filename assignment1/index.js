function heartRate() {
    var age, rate, text;
  
    age = document.getElementById("age").value;
    rate = document.getElementById("heartRate").value;
  
    if (age=="" || rate=="") {
      text = "Please enter data first";
    } else if((age>=0 && age<=1) && (rate>=100 && rate<=160))
    {
      text = "Normal";
    }
    else if((age>=1 && age<=3) && (rate>=90 && rate<=150))
    {
      text="Normal";
    }
    else if((age>=6 && age<=15) && (rate>=70 && rate<=100))
    {
        text="Normal";
    }
    else if((age>=18) && (rate>=60 && rate<=100))
    {
        text="Normal";
    }
    else {
        text="Abnormal";
    }
    document.getElementById("print").innerHTML = text;
  }