// window.addEventListener("DOMContentLoaded", (event) => {

//   // ** Phase 1B: Update license with event delegation and event.target **
//   let driverForm = document.getElementById('drivers-license-form')
//   driverForm.addEventListener('input', (event) => {
//     let inputID = event.target.id;
//     let inputValue = event.target.value; 
//     let cardID = 'card-' + inputID;
//     let spanID = document.getElementById(cardID); 
//     if (inputID === "donor-status") {
//       if (event.target.checked) spanID.innerText = "Donor";
//       else spanID.innerText = "Non-Donor";
//     }
//     else spanID.innerText = inputValue; 
//   });


//   // ** Phase 2: Add focus and blur events to form inputs **


//   // ** Phase 3: Check that license numbers match **


//   // ** Phase 4: Update submit button click count **


// });

window.addEventListener("DOMContentLoaded", (event) => {
  // ** Phase 1B: Update license with event delegation and event.target **
  let donorText = document.getElementById("card-donor-status");
  donorText.innerText = "Off";

  let driverForm = document.getElementById('drivers-license-form')
  driverForm.addEventListener('input', (event) => {
    let inputID = event.target.id;
    // check if inputID is the checkbox

    // if it is, set spanID to On using target.event.checked
    // if it's not, then execute lines 10 - 13;
    let inputValue = event.target.value; //"on"
    let cardID = 'card-' + inputID;
    let spanID = document.getElementById(cardID); // "on"
    if (inputID === "donor-status") {
      if (donorText.innerText === "Off") {
        donorText.innerText = "On";
      }
      else {
        donorText.innerText = "Off";
      }
    }
    else {
      spanID.innerText = inputValue;
    }
    // "on"
    // if (event.target.checked) {
    //   spanID.innerText = "Off";
    // }
    // else {
    //   spanId.innerText = "Off";
    // }
  });


  // ** Phase 2: Add focus and blur events to form inputs **

  let allTexts = document.querySelectorAll(".form__input");
  allTexts.forEach(text => {
    text.addEventListener('focus', (event) => {
      event.target.style.backgroundColor = 'lightgreen';
    })
    text.addEventListener('blur', (event) => {
      event.target.style.backgroundColor = 'initial';
    })
  })

  // driverForm.addEventListener('focus', (event) => {
  //   // console.log("hi");
  //   event.target.style.backgroundColor = 'lightgreen'
  // }, true);
  // driverForm.addEventListener('blur', (event) => {
  //   // console.log("bye");
  //   event.target.style.backgroundColor = 'initial'
  // }, true);
  

  // ** Phase 3: Check that license numbers match **
  setInterval(() => {
    console.log("test");
    let licenseNumber = document.getElementById("license-num");
    let confirm = document.getElementById("license-num-confirm");
    if (licenseNumber.value !== confirm.value) {
      event.preventDefault();
      licenseNumber.style.backgroundColor = "lightcoral";
      confirm.style.backgroundColor = "lightcoral";
    }
  }, 3000);

  // ** Phase 4: Update submit button click count **
  let count = 0;
  let button = document.querySelector('.form__submit')
  button.addEventListener('click', (event) => {

    count++;
    button.innerText = 'Submitted ' + count + ' times.'
    event.preventDefault();
  })


});


