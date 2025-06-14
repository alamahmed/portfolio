// eslint-disable-next-line
import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Storage
const storage = getStorage(app);

const get_projects_data = async (callback: (data: any) => void) => {
    const docRef = doc(db, "my_data", "Projects");
    const docSnap = await getDoc( docRef );

    if ( docSnap.exists() ) {
        callback(docSnap.data().projects);
    } else {
        console.log( "No such document!" );
    }
}

const get_about_me = async (callback: (data: string) => void) => {
    const docRef = doc(db, "my_data", "about_me");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        callback(docSnap.data().home_about || "");
    } else {
        console.error("About me document not found in Firebase");
        callback(""); // Return empty string if data not found
    }
};

const get_data = async (document: string, callback: (data: any) => void) => {
    const docRef = doc(db, "my_data", document);
    const docSnap = await getDoc( docRef );

    if ( docSnap.exists() ) {
        callback(docSnap.data());
    } else {
        console.log( "No such document!" );
    }
}

const get_skills = async (callback: (data: any) => void) => {
    const docRef = doc(db, "my_data", "skills");
    const docSnap = await getDoc( docRef );

    if ( docSnap.exists() ) {
        callback(docSnap.data().language_skills);
    } else {
        console.log( "No such document!" );
    }
}

const get_resume_url = async (callback: (url: string) => void) => {
    try {
        const resumeRef = ref(storage, "public-resources/resume.pdf");
        const url = await getDownloadURL(resumeRef);
        callback(url);
    } catch (error) {
        console.error("Error fetching resume URL:", error);
        // If there's an error, try the fallback path
        try {
            const fallbackRef = ref(storage, "resume.pdf");
            const fallbackUrl = await getDownloadURL(fallbackRef);
            callback(fallbackUrl);
        } catch (fallbackError) {
            console.error("Error fetching fallback resume URL:", fallbackError);
            callback(''); // Return empty string if both attempts fail
        }
    }
};

const get_profile_picture = async (callback: (url: string) => void) => {
    try {
        const docRef = doc(db, "my_data", "profile_picture");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const profilePictureUrl = docSnap.data().profile_picture_url;
            if (profilePictureUrl) {
                callback(profilePictureUrl);
            } else {
                console.error("Profile picture URL not found in document");
                callback("");
            }
        } else {
            console.error("Profile picture document not found");
            callback("");
        }
    } catch (error) {
        console.error("Error fetching profile picture:", error);
        callback("");
    }
};

export { get_data, get_projects_data, get_about_me, get_skills, get_resume_url, get_profile_picture };