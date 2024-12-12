require('dotenv').config();
import express from 'express';
import sequelize from './config/db.config';
const PORT = process.env.PORT || 3000;
import routes from './routes';
const cookieSession = require("cookie-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        name: "bezkoder-session",
        keys: ["COOKIE_SECRET"],
    })
);
app.use('/api', routes);

sequelize.sync({ force: false }).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});
export default app;
