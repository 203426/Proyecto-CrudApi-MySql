import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import './custom.scss';



function App() {
  const [nombre, setNombre] = useState('');
  const [num, setNum] = useState('');
  //const [id, setId] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [updateNum, setUpdateNum]=useState('');

  useEffect(()=>{
    Axios.get('http://localhost:8080/api/get').then((response)=>{
      setUsuarios(response.data)
    }) 


  },[])

  const submitForm = ()=>{
    Axios.post('http://localhost:8080/api/insert',{
      nombre:nombre, 
      num:num,
    })
      setNombre('hola');
      setNum('');
      setUsuarios([...usuarios,{
        nombre:nombre,
        num:num
        
      },]);
      
  };

  const deleteUsuario=obj=>
  Axios.delete(`http://localhost:8080/api/delete/${obj}`);

  const updateUsuario=(id)=>{
    Axios.put("http://localhost:8080/api/update",{
      id:id,
      num:updateNum
    });
    setUpdateNum('');
  }


  return (
    <div className="App ">
      <nav class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand mx-auto">Conectate con nosotros</a>
      </nav>

      <h3 class="pt-4 pb-4">Mandanos tus datos para contactarte  </h3>

      <div class="container ">

        
        <div class="row justify-content-center">
        <div class="col-5  ">
          <div class="form-group " >
            <input  type="text" class="form-control " name="nombre"  placeholder="Nombre" onChange={(e)=>{setNombre(e.target.value)}} />
          </div>
        
          <div class="form-group">
            <input  type="text" class="form-control " name="num" placeholder="Numero"onChange={(e)=>{setNum(e.target.value)}} />
          </div>
          <div>
            <button onClick={submitForm} class="btn btn-primary " >Submit</button>
          </div>
          
        </div>
        </div>
        

        

        <div class="container bg-success" >
              <div class="row ">
                <div class=" text-center">
                  <table class="table table-striped">
                      <tr>
                          <th>ID</th>
                          <th>Nombre</th>
                          <th>Numero</th>
                          <th>Ajustes <br/> *El espacio en blanco y precionar botón update: actualiza num*</th>
                      </tr>
                      {usuarios.map((val)=>{
                        return (
                          <tr>
                            <td>{val.id}</td>
                            <td>{val.nombre}</td>
                            <td>{val.num}</td>
                            <button onClick={()=>{deleteUsuario(val.id)}}>Delete</button>
                            <input placeholder="Nuevo numero" type="text"class="mt-4 mb-4" onChange={(e)=>{
                              setUpdateNum(e.target.value)
                            }} />
                            <button onClick={()=>{updateUsuario(val.id)}}>Update</button>
                          </tr>
                        
                        )

                      })}
                  </table>
      
                </div>
              </div>
            </div>

        


      </div>
      
    </div>
  );
}

export default App;
