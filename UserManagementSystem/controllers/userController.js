//write all data related logic
const storage = require('node-persist');
const bcrypt = require('bcrypt');

const getAllUsers = async function (req, res) {
    try {
        const values = await storage.values();//give you all values
        res.send(values)
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const userData = await storage.getItem(id);
    if (userData)
        return res.status(200).send({ 'message': 'User Found', userData })
    else
        return res.status(404).send({ 'message': 'User Not Found' })
}

const addUser = (req, res) => {
    const { id, name, email, country,password } = req.body;
    const hashPassword = bcrypt.hash(password,10)
    storage.setItem(id, { id, name, email, country,password:hashPassword });
    //setItem function takes key as id and full object as value
    res.status(201).send('New User Created')
}

const deleteUserbyId = async (req, res) => {
    const id = req.params.id; //id I am capturing from URL
    const userData = await storage.getItem(id);
    if (userData) {
        await storage.removeItem(id);
        res.send({ message: 'User Deleted Successfully' })
    } else {
        res.send({ message: `User with ID ${id} is not registered with Us ` })
    }
}

const updateUserById=async(req, res) => {
    const id = req.params.id;
    const userData= await storage.getItem(id);
    if(userData){
        const {name,email,country,password}=req.body;
        if(name)
            userData.name=name
        if(email)
            userData.email=email
        if(country)
            userData.country=country
        if(password)
            userData.password=await bcrypt.hash(password,10);
        await storage.updateItem(id,userData)
        res.status(200).send({message:'User Updated successfully'})
    }else
        res.send(`User with Id ${id} its not available to Update`)
}

const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    if(!email || ! password)
        return res.status(403).send({message: 'All Fields are mandatory'})
    const users= await storage.values();
    const user = users.find(u => u.email ===email);
    if(user){
        const result = await bcrypt.compare(password,user.password);
        if(result)
            return res.status(200).send('Logged In Successful')
        else
            return res.send('Invalid Credentials')
    }else{
        return res.send(`${email} is not registered with Us`)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserbyId,
    updateUserById,
    loginUser
}