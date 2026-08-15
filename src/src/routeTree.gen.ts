{
  "scripts": {
    "dev": "vite dev",
    "build": "tsr generate && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && wrangler deploy",
    "cf-typegen": "wrangler types"
  }
}
