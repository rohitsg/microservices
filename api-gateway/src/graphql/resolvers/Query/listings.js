import ListingsService from "#root/adaptors/ListingsService";

const listingResolvers = async() => {
    return await ListingsService.fetchAllListings();
}

export default listingResolvers;