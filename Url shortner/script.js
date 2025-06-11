function shortenUrl() {
  const longUrl = document.getElementById("longUrl").value.trim();

  if (!longUrl) {
    alert("Please enter a URL");
    return;
  }

  // Generate random 6-character string
  const randomString = Math.random().toString(36).substring(2, 8);
  const shortBase = "https://short.ly/";
  const shortUrl = shortBase + randomString;

  // Display result
  document.getElementById("shortUrl").textContent = shortUrl;
  document.getElementById("shortUrl").href = longUrl;
  document.getElementById("result").classList.remove("hidden");
}

function copyToClipboard() {
  const shortUrl = document.getElementById("shortUrl").textContent;
  navigator.clipboard.writeText(shortUrl).then(() => {
    alert("Short URL copied to clipboard!");
  });
}