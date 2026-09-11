import {rules, createComparison, } from "../lib/compare.js";

export function initSearching(searchField) {
    const searchCompair = createComparison(['skipEmptyTargetValues'], [rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)]);

    return (data, state) => {
        return data.filter(row => searchCompair( row,  state))
    }
}