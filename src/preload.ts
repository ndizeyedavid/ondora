import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  windowControl: (action: "minimize" | "maximize" | "close") =>
    ipcRenderer.send("window-control", action),
});
