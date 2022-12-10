async function fetchAllBlogs() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogsHTML = '';
        for(let blog of blogs) {
            // console.log(blog.title);
            // console.log(blog.tags);
            // console.log(blog.author);
            // console.log(blog.date);
            // console.log(blog.content);
            blogsHTML += `
            
                <article>
                    <p>${blog.title}</p>
                    <p>${blog.author}</p>
                    <p>${blog.date}</p>
                    <p>${blog.tags}</p>
                    <p>${blog.content}</p>
                </article>
            
            `
        }

        document.getElementById('blog-list').innerHTML = blogsHTML;

    } catch(error) {
        console.log(error);
    }
}

fetchAllBlogs();