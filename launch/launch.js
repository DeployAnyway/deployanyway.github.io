const button = document.getElementById("copy-launch");
const status = document.getElementById("launch-copy-status");
button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      document.getElementById("launch-setup").textContent,
    );
    status.textContent = "Setup copied. Fetch responsibly.";
  } catch {
    status.textContent =
      "Copy unavailable here. Select and copy the setup commands above.";
  }
});
