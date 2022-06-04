import axios from "axios";

const awsURL = "https://nsys.inf4mation.com/api/";
const key = process.env.AWS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;
const header = {
    "x-accessKeyId": key,
    "x-secretAccessKey": secretKey,
};

// POST
export const connectUser = async (body) => {
    return await axios
        .post(`${awsURL}users/connect`, body, {
            headers: header,
        })
        .catch((error) => error.response);
};
export const createUser = async (body) => {
    return await axios
        .post(`${awsURL}users/create`, body, {
            headers: header,
        })
        .catch((error) => error.response);
};

// PATCH
export const updateUser = async (body) => {
    return await axios
        .patch(`${awsURL}users/update`, body, {
            headers: header,
        })
        .catch((error) => error.response);
};
