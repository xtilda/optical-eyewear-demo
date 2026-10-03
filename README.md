# OPTICAL Eyewear — Vercel 

## run

```bash
npm install
npm run dev
```

http://localhost:3000 

## Deployment on Vercel

1. Extract the ZIP file and create a GitHub repository named `optical-eyewear-demo`.
2. Upload all project files to the repository root, ensuring `package.json` is at the root level.
3. Go to **Vercel → Add New → Project**, select your repository, and click **Import**.
4. Configure the deployment:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** Default
   - **Node.js Version:** 22.x
   - **Environment Variables:** None required
5. Click **Deploy**. Once deployment is complete, share the generated Vercel URL.

**Alternative (Vercel CLI):**

Run the following commands in the project directory:

```bash
vercel
vercel --prod
```

Log in using your own Vercel account when prompted.


