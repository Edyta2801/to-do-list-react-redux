import React from 'react';
import {connect} from 'react-redux';
import {TextField, RaisedButton, MenuItem, } from 'material-ui'
import Delete from 'material-ui/svg-icons/action/delete'

import  { addTask, updateAfterRemove, del, newText} from '../state/todolist'


const ToDoList = (props) => {
    return (
        <div>
            <TextField
                onChange={props.taskText}
                value={props.text}
                fullWidth={true}
                placeholder={'New Task'}
                name={'new-task'}


            />
            <RaisedButton
                onClick={props.addTask}
                primary={true}
                label={'Add task'}
                fullWidth={true}
                disabled={props.text ? false : true}
            />



            {props.tasks.map((el, i, arr) => (
            <MenuItem primaryText={el.text} rightIcon={<Delete
                onClick={() =>props.delTask(i)}
            />}
            /> ))
            }
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
        // changeToCompleted: dispatch(changeToCompleted()),
        delTask: (index) => {
            dispatch(del(index))
            dispatch(updateAfterRemove())
        },
        addTask: () => dispatch(addTask()),
        taskText: (ev, val) => dispatch(newText(val)),
        updateAfterRemove: () => dispatch(updateAfterRemove())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);
