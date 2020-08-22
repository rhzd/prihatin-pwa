const routes = [
  {
    path: "/",
    component: () => import("layouts/Home.vue"),
    children: [
      { path: "", component: () => import("pages/home/Main.vue") },
    ]
  },
  {
    path: "/liked",
    component: () => import("layouts/Liked.vue"),
    children: [
      { path: "", component: () => import("pages/liked/Main.vue") },
    ]
  },
  {
    path: "/profile",
    component: () => import("layouts/Profile.vue"),
    children: [
      { path: "", component: () => import("pages/profile/Main.vue") },
    ]
  },
  {
    path: "/message/",
    component: () => import("layouts/Message.vue"),
    children: [
      { path: "", component: () => import("pages/message/Main.vue") },
      { path: "chat", component: () => import("pages/message/Chat.vue") }
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
