import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'attendance.app',
  appName: 'attendance-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
