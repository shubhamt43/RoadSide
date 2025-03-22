// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('vehicleRentalForm');
//     const messageDiv = document.getElementById('message');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();

//         if (validateForm()) {
//             const formData = new FormData(form);
            
//             // Send data to the server (replace with your actual API endpoint)
//             fetch('/api/submit-vehicle-rental', {
//                 method: 'POST',
//                 body: formData
//             })
//             .then(response => response.json())
            