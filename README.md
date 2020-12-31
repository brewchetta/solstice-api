# Solstice API

(and also equinoxes!)

To use the API, query a year to see that year's solstices and equinoxes. Data received will be in this format:

`/solstices?year=2020`

```
2020: {  
  spring:	"Mar 19 2020 11:49 pm EDT",
  summer:	"Jun 20 2020 5:43 pm EDT",
  autumn:	"Sep 22 2020 9:30 am EDT",
  winter:	"Dec 21 2020 5:02 am EST"
}
```

Additionally, you can choose to instead use a start and end date query with years to get a range:

`/solstices?start=2020&end=2022`

```

2020: {
  spring:	"Mar 19 2020 11:49 pm EDT"
  summer:	"Jun 20 2020 5:43 pm EDT"
  autumn:	"Sep 22 2020 9:30 am EDT"
  winter:	"Dec 21 2020 5:02 am EST"
},
2021: {
  spring:	"Mar 20 2021 5:37 am EDT"
  summer:	"Jun 20 2021 11:32 pm EDT"
  autumn:	"Sep 22 2021 3:21 pm EDT"
  winter:	"Dec 21 2021 10:59 am EST"
},
2022: {
  spring:	"Mar 20 2022 11:33 am EDT"
  summer:	"Jun 21 2022 5:13 am EDT"
  autumn:	"Sep 22 2022 9:03 pm EDT"
  winter:	"Dec 21 2022 4:48 pm EST"
}
```

If no queries are selected, the API will default to the current year and the next four years.
