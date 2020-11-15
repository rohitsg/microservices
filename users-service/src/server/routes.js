import { Users, UserSessions } from '../db/models';
import generateUUID from '../helpers/generateUUID';
import hashPassword from '../helpers/hashPassword';

const setUpRoutes = (app) => {
    app.post('/users', async(req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) return next(new Error('Invalid payload!'));

        try {
            const newUser = await Users.create({
                email,
                id: generateUUID(),
                passwordHash: hashPassword(password)
            })
            return res.json(newUser);
        } catch (error) {
            return next(error);
        }
    });

}
export default setUpRoutes;