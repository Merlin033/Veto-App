import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Faites une requête GET pour récupérer la liste des clients depuis votre API backend
        axios.get('http://localhost:3000/clients')
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des Clients</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>{client.nom} {client.prenom}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;