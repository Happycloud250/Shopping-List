const inputTag = document.getElementsByClassName("form-control")[0];
const ShoppingListTag = document.getElementsByClassName("shopping-list-container")[0];

let spanId = 1;

const handleChange = (event) => {
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    mainDiv.append(parentDiv, trashIcon);
    trashIcon.addEventListener("click", () => {
        mainDiv.remove();
    });


    parentDiv.addEventListener("click", () => {
        const purchaseCondition = parentDiv.classList.contains("purchase");
        if (purchaseCondition) {
            parentDiv.classList.remove("purchase");
        } else {
            parentDiv.classList.add("purchase");
        }
    });
    const spanTag = document.createElement("span");
    parentDiv.append(spanTag);
    parentDiv.classList.add("shopping-list-div");
    let spanIdString = spanId.toString();
    spanTag.id = spanId;
    spanTag.append(spanIdString + ". " + inputValue);
    ShoppingListTag.append(mainDiv);



    inputTag.value = "";
    spanId += 1;

};

inputTag.addEventListener("change", handleChange);