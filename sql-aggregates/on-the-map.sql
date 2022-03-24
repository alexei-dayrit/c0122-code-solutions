select count(*) as "numberOfCities",
       "countries"."name" as "country"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name";
