import 'dotenv/config'
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import routerConfig from './route/route.js';



routerConfig
// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());

app.use('/test', routerConfig.test);
app.use('/consultation', routerConfig.consultation);
app.use('/rendezvous', routerConfig.rendezvous);
app.use('/roles', routerConfig.roles);
app.use('/users', routerConfig.users);


// Démarrage du serveur
app.listen(process.env.PORT);
 