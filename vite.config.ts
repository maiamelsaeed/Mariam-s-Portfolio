import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Enable HTTPS in development when DEV_HTTPS=true and certs are present in ./certs
  const useHttps = process.env.DEV_HTTPS === "true";
  let httpsConfig: false | { key: Buffer; cert: Buffer } = false;

  if (useHttps) {
    try {
      const key = fs.readFileSync(
        path.resolve(__dirname, "certs/localhost-key.pem")
      );
      const cert = fs.readFileSync(
        path.resolve(__dirname, "certs/localhost.pem")
      );
      httpsConfig = { key, cert };
      console.log("Using local HTTPS certs from ./certs (DEV_HTTPS=true)");
    } catch (e) {
      console.warn(
        "DEV_HTTPS is true but certs not found in ./certs. Falling back to HTTP."
      );
      httpsConfig = false;
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
      ...(httpsConfig ? { https: httpsConfig } : {}),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
