const themeSelect = document.getElementById("themeSelect")
const savedTheme = localStorage.getItem("theme") || "light"

document.documentElement.setAttribute("data-theme",savedTheme)
if (themeSelect) {
    themeSelect.value = savedTheme
    themeSelect.addEventListener("change", () => {
        document.documentElement.setAttribute("data-theme",themeSelect.value)
        localStorage.setItem("theme",themeSelect.value)
    })
}