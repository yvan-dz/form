// Importation des modules Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuration Firebase (déjà définie dans ton code)
const firebaseConfig = {
    apiKey: "AIzaSyB9nXTsER4ouKjNrlL5zbf3Tj8Yq2fs_gg",
    authDomain: "websnape-form.firebaseapp.com",
    projectId: "websnape-form",
    storageBucket: "websnape-form.firebasestorage.app",
    messagingSenderId: "250051491514",
    appId: "1:250051491514:web:daa2f4c543c44ca4a6b483",
    measurementId: "G-WZWEWV7HJ9"
};

// Initialisation de Firebase et Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Gestionnaire du formulaire
document.getElementById('designForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Récupération des données du formulaire
    const formData = {
        companyName: document.getElementById("companyName").value,
        contact: document.getElementById("contact").value,
        projectDescription: document.getElementById("projectDescription").value,
        websiteGoal: document.getElementById("websiteGoal").value,
        logoUrl: document.getElementById("logoUrl").value,
        colors: document.getElementById("colors").value,
        visualStyle: document.getElementById("visualStyle").value,
        ambiance: document.getElementById("ambiance").value,
        examples: document.getElementById("examples").value,
        designPreference: document.getElementById("designPreference").value,
        navigation: document.getElementById("navigation").value,
        animations: document.getElementById("animations").value,
        mainSections: document.getElementById("mainSections").value,
        features: document.getElementById("features").value,
        eCommerce: document.getElementById("eCommerce").value,
        timeline: document.getElementById("timeline").value,
        budget: document.getElementById("budget").value,
        timestamp: new Date()
    };

    console.log("Données à envoyer :", formData); // ✅ Vérifie que les champs sont bien remplis

    try {
        await addDoc(collection(db, "clients"), formData);
        alert("Formulaire enregistré avec succès !");
        document.getElementById('designForm').reset();
    } catch (error) {
        console.error("Erreur Firebase :", error);
        alert("Une erreur est survenue.");
    }
});
