import qs from "qs";
import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      const { data: result } = res;

      if (res.headers.authorization) {
        localStorage.setItem("TOKEN", res.headers.authorization);
      }
      const response = { ...result };
      response.success = true;
      response.data = result.data;
      return response;
    }
    // Notification.error({ title: 'Error', message: 'Server Error' })
    return { success: false, data: null };
  },
  error => {
    const { data: result } = error.response;

    if (error.response.status === 500 || error.response.status === 502) {
      if (result.code) {
        // Notification.error({ title: result.code, message: result.message })
      } else {
        // Notification.error({ title: 'ERROR', message: 'Menjadi Berkah Core is under maintenance' })
      }
      return { success: false, data: null };
    }
    if (error.response.status === 401) {
      // Notification.error({ title: result.code, message: result.message })
      window.vue.$router.push({ name: "Login" });
      return { success: false, data: result.data };
    }
    if (result.errors && result.errors.length > 0) {
      // Notification.error({ title: 'ERROR', message: result.errors[0].message })
    } else {
      // Notification.error({ title: 'ERROR', message: 'Please contact Administrator for more info' })
    }
    return { success: false, data: null };
  }
);

const post = (url, config) => {
  const data = config || {};
  return instance({
    url,
    method: "POST",
    data: data
  });
};

const put = (url, config) => {
  const data = config || {};
  return instance({
    url,
    method: "PUT",
    data: data
  });
};

const patch = (url, config) => {
  const data = config || {};
  return instance({
    url,
    method: "PATCH",
    data: data
  });
};

const del = (url, params) => {
  return instance({
    url,
    method: "DELETE",
    data: params
  });
};

const get = (url, params) => {
  return instance({
    url,
    method: "GET",
    params: params
  });
};

const form = (url, config) => {
  const data = config || {};
  return instance.post(url, qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

const apiService = {
  post,
  put,
  patch,
  del,
  get,
  form
};

export { post, patch, del, get, form, apiService };
