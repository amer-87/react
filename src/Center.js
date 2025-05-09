import { useState, useEffect } from 'react';

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

  // التحقق من صحة البريد الإلكتروني
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.age.trim()) {
      alert('الرجاء ملء جميع الحقول');
      return;
    }
    if (!emailPattern.test(form.email)) {
      alert('الرجاء إدخال بريد إلكتروني صالح');
      return;
    }

    const newDataList = [...dataList, form];
    setDataList(newDataList);
    localStorage.setItem('clinicData', JSON.stringify(newDataList));

    setForm({ name: '', email: '', age: '' });
  };

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>الاسم</label>
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>

        <div>
          <label>البريد الإلكتروني</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>

        <div>
          <label>العمر</label>
          <input type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
        </div>

        <button type="submit">إرسال</button>
      </form>

      <div>
        {dataList.map((item, index) => (
          <ul key={index}>
            <li>الاسم: {item.name}</li>
            <li>البريد الإلكتروني: {item.email}</li>
            <li>العمر: {item.age}</li>
            <button onClick={() => handleDeleteItem(index)}>حذف</button>
            <hr />
          </ul>
        ))}
      </div>

      {dataList.length > 0 && (
        <button onClick={handleDeleteAll} style={{ background: 'red', color: 'white', marginTop: '10px' }}>
          حذف الكل
        </button>
      )}

      {dataList.length >= 2 && <button>إحصاء</button>}
    </>
  );
}
