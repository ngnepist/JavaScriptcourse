
let json_data = {};
const searchBtn = document.getElementById("search_btn");
const clearBtn = document.getElementById("clear_btn");


const recomendation = fetch('./travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        json_data = data;

        data.countries.forEach(item => {
            
            console.log(item);
        });
    })
    .catch(error => {
        console.error('Error fetching the travel recommendations:', error);
    });

    // json_data.countries.forEach(item => {
    //     console.log(item);
    // });
    

    // Function to perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase(); // Get user input and convert to lowercase
    // const resultsDiv = document.getElementById('searchResults'); // Div to display search results
    // resultsDiv.innerHTML = ""; // Clear previous results

    const keys_beach = ["beach", "beaches"] ;
    const keys_country = ["country", "countries"] ;
    const keys_temple = ["temple", "temples"] ;
    // Display the data on the webpage
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';
    if (keys_country.includes(searchInput)) {
        json_data.countries.slice(1,2).forEach(item => {
            item.cities.forEach(item =>{
                const recommendationItem = `
                <div class="card">
                <img src="${item.imageUrl}" alt="Logo">
                <div class="card-content">
                    <h2>${item.name}</h2>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <a href="#" target="_blank">Visit</a>
                </div
                </div>
                `;
                debugger;
                recommendationsDiv.innerHTML += recommendationItem;

            });
        });
    }
    else if (keys_beach.includes(searchInput)) {
        json_data.beaches.slice(0,2).forEach(item => {
            const recommendationItem = `
            <div class="card">
            <img src="${item.imageUrl}" alt="Logo">
            <div class="card-content">
                <h2>${item.name}</h2>
                <p><strong>Description:</strong> ${item.description}</p>
                <a href="#" target="_blank">Visit</a>
            </div
            </div>
            `;
            debugger;
            recommendationsDiv.innerHTML += recommendationItem;

        });
    }
    else if (keys_temple.includes(searchInput)) {
        json_data.temples.slice(0,2).forEach(item => {
            const recommendationItem = `
            <div class="card">
            <img src="${item.imageUrl}" alt="Logo">
            <div class="card-content">
                <h2>${item.name}</h2>
                <p><strong>Description:</strong> ${item.description}</p>
                <a href="#" target="_blank">Visit</a>
            </div
            </div>
            `;
            debugger;
            recommendationsDiv.innerHTML += recommendationItem;

        });

    }

}

function performClear(params) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';
}

searchBtn.addEventListener("click", performSearch);
clearBtn.addEventListener("click", performClear)