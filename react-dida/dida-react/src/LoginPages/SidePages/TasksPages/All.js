import axios from "axios";
import useSWR from "swr";
import moment from "moment";
import ContentEditable from "react-contenteditable";
import { useImmer } from "use-immer";
import { useInput, useDiv } from "../../hooks";

export default function All(props) {
  let addTodoTitle = useInput();
  let addTodoDate = useInput(moment().format("YYYY-M-D"));
  let todoitem = {
    title: addTodoTitle.value,
    date: addTodoDate.value,
  };
  let date = useInput(addTodoDate.value.value);
  let title = useDiv("标题");
  let content = useDiv("描述");
  let [currentTodo, setCurrentTodo] = useImmer();

  // let [userDatas, setUserDatas] = useState([]);
  // useEffect(() => {
  //   axios.post("/userdata").then((res) => {
  //     // console.log(res.data);
  //     setUserDatas(res.data);
  //   });
  // }, []);
  const fetcher = (url) => axios.post(url).then((res) => res.data);

  const { data, error } = useSWR("/userdata", fetcher);

  if (error) return "failed to load";
  if (!data) return "loading";

  async function addtodo() {
    try {
      await axios.post("/addtodo", todoitem);
      //页面刷新
    } catch (e) {
      alert(e);
    }
  }
  // console.log(data);

  function extendContents(idx) {
    date.setValue(data[idx].date);
    title.setValue(data[idx].title);
    content.setValue(data[idx].content);
  }

  return (
    <div className="todosbar">
      <div className="todosmain">
        <h2>{props.tip}</h2>
        <div className="addtodo bar">
          <input
            type="text"
            placeholder="添加任务,回车即可保存"
            {...addTodoTitle.value}
            onKeyPress={(event) => {
              if (event.code === "Enter") addtodo();
            }}
            // onBlur={addtodo}
          />
          <input type="date" {...addTodoDate.value} />
        </div>
        <div className="todos">
          {data.filter(props.scope).map((todo, idx) => (
            <div
              className={`${currentTodo === idx ? "active" : ""} todobar`}
              key={todo.todoId}
            >
              <input type="checkbox" checked={todo.isDone} />
              <span
                className="title"
                onClick={() => {
                  setCurrentTodo(idx);
                  extendContents(idx);
                }}
              >
                {todo.title}
              </span>
              <span className="date">{todo.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="detail">
        <input type="date" className="date" {...date.value} />
        <ContentEditable className="title" {...title.value}></ContentEditable>
        <ContentEditable
          className="content"
          {...content.value}
        ></ContentEditable>
        <ContentEditable
          className="selection"
          html={"收集箱"}
        ></ContentEditable>
      </div>
    </div>
  );
}
