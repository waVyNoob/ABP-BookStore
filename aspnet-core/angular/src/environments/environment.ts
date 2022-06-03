import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44375',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44326',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
