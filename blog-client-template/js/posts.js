async function fetchAllBlogs() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogsHTML = '';
        for(let blog of blogs) {
            console.log(blog);

        }

        document.getElementById('blog-list').innerHTML = blogsHTML;

    } catch(error) {
        console.log(error);
    }
}

fetchAllBlogs();