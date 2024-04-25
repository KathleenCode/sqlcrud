import { addUser, getUsers, getUser, updateUser, deleteUser } from "../dbQueries.js";

export const addingUser = async(req, res) => {
    try {
        const {name, gender, address, email} = req.body;

        const user = await addUser(name, gender, address, email);

        res.status(201).send(user);
    } catch(error) {
        console.log(error);
        res.status(500).send("Wrong, Please try again");
    }
}

export const fetchUsers = async(req, res) => {
    try {
        const users = await getUsers();

        res.status(200).send(users);
    } catch(error) {
        console.log(error);

        res.status(500).send("Unable to fetch all users, try again");
    }
}

export const fetchUser = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await getUser(id);
        if(!user) return res.status(404).send("User does not exist");
        res.status(200).send(user);
    } catch(error) {
        console.log(error);

        res.status(500).send("Unable to fetch user, try again");
    }
}

export const updatingUser = async(req, res) => {
    const { id } = req.params;

    try {
        const updatedUser = await updateUser(req.body, id);
        if(!updatedUser.affectedRows) return res.status(404).send("User with the given id could not be found");
        res.status(201).send(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to update user with specified id");
    }
}

export const deletingUser = async(req, res) => {
    const { id } = req.params;

    try {
        const deluser = await deleteUser(id);
        if(!deluser.affectedRows) return res.status(404).send("user could not be removed");
        res.status(201).send(deluser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to delete");
    }
}