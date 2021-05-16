import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import {Helmet} from "react-helmet";

export const render = (store, routes, req) => {
    const helmet = Helmet.renderStatic();
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    ))
    return `
		<html>
			<head>
				${helmet.title.toString()}
                ${helmet.meta.toString()}
			</head>
			<body>
				<div id="root">${content}</div>
				<script >
				    window.context = {
				      state: ${JSON.stringify(store.getState())}
				    }
				
                </script>
				<script src='/index.js'></script>
			</body>
		</html>
  `;
}
