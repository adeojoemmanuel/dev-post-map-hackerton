// @ts-ignore
import * as ee from '@google/earthengine';
import { GoogleAuth } from 'google-auth-library';
import * as fs from 'fs';

async function authenticateAndInitialize() {
  const keyFile = '';

  try {
    const auth = new GoogleAuth({
      keyFile,
      scopes: ['https://www.googleapis.com/auth/earthengine.readonly'],
    });

    const client = await auth.getClient();

    const accessToken = (client as any).credentials.access_token;
    ee.data.setAuthToken(accessToken);

    ee.initialize(null, null, () => {
      console.log('Earth Engine Initialized!');
      const image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_044034_20140318');
      
      image.getInfo((info: any) => {
        console.log(info);
      });
      
    }, (error: any) => {
      console.error('Error initializing Earth Engine:', error);
    });
    
  } catch (error) {
    console.error('Authentication failed:', error);
  }
}

authenticateAndInitialize();
