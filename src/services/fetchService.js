
function fetchService() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    let pokeData = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { results } = data;
            for (let i = 0; i < results.length; i++) {
                fetch(results[i].url)
                    .then(response => response.json())
                    .then(dataSinglePoke => {
                        const single = dataSinglePoke;
                        fetch(dataSinglePoke.species.url)
                            .then(response => response.json())
                            .then(dataEvolution => {
                                const pokeTotal = { ...single, ...dataEvolution }
                                return pokeData.push(pokeTotal)
                            })
                    })
            }
        })
    return pokeData
}

export default fetchService;