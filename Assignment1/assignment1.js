function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function brm1() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");
    (activityLevel1.checked) ? (calories += 1.2) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.375) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.55) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.725) : (calories += 0);
    (activityLevel5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age) : bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age) : bmr = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age);
    GrandCalories = bmr + calories;
    document.write(Gender);
    document.write("<p>Your BMR is" + bmr + ".</p>");
    document.write("<p>calories is " + GrandCalories + ".</p>");
}
document.getElementById("submit").addEventListener("click", brm1, false);

function bmr2() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");
    (activityLevel1.checked) ? (calories += 1.2) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.375) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.55) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.725) : (calories += 0);
    (activityLevel5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    GrandCalories = bmr + calories;
    document.write(Gender);
    document.write("<p>Your BMR is" + bmr + ".</p>");
    document.write("<p>calories is " + GrandCalories + ".</p>");
}
document.getElementById("submit").addEventListener("click", brm2, false);

