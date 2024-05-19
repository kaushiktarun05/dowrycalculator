function calculateDowry() {
    var groomName = document.getElementById('groomName').value;
    var brideName = document.getElementById('brideName').value;
    var age = parseInt(document.getElementById('age').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalary').value);
    var education = document.getElementById('education').value;
    var caste = document.getElementById('caste').value;
    var ownsHouse = document.getElementById('ownsHouse').value;
    var ownsCar = document.getElementById('ownsCar').value;
    var alumni = document.getElementById('alumni').value;

    // Base dowry amount
    var dowryAmount = 5000000; // Base amount

    // Age factor
    if (age >= 30) {
        dowryAmount += 2000000; // Increase dowry for older groom
    } else if (age <= 25) {
        dowryAmount -= 1000000; // Decrease dowry for younger groom
    }

    // Salary factor
    if (monthlySalary > 50000) {
        dowryAmount += 1000000; // Increase dowry for higher salary
    }

    // Education factor
    switch (education) {
        case 'doctorate':
            dowryAmount += 5000000;
            break;
        case 'postGraduate':
            dowryAmount += 3000000;
            break;
        case 'graduate':
            dowryAmount += 2000000;
            break;
        case 'college':
            dowryAmount += 1000000;
            break;
        default:
            break;
    }

    // Caste factor
    switch (caste) {
        case 'general':
            dowryAmount += 1000000;
            break;
        case 'obc':
            dowryAmount += 2000000;
            break;
        case 'sc':
            dowryAmount += 3000000;
            break;
        case 'st':
            dowryAmount += 4000000;
            break;
        default:
            break;
    }

    // House factor
    switch (ownsHouse) {
        case 'bungalow':
            dowryAmount += 3000000;
            break;
        case 'flat':
            dowryAmount += 2000000;
            break;
        default:
            break;
    }

    // Car factor
    switch (ownsCar) {
        case 'supercar':
            dowryAmount += 4000000;
            break;
        case 'suv':
            dowryAmount += 2000000;
            break;
        case 'sedan':
            dowryAmount += 1000000;
            break;
        default:
            break;
    }

    // Alumni factor
    switch (alumni) {
        case 'iitIimNfsu':
            dowryAmount += 5000000;
            break;
        case 'centralGovt':
            dowryAmount += 4000000;
            break;
        case 'stateGovt':
            dowryAmount += 3000000;
            break;
        case 'privateCollege':
            dowryAmount += 2000000;
            break;
        case 'amity':
            dowryAmount += 1000000;
            break;
        default:
            break;
    }

    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>${groomName}</strong> should pay <strong>${dowryAmount} INR</strong> to <strong>${brideName}</strong>.`;
}
