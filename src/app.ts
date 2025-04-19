import express from "express";
import cors from "cors";
import router from "./routes/routes";
import './DataBase';

class App {
    app: any;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors()); // <-- corrigido aqui
    }

    routes() {
        this.app.use(router);
    }
}

export default new App().app;
