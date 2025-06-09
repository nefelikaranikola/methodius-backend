import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'fr',
    ],
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Login to your Methodius account",
        "Auth.form.welcome.title": "Methodius",
        "app.components.LeftMenu.navbrand.title": "Methodius Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
        // "app.components.HomePage.welcome": "Content Management System",
        // "app.components.HomePage.welcome.again": "Content Management System",
        "app.components.HomePage.welcomeBlock.content.again":
          "Strapi v5 - Community Edition",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: {
      release: false,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
