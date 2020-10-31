const MOVIES = [
  {
    id: 1,
    liked: true,
    title: "Joker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sollicitudin nisi, nec cursus nisl mollis ut. Donec magna velit, venenatis nec tellus non, egestas hendrerit quam. ",
  },
  {
    id: 2,
    liked: false,
    title: "Tenet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sollicitudin nisi, nec cursus nisl mollis ut. Donec magna velit, venenatis nec tellus non, egestas hendrerit quam. ",
  },
  {
    id: 3,
    liked: false,
    title: "IronMan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sollicitudin nisi, nec cursus nisl mollis ut. Donec magna velit, venenatis nec tellus non, egestas hendrerit quam. ",
  },
];

export async function fetchMovies() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve(MOVIES), 3000);
  });
}
