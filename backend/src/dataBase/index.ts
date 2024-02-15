import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '../.env' });


class DbConnection {
    connect() {
        const db = process.env.URL_MONGOOSE ?? '';
        // console.log('String de Conexão:', db);
        mongoose
            .connect(db)
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((err) => {
                console.error(`Error connecting database ${err}`);
            });
    }
}

export { DbConnection };
