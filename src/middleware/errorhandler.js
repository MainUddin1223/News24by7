function errorHandler(err, req, res, next) {
    if (err instanceof ReferenceError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
