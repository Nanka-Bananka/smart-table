import {createComparison, defaultRules} from "../lib/compare.js";

const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
    Object.keys(indexes)                                    
      .forEach((elementName) => {                      
        elements[elementName].append(                    
            ...Object.values(indexes[elementName])        
                      .map(name => {     
                        const opt = document.createElement("option");
                        opt.value = name;
                        opt.textContent = name;     
                        return opt    
                      })
        )
     })
    return (data, state, action) => {
        if (action.name === "clear"){
            const fieldName = action.dataset.field;
            const prnt = action.parentElement;
            const input = prnt.querySelector(`[name="${fieldName}"]`);
            input.value = '';
            state[fieldName] = '';
            
        }
        return data.filter(row => compare(row, state));
    }
}