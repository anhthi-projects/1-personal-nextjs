"use client";
import { buildPath } from "@anhthi-projects/usy-ui";
import { redirect } from "next/navigation";

import { AppRoute, DashboardSubRoute } from "@/constants/routes";

const Dashboard = () => {
  const path = buildPath(AppRoute.DASHBOARD, {
    section: DashboardSubRoute.PROFILE,
  });

  redirect(path);
};

export default Dashboard;
