fetch("https://whatyearisit-backend-sigma-red.vercel.app/year").then(reponse => reponse.json()).then(data => {
    document.querySelector("#year").textContent = data.year
})