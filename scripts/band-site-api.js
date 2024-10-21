const API_KEY = "ab845e70-0af5-436f-9a87-b59b3a42c195";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const sortedResponse = response.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      console.log(sortedResponse);
      return sortedResponse;
    } catch (error) {
      console.error("Error getting comments", error);
    }
  }

  async postComment(name, comment) {
    try {
      const newComment = {
        name: name,
        comment: comment,
      };

      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        newComment
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error posting comments", error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates/?api_key=${this.apiKey}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting show dates", error);
    }
  }

  async likeComment(id) {
    try {
      const response = await axios.put(
        `${this.baseUrl}comments/${id}/like?api_key=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.error("Error liking comment", error);
    }
  }

  async deleteComment(id) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}comments/${id}?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  }
}

const bandSiteApi = new BandSiteApi(API_KEY);
console.log(bandSiteApi);

async function getCommentsData() {
  try {
    const commentsData = await bandSiteApi.getComments();

    console.log(commentsData);
    return commentsData;
  } catch (error) {
    console.error("Error fetching shows data", error);
  }
}

async function postCommentData(name, comment) {
  try {
    const commentsData = await bandSiteApi.postComment(name, comment);
    console.log(commentsData);
  } catch (error) {
    console.error("Error fetching shows data", error);
  }
}

async function getShowsData() {
  try {
    const showsData = await bandSiteApi.getShows();
    console.log(showsData);
  } catch (error) {
    console.error("Error fetching shows data", error);
  }
}


