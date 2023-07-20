export const getYear=(date)=>{

    const year=date?.split('-')[0]
    return year

}
export const getDate=(date)=>{
    const dateArray=date?.split('-')
    const year=dateArray[0]
    const month=dateArray[1]
    const day=dateArray[2]

    return (`${day}/${month}/${year}`)
}