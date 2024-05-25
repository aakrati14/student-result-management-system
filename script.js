// script.js
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform login authentication (this is just a placeholder)
    if (username === "admin" && password === "password") {
      // If login successful, show the result section
      document.getElementById("login-section").style.display = "none";
      document.getElementById("result-section").style.display = "block";

      // Simulate fetching and displaying student result (again, just a placeholder)
      const resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = `
          <p>Student Name: John Doe</p>
          <p>Maths: 90</p>
          <p>Science: 85</p>
          <p>English: 92</p>
          <p>Total Marks: 267</p>
          <p>Percentage: 89%</p>
      `;
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
