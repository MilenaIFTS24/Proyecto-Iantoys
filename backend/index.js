import dotenv from "dotenv";

import express from "express";
import cors from "cors";

import sequelize from "./config/database.js";

import dolarApiRoutes from "./routes/dolar-api.routes.js";

dotenv.config();