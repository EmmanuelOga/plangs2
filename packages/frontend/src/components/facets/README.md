# Facet components

* FacetMain: define groups of facets per entity (plangs, apps, libraries, tools, etc.). Builds a nav and an area to display groups.
    * FacetGroup: a group consists of a title and a series of entries.
        * FacetBool: handles bi-modal inputs.
        * FacetText: simple text search input.
        * FacetMulti: simple text search input, but more than one input is allowed.
        * FacetTable: handles rows of entries with a count of matches. 1 or more selections, all or any can be matched.