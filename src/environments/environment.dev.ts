export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '7bd2c8ac-bda0-4cf4-a65c-82f612d89b2d',
            authority: 'https://login.microsoftonline.com/0a6cd777-7ec7-4ebd-8002-941b7e884de7/',
            redirectUri: 'http://localhost:4201'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
