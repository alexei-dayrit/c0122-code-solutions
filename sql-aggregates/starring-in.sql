select "g"."name" as "genre",
       count(*) as "amount"
  from "filmGenre"
  join "genres" as "g" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa'
    and "a"."lastName" = 'Monroe'
  group by "g"."name";
