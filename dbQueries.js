
import pool from "./database.js";

//add to users - post
export async function addUser(name, gender,  email, address) {
    const response = await pool.query(`INSERT INTO  users (name, gender, address, email) VALUES (?, ?, ?, ?)`, 
    [name, gender, email, address]);
    // console.log("response", response);
    // console.log("id", response[0].insertId);
    const id = response[0].insertId;
    // return response;
    return getUser(id);
}

// const add = await addUser("Francis", "male", "circle", "francis@gmail.com");
// console.log(add);
// addUser("Kofi", "male", "Adenta", "kofi@me.com");
// console.log(addUser("Ama", "female", "Achimota", "ama@yahoo.com"));


//get all users - fetch
export async function getUsers() {
    const users = await pool.query(`SELECT * FROM users`);
    return users;
}

// const users = await getUsers();
// console.log(users);


//get a single user 
export async function getUser(id) {
    const [user] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
    return user;
}

// console.log(await getUser(7));

//update
export async function updateUser(newData, id) {
    const [updateUser] = await pool.query(`UPDATE users SET ? WHERE id=?`, [newData, id]);
    // return updateUser.changeRows;
    return updateUser;
}

// const data = await updateUser({name: "Joe", email: "test@yahoo.com"}, 3);

// console.log(data);


//delete
export async function deleteUser(id) {
    const delUser = await pool.query(`DELETE FROM users WHERE id = ?`, [id]);
    return delUser;
}

// const dat = await deleteUser(5);
// console.log(dat);