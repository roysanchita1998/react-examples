import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function History({ historyList, todoList }) {
  return (
    <Box>
      <Grid item xs={12}>
        {historyList.length > 0 ? (
          <Box>
            {historyList?.map((ele) => {
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
                      <Checkbox
                        sx={{ margin: 0, padding: 0 }}
                        onClick={() => {
                          //   handleComplete(ele);
                        }}
                        checked={true}
                      />
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        ) : (
          <Typography variant="h4" component="h2" sx={{ color: "#c72c2c" }}>
            Please add todos.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default History;
