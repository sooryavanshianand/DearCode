require('dotenv').config()
const app = require('./src/app')
const cors = require('cors')

 

app.use(cors({
  origin: "*"
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })