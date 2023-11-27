import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.f9qtwoy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
    try {

        await mongoose.connect(URL);
        console.log('Database connected successfully !!');
    } catch (error) {
        console.log ('Error while connecting with the database', error);
    }
}

export default Connection;