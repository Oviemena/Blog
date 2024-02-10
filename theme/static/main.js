const copyId = document.getElementById("copyId")
const text = document.getElementById("copy")
const span = document.getElementById("span_copy")
const copytext = document.getElementById("copyText")
copyId.addEventListener("mouseover", () => {
    span.style.display = 'block'
})
copyId.addEventListener("mouseout", () => {
    span.style.display = 'none'
})
copyId.addEventListener("click", () => {
    const textToCopy =text.textContent
    copytext.innerText="Copied"
    span.style.width = '60px'
})