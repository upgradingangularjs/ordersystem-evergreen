export function setHeaders() {
  return {
    request: function(config) {
      let token = localStorage.access_token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }
  };
}

authInterceptor.$inject = ['$httpProvider'];
export function authInterceptor($httpProvider) {
  $httpProvider.interceptors.push('setHeaders');
}
