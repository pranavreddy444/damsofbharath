function handleMapClicks() {
    const statePaths = document.querySelectorAll("#mysvg path");
  
    statePaths.forEach((path) => {
      const stateName = path.getAttribute('name');
      path.addEventListener("click", () => {
        const url = `state_${stateName.toLowerCase().replace(/\s/g, "_")}.html`;
        window.open(url,"_blank");
      });
    });
  }
  
  handleMapClicks();