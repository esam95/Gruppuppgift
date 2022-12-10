async function fetchPost() {
    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams.get('id'))

    let response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${urlParams.get('id')}`);
    let data = await response.json()
    console.log(data);

    document.getElementById('content').innerHTML = `
        <h2>${data.title}</h2><br>
        <h3>${data.author}</h3><br>
        <article>${data.content}</article><br>
        <section>${data.date}</section><br>
        <section>${data.tags}</section><br>
    `
}

fetchPost();