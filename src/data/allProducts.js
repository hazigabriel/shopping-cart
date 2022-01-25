import books from "./books.js"
import jewellery from "./jewellery"
import replicas from "./replicas"

let allProducts = [
    ...replicas,
    ...jewellery,
    ...books
]

export default allProducts