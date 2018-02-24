import { AsyncStorage } from "react-native";

/* SDK to interact with DevLess */
const url = "https://kori123.herokuapp.com/api/v1/service/";

const header = {
  "Content-Type": "application/json",
  "devless-token": "7652eb1ff815652bf2ef0b15b15a7b03"
};

nonce = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

requestHandler = async (url, method, data) => {
  let user = await AsyncStorage.getItem("user");

  user = JSON.parse(user);

  if (user !== null && user.token !== "" && user.token !== undefined) {
    Devless.setToken(user.token);
  }

  return fetch(url, {
    method: method,
    headers: header,
    body: data
  })
    .then(response => response.json())
    .then(responseJSON => {
      return responseJSON;
    })
    .catch(() => alert("Please check your connection"));
};

export const Devless = {
  queryData(service, table, params = null) {
    parameters = "";

    if (params !== null) {
      innerParams = function(key, params) {
        for (var eachParam in params) {
          parameters = "&" + key + "=" + params[eachParam] + parameters;
        }
      };

      for (var key in params) {
        if (!params.hasOwnProperty(key)) {
          /**/
        }
        if (params[key] instanceof Array) {
          innerParams(key, params[key]);
        } else {
          parameters = "&" + key + "=" + params[key] + parameters;
        }
      }
    }

    return fetch(`${url}${service}/db?table=${table}${parameters}`, {
      method: "GET",
      headers: header
    })
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON;
      });
  },

  addData(service, table, data) {
    return fetch(`${url}${service}/db`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        resource: [
          {
            name: table,
            field: [data]
          }
        ]
      })
    })
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON;
      });
  },

  updateData(service, table, identifier, value, data) {
    return fetch(`${url}${service}/db`, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({
        resource: [
          {
            name: table,
            params: [
              {
                where: identifier + "," + value,
                data: [data]
              }
            ]
          }
        ]
      })
    })
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON;
      });
  },

  deleteData(service, table, identifier, value) {
    return fetch(`${url}${service}/db`, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({
        resource: [
          {
            name: table,
            params: [
              {
                delete: true,
                where: `${identifier},${value}`
              }
            ]
          }
        ]
      })
    })
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON;
      });
  },

  async call(service, method, data = []) {
    const host = url + service + "/rpc?action=" + method;

    const params = JSON.stringify({
      jsonrpc: "2.0",
      method: service,
      id: nonce(1, 10000000),
      params: data
    });

    const results = await requestHandler(host, "POST", params);
    return results;
  },
  setToken(token) {
    header["devless-user-token"] = token;
  }
};