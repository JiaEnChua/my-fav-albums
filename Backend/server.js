import express from 'express';
import cors from 'cors';
import axios from 'axios';

//App Config
const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use(cors());

//Endpoints
app.get('/', async (req, res) => {
  const url = 'https://itunes.apple.com/lookup?id=471744&entity=album';
  try {
    const ituneData = await axios.get(url);
    const resArray = ituneData.data.results;
    resArray.sort((a, b) => {
      const a_res_date = new Date(a.releaseDate);
      const b_res_date = new Date(b.releaseDate);
      return b_res_date - a_res_date;
    });
    res.status(200).send(resArray);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

//Listener
app.listen(port, () => console.log('Listening to PORT:', port));
