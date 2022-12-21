import React, {useState} from 'react'


export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInput(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;
    let newData = {...data};
    newData[nameInput] = value;
    setData(newData);
  }

     function onSubmit(evt) {
    if (data.name.length === 0) return;
    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return(
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor= "name">
                Nombre
            </label>
            <input type="text" required value={data.name} name= "name" onChange={onInput} />
        </div>
        <div>
            <label htmlFor= "email">
                Email
            </label>
            <input type="email" required value={data.email} name= "email" onChange={onInput} />
        </div>
        <div>
            <label htmlFor= "phone">
                Teléfono
            </label>
            <input type="phone" required value={data.phone} name= "phone" onChange={onInput} />
        </div>
        <button disabled={data.name === "" || data.email === "" || data.phone === ""} type="submit">
        <button  >Finalizar Compra</button>   
        </button>
        
    </form>
  )    


}

