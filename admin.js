import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9nXTsER4ouKjNrlL5zbf3Tj8Yq2fs_gg",
    authDomain: "websnape-form.firebaseapp.com",
    projectId: "websnape-form",
    storageBucket: "websnape-form.firebasestorage.app",
    messagingSenderId: "250051491514",
    appId: "1:250051491514:web:daa2f4c543c44ca4a6b483",
    measurementId: "G-WZWEWV7HJ9"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour afficher les clients dans le tableau
async function afficherClients() {
    const querySnapshot = await getDocs(collection(db, "clients"));
    const tableBody = document.getElementById("clientsTableBody");
    tableBody.innerHTML = ""; // Vider le tableau avant de charger les données

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.companyName}</td>
            <td>${data.contact}</td>
            <td>${data.projectDescription}</td>
            <td>${data.websiteGoal}</td>
            <td>${data.budget}</td>
            <td>${new Date(data.timestamp.seconds * 1000).toLocaleString()}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Charger les données au chargement de la page
document.addEventListener("DOMContentLoaded", afficherClients);
