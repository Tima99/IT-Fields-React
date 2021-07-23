
import "./clock.css"

//  Learn about what is component : 
//**    Note: Always start component names with a capital letter. like here Clock
//*     Components in React basically return a piece of JSX code 
//*     that tells what should be rendered on the screen 
//  Learn how to use css :
//*     import css
//*     Add className as attr to ele to add class
//  Learn about what is jsx :
//*     const ele = <h1 className="cls" >JSX{2 + 2}</h1>;  
//*     you use curly braces to write js 
//*     attr syntax uses camelCase e.g., class is reserved word so used as className , tagindex in html becomes tagIndex in jsx


const Clock = ()=>{
    return(
        <>
            <div className="container">
                <div className="web-name">Digital clock</div>
                <h1 className="time">
                    {new Date().toLocaleTimeString()}
                </h1>
            </div>
        </>
    );

}

export default Clock;