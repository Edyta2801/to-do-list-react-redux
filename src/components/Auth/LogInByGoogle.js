import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
 const LogInByGoogle = (props) => (
    <div>
        <RaisedButton
            label={'Log in by Google!'}
            secondary={true}
            onClick={props.onLogInHandler}
            fullWidth={true}
            style={{ margin: '30px 0' }}
        />
    </div>
)
 export default LogInByGoogle
