select "line1",
       "c"."name" as "cityName",
       "district",
       "countries"."name" as "countryName"
 from "addresses"
 join "cities" as "c" using ("cityId")
 join "countries" using ("countryId");
