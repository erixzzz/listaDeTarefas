import { CustomHeader } from "./TasksListStyles";
import Logo from "../assets/Logo.svg";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Box, Button, FormControl, List, ListItem, ListItemText, Typography } from "@mui/material";

export function TasksList() {
    const { register, handleSubmit } = useForm();

    function handleCreateNewTask(data: any) {
        console.log(data);
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
                    onSubmit={handleSubmit(handleCreateNewTask)}
                >
                    <TextField
                        label="Adicionar nova tarefa"
                        variant="outlined"
                        {...register("newTask")}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Adicionar
                    </Button>
                </FormControl>
                <Box>
                    <Box>
                        <Typography>
                            Tarefas Criadas
                        </Typography>
                        <Typography>
                            Concluídas
                        </Typography>
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="Single-line item" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Single-line item" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}