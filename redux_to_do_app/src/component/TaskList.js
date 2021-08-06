import { useSelector, useDispatch } from "react-redux";

const TaskList = (props) => {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch()

    let pendingTask = list.filter( task => task.status === "Pending") 
    let doneTask = list.filter( task => task.status === "Done") 

    console.log(list)
    return(
        <> 
            <div className="ToDo">
                {pendingTask.length !== 0 ? (<p className="Header">Pending Tasks</p>) : <h2>NO PENDING TASK</h2>}
                <div className="TaskList">
                    {pendingTask.map(item => 
                        <>
                            <div className="TaskListSub">
                                <strong key={item.id}>{item.name}  </strong>
                            </div>
                            <div className="Button">
                                <button onClick={() => dispatch({type: 'CHANGE_PENDING_TO_DONE', payload: item.id}) }>✅</button>
                                <button onClick={() => dispatch({ type: 'REMOVE_FROM_LIST', payload: item.id}) }>🗑️</button>
                            </div>

                        </>)}
                </div>
            </div>
            <div className="ToDo">
                {doneTask.length !== 0 ? (<p className="Header">Completed Tasks</p>) : <h2>NO TASK COMPLETED!</h2>}
                <div className="TaskList">  
                    {doneTask.map(item => 
                        <>
                            <div className="TaskListSub">
                                <strong key={item.id}>{item.name}  </strong>
                            </div>
                            <div className="Button">
                                <button onClick={() => dispatch({ type: 'REMOVE_FROM_LIST', payload: item.id}) }>🗑️</button>
                            </div>
                        </>
                        )}
                </div>
            </div>
        </>
        
        
    )
}

export default TaskList;