const copyId = document.getElementById("copyId")
const text = document.getElementById("copy")
const span = document.getElementById("span_copy")
copyId.addEventListener("mouseover", () => {
    span.style.display = 'block'
})
copyId.addEventListener("mouseout", () => {
    span.style.display = 'none'
})
copyId.addEventListener("click", () => {
    const textToCopy =text.textContent
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        alert("The text has been copied to the clipboard.")
    })
    .catch(error => {
        console.log(error)
    })
})