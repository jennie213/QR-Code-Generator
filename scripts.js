
        $('#qrForm').on('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const url = $('#urlInput').val();
            const qrResult = $('#qrResult');

            // Clear previous QR code image
            qrResult.empty();

            // Generate QR code and display it
            QRCode.toDataURL(url)
                .then(qrImageUrl => {
                    qrResult.html(`<img src="${qrImageUrl}" alt="QR Code" class="qr-image" />`);
                })
                .catch(err => {
                    console.error(err);
                    alert('An error occurred while generating the QR code.');
                });
        });