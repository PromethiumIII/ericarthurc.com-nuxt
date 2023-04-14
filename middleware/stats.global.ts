export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[TO]", to);
  console.log("[FROM]", from);

  if (!to.fullPath.includes("/admin")) {
    console.log("middleware");

    new Promise((res) =>
      setTimeout(() => {
        console.log("WEHA");
        return res;
      }, 5000)
    );
  }
});
