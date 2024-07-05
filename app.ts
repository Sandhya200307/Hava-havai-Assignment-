import express, { Request, Response } from 'express';
import { connection } from './database';
import { Airport } from './entity/Airport';

const app = express();
app.use(express.json());

app.get('/airport/:iataCode', async (req: Request, res: Response) => {
  const iataCode = req.params.iataCode;
  const airport = await connection.getRepository(Airport).findOne({
    where: { iataCode },
    relations: ['address', 'address.country'],
  });

  if (!airport) {
    res.status(404).send({ message: 'Airport not found' });
    return;
  }

  const response = {
    airport: {
      id: airport.id,
      icao_code: airport.icaoCode,
      iata_code: airport.iataCode,
      name: airport.name,
      type: airport.type,
      latitude_deg: airport.latitudeDeg,
      longitude_deg: airport.longitudeDeg,
      elevation_ft: airport.elevationFt,
      address: {
        city: {
          id: airport.address.id,
          name: airport.address.name,
          country_id: airport.address.countryId,
          is_active: airport.address.isActive,
          lat: airport.address.lat,
          long: airport.address.long,
        },
        country: airport.address.country
          ? {
              id: airport.address.country.id,
              name: airport.address.country.name,
              country_code_two: airport.address.country.countryCodeTwo,
              country_code_three: airport.address.country.countryCodeThree,
              mobile_code: airport.address.country.mobileCode,
              continent_id: airport.address.country.continentId,
            }
          : null,
      },
    },
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
