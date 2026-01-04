async function waitForOBR() {
  while (!window.OBR) {
    await new Promise(r => setTimeout(r, 100));
  }
  return window.OBR;
}

waitForOBR().then(OBR => {
  console.log("Conectado a Owlbear");

  OBR.onReady(() => {
    console.log("Owlbear listo");
  });
});
