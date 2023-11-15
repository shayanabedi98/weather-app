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

document.querySelector('form').addEventListener('submit', async () => {
    const city = document.querySelector('input').value;
    const response = await fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.parse({ city })
    });
    const data = await response.json();
    document.querySelector('h2').textContent = `Temperature in ${city}: ${data.main.temp}°C`;
});