// Task Template
/*
  Task: Change Theme
  Description: Implement the functionality to change the theme of the website when the buttons are clicked.
  
  Functions to implement:
  
  1. applyTheme(theme)
    - Parameters:
      - theme (string): The selected theme ("blue", "orange", or "green").
    - Description: Applies the selected theme by changing the styles of the jumbotron, donate button, and volunteer button.
  
  2. validateForm()
    - Returns: Boolean
    - Description: Validates the form fields and returns true if all fields are valid, false otherwise.
  
  3. clearFormFields()
    - Description: Clears the form fields by setting their values to empty strings.
*/

// Implement the functions below according to the provided template.

//First part

// Define the themes and their corresponding styles
const themes = {
    blue: {
      jumbotronColor: "#588fbd",
      donateButtonColor: "#ffa500",
      volunteerButtonColor: "black",
      volunteerButtonTextColor: "white"
    },
    orange: {
      jumbotronColor: "#f0ad4e",
      donateButtonColor: "#5751fd",
      volunteerButtonColor: "#31b0d5",
      volunteerButtonTextColor: "white"
    },
    green: {
      jumbotronColor: "#87ca8a",
      donateButtonColor: "black",
      volunteerButtonColor: "#8c9c08"
    }
  };
  
  // Get references to the buttons and jumbotron
  const buttons = {
    blue: document.getElementById("blueBtn"),
    orange: document.getElementById("orangeBtn"),
    green: document.getElementById("greenBtn")
  };
  const jumbotron = document.querySelector(".jumbotron");
  const donateButton = document.querySelector(".btn.btn-primary.btn-lrg");
  const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
  
  // Add event listeners to the buttons
  for (const [theme, button] of Object.entries(buttons)) {
    button.addEventListener("click", function() {
      applyTheme(theme);
    });
  }
  
  // Function to apply the selected theme
  function applyTheme(theme) {
    const { jumbotronColor, donateButtonColor, volunteerButtonColor, volunteerButtonTextColor } = themes[theme];
    jumbotron.style.backgroundColor = jumbotronColor;
    donateButton.style.backgroundColor = donateButtonColor;
    volunteerButton.style.backgroundColor = volunteerButtonColor;
    volunteerButton.style.color = volunteerButtonTextColor;
  }

//Second part

// Get references to the form elements
const form = document.querySelector("form");
const nameField = document.getElementById("example-text-input");
const emailField = document.getElementById("exampleInputEmail1");
const descriptionField = document.getElementById("exampleTextarea");
const submitButton = document.querySelector("form button[type='submit']");

// Add event listener to the form submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate form fields
  const isValid = validateForm();

  if (isValid) {
    // Display thank you message
    alert("Thank you for filling out the form!");

    // Clear form fields
    clearFormFields();
  }
});

// Function to validate form fields
function validateForm() {
  const fieldsToValidate = [
    { field: nameField, validation: value => value.trim().length > 0 },
    { field: emailField, validation: value => value.trim().length > 0 && value.includes("@") },
    { field: descriptionField, validation: value => value.trim().length > 0 }
  ];

  let isValid = true;

  fieldsToValidate.forEach(({ field, validation }) => {
    if (!validation(field.value)) {
      field.style.backgroundColor = "red";
      isValid = false;
    } else {
      field.style.backgroundColor = "";
    }
  });

  return isValid;
}

// Function to clear form fields
function clearFormFields() {
  nameField.value = "";
  emailField.value = "";
  descriptionField.value = "";
}

// Export the function(s)
module.exports = {
    applyTheme,
    validateForm,
    clearFormFields
  };
  
