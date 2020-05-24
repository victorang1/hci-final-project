function submitPreOrder() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var checkedValue = [];
    $.each($("input[name='checkbox']:checked"), function() {
        checkedValue.push($(this).val());
    });
    var numberCopies = document.getElementById('numbercopies').value;
    var isAgreementChecked = document.getElementById('agreement').checked;

    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkAddress(address);
    checkCheckbox(checkedValue);
    checkNumberCopies(numberCopies);
    checkAgreement(isAgreementChecked);
}

function checkUsername(username) {
    if(isStringNullOrEmpty(username)) document.getElementById('err-username').innerHTML = "Username must be filled";
    else if(isInvalidLength(username, 3, 20)) document.getElementById('err-username').innerHTML = "Username must be between 3-20 characters";
    else document.getElementById('err-username').innerHTML = "";
}

function checkEmail(email) {
    if(isStringNullOrEmpty(email)) document.getElementById('err-email').innerHTML = "Email must be filled";
    if(email.startsWith("@") || email.startsWith(".")) document.getElementById('err-email').innerHTML = "Email is invalid";
	else if(email.endsWith("@") || email.endsWith("."))	document.getElementById('err-email').innerHTML = "Email is invalid";
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1) document.getElementById('err-email').innerHTML = "Email is invalid";
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0) document.getElementById('err-email').innerHTML = "Email is invalid";
	else document.getElementById('err-email').innerHTML = "";
}

function checkPassword(password) {
    if(isStringNullOrEmpty(password)) document.getElementById('err-password').innerHTML = "Password must be filled";
    else if(isInvalidLength(password, 6, 15)) document.getElementById('err-password').innerHTML = "Password must be between 6 and 15 characters";
    else if(!isUpperCaseExists(password)) document.getElementById('err-password').innerHTML = "Password must at least containts one uppercase";
    else document.getElementById('err-password').innerHTML = "";
}

function checkAddress(address) {
    if(isStringNullOrEmpty(address)) document.getElementById('err-address').innerHTML = "Address must be filled";
    else if(!isStringContaintsValue(address, "Street", true)) document.getElementById('err-address').innerHTML = "Address must be containts 'street'";
    else document.getElementById('err-address').innerHTML = "";
}

function checkCheckbox(checkboxes) {
    if(checkboxes.length == 0) document.getElementById('err-checkbox').innerHTML = "You must choose at least one type of the game";
    else document.getElementById('err-checkbox').innerHTML = "";
}

function checkNumberCopies(numberCopies) {
    if(numberCopies < 1 || numberCopies > 10) document.getElementById('err-numbercopies').innerHTML = "Number of copies must be between 1 - 10";
    else document.getElementById('err-numbercopies').innerHTML = "";
}

function checkAgreement(isAgreementChecked) {
    if(!isAgreementChecked) document.getElementById('err-agreement').innerHTML = "You must check the Terms and Service";
    else document.getElementById('err-agreement').innerHTML = "";
}

function isStringNullOrEmpty(value) {
    if(value === null || value === "") return true;
    return false;
}

function isInvalidLength(value, minLen, maxLen) {
    if(value.length < minLen || value.length > maxLen) return true;
    return false;
}

function isUpperCaseExists(value) {
    for(i = 0; i < value.length; ++i) {
        if(value[i] == value[i].toUpperCase()) return true;
    }
    return false;
}

function isStringContaintsValue(value, target) {
    return isStringContaintsValue(value, target, false);
}

function isStringContaintsValue(value, target, isIgnoreCase) {
    if(isIgnoreCase) {
        value = value.toLowerCase();
        target = target.toLowerCase();
    }
    if(value.includes(target)) return true;
    return false;
}

