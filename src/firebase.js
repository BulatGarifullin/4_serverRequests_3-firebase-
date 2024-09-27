import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDZ2hAxXi_SEfVZGGxvmHpHqPxD6RaEXnE',
	authDomain: 'todosproject-4073c.firebaseapp.com',
	projectId: 'todosproject-4073c',
	storageBucket: 'todosproject-4073c.appspot.com',
	messagingSenderId: '947668304375',
	appId: '1:947668304375:web:0ca4290deec645bc9deef2',
	databaseURL: 'https://todosproject-4073c-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
