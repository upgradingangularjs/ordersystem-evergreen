runAuth.$inject = ['authService'];
export function runAuth(authService) {
  if (!authService.isAuthenticated()) authService.getToken();
}
