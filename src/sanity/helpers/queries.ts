import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == "products" && slug.current == $slug] | order(name asc) [0]`
  );
  try {
    const product = sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: { slug },
    });
    return (await product)?.data || null;
  } catch (error) {
    console.log("Error fetching product by slug:", error);
  }
};
