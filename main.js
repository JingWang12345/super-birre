let page = 0;

function loadBreweries(page){
    ApiService.getBreweries(page).then(breweries=> renderPage(breweries));
}

loadBreweries(page);


function next(){
    console.log('ciao');
    page++;
    loadBreweries(page);
}

function previous(){
    page--;
    loadBreweries(page);
}


function renderPage(data) {
    const cardContainer= document.getElementById('card-container');
    cardContainer.innerHTML='';
    for (let i = 0; i < data.length; i++) {
        const brewery = data[i];
        console.log(brewery.name);
        const container = document.createElement('div');
        container.classList.add('card');
        const template = `
            <iframe class="map" src="https://www.openstreetmap.org/export/embed.html?bbox=${brewery.longitude}%2C${brewery.latitude}%2C${brewery.longitude}%2C${brewery.latitude}&amp;layer=mapnik&amp;marker=${brewery.latitude}%2C${brewery.longitude}"></iframe>
            <div class="card-text">
                <h3>Name: ${brewery.name}</h3>
                <span>Type: ${brewery.brewery_type}</span>
                <span>Site: ${brewery.website_url}</span>
                <span>Country: ${brewery.country}</span>
                <span>Province: ${brewery.state_province}</span>
                <span>City: ${brewery.city}</span>
                <span>Street: ${brewery.street}</span>
                <span>State: ${brewery.state}</span>
                <span>Tel: ${brewery.phone}</span>
            </div>
            
        `
        container.innerHTML=template;
        cardContainer.appendChild(container);
    }
}