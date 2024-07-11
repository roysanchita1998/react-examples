import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TodoList from "./TodoBody";
import History from "./History";

export default function CustomeTab() {
  const [value, setValue] = React.useState("1");
  const [todoList, setTodoList] = React.useState([]);
  const [historyList, setHistoryList] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Todo list" value="1" />
            <Tab label="History" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            historyList={historyList}
            setHistoryList={setHistoryList}
          />
        </TabPanel>
        <TabPanel value="2">
          <History historyList={historyList} todoList={todoList}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
