 //import any css files you use
 
 export default function PersonCard({name, title}){ //takes in the props name & title
    //this reuseable component should look really simple/condense
    return(
        <div>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    )
 };