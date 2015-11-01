Categories = new orion.collection('categories', {
  singularName: "categories", // The name of one of this items
  pluralName: 'category', // The name of more than one of this items
  title: 'Loại Sản Phẩm', // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: "Loại Sản Phẩm"
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'name', title: "name" },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('posts.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
    ]
  }
});
