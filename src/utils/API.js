
/** Firebase API Key **/
const API_KEY = 'AIzaSyA7IxpL-VBhmZ3CT1jQjKR8smm-ohmuzoA'

/** Firebase RealTime DB URL **/
const DB_URL = 'https://tf-db-ef9de.firebaseio.com/'

export const Login_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const Accounts_URL = `${DB_URL}accounts.json`

export const NewUser_URL = (auth, id) => `${DB_URL}new_user/${id}.json?auth=${auth}`