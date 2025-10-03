
import React from "react";


const Exchanges = ()=>{

    const row = ["A","B","C","D","E","F","G","H"]
    const col = [1,2,3,4,5,6,7,8]


    return(
        <div>
            Exchanges


            <div>
                {row.map((item,index)=>(

                    <div key={item} className="border border-blue-800 bg-blue-400 w-8 h-8">
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exchanges