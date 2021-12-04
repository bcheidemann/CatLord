import client from "../client";
import { routesQuery } from "../queries";

export type Route = {
  name: string;
  path: string;
};


const fetchRoutes = async (): Promise<Route[]> => {
  return await client.fetch(routesQuery) || [];
};

export { fetchRoutes };
