import React from 'react';
import { EditText } from 'react-edit-text';
// import 'react-edit-text/dist/index.css';

export default function EditTextBox(){

    return(
    <React.Fragment>
        <EditText
            // name='TextBox'
            defaultValue='Click Edit Text'
            editButtonProps={{ style: { marginLeft: '5px', width: 16 } }}
            showEditButton
        />
    </React.Fragment>



    );
}