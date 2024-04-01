import React, { useContext, useState } from 'react';
import { AppContext  } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining ,currency} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000

    
      
      const handleBudgetChange = (e) => {
        const inputValue = e.target.value;
        const parsedValue = parseFloat(inputValue);

        if (!isNaN(parsedValue) && parsedValue >= 0) {
            const remainingBudget = budget - parsedValue;
            const validNewBudget = remainingBudget >= 0 ? parsedValue : budget;
            setNewBudget(validNewBudget);
        } else {
            setNewBudget(!isNaN(newBudget) && newBudget >= 0 ? newBudget : budget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>

    );
};
export default Budget;