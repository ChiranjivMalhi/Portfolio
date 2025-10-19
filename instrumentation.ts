export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
  // Sentry removed: await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
  // Sentry removed: await import('./sentry.edge.config');
  }
}
