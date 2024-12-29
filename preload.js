const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  version: () => process.versions.electron,
  // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, data) =>{
        let validChannels =['login-success'];
        if(validChannels.includes(channel)){
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
      let validChannels = ['fromMain'];
      if (validChannels.includes(channel)) {
        // Deliberately strip
        // event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    }
  }
});
