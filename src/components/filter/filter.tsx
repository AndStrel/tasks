import React from "react";
import { Button, ButtonGroup, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { setFilter } from "../../slices/filter/filterReducer";
import { clearCompleted } from "../../slices/todo/toDoReducer";

const Filter: React.FC = () => {
  const filter = useSelector((state: RootState) => state.filter.filter);
  const tasks = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    dispatch(setFilter(newFilter));
  };

  const activeTasksCount = tasks.filter((task) => !task.completed).length;
  const completeTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginY: 2 }}>
      <ButtonGroup variant="outlined" color="primary">
        <Button
          onClick={() => handleFilterChange("all")}
          variant={filter === "all" ? "contained" : "outlined"}
          data-cy="all-filter"
        >
          Все
        </Button>
        <Button
          onClick={() => handleFilterChange("active")}
          variant={filter === "active" ? "contained" : "outlined"}
          data-cy="active-filter"
        >
          Активные
          {activeTasksCount > 0 && (
            <Typography
              component="span"
              sx={{
                marginLeft: 1,
                width: "20px",
                height: "20px",
                fontSize: "0.8rem",
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "5px",
              }}
            >
              {activeTasksCount}
            </Typography>
          )}
        </Button>
        <Button
          onClick={() => handleFilterChange("completed")}
          variant={filter === "completed" ? "contained" : "outlined"}
          data-cy="completed-filter"
        >
          Выполненные
		  {completeTasksCount > 0 && (
            <Typography
              component="span"
              sx={{
                marginLeft: 1,
                width: "20px",
                height: "20px",
                fontSize: "0.8rem",
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "5px",
              }}
            >
              {completeTasksCount}
            </Typography>
          )}
        </Button>
      </ButtonGroup>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(clearCompleted())}
        data-cy="clear-button"
      >
        Удалить выполненные
      </Button>
    </Box>
  );
};

export default Filter;
