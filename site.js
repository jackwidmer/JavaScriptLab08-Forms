"use strict";
// Main js file for Jack Widmer Lab 8.
function checkFirstLetter(word) {
    return word.charAt(0) === word.charAt(0).toUpperCase();
}
// Checks string for any letters
function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
}
// Validates Phone Number
function validatePhoneNumber(input_str) {
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}
// Validates Email
function validateEmail(email) {
    let re = /^[a-z0-9]+[a-z0-9\.-]+@[a-z]+\.[a-z]{2,8}$/;
    return re.test(email);
}
// Validate BirthDate
function validateBirth(DOB) {
    let re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return re.test(DOB);
}
// Validate ZIP
function validateZIP(ZIP) {
    let re = /^\d{5}(?:[- ]?\d{4})?$/;
    return re.test(ZIP);
}
// THE BIG ONE: Validates form.
function validateForm() {
    // First Name Checks
    let firstName = document.forms["theForm"]["txtFirstName"].value;
    if (firstName.length > 24) {
        alert("Error: First name must be less than 24 characters long");
        return false;
    }
    if (firstName.length < 1) {
        alert("Error: First Name is required");
        return false;
    }
    if (checkFirstLetter(firstName) === false) {
        alert("Error: First Name must be capitalized");
        return false;
    }
    // Last Name Checks
    let lastName = document.forms["theForm"]["txtLastName"].value;
    if (lastName.length > 64) {
        alert("Error: Last name must be less than 64 characters long");
        return false;
    }
    if (lastName.length < 1) {
        alert("Error: Last Name is required");
        return false;
    }
    if (checkFirstLetter(lastName) === false) {
        alert("Error: Last Name must be capitalized");
        return false;
    }
    // Address Line 1 Checks
    let address1 = document.forms["theForm"]["txtAddress1"].value;
    if (address1.length > 80) {
        alert("Error: Address must be less than 80 characters long");
        return false;
    }
    if (address1.length < 1) {
        alert("Error: Address is required");
        return false;
    }
    // Address Line 2 Checks
    let address2 = document.forms["theForm"]["txtAddress2"].value;
    if (address2.length > 24) {
        alert("Error: Address Line 2 must be less than 24 characters long");
        return false;
    }
    // City Checks
    let city = document.forms["theForm"]["txtCity"].value;
    if (city.length > 20) {
        alert("Error: City must be less than 20 characters long");
        return false;
    }
    if (city.length < 1) {
        alert("Error: City is required");
        return false;
    }
    if (checkFirstLetter(city) === false) {
        alert("Error: City must be capitalized");
        return false;
    }
    // State Checks
    let states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
    let userState = document.forms["theForm"]["txtState"].value;
    if (states.includes(userState) === false) {
        alert("Error: State must be capitalized two letter state abbreviation as defined by the US Post Office. Example: 'MN','IL','CO'");
        return false;
    }
    // ZIP Code Checks
    let zipcode = document.forms["theForm"]["txtZIP"].value;
    if (zipcode.length > 5 && zipcode.length != 10) {
        alert("Error: Invalid ZIP. If you have a 5+4 ZIP make sure it is formatted like: '55467-4444'");
        return false;
    }
    if (containsAnyLetter(zipcode)) {
        alert("Error: ZIP cannot contain letters.");
        return false;
    }
    if (zipcode.length < 1) {
        alert("Error: ZIP code is required.");
        return false;
    }
    // Phone Number Check
    let phoneNumber = document.forms["theForm"]["txtPhone"].value;
    if (!validatePhoneNumber(phoneNumber)) {
        alert("Error: Invalid Phone Number");
        return false;
    }
    if (zipcode.length < 1) {
        alert("Error: ZIP code is required.");
        return false;
    }
    // Email Check
    let email = document.forms["theForm"]["txtEmail"].value;
    if (!validateEmail(email)) {
        alert("Error: Invalid Email Address. Proper Format: email@email.com")
        return false;
    }
    // Birth Date Check
    let birthDate = document.forms["theForm"]["txtDOB"].value;
    let birthDate2 = new Date(document.forms["theForm"]["txtDOB"].value);
    let startingDate = new Date("1900-01-01");
    let endingDate = new Date("2022-01-01");
    if (birthDate2 < startingDate || birthDate2 > endingDate) {
        alert("Error: Invalid Date of Birth.");
        return false;
    }
    if (!validateBirth(birthDate)) {
        alert("Error: Invalid Date of Birth. Format: yyyy-mm-dd");
        return false;
    }
    // Hobbies Checkboxes Check
    let otherHobby = document.forms["theForm"]["txtOtherHobby"].value;
    let gardening = document.forms["theForm"]["chkGard"];
    let programming = document.forms["theForm"]["chkProg"];
    let reading = document.forms["theForm"]["chkRead"];
    let sports = document.forms["theForm"]["chkSpor"];
    if (gardening.checked == false && programming.checked == false && reading.checked == false && sports.checked == false && otherHobby === "") {
        alert("Error: Hobby required. Please make a selection or specify a different hobby.");
        return false;
    }
    // Satisfaction Survey
    let yesRadio = document.forms["theForm"]["Yes"];
    let noRadio = document.forms["theForm"]["No"];
    if (yesRadio.checked == false && noRadio.checked == false) {
        alert("Error: Survey required. Please select yes or no.")
    }

    return true;
}