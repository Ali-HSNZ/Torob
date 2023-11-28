const Routes = {
    Root: '/',

    // @Segment: Search Product
    FindProduct: (query: string) => Routes.Root + 'products?search=' + query,
}

export default Routes
