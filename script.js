const container = document.getElementById("video-container");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderCards(data) {
  container.innerHTML = "";
  data.forEach(video => {
    const card = document.createElement("div");
    card.className = "bg-gray-900 p-4 rounded shadow-lg";
    card.innerHTML = `
      <a href="video.html?id=${video.id}">
        <img src="${video.thumbnail}" alt="${video.title}" class="mb-3 rounded">
        <h2 class="text-xl font-bold">${video.title}</h2>
        <p class="text-sm text-gray-400">${video.category}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

function filterVideos() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search) &&
    (category ? v.category === category : true)
  );
  renderCards(filtered);
}

searchInput.addEventListener("input", filterVideos);
categoryFilter.addEventListener("change", filterVideos);

renderCards(videos);
