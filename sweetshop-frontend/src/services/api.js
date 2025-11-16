// export const api = {
//   base: "http://localhost:5000/api",

//   async get(url) {
//     const res = await fetch(this.base + url, {
//       headers: { 
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       },
//     });
//     return res.json();
//   },

//   async post(url, body) {
//     const res = await fetch(this.base + url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   },

//   async put(url, body) {
//     const res = await fetch(this.base + url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   },

//   async del(url) {
//     const res = await fetch(this.base + url, {
//       method: "DELETE",
//       headers: { 
//         Authorization: `Bearer ${localStorage.getItem("token")}` 
//       },
//     });
//     return res.json();
//   }
// };


// export const api = {
//   get: async (url) => (await fetch("http://localhost:5000/api" + url)).json(),
//   post: async (url, data) =>
//     (await fetch("http://localhost:5000/api" + url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     })).json()
// };


// services/api.js
export const api = {
  baseUrl: "http://localhost:5000/api",

  get: async (url, authToken = null) => {
    try {
      const res = await fetch(api.baseUrl + url, {
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
      });
      if (!res.ok) throw new Error(`GET ${url} failed`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  post: async (url, data, authToken = null) => {
    try {
      const res = await fetch(api.baseUrl + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`POST ${url} failed`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  put: async (url, data, authToken = null) => {
    try {
      const res = await fetch(api.baseUrl + url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`PUT ${url} failed`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  delete: async (url, authToken = null) => {
    try {
      const res = await fetch(api.baseUrl + url, {
        method: "DELETE",
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
      });
      if (!res.ok) throw new Error(`DELETE ${url} failed`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },
};
