#!/bin/sh

# Start Tailscaled in the background
tailscaled &

# Wait for tailscaled to be ready
until tailscale up --authkey=${TAILSCALE_AUTHKEY}; do
  sleep 5
done

# Keep container running
tail -f /dev/null