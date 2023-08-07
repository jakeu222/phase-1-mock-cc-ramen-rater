
function fetchRamen() {
    fetch("http://localhost:3000/ramens")
        .then((r) => r.json())
        .then((ramen) =>

            renderData(ramen))
}

fetchRamen()

function renderData(data) {
    data.forEach((ramenObject) => {
        const img = document.createElement("img")
        img.src = ramenObject["image"]
        const menu = document.querySelector("#ramen-menu")
        menu.append(img)

        img.addEventListener("click", () => {
            const detailImg = document.querySelector(".detail-image")
            const detailName = document.querySelector(".name")
            const detailRestaurant = document.querySelector(".restaurant")

            detailName.textContent = ramenObject["name"]
            detailRestaurant.textContent = ramenObject["restaurant"]
            detailImg.src = ramenObject["image"]
            detailImg.alt = ramenObject["name"]

            const comment = document.querySelector("#comment-display")
            const rating = document.querySelector("#rating-display")

            comment.textContent = ramenObject["comment"]

            rating.textContent = ramenObject["rating"]








        }
        )

    })
}
const findForm = document.querySelector("#new-ramen")

findForm.addEventListener("submit", (e) => {
    e.preventDefault()
    newRamenInput()

}
)

function newRamenInput() {
    const newName = document.querySelector("#new-name")
    const newRestaurant = document.querySelector("#new-restaurant")
    const newImg = document.querySelector("#new-image")
    const newRating = document.querySelector("#new-rating")
    const newComment = document.querySelector("#new-comment")


    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: newName.value,
            restaurant: newRestaurant.value,
            image: newImg.value,
            rating: newRating.value,
            comment: newComment.value,




        }),
    })

}