import { CustomHeader } from "./TasksListStyles";
import Logo from "../assets/Logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useState } from "react";
import { Checkbox } from "@mui/material";

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TasksList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleCreateNewTask() {
        if (task === '') {
            return;
        }

        const newTask = {
            id: Math.random(),
            title: task,
            isComplete: false,
        }

        tasks.push(newTask);
        setTask('');
    }

    function deleteTask(id: number) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    function handleTaskCompletion(id: number) {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isComplete: !task.isComplete } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <Box>
            <CustomHeader>
                <img 
                    src={Logo} 
                    alt="Logo"
                />
            </CustomHeader>
            <Box>
                <FormControl
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "1rem",
                        marginTop: "-2rem",
                    }}
                >
                    <TextField
                        label="Adicionar nova tarefa"
                        variant="filled"
                        onChange={(event) => setTask(event.target.value)}
                        sx={{
                            width: "100%",
                            maxWidth: "46rem",
                            backgroundColor: "#262626",
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        InputProps={{
                            sx: {
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleCreateNewTask}
                    >
                        Adicionar
                    </Button>
                </FormControl>
                <Box
                    sx={{
                        width: "55%",
                        margin: "0 auto",
                        marginTop: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Typography sx={{ color: '#4EA8DE', flex: 1 }}>
                            Tarefas Criadas
                        </Typography>
                        <Typography sx={{ color: '#8284FA' }}>
                            Concluídas
                        </Typography>
                    </Box>
                    <Divider sx={{
                        marginTop: "2rem",
                    }}
                    />
                    {tasks.length === 0 ? (
                        <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#8284FA",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          Nenhuma tarefa criada
                          <br />
                          Crie uma tarefa para começar
                        </Typography>
                      </Box>                      
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "2rem",
                                gap: "0.5rem",
                            }}
                        >
                            {tasks.map((task) => (
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "0.5rem",
                                    backgroundColor: "#333333",
                                    borderRadius: "0.4rem",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                                    }}
                                >
                                    <Radio
                                        checked={task.isComplete}
                                        onChange={() => handleTaskCompletion(task.id)}
                                    />
                                    <Typography
                                        sx={{
                                            flexGrow: 1,
                                            marginLeft: "1rem",
                                            textDecoration: task.isComplete ? 'line-through' : 'none',
                                            opacity: task.isComplete ? 0.5 : 1.0,
                                        }}
                                    >
                                        {task.title}
                                    </Typography>
                                    <Button
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <DeleteOutlineIcon 
                                            sx={{color: '#808080'}}
                                        />
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    )}        
                </Box>
            </Box>
        </Box>
    )
}