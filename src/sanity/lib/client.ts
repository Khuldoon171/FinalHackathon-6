import sanityclient from '@sanity/client';

const client = sanityclient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2025-01-13',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN="skfdW6KiEsThWRQ9Ud2FZNHyhAGr9Aalx32nHGdF2iBKuEJEunmQsY7XNREqdEYaNkV057XvwohH4ov89wVtT2VEk3ol8QkyGpUF35COgLCxytH6dyRqUxby0VL5LEy36r2N85aamh2AyBzysvV6srSdt1Avfx0u1cvbv4977dSHdLTkIdKq", // Ensure this is set
  useCdn: false,
});