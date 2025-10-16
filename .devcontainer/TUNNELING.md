Running a public tunnel from inside the devcontainer

This file explains how to run tunnels (ngrok, localtunnel, cloudflared) from inside your development container so other people can access your app.

Prerequisites
- Your `app` service publishes port 5173 to the host (checked in `.devcontainer/container-compose.yml`) and `vite --host` is used so the dev server binds to 0.0.0.0.
- Container has internet access.

Quick start (inside the devcontainer terminal)

1) Start the dev server

```bash
npm install
npm run dev
```

2) Localtunnel (no account)

Localtunnel is very simple and can be invoked via npx (no global install required):

```bash
# runs and prints a public URL
npx localtunnel --port 5173
# request a specific subdomain (may or may not be available)
npx localtunnel --port 5173 --subdomain mypreview
```

3) Ngrok (recommended for secure sharing)

Ngrok requires an account to use custom/authed features. You can use the npx package or install the ngrok binary.

Using npx (@ngrok/ngrok wrapper):

```bash
# set NGROK_AUTH_TOKEN in the container env or export it in the shell
export NGROK_AUTH_TOKEN=your_token_here
# run ngrok via npx (this uses the official ngrok SDK wrapper)
npx @ngrok/ngrok http 5173 --authtoken $NGROK_AUTH_TOKEN
```

Alternatively, download the official binary and run `ngrok http 5173` after `ngrok config add-authtoken <token>`.

Notes:
- ngrok will print an https URL that you can share.
- To add basic auth (who can access):
  - `npx @ngrok/ngrok http 5173 --authtoken $NGROK_AUTH_TOKEN --basic-auth="user:pass"`

4) Cloudflared (Cloudflare Tunnel)

cloudflared lets you expose services through Cloudflare. If `cloudflared` is not installed in the container you can install it with the OS package manager or download the binary.

Example (once cloudflared is installed and logged in):

```bash
cloudflared tunnel --url http://localhost:5173
```

This will produce a public URL. For persistent custom hostnames, follow Cloudflare's guide to create a named tunnel and configure DNS.

Environment variables and secrets
- For ngrok, set `NGROK_AUTH_TOKEN` in the container environment. You can add it to the container by:
  - Running `export NGROK_AUTH_TOKEN=...` in the terminal before running `npm run tunnel:ngrok`, or
  - Adding it to your devcontainer's `containerEnv` or `env` (be careful with secrets).

Run the npm scripts

From inside the container you can now run:

```bash
# localtunnel
npm run tunnel:localtunnel

# ngrok (ensure NGROK_AUTH_TOKEN is set)
npm run tunnel:ngrok

# cloudflared (must have cloudflared binary installed in container)
npm run tunnel:cloudflared
```

Security notes
- Do not expose sensitive backend services through a public tunnel without authentication.
- Use ngrok's `--basic-auth` or Cloudflare Access to restrict access.
- Stop the tunnel when not needed.

Troubleshooting
- If the public URL returns an error, verify the dev server is running and reachable via `curl http://localhost:5173` from inside the container.
- If the container cannot reach the internet, check proxy settings and DNS inside the container.

If you want, I can:
- Add a small script file to the `.devcontainer` folder that installs the clients automatically inside the container image, or
- Add instructions to the devcontainer config to set `NGROK_AUTH_TOKEN` as a secret.
