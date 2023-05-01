process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Gracefully shut down your server here, e.g.:
  // server.close(() => process.exit(1));
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  // Gracefully shut down your server here, e.g.:
  // server.close(() => process.exit(1));
});
