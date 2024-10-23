
import Form from 'vform';
import axios from './axios';
import { toast } from 'vue3-toastify';

window.Form = Form
window.axios = axios
window.toast = toast;

export function GlobalVariables (app, router) {
    app.config.globalProperties.$baseUrl = `${import.meta.env.VITE_API_URL}`;
    app.config.globalProperties.$baseUrlApi = `${import.meta.env.VITE_API_URL_API}`;
    app.config.globalProperties.$router = router;
}