const ageUpAsync = (val) =>{
    return {type:'INC',value:val}
}

export const ageUp = (val) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(ageUpAsync(val))
        },5000)
    }
}

export const ageDown = (val) =>{
    return {type:'DEC',value:val}
}