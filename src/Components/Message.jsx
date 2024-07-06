export const Message=({msg,className,value=''})=>{
    const myclass= `${className} text-center`
    return (<h2 className={myclass}>{msg} {value}</h2>)
}