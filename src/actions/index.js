import axios from 'axios';

export const FETCH_EXPERTS = "fetch_experts";

const API_URL = 'http://vm193-www.viversum.de:8080/k3/replica/show-experts';

export function fetchExperts() {
    const request = axios.get(API_URL);
    return {
        type: FETCH_EXPERTS,
        payload: request
    }
}