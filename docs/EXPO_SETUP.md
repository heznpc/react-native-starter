# Expo + EAS Setup

## 1. Create an Expo Account

1. Go to [expo.dev](https://expo.dev) and sign up
2. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
3. Log in:
   ```bash
   eas login
   ```

## 2. Create an Expo Project

1. Link your local project to Expo:
   ```bash
   eas init
   ```
2. This will create/update the `extra.eas.projectId` in your `app.json`

## 3. Generate an Access Token

This token is used by GitHub Actions to authenticate with EAS.

1. Go to [expo.dev/accounts/[your-username]/settings/access-tokens](https://expo.dev/accounts/[your-username]/settings/access-tokens)
2. Click **Create token**
3. Name it something like `github-actions`
4. Copy the token

## 4. Add GitHub Secret

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `EXPO_TOKEN`
4. Value: paste the token from step 3
5. Click **Add secret**

## 5. Configure EAS Build

Run the following to set up build profiles:

```bash
eas build:configure
```

This will update your `eas.json` with the correct configuration.

## 6. Set Up Credentials

For iOS and Android signing:

```bash
eas credentials
```

EAS can manage your signing certificates and provisioning profiles automatically. Follow the interactive prompts.

## Verification

Test that everything works:

```bash
# Build a preview APK
eas build --platform android --profile preview

# Build a preview IPA (requires Apple Developer account)
eas build --platform ios --profile preview
```

If these succeed, your CD workflows will work too.
