import router from "@/router";

// router.beforeEach((to, from) => {});

router.afterEach((to) => {
  console.log("afterEach", to);
});
