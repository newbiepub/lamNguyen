/**
 * Created by lam on 01/11/2015.
 */
Descriptions = new orion.collection('descriptions', {
    singularName: "descriptions", // The name of one of this items
    pluralName: 'description', // The name of more than one of this items
    title: 'Mô Tả Trang', // The title of the page
    link: {
        /**
         * The text that you want to show in the sidebar.
         * The default value is the name of the collection, so
         * in this case is not necesary
         */
        title: "Mô tả trang"
    },
    /**
     * Tabular settings for this collection
     */
    tabular: {
        columns: [
            { data: 'popular', title: "popular" },
            {data:'recent' ,title:'recent'},
            {data:'cartsdesc',title:'carts desc'}
        /**
         * If you want to show a custom orion attribute in
         * the index table you must call this function
         * orion.attributeColumn(attributeType, key, label)
         */
        ]
    }
});
