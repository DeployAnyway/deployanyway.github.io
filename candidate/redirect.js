location.replace(
  new URL("../" + location.search + location.hash, location.href).href,
);
