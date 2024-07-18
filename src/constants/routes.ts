export enum ProfileSubRoute {
  INTRO = "intro",
  ARTICLES = "articles",
  PORTFOLIOS = "portfolios",
  EXPERIENCE = "experience",
  SKILLS = "skills",
}

export enum DashboardSubRoute {
  PROFILE = "profile",
  ARTICLES = "articles",
  PORTFOLIOS = "portfolios",
  EXPERIENCE = "experience",
  SKILLS = "skills",
}

export enum AppRoute {
  HOME = "/",
  SIGN_UP = "/sign-up",
  PROFILE = "/:username/:section",
  DASHBOARD = "/dashboard/:section",
}
