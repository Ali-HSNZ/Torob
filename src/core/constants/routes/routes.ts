const Routes = {
    Root: '/',

    // find product in products list with query
    FindProduct: (query: string) => `${Routes.Root}products?search=${query}`,
    // show product detail page with product code (product title in not required)
    ProductDetail: (code: string, title: string) => `${Routes.Root}product/${code}/${title}`,
}

export default Routes
