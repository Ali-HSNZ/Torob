const Routes = {
    Root: '/',

    FindProduct: (query: string) => Routes.Root + 'products?search=' + query,
    ProductDetail: (slug: string) => Routes.Root + 'products/' + slug,
}

export default Routes
