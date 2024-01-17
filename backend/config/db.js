import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://ags1305:heuHUinmN307CJ9Q@cluster0.003fhzv.mongodb.net/uptask?retryWrites=true&w=majority", {
        });

        const url = `${connection.connections[0].host}:${connection.connections[0].port}`;
        console.log(`MongoDB Conectado en: ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;
