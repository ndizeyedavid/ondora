/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />

interface Window {
  electron: {
    windowControl: (action: "minimize" | "maximize" | "close") => void;
  };
}
