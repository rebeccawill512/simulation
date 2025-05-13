export default {
  // Define the folder to scan.
  input: '/home/projects/root-ca/md',
  // Define where to write the index file.
  output: './dist/hunch.json',
  // Property names of metadata to treat as "collections", like "tags" or "authors".
  facets: {
    // If it's just a flat string there's nothing to configure.
    series: true,
    // If it's more, like an array, you'll need to specify how Hunch
    // should treat the values. (See documentation for more details.)
    tags: {
      type: 'array',
    }
  },
  // All the facet fields are searchable by default, but you need
  // to specify additional searchable fields.
  searchableFields: [
    'title',
    'summary',
  ],
  // Fields that are not searchable that you want available for access
  // need to be specified. These fields are stored in the index JSON, but
  // not used by Hunch.
  storedFields: [
    'published',
  ],
}
