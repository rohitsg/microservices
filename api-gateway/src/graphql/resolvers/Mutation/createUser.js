import ListingsService from "#root/adaptors/ListingsService";
import UsersService from "../../../adaptors/UsersService";

const createUserResolvers = async(obj, { email, password }) => {
    return await UsersService.createUser({ email, password });
}

export default createUserResolvers;