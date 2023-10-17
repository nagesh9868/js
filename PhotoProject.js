// const photoApi = "https://jsonplaceholder.typicode.com/users";
const photoApi = "https://jsonplaceholder.typicode.com/photos";
const fetchApi = fetch(photoApi)

const arrayFromApi = [
    // {
    //     "albumId": 1,
    //     "id": 1,
    //     "title": "accusamus beatae ad facilis cum similique qui sunt",
    //     "url": "https://via.placeholder.com/600/92c952",
    //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //   },
    //   {
    //     "albumId": 1,
    //     "id": 2,
    //     "title": "reprehenderit est deserunt velit ipsam",
    //     "url": "https://via.placeholder.com/600/771796",
    //     "thumbnailUrl": "https://via.placeholder.com/150/771796"
    //   },
    //   {
    //     "albumId": 1,
    //     "id": 3,
    //     "title": "officia porro iure quia iusto qui ipsa ut modi",
    //     "url": "https://via.placeholder.com/600/24f355",
    //     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    //   },
    //   {
    //     "albumId": 1,
    //     "id": 4,
    //     "title": "culpa odio esse rerum omnis laboriosam voluptate ",
    //     "url": "https://via.placeholder.com/600/d32776",
    //     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    //   },
    //   {
    //     "albumId": 1,
    //     "id": 5,
    //     "title": "natus nisi omnis corporis facere molestiae rerum in",
    //     "url": "https://via.placeholder.com/600/f66b97",
    //     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    //   },
    //   {
    //     "albumId": 1,
    //     "id": 6,
    //     "title": "accusamus ea aliquid et amet sequi nemo",
    //     "url": "https://via.placeholder.com/600/56a8c2",
    //     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    //   }
]

// const dataFromApi = async()=>{
//     const fetchApi = await fetch(photoApi)
//     const result = await fetchApi.json()
//     console.log(result)
//     document.getElementById('photo-site').innerHTML = result.map((item)=>
//         `<div class="photos" style="border: 3px solid red; width: 14%; display:inline-flex; border-radius: 1rem;margin:1rem;">
//                 <a href="${item.title}">
//                     <div class="thumbnail">
//                         <img style="width: 100%;border-radius: .8rem;" src="${item.thumbnailUrl}" alt="">
//                     </div>
//                     <div class="info" style="text-align: center;">
//                         <h4 class="title" style="color: cyan;">
//                             ${item.title}
//                         </h4>
//                         <h5 style="padding: 5px; color: white; font-weight: bold;">Price: - 5000</h5>
//                     </div>
//                     <button style="width: 100%;height: 30px; border-radius: .8rem;">Add To Cart</button>
//                 </a>
//         </div>`
//     ).join('')
// }
// dataFromApi()

fetchApi.then(function data(response) {
    return response.json()
}).then((item) => {
    // const innerArray = data
    // arrayFromApi.push(...innerArray)
    console.log(item);
    document.getElementById('photo-site').innerHTML = item.map((item)=>
        `<div class="photos" style="border: 3px solid blue;width:14%; display:inline-flex; border-radius: 1rem;margin:1rem;justify-content:center;padding:1rem">
                <a style = "display:flex; flex-direction: column; align-items:center;">
                    <div class="thumbnail">
                        <img style="height: 213px;border-radius: .8rem;" src="${item.thumbnailUrl}" alt="">
                    </div>
                    <div class="info" style="text-align: center;">
                        <h4 class="title" style="color: cyan;">
                            ${item.title}
                        </h4>
                        <h5 style="padding: 5px; color: white; font-weight: bold;">Price: - 5000</h5>
                    </div>
                    <button style="width: 100%;height: 30px; border-radius: .8rem;">Add To Cart</button>
                    <input type="text" placeholder="Enter the color name">
                </a>
        </div>`
    ).join('')
})

// setTimeout(() => {
//     for (let item of arrayFromApi) {
//         document.getElementById('photo-site').innerHTML += `${item.title}`
//         `<div class="photos" style="border: 3px solid red; width: 14%; display:inline-flex; border-radius: 1rem;margin:1rem;">
//                 <a href="${item.title}">
//                     <div class="thumbnail">
//                         <img style="width: 100%;border-radius: .8rem;" src="${item.thumbnailUrl}" alt="">
//                     </div>
//                     <div class="info" style="text-align: center;">
//                         <h4 class="title" style="color: cyan;">
//                             ${item.title}
//                         </h4>
//                         <h5 style="padding: 5px; color: white; font-weight: bold;">Price: - 5000</h5>
//                     </div>
//                     <button style="width: 100%;height: 30px; border-radius: .8rem;">Add To Cart</button>
//                 </a>
//         </div>`
    
//     console.log(item.name);
//     }
// }, 10000);
// console.log(arrayFromApi)
