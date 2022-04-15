/* eslint-disable react/jsx-no-undef */
// bắt đầu component rfc, import imp, sd biến ush, sd lifecycle(b1: khai báo imp và biến useEffect
// b2: dùng esh)
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import InputTask from './component/InputTask';
import Todolist from './component/Todolist';
import Footer from './component/Footer';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [numberEdit, setnumberEdit] = useState(0);

useEffect(() => {
  feachData();
}, [])

const feachData = async() => {
  let result= await axios.get("https://625813300c918296a4911171.mockapi.io/listTask");
  setTodoList(result.data);
}


const onchageInput = (e) => {
  setInputValue(e.target.value);
}

const addTask = async() => {
  try {
    await axios.post("https://625813300c918296a4911171.mockapi.io/listTask/",{
      content: inputValue,
    });
    setInputValue('');
    feachData();
  } catch (error) {
    console.log("Lỗi API!");
  }
}

const deleteTask= async(id)=>{
  try {
    await axios.delete(`https://625813300c918296a4911171.mockapi.io/listTask/${id}`);
    feachData();
  } catch (error) {
console.log("Lỗi API!");
  }
}

const editTask = async(id) => {
  try {
    await axios.put(`https://625813300c918296a4911171.mockapi.io/listTask/${id}`,{
      content: `Edit lần ${numberEdit +1}`,
    });
    feachData();
    setnumberEdit(numberEdit +1);
  } catch (error) {
    console.log("Lỗi API!");
  }
}

const deleteAll = () => {
  setTodoList([]);
}


return(
  <div className="wrapper">
  {/* <!-- Header --> */}
  <div className="header"><h1>TodoApp_LuanNguyen</h1></div>
  {/* <!-- Input --> */}
  <InputTask inputValue={inputValue} onchageInput={onchageInput} addTask={addTask}/>
  {/* <!-- List task --> */}
  <Todolist todolist={todoList} deleteTask={deleteTask} editTask={editTask}/>
  {/* <!-- Footer --> */}
  <Footer todoList={todoList} deleteAll={deleteAll}/>
  </div>
)
}

export default App;
