// import AcademyItem from "./AcademyItem";
export default function Academy(){

  const Academy =[
 
    {id:1,    name:'amer', dueDate:2024,LastDue:2022},
    {  id:2  ,  name:'alie', dueDate:2025,LastDue:2020 },
    {  id:3  , name:'ahmed', dueDate:2025,LastDue:2020 },
    {  id:4 ,name:'omer',dueDate:2025,LastDue:2020 }
    ]
    const myAcadmy=Academy.map((item)=>{
      return(
        <div key={item.id}><div>{item.name} </div><br/><div>{item.dueDate}</div><br/><div>{item.LastDue}</div><hr/></div>
      )
    });

    //const Academytems=Academy.map((item)=>{
  // if(Sideitem.name===''){  هنا ايظا يمكن استخدام if
  //   return null;}


return (
<div >  
{myAcadmy } 


 
</div> )} 