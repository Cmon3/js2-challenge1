const { applyTheme } = require('../../dom-manipulation-2/js/main');

test('applyTheme should change the styles to the orange theme', () => {
  // Set up the initial state
  document.body.innerHTML = `
    <div class="jumbotron"></div>
    <button id="donateBtn" style="background-color: red;"></button>
    <button id="volunteerBtn" style="background-color: red;"></button>
  `;

  // Apply the orange theme
  applyTheme('orange');

  // Check if the styles are applied correctly
  expect(document.querySelector('.jumbotron').style.backgroundColor).toBe('#f0ad4e');
  expect(document.getElementById('donateBtn').style.backgroundColor).toBe('#5751fd');
  expect(document.getElementById('volunteerBtn').style.backgroundColor).toBe('#31b0d5');
});
