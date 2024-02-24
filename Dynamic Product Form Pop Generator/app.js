// debugger
// Select the quantity selector and add to cart button
let quantitySelector = document.querySelector('.quantity-selector__input');
let addToCartBtn = document.querySelector('#addToCartBtn');
let popUpCloseBtn = document.querySelector('#popUpCloseBtn');
var popUp = document.querySelector('.popup');
let popupFields = document.querySelectorAll('.popup-container .popup-fields');

// Function to show a popup
const showPopup = () => {
  popUp.style.display = "flex";
};

popUpCloseBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

// Get the selected quantity
const generatePopUpFields = () => {
  const quantity = parseInt(quantitySelector.value);
  // Loop through the selected quantity to create and display popups
  for (let i = 1; i <= quantity; i++) {
    const fieldId = `popupFields-${i}`;

    // Create a new popup element if it doesn't exist
    if (!document.getElementById(fieldId)) {
      const field = document.createElement('div');
      field.id = fieldId;
      field.className = 'popup-fields';

      // Set the dynamic content of the popup
      field.innerHTML = `
          <p class="line-item-property__field">
            <label for="consumer-first-name">Consumer First Name</label>
            <input
              required
              class="required input"
              id="consumer-first-name"
              type="text"
              name="properties[Consumer First Name]"
            />
          </p>
          <p class="line-item-property__field">
            <label for="consumer-last-name">Consumer Last Name</label>
            <input
              required
              class="required input"
              id="consumer-last-name"
              type="text"
              name="properties[Consumer Last Name]"
            />
          </p>
          <p class="line-item-property__field">
            <label>Gender</label><br />
            <select
              required
              class="required"
              id="gender"
              name="properties[Gender]"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather not say">Rather not say</option>
            </select>
          </p>
          <p class="line-item-property__field">
            <label>Blood Group</label><br />
            <input
              required
              class="required"
              type="radio"
              name="properties[Blood Group]"
              value="A+"
            />
            <span>A+</span><br />
            <input
              required
              class="required"
              type="radio"
              name="properties[Blood Group]"
              value="B+"
            />
            <span>B+</span><br />
            <input
              required
              class="required"
              type="radio"
              name="properties[Blood Group]"
              value="A-"
            />
            <span>A-</span><br />
            <input
              required
              class="required"
              type="radio"
              name="properties[Blood Group]"
              value="B-"
            />
            <span>B-</span><br />
            <input
              required
              class="required"
              type="radio"
              name="properties[Blood Group]"
              value="O+"
            />
            <span>O+</span><br />
          </p>
            `;

      // Append the popup to the v-stack element inside shopify-product-form
      const vStack = document.querySelector('.popup .fields-container');
      if (vStack) {
        vStack.appendChild(field);
      }
    }
  }
  // Show the first popup
  showPopup();
};

const checkReq = () => {
  // Check if all popups have been filled out
  const allPopupsFilled = Array.from(popupFields).every(popup => {
    const inputs = popup.querySelectorAll('input, select');
    return Array.from(inputs).every(input => input.value.trim() !== '');
  });
};

// Listen for click events on the add to cart button
addToCartBtn.addEventListener('click', (event) => {
  // Prevent the default behavior of the button
  event.preventDefault();
  generatePopUpFields();

  // If all popups are filled out, submit the form (add to cart)
  // if (allPopupsFilled) {
  // Submit the form (add to cart)
  // addToCartBtn.closest('form').submit();
  // } else {
  //   // Display a message or highlight the unfilled popups
  //   alert('Please fill out all the required fields in the popups before adding to cart.');
  // }
});
