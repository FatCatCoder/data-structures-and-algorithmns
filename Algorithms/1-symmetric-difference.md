# definition
    Symmetric difference is a set comprised of the unique items of two or more arrays.

    ### requirements 
    take in unknown number of arrays, return the unique values from all arrays

    ## Pseudocode
      - spread all number of unknown arguments to array
      - reduce array to a single array of unique values using a callback
      - callback takes two inner arrays and filters out matching items, 
        checks both from array 1 to array 2 and reversed from array 2 to array 1 and merges the results
      - returns a new set from the value of the reduced array
