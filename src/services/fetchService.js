
function fetchService(url) {
    return (
        fetch(url)
            .then(response => response.json())
    )
}

export default fetchService;