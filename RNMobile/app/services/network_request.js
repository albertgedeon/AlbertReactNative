export default class NetworkRequest {
    // constructor() { }

    async getCompanyInfo() {
        try {
            let response = await fetch('https://albertprojects.s3-us-west-2.amazonaws.com/Divvy/Divvy_Mock_DATA.json');
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
};