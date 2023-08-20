function get() {
    return new Promise(resolve => {
        let part = ''
        chrome.system.memory.getInfo().then(data => {
            part = String(data.capacity)
            chrome.system.cpu.getInfo().then(data => {
                part += data.archName + data.modelName + String(data.modelName) + String(data.features)
                part = part.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, "").replace(/[a-zA-Z1-9]/g, m => m.charCodeAt() - 64)
                resolve(part)
            })
        })
    })
}


window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    1234,
    'Hello world'
  );