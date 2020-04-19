import { apiService } from "../axios";
const loginId = localStorage.getItem("USERNAME");
export default {
  login: payload => apiService.post(`/auth/login`, payload),
  userResourcesApplications: () =>
    apiService.get(`/user-resources/applications`),
  logout: username => apiService.post(`/auth/logout`, { loginId: username }),
  fetchAll: params =>
    apiService.get(`/users/search`, {
      ...params,
      loginId: localStorage.getItem("USERNAME")
    }),
  getApplicationRole: () => apiService.get(`/idm/users/roles`, { loginId }),
  getBranch: () => apiService.get(`/idm/users/branches`, { loginId }),
  save: payload =>
    apiService.post(`/idm/users/submit`, { ...payload, loginId: loginId }),
  updateStatus: payload =>
    apiService.post(`/idm/users/status`, { ...payload, loginId: loginId })
};
