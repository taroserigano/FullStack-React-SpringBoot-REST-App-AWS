import axios from 'axios'

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:5000' //#CHANGE
        baseURL: 'http://restapifullstackh2-env.eba-bphf2pdf.us-east-1.elasticbeanstalk.com/'
    }
);

