import APIRequest from "../utils/config/axios.config";

export function getJokeRandom() {
    return APIRequest.get('/', {
        validateStatus: function(status) {
            return status < 500;
        }
    })
}