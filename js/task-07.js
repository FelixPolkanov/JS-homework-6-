const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
    inputRef.textContent = event.currentTarget.value;
    console.log("text size value:", inputRef.textContent)

    spanTextRef.style.fontSize = `${inputRef.textContent}px`;
    if (inputRef.textContent > 93 || inputRef.textContent < 20) {
        spanTextRef.style.backgroundColor = "red";
        return
    }
    spanTextRef.style.backgroundColor = "white";
   
});