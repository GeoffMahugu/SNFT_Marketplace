import axios from "axios";

const awsURL = "https://nsys.inf4mation.com/api/";
const key = process.env.AWS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;
const header = {
    "x-accessKeyId": key,
    "x-secretAccessKey": secretKey,
};

// GET
export const getNonce = async (_address) =>
    await axios
        .get(`${awsURL}users/check?WalletUID=${_address}`, {
            headers: header,
        })
        .then((res) => {
            if ((res.status = 200)) {
                return res.data;
            }
        })
        .catch((error) => error.response);

// export const signInUser = async (signature) =>
//     await axios
//         .get(`${awsURL}users/check?WalletUID=${_address}`, {
//             headers: header,
//         })
//         .then((res) => {
//             if ((res.status = 200)) {
//                 return res.data;
//             }
//         })
//         .catch((error) => error.response);

export const verifyJwt = async () =>
    await axios
        .get(`${awsURL}jwt/verify`, {
            headers: {
                ...header,
                'x-auth-token': localStorage.getItem('x-nsys-token')
            },
        })
        .then((res) => {
            return res;
        })
        .catch((error) => error.response);

export const getAwsAssets = async () =>
    await axios
        .get(`${awsURL}assets/search`, {
            headers: header,
        })
        .then((res) => {
            if ((res.status = 200)) {
                return res.data.results;
            }
        })
        .catch((error) => error.response);

export const getSingleAsset = async (assetUID) =>
    await axios
        .get(`${awsURL}assets/get?AWS_UID=${assetUID}`, {
            headers: header,
        })
        .then((res) => {
            if ((res.status = 200)) {
                return res.data;
            }
        })
        .catch((error) => error.response);

export const getUsers = async () =>
    await axios
        .get(`${awsURL}users/search`, {
            headers: header,
        })
        .then((res) => {
            return res;
            // if ((res.status = 200)) {
            //     return res.data;
            // }
        })
        .catch((error) => error.response);

export const getSingleUser = async (walletUID) =>
    await axios
        .get(`${awsURL}users/get?WalletUID=${walletUID}`, {
            headers: header,
        })
        .then((res) => {
            if ((res.status = 200)) {
                return res.data;
            }
        })
        .catch((error) => error.response);
