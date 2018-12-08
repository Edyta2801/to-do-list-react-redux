import React from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton, MenuItem } from 'material-ui';
import { add, del, newText, toggle } from '../state/todolist'



const ToDoList = (props) => {
    return (
        <div>
            <TextField
                onChange={props.taskText}
                value={props.text}
            />
            <RaisedButton
                label='addTask'
                onClick={props.addTask} />

           {props.tasks.map((el, i, arr) => 
            (<MenuItem primaryText={el.text} onClick={() => {props.delTask(i)}}/> ))}
        </div>
    );
}







function mapStateToProps(state) {
    return {
        text: state.todolist.text,
        tasks: state.todolist.tasks
    };
}







function mapDispatchToProps(dispatch) {
    return {
        delTask: (index) => dispatch(del(index)),
        addTask: () => dispatch(add()),
        taskText: (ev, val) => dispatch(newText(val)),
        toggleTask: (index) => dispatch(toggle(index))
    };
}







export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);