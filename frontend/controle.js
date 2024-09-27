const missionForm = document.getElementById('mission-form');
const missionsTableBody = document.getElementById('missions-table-body');

// Função para buscar e exibir as missões
async function fetchMissions() {
    try {
        const response = await fetch('http://localhost:3000/api/missions');
        const missions = await response.json();

        missionsTableBody.innerHTML = '';
        missions.forEach(mission => addMissionToTable(mission));
    } catch (error) {
        console.error('Erro ao buscar missões:', error);
    }
}

window.onload = fetchMissions;

document.addEventListener('DOMContentLoaded', () => {
    const missionForm = document.getElementById('missionForm'); 
    if (missionForm) {
        missionForm.addEventListener('submit', async function(event) {
            event.preventDefault();
        
            const formData = new FormData(missionForm);
            const missionData = {
                name: formData.get('name'),
                crew: formData.get('crew'),
                status: formData.get('status'),
                spacecraft: formData.get('spacecraft'),
                destination: formData.get('destination'),
                duration: formData.get('duration'),
            };
        
            await addMission(missionData);
            missionForm.reset(); 
        });
    }
});


function addMissionToTable(mission) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${mission.name}</td>
        <td>${mission.crew}</td>
        <td>${mission.status}</td>
        <td>${mission.spacecraft}</td>
        <td>${mission.destination}</td>
        <td>${mission.duration}</td>
        <td>
            <button id="btn-crud" onclick="editMission(this, '${mission.id}')">Editar</button>
            <button id="btn-crud" onclick="deleteMission('${mission.id}', this)">Apagar</button>
        </td>
    `;
    missionsTableBody.appendChild(row);
}

async function editMission(button, id) {
    const row = button.parentNode.parentNode; 
    const cells = row.getElementsByTagName('td');

    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('crew').value = cells[1].innerText;
    document.getElementById('status').value = cells[2].innerText;
    document.getElementById('spacecraft').value = cells[3].innerText;
    document.getElementById('destination').value = cells[4].innerText;
    document.getElementById('duration').value = cells[5].innerText;
    
    function normalizeString(str) {
        if (!str) return '';
        return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
    
    const responseToEdit = prompt("Qual informação você deseja editar? (nome, tripulação, status, nave, destino, duração)");
    
    const normalizedResponse = normalizeString(responseToEdit);
    
    let fieldToEdit;
    
    switch (normalizedResponse) {
        case 'nome':
            fieldToEdit = 'name';
            break;
        case 'tripulacao':
            fieldToEdit = 'crew';
            break;
        case 'status':
            fieldToEdit = 'status';
            break;
        case 'nave':
            fieldToEdit = 'spacecraft';
            break;
        case 'destino':
            fieldToEdit = 'destination';
            break;
        case 'duracao':
            fieldToEdit = 'duration';
            break;
        default:
            alert("Campo inválido. Tente novamente.");
            return; 
    }
    
    const newValue = prompt(`Insira o novo valor para ${responseToEdit}:`);
    
    if (newValue !== null && newValue.trim() !== "") {
        const updatedMissionData = {
            name: document.getElementById('name').value, 
            crew: document.getElementById('crew').value, 
            status: document.getElementById('status').value, 
            spacecraft: document.getElementById('spacecraft').value, 
            destination: document.getElementById('destination').value, 
            duration: document.getElementById('duration').value 
        };

    
        updatedMissionData[fieldToEdit] = newValue;

   
        await updateMission(id, updatedMissionData);
    } else {
        alert("O valor inserido não pode ser vazio.");
    }
}


async function updateMission(id, updatedMissionData) {
    try {
        const response = await fetch(`http://localhost:3000/api/missions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMissionData), 
        });

        if (response.ok) {
            const jsonResponse = await response.json(); 
            alert(jsonResponse.message);
            alert('Missão atualizada com sucesso!');
            fetchMissions(); 
        } else {
            const errorResponse = await response.json();
            alert('Erro: ' + errorResponse.message); 
        }
    } catch (error) {
        console.error('Erro ao atualizar a missão:', error);
        alert('Erro ao atualizar a missão. Veja o console para mais detalhes.');
    }
}


async function deleteMission(id, button) {
    if (confirm("Tem certeza que deseja apagar esta missão?")) {
        try {
            const response = await fetch(`http://localhost:3000/api/missions/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                alert(jsonResponse.message);
                fetchMissions(); 
            } else {
                const errorResponse = await response.json();
                alert('Erro: ' + errorResponse.message);
            }
        } catch (error) {
            console.error('Erro ao apagar a missão:', error);
            alert('Erro ao apagar a missão. Veja o console para mais detalhes.');
        }
    }
}
