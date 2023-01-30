const app = require('./app')

app.listen(app.get('port'), () =>
  console.log(`App listening on port http://localhost:${app.get('port')}/`)
)
