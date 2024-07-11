import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import CustomCheckbox from "./CustomCheckbox";

function TodoList({ todoList, setTodoList, historyList, setHistoryList }) {
  const todoRef = useRef(null);
  const checkRef = useRef(null);
  const handleSave = () => {
   if(todoRef.current.value){
    setTodoList((oldArray) => [
        ...oldArray,
        { value: todoRef?.current.value, complete: false },
      ]);
      todoRef.current.value = "";
   }
  };
  const addInHistoryList=(todo, checkValue)=>{
    historyList.push(todo);
    let temp1 = [];
    historyList?.map((obj) => {
      if (obj.value == todo.value) {
        temp1.push({ value: obj.value, complete: checkValue });
      } else {
        temp1.push(obj);
      }
    });
    return temp1;

  }
  const handleComplete = (todo, checkValue) => {
    //if checkvalue true then inser into history array and viceversa
    if (checkValue) {
     
      setTimeout(() => {
        console.log("call from settimeout");
        setHistoryList(addInHistoryList(todo, checkValue));
      },10000);
    } else {
      let temp1 = [];
      historyList?.map((obj) => {
        if (obj.value == todo.value) {
          // temp.push({value:obj.value,complete:checkValue})
        } else {
          temp1.push(obj);
        }
      });
      setHistoryList(temp1);
    }

    let temp = [];
    todoList?.map((obj) => {
      if (obj.value == todo.value) {
        temp.push({ value: obj.value, complete: checkValue });
      } else {
        temp.push(obj);
      }
    });
    setTodoList(temp);
    console.log(todoList);
  };
  return (
    <Box>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputRef={todoRef}
                sx={{ width: 500 }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ height: 54, backgroundColor: "#c72c2c" }}
                onClick={handleSave}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* <Box > */}
          {todoList?.map((ele) => {
            return (
              <Card
                key={ele.value}
                sx={{
                  maxWidth: 550,
                  margin: "6px",
                  border: "1px solid black",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" color="black">
                    {ele.value}
                  </Typography>
                  <Box>
                    <CustomCheckbox
                      defaultValue={ele}
                      callback={handleComplete}
                    />
                    {/* <Checkbox
                      inputRef={checkRef}
                        sx={{ margin: 0, padding: 0 }}
                        onClick={() => {
                          handleComplete(ele,checkRef?.current.checked,checkRef);
                        }}
                        defaultChecked={ele.complete}
                      /> */}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default TodoList;
