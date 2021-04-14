
  
  /* SELECT 
  orgId as id,
  ST_Distance(
    'SRID=4326;POINT(-3.6 0.89)'::geometry,
    geom) as distance, 
  geom,
  "_OrganizationToServiceCategory"."B" as catId
  FROM 
 (SELECT 
 "Organization".id as orgId,
 "Location".id as locId,
  "Location"."geom" as geom
 FROM "Organization" 
 INNER JOIN "Location"
 ON "Organization"."locationId"="Location".id 
 ) as orgs
 INNER JOIN "_OrganizationToServiceCategory" 
 ON "_OrganizationToServiceCategory"."A"= orgid
 WHERE "_OrganizationToServiceCategory"."B"='ckngf3wwn01243lqt53ahhzv8'
 ORDER BY distance ASC LIMIT 5 */
 
 SELECT 
  id,
  distance
  FROM 
(SELECT 
 "Organization".id as id,
 ST_Distance(
    'SRID=4326;POINT(0.56 0.7)'::geometry,
    "Location".geom) as distance
 FROM "Organization" 
 INNER JOIN "_OrganizationToServiceCategory"
 ON "Organization"."id"="_OrganizationToServiceCategory"."A" 
 INNER JOIN "Location"
 ON "Organization"."locationId"="Location".id 
 WHERE "_OrganizationToServiceCategory"."B" 
 in ('ckngf3wwn01243lqt53ahhzv8','cknghjv9s05173lqtxf6mqdew')
) AS orgs
WHERE distance>=500
ORDER BY distance DESC OFFSET 0 LIMIT 5
 
 