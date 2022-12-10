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
            let blogStri = blog.content; 
            if(blogStri.length > 100) {
                blogStri = blogStri.substring(0,100);

            }

            blogsHTML += `

                <article>
                    <p>${blog.title}</p>
                    <p>${blog.author}</p>
                    <p>${blog.date}</p>
                    <p>${blog.tags}</p>
                    <p>${blogStri}</p>
                    <a href="post.html?id=${blog._id}">Read more</a>
                </article>

            
            `
        }

        document.getElementById('blog-list').innerHTML = blogsHTML;

    } catch(error) {
        console.log(error);
    }
}

fetchAllBlogs();