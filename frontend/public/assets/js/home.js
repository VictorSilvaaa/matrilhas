const baseApiUrl = "http://localhost:3000";
const cardContainer = document.getElementById('destinations__cards');

async function fetchDestinos() {
    try {
        const response = await fetch(`${baseApiUrl}/destinos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const destinos = await response.json();
        
        // Preenche o card com os dados retornados
        if(destinos.length==0){
            cardContainer.innerHTML = "<span class='warning'>Não há destinos cadastrados</span>";
        }
        destinos.forEach(destino => {
            const cardHTML = `
                <div class="card">
                    <a href="destinos/${destino.id}/atracoes" class="card-link">
                        <img src="${baseApiUrl}${destino.imagens[0].imagem}" alt="${destino.titulo}">
                        <div class="card-content">
                            <h3>${destino.titulo}</h3>
                            <p>${destino.descricao}</p>
                        </div>
                    </a>
                </div>
            `;
            cardContainer.innerHTML=cardHTML;
        });
    } catch (error) {
        console.error('Failed to fetch destinos:', error);
        cardContainer.innerHTML = "<span class='warning'>Ocorreu um erro ao carregar destinos</span>";
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchDestinos();
});