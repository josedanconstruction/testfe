import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

const get_AWS = "http://54.158.87.77:8081"

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getContractors() {
    const result = await axios.get(`${BASE_API_URL}/contractors`);
    return result.data;
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
