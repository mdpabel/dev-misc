// worker.js
this.onmessage = (e) => {
  console.log("Message received from app script", e.data);
};
