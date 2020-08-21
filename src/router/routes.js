const routes = [
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "post", component: () => import("pages/Post.vue") },
      { path: "liked", component: () => import("pages/Liked.vue") },
      { path: "search", component: () => import("pages/Search.vue") },
      { path: "profile", component: () => import("pages/Profile.vue") }
    ]
  },
  {
    path: "/page/",
    component: () => import("layouts/Page.vue"),
    children: [
      { path: "message", component: () => import("pages/Message.vue") },
      { path: "chat", component: () => import("pages/Chat.vue") }
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
