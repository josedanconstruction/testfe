import axios from "axios";
import https from "https";

const BASE_API_URL = "http://localhost:5000";

//const get_AWS = "*/db.json";

const httpsAgent = new https.Agent({ rejectUnauthorized: false});

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  /*static async getTokens() {
    const result = await axios.post(`${get_AWS}/api/admin/login`,
    {"Content-Security-Policy": "upgrade-insecure-requests"},
    {
      name : "user", password : "clave", role : "client"
    });
    return result.data;    
  }
*/

  static async getContractors() {
    const result = await axios.get(`${BASE_API_URL}/contractors`);
    return result.data;

/*    const result = await axios.get(`${get_AWS}/api/client/city?area=boulder&report=null&pageSize=10&page=1`, { httpsAgent },
    {headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NTc3Mjg0OTcsInVzZXIiOiJ1c2VyIiwicm9sZSI6IkNMSUVOVCIsImFyZWEiOiJjbGllbnQifQ.3HsaIxUdYjqWdC0WDQOLL9h06V9n_ynyzYvEw-j3YAiJqq_y0SP6M7AYVL-0Q2Ms0_4Wn1KLVa0Dy2DsU5AH9Q'
    }},
    {
      name : "user", password : "clave", role : "client"
    });
    return result.data;
*/
  }


  static async getPermits() {
    const result = await axios.get(`${BASE_API_URL}/permits`);
    return result.data;

/*
    const result = await axios.get(`${get_AWS}/api/client/city?area=boulder&report=null&pageSize=10&page=1`,
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NTMwNzI1NjIsInVzZXIiOiJ1c2VyIiwicm9sZSI6ImNsaWVudCIsImFyZWEiOiJjbGllbnQifQ.oPHO5FStK3tJSIyedJtlcZAmO0Ryv7oBATYbf2VrZBJwsWLT3lYMqRysMari3Q0nfWhDtccP3OoQabfHUQZ6zw'
  }});
    return result.data;
*/
  }
}

export default SnackOrBoozeApi;
