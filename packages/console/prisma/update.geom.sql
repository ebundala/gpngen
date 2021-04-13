UPDATE "Location" 
SET 
geom=ST_SetSRID(ST_MakePoint(0.6, 1.9), 4326)
where id='id:textxxx';

/* VALUES (
    'id:textxxx',
    'name:xxxx',
    ST_SetSRID(ST_MakePoint(0.6, 1.4), 4326),
    now()::timestamp,
   now()::timestamp
  ); */