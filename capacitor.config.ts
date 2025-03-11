
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6e714718f82b4985abbc0d2bd3b44d6a',
  appName: 'Shiva Aradhya Foundation',
  webDir: 'dist',
  server: {
    url: 'https://6e714718-f82b-4985-abbc-0d2bd3b44d6a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
      releaseType: null,
    }
  }
};

export default config;
