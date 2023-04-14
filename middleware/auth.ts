export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[TO]", to);
  console.log("[FROM]", from);
  console.log("{MIDDLEWARE AUTH}");
});
