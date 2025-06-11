<script>
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-button");

  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent scrolling to top
      modalTitle.textContent = this.dataset.title;
      modalDescription.textContent = this.dataset.description;
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
</script>
