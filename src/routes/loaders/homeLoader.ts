import { sleep } from "../../lib/sleep";

export interface HomeLoaderData {
  date: string;
}

export async function homeLoader(): Promise<HomeLoaderData> {
  await sleep();
  return {
    date: new Date().toISOString(),
  };
}
