import { createFileRoute } from "@tanstack/react-router";
import { RouteApp } from "@/components/route-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <RouteApp />;
}
