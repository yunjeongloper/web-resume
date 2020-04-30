const morePresentsList = document.querySelector(".js-presents-more"),
    moreButton = document.querySelector(".js-more-button");
    moreButtonTitle = moreButton.querySelector("span")

const MORE_BT = "SHOW MORE PRESENTS";
const LESS_BT = "SHOW LESS PRESENTS";

function handleClickMore() {
    const buttonTitle = moreButtonTitle.innerHTML;
    morePresentsList.classList.toggle("show");
    moreButtonTitle.innerHTML = buttonTitle === MORE_BT ? LESS_BT : MORE_BT;
}

moreButton.addEventListener("click", handleClickMore);