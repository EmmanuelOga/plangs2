# Plangs Auxiliar Code

## Array

Helpers to work with Arrays: merge elements without duplication, delete in place, etc.

## Filter

A wrapper around a set of values to allow checking if "all" or "any" of the elements match a predicate.

## Graph

A simple directed graph implementation, the foundation of the data model used in Plangs!

## IterTap and MapTap

Classes to wrap maps and arrays that are potentially indefined, so we can still map and get their size, etc.
Used to handle Graph relationships and to wrap array data elements of nodes.

## Map2

Like a regular Map, but can index by two dimensions instead of just one.

## Value

Wrapper for values that can be "blank". Useful to serialize data, but only the elements that are not blank or empty.
Used for serialization of the facets/search state.