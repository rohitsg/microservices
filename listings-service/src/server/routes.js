import { Listing } from '#root/db/models';

const setUpRoutes = (app) => {
    app.get('/listings', async(req, res) => {
        try {
            const listings = await Listing.findAll();
            return res.json(listings);
        } catch (error) {
            console.log('err', error)
        }
    });

}
export default setUpRoutes;