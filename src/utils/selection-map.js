export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((items) => items.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((items) => items.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((items) => items.genre === "children"),
      },
      {
        title: "Feel Good",
        data: series.filter((items) => items.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: series.filter((items) => items.genre === "drama"),
      },
      {
        title: "Thriller",
        data: series.filter((items) => items.genre === "thriller"),
      },
      {
        title: "Children",
        data: series.filter((items) => items.genre === "children"),
      },
      {
        title: "Suspense",
        data: series.filter((items) => items.genre === "suspense"),
      },
      {
        title: "Romance",
        data: series.filter((items) => items.genre === "romance"),
      },
    ],
  };
}
