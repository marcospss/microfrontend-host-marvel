import md5 from 'md5';

const dateCurrent = new Date();

const API = {
    apiEndpoint: 'https://gateway.marvel.com:443/v1/public',
    apikeyPublic: 'fc88e56fcb674d36991ba76c85d9df23',
    apikeyPrivate: '81d69ec0e17ce9c3e4bce897086b50f769ef7ee5',
};

const PARAMS = {
    ts: dateCurrent.toISOString(),
    apikey: API.apikeyPublic,
    hash: md5(`${dateCurrent.toISOString()}${API.apikeyPrivate}${API.apikeyPublic}`)
};

export { API, PARAMS };