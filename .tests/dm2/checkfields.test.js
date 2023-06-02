const { validateForm, clearFormFields } = require('../../dom-manipulation-2/js/main');

test('validateForm should return true for valid form fields', () => {
    // Set up the initial state
    document.body.innerHTML = `
      <form>
        <input type="text" id="example-text-input" value="John Doe">
        <input type="email" id="exampleInputEmail1" value="johndoe@example.com">
        <textarea id="exampleTextarea">Some description</textarea>
      </form>
    `;
  
    // Validate the form
    const isValid = validateForm();
  
    // Expect the result to be true
    expect(isValid).toBe(true);
  });
  
  test('clearFormFields should clear all form fields', () => {
    // Set up the initial state
    document.body.innerHTML = `
      <form>
        <input type="text" id="example-text-input" value="John Doe">
        <input type="email" id="exampleInputEmail1" value="johndoe@example.com">
        <textarea id="exampleTextarea">Some description</textarea>
      </form>
    `;
  
    // Clear the form fields
    clearFormFields();
  
    // Expect all form fields to be empty
    expect(document.getElementById('example-text-input').value).toBe('');
    expect(document.getElementById('exampleInputEmail1').value).toBe('');
    expect(document.getElementById('exampleTextarea').value).toBe('');
  });
