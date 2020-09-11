console.log("Let's get this party started!");

async function requestInfo() {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
    const results = res.data;

    const search = document.querySelector('#search');
    search.addEventListener('click', function() {
        for(let x in results) {
            console.log(x.data.type);
        }
    });
}
console.log(requestInfo());

// ?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym