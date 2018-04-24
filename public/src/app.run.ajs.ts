runAuth.$inject = ['authService'];
export function runAuth(authService) {
  authService.getToken();
}
