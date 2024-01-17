import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentsIcon from "@mui/icons-material/Payments"
import { amber, deepPurple, pink } from "@mui/material/colors"
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material"

const kpiData = [
  {
    id: 1,
    title: "sales",
    amount: "$16900",
    icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
    bgColor: deepPurple[100],
    color: deepPurple[700],
  },
  {
    id: 2,
    title: "profit",
    amount: "$16900",
    icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
    bgColor: pink[100],
    color: pink[700],
  },
  {
    id: 3,
    title: "purchases",
    amount: "$16900",
    icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
    bgColor: amber[100],
    color: amber[700],
  },
]

const KPI = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      {kpiData.map((item) => (
        <Paper key={item.id} elevation={10} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",p:2, gap:2}}>
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: "70px",
              height: "70px",
            }}
          >
            {item.icon}
          </Avatar>

   <Box>
   <Typography variant="button">{item.title}</Typography>
   <Typography variant="h5">{item.amount}</Typography>
   </Box>
    
        </Paper>
      ))}
    </Stack>
  )
}

export default KPI
