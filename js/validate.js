function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');

  const latitude = document.getElementById("latitude").value;
  const validLat = latitude && (latitude >= -90 && latitude <= 90);
  let invalidLat = document.getElementById("latitude-invalid");

  if (!validLat) {
    event.preventDefault();
    invalidLat.removeAttribute("hidden");
  }
  else {
    invalidLat.setAttribute("hidden","true");
  }

  const longitude = document.getElementById("longitude").value;
  const validLong = longitude && (longitude >= -180 && longitude <= 180);
  let invalidLong = document.getElementById("longitude-invalid");
  if (!validLong) {
    event.preventDefault();
    invalidLong.removeAttribute("hidden");
  } else {
    invalidLong.setAttribute("hidden", "true");
  }

  const name = document.getElementById("name").value;
  let invalidName = document.getElementById("name-invalid");
  if (!name) {
    event.preventDefault();
    invalidName.removeAttribute("hidden");
  } else {
    invalidName.setAttribute("hidden", "true");
  }

  const description = document.getElementById("description").value;
  let invalidDesc = document.getElementById("description-invalid");
  if (!description) {
    event.preventDefault();
    invalidDesc.removeAttribute("hidden");
  } else {
    invalidDesc.setAttribute("hidden", "true");
  }

  const date_observed = document.getElementById("date_observed").value;
  let invalidDate = document.getElementById("date-invalid");
  if (!date_observed) {
    event.preventDefault();
    invalidDate.removeAttribute("hidden");
  } else {
    invalidDate.setAttribute("hidden", "true");
  }

  if (validLat && validLong && name && description && date_observed) {
    return true;
  } else {
    event.preventDefault();
    //console.log("bad data");
    alert('Please fill out all fields correctly');
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
