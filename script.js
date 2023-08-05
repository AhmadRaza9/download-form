const input = document.querySelector("#fileName");
const button = document.querySelector("#submitButton");
const successMessage = document.querySelector(".message");
button.addEventListener("click", async (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter a file url");
    return null;
  }
  try {
    const response = await fetch(input.value);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
    input.value = "";
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 1000);
  } catch (e) {
    alert("Failed to download file - " + e);
  }
});
