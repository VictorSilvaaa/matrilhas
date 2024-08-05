"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomeController_1 = __importDefault(require("./controllers/HomeController"));
const DestinoController_1 = __importDefault(require("./controllers/DestinoController"));
const AtracaoController_1 = __importDefault(require("./controllers/AtracaoController"));
const routes = (app) => {
    app.get('/', (req, res) => HomeController_1.default.index(req, res));
    app.get('/destinos/:id/atracoes', (req, res) => DestinoController_1.default.index(req, res));
    app.get('/atracoes/:id', (req, res) => AtracaoController_1.default.index(req, res));
};
exports.default = routes;
