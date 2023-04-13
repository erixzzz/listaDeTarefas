import { CustomHeader } from "./TasksListStyles";
import Logo from "../assets/Logo.svg";
import { useForm } from "react-hook-form";
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

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Estudar React",
        isComplete: false,
    },
    {
        id: 2,
        title: "Estudar NextJS",
        isComplete: false,
    },
];

export function TasksList() {
    const { register, handleSubmit } = useForm();
    // const [tasks, setTasks] = useState<Task[]>([]);

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
                        variant="outlined"
                        {...register("newTask")}
                        sx={{
                            width: "100%",
                            maxWidth: "46rem",
                            backgroundColor: "#262626",
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
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
                            justifyContent: "space-between",
                            width: "100%",
                            margin: "0 auto",
                            marginTop: "2rem",
                        }}
                    >
                        <Typography sx={{ color: '#4EA8DE' }}>
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
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                                    }}
                                >
                                    <FormControl>
                                    <RadioGroup
                                        value={task.isComplete}
                                        onChange={(event) => console.log(event.target.value)}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="" />
                                    </RadioGroup>
                                    </FormControl>
                                    <Typography
                                    sx={{
                                        flexGrow: 1,
                                        marginLeft: "1rem",
                                    }}
                                    >
                                    {task.title}
                                    </Typography>
                                    <Button>
                                    <DeleteOutlineIcon />
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