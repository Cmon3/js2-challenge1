const { applyTheme } = require('../../dom-manipulation-2/js/main');

test('applyTheme should change the styles to the blue theme', () => {
  // Set up the initial state
  document.body.innerHTML = `
    <div class="jumbotron"></div>
    <button id="donateBtn" style="background-color: red;"></button>
    <button id="volunteerBtn" style="background-color: red; color: white;"></button>
  `;

  // Apply the blue theme
  applyTheme('blue');

  // Check if the styles are applied correctly
  expect(document.querySelector('.jumbotron').style.backgroundColor).toBe('#588fbd');
  expect(document.getElementById('donateBtn').style.backgroundColor).toBe('#ffa500');
  expect(document.getElementById('volunteerBtn').style.backgroundColor).toBe('black');
  expect(document.getElementById('volunteerBtn').style.color).toBe('white');
});
