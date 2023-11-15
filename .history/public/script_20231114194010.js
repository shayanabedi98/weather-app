document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the form from submitting the default way
    const city = document.querySelector('input[name="city"]').value;
    try {
        const response = await fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city })
        });
        const data = await response.json();
        if (response.ok) {
            document.getElementById('temperature').textContent = `Temperature in ${city}: ${data.temp}°C`;
        } else {
            throw new Error(data.error || 'An error occurred');
        }
    } catch (error) {
        document.getElementById('temperature').textContent = error.message;
    }
});