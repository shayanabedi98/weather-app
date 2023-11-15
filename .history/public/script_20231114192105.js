// document.querySelector('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const city = document.querySelector('input').value;
//     const response = await fetch('/weather', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ city })
//     });
//     const data = await response.json();
//     document.querySelector('h2').textContent = `Temperature in ${city}: ${data.temp.toFixed(2)}°C`;
// });

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.querySelector('input').value;
    try {
        const response = await fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.querySelector('h2').textContent = `Temperature in ${city}: ${data.temp.toFixed(2)}°C`;
    } catch (error) {
        console.error('Fetch error:', error);
        document.querySelector('h2').textContent = error.message;
    }
});