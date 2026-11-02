// Argenprop Property API – Node.js example (Node 18+, native fetch, ES module)
// Usage: PILOTERR_API_KEY=your-key node property.mjs

const params = new URLSearchParams({
  "query": "https://www.argenprop.com/departamento-en-venta-en-palermo-chico-5-ambientes--20724993",
});

const response = await fetch(`https://api.piloterr.com/v2/argenprop/property?${params}`, {
  headers: { "x-api-key": process.env.PILOTERR_API_KEY },
  signal: AbortSignal.timeout(120_000),
});

if (!response.ok) {
  console.error(`Piloterr error ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
