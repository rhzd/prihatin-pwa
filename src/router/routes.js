const routes = [
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "post", component: () => import("pages/Post.vue") },
      { path: "liked", component: () => import("pages/Liked.vue") },
      { path: "search", component: () => import("pages/Search.vue") }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
