const API_KEY = "ab845e70-0af5-436f-9a87-b59b3a42c195"

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment(newComment) {
        try {
            const response = await axios.post(`${this.baseUrl}comments/${this.apiKey}`, newComment);
            return response.data;
        } catch (error) {
            console.error("Error posting comments", error)
        }
    }
    
    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments/${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error("Error getting comments", error);
        }    
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}showdates/${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error("Error getting showdates", error);
        }
    }
}

const bandSiteApi = new BandSiteApi(API_KEY);
(async () => {
    try {
        const showsData = await bandSiteApi.getShows();
        console.log(showsData)
    } catch (error) {
        console.error("Error fetching shows data", error)
    }  
})();
