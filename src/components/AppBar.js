import React from 'react'
import {connect} from 'react-redux';
import MuiAppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {logOut} from "../state/auth";

const AppBar = (props) => {
    return (
        <div>
            <MuiAppBar
                onLeftIconButtonClick={props.open}
                iconStyleLeft={{display: 'none'}}
                iconElementRight={<IconButton><NavigationClose/></IconButton>}
                onRightIconButtonClick={props.logOut}

            />
        </div>
    );
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut())
    }

    };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBar);