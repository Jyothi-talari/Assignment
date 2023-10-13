function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const genders = [];
    if (document.getElementById('male').checked) genders.push('Male');
    if (document.getElementById('female').checked) genders.push('Female');
    if (document.getElementById('other').checked) genders.push('Other');

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && genders.length > 0 && profession && email && mobile) {
        // Display submitted values in popup
        const submittedValues = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${genders.join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        document.getElementById('submittedValues').innerHTML = submittedValues;

        // Show popup
        document.querySelector('.popup').style.display = 'flex';
    } else {
        alert('Please fill in all fields.');
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    resetForm();
}
