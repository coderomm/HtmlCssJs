let quantitySelector = document.querySelector('.quantity-selector__input');
let addToCartBtn = document.querySelector('.buy-buttons .cowlendar-add-to-cart');
let popUpCloseBtn = document.querySelector('#popUpCloseBtn');
let continueBtn = document.querySelector('#continueBtn');
var popUp = document.querySelector('.popup');
let popupFields = document.querySelectorAll('.popup-container .popup-fields');

const showPopup = () => {
    popUp.style.display = "flex";
};

popUpCloseBtn.addEventListener("click", () => {
    popUp.style.display = "none";
});

continueBtn.addEventListener("click", () => {
    popUp.style.display = "none";
});

const generateUniqueId = () => {

};
const generatePopUpFields = () => {
    const quantity = parseInt(quantitySelector.value);
    for (let i = 1; i <= quantity; i++) {
        const fieldId = `popupFields-${i}`;

        if (!document.getElementById(fieldId)) {
            const field = document.createElement('div');
            field.id = fieldId;
            field.className = 'popup-fields';

            // Set the dynamic content of the popup
            field.innerHTML = `
      <h6>Consumer ${i}</h6>
          <p class="line-item-property__field">
            <input
              class="required input"
              id="consumer-unique-id"
              type="text"
              name="properties[Unique Id]"
              hidden
            />
          </p>
          <p class="line-item-property__field">
            <label for="consumer-name">Name</label>
            <input
              required
              class="required input"
              id="consumer-name-${i}"
              type="text"
              name="properties[Name]"
            />
          </p>
          <p class="line-item-property__field">
            <label>Gender</label><br>
            <input required class="required" type="radio" name="properties[Gender]" value="Male"> <span>Male</span>
            <input required class="required" type="radio" name="properties[Gender]" value="Female"> <span>Female</span>
          </p>
          <p class="line-item-property__field">
            <label for="age">Age</label>
            <input required class="required" id="age" type="text" name="properties[Age]">
          </p>
          <p class="line-item-property__field">
            <label>Blood Group</label><br>
            <input required class="required" type="radio" name="properties[Blood Group]" value="A+"> <span>A+</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="A-"> <span>A-</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="B+"> <span>B+</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="B-"> <span>B-</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="O+"> <span>O+</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="O-"> <span>O-</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="AB"> <span>AB</span>
            <input required class="required" type="radio" name="properties[Blood Group]" value="AB-"> <span>AB-</span>
          </p>
          <button id="continueBtn" class="button button--xl button--outline button--secondary">Continue</button>
            `;

            // Append the popup to the v-stack element inside shopify-product-form
            const vStack = document.querySelector('.popup .fields-container');
            if (vStack) {
                vStack.appendChild(field);
            }
        }
    }
    showPopup();
};

addToCartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    generatePopUpFields();
});