import { useEffect, useState } from 'react';




export default function Center() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [dataList, setDataList] = useState([]);

  // تحميل البيانات من localStorage عند أول تشغيل
  useEffect(() => {
    const savedData = localStorage.getItem('clinicData');
    if (savedData) {
      setDataList(JSON.parse(savedData));
    }
  }, []);
 


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.age.trim()) {
      alert('الرجاء ملء جميع الحقول');
      return;
    }
    const newDataList =[...dataList,form]
    setDataList(newDataList )
    localStorage.setItem('clinicData', JSON.stringify(newDataList));
    setForm({name:'',email:'',age:''});
  }


  // دالة لحذف كل البيانات
  const handleDeleteAll = () => {
    if (window.confirm('هل أنت متأكد من حذف جميع البيانات؟')) {
      setDataList([]);
      localStorage.removeItem('clinicData');
    }
  };


  const handleDeleteItem = (index) => {
    const updatedList = dataList.filter((_, i) => i !== index);
    setDataList(updatedList);
    localStorage.setItem('clinicData', JSON.stringify(updatedList));
  };
  



  const mylist = dataList.map((item, index) => (
    <ul key={index}>
      <li>الاسم: {item.name}</li>
      <li>البريد الإلكتروني: {item.email}</li>
      <li>العمر: {item.age}</li>
      <button onClick={() => handleDeleteItem(index)}>del</button>
      <hr />
    </ul>
  ));




  return (
  <>
  <form onSubmit={handleSubmit}>
    <div>  <label>name</label>
<input type='text' value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>  </div>

<div>  <label>Email</label>
<input type='Email' value={form.email} onChange={(e)=>setForm ({...form, email :e.target.value})}/>  </div>

<div>  <label>Age</label>
<input type='number'value={form.age} onChange={(e)=>setForm({...form , age:e.target.value})}/></div>

<button type='submit'>submit</button>
  </form>
  {mylist}

  
  {dataList.length > 0 && (
        <button onClick={handleDeleteAll} style={{ background: 'red', color: 'white', marginTop: '10px' }}>
          حذف الكل
        </button>
        
      )}
      {dataList.length >=2 && (<button>counter</button>)}
  </>
  )};

