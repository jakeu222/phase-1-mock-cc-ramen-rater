
// function fetchRamen() {
//     fetch("http://localhost:3000/ramens")
//         .then((r) => r.json())
//         .then((ramen) =>

//             renderData(ramen))
// }
// // fetch the json data

// fetchRamen()
// // here we are creating a new object where the we can manipulate the array?
// function renderData(data) {
//     // loop through the aray and create image tag for ramen menu
//     data.forEach((ramenObject) => {
//         const img = document.createElement("img")
//         img.src = ramenObject["image"]
//         const menu = document.querySelector("#ramen-menu")
//         menu.append(img)
//         // creates button out of the image and displays text content on the page
//         img.addEventListener("click", () => {
//             const detailImg = document.querySelector(".detail-image")
//             const detailName = document.querySelector(".name")
//             const detailRestaurant = document.querySelector(".restaurant")

//             detailName.textContent = ramenObject["name"]
//             detailRestaurant.textContent = ramenObject["restaurant"]
//             detailImg.src = ramenObject["image"]
//             detailImg.alt = ramenObject["name"]

//             const comment = document.querySelector("#comment-display")
//             const rating = document.querySelector("#rating-display")

//             comment.textContent = ramenObject["comment"]

//             rating.textContent = ramenObject["rating"]








//         }
//         )

//     })
// }
// const findForm = document.querySelector("#new-ramen")
// // dev 3 no post needed 
// findForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     newRamenInput()
//     // click the container and submit feature
// }
// )

// function newRamenInput() {
//     const newName = document.querySelector("#new-name")
//     const newRestaurant = document.querySelector("#new-restaurant")
//     const newImg = document.querySelector("#new-image")
//     const newRating = document.querySelector("#new-rating")
//     const newComment = document.querySelector("#new-comment")


//     fetch("http://localhost:3000/ramens", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             name: newName.value,
//             restaurant: newRestaurant.value,
//             image: newImg.value,
//             rating: newRating.value,
//             comment: newComment.value,




//         }),
//     })

// }









fetch("http://localhost:3000/ramens")
    .then(r => r.json())
    .then(ramens => {
        console.log(ramens)
        ramens.forEach((ramenObj) => addToMenu(ramenObj))
    })
function addToMenu(ramenObj) {
    const menu = document.querySelector("#ramen-menu")
    const img = document.createElement("img")
    img.src = ramenObj.image
    menu.append(img)
    img.addEventListener("click", () => {
        //seperate in another function
        displayRamen(ramenObj)

    })

}
function displayRamen(ramenObj) {
    const detailImage = document.querySelector(".detail-image")
    const name = document.querySelector(".name")
    const res = document.querySelector(".restaurant")
    const rating = document.querySelector("#rating-display")
    const newComment = document.querySelector("#comment-display")
    detailImage.src = ramenObj.image
    rating.textContent = ramenObj.rating
    newComment.textContent = ramenObj.comment

    name.textContent = ramenObj.name
    res.textContent = ramenObj.restaurant
}

//function 

const form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e) => ramenFormHandler(e)
)
function ramenFormHandler(e) {
    e.preventDefault()
    const newRamenObj = {
        "name": e.target["name"].value,
        "restaurant": e.target["restaurant"].value,
        "image": e.target["image"].value,
        "rating": e.target["rating"].value,
        "comment": e.target["comment"].value


    }
    addToMenu(newRamenObj)

}
