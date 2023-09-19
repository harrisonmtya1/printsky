import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.printsky.app',
  appName: 'printsky',
  webDir: 'dist/printsky',
  server: {
    androidScheme: 'https'
  }
};

export default config;
