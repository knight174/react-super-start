import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const generateConfig = (env) => {
  const { command } = env;

  return {
    // 定义全局环境变量
    define: {
      // 是否为开发环境
      isDev: command === "serve",
    },
    plugins: [react()],
  };
};

// https://vitejs.dev/config/
export default defineConfig(generateConfig);
