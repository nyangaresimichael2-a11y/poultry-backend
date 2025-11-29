Poultry MVP - Deployment & Build Guide
-------------------------------------

You chose Online (cloud) app. This repo contains everything needed to deploy backend and build an Android APK.

Quick options:
1) Deploy backend using Render (recommended):
   - Create Render account, connect this repo, use render.yaml to create services.
   - Add DATABASE_URL and JWT_SECRET environment variables (Render will provide DB connection).

2) Build Android APK with Expo EAS:
   - Create Expo account and get EAS token.
   - Set EAS_TOKEN in GitHub secrets to enable CI build via actions/eas-build.yml
   - Or run locally: cd mobile; npm install; eas build -p android --profile production

Important secrets to set in GitHub repo settings (Secrets -> Actions):
- RENDER_SERVICE_ID
- RENDER_API_KEY
- EAS_TOKEN

Local quickstart (Docker):
- docker compose up --build
- After DB is ready, run psql -U postgres -d poultry -f backend/mvp_schema.sql (inside db container or host)
- Backend will be available at http://localhost:4000/v1
- Update mobile/config/api.js to use local URL for testing.
