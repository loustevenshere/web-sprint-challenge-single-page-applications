import React from 'react';

const Pizza = (props) => {
    const {formValues, change, submit, errors, disabled} = props;

    const onChange = (evt) => {
        const { name, value, type, checked, } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

  
    return (
        <>
        <h1>Pizza Order</h1>
        <form onSubmit={submit}>
            {/* Form errors */}
            <div>{errors.name}</div>
            {/* Name */}
            <label className='name'>
                Name:
                <input type='text' name='name' onChange={onChange} value={formValues.name} />
            </label>
            {/* Pizza Size */}
            <label className='pizza-size'>
                Pizza Size:
                <select name='size' value={formValues.size} onChange={onChange}>
                    <option value=''>----Pick your Pizza Size----</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='x-large'>X-Large</option>
                </select>
            </label>
            {/* Checkboxes for toppings */}
            {/* Checked input attribute must be either true or false */}
            <label>
                Sausage
                <input type='checkbox' name='sausage' checked={formValues.sausage} onChange={onChange} />
            </label>
            <label>
                Pepperoni
                <input type='checkbox' name='pepperoni' checked={formValues.pepperoni} onChange={onChange} />
            </label>
            <label>
                Mushrooms
                <input type='checkbox' name='mushrooms' checked={formValues.mushrooms} onChange={onChange} />
            </label>
            <label>
                Pineapple
                <input type='checkbox' name='pineapple' checked={formValues.pineapple} onChange={onChange} />
            </label>
            {/* Special instructions */}
            <label>
                Special Instructions:
                <input type='text' name='instructions' value={formValues.instructions} onChange={onChange} />
            </label>
            {/* Submit button *add disabled slice of state here */}
            <button disabled={disabled}>Add to order</button>
        </form>
        </>
    )
}

export default Pizza