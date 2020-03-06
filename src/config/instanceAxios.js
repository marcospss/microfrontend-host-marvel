import axios from 'axios';
import md5 from 'md5';
import SETTINGS from './settings';

const dateCurrent = new Date();

export default axios.create({
  baseURL: SETTINGS.apiEndpoint,
  params: {
    ts: dateCurrent.toISOString(),
    apikey: SETTINGS.apikeyPublic,
    hash: md5(`${dateCurrent.toISOString()}${SETTINGS.apikeyPrivate}${SETTINGS.apikeyPublic}`)
  }
});
