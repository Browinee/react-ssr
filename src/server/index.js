import express from 'express';
import {render} from './utils';
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
    const store = getStore(req);
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            })
            promises.push(promise);
        }
    });


    Promise.all(promises)
        .then(() => {
            // not good
            const context = {css: []};
            const html = render(store, routes, req, context);
            console.log("context", context);
            if (context.action === 'REPLACE') {
                res.redirect(301, context.url)
            }else if (context.NOT_FOUND) {
                res.status(404);
                res.send(html);
            }else {
                res.send(html);
            }
        })
});

var server = app.listen(3010);
