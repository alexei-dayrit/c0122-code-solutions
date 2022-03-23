select "releaseYear",
       "genres"."name" as "genresName"
 from "filmGenre"
 join "genres" using ("genreId")
 join "films" using ("filmId")
where "title" = 'Boogie Amelie';
