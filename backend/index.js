import dotenv from "dotenv";

import express from "express";
import cors from "cors";

import sequelize from "./config/database.js";

import dolarApiRoutes from "./routes/dolar-api.routes.js";
import productRoutes from "./routes/producto.routes.js";
import registroRoutes from "./routes/registro.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/dolar", dolarApiRoutes);
app.use("/api/products", productRoutes);
app.use("/api/registro", registroRoutes);

const PORT = process.env.PORT || 3000;

async function startApplication() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar la aplicación: ", error)
        process.exit(1);
    }
};

startApplication();
