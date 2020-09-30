export const changedValues=(value,index,key,prevArray)=>{
    let newArray =[...prevArray]
    newArray[index][key]=value
    return newArray
}