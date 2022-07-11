var firstError = "";
var errorCount = 0;

window.onload = function () {
    var input = document.getElementById("firstName").focus();
    document.getElementById('nameSpouse').readOnly = true;
    document.getElementById('nameSpouse').style.backgroundColor = "#8e8d8d";
}

// for validation checking over the whole form
function validateForm(event) {
    errorCount = 0;

    var firstNa = document.getElementById("firstName");
    var middleNa = document.getElementById("middleName");
    var lastNa = document.getElementById("lastName");

    // var gender = document.getElementById("gender");
    var status = document.getElementById('maritalStatus');

    var spouseNa = document.getElementById("nameSpouse");


    if (checkNullEmpty(firstNa)) {
        if (checkNullEmpty(lastNa)) {
            
        }
    }

    if (status.value == "na") {
        if (errorCount == 0) {
            errorCount = errorCount + 1;
            status.className = "error";
            firstError = status;
            alert("Please enter Marital Status");
        }
    } else if (status.value == "married") {
        checkNullEmpty(spouseNa);
    }

    if (!detailForm.termsAndCondition.checked) {
        if (errorCount == 0) {
            errorCount = errorCount + 1;
            alert("Please indicate that you accept the Terms and Conditions");
        }
    }
    if (errorCount > 0) {
        var errorSpan = document.getElementById('error-span');
        errorSpan.style.display = 'flex';
        event.preventDefault();
        firstError.focus();
    } else {
        errorSpan.style.display = 'none';
        alert("Thank You!");
    }
}

// for the validation check over the values of the form
function validateValue(val) {
    var len = val.value.trim().length;
    if (len != 0 || val != 'na') {
        val.className = '';
        var errorSpan = document.getElementById('error-span');
        errorSpan.style.display = "none";
    }
}


// for omitting out the white spaces 
function checkNullEmpty(inputValue) {
    var len = inputValue.value.trim().length;
    var fieldName = inputValue.getAttribute('displayName');
    if (len == 0) {
        inputValue.className = "error";
        errorCount = errorCount + 1;
        if (errorCount == 1) {
            alert("Please enter a " + fieldName);
            firstError = inputValue;
        }
        return false;
    }
    return true;
}

// for the conditional editing on spouse name
function statusMarried(status) {
    var nameSpouse = document.getElementById('nameSpouse');
    if (status == "married") {
        nameSpouse.readOnly = false;
        nameSpouse.style.backgroundColor = "transparent";
    } else {
        nameSpouse.readOnly = true;
        nameSpouse.value = "";
        nameSpouse.style.backgroundColor = "#8e8d8d";
    }
}

// for resetting all of the values to a default value
function resetButton() {
    var nameSpouse = document.getElementById('nameSpouse');
    nameSpouse.readOnly = true
    nameSpouse.value = "";
    nameSpouse.style.backgroundColor = "#8e8d8d";

    var errorSpan = document.getElementById('error-span');
    errorSpan.style.display = 'none';
}