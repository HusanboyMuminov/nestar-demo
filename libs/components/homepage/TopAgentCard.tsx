import React from "react";
import { Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
 return (
  <Stack className="top-agent-card">
   <img src="/img/profile/girl.svg" alt="agent" />

   <strong>Martin</strong>

   <Typography component="span"> Agent</Typography>
  </Stack>
 );
};

export default TopAgentCard;