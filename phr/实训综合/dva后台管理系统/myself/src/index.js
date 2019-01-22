import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/users').default);
// 4. Router
app.router(require('./router.jsx').default);

// 5. Start
app.start('#root');

export const dvaApp = app;