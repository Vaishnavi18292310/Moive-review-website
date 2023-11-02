let reviewContainerE1 = document.getElementById("reviewsContainer");
let titleinputE1 = document.getElementById("titleInput");
let reviewinputE1 = document.getElementById("reviewTextarea");

function onAddReview() {
    let title = titleinputE1.value;
    let review = reviewinputE1.value;

    if (title === "") {
        alert("Please enter a moive title");
        return;
    }

    let outputTitle = document.createElement("h1");
    outputTitle.textContent = "Movie Title:" + title;
    outputTitle.classList.add("output-title")
    reviewContainerE1.appendChild(outputTitle);

    let outputReview = document.createElement("p");
    outputReview.textContent = "Review:" + review;
    reviewContainerE1.appendChild(outputReview);

    titleinputE1 = "";
    reviewinputE1 = "";
}