const baseApiUrl = "http://localhost:3000";
const cardContainer = document.querySelector('.destinations__cards');
const destino_id = localStorage.getItem('destino_id');

async function fetchAtracoesByDestino() {
    try {
        const destino_id = getDestinoIdUrl();
        
        const response = await fetch(`${baseApiUrl}/destinos/${destino_id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const destino = await response.json();
        const atracoes = destino.atracoes;
        
        // Preenche o card com os dados retornados
        if(atracoes.length==0){
            cardContainer.innerHTML = "<span class='warning'>Não há atrações cadastradas</span>";
        }
        atracoes.forEach(atracao => {
            imagem_url = atracao.imagens[0]?.imagem;
            if(imagem_url){
                imagem_url = baseApiUrl + imagem_url;
            }else{
                imagem_url = '/assets/img/atracao-default.png';
            }

            const cardHTML = `
                <div class="card">
                    <a href="/atracoes/${atracao.id}" class="card-link">
                        <img src="${imagem_url}" alt="foto-${atracao.titulo}">
                        <div class="card-content">
                            <h3>${atracao.titulo}</h3>
                            <p>${atracao.descricao}</p>
                        </div>
                    </a>
                </div>
            `;
            cardContainer.innerHTML+=cardHTML;
        });
    } catch (error) {
        console.error('Failed to fetch atracoes:', error);
        cardContainer.innerHTML = "<span class='warning'>Ocorreu um erro ao carregar atrações do destino</span>";
    }
}

function getDestinoIdUrl(){
    const currentUrl = window.location.pathname;
    const urlSegments = currentUrl.split('/');
    let destinoId = urlSegments[2]; //destinos/:id/atracoes

    destinoId = destinoId.replace(/\D/g, '');

    if(destinoId==''){
        window.alert('Parametro url inválida')
        window.location.href = '/'; //pagina inicial
    }else{
        console.log('destino_id:'+destinoId);
        return destinoId;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchAtracoesByDestino();
});