class ApiService{
    static getBreweries(page = 0){
        return fetch('https://api.openbrewerydb.org/v1/breweries?per_page=10&page='+page)
        .then(res => res.json())
    }
}
