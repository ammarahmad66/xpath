import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db} from "./firebase/firebase.js";

export const findxPath = async (xPath) => {
    try {
        const collectionRef = collection(db, 'xPaths');
        const q = query(collectionRef, where('xPath', '==', xPath));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        return data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export const postxPath = async(xPath) => {
    try {
        await addDoc(collection(db, 'xPaths'), { xPath, timestamp: new Date() });
		return { status: 200 };
	} catch (error) {
		console.error('Error storing xPath:', error);
		return { status: 404 };
	}
}