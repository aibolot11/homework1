const ccg = document.querySelector('.ccg')
const request = async () => {
    try {
        const fetchRequest = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const data = await fetchRequest.json()
            data.forEach(card => {
                const change = document.createElement('div')
                change.setAttribute('class', "card")
                change.innerHTML = `
                <img src='https://i.pinimg.com/736x/d4/8b/bb/d48bbbf4ad74b4fd692c6fb8a77a1c1c.jpg' alt='img'/>
                  <p>:${card.title}</p>
                  <p>${card.body}</p>
                `
                ccg.append(change)

            })
    }catch (error){
        console.log('err')
    }
}
request()
