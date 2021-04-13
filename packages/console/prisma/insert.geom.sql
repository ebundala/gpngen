INSERT INTO "Location" (id, name, geom, "createdAt", "updatedAt")
VALUES (
    'id:textxxx',
    'name:xxxx',
    ST_SetSRID(ST_MakePoint(0.6, 1.4), 4326),
    now()::timestamp,
   now()::timestamp
  );