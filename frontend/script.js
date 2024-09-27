async function addMission(event) {
    event.preventDefault(); 

    // Obtém os dados do formulário
    const missionData = {
        name: document.getElementById('name').value,
        crew: document.getElementById('crew').value,
        spacecraft: document.getElementById('spacecraft').value,
        destination: document.getElementById('destination').value,
        status: document.getElementById('status').value,
        duration: document.getElementById('duration').value,
    };

    try {
        // Faz a requisição POST para a API
        const response = await fetch('http://localhost:3000/api/missions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(missionData),
        });

        console.log("Status da resposta:", response.status);

        if (response.ok) {
            console.log("passou")
            const jsonResponse = await response.json();
            alert(jsonResponse.message); 
            document.getElementById('mission-form').reset(); 
            
        } else {
            const errorResponse = await response.json();
            alert('Erro: ' + errorResponse.message);
        }
    } catch (error) {
        console.error('Erro ao adicionar a missão:', error);
        alert('Erro ao adicionar a missão. Veja o console para mais detalhes.');
    }
}
