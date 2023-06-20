import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '95ys244h',
  dataset: 'durotan',
  useCdn: true,
  apiVersion: 'v2021-03-25',
};

export default createClient(config);
