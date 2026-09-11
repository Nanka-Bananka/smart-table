import {rules, createComparison} from "../lib/compare.js";



export function initSearching(searchField) {
    
   createComparison(searchField);

    return (data, state, action) => {
        return data.filter(rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false))
    }
}