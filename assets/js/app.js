const btn = document.querySelector("#btn");
const contendor = document.querySelector("#post-data")


const consultarPost = async () =>{
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await data.json();
        posts.forEach(post => {
            inyectarHTML(post);
        });
    } catch (err) {
        console.log(err);
    }
}

function inyectarHTML(post){
    const { title, body} = post
    const ul = document.createElement('ul');
    const b = document.createElement('b')
    const liTitulo = document.createElement('li');
    const liBody = document.createElement('li');
    b.textContent = title;
    liBody.textContent = body;
    liTitulo.appendChild(b)
    ul.appendChild(liTitulo);
    ul.appendChild(liBody);
    contendor.appendChild(ul)
}

btn.addEventListener('click', consultarPost)

