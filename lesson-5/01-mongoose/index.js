import mongoose from "mongoose";

const DB_URI = `mongodb+srv://student96:dbUserStudent96@cluster0.t1y1usg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function run() {
    try {
        await mongoose.connect(DB_URI);
        // await mongoose.connection.db.admin().command({ ping: 1 });

        console.info("Database connection successfully")
    } finally {
        // await mongoose.disconnect();    
    }
}

run().catch(error => console.error(error));