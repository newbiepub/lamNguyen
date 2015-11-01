Author = new orion.collection('authors', {
  singularName: "authors", // The name of one of this items
  pluralName: "author", // The name of more than one of this items
  title: "AdminBio", // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: "AdminBio"
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'name', title: "name" },
        {data:'address',title:'Address'},
        {data:'phone',title:'phone'},
        {data:'facebook',title:'facebook'},
        {data:'email',title:'email'},
      orion.attributeColumn('image', 'image', 'Image'),
    ]
  }
});