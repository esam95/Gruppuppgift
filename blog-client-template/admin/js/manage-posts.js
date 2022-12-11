async function getAllPosts() {
    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts`);
        
        
        let data = await response.json()
        
        let table = document.getElementById('table');

        for(let i = 0; i < data.length; i++) {
            table.innerHTML = table.innerHTML +
            `<tr>
                <td>${data[i].title}</td>
                <td>${data[i].author}</td>
                <td>${data[i].tags}</td>
                <td>${data[i].date}</td>
                <td>
                    <a href="">Update</a>
                    <a href="#" class="delete-link" id="${data[i]._id}">Delete</a>
                </td>
            </tr>`
        }

        let deleteLinks = document.getElementsByClassName('delete-link');

        for(let i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].addEventListener("click", async function(e) {
                e.preventDefault();
                await fetch(`https://blog-api-assignment.up.railway.app/posts/${e.target.id}`, {
                method: 'DELETE'
                })
                e.target.parentNode.parentNode.remove();
            })
        }

    } catch(error) {
        console.log(error);
    }
}
getAllPosts();


