const { applyTheme } = require('../../dom-manipulation-2/js/main');

test('applyTheme should change the styles to the green theme', () => {
  // Set up the initial state
  document.body.innerHTML = `
    <div class="jumbotron"></div>
    <button id="donateBtn" style="background-color: red;"></button>
    <button id="volunteerBtn" style="background-color: red;"></button>
  `;

  // Apply the green theme
  applyTheme('green');

  // Check if the styles are applied correctly
  expect(document.querySelector('.jumbotron').style.backgroundColor).toBe('#87ca8a');
  expect(document.getElementById('donateBtn').style.backgroundColor).toBe('black');
  expect(document.getElementById('volunteerBtn').style.backgroundColor).toBe('#8c9c08');
});
