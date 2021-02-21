import express from 'express';
import cors from 'cors';
import axios from 'axios';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';

//App Config
const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.get(
  '/',
  asyncHandler(async (req, res) => {
    const url = 'https://itunes.apple.com/lookup?id=471744&entity=album';
    try {
      const ituneData = await axios.get(url);
      if (!ituneData) throw createError(400, 'Itune API Data not found');
      const resArray = ituneData.data.results;
      resArray.sort((a, b) => {
        const a_res_date = new Date(a.releaseDate);
        const b_res_date = new Date(b.releaseDate);
        return b_res_date - a_res_date;
      });
      res.status(200).send(resArray);
    } catch (err) {
      throw createError(400, err.message);
    }
  })
);

// Error handler that catches anything that falls thru all routes and middleware
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    message: error.message,
    stack: error.stack,
  });
});

//Listener
app.listen(port, () => console.log('Listening to PORT:', port));
