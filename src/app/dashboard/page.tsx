"use client";
import { buildPath } from "@usy-ui/themes";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { AppRoute, DashboardSubRoute } from "@/constants/routes";

const Dashboard = () => {
  const { status } = useSession();

  const path = buildPath(AppRoute.DASHBOARD, {
    section: DashboardSubRoute.PROFILE,
  });

  redirect(path);
};

export default Dashboard;
