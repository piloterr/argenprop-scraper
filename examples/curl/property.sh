#!/usr/bin/env bash
# Argenprop Property API – cURL example
# Usage: PILOTERR_API_KEY=your-key ./property.sh
set -euo pipefail

curl -sS -G "https://api.piloterr.com/v2/argenprop/property" \
  -H "x-api-key: ${PILOTERR_API_KEY}" \
  --data-urlencode query=https://www.argenprop.com/departamento-en-venta-en-palermo-chico-5-ambientes--20724993
