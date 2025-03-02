// src/index.js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const apiUrl = 'https://twikoo.yingyu5658.cn' + url.pathname;
    const newRequest = new Request(apiUrl, request);
    const response = await fetch(newRequest);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    return newResponse;
  }
};

