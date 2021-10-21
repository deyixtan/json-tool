const inputArea = document.querySelector(".large-area-input");
const outputArea = document.querySelector(".large-area-output");
const btnFormat = document.querySelector(".controls-button-format");
const btnMinify = document.querySelector(".controls-button-minify");
const btnView = document.querySelector(".controls-button-view");

btnFormat.addEventListener("click", () => {
    outputArea.innerHTML = "";
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    const textArea = document.createElement('textarea');
    textArea.classList.add('large-area');
    textArea.value = formatted;
    outputArea.appendChild(textArea);
})

btnMinify.addEventListener("click", () => {
    outputArea.innerHTML = "";
    const minified = JSON.stringify(JSON.parse(inputArea.value));
    const textArea = document.createElement('textarea');
    textArea.classList.add('large-area');
    textArea.value = minified;
    outputArea.appendChild(textArea);
})

btnView.addEventListener("click", () => {
    outputArea.innerHTML = "";
    new jsonTree(JSON.parse(inputArea.value), ".large-area-output", false);
})
