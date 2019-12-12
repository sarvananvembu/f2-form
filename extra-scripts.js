$('.knowledge-of').click(function(){
    var text = "";
    $('.knowledge-of:checked').each(function(){
        text += $(this).val()+',';
    });
    text = text.substring(0,text.length-1);

    $('#knowledge').val(text);
});

$('.chkbx').click(function(){
    var text = "";
    $('.chkbx:checked').each(function(){
        text += $(this).val()+',';
    });
    text = text.substring(0,text.length-1);

    $('#expectations').val(text);
});


$('.know').click(function(){
    var text = "";
    $('.know:checked').each(function(){
        text += $(this).val()+',';
    });
    text = text.substring(0,text.length-1);

    $('#known-medium').val(text);
});

$(document).ready(function() {
    $('#multiple-checkboxes').multiselect();
});


//select box with checkbox
var expanded = false;

function showCheckboxes2() {
  var checkboxes = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//select box with checkbox
var expanded = false;

function showCheckboxes3() {
  var checkboxes = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//select box with checkbox
var expanded = false;

function showCheckboxes4() {
  var checkboxes = document.getElementById("checkboxes4");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
//email validation
email.onblur = function() {
  if (!email.value.includes('@')) { // not email
    email.classList.add('invalid');
    emailerror.innerHTML = '*Please enter a valid email address.'
  }
};

email.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    emailerror.innerHTML = "";
  }
};
//mobile no validation
function mobilefunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("phone").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x <= 999999999 || x >=9999999999) {
    document.getElementById("mobileerror").innerHTML = "*Mobile number should be of 10 digits";
  } else {
    document.getElementById("mobileerror").innerHTML = "";
  }
  document.getElementById("demo").innerHTML = text;
}
phone.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    mobileerror.innerHTML = "";
  }
};

//div scroll
$("#tally-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#foo").offset().top},
        'slow');
});
//selectBox 1
function Genderfunc(data) {

document.getElementById ("gender-input").value = data.value;

}
//selectBox 2
function Age(data) {

document.getElementById ("age-input").value = data.value;

}
//selectBox 3
function Occp(data) {

document.getElementById ("occupation-input").value = data.value;

}
//selectBox 4
function Categ(data) {

document.getElementById ("category-input").value = data.value;

}
//selectBox 5
function Batch(data) {

document.getElementById ("batch-date-input").value = data.value;

}
//selectBox 6
function Expc(data) {

document.getElementById ("experience-input").value = data.value;

}
//show textbox for after selecting Others
$('#occupation-input').hide();

$('#occupation').on('change', function() {
    if($(this).val() == "") {
        $('#occupation-input').show();
    } else {
        $('#occupation-input').hide();
    }
});
//show textbox for after selecting Others 2
$('#category-input').hide();

$('#category').on('change', function() {
    if($(this).val() == "") {
        $('#category-input').show();
    } else {
        $('#category-input').hide();
    }
});
//show textbox for after selecting Others 2
