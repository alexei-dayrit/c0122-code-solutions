select sum("p"."amount") as "totalPaid",
       "firstName",
       "lastName"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  join "rentals" using ("rentalId")
  group by "c"."firstName", "c"."lastName"
  order by "totalPaid" desc;
