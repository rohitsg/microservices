import {get } from 'lodash';


const formatGraphqlErrors = (error) => {
    const errorDetails = get(error, 'originalError.response.body');
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch (e) {
        console.error('Error from graphql: ', e)
    }

    return null;
}

export default formatGraphqlErrors;