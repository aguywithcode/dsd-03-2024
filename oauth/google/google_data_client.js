
async function dataClient(json) {
    const url = "https://www.googleapis.com/oauth2/v2/userinfo";
    const authHeader = " " + json.token_type + " " + json.access_token;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": authHeader
        }
    });

    return response.json();
}

export default dataClient;