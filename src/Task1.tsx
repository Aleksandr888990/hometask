import { Button, Grid } from "@mui/material";
import { useState } from "react";

function Task1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const onIncrementClick1 = () => {
    setCount1(count1 + 1);
  };

  const onIncrementClick2 = () => {
    setCount2(count2 + 1);
  };
  const onIncrementClick3 = () => {
    setCount3(count3 + 1);
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ marginTop: "100px", marginBotton: "100px", alignItems: "center" }}
    >
      <Button size="large" onClick={onIncrementClick1}>
        change count ({count1})
      </Button>
      <Button size="large" onClick={onIncrementClick2}>
        change count ({count2})
      </Button>
      <Button size="large" onClick={onIncrementClick3}>
        change count ({count3})
      </Button>
    </Grid>
  );
}

export default Task1;