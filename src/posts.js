// import React from 'react';
// import { List, Datagrid, TextField } from 'react-admin';

// export const PostList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );

// import React from 'react';
// import { List, Datagrid, TextField, EmailField, ReferenceField } from 'react-admin';

// export const PostList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <ReferenceField label="User" source="userId" reference="users">
//                 <TextField source="name" />
//             </ReferenceField>
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );

import React from 'react';
import { 
    Filter,
    List, 
    Edit, 
    Create, 
    Datagrid,
    ReferenceField, 
    TextField, 
    EditButton, 
    DisabledInput, 
    LongTextInput, 
    ReferenceInput, 
    SelectInput, 
    SimpleForm, 
    TextInput 
    } from 'react-admin';


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);