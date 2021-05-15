import express from 'express';
import { render } from './utils';
import {getStore} from "../store";
import {matchRoutes} from "react-router-config";
import routes from '../Routes';
import proxy from 'express-http-proxy';
import config from "../../config";

const app = express();
app.use(express.static('public'));
app.use('/api', proxy(`${config.baseUrl}`, {
    proxyReqPathResolver: function (req) {
        return '/ssr/api' + req.url;
    }
}));
app.get('*', function (req, res) {
    const store = getStore();
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
      if (item.route.loadData) {
        promises.push(item.route.loadData(store));
      }
    });
    Promise.all(promises)
        .then(() => {
            res.send(render(store, routes, req));
        })
    res.send(render(store, routes, req));
});

var server = app.listen(3000);
