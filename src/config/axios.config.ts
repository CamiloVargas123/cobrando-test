import axios from "axios";

const BASE_PATH = 'https://api.coinlore.net/api';

axios.defaults.baseURL = BASE_PATH;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';