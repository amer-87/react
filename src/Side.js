import { useState } from "react"


export default function Side() {
  const [name,setname]=useState(1)

const increas=()=>{
  setname(name+1)
}
const discreas=()=>{
  setname(name-1)
}
const deleat =()=>{
  setname(0)
}

return (
<>  
<div className="side">   
<button onClick={increas}>+</button> <h1>{name}</h1>
<button onClick={discreas}>-</button>
</div>
<button style={{textAlign:'center'}} onClick={deleat}>deleat</button>

  </>
)

}






