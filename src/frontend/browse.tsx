async function browse() {
  try {
    const req = await fetch("/plangs.json");
    const data = await req.json();

    console.log('loaded data', data)
  } catch (e) {
    console.error(e);
  }
}

browse();
