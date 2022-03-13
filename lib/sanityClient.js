import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'idpi33ti',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'skTbdlnV3XflZRPAlCTQgn7yJj1NAdn5hcEUysdA9wUv2oJkxjRaSxxEOup9fAAPW66IWz2Dg47QIoTlPAblFLyxu7hJKZXdTQNSmNXNKY8Y1mqIuloKhLPobVfizd0e5TV1yITe9iMw0RyUjIU95ZZPPhlBD8IgnWxFEQxPgwrT5RUfLejO',
  useCdn: false,
})
