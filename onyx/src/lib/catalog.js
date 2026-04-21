const PRODUCTS = [
  {
    id: "cs-001",
    name: "Silence Coat",
    category: "outerwear",
    collection: "SS26",
    price: 1480,
    image_url:
      "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/8759c02ae_generated_174a6a4f.png",
    description:
      "A longline coat cut in disciplined proportions. Weight without noise.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "cs-002",
    name: "Form Dress",
    category: "dresses",
    collection: "SS26",
    price: 960,
    image_url:
      "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/45d694e97_generated_8f1d9e6f.png",
    description:
      "A silhouette that holds space. Minimal seams, maximal intent.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "cs-003",
    name: "Identity Top",
    category: "tops",
    collection: "SS26",
    price: 420,
    image_url:
      "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/9c58b66ec_generated_472f3f88.png",
    description:
      "Clean lines in matte black. Designed to disappear into the wearer.",
    sizes: ["XS", "S", "M", "L"],
  },
];

export async function listProducts() {
  return PRODUCTS;
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

