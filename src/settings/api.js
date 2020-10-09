import md5 from 'md5';

const dateCurrent = new Date();

const API = {
    apiEndpoint: 'https://gateway.marvel.com:443/v1/public',
    apikeyPublic: process.env.REACT_APP_API_KEY_PUBLIC,
    apikeyPrivate: process.env.REACT_APP_API_KEY_PRIVATE,
};

const PARAMS = {
    ts: dateCurrent.toISOString(),
    apikey: API.apikeyPublic,
    hash: md5(`${dateCurrent.toISOString()}${API.apikeyPrivate}${API.apikeyPublic}`)
};

export { API, PARAMS };