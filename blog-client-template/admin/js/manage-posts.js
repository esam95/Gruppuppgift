async function getAllPosts() {
    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts`);
        
        
        let data = await response.json()
        
        let table = document.getElementById('table');

        for(let i = 0; i < data.length; i++) {
            table.innerHTML = table.innerHTML +
            `<br>
            <tr>
                <td>${data[i].title}</td>
                <td>${data[i].author}</td>
                <td>${data[i].tags}</td>
                <td>${data[i].date}</td>
                <td>
                    <a href="">Update</a>
                    <a href="">Delete</a>
                </td>
            </tr>`
        }

    } catch(error) {
        console.log(error);
    }
}



getAllPosts();