import React, {useState, useRef} from 'react';
import styles from './styles';
import {
    View,
    Text,
    TextInput, 
    TouchableWithoutFeedback, 
    FlatList, 
    Keyboard,
} from 'react-native';

const ListItem = ({ navigation}) => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [key, setKey] = useState();
    const inputRef = useRef(null);
    const handleAdd = () => {
        if(task.trim()){
        setTasks([...tasks, task]);
        setTask('');
    }

    if(key !== ''){
    const taskIndex = tasks.findIndex(item => item === key)
    let taskClone = tasks;
    taskClone[taskIndex] = task;
    setTasks([...taskClone]);
    }

    Keyboard.dismiss();
    setTask('');
    setKey('');
    return;
}

    const deleteTask = (item) => {
        let taskDelete = [...tasks];
        taskDelete.splice(item, 1);
        setTasks(taskDelete);
    }

    const editTasks = (item) => {
        setKey(item);
        setTask(item);
        inputRef.current.focus();
    }

    const handleRenderItem = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item}</Text>
                <View>
                    <TouchableWithoutFeedback key={item} onPress={() => editTasks(item)}>
                        <Text>Editar</Text>
                    </TouchableWithoutFeedback>
                </View>
                    <View style={styles.itemDelete}>
                        <TouchableWithoutFeedback key={item} onPress={() => deleteTask(item)}>
                            <View style={styles.iconDelete}/>
                        </TouchableWithoutFeedback>
                    </View>
            </View>
        )
    };
 
 return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista To do</Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.field}
                placeholder='item'
                autoCapitalize='none'
                autoCompleteType='off'
                autoCorrect={false}
                onChangeText={text => setTask(text)} 
                value={task}
                ref={inputRef}
            />
        <TouchableWithoutFeedback onPress={handleAdd}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
            <View style={styles.itemView}>
                <FlatList 
                    data={tasks}
                    keyExtrator={item => item} 
                    renderItem={handleRenderItem}
                /> 
            </View>
        </View>
);
};

export default ListItem;